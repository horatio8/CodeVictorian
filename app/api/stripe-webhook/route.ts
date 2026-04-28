import { NextResponse } from "next/server"
import Stripe from "stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const STRIPE_API_VERSION = "2025-02-24.acacia" as const

// Stripe webhook receiver.
//
// Required env vars (Vercel → Settings → Environment Variables):
//   STRIPE_SECRET_KEY      sk_live_… (or sk_test_…)
//   STRIPE_WEBHOOK_SECRET  whsec_…
//
// Stripe Dashboard setup:
//   1. https://dashboard.stripe.com/webhooks → "Add endpoint"
//   2. Endpoint URL: https://<your-domain>/api/stripe-webhook
//   3. Listen to events:
//        - checkout.session.completed
//        - checkout.session.async_payment_succeeded
//        - checkout.session.async_payment_failed
//        - customer.subscription.created
//        - customer.subscription.updated
//        - customer.subscription.deleted
//        - invoice.payment_failed
//   4. After creating, copy the "Signing secret" (whsec_…) and paste
//      into Vercel as STRIPE_WEBHOOK_SECRET.
//
// We DO NOT trust the success_url redirect — it can be missed if the
// browser closes mid-checkout. The webhook is the source of truth.

export async function POST(req: Request) {
  const secret = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!secret || !webhookSecret) {
    console.error("[stripe-webhook] missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET")
    // Return 500 so Stripe retries until we configure the env.
    return new NextResponse("Stripe not configured", { status: 500 })
  }

  const signature = req.headers.get("stripe-signature")
  if (!signature) {
    return new NextResponse("Missing stripe-signature header", { status: 400 })
  }

  // CRITICAL: signature verification requires the *raw* request body.
  // Never JSON.parse before constructEvent.
  let rawBody: string
  try {
    rawBody = await req.text()
  } catch (err) {
    console.error("[stripe-webhook] failed to read body", err)
    return new NextResponse("Could not read request body", { status: 400 })
  }

  const stripe = new Stripe(secret, { apiVersion: STRIPE_API_VERSION })

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown"
    console.error("[stripe-webhook] signature verification failed:", message)
    return new NextResponse(`Webhook signature verification failed: ${message}`, { status: 400 })
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        console.info("[stripe-webhook] checkout.session.completed", {
          id: session.id,
          mode: session.mode,
          amount_total: session.amount_total,
          currency: session.currency,
          customer_email: session.customer_details?.email ?? session.customer_email,
          payment_status: session.payment_status,
          metadata: session.metadata,
        })
        // Hook for future Campaign Nucleus / Supabase sync goes here.
        // For now we just log — Stripe Dashboard remains the system of record.
        break
      }
      case "checkout.session.async_payment_succeeded": {
        const session = event.data.object as Stripe.Checkout.Session
        console.info("[stripe-webhook] async payment succeeded", { id: session.id })
        break
      }
      case "checkout.session.async_payment_failed": {
        const session = event.data.object as Stripe.Checkout.Session
        console.warn("[stripe-webhook] async payment failed", {
          id: session.id,
          last_payment_error: session.payment_intent,
        })
        break
      }
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice
        console.warn("[stripe-webhook] invoice.payment_failed", {
          id: invoice.id,
          customer: invoice.customer,
          attempt_count: invoice.attempt_count,
        })
        break
      }
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription
        console.info(`[stripe-webhook] ${event.type}`, {
          id: sub.id,
          status: sub.status,
          customer: sub.customer,
        })
        break
      }
      default:
        // Unhandled event types are fine — Stripe will retry only on
        // non-2xx responses, and we want to always 2xx if signature
        // verified, even for events we don't care about.
        console.info("[stripe-webhook] unhandled event type:", event.type)
    }
  } catch (err) {
    // If our handler throws, Stripe will retry. Log and surface 500 so
    // the retry actually fires.
    console.error("[stripe-webhook] handler error for", event.type, err)
    return new NextResponse("Handler error", { status: 500 })
  }

  return new NextResponse("ok", { status: 200 })
}
