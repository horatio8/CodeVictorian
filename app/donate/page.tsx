"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
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

export default function DonatePage() {
  const [currency, setCurrency] = useState<Currency>("EUR")
  const [frequency, setFrequency] = useState<Frequency>("monthly")
  const presets = PRESET_AMOUNTS[currency]
  const [selected, setSelected] = useState<number | null>(presets[1] ?? presets[0])
  const [customAmount, setCustomAmount] = useState<string>("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const symbol = SYMBOL[currency]

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
          <span className="eyebrow eyebrow-both">Patronage · Tax-Deductible</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            Fund the{" "}
            <span className="italic font-normal text-gold-400">Fight</span>
            <br />
            for Europe
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">
            Every euro directly supports our campaigns, policy research, legal challenges,
            and grassroots organising across the continent. Your generosity makes change possible.
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
                      <span className="font-serif text-2xl font-medium">{symbol}{a.toLocaleString("en-GB")}</span>
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
                        <span className="shrink-0 font-serif text-xl italic text-gold-400">
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
                    {[
                      "Annual audited financial reports published online",
                      "Donor funds ring-fenced for campaign activities",
                      "Full compliance with EU electoral finance regulations",
                      "Tax-deductible where applicable under national law",
                    ].map((item) => (
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
