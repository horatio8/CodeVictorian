"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

const presets = [65, 135, 265, 600, 1500]

const impact = [
  { amount: "€65",     desc: "Prints and distributes 500 campaign leaflets across a city" },
  { amount: "€135",    desc: "Sponsors one local community awareness event" },
  { amount: "€265",    desc: "Funds legal research for a policy briefing paper" },
  { amount: "€600",    desc: "Supports a regional campaign office for one month" },
  { amount: "€1,500",  desc: "Sponsors a full delegation to the European Heritage Summit" },
]

export default function DonatePage() {
  const [selected, setSelected] = useState<number | null>(135)
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly")

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
                <p className="mt-2 font-lede text-sm text-navy-800/60">
                  All donations are processed securely in EUR.
                </p>

                {/* Frequency tabs — flat row */}
                <label className="mt-8 block font-mono text-[0.625rem] font-medium uppercase tracking-[0.28em] text-navy-800/60 mb-3">
                  Frequency
                </label>
                <div className="grid grid-cols-2 gap-0 border border-gold-400/30">
                  <button
                    onClick={() => setFrequency("once")}
                    className={`py-4 text-center font-mono text-[0.6875rem] font-medium uppercase tracking-[0.24em] transition-colors border-r border-gold-400/30 ${
                      frequency === "once"
                        ? "bg-gold-400 text-navy-900"
                        : "bg-transparent text-navy-800/65 hover:bg-gold-400/10"
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setFrequency("monthly")}
                    className={`py-4 text-center font-mono text-[0.6875rem] font-medium uppercase tracking-[0.24em] transition-colors ${
                      frequency === "monthly"
                        ? "bg-gold-400 text-navy-900"
                        : "bg-transparent text-navy-800/65 hover:bg-gold-400/10"
                    }`}
                  >
                    Monthly
                  </button>
                </div>

                {/* Amount selection — 6-tile square grid */}
                <label className="mt-8 block font-mono text-[0.625rem] font-medium uppercase tracking-[0.28em] text-navy-800/60 mb-3">
                  Amount
                </label>
                <div className="grid grid-cols-3 gap-0 border border-gold-400/30 sm:grid-cols-6">
                  {presets.map((a, i) => (
                    <button
                      key={a}
                      onClick={() => setSelected(a)}
                      className={`aspect-square flex flex-col items-center justify-center gap-1 transition-colors border-r border-b border-gold-400/20 sm:border-b-0 ${
                        i === presets.length - 1 ? "sm:border-r" : ""
                      } ${
                        selected === a
                          ? "bg-gold-400 text-navy-900 border-gold-400"
                          : "bg-transparent text-navy-800 hover:bg-gold-400/10"
                      }`}
                    >
                      <span className="font-serif text-2xl font-medium">€{a.toLocaleString("en-GB")}</span>
                      <span className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] opacity-70">
                        {frequency === "monthly" ? "/mo" : "once"}
                      </span>
                    </button>
                  ))}
                  <button
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
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-serif text-lg text-navy-800/55">€</span>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        className="form-input !pl-9"
                        min="1"
                      />
                    </div>
                  </div>
                )}

                {/* Personal info */}
                <div className="mt-10 border-t border-gold-400/20 pt-8">
                  <span className="eyebrow">Your Details</span>
                  <div className="mt-5 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="First name" className="form-input" required />
                      <input type="text" placeholder="Last name" className="form-input" required />
                    </div>
                    <input type="email" placeholder="your name@correspondence.eu" className="form-input" required />
                    <select className="form-input">
                      <option value="">Country of residence</option>
                      <option>Austria</option><option>Belgium</option><option>France</option>
                      <option>Germany</option><option>Italy</option><option>Netherlands</option>
                      <option>Spain</option><option>Other EU Country</option>
                    </select>
                  </div>
                </div>

                {/* Payment */}
                <div className="mt-10 border-t border-gold-400/20 pt-8">
                  <span className="eyebrow">Payment Method</span>
                  <div className="mt-5 space-y-0 border border-gold-400/25">
                    <label className="flex items-center gap-3 border-b border-gold-400/20 bg-gold-400/5 p-5 font-lede text-base text-navy-800 cursor-pointer">
                      <input type="radio" name="payment" defaultChecked className="accent-gold-400" />
                      <span className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.24em]">
                        Credit / Debit Card
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-5 font-lede text-base text-navy-800 transition-colors hover:bg-gold-400/5 cursor-pointer">
                      <input type="radio" name="payment" className="accent-gold-400" />
                      <span className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.24em]">
                        Bank Transfer (SEPA)
                      </span>
                    </label>
                  </div>
                </div>

                {/* Consent */}
                <div className="mt-8 space-y-3">
                  <label className="flex items-start gap-2 font-lede text-xs text-navy-800/65">
                    <input type="checkbox" required className="mt-1 h-3.5 w-3.5 accent-gold-400" />
                    <span>
                      I confirm this donation is made from my own funds and I agree to the{" "}
                      <Link href="/privacy" className="text-gold-600 underline underline-offset-2">privacy policy</Link>.
                    </span>
                  </label>
                  <label className="flex items-start gap-2 font-lede text-xs text-navy-800/65">
                    <input type="checkbox" className="mt-1 h-3.5 w-3.5 accent-gold-400" />
                    <span>I would like to receive updates about how my donation is used.</span>
                  </label>
                </div>

                <button className="btn-primary mt-8 w-full">
                  Donate {selected ? `€${selected.toLocaleString("en-GB")}` : ""}
                  {frequency === "monthly" ? " Monthly" : ""} <span className="font-serif">→</span>
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
                  <h3 className="mt-4 font-serif text-2xl font-medium">
                    Where it goes.
                  </h3>
                  <p className="mt-2 font-lede text-sm text-navy-800/65">
                    See what your donation achieves.
                  </p>
                  <ul className="mt-6 space-y-0 border-t border-gold-400/20">
                    {impact.map((item) => (
                      <li key={item.amount} className="flex items-start gap-4 border-b border-gold-400/15 py-4 last:border-b-0">
                        <span className="shrink-0 font-serif text-xl italic text-gold-400">
                          {item.amount}
                        </span>
                        <span className="font-lede text-sm leading-relaxed text-navy-800/75">{item.desc}</span>
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
                      <li key={item} className="flex items-start gap-3 font-lede text-sm text-navy-800/75">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
