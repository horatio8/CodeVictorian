import type { Metadata } from "next"
import Link from "next/link"
import { getPrivacyPage, type PrivacyPage } from "@/lib/cms"

export const metadata: Metadata = { title: "Privacy Policy" }

// Hardcoded fallback used when the CMS singleton is empty or unreachable.
// Editors can completely override every field via /studio → Privacy page.
const FALLBACK: Required<Omit<PrivacyPage, "sections">> & {
  sections: NonNullable<PrivacyPage["sections"]>
} = {
  heroEyebrow: "Legal",
  heroHeadline: "Privacy",
  heroItalicWord: "Policy",
  lastRevised: "Last revised · I April MMXXVI · Effective across all Code Victorian services",
  intro:
    "Code Victorian (“we”, “us”, “our”) is committed to protecting your personal data. This privacy policy explains how we collect, use, store, and protect information in accordance with the General Data Protection Regulation (EU) 2016/679 (GDPR) and applicable national data protection laws.",
  sections: [
    {
      roman: "I.",
      title: "Data Controller",
      body:
        "The data controller is Code Victorian, headquartered in Budapest, Hungary. For all data protection enquiries, contact our Data Protection Officer through the contact form.",
    },
    {
      roman: "II.",
      title: "Data We Collect",
      body: "We may collect the following categories of personal data:",
      bullets: [
        "Identity data: name, country of residence, nationality",
        "Contact data: email address, phone number, postal address",
        "Financial data: payment details (processed securely via third-party payment processors; we do not store card details)",
        "Petition data: name, country, and signature status (displayed publicly with your consent)",
        "Technical data: IP address, browser type, device information, cookies (see Cookie Policy below)",
        "Communication data: messages sent via our contact forms or email",
        "Membership data: membership tier, payment history, event attendance",
      ],
    },
    {
      roman: "III.",
      title: "Legal Basis for Processing",
      body: "We process your data on the following legal bases under GDPR Article 6:",
      bullets: [
        "Consent (Art. 6(1)(a)): petition signatures, newsletter subscriptions, marketing communications, non-essential cookies",
        "Contract (Art. 6(1)(b)): membership services, donation processing, store purchases",
        "Legitimate interest (Art. 6(1)(f)): website analytics (anonymised), fraud prevention, internal administration",
        "Legal obligation (Art. 6(1)(c)): financial record-keeping, electoral compliance reporting",
      ],
    },
    {
      roman: "IV.",
      title: "How We Use Your Data",
      body:
        "Your data is used to: process petition signatures; manage membership accounts; process donations and purchases; send campaign updates (with your consent); organise events; respond to enquiries; comply with legal obligations; and improve our website and services.",
    },
    {
      roman: "V.",
      title: "Data Sharing & Transfers",
      body:
        "We do not sell your data. We may share data with: trusted service providers (email: Mailerlite; payments: secure payment processor; analytics: Google Analytics with IP anonymisation); legal authorities when required by law; and EU institutions when submitting petition signatures. Where data is transferred outside the EU/EEA, we ensure adequate safeguards under GDPR Chapter V.",
    },
    {
      roman: "VI.",
      title: "Data Retention",
      body:
        "We retain personal data only as long as necessary for the purposes collected: petition signatures for the duration of the campaign plus 12 months; membership data for the duration of membership plus 24 months; financial records for 7 years (legal requirement); contact form messages for 12 months; website analytics data (anonymised) for 26 months.",
    },
    {
      roman: "VII.",
      title: "Your Rights (GDPR)",
      body: "Under GDPR, you have the right to:",
      bullets: [
        "Access: request a copy of your personal data",
        "Rectification: correct inaccurate or incomplete data",
        "Erasure: request deletion of your data (‘right to be forgotten’)",
        "Restriction: limit how we process your data",
        "Portability: receive your data in a structured, machine-readable format",
        "Objection: object to processing based on legitimate interest or direct marketing",
        "Withdraw consent: at any time, without affecting prior lawful processing",
        "Lodge a complaint: with your national data protection authority",
      ],
    },
    {
      roman: "VIII.",
      title: "Cookie Policy",
      body:
        "We use cookies in compliance with GDPR and the ePrivacy Directive. No non-essential cookies are loaded until you provide explicit consent via our cookie banner (opt-in model). You can manage your cookie preferences at any time by clicking “Manage Cookies” in the site footer or clearing your browser cookies.",
    },
    {
      roman: "IX.",
      title: "Security",
      body:
        "We implement appropriate technical and organisational measures to protect your data, including SSL/TLS encryption, access controls, regular security audits, and data minimisation practices. Our hosting infrastructure is located within the EU.",
    },
    {
      roman: "X.",
      title: "Changes to This Policy",
      body:
        "We may update this policy from time to time. Significant changes will be communicated via email (for members and subscribers) and prominently displayed on our website.",
    },
  ],
  calloutHeadline: "Questions about your data?",
  calloutBody:
    "Reach our Data Protection Officer via the contact form.",
}

export default async function PrivacyPage() {
  const cms = await getPrivacyPage()
  const heroEyebrow = cms?.heroEyebrow ?? FALLBACK.heroEyebrow
  const heroHeadline = cms?.heroHeadline ?? FALLBACK.heroHeadline
  const heroItalicWord = cms?.heroItalicWord ?? FALLBACK.heroItalicWord
  const lastRevised = cms?.lastRevised ?? FALLBACK.lastRevised
  const intro = cms?.intro ?? FALLBACK.intro
  const sections =
    cms?.sections && cms.sections.length > 0 ? cms.sections : FALLBACK.sections
  const calloutHeadline = cms?.calloutHeadline ?? FALLBACK.calloutHeadline
  const calloutBody = cms?.calloutBody ?? FALLBACK.calloutBody

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">{heroEyebrow}</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl">
            {heroHeadline}{" "}
            <span className="italic font-normal text-gold-400">{heroItalicWord}</span>
          </h1>
          <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-white/55">
            {lastRevised}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="terms-body">
          <div className="dbl-rule mb-10" />

          <p className="font-lede text-lg leading-relaxed text-navy-800/80">{intro}</p>

          {sections.map((s, i) => {
            const id = (s.title ?? "")
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")
            return (
              <div key={`${s.roman}-${i}`}>
                <h2
                  id={id || undefined}
                  className="mt-12 flex items-baseline gap-4 font-serif text-2xl font-medium text-navy-800"
                >
                  <span className="text-xl italic text-gold-400">{s.roman}</span>
                  <span>{s.title}</span>
                </h2>
                {s.body && (
                  <p className="mt-4 font-lede text-base leading-relaxed text-navy-800/75">
                    {s.body}
                  </p>
                )}
                {s.bullets && s.bullets.length > 0 && (
                  <ul className="mt-4 space-y-0 border-y border-gold-400/20">
                    {s.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 border-b border-gold-400/15 py-3 font-lede text-base text-navy-800/75 last:border-b-0"
                      >
                        <span className="text-gold-400">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}

          <div className="mt-14 border border-gold-400/40 bg-ivory p-8 ornament">
            <span className="eyebrow">Data Protection</span>
            <h3 className="mt-4 font-serif text-2xl font-medium">{calloutHeadline}</h3>
            <p className="mt-3 font-lede text-base leading-relaxed text-navy-800/75">
              {calloutBody}{" "}
              <Link href="/contact" className="text-gold-600 underline underline-offset-2">
                contact form
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
