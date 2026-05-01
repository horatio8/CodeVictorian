import { NextResponse } from "next/server"
import { syncToManyChat } from "@/lib/manychat"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Campaign Nucleus form receiver — Code Victorian contact form.
// The endpoint is public (the CN receiver URL contains its own auth token).
// Override via env var if you ever swap targets.
const CN_RECEIVER_URL =
  process.env.CN_CONTACT_RECEIVER_URL ??
  "https://teller.campaignnucleus.com/forms/receiver/341c9932-4466-4c58-842b-843df81b5e21"

type ContactBody = {
  first_name?: string
  last_name?: string
  email?: string
  subject?: string
  message?: string
  website?: string // honeypot — bots fill this; humans never see it
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 })
}

export async function POST(req: Request) {
  let body: ContactBody
  try {
    body = (await req.json()) as ContactBody
  } catch {
    return badRequest("Invalid JSON body.")
  }

  // Honeypot: if the hidden "website" field is filled, silently accept.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true })
  }

  const first_name = (body.first_name ?? "").trim()
  const last_name = (body.last_name ?? "").trim()
  const email = (body.email ?? "").trim().toLowerCase()
  const subject = (body.subject ?? "").trim()
  const message = (body.message ?? "").trim()

  if (!first_name) return badRequest("Please enter your first name.")
  if (!last_name) return badRequest("Please enter your last name.")
  if (!email || !EMAIL_RE.test(email)) return badRequest("Please enter a valid email address.")
  if (!subject) return badRequest("Please choose a subject.")
  if (first_name.length > 250 || last_name.length > 250) return badRequest("Name is too long.")
  if (email.length > 250 || subject.length > 250) return badRequest("Field value is too long.")
  if (message.length > 1000) return badRequest("Message is too long (1000 character limit).")

  // CN receivers expect application/x-www-form-urlencoded.
  const params = new URLSearchParams()
  params.set("first_name", first_name)
  params.set("last_name", last_name)
  params.set("email", email)
  params.set("subject", subject)
  if (message) params.set("message", message)

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

    if (res.ok || (res.status >= 300 && res.status < 400)) {
      try {
        await syncToManyChat({
          firstName: first_name,
          lastName: last_name,
          email,
          source: "contact",
          signupUrl: req.headers.get("referer") ?? undefined,
          extraFields: [
            ...(subject ? [{ name: "contact_subject", value: subject }] : []),
            ...(message ? [{ name: "contact_message", value: message }] : []),
          ],
        })
      } catch (err) {
        console.error("[manychat] contact sync failed:", err)
      }
      return NextResponse.json({ ok: true })
    }
    if (res.status === 409 || res.status === 422) {
      return NextResponse.json(
        { error: "We've already received a message from that email recently." },
        { status: res.status },
      )
    }
    return NextResponse.json(
      { error: `Contact receiver returned ${res.status}.` },
      { status: 502 },
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : "Network error."
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
