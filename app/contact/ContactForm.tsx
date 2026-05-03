"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

// Posts to /api/contact which forwards to the Campaign Nucleus contact
// receiver. Field handles match the CN form schema:
// first_name, last_name, email, subject, message.

export default function ContactForm({ subjects }: { subjects: string[] }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          subject,
          message,
          website,
        }),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        throw new Error(data?.error || `Submission failed (${res.status}).`)
      }
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  if (sent) {
    const seconds = Math.max(0, redirectIn)
    return (
      <div className="border border-gold-400/40 bg-ivory p-10">
        <span className="eyebrow">Sent</span>
        <h3 className="mt-4 font-serif text-2xl font-medium">
          Thank you, {firstName || "friend"}.
        </h3>
        <p className="mt-3 text-sm text-navy-800/70">
          Your message has been received. We typically respond within two
          business days.
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
    <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
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
        placeholder="your name@correspondence.eu"
        className="form-input"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        maxLength={250}
      />
      <select
        className="form-input"
        required
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      >
        <option value="">Subject</option>
        {subjects.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
      <textarea
        placeholder="Your message"
        rows={6}
        className="form-input resize-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={1000}
      />
      <label className="flex items-start gap-2 font-lede text-xs text-navy-800/65">
        <input type="checkbox" required className="mt-1 h-3.5 w-3.5 accent-gold-400" />
        <span>
          I agree to the{" "}
          <Link href="/privacy" className="text-gold-600 underline underline-offset-2">privacy policy</Link>.
          My data will only be used to respond to this enquiry.
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
        className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : (
          <>
            Send Message <span className="font-serif">→</span>
          </>
        )}
      </button>
    </form>
  )
}
