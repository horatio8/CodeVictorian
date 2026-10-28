import { NextResponse } from "next/server"
import { syncToManyChat } from "@/lib/manychat"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Campaign Nucleus form receiver for newsletter sign-ups. Reuses the former
// petition receiver (sign-ups are marked source=newsletter); point
// CN_NEWSLETTER_RECEIVER_URL at a dedicated form to split them out.
const CN_RECEIVER_URL =
  process.env.CN_NEWSLETTER_RECEIVER_URL ??
  process.env.CN_PETITION_RECEIVER_URL ??
  "https://teller.campaignnucleus.com/forms/receiver/c917bec4-c8d5-46a7-8540-b21a88c6c0fe"

type NewsletterBody = {
  first_name?: string
  last_name?: string
  email?: string
  website?: string // honeypot — bots fill this; humans never see it
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 })
}

export async function POST(req: Request) {
  let body: NewsletterBody
  try {
    body = (await req.json()) as NewsletterBody
  } catch {
    return badRequest("Invalid JSON body.")
  }

  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true })
  }

  const first_name = (body.first_name ?? "").trim()
  const last_name = (body.last_name ?? "").trim()
  const email = (body.email ?? "").trim().toLowerCase()

  if (!email || !EMAIL_RE.test(email)) return badRequest("Please enter a valid email address.")
  if (email.length > 250 || first_name.length > 250 || last_name.length > 250) {
    return badRequest("Value is too long.")
  }

  const params = new URLSearchParams()
  if (first_name) params.set("first_name", first_name)
  if (last_name) params.set("last_name", last_name)
  params.set("email", email)
  params.set("source", "europefirst-newsletter")
  params.set("tags", "newsletter,europe-first")

  try {
    const res = await fetch(CN_RECEIVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json, text/html;q=0.9",
      },
      body: params.toString(),
      redirect: "manual",
      cache: "no-store",
    })

    // CN responds 2xx/3xx on success; a duplicate email means they're
    // already on the list, which is fine for a newsletter.
    if (res.ok || (res.status >= 300 && res.status < 400) || res.status === 409 || res.status === 422) {
      try {
        await syncToManyChat({
          firstName: first_name,
          lastName: last_name,
          email,
          source: "newsletter",
          signupUrl: req.headers.get("referer") ?? undefined,
        })
      } catch (err) {
        console.error("[manychat] newsletter sync failed:", err)
      }
      return NextResponse.json({ ok: true })
    }
    console.error("[newsletter←CN]", res.status)
    return NextResponse.json(
      { error: `Sign-up failed (${res.status}). Please try again.` },
      { status: 502 },
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : "Network error."
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
