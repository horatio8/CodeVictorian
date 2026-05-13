// ManyChat Public API helper.
//
// Used by the petition / volunteer / contact form handlers to push signups
// into the Matthias Victorian ManyChat account so the campaign can DM,
// segment, and broadcast to them via Email + Instagram + Messenger.
//
// All calls happen server-side; the API key never reaches the browser.
// Failures here must NOT block the original form submission — the route
// handlers wrap calls in try/catch and log on failure.
//
// Reference: https://api.manychat.com — documented as the "Public API".

const BASE = "https://api.manychat.com"

// Accept either MANYCHAT_API_TOKEN or MANYCHAT_API_KEY — different briefs
// have used both names for the Public API key issued by ManyChat.
function manychatToken(): string | undefined {
  return process.env.MANYCHAT_API_TOKEN || process.env.MANYCHAT_API_KEY
}

export function isManyChatConfigured(): boolean {
  return Boolean(manychatToken())
}

function authHeaders() {
  return {
    Authorization: `Bearer ${manychatToken() ?? ""}`,
    "Content-Type": "application/json",
  }
}

async function call(path: string, body: unknown): Promise<unknown> {
  const res = await fetch(`${BASE}${path}`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(body),
    cache: "no-store",
  })
  if (!res.ok) {
    const text = await res.text().catch(() => "")
    throw new Error(`ManyChat ${path} ${res.status}: ${text || res.statusText}`)
  }
  return res.json()
}

export type ManyChatSource = "petition" | "volunteer" | "contact" | "member" | "speaker"

const TAG_PER_SOURCE: Record<ManyChatSource, string> = {
  petition: "petition-signer",
  volunteer: "volunteer-applicant",
  contact: "contact-enquirer",
  member: "member-applicant",
  speaker: "speaker-request",
}

const FLOW_NS_ENV: Record<ManyChatSource, string> = {
  petition: "MANYCHAT_PETITION_FLOW_NS",
  volunteer: "MANYCHAT_VOLUNTEER_FLOW_NS",
  contact: "MANYCHAT_CONTACT_FLOW_NS",
  member: "MANYCHAT_MEMBER_FLOW_NS",
  speaker: "MANYCHAT_SPEAKER_FLOW_NS",
}

export type ManyChatInput = {
  firstName: string
  lastName: string
  email: string
  /** E.164 (e.g. +44…) — already composed by the form. */
  phone?: string
  /** ISO 3166-1 alpha-2 (e.g. "GB") — used for `country` field + country-XX tag. */
  country?: string
  postcode?: string
  city?: string
  source: ManyChatSource
  signupUrl?: string
  /** Extra fields beyond the standard set, e.g. volunteer roles, contact subject. */
  extraFields?: Array<{ name: string; value: string }>
}

export type ManyChatResult = { skipped: true } | { subscriberId: string }

export async function syncToManyChat(input: ManyChatInput): Promise<ManyChatResult> {
  if (!isManyChatConfigured()) return { skipped: true }

  // Step 1: create or fetch the subscriber. ManyChat will create a new one
  // each call when only an email is provided — caller can dedupe upstream
  // if needed; we accept potential duplicates for now (documented).
  const created = (await call("/fb/subscriber/createSubscriber", {
    first_name: input.firstName,
    last_name: input.lastName,
    email: input.email,
    phone: input.phone || undefined,
    has_opt_in_email: true,
    has_opt_in_sms: false,
    consent_phrase: "I agree to receive updates from Code Victorian",
  })) as { data?: { id?: string } }

  const subscriberId = created?.data?.id
  if (!subscriberId) {
    throw new Error("ManyChat createSubscriber returned no id")
  }

  // Step 2: set custom fields. The fields must already exist in ManyChat
  // (Settings → Fields). Unknown field_names are ignored by the API.
  const fields: Array<{ field_name: string; field_value: string }> = [
    { field_name: "source_form", field_value: input.source },
    { field_name: `${input.source}_signed_at`, field_value: new Date().toISOString() },
  ]
  if (input.country) fields.push({ field_name: "country", field_value: input.country })
  if (input.postcode) fields.push({ field_name: "postcode", field_value: input.postcode })
  if (input.city) fields.push({ field_name: "city", field_value: input.city })
  if (input.signupUrl) fields.push({ field_name: "signup_url", field_value: input.signupUrl })
  for (const f of input.extraFields ?? []) {
    fields.push({ field_name: f.name, field_value: f.value })
  }

  await call("/fb/subscriber/setCustomFields", {
    subscriber_id: subscriberId,
    fields,
  })

  // Step 3: tag for segmentation. ManyChat addTag auto-creates tags that
  // don't exist yet, so country-XX tags are safe to call directly.
  await call("/fb/subscriber/addTag", {
    subscriber_id: subscriberId,
    tag_name: TAG_PER_SOURCE[input.source],
  })
  if (input.country) {
    await call("/fb/subscriber/addTag", {
      subscriber_id: subscriberId,
      tag_name: `country-${input.country.toUpperCase()}`,
    }).catch((err) => {
      console.warn("[manychat] country tag failed:", err)
    })
  }

  // Step 4: trigger the per-source welcome flow if its NS is configured.
  // Best-effort — the flow may still be a draft, in which case ManyChat
  // returns an error. We swallow it so the form submission isn't affected.
  const flowNs = process.env[FLOW_NS_ENV[input.source]]
  if (flowNs) {
    try {
      await call("/fb/sending/sendFlow", {
        subscriber_id: subscriberId,
        flow_ns: flowNs,
      })
    } catch (err) {
      console.warn(`[manychat] sendFlow failed for ${input.source} (flow may still be draft):`, err)
    }
  }

  return { subscriberId }
}
