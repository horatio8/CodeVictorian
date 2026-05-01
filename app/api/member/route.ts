import { NextResponse } from "next/server"
import { syncToManyChat } from "@/lib/manychat"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Campaign Nucleus form receiver — Code Victorian Europe First applications.
// The endpoint is public (the CN receiver URL contains its own auth token).
// Override via env var if you ever swap targets.
const CN_RECEIVER_URL =
  process.env.CN_MEMBER_RECEIVER_URL ??
  "https://teller.campaignnucleus.com/forms/receiver/50e52041-b965-4b33-a0bd-324896ca79d0"

type MemberBody = {
  first_name?: string
  last_name?: string
  email?: string
  phone?: string
  /** Single combined "City, Country" string — CN handle is `citycountry`. */
  citycountry?: string
  /** Optional free-text note about why they want to join. */
  note?: string
  website?: string // honeypot — bots fill this; humans never see it
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 })
}

export async function POST(req: Request) {
  let body: MemberBody
  try {
    body = (await req.json()) as MemberBody
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
  const citycountry = (body.citycountry ?? "").trim()
  const note = (body.note ?? "").trim()

  if (!first_name) return badRequest("Please enter your first name.")
  if (!last_name) return badRequest("Please enter your last name.")
  if (!email || !EMAIL_RE.test(email)) return badRequest("Please enter a valid email address.")
  if (first_name.length > 250 || last_name.length > 250) return badRequest("Name is too long.")
  if (email.length > 250 || phone.length > 250 || citycountry.length > 250) {
    return badRequest("Field value is too long.")
  }
  if (note.length > 1000) return badRequest("Note is too long (1000 character limit).")

  // CN receivers expect application/x-www-form-urlencoded.
  const params = new URLSearchParams()
  params.set("first_name", first_name)
  params.set("last_name", last_name)
  params.set("email", email)
  if (phone) params.set("phone", phone)
  // Send city/country under several plausible handles so the value lands
  // wherever the CN form actually defines the field. Unknown handles are
  // silently dropped by CN; matching ones store the value.
  if (citycountry) {
    params.set("citycountry", citycountry)
    params.set("city_country", citycountry)
    params.set("city", citycountry)
    params.set("location", citycountry)
  }
  // Same defensive fan-out for the join-reason note.
  if (note) {
    params.set("note", note)
    params.set("aboutyou", note)
    params.set("message", note)
    params.set("bio", note)
  }

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
          phone: phone || undefined,
          source: "member",
          signupUrl: req.headers.get("referer") ?? undefined,
          extraFields: [
            ...(citycountry ? [{ name: "city_country", value: citycountry }] : []),
            ...(note ? [{ name: "member_note", value: note }] : []),
          ],
        })
      } catch (err) {
        console.error("[manychat] member sync failed:", err)
      }
      return NextResponse.json({ ok: true })
    }
    if (res.status === 409 || res.status === 422) {
      return NextResponse.json(
        { error: "We've already received an application from that email." },
        { status: res.status },
      )
    }
    return NextResponse.json(
      { error: `Member receiver returned ${res.status}.` },
      { status: 502 },
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : "Network error."
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
