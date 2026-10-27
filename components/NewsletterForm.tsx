"use client"

import Link from "next/link"
import { SHOW_DONATE } from "@/lib/site"
import { useState } from "react"

// Newsletter sign-up. Posts to /api/newsletter, which forwards to the
// Campaign Nucleus receiver and mirrors the contact into ManyChat.
//   - "card": name + email card (homepage hero)
//   - "inline": single email field + button (footer strip)

export default function NewsletterForm({
  variant = "card",
}: {
  variant?: "card" | "inline"
}) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("") // honeypot — must stay empty
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ first_name: firstName, last_name: lastName, email, website }),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) throw new Error(data?.error || `Sign-up failed (${res.status}).`)
      setDone(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not sign up. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const honeypot = (
    <input
      type="text"
      name="website"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      value={website}
      onChange={(e) => setWebsite(e.target.value)}
      style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}
    />
  )

  if (variant === "inline") {
    if (done) {
      return (
        <p className="w-full max-w-md border border-gold-400/40 px-5 py-4 font-lede text-base text-white/80">
          Thank you — you&rsquo;re on the list.
        </p>
      )
    }
    return (
      <div className="w-full max-w-md">
        <form
          className="flex w-full flex-col border border-gold-400/40 sm:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="your@email.eu"
            aria-label="Email address"
            autoComplete="email"
            className="min-w-0 flex-1 bg-transparent px-5 py-4 font-lede text-base text-white placeholder:italic placeholder:text-white/40 outline-none focus:bg-white/5"
            required
            maxLength={250}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {honeypot}
          <button
            type="submit"
            disabled={submitting}
            className="bg-gold-400 px-6 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-navy-900 transition-colors hover:bg-gold-300 disabled:opacity-60 sm:py-0"
          >
            {submitting ? "Sending…" : "Subscribe"}
          </button>
        </form>
        {error && (
          <p role="alert" className="mt-2 text-sm text-gold-200">
            {error}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="ornament border border-gold-400/40 bg-navy-800/40 p-8 backdrop-blur-md on-dark sm:p-10">
      <span className="eyebrow">The Newsletter</span>
      {done ? (
        <>
          <h3 className="mt-4 font-serif text-2xl font-medium text-white">Thank you.</h3>
          <p className="mt-2 text-sm text-white/65">
            You&rsquo;re on the list. Look out for our next dispatch in your inbox.
          </p>
          {SHOW_DONATE && (
          <Link href="/donate#donate" className="btn-primary mt-7 w-full">
            Support the Foundation <span className="font-serif">→</span>
          </Link>
          )}
        </>
      ) : (
        <>
          <h3 className="mt-4 font-serif text-2xl font-medium text-white">Stay informed.</h3>
          <p className="mt-2 text-sm text-white/65">
            Get updates from Code Victorian straight to your inbox.
          </p>
          <form className="mt-7 space-y-3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First name"
                className="form-input"
                autoComplete="given-name"
                required
                maxLength={250}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last name"
                className="form-input"
                autoComplete="family-name"
                maxLength={250}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="email"
              placeholder="your name@correspondence.eu"
              className="form-input"
              autoComplete="email"
              required
              maxLength={250}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {honeypot}
            {error && (
              <p role="alert" className="border border-gold-400/60 bg-navy-900/60 px-4 py-3 text-sm text-gold-200">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Signing up…" : (
                <>
                  Sign Me Up <span className="font-serif">→</span>
                </>
              )}
            </button>
            <p className="text-center text-xs leading-relaxed text-white/55">
              By signing up, you agree to the{" "}
              <Link href="/privacy" className="text-gold-400 underline underline-offset-2">
                privacy policy
              </Link>
              {" "}and consent to receive updates. Unsubscribe at any time.
            </p>
          </form>
        </>
      )}
    </div>
  )
}
