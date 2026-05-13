import { NextResponse } from "next/server"
import { syncToManyChat } from "@/lib/manychat"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Optional Campaign Nucleus forwarder. If `CN_SPEAKER_RECEIVER_URL` is
// set on Vercel, every request is also POSTed to that receiver as
// application/x-www-form-urlencoded. If unset, the request still lands
// in ManyChat with the `speaker-request` tag and the form-completion
// state remains the same to the user.
const CN_RECEIVER_URL = process.env.CN_SPEAKER_RECEIVER_URL ?? ""

type SpeakerBody = {
  first_name?: string
  last_name?: string
  email?: string
  phone?: string
  organisation?: string
  event_date?: string
  event_location?: string
  audience_size?: string
  has_budget?: "yes" | "no" | ""
  budget_amount?: string
  details?: string
  website?: string // honeypot
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 })
}

export async function POST(req: Request) {
  let body: SpeakerBody
  try {
    body = (await req.json()) as SpeakerBody
  } catch {
    return badRequest("Invalid JSON body.")
  }

  // Honeypot
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true })
  }

  const first_name = (body.first_name ?? "").trim()
  const last_name = (body.last_name ?? "").trim()
  const email = (body.email ?? "").trim().toLowerCase()
  const phone = (body.phone ?? "").trim()
  const organisation = (body.organisation ?? "").trim()
  const event_date = (body.event_date ?? "").trim()
  const event_location = (body.event_location ?? "").trim()
  const audience_size = (body.audience_size ?? "").trim()
  const has_budget = body.has_budget === "yes" || body.has_budget === "no" ? body.has_budget : ""
  const budget_amount = (body.budget_amount ?? "").trim()
  const details = (body.details ?? "").trim()

  if (!first_name) return badRequest("Please enter your first name.")
  if (!last_name) return badRequest("Please enter your last name.")
  if (!email || !EMAIL_RE.test(email)) return badRequest("Please enter a valid email address.")
  if (!organisation) return badRequest("Please tell us your organisation or host.")
  if (!has_budget) return badRequest("Please indicate whether you have budget allocated.")
  if (details.length > 2000) return badRequest("Details are too long (2000 character limit).")

  // Forward to CN if a receiver URL is configured. Same fan-out style we
  // use elsewhere — handles vary across CN forms, so send under a few
  // plausible names and let CN pick up whichever it has defined.
  if (CN_RECEIVER_URL) {
    const params = new URLSearchParams()
    params.set("first_name", first_name)
    params.set("last_name", last_name)
    params.set("email", email)
    if (phone) params.set("phone", phone)
    if (organisation) params.set("organisation", organisation)
    if (event_date) params.set("event_date", event_date)
    if (event_location) {
      params.set("event_location", event_location)
      params.set("citycountry", event_location)
    }
    if (audience_size) params.set("audience_size", audience_size)
    if (has_budget) params.set("has_budget", has_budget)
    if (budget_amount) params.set("budget_amount", budget_amount)
    if (details) params.set("details", details)

    try {
      await fetch(CN_RECEIVER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json, text/html;q=0.9",
        },
        body: params.toString(),
        redirect: "manual",
        cache: "no-store",
      })
    } catch (err) {
      console.error("[request-speaker] CN forward failed:", err)
      // Don't block the user on a CN outage — ManyChat sync below still runs.
    }
  }

  // ManyChat sync — tagged as `speaker-request`. Failures here are
  // logged but don't block the response either.
  try {
    await syncToManyChat({
      firstName: first_name,
      lastName: last_name,
      email,
      phone: phone || undefined,
      source: "speaker",
      signupUrl: req.headers.get("referer") ?? undefined,
      extraFields: [
        ...(organisation ? [{ name: "speaker_organisation", value: organisation }] : []),
        ...(event_date ? [{ name: "speaker_event_date", value: event_date }] : []),
        ...(event_location ? [{ name: "speaker_event_location", value: event_location }] : []),
        ...(audience_size ? [{ name: "speaker_audience_size", value: audience_size }] : []),
        ...(has_budget ? [{ name: "speaker_has_budget", value: has_budget }] : []),
        ...(budget_amount ? [{ name: "speaker_budget_amount", value: budget_amount }] : []),
        ...(details ? [{ name: "speaker_details", value: details }] : []),
      ],
    })
  } catch (err) {
    console.error("[manychat] speaker sync failed:", err)
  }

  return NextResponse.json({ ok: true })
}
