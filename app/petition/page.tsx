"use client"

import Link from "next/link"
import { Share2, Shield, Users, CheckCircle } from "lucide-react"

const countries = [
  "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
  "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary",
  "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta",
  "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia",
  "Spain", "Sweden", "Other EU Country",
]

export default function PetitionPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">Active Petition</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            Defend Europe&rsquo;s{" "}
            <span className="italic font-normal text-gold-400">Future</span>
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">
            Sign our petition calling on EU institutions to adopt meaningful immigration
            reform, enforce existing deportation orders, and invest in European cultural preservation.
          </p>
        </div>
      </section>

      {/* Progress */}
      <section className="bg-navy-800 py-10 border-b border-gold-400/20 on-dark">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <div className="font-serif text-4xl font-medium text-gold-400">127,843</div>
              <div className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-white/55">signatures collected</div>
            </div>
            <div className="text-right">
              <div className="font-serif text-2xl font-medium text-white/85">200,000</div>
              <div className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-white/55">target</div>
            </div>
          </div>
          <div className="mt-5 h-px w-full bg-gold-400/25" />
          <div className="h-1 w-full bg-white/5">
            <div className="h-1 bg-gold-400 transition-all duration-1000" style={{ width: "64%" }} />
          </div>
          <p className="mt-3 text-center font-mono text-[0.625rem] uppercase tracking-[0.2em] text-white/50">
            72,157 more signatures needed to reach our goal
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. I</span>
            <span className="line" />
            <span className="label">The Statement</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Petition text */}
            <div className="lg:col-span-3">
              <span className="eyebrow">The Petition</span>
              <h2 className="mt-5 font-serif text-3xl font-medium sm:text-4xl">
                A call to{" "}
                <span className="italic font-normal text-gold-400">account</span>.
              </h2>
              <div className="mt-10 border border-gold-400/30 bg-ivory p-8 sm:p-10">
                <p className="font-lede text-lg italic leading-relaxed text-navy-800">
                  &ldquo;We, the undersigned citizens of Europe, call upon the European Parliament,
                  the European Commission, and all national governments of EU member states to:
                </p>
                <ol className="mt-8 space-y-5 font-lede text-base leading-relaxed text-navy-800/80">
                  {[
                    ["Enforce existing deportation orders", " — immediately execute the over 1.2 million pending deportation orders across the EU, ending the policy of de facto amnesty through non-enforcement."],
                    ["Reform the asylum system", " — close loopholes that allow systematic abuse, require thorough vetting and documentation, and process claims at external processing centres."],
                    ["Establish a remigration framework", " — develop lawful, transparent mechanisms for the return of individuals who pose a threat to public order or who have no legal basis for continued residence."],
                    ["Invest in cultural preservation", " — allocate dedicated EU funding for the protection of European languages, heritage sites, traditions, and cultural institutions."],
                    ["Respect democratic will", " — conduct binding referenda on immigration policy in each member state, ensuring that the people have a direct say in the future of their nations.\u201D"],
                  ].map(([bold, rest], idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-gold-400/40 font-serif text-lg italic text-gold-400">
                        {["I","II","III","IV","V"][idx]}
                      </span>
                      <span>
                        <strong className="font-serif text-lg not-italic font-medium text-navy-800">{bold}</strong>
                        {rest}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Social sharing */}
              <div className="mt-12">
                <span className="eyebrow">Spread the Word</span>
                <h3 className="mt-5 font-serif text-2xl font-medium">Share This Petition</h3>
                <p className="mt-2 font-lede text-base text-navy-800/70">
                  Help us reach 200,000 signatures by spreading the word.
                </p>
                <div className="mt-5 flex flex-wrap gap-0 border border-gold-400/25">
                  {["Facebook", "X (Twitter)", "WhatsApp", "Telegram", "Email"].map((platform, i, arr) => (
                    <button
                      key={platform}
                      className={`flex items-center gap-2 px-5 py-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-navy-800/75 transition-colors hover:bg-gold-400/10 hover:text-gold-600 ${
                        i < arr.length - 1 ? "border-r border-gold-400/25" : ""
                      }`}
                    >
                      <Share2 className="h-3.5 w-3.5" />
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Signature form */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 ornament border border-gold-400/40 bg-ivory p-8 sm:p-10">
                <span className="eyebrow">Sign Now</span>
                <h3 className="mt-4 font-serif text-2xl font-medium">
                  Add your name.
                </h3>
                <p className="mt-2 font-lede text-sm text-navy-800/65">
                  Your signature is powerful. Add it today.
                </p>
                <form className="mt-7 space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="First name" className="form-input" required />
                    <input type="text" placeholder="Last name" className="form-input" required />
                  </div>
                  <input type="email" placeholder="your name@correspondence.eu" className="form-input" required />
                  <select className="form-input" required>
                    <option value="">Select your country</option>
                    {countries.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <input type="text" placeholder="City (optional)" className="form-input" />
                  <label className="flex items-start gap-2 font-lede text-xs text-navy-800/65">
                    <input type="checkbox" required className="mt-1 h-3.5 w-3.5 accent-gold-400" />
                    <span>
                      I agree to the{" "}
                      <Link href="/privacy" className="text-gold-600 underline underline-offset-2">privacy policy</Link>
                      {" "}and consent to my name and country being displayed as a signatory.
                    </span>
                  </label>
                  <label className="flex items-start gap-2 font-lede text-xs text-navy-800/65">
                    <input type="checkbox" className="mt-1 h-3.5 w-3.5 accent-gold-400" />
                    <span>Keep me updated on campaign news and events (optional).</span>
                  </label>
                  <button type="submit" className="btn-primary w-full">
                    Add My Signature <span className="font-serif">→</span>
                  </button>
                </form>
                <div className="mt-6 flex items-center gap-4 border-t border-gold-400/20 pt-5">
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-6 w-6 border border-gold-400/40 bg-navy-100/40" />
                    ))}
                  </div>
                  <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-navy-800/55">
                    <strong className="font-sans text-navy-800">847 people</strong> signed today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-ivory py-16 border-y border-gold-400/20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 gap-0 border border-gold-400/25 sm:grid-cols-3">
            {[
              { icon: Shield, title: "GDPR Compliant", desc: "Your data is protected under EU privacy law." },
              { icon: Users, title: "127,843 Signatures", desc: "Join a continent-wide movement for change." },
              { icon: CheckCircle, title: "Verified Process", desc: "Every signature is validated and counted." },
            ].map((item, i, arr) => (
              <div
                key={item.title}
                className={`flex flex-col items-center gap-4 p-8 text-center ${
                  i < arr.length - 1 ? "sm:border-r sm:border-gold-400/25" : ""
                } ${i < 2 ? "border-b border-gold-400/25 sm:border-b-0" : ""}`}
              >
                <item.icon className="h-7 w-7 text-gold-400" />
                <div>
                  <h4 className="font-serif text-lg font-medium">{item.title}</h4>
                  <p className="mt-2 font-lede text-sm text-navy-800/65">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
