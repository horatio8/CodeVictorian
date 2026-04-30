import Link from "next/link"
import { Share2, Shield, Users, CheckCircle } from "lucide-react"
import PetitionForm from "@/components/PetitionForm"
import {
  CURRENT_SIGNATURES,
  showSignatureCounter,
  nextGoal,
} from "@/lib/petition-stats"
import { getPetitionPage } from "@/lib/cms"

const FALLBACK_DEMANDS: { roman: string; title: string; body: string }[] = [
  {
    roman: "I",
    title: "Enforce existing deportation orders",
    body:
      "Immediately execute the over 1.2 million pending deportation orders across the EU, ending the policy of de facto amnesty through non-enforcement.",
  },
  {
    roman: "II",
    title: "Reform the immigration system",
    body:
      "Enforce strict borders of the EU. Close loopholes that allow systematic abuse. Implement offshore processing centres for all new asylum seekers outside EU territory.",
  },
  {
    roman: "III",
    title: "Establish a remigration framework",
    body:
      "Develop and implement transparent remigration policies across all EU member states.",
  },
]

export default async function PetitionPage() {
  const cms = await getPetitionPage()
  const heroEyebrow = cms?.heroEyebrow ?? "Active Petition"
  const heroHeadline =
    cms?.heroHeadline ?? "Defend Europe’s {italic}Future{/italic}"
  const heroLede =
    cms?.heroLede ??
    "Sign our petition calling on EU institutions to enforce existing deportation orders, reform the immigration system, and establish a transparent remigration framework across all member states."
  const demands =
    cms?.demands && cms.demands.length > 0 ? cms.demands : FALLBACK_DEMANDS
  const preamble =
    cms?.preamble ??
    "“We, the undersigned citizens of Europe, call upon the European Parliament, the European Commission, and all national governments of EU member states to:"
  const closing =
    cms?.closing ??
    "Signed by the citizens of Europe and friends of Europe across the free world.”"
  const showCounter = showSignatureCounter()
  const goal = nextGoal(CURRENT_SIGNATURES)
  const progressPct = Math.min(100, Math.round((CURRENT_SIGNATURES / goal) * 100))
  const remaining = Math.max(0, goal - CURRENT_SIGNATURES)

  // Render headline with optional {italic}…{/italic} markers as the gold accent.
  const headlineParts = heroHeadline.split(/\{italic\}|\{\/italic\}/)

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">{heroEyebrow}</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            {headlineParts.map((p, i) =>
              i % 2 === 1 ? (
                <span key={i} className="italic font-normal text-gold-400">{p}</span>
              ) : (
                <span key={i}>{p}</span>
              ),
            )}
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">{heroLede}</p>
        </div>
      </section>

      {/* Progress — only shown after we cross the credibility threshold */}
      {showCounter && (
        <section className="bg-navy-800 py-10 border-b border-gold-400/20 on-dark">
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex items-end justify-between">
              <div>
                <div className="font-serif text-4xl font-medium text-gold-400">
                  {CURRENT_SIGNATURES.toLocaleString("en-GB")}
                </div>
                <div className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-white/55">
                  signatures collected
                </div>
              </div>
              <div className="text-right">
                <div className="font-serif text-2xl font-medium text-white/85">
                  {goal.toLocaleString("en-GB")}
                </div>
                <div className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-white/55">
                  next milestone
                </div>
              </div>
            </div>
            <div className="mt-5 h-px w-full bg-gold-400/25" />
            <div className="h-1 w-full bg-white/5">
              <div
                className="h-1 bg-gold-400 transition-all duration-1000"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="mt-3 text-center font-mono text-[0.625rem] uppercase tracking-[0.2em] text-white/50">
              {remaining.toLocaleString("en-GB")} more signatures to reach our goal
            </p>
          </div>
        </section>
      )}

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
                <p className="font-quote text-lg leading-relaxed text-navy-800">
                  {preamble}
                </p>
                <ol className="mt-8 space-y-6 text-base leading-relaxed text-navy-800/85">
                  {demands.map((d, i) => (
                    <li key={d.roman ?? i} className="flex gap-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold-400/40 font-serif text-lg italic text-gold-400">
                        {d.roman}
                      </span>
                      <span>
                        <strong className="block font-serif text-xl font-medium not-italic text-navy-800">
                          {d.title}
                        </strong>
                        <span className="mt-1 block">{d.body}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-8 font-quote text-lg leading-relaxed text-navy-800/85">
                  {closing}
                </p>
              </div>

              {/* Social sharing */}
              <div className="mt-12">
                <span className="eyebrow">Spread the Word</span>
                <h3 className="mt-5 font-serif text-2xl font-medium">Share this petition</h3>
                <p className="mt-2 text-base text-navy-800/70">
                  Reach more Europeans. Every signature increases the political weight
                  of the petition.
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
              <PetitionForm sticky />
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
              { icon: Users,  title: "Continent-Wide", desc: "Sign with citizens across Europe and the diaspora." },
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
                  <p className="mt-2 text-sm text-navy-800/65">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next-step CTA — petition → donate → member */}
      <section className="gradient-navy py-24 text-center on-dark">
        <div className="mx-auto max-w-3xl px-6">
          <div className="fleur">✦ ❦ ✦</div>
          <h2 className="mt-6 font-serif text-4xl font-medium text-white sm:text-5xl">
            Signed?{" "}
            <span className="italic font-normal text-gold-400">Take the next step.</span>
          </h2>
          <p className="lede mx-auto mt-5 max-w-xl">
            Signing is the start. Patrons fund the work, members carry it forward.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/donate" className="btn-primary">Support the Cause</Link>
            <Link href="/member" className="btn-secondary">Join Europe First</Link>
          </div>
        </div>
      </section>
    </>
  )
}

