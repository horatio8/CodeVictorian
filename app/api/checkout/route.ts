import { NextResponse } from "next/server"
import Stripe from "stripe"
import { PRESET_AMOUNTS, SUPPORTED_CURRENCIES, type Currency, type Frequency } from "@/lib/donate-config"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

type CheckoutBody = {
  currency: Currency
  amount: number // major units, e.g. 65 for €65
  frequency: Frequency
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 })
}

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

  const stripe = new Stripe(secret)

  const origin =
    req.headers.get("origin") ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://code-victorian.vercel.app")

  // Stripe expects amounts in the smallest unit (cents). EUR and USD both have 2 decimal places.
  const unitAmount = Math.round(amount * 100)
  const allowedAmounts = PRESET_AMOUNTS[currency]
  // Soft validation — let custom amounts through, but warn if outside the typical range.
  if (!allowedAmounts.includes(amount) && (amount < 5 || amount > 10_000)) {
    return badRequest("Amount out of allowed range.")
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: frequency === "monthly" ? "subscription" : "payment",
      payment_method_types: ["card"],
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
              description: "Supports archives, scholarships, and the slow work of preservation.",
            },
            ...(frequency === "monthly" ? { recurring: { interval: "month" } } : {}),
          },
        },
      ],
      success_url: `${origin}/donate?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate?status=cancelled`,
      allow_promotion_codes: false,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Stripe error."
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
