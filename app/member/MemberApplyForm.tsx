"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import PhoneField from "@/components/PhoneField"
import { DEFAULT_CALLING_CODE, composePhone } from "@/lib/calling-codes"

// Posts to /api/member which forwards to the Campaign Nucleus Europe First
// receiver. CN form schema: first_name, last_name, email, phone, citycountry.
// The optional "note" textarea is sent as `note`; CN drops unknown handles,
// so it populates automatically if a Note field is added there later.

export default function MemberApplyForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneCountry, setPhoneCountry] = useState(DEFAULT_CALLING_CODE)
  const [phone, setPhone] = useState("")
  const [cityCountry, setCityCountry] = useState("")
  const [note, setNote] = useState("")
  const [website, setWebsite] = useState("") // honeypot — must stay empty
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const router = useRouter()
  const REDIRECT_SECONDS = 4
  const [redirectIn, setRedirectIn] = useState(REDIRECT_SECONDS)
  useEffect(() => {
    if (!sent) return
    router.prefetch("/donate")
    const tick = setInterval(() => setRedirectIn((s) => s - 1), 1000)
    const go = setTimeout(() => router.push("/donate"), REDIRECT_SECONDS * 1000)
    return () => {
      clearInterval(tick)
      clearTimeout(go)
    }
  }, [sent, router])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const res = await fetch("/api/member", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone: composePhone(phoneCountry, phone),
          citycountry: cityCountry,
          note,
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
    const seconds = Math.max(0, redirectIn)
    return (
      <div className="border border-gold-400/40 bg-ivory p-8">
        <span className="eyebrow">Submitted</span>
        <h3 className="mt-4 font-serif text-2xl font-medium">
          Thank you, {firstName || "friend"}.
        </h3>
        <p className="mt-3 text-sm text-navy-800/70">
          Your application has been received. A member of the Europe First team
          will be in touch shortly.
        </p>
        <Link href="/donate" className="btn-primary mt-7 w-full">
          Support the Cause <span className="font-serif">→</span>
        </Link>
        <p
          className="mt-5 text-center font-mono text-[0.625rem] uppercase tracking-[0.24em] text-navy-800/60"
          aria-live="polite"
        >
          {seconds > 0 ? `Redirecting to donate in ${seconds}…` : "Redirecting…"}
        </p>
      </div>
    )
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
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
        placeholder="your@email.eu"
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
        placeholder="Mobile (optional)"
      />
      <input
        type="text"
        placeholder="City, Country"
        className="form-input"
        required
        value={cityCountry}
        onChange={(e) => setCityCountry(e.target.value)}
        maxLength={250}
      />
      <textarea
        rows={4}
        placeholder="A short note about why you'd like to join (optional but helpful)."
        className="form-input resize-none"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        maxLength={1000}
      />
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
        {submitting ? "Submitting…" : (
          <>
            Submit Application <span className="font-serif">→</span>
          </>
        )}
      </button>
      <p className="text-center text-xs leading-relaxed text-navy-800/65">
        By submitting, you agree to the{" "}
        <Link href="/privacy" className="text-gold-600 underline underline-offset-2">
          privacy policy
        </Link>
        {" "}and consent to receive correspondence about Europe First. Unsubscribe at any time.
      </p>
    </form>
  )
}
