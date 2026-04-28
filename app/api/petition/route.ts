import { NextResponse } from "next/server"
import { CALLING_CODES } from "@/lib/calling-codes"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Campaign Nucleus form receiver — Code Victorian petition.
// The endpoint is public (the CN receiver URL contains its own auth token).
// Override via env var if you ever swap targets.
const CN_RECEIVER_URL =
  process.env.CN_PETITION_RECEIVER_URL ??
  "https://teller.campaignnucleus.com/forms/receiver/c917bec4-c8d5-46a7-8540-b21a88c6c0fe"

type PetitionBody = {
  first_name?: string
  last_name?: string
  email?: string
  phone?: string
  postcode?: string
  /** ISO-3166-1 alpha-2 from the CALLING_CODES list, or empty */
  country?: string
  website?: string // honeypot — bots fill this; humans never see it
}

function isoToCountryName(iso: string): string {
  const trimmed = (iso ?? "").trim().toUpperCase()
  if (!trimmed) return ""
  const match = CALLING_CODES.find((c) => c.iso === trimmed)
  return match ? match.name : trimmed
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 })
}

export async function POST(req: Request) {
  let body: PetitionBody
  try {
    body = (await req.json()) as PetitionBody
  } catch {
    return badRequest("Invalid JSON body.")
  }

  // Honeypot: if a hidden "website" field is filled, silently accept and drop.
  // We return 200 so the bot thinks it succeeded, but never forward to CN.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true })
  }

  const first_name = (body.first_name ?? "").trim()
  const last_name = (body.last_name ?? "").trim()
  const email = (body.email ?? "").trim().toLowerCase()
  const phone = (body.phone ?? "").trim()
  const postcode = (body.postcode ?? "").trim()
  const country = isoToCountryName(body.country ?? "")

  if (!first_name) return badRequest("Please enter your first name.")
  if (!last_name) return badRequest("Please enter your last name.")
  if (!email || !EMAIL_RE.test(email)) return badRequest("Please enter a valid email address.")
  if (first_name.length > 250 || last_name.length > 250) return badRequest("Name is too long.")
  if (email.length > 250) return badRequest("Email is too long.")
  if (phone.length > 250 || postcode.length > 250) {
    return badRequest("Phone or postcode value is too long.")
  }

  // Campaign Nucleus receivers expect application/x-www-form-urlencoded.
  // Unknown fields are silently ignored by CN; if/when they add a Country
  // field to the form schema, this will start populating automatically.
  const params = new URLSearchParams()
  params.set("first_name", first_name)
  params.set("last_name", last_name)
  params.set("email", email)
  if (phone) params.set("phone", phone)
  if (postcode) params.set("postcode", postcode)
  if (country) params.set("country", country)

  try {
    const res = await fetch(CN_RECEIVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json, text/html;q=0.9",
      },
      body: params.toString(),
      // Don't follow CN's own confirmation-page redirect; we render our own.
      redirect: "manual",
      cache: "no-store",
    })

    // CN typically responds 200 / 204 / 302 on success. Treat any 2xx or 3xx as accepted.
    if (res.ok || (res.status >= 300 && res.status < 400)) {
      return NextResponse.json({ ok: true })
    }
    // Pass through CN's status if it's an obvious 4xx (e.g. duplicate email).
    if (res.status === 409 || res.status === 422) {
      return NextResponse.json(
        { error: "That email is already on the petition." },
        { status: res.status },
      )
    }
    return NextResponse.json(
      { error: `Petition receiver returned ${res.status}.` },
      { status: 502 },
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : "Network error."
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
