import { NextResponse } from "next/server"
import Stripe from "stripe"
import {
  PRESET_AMOUNTS,
  SUPPORTED_CURRENCIES,
  type Currency,
  type Frequency,
} from "@/lib/donate-config"
import { getDonatePage } from "@/lib/cms"

const FALLBACK_PRODUCT_DESCRIPTION =
  "Supports the fight to keep Europe for native Europeans."

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Pin the Stripe API version so Stripe can't change behaviour out from
// under us. Bump explicitly when we deliberately upgrade.
const STRIPE_API_VERSION = "2025-02-24.acacia" as const

type CheckoutBody = {
  currency: Currency
  amount: number // major units, e.g. 65 for €65 — never cents
  frequency: Frequency
  /** Optional — emailed receipts go here when present. Stripe also
   *  collects email on the hosted page; this just pre-fills it. */
  email?: string
  /** Optional — internal correlation id (e.g. petition session id) */
  correlationId?: string
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 })
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  const secret = process.env.STRIPE_SECRET_KEY
  if (!secret) {
    return NextResponse.json(
      {
        error:
          "Stripe is not configured on this deployment. Set STRIPE_SECRET_KEY in the Vercel environment variables.",
      },
      { status: 503 },
    )
  }

  let body: CheckoutBody
  try {
    body = (await req.json()) as CheckoutBody
  } catch {
    return badRequest("Invalid JSON body.")
  }

  const { currency, amount, frequency } = body
  if (!SUPPORTED_CURRENCIES.includes(currency)) {
    return badRequest(`Unsupported currency. Use one of ${SUPPORTED_CURRENCIES.join(", ")}.`)
  }
  if (!Number.isFinite(amount) || amount < 1 || amount > 100_000) {
    return badRequest("Amount must be between 1 and 100000.")
  }
  if (frequency !== "once" && frequency !== "monthly") {
    return badRequest("Frequency must be 'once' or 'monthly'.")
  }

  // Soft min/max guard — keep within preset range or 5–10000.
  const allowedAmounts = PRESET_AMOUNTS[currency]
  if (!allowedAmounts.includes(amount) && (amount < 5 || amount > 10_000)) {
    return badRequest("Amount out of allowed range.")
  }

  const email = (body.email ?? "").trim().toLowerCase()
  const validEmail = email && EMAIL_RE.test(email) && email.length <= 250 ? email : ""

  // Pull the editor-set product description from the CMS, fall back to
  // the hardcoded copy if Sanity isn't configured / hasn't been edited.
  const donateCms = await getDonatePage().catch(() => null)
  const productDescription =
    donateCms?.stripeProductDescription?.trim() || FALLBACK_PRODUCT_DESCRIPTION

  const stripe = new Stripe(secret, { apiVersion: STRIPE_API_VERSION })

  const origin =
    req.headers.get("origin") ||
    (process.env.NEXT_PUBLIC_SITE_ORIGIN ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://code-victorian.vercel.app"))

  const unitAmount = Math.round(amount * 100)

  // Idempotency: collapse accidental double-clicks (same email, amount,
  // currency, freq) within the same minute into a single Checkout
  // Session. Different minutes get distinct sessions so a deliberate
  // retry isn't blocked.
  const idempotencyKey = [
    "cv-checkout",
    currency,
    frequency,
    unitAmount,
    validEmail || "anon",
    body.correlationId ?? "",
    Math.floor(Date.now() / 60_000),
  ].join("|")

  try {
    const session = await stripe.checkout.sessions.create(
      {
        mode: frequency === "monthly" ? "subscription" : "payment",
        // Don't hard-pin payment_method_types — Stripe Checkout will use
        // whatever's enabled on the account (Stripe Dashboard → Settings
        // → Payment methods), so cards / Apple Pay / Google Pay / SEPA
        // / iDEAL / Bancontact / etc. appear per buyer country without
        // requiring a code change here.
        ...(validEmail ? { customer_email: validEmail } : {}),
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: currency.toLowerCase(),
              unit_amount: unitAmount,
              product_data: {
                name:
                  frequency === "monthly"
                    ? "Code Victorian — Monthly Patronage"
                    : "Code Victorian — One-time Donation",
                description: productDescription,
              },
              ...(frequency === "monthly" ? { recurring: { interval: "month" as const } } : {}),
            },
          },
        ],
        // For one-time donations, ask Stripe to send a hosted receipt.
        // For subscriptions, Stripe sends an invoice + receipt anyway.
        ...(frequency === "once"
          ? { payment_intent_data: { receipt_email: validEmail || undefined } }
          : {}),
        success_url: `${origin}/donate?status=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/donate?status=cancelled`,
        allow_promotion_codes: false,
        // Tag the session so it's easy to filter in Stripe Dashboard.
        metadata: {
          source: "code-victorian-donate",
          frequency,
          ...(body.correlationId ? { correlation_id: body.correlationId } : {}),
        },
        ...(frequency === "monthly"
          ? {
              subscription_data: {
                metadata: {
                  source: "code-victorian-donate",
                  ...(body.correlationId ? { correlation_id: body.correlationId } : {}),
                },
              },
            }
          : {}),
      },
      { idempotencyKey },
    )

    return NextResponse.json({ url: session.url, id: session.id })
  } catch (err) {
    console.error("[checkout] Stripe session create failed", err)
    const message = err instanceof Error ? err.message : "Stripe error."
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
