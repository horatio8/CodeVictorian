"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import PhoneField from "@/components/PhoneField"
import { DEFAULT_CALLING_CODE, composePhone } from "@/lib/calling-codes"

// Posts to /api/volunteer which forwards to the Campaign Nucleus volunteer
// receiver. CN form schema: first_name, last_name, email, Role.
// Phone / country / city / bio go along for the ride too — CN drops
// unknown handles, so they populate automatically once added there.

type Role = { roman?: string; title?: string; desc?: string; commitment?: string }

export default function VolunteerForm({ roles }: { roles: Role[] }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneCountry, setPhoneCountry] = useState(DEFAULT_CALLING_CODE)
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])
  const [bio, setBio] = useState("")
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
    const go = setTimeout(() => router.push("/donate#donate"), REDIRECT_SECONDS * 1000)
    return () => {
      clearInterval(tick)
      clearTimeout(go)
    }
  }, [sent, router])

  function toggleRole(title: string) {
    setSelectedRoles((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone: composePhone(phoneCountry, phone),
          country,
          city,
          roles: selectedRoles.join(", "),
          bio,
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
      <div className="mt-14 border border-gold-400/40 bg-ivory p-10">
        <span className="eyebrow">Submitted</span>
        <h3 className="mt-4 font-serif text-2xl font-medium">
          Thank you, {firstName || "friend"}.
        </h3>
        <p className="mt-3 text-sm text-navy-800/70">
          Your application has been received. A volunteer coordinator will be
          in touch within a few days.
        </p>
        <Link href="/donate#donate" className="btn-primary mt-7 w-full">
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
    <form className="mt-14 space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
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
        placeholder="Phone number (optional)"
      />
      <div className="grid grid-cols-2 gap-4">
        <select
          className="form-input"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Country</option>
          <option>Austria</option><option>Belgium</option><option>France</option>
          <option>Germany</option><option>Italy</option><option>Netherlands</option>
          <option>Poland</option><option>Spain</option><option>Sweden</option>
          <option>Other EU Country</option>
        </select>
        <input
          type="text"
          placeholder="City"
          className="form-input"
          autoComplete="address-level2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-3 font-mono text-[0.625rem] font-medium uppercase tracking-[0.28em] text-gold-600">
          Which roles interest you? (select all that apply)
        </label>
        <div className="grid gap-0 border border-gold-400/25 sm:grid-cols-2">
          {roles.map((r, i, arr) => {
            const title = r.title ?? ""
            const checked = selectedRoles.includes(title)
            return (
              <label
                key={title || i}
                className={`flex items-center gap-3 p-4 font-lede text-base text-navy-800 cursor-pointer transition-colors hover:bg-gold-400/5 ${
                  i % 2 === 0 ? "sm:border-r sm:border-gold-400/20" : ""
                } ${i < arr.length - 2 ? "border-b border-gold-400/15" : "sm:border-b-0"} ${
                  i === arr.length - 2 ? "border-b border-gold-400/15 sm:border-b-0" : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 accent-gold-400"
                  checked={checked}
                  onChange={() => toggleRole(title)}
                />
                <span className="font-serif italic text-sm text-gold-400">{r.roman}</span>
                {title}
              </label>
            )
          })}
        </div>
      </div>
      <textarea
        placeholder="Tell us about yourself and why you want to volunteer (optional)"
        rows={4}
        className="form-input resize-none"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        maxLength={1000}
      />
      <label className="flex items-start gap-2 font-lede text-xs text-navy-800/65">
        <input type="checkbox" required className="mt-1 h-3.5 w-3.5 accent-gold-400" />
        <span>
          I agree to the{" "}
          <Link href="/privacy" className="text-gold-600 underline underline-offset-2">privacy policy</Link>
          {" "}and consent to being contacted about volunteer opportunities.
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
        {submitting ? "Submitting…" : (
          <>
            Submit Application <span className="font-serif">→</span>
          </>
        )}
      </button>
    </form>
  )
}
