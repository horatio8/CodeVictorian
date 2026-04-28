import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = { title: "Privacy Policy" }

const romanHeading = (n: string, text: string) => (
  <h2 className="mt-12 flex items-baseline gap-4 font-serif text-2xl font-medium text-navy-800">
    <span className="text-xl italic text-gold-400">{n}</span>
    <span>{text}</span>
  </h2>
)

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">Legal</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl">
            Privacy{" "}
            <span className="italic font-normal text-gold-400">Policy</span>
          </h1>
          <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-white/55">
            Last revised · I April MMXXVI · Effective across all Code Victorian services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="terms-body">
          <div className="dbl-rule mb-10" />

          <p className="font-lede text-lg leading-relaxed text-navy-800/80">
            Code Victorian (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal data. This privacy policy explains how we collect, use, store, and protect information in accordance with the <strong>General Data Protection Regulation (EU) 2016/679</strong> (GDPR) and applicable national data protection laws.
          </p>

          {romanHeading("I.", "Data Controller")}
          <p className="mt-4 font-lede text-base leading-relaxed text-navy-800/75">
            The data controller is Code Victorian, headquartered in Budapest, Hungary. For all data protection enquiries, contact our Data Protection Officer through the <Link href="/contact" className="text-gold-600 underline underline-offset-2">contact form</Link>.
          </p>

          {romanHeading("II.", "Data We Collect")}
          <p className="mt-4 font-lede text-base leading-relaxed text-navy-800/75">We may collect the following categories of personal data:</p>
          <ul className="mt-4 space-y-0 border-y border-gold-400/20">
            {[
              "Identity data: name, country of residence, nationality",
              "Contact data: email address, phone number, postal address",
              "Financial data: payment details (processed securely via third-party payment processors; we do not store card details)",
              "Petition data: name, country, and signature status (displayed publicly with your consent)",
              "Technical data: IP address, browser type, device information, cookies (see Cookie Policy below)",
              "Communication data: messages sent via our contact forms or email",
              "Membership data: membership tier, payment history, event attendance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-gold-400/15 py-3 font-lede text-base text-navy-800/75 last:border-b-0">
                <span className="text-gold-400">✦</span>
                {item}
              </li>
            ))}
          </ul>

          {romanHeading("III.", "Legal Basis for Processing")}
          <p className="mt-4 font-lede text-base leading-relaxed text-navy-800/75">We process your data on the following legal bases under GDPR Article 6:</p>
          <ul className="mt-4 space-y-0 border-y border-gold-400/20">
            {[
              "Consent (Art. 6(1)(a)): petition signatures, newsletter subscriptions, marketing communications, non-essential cookies",
              "Contract (Art. 6(1)(b)): membership services, donation processing, store purchases",
              "Legitimate interest (Art. 6(1)(f)): website analytics (anonymised), fraud prevention, internal administration",
              "Legal obligation (Art. 6(1)(c)): financial record-keeping, electoral compliance reporting",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-gold-400/15 py-3 font-lede text-base text-navy-800/75 last:border-b-0">
                <span className="text-gold-400">✦</span>
                {item}
              </li>
            ))}
          </ul>

          {romanHeading("IV.", "How We Use Your Data")}
          <p className="mt-4 font-lede text-base leading-relaxed text-navy-800/75">
            Your data is used to: process petition signatures; manage membership accounts; process donations and purchases; send campaign updates (with your consent); organise events; respond to enquiries; comply with legal obligations; and improve our website and services.
          </p>

          {romanHeading("V.", "Data Sharing & Transfers")}
          <p className="mt-4 font-lede text-base leading-relaxed text-navy-800/75">
            We do not sell your data. We may share data with: trusted service providers (email: Mailerlite; payments: secure payment processor; analytics: Google Analytics with IP anonymisation); legal authorities when required by law; and EU institutions when submitting petition signatures. Where data is transferred outside the EU/EEA, we ensure adequate safeguards under GDPR Chapter V (Standard Contractual Clauses or adequacy decisions).
          </p>

          {romanHeading("VI.", "Data Retention")}
          <p className="mt-4 font-lede text-base leading-relaxed text-navy-800/75">
            We retain personal data only as long as necessary for the purposes collected: petition signatures for the duration of the campaign plus 12 months; membership data for the duration of membership plus 24 months; financial records for 7 years (legal requirement); contact form messages for 12 months; website analytics data (anonymised) for 26 months.
          </p>

          <h2 id="rights" className="mt-12 flex items-baseline gap-4 font-serif text-2xl font-medium text-navy-800">
            <span className="text-xl italic text-gold-400">VII.</span>
            <span>Your Rights (GDPR)</span>
          </h2>
          <p className="mt-4 font-lede text-base leading-relaxed text-navy-800/75">Under GDPR, you have the right to:</p>
          <ul className="mt-4 space-y-0 border-y border-gold-400/20">
            {[
              "Access: request a copy of your personal data",
              "Rectification: correct inaccurate or incomplete data",
              "Erasure: request deletion of your data (\u2018right to be forgotten\u2019)",
              "Restriction: limit how we process your data",
              "Portability: receive your data in a structured, machine-readable format",
              "Objection: object to processing based on legitimate interest or direct marketing",
              "Withdraw consent: at any time, without affecting prior lawful processing",
              "Lodge a complaint: with your national data protection authority",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-gold-400/15 py-3 font-lede text-base text-navy-800/75 last:border-b-0">
                <span className="text-gold-400">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-lede text-base leading-relaxed text-navy-800/75">
            To exercise any of these rights, use our{" "}
            <Link href="/contact" className="text-gold-600 underline underline-offset-2">contact form</Link> and select &ldquo;Data Subject Request&rdquo; as the subject. We will respond within 30 days.
          </p>

          <h2 id="cookies" className="mt-12 flex items-baseline gap-4 font-serif text-2xl font-medium text-navy-800">
            <span className="text-xl italic text-gold-400">VIII.</span>
            <span>Cookie Policy</span>
          </h2>
          <p className="mt-4 font-lede text-base leading-relaxed text-navy-800/75">
            We use cookies in compliance with GDPR and the ePrivacy Directive. <strong>No non-essential cookies are loaded until you provide explicit consent</strong> via our cookie banner (opt-in model).
          </p>
          <div className="mt-6 overflow-x-auto border border-gold-400/25">
            <table className="w-full font-lede text-base">
              <thead>
                <tr className="border-b border-gold-400/25 bg-cream-dark/40">
                  <th className="px-5 py-3 text-left font-mono text-[0.625rem] font-medium uppercase tracking-[0.22em] text-gold-600">Category</th>
                  <th className="px-5 py-3 text-left font-mono text-[0.625rem] font-medium uppercase tracking-[0.22em] text-gold-600">Purpose</th>
                  <th className="px-5 py-3 text-left font-mono text-[0.625rem] font-medium uppercase tracking-[0.22em] text-gold-600">Consent</th>
                </tr>
              </thead>
              <tbody className="text-navy-800/75">
                <tr className="border-b border-gold-400/15">
                  <td className="px-5 py-3">Strictly Necessary</td>
                  <td className="px-5 py-3">Site functionality, security, cookie preferences</td>
                  <td className="px-5 py-3 italic text-gold-600">Not required</td>
                </tr>
                <tr className="border-b border-gold-400/15">
                  <td className="px-5 py-3">Analytics</td>
                  <td className="px-5 py-3">Google Analytics (anonymised IP)</td>
                  <td className="px-5 py-3 italic text-gold-600">Required</td>
                </tr>
                <tr>
                  <td className="px-5 py-3">Marketing</td>
                  <td className="px-5 py-3">Facebook Pixel, social media embeds</td>
                  <td className="px-5 py-3 italic text-gold-600">Required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-lede text-base leading-relaxed text-navy-800/75">
            You can manage your cookie preferences at any time by clicking &ldquo;Manage Cookies&rdquo; in the site footer or clearing your browser cookies.
          </p>

          {romanHeading("IX.", "Security")}
          <p className="mt-4 font-lede text-base leading-relaxed text-navy-800/75">
            We implement appropriate technical and organisational measures to protect your data, including SSL/TLS encryption, access controls, regular security audits, and data minimisation practices. Our hosting infrastructure is located within the EU.
          </p>

          {romanHeading("X.", "Changes to This Policy")}
          <p className="mt-4 font-lede text-base leading-relaxed text-navy-800/75">
            We may update this policy from time to time. Significant changes will be communicated via email (for members and subscribers) and prominently displayed on our website. The &ldquo;last updated&rdquo; date at the top reflects the most recent revision.
          </p>

          <div className="mt-14 border border-gold-400/40 bg-ivory p-8 ornament">
            <span className="eyebrow">Data Protection</span>
            <h3 className="mt-4 font-serif text-2xl font-medium">Questions about your data?</h3>
            <p className="mt-3 font-lede text-base leading-relaxed text-navy-800/75">
              Reach our Data Protection Officer via the{" "}
              <Link href="/contact" className="text-gold-600 underline underline-offset-2">contact form</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
