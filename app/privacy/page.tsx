import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = { title: "Privacy Policy" }

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60">
            Last updated: 1 April 2026 &middot; Effective across all Code Victorian services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="prose-navy">
            <p className="text-base leading-relaxed text-gray-600">
              Code Victorian (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal data. This privacy policy explains how we collect, use, store, and protect information in accordance with the <strong>General Data Protection Regulation (EU) 2016/679</strong> (GDPR) and applicable national data protection laws.
            </p>

            <h2 className="mt-10 font-serif text-2xl font-bold text-navy-700">1. Data Controller</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              The data controller is Code Victorian, headquartered in Brussels, Belgium. For all data protection enquiries, contact our Data Protection Officer at <strong>dpo@codevictorian.com</strong>.
            </p>

            <h2 className="mt-10 font-serif text-2xl font-bold text-navy-700">2. Data We Collect</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">We may collect the following categories of personal data:</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              {[
                "Identity data: name, country of residence, nationality",
                "Contact data: email address, phone number, postal address",
                "Financial data: payment details (processed securely via third-party payment processors; we do not store card details)",
                "Petition data: name, country, and signature status (displayed publicly with your consent)",
                "Technical data: IP address, browser type, device information, cookies (see Cookie Policy below)",
                "Communication data: messages sent via our contact forms or email",
                "Membership data: membership tier, payment history, event attendance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-serif text-2xl font-bold text-navy-700">3. Legal Basis for Processing</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">We process your data on the following legal bases under GDPR Article 6:</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              {[
                "Consent (Art. 6(1)(a)): petition signatures, newsletter subscriptions, marketing communications, non-essential cookies",
                "Contract (Art. 6(1)(b)): membership services, donation processing, store purchases",
                "Legitimate interest (Art. 6(1)(f)): website analytics (anonymised), fraud prevention, internal administration",
                "Legal obligation (Art. 6(1)(c)): financial record-keeping, electoral compliance reporting",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-serif text-2xl font-bold text-navy-700">4. How We Use Your Data</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Your data is used to: process petition signatures; manage membership accounts; process donations and purchases; send campaign updates (with your consent); organise events; respond to enquiries; comply with legal obligations; and improve our website and services.
            </p>

            <h2 className="mt-10 font-serif text-2xl font-bold text-navy-700">5. Data Sharing &amp; Transfers</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              We do not sell your data. We may share data with: trusted service providers (email: Mailerlite; payments: secure payment processor; analytics: Google Analytics with IP anonymisation); legal authorities when required by law; and EU institutions when submitting petition signatures. Where data is transferred outside the EU/EEA, we ensure adequate safeguards under GDPR Chapter V (Standard Contractual Clauses or adequacy decisions).
            </p>

            <h2 className="mt-10 font-serif text-2xl font-bold text-navy-700">6. Data Retention</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              We retain personal data only as long as necessary for the purposes collected: petition signatures for the duration of the campaign plus 12 months; membership data for the duration of membership plus 24 months; financial records for 7 years (legal requirement); contact form messages for 12 months; website analytics data (anonymised) for 26 months.
            </p>

            <h2 id="rights" className="mt-10 font-serif text-2xl font-bold text-navy-700">7. Your Rights (GDPR)</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">Under GDPR, you have the right to:</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
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
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              To exercise any of these rights, contact <strong>dpo@codevictorian.com</strong> or use our{" "}
              <Link href="/contact" className="text-gold-500 underline">contact form</Link> (select &ldquo;Data Subject Request&rdquo;). We will respond within 30 days.
            </p>

            <h2 id="cookies" className="mt-10 font-serif text-2xl font-bold text-navy-700">8. Cookie Policy</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              We use cookies in compliance with GDPR and the ePrivacy Directive. <strong>No non-essential cookies are loaded until you provide explicit consent</strong> via our cookie banner (opt-in model).
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-navy-100">
                    <th className="py-2 pr-4 font-semibold text-navy-700">Category</th>
                    <th className="py-2 pr-4 font-semibold text-navy-700">Purpose</th>
                    <th className="py-2 font-semibold text-navy-700">Consent</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Strictly Necessary</td>
                    <td className="py-2 pr-4">Site functionality, security, cookie preferences</td>
                    <td className="py-2">Not required</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Analytics</td>
                    <td className="py-2 pr-4">Google Analytics (anonymised IP)</td>
                    <td className="py-2">Required</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Marketing</td>
                    <td className="py-2 pr-4">Facebook Pixel, social media embeds</td>
                    <td className="py-2">Required</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              You can manage your cookie preferences at any time by clicking &ldquo;Manage Cookies&rdquo; in the site footer or clearing your browser cookies.
            </p>

            <h2 className="mt-10 font-serif text-2xl font-bold text-navy-700">9. Security</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              We implement appropriate technical and organisational measures to protect your data, including SSL/TLS encryption, access controls, regular security audits, and data minimisation practices. Our hosting infrastructure is located within the EU.
            </p>

            <h2 className="mt-10 font-serif text-2xl font-bold text-navy-700">10. Changes to This Policy</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              We may update this policy from time to time. Significant changes will be communicated via email (for members and subscribers) and prominently displayed on our website. The &ldquo;last updated&rdquo; date at the top reflects the most recent revision.
            </p>

            <div className="mt-12 rounded-xl bg-cream p-6">
              <h3 className="font-serif text-lg font-bold">Questions About Your Data?</h3>
              <p className="mt-2 text-sm text-gray-600">
                Contact our Data Protection Officer at <strong>dpo@codevictorian.com</strong> or use the{" "}
                <Link href="/contact" className="text-gold-500 underline">contact form</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
