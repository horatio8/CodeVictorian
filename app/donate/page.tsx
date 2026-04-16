"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, Shield, Lock, CreditCard, CheckCircle } from "lucide-react"

const presets = [65, 135, 265, 600, 1500]

const impact = [
  { amount: "€65", desc: "Prints and distributes 500 campaign leaflets across a city" },
  { amount: "€135", desc: "Sponsors one local community awareness event" },
  { amount: "€265", desc: "Funds legal research for a policy briefing paper" },
  { amount: "€600", desc: "Supports a regional campaign office for one month" },
  { amount: "€1,500", desc: "Sponsors a full delegation to the European Heritage Summit" },
]

export default function DonatePage() {
  const [selected, setSelected] = useState<number | null>(135)
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly")

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 40% 60%, rgba(212,175,55,0.4) 0%, transparent 50%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Support the Cause</span>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Fund the Fight<br />
            <span className="text-gold-400">for Europe</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            Every euro directly supports our campaigns, policy research, legal challenges,
            and grassroots organising across the continent. Your generosity makes change possible.
          </p>
        </div>
      </section>

      {/* Donation form */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-6 sm:p-10">
                <h2 className="font-serif text-2xl font-bold">Make a Donation</h2>
                <p className="mt-1 text-sm text-gray-500">All donations are processed securely in EUR.</p>

                {/* Frequency toggle */}
                <div className="mt-6 inline-flex rounded-lg bg-navy-50 p-1">
                  <button
                    onClick={() => setFrequency("once")}
                    className={`rounded-md px-5 py-2.5 text-sm font-semibold transition-all ${
                      frequency === "once" ? "bg-white text-navy-700 shadow-sm" : "text-gray-500"
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setFrequency("monthly")}
                    className={`rounded-md px-5 py-2.5 text-sm font-semibold transition-all ${
                      frequency === "monthly" ? "bg-white text-navy-700 shadow-sm" : "text-gray-500"
                    }`}
                  >
                    Monthly
                  </button>
                </div>

                {/* Amount selection */}
                <div className="mt-6">
                  <label className="text-sm font-semibold text-navy-700">Select amount</label>
                  <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-5">
                    {presets.map((a) => (
                      <button
                        key={a}
                        onClick={() => setSelected(a)}
                        className={`rounded-lg border-2 py-4 text-center text-base font-bold transition-all ${
                          selected === a
                            ? "border-gold-400 bg-gold-400/5 text-gold-600 ring-2 ring-gold-400/20"
                            : "border-gray-200 text-navy-700 hover:border-gold-400/50"
                        }`}
                      >
                        &euro;{a.toLocaleString("en-GB")}
                      </button>
                    ))}
                    <button
                      onClick={() => setSelected(null)}
                      className={`rounded-lg border-2 py-4 text-center text-sm font-bold transition-all ${
                        selected === null
                          ? "border-gold-400 bg-gold-400/5 text-gold-600 ring-2 ring-gold-400/20"
                          : "border-gray-200 text-navy-700 hover:border-gold-400/50"
                      }`}
                    >
                      Other
                    </button>
                  </div>
                  {selected === null && (
                    <div className="mt-3">
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">&euro;</span>
                        <input
                          type="number"
                          placeholder="Enter amount"
                          className="form-input !pl-9"
                          min="1"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Personal info */}
                <div className="mt-8 border-t border-gray-100 pt-8">
                  <h3 className="text-sm font-semibold text-navy-700">Your Details</h3>
                  <div className="mt-4 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="First name" className="form-input" required />
                      <input type="text" placeholder="Last name" className="form-input" required />
                    </div>
                    <input type="email" placeholder="Email address" className="form-input" required />
                    <select className="form-input text-gray-500">
                      <option value="">Country of residence</option>
                      <option>Austria</option><option>Belgium</option><option>France</option>
                      <option>Germany</option><option>Italy</option><option>Netherlands</option>
                      <option>Spain</option><option>Other EU Country</option>
                    </select>
                  </div>
                </div>

                {/* Payment */}
                <div className="mt-8 border-t border-gray-100 pt-8">
                  <h3 className="text-sm font-semibold text-navy-700">Payment Method</h3>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-lg border-2 border-gold-400 bg-gold-400/5 p-4">
                      <label className="flex items-center gap-3 text-sm font-semibold text-navy-700">
                        <input type="radio" name="payment" defaultChecked className="accent-gold-400" />
                        <CreditCard className="h-4 w-4" />
                        Credit / Debit Card
                      </label>
                    </div>
                    <div className="rounded-lg border-2 border-gray-200 p-4 transition-colors hover:border-gold-400/50">
                      <label className="flex items-center gap-3 text-sm font-semibold text-navy-700">
                        <input type="radio" name="payment" className="accent-gold-400" />
                        Bank Transfer (SEPA)
                      </label>
                    </div>
                  </div>
                </div>

                {/* Consent */}
                <div className="mt-6 space-y-2">
                  <label className="flex items-start gap-2 text-xs text-gray-500">
                    <input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 rounded accent-gold-400" />
                    <span>
                      I confirm this donation is made from my own funds and I agree to the{" "}
                      <Link href="/privacy" className="text-gold-500 underline">privacy policy</Link>.
                    </span>
                  </label>
                  <label className="flex items-start gap-2 text-xs text-gray-500">
                    <input type="checkbox" className="mt-0.5 h-3.5 w-3.5 rounded accent-gold-400" />
                    <span>I would like to receive updates about how my donation is used.</span>
                  </label>
                </div>

                <button className="btn-primary mt-6 w-full text-base">
                  <Heart className="mr-2 h-4 w-4" />
                  Donate {selected ? `€${selected.toLocaleString("en-GB")}` : ""} {frequency === "monthly" ? "Monthly" : ""}
                </button>

                <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> SSL Secured</span>
                  <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> GDPR Compliant</span>
                </div>
              </div>
            </div>

            {/* Impact sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-6">
                <div className="card p-6">
                  <h3 className="font-serif text-lg font-bold">Your Impact</h3>
                  <p className="mt-1 text-sm text-gray-500">See what your donation achieves.</p>
                  <ul className="mt-5 space-y-4">
                    {impact.map((item) => (
                      <li key={item.amount} className="flex items-start gap-3">
                        <span className="shrink-0 rounded bg-gold-400/10 px-2 py-1 text-xs font-bold text-gold-600">
                          {item.amount}
                        </span>
                        <span className="text-sm text-gray-600">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="font-serif text-lg font-bold">Transparency Promise</h3>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Annual audited financial reports published online",
                      "Donor funds ring-fenced for campaign activities",
                      "Full compliance with EU electoral finance regulations",
                      "Tax-deductible where applicable under national law",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
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
