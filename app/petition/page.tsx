"use client"

import Link from "next/link"
import { PenLine, Share2, Users, Shield, CheckCircle } from "lucide-react"

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
      <section className="gradient-navy relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.4) 0%, transparent 50%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5">
            <PenLine className="h-3.5 w-3.5 text-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Active Petition
            </span>
          </div>
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Defend Europe&rsquo;s Future
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            Sign our petition calling on EU institutions to adopt meaningful immigration
            reform, enforce existing deportation orders, and invest in European cultural preservation.
          </p>
        </div>
      </section>

      {/* Progress */}
      <section className="bg-navy-800 py-8">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <div className="font-serif text-3xl font-bold text-gold-400">127,843</div>
              <div className="text-sm text-white/60">signatures collected</div>
            </div>
            <div className="text-right">
              <div className="font-serif text-xl font-bold text-white/80">200,000</div>
              <div className="text-sm text-white/60">target</div>
            </div>
          </div>
          <div className="mt-4 h-4 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-1000"
              style={{ width: "64%" }}
            />
          </div>
          <p className="mt-2 text-center text-xs text-white/40">72,157 more signatures needed to reach our goal</p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Petition text */}
            <div className="lg:col-span-3">
              <h2 className="gold-accent relative font-serif text-2xl font-bold sm:text-3xl">
                The Petition
              </h2>
              <div className="mt-8 rounded-xl bg-white p-6 shadow-sm sm:p-8">
                <p className="font-serif text-base italic leading-relaxed text-gray-700">
                  &ldquo;We, the undersigned citizens of Europe, call upon the European Parliament,
                  the European Commission, and all national governments of EU member states to:
                </p>
                <ol className="mt-6 space-y-4 text-sm leading-relaxed text-gray-700">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-xs font-bold text-gold-600">1</span>
                    <span><strong>Enforce existing deportation orders</strong> — immediately execute the over 1.2 million pending deportation orders across the EU, ending the policy of de facto amnesty through non-enforcement.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-xs font-bold text-gold-600">2</span>
                    <span><strong>Reform the asylum system</strong> — close loopholes that allow systematic abuse, require thorough vetting and documentation, and process claims at external processing centres.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-xs font-bold text-gold-600">3</span>
                    <span><strong>Establish a remigration framework</strong> — develop lawful, transparent mechanisms for the return of individuals who pose a threat to public order or who have no legal basis for continued residence.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-xs font-bold text-gold-600">4</span>
                    <span><strong>Invest in cultural preservation</strong> — allocate dedicated EU funding for the protection of European languages, heritage sites, traditions, and cultural institutions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-xs font-bold text-gold-600">5</span>
                    <span><strong>Respect democratic will</strong> — conduct binding referenda on immigration policy in each member state, ensuring that the people have a direct say in the future of their nations.&rdquo;</span>
                  </li>
                </ol>
              </div>

              {/* Social sharing */}
              <div className="mt-8">
                <h3 className="font-serif text-lg font-bold">Share This Petition</h3>
                <p className="mt-1 text-sm text-gray-500">Help us reach 200,000 signatures by spreading the word.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {["Facebook", "X (Twitter)", "WhatsApp", "Telegram", "Email"].map((platform) => (
                    <button
                      key={platform}
                      className="inline-flex items-center gap-2 rounded-lg border border-navy-100 bg-white px-4 py-2.5 text-xs font-semibold text-navy-700 transition-all hover:border-gold-400 hover:bg-gold-400/5"
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
              <div className="sticky top-28 card p-6 sm:p-8">
                <div className="mb-1 flex items-center gap-2">
                  <PenLine className="h-5 w-5 text-gold-500" />
                  <h3 className="font-serif text-xl font-bold">Sign Now</h3>
                </div>
                <p className="text-sm text-gray-500">Your signature is powerful. Add it today.</p>
                <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="First name" className="form-input" required />
                    <input type="text" placeholder="Last name" className="form-input" required />
                  </div>
                  <input type="email" placeholder="Email address" className="form-input" required />
                  <select className="form-input text-gray-500" required>
                    <option value="">Select your country</option>
                    {countries.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <input type="text" placeholder="City (optional)" className="form-input" />
                  <label className="flex items-start gap-2 text-xs text-gray-500">
                    <input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 rounded accent-gold-400" />
                    <span>
                      I agree to the <Link href="/privacy" className="text-gold-500 underline">privacy policy</Link> and
                      consent to my name and country being displayed as a signatory.
                    </span>
                  </label>
                  <label className="flex items-start gap-2 text-xs text-gray-500">
                    <input type="checkbox" className="mt-0.5 h-3.5 w-3.5 rounded accent-gold-400" />
                    <span>Keep me updated on campaign news and events (optional).</span>
                  </label>
                  <button type="submit" className="btn-primary w-full">
                    Add My Signature
                  </button>
                </form>
                <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-4">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-7 w-7 rounded-full bg-navy-200 ring-2 ring-white" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    <strong className="text-navy-700">847 people</strong> signed today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: Shield, title: "GDPR Compliant", desc: "Your data is protected under EU privacy law." },
              { icon: Users, title: "127,843 Signatures", desc: "Join a continent-wide movement for change." },
              { icon: CheckCircle, title: "Verified Process", desc: "Every signature is validated and counted." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 text-center sm:flex-col sm:items-center">
                <item.icon className="h-8 w-8 shrink-0 text-gold-500" />
                <div>
                  <h4 className="font-serif text-sm font-bold">{item.title}</h4>
                  <p className="mt-0.5 text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
