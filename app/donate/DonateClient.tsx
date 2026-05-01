"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { CheckCircle } from "lucide-react"
import {
  PRESET_AMOUNTS,
  SUPPORTED_CURRENCIES,
  SYMBOL,
  type Currency,
  type Frequency,
} from "@/lib/donate-config"

const impact: Record<Currency, { amount: string; desc: string }[]> = {
  EUR: [
    { amount: "€65",     desc: "Prints and distributes 500 campaign leaflets across a city" },
    { amount: "€135",    desc: "Sponsors one local community awareness event" },
    { amount: "€265",    desc: "Funds legal research for a policy briefing paper" },
    { amount: "€600",    desc: "Supports a regional campaign office for one month" },
    { amount: "€1,500",  desc: "Sponsors a full delegation to the European Heritage Summit" },
  ],
  USD: [
    { amount: "$70",     desc: "Prints and distributes 500 campaign leaflets across a city" },
    { amount: "$145",    desc: "Sponsors one local community awareness event" },
    { amount: "$285",    desc: "Funds legal research for a policy briefing paper" },
    { amount: "$650",    desc: "Supports a regional campaign office for one month" },
    { amount: "$1,600",  desc: "Sponsors a full delegation to the European Heritage Summit" },
  ],
}

type StatusBanner =
  | { kind: "success"; amount: number | null; currency: string | null; mode: string | null; email: string | null }
  | { kind: "cancelled" }
  | { kind: "verifying" }
  | { kind: "verifyError"; error: string }
  | null

export type DonateCms = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  transparencyPromise?: string[]
}

export default function DonatePage({ cms }: { cms?: DonateCms } = {}) {
  // useSearchParams must sit under a Suspense boundary so the page can
  // still prerender at build time.
  return (
    <Suspense fallback={<DonatePageInner cms={cms} status={null} sessionId={null} />}>
      <DonatePageWithParams cms={cms} />
    </Suspense>
  )
}

function DonatePageWithParams({ cms }: { cms?: DonateCms }) {
  const searchParams = useSearchParams()
  return (
    <DonatePageInner
      cms={cms}
      status={searchParams.get("status")}
      sessionId={searchParams.get("session_id")}
    />
  )
}

function DonatePageInner({
  cms,
  status,
  sessionId,
}: {
  cms?: DonateCms
  status: string | null
  sessionId: string | null
}) {

  const [banner, setBanner] = useState<StatusBanner>(() => {
    if (status === "cancelled") return { kind: "cancelled" }
    if (status === "success") return { kind: "verifying" }
    return null
  })

  // After Stripe redirects with ?status=success&session_id=…, verify the
  // session was actually paid before showing the thank-you state.
  useEffect(() => {
    if (status !== "success" || !sessionId) return
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(`/api/checkout/verify?session_id=${encodeURIComponent(sessionId)}`)
        const data = (await res.json().catch(() => ({}))) as {
          paid?: boolean
          amount_total?: number | null
          currency?: string | null
          mode?: string | null
          customer_email?: string | null
          error?: string
        }
        if (cancelled) return
        if (res.ok && data.paid) {
          setBanner({
            kind: "success",
            amount: data.amount_total ?? null,
            currency: data.currency ?? null,
            mode: data.mode ?? null,
            email: data.customer_email ?? null,
          })
        } else {
          setBanner({
            kind: "verifyError",
            error: data?.error || "We couldn't confirm the payment. If you completed checkout, please refresh in a minute.",
          })
        }
      } catch (err) {
        if (cancelled) return
        setBanner({
          kind: "verifyError",
          error: err instanceof Error ? err.message : "Verification failed.",
        })
      }
    })()
    return () => {
      cancelled = true
    }
  }, [status, sessionId])

  const [currency, setCurrency] = useState<Currency>("EUR")
  const [frequency, setFrequency] = useState<Frequency>("monthly")
  const presets = PRESET_AMOUNTS[currency]
  const [selected, setSelected] = useState<number | null>(presets[1] ?? presets[0])
  const [customAmount, setCustomAmount] = useState<string>("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const symbol = SYMBOL[currency]

  // When the user hits "Back" from Stripe Checkout, browsers may restore
  // this page from the bfcache with submitting=true still set — leaving
  // the Donate button stuck on "Redirecting…". The pageshow event with
  // event.persisted === true tells us we were just restored, so reset
  // the transient state and let the user try again.
  useEffect(() => {
    function onPageShow(event: PageTransitionEvent) {
      if (event.persisted) {
        setSubmitting(false)
        setError(null)
      }
    }
    window.addEventListener("pageshow", onPageShow)
    return () => window.removeEventListener("pageshow", onPageShow)
  }, [])

  function switchCurrency(next: Currency) {
    setCurrency(next)
    setSelected(PRESET_AMOUNTS[next][1] ?? PRESET_AMOUNTS[next][0])
    setCustomAmount("")
  }

  const finalAmount = useMemo(() => {
    if (selected === null) {
      const n = Number(customAmount)
      return Number.isFinite(n) && n > 0 ? n : 0
    }
    return selected
  }, [selected, customAmount])

  async function handleDonate() {
    if (!finalAmount) {
      setError("Please choose or enter an amount.")
      return
    }
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currency, amount: finalAmount, frequency }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) {
        throw new Error(data?.error || "Could not start checkout.")
      }
      window.location.assign(data.url)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not start checkout.")
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">{cms?.heroEyebrow ?? "Patronage · Tax-Deductible"}</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            {cms?.heroHeadline ?? "Fund the"}{" "}
            <span className="italic font-normal text-gold-400">
              {cms?.heroItalicWord ?? "Fight"}
            </span>
            {!cms?.heroHeadline && (
              <>
                <br />
                for Europe
              </>
            )}
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">
            {cms?.heroLede ??
              "Every euro directly supports our campaigns, policy research, legal challenges, and grassroots organising across the continent. Your generosity makes change possible."}
          </p>
        </div>
      </section>

      {/* Donation form */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. I</span>
            <span className="line" />
            <span className="label">Your Contribution</span>
          </div>

          {banner && <StatusBanner banner={banner} />}

          <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="ornament border border-gold-400/40 bg-ivory p-8 sm:p-12">
                <span className="eyebrow">Make a Donation</span>
                <h2 className="mt-4 font-serif text-3xl font-medium sm:text-4xl">
                  Select your{" "}
                  <span className="italic font-normal text-gold-400">gift</span>.
                </h2>
                <p className="mt-2 text-sm text-navy-800/65">
                  Donations are processed securely via Stripe.
                </p>

                {/* Currency tabs */}
                <label className="mt-8 block font-mono text-[0.625rem] font-medium uppercase tracking-[0.28em] text-navy-800/60 mb-3">
                  Currency
                </label>
                <div className="grid grid-cols-2 gap-0 border border-gold-400/30">
                  {SUPPORTED_CURRENCIES.map((c, i) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => switchCurrency(c)}
                      className={`py-4 text-center font-mono text-[0.6875rem] font-medium uppercase tracking-[0.24em] transition-colors ${
                        i < SUPPORTED_CURRENCIES.length - 1 ? "border-r border-gold-400/30" : ""
                      } ${
                        currency === c
                          ? "bg-gold-400 text-navy-900"
                          : "bg-transparent text-navy-800/65 hover:bg-gold-400/10"
                      }`}
                    >
                      {c === "EUR" ? "€ Euro" : "$ US Dollar"}
                    </button>
                  ))}
                </div>

                {/* Frequency tabs — flat row */}
                <label className="mt-8 block font-mono text-[0.625rem] font-medium uppercase tracking-[0.28em] text-navy-800/60 mb-3">
                  Frequency
                </label>
                <div className="grid grid-cols-2 gap-0 border border-gold-400/30">
                  <button
                    type="button"
                    onClick={() => setFrequency("monthly")}
                    className={`py-4 text-center font-mono text-[0.6875rem] font-medium uppercase tracking-[0.24em] transition-colors border-r border-gold-400/30 ${
                      frequency === "monthly"
                        ? "bg-gold-400 text-navy-900"
                        : "bg-transparent text-navy-800/65 hover:bg-gold-400/10"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency("once")}
                    className={`py-4 text-center font-mono text-[0.6875rem] font-medium uppercase tracking-[0.24em] transition-colors ${
                      frequency === "once"
                        ? "bg-gold-400 text-navy-900"
                        : "bg-transparent text-navy-800/65 hover:bg-gold-400/10"
                    }`}
                  >
                    One-time
                  </button>
                </div>

                {/* Amount selection */}
                <label className="mt-8 block font-mono text-[0.625rem] font-medium uppercase tracking-[0.28em] text-navy-800/60 mb-3">
                  Amount
                </label>
                <div className="grid grid-cols-3 gap-0 border border-gold-400/30 sm:grid-cols-6">
                  {presets.map((a, i) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => {
                        setSelected(a)
                        setCustomAmount("")
                      }}
                      className={`aspect-square flex flex-col items-center justify-center gap-1 transition-colors border-r border-b border-gold-400/20 sm:border-b-0 ${
                        i === presets.length - 1 ? "sm:border-r" : ""
                      } ${
                        selected === a
                          ? "bg-gold-400 text-navy-900 border-gold-400"
                          : "bg-transparent text-navy-800 hover:bg-gold-400/10"
                      }`}
                    >
                      <span className="font-sans text-2xl font-semibold tracking-tight">{symbol}{a.toLocaleString("en-GB")}</span>
                      <span className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] opacity-70">
                        {frequency === "monthly" ? "/mo" : "once"}
                      </span>
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className={`aspect-square flex flex-col items-center justify-center gap-1 transition-colors ${
                      selected === null
                        ? "bg-gold-400 text-navy-900"
                        : "bg-transparent text-navy-800 hover:bg-gold-400/10"
                    }`}
                  >
                    <span className="font-serif text-xl italic">Other</span>
                    <span className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] opacity-70">custom</span>
                  </button>
                </div>

                {selected === null && (
                  <div className="mt-4">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-serif text-lg text-navy-800/55">
                        {symbol}
                      </span>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        className="form-input !pl-9"
                        min="1"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {error && (
                  <p className="mt-5 border border-gold-400/50 bg-gold-50 px-4 py-3 text-sm text-navy-900">
                    {error}
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleDonate}
                  disabled={submitting || !finalAmount}
                  className="btn-primary mt-8 w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Redirecting…" : (
                    <>
                      Donate {symbol}{(finalAmount || 0).toLocaleString("en-GB")}
                      {frequency === "monthly" ? " / month" : ""}{" "}
                      <span className="font-serif">→</span>
                    </>
                  )}
                </button>

                <p className="mt-5 text-center font-mono text-[0.625rem] uppercase tracking-[0.18em] text-navy-800/50">
                  SSL Secured · GDPR Compliant · Stripe
                </p>
              </div>
            </div>

            {/* Impact sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-8">
                <div className="border border-gold-400/30 bg-ivory p-8">
                  <span className="eyebrow">Your Impact</span>
                  <h3 className="mt-4 font-serif text-2xl font-medium">Where it goes.</h3>
                  <p className="mt-2 text-sm text-navy-800/65">
                    See what your donation achieves.
                  </p>
                  <ul className="mt-6 space-y-0 border-t border-gold-400/20">
                    {impact[currency].map((item) => (
                      <li
                        key={item.amount}
                        className="flex items-start gap-4 border-b border-gold-400/15 py-4 last:border-b-0"
                      >
                        <span className="shrink-0 font-sans text-lg font-semibold tracking-tight text-gold-600">
                          {item.amount}
                        </span>
                        <span className="text-sm leading-relaxed text-navy-800/75">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-gold-400/30 bg-ivory p-8">
                  <span className="eyebrow">Transparency Promise</span>
                  <ul className="mt-6 space-y-4">
                    {(cms?.transparencyPromise && cms.transparencyPromise.length > 0
                      ? cms.transparencyPromise
                      : [
                          "Annual audited financial reports published online",
                          "Donor funds ring-fenced for campaign activities",
                          "Full compliance with EU electoral finance regulations",
                          "Tax-deductible where applicable under national law",
                        ]).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-navy-800/75">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center text-sm text-navy-800/65">
                  After donating, please consider{" "}
                  <Link href="/member" className="text-gold-600 underline underline-offset-2">
                    joining Europe First
                  </Link>{" "}
                  and sharing the cause.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function StatusBanner({ banner }: { banner: NonNullable<StatusBanner> }) {
  if (banner.kind === "verifying") {
    return (
      <div className="mb-10 border border-gold-400/40 bg-ivory p-6 text-center">
        <span className="eyebrow eyebrow-both">Confirming…</span>
        <p className="mt-3 text-sm text-navy-800/75">
          Confirming your payment with Stripe. This usually takes a moment.
        </p>
      </div>
    )
  }
  if (banner.kind === "verifyError") {
    return (
      <div className="mb-10 border border-gold-400/60 bg-gold-50 p-6 text-center">
        <span className="eyebrow eyebrow-both">Payment status unclear</span>
        <p className="mt-3 text-sm text-navy-800/85">{banner.error}</p>
        <p className="mt-2 text-xs text-navy-800/60">
          If your card was charged, you&rsquo;ll receive a Stripe receipt shortly even
          without a confirmation here.
        </p>
      </div>
    )
  }
  if (banner.kind === "cancelled") {
    return (
      <div className="mb-10 border border-gold-400/40 bg-ivory p-6 text-center">
        <span className="eyebrow eyebrow-both">Cancelled</span>
        <h3 className="mt-4 font-serif text-2xl font-medium">No problem.</h3>
        <p className="mt-2 text-sm text-navy-800/75">
          The checkout was cancelled — no card was charged. You can pick a different
          amount or come back later.
        </p>
      </div>
    )
  }
  // success
  const amount =
    banner.amount != null && banner.currency
      ? new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: banner.currency.toUpperCase(),
          maximumFractionDigits: 0,
        }).format((banner.amount ?? 0) / 100)
      : null
  return (
    <div className="mb-10 ornament border border-gold-400 bg-gold-50 p-8 text-center">
      <div className="fleur">✦ ❦ ✦</div>
      <span className="eyebrow eyebrow-both mt-6">Thank you</span>
      <h3 className="mt-5 font-serif text-3xl font-medium">
        Your contribution is{" "}
        <span className="italic font-normal text-gold-600">received</span>.
      </h3>
      {amount && (
        <p className="mt-3 text-base text-navy-800/85">
          {banner.mode === "subscription"
            ? `${amount} per month — recurring`
            : `${amount} — one-time`}
        </p>
      )}
      {banner.email && (
        <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-navy-800/55">
          A receipt is on its way to {banner.email}.
        </p>
      )}
      <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link href="/member" className="btn-primary">
          Join Europe First <span className="font-serif">→</span>
        </Link>
        <Link href="/" className="btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
