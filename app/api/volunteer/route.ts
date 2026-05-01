import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Campaign Nucleus form receiver — Code Victorian volunteer form.
// The endpoint is public (the CN receiver URL contains its own auth token).
// Override via env var if you ever swap targets.
const CN_RECEIVER_URL =
  process.env.CN_VOLUNTEER_RECEIVER_URL ??
  "https://teller.campaignnucleus.com/forms/receiver/da91fdfc-9de7-43f8-8133-628130110830"

type VolunteerBody = {
  first_name?: string
  last_name?: string
  email?: string
  phone?: string
  country?: string
  city?: string
  /** Comma-separated list of selected role titles. */
  roles?: string
  bio?: string
  website?: string // honeypot — bots fill this; humans never see it
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 })
}

export async function POST(req: Request) {
  let body: VolunteerBody
  try {
    body = (await req.json()) as VolunteerBody
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
  const phone = (body.phone ?? "").trim()
  const country = (body.country ?? "").trim()
  const city = (body.city ?? "").trim()
  const roles = (body.roles ?? "").trim()
  const bio = (body.bio ?? "").trim()

  if (!first_name) return badRequest("Please enter your first name.")
  if (!last_name) return badRequest("Please enter your last name.")
  if (!email || !EMAIL_RE.test(email)) return badRequest("Please enter a valid email address.")
  if (first_name.length > 250 || last_name.length > 250) return badRequest("Name is too long.")
  if (email.length > 250) return badRequest("Email is too long.")
  if (bio.length > 1000) return badRequest("Bio is too long (1000 character limit).")

  // CN receivers expect application/x-www-form-urlencoded.
  // Field handles match the CN form schema exactly. The Role field uses a
  // capital "R" handle per the dashboard config; CN handles are
  // case-sensitive in URL params, so we mirror it exactly.
  const params = new URLSearchParams()
  params.set("first_name", first_name)
  params.set("last_name", last_name)
  params.set("email", email)
  if (roles) params.set("Role", roles)
  // Forward optional fields too — CN silently ignores unknown handles, so
  // these populate automatically if/when those fields are added on CN.
  if (phone) params.set("phone", phone)
  if (country) params.set("country", country)
  if (city) params.set("city", city)
  if (bio) params.set("bio", bio)

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
      return NextResponse.json({ ok: true })
    }
    if (res.status === 409 || res.status === 422) {
      return NextResponse.json(
        { error: "We've already received an application from that email." },
        { status: res.status },
      )
    }
    return NextResponse.json(
      { error: `Volunteer receiver returned ${res.status}.` },
      { status: 502 },
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : "Network error."
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
