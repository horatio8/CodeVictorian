import { NextResponse } from "next/server"
import Stripe from "stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const STRIPE_API_VERSION = "2025-02-24.acacia" as const

// Verifies a Stripe Checkout session id and returns whether the user
// actually paid. The /donate page calls this after Stripe redirects
// back so we don't render "Thank you" if someone forges the URL.

export async function GET(req: Request) {
  const secret = process.env.STRIPE_SECRET_KEY
  if (!secret) {
    return NextResponse.json({ paid: false, error: "Stripe not configured" }, { status: 503 })
  }

  const url = new URL(req.url)
  const sessionId = url.searchParams.get("session_id")
  if (!sessionId) {
    return NextResponse.json({ paid: false, error: "Missing session_id" }, { status: 400 })
  }
  // Defensive: only accept Stripe-shaped ids.
  if (!/^cs_(test|live)_[A-Za-z0-9]+$/.test(sessionId) || sessionId.length > 200) {
    return NextResponse.json({ paid: false, error: "Invalid session_id" }, { status: 400 })
  }

  const stripe = new Stripe(secret, { apiVersion: STRIPE_API_VERSION })

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    const paid =
      session.payment_status === "paid" ||
      session.payment_status === "no_payment_required" ||
      session.status === "complete"

    return NextResponse.json({
      paid,
      mode: session.mode,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_email: session.customer_details?.email ?? session.customer_email ?? null,
    })
  } catch (err) {
    console.error("[checkout/verify] retrieve failed", err)
    return NextResponse.json({ paid: false, error: "Could not verify session" }, { status: 502 })
  }
}
