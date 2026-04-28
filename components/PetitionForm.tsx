"use client"

import Link from "next/link"
import { useState } from "react"
import PhoneField from "@/components/PhoneField"
import { CALLING_CODES, DEFAULT_CALLING_CODE, composePhone } from "@/lib/calling-codes"

// Shared petition form. Posts to /api/petition which forwards to the
// Campaign Nucleus receiver. Used on:
//   - /petition       (light variant, sticky right-rail)
//   - /remigration    (light variant, single-column)
//   - /                (dark variant, in the hero)
// Field names match the CN form schema: first_name, last_name, email,
// phone, postcode (+ a hidden "website" honeypot for bots).

export default function PetitionForm({
  sticky = false,
  variant = "light",
}: {
  sticky?: boolean
  variant?: "light" | "dark"
}) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [phoneCountry, setPhoneCountry] = useState(DEFAULT_CALLING_CODE)
  const [postcode, setPostcode] = useState("")
  const [countryIso, setCountryIso] = useState("") // optional; ISO from CALLING_CODES
  const [website, setWebsite] = useState("") // honeypot — must stay empty
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [signed, setSigned] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const res = await fetch("/api/petition", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone: composePhone(phoneCountry, phone),
          postcode,
          country: countryIso, // ISO code; server resolves to a readable name
          website,
        }),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        throw new Error(data?.error || `Submission failed (${res.status}).`)
      }
      setSigned(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const isDark = variant === "dark"
  const wrapperClass = `${sticky ? "sticky top-28 " : ""}ornament border ${
    isDark
      ? "border-gold-400/40 bg-navy-800/40 backdrop-blur-md on-dark"
      : "border-gold-400/40 bg-ivory"
  } p-8 sm:p-10`

  if (signed) {
    return (
      <div className={wrapperClass}>
        <span className="eyebrow">Signed</span>
        <h3 className={`mt-4 font-serif text-2xl font-medium ${isDark ? "text-white" : ""}`}>
          Thank you, {firstName || "friend"}.
        </h3>
        <p className={`mt-2 text-sm ${isDark ? "text-white/70" : "text-navy-800/70"}`}>
          Your name is on the petition. Take the next step:
        </p>
        <div className="mt-7 flex flex-col gap-3">
          <Link href="/donate" className="btn-primary w-full">
            Support the Cause <span className="font-serif">→</span>
          </Link>
          <Link href="/member" className="btn-secondary w-full">
            Join Europe First
          </Link>
        </div>
        <p className={`mt-6 text-center text-xs ${isDark ? "text-white/55" : "text-navy-800/65"}`}>
          A confirmation email is on its way. You can share the petition with friends from your inbox.
        </p>
      </div>
    )
  }

  return (
    <div className={wrapperClass}>
      <span className="eyebrow">Sign Now</span>
      <h3 className={`mt-4 font-serif text-2xl font-medium ${isDark ? "text-white" : ""}`}>
        Add your name.
      </h3>
      <p className={`mt-2 text-sm ${isDark ? "text-white/65" : "text-navy-800/65"}`}>
        Your signature is powerful. Add it today.
      </p>
      <form className="mt-7 space-y-3" onSubmit={handleSubmit}>
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
          placeholder="your name@correspondence.eu"
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
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Postcode / ZIP"
            className="form-input"
            autoComplete="postal-code"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            maxLength={250}
          />
          <select
            aria-label="Country"
            className="form-input"
            value={countryIso}
            onChange={(e) => setCountryIso(e.target.value)}
          >
            <option value="">Country</option>
            {CALLING_CODES.map((c) => (
              <option key={c.iso} value={c.iso}>
                {c.flag} {c.name}
              </option>
            ))}
          </select>
        </div>
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
            className={`border px-4 py-3 text-sm ${
              isDark
                ? "border-gold-400/60 bg-navy-900/60 text-gold-200"
                : "border-gold-400/60 bg-gold-50 text-navy-900"
            }`}
          >
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Adding…" : (
            <>
              Add My Signature <span className="font-serif">→</span>
            </>
          )}
        </button>
        <p
          className={`text-center text-xs leading-relaxed ${
            isDark ? "text-white/55" : "text-navy-800/65"
          }`}
        >
          By signing, you agree to the{" "}
          <Link
            href="/privacy"
            className={`underline underline-offset-2 ${isDark ? "text-gold-400" : "text-gold-600"}`}
          >
            privacy policy
          </Link>
          {" "}and consent to receive campaign updates. Unsubscribe at any time.
        </p>
      </form>
    </div>
  )
}
