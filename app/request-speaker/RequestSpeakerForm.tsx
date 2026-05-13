"use client"

import Link from "next/link"
import { useState } from "react"
import PhoneField from "@/components/PhoneField"
import { DEFAULT_CALLING_CODE, composePhone } from "@/lib/calling-codes"

// Posts to /api/request-speaker which forwards to the Campaign Nucleus
// receiver (if configured) and syncs the request to ManyChat with the
// "speaker" source tag.

export default function RequestSpeakerForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneCountry, setPhoneCountry] = useState(DEFAULT_CALLING_CODE)
  const [phone, setPhone] = useState("")
  const [organisation, setOrganisation] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [eventLocation, setEventLocation] = useState("")
  const [audienceSize, setAudienceSize] = useState("")
  const [budget, setBudget] = useState<"yes" | "no" | "">("")
  const [budgetAmount, setBudgetAmount] = useState("")
  const [details, setDetails] = useState("")
  const [website, setWebsite] = useState("") // honeypot — must stay empty
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const res = await fetch("/api/request-speaker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone: composePhone(phoneCountry, phone),
          organisation,
          event_date: eventDate,
          event_location: eventLocation,
          audience_size: audienceSize,
          has_budget: budget,
          budget_amount: budget === "yes" ? budgetAmount : "",
          details,
          website,
        }),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        throw new Error(data?.error || `Submission failed (${res.status}).`)
      }
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  if (sent) {
    return (
      <div className="text-center">
        <span className="eyebrow">Received</span>
        <h3 className="mt-4 font-serif text-2xl font-medium">
          Thank you, {firstName || "friend"}.
        </h3>
        <p className="mt-3 text-sm text-navy-800/70">
          Your speaker request has been received. A team member will be in
          touch within a few business days to discuss availability.
        </p>
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="First name"
          className="form-input"
          autoComplete="given-name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          maxLength={250}
        />
        <input
          type="text"
          placeholder="Last name"
          className="form-input"
          autoComplete="family-name"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          maxLength={250}
        />
      </div>
      <input
        type="email"
        placeholder="your@email.com"
        className="form-input"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        maxLength={250}
      />
      <PhoneField
        countryIso={phoneCountry}
        onCountryIso={setPhoneCountry}
        number={phone}
        onNumber={setPhone}
        placeholder="Phone (optional)"
      />
      <input
        type="text"
        placeholder="Organisation / host"
        className="form-input"
        required
        value={organisation}
        onChange={(e) => setOrganisation(e.target.value)}
        maxLength={250}
      />
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Event date (or TBC)"
          className="form-input"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          maxLength={100}
        />
        <input
          type="text"
          placeholder="City, Country"
          className="form-input"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
          maxLength={250}
        />
      </div>
      <input
        type="text"
        placeholder="Expected audience size (optional)"
        className="form-input"
        value={audienceSize}
        onChange={(e) => setAudienceSize(e.target.value)}
        maxLength={50}
      />

      <fieldset className="border border-gold-400/30 bg-ivory/60 p-5">
        <legend className="px-2 font-mono text-[0.625rem] font-medium uppercase tracking-[0.24em] text-gold-600">
          Speaker Budget
        </legend>
        <p className="mt-1 text-sm text-navy-800/70">
          Do you have budget allocated for this engagement?
        </p>
        <div className="mt-4 flex gap-6">
          <label className="flex items-center gap-2 text-sm text-navy-800 cursor-pointer">
            <input
              type="radio"
              name="budget"
              value="yes"
              checked={budget === "yes"}
              onChange={() => setBudget("yes")}
              className="h-3.5 w-3.5 accent-gold-400"
              required
            />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm text-navy-800 cursor-pointer">
            <input
              type="radio"
              name="budget"
              value="no"
              checked={budget === "no"}
              onChange={() => setBudget("no")}
              className="h-3.5 w-3.5 accent-gold-400"
            />
            No
          </label>
        </div>
        {budget === "yes" && (
          <input
            type="text"
            placeholder="Approximate amount (e.g. €2,000)"
            className="form-input mt-4"
            value={budgetAmount}
            onChange={(e) => setBudgetAmount(e.target.value)}
            maxLength={100}
          />
        )}
      </fieldset>

      <textarea
        placeholder="Anything else we should know — format, topic, attendee profile, deadlines."
        rows={5}
        className="form-input resize-none"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        maxLength={2000}
      />

      <label className="flex items-start gap-2 font-lede text-xs text-navy-800/65">
        <input type="checkbox" required className="mt-1 h-3.5 w-3.5 accent-gold-400" />
        <span>
          I agree to the{" "}
          <Link href="/privacy" className="text-gold-600 underline underline-offset-2">privacy policy</Link>.
          My data will only be used to discuss this engagement.
        </span>
      </label>

      {/* Honeypot — visually hidden; bots fill it and we silently drop them. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      />

      {error && (
        <p
          role="alert"
          className="border border-gold-400/60 bg-gold-50 px-4 py-3 text-sm text-navy-900"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : (
          <>
            Submit Request <span className="font-serif">→</span>
          </>
        )}
      </button>
    </form>
  )
}
