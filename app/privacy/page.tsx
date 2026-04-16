import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Code Victorian privacy policy, cookie policy, and data subject rights notice. GDPR compliant.",
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary to-primary-800" />
        <div className="container mx-auto max-w-4xl relative z-10 py-16 md:py-24 text-center">
          <Shield className="h-10 w-10 text-accent mx-auto mb-4" />
          <h1 className="text-white mb-4">Privacy Policy</h1>
          <p className="text-primary-200">
            Last updated: 16 April 2026
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-slate max-w-none space-y-10">
            {/* 1. Introduction */}
            <div>
              <h2 className="font-serif text-primary text-2xl mb-4">
                1. Introduction and Data Controller
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Code Victorian (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
                is a registered third-party campaigner operating across the European
                Union. We are committed to protecting and respecting your privacy in
                accordance with the General Data Protection Regulation (EU) 2016/679
                (&ldquo;GDPR&rdquo;) and applicable national data protection laws.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                This Privacy Policy explains how we collect, use, store, and protect
                your personal data when you use our website (codevictorian.com), sign
                our petitions, make donations, join as a member, volunteer, subscribe
                to our communications, or otherwise interact with us.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Data Controller:</strong> Code Victorian,
                registered with the National Electoral Authority.
                Contact: <a href="mailto:privacy@codevictorian.com" className="text-accent hover:underline">privacy@codevictorian.com</a>
              </p>
            </div>

            <Separator />

            {/* 2. Data We Collect */}
            <div>
              <h2 className="font-serif text-primary text-2xl mb-4">
                2. What Data We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may collect and process the following categories of personal data:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Identity data:</strong> first name, last name, title.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Contact data:</strong> email address, telephone number, postal address, postcode, country.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Financial data:</strong> donation amounts, payment method (processed by third-party payment providers; we do not store card details).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Campaign data:</strong> petition signatures, volunteer preferences, event registrations, membership status.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Technical data:</strong> IP address, browser type, operating system, device type, referring URL, pages visited, time on site (collected via cookies with your consent).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Communication data:</strong> email engagement metrics (opens, clicks), correspondence records.</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                We do not collect special category data (e.g. political opinions in the GDPR sense
                beyond what is inherent in signing a political petition, racial or ethnic origin,
                health data) unless strictly necessary and with your explicit consent.
              </p>
            </div>

            <Separator />

            {/* 3. How We Use Your Data */}
            <div>
              <h2 className="font-serif text-primary text-2xl mb-4">
                3. How We Use Your Data
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We process your personal data under the following legal bases:
              </p>

              <h3 className="font-serif text-primary text-lg mb-2">
                a) Consent (Article 6(1)(a) GDPR)
              </h3>
              <ul className="space-y-1 text-muted-foreground text-sm mb-4">
                <li>&bull; Sending email newsletters and campaign updates</li>
                <li>&bull; Setting non-essential cookies (analytics, marketing)</li>
                <li>&bull; Processing petition signatures</li>
                <li>&bull; Sharing your data with third-party platforms (e.g. Mailerlite)</li>
              </ul>

              <h3 className="font-serif text-primary text-lg mb-2">
                b) Legitimate Interest (Article 6(1)(f) GDPR)
              </h3>
              <ul className="space-y-1 text-muted-foreground text-sm mb-4">
                <li>&bull; Campaign administration and volunteer coordination</li>
                <li>&bull; Website security and fraud prevention</li>
                <li>&bull; Analysing aggregate, anonymised usage patterns to improve our services</li>
                <li>&bull; Reporting to the National Electoral Authority as required</li>
              </ul>

              <h3 className="font-serif text-primary text-lg mb-2">
                c) Contractual Necessity (Article 6(1)(b) GDPR)
              </h3>
              <ul className="space-y-1 text-muted-foreground text-sm mb-4">
                <li>&bull; Processing membership registrations</li>
                <li>&bull; Processing donations and issuing receipts</li>
                <li>&bull; Fulfilling store orders</li>
              </ul>

              <h3 className="font-serif text-primary text-lg mb-2">
                d) Legal Obligation (Article 6(1)(c) GDPR)
              </h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>&bull; Electoral and campaign finance reporting requirements</li>
                <li>&bull; Tax and financial record-keeping obligations</li>
              </ul>
            </div>

            <Separator />

            {/* 4. Cookie Policy */}
            <div id="cookies">
              <h2 className="font-serif text-primary text-2xl mb-4">
                4. Cookie Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website uses cookies. In compliance with GDPR and the ePrivacy Directive,
                we use an opt-in consent model: no non-essential cookies are set until you
                explicitly consent via our cookie banner. We use Cookiebot for consent management.
              </p>

              <h3 className="font-serif text-primary text-lg mb-2">
                a) Strictly Necessary Cookies
              </h3>
              <p className="text-muted-foreground text-sm mb-1">
                These are essential for the website to function and cannot be disabled.
              </p>
              <ul className="space-y-1 text-muted-foreground text-sm mb-4">
                <li>&bull; Session cookies for form submissions</li>
                <li>&bull; Cookie consent preferences (Cookiebot)</li>
                <li>&bull; Security tokens</li>
              </ul>

              <h3 className="font-serif text-primary text-lg mb-2">
                b) Analytics Cookies
              </h3>
              <p className="text-muted-foreground text-sm mb-1">
                Set only after your explicit opt-in consent.
              </p>
              <ul className="space-y-1 text-muted-foreground text-sm mb-4">
                <li>&bull; <strong className="text-foreground">Google Analytics</strong> &mdash; measures website usage, page views, and visitor demographics. IP anonymisation is enabled. Data is processed in the EU/EEA where available. Provider: Google Ireland Limited.</li>
              </ul>

              <h3 className="font-serif text-primary text-lg mb-2">
                c) Marketing Cookies
              </h3>
              <p className="text-muted-foreground text-sm mb-1">
                Set only after your explicit opt-in consent.
              </p>
              <ul className="space-y-1 text-muted-foreground text-sm mb-4">
                <li>&bull; <strong className="text-foreground">Facebook Pixel (Meta)</strong> &mdash; used to measure the effectiveness of campaign advertising on Meta platforms. Provider: Meta Platforms Ireland Limited.</li>
              </ul>

              <p className="text-muted-foreground text-sm">
                You can withdraw or modify your cookie consent at any time via the
                cookie settings link in the website footer or by clearing your browser cookies.
              </p>
            </div>

            <Separator />

            {/* 5. Data Sharing */}
            <div>
              <h2 className="font-serif text-primary text-2xl mb-4">
                5. Data Sharing and Third Parties
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may share your personal data with the following categories of recipients:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Mailerlite</strong> (email marketing): name, email address, and engagement data for sending newsletters and campaign updates. Mailerlite is GDPR compliant and processes data within the EU/EEA.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Google Analytics</strong>: anonymised website usage data (only with your consent).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Meta (Facebook Pixel)</strong>: anonymised conversion data (only with your consent).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Payment processors</strong>: financial data necessary to process donations and store purchases. We do not store card details.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Cookiebot</strong>: cookie consent preferences.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">National Electoral Authority</strong>: data we are legally required to report under electoral regulations.</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                We do not sell your personal data. We do not share your data with
                third parties for their own marketing purposes.
              </p>
            </div>

            <Separator />

            {/* 6. International Transfers */}
            <div>
              <h2 className="font-serif text-primary text-2xl mb-4">
                6. International Data Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We host our website and store data on servers located within the
                European Union / European Economic Area wherever feasible.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Where data is transferred outside the EU/EEA (for example, to service
                providers based in the United States), we ensure appropriate safeguards
                are in place, including:
              </p>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>&bull; EU-US Data Privacy Framework adequacy decisions</li>
                <li>&bull; Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>&bull; Binding Corporate Rules where applicable</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                You may request details of the specific safeguards applied to any
                transfer by contacting us at{" "}
                <a href="mailto:privacy@codevictorian.com" className="text-accent hover:underline">
                  privacy@codevictorian.com
                </a>.
              </p>
            </div>

            <Separator />

            {/* 7. Data Retention */}
            <div>
              <h2 className="font-serif text-primary text-2xl mb-4">
                7. Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We retain personal data only for as long as necessary to fulfil the
                purposes for which it was collected:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>&bull; <strong className="text-foreground">Petition signatures:</strong> retained for the duration of the campaign plus 12 months for reporting purposes.</li>
                <li>&bull; <strong className="text-foreground">Membership data:</strong> retained for the duration of membership plus 24 months after cancellation.</li>
                <li>&bull; <strong className="text-foreground">Donation records:</strong> retained for 7 years as required by financial and electoral reporting regulations.</li>
                <li>&bull; <strong className="text-foreground">Volunteer data:</strong> retained for the duration of active volunteering plus 12 months.</li>
                <li>&bull; <strong className="text-foreground">Newsletter subscribers:</strong> until consent is withdrawn.</li>
                <li>&bull; <strong className="text-foreground">Website analytics:</strong> anonymised and aggregated after 26 months.</li>
                <li>&bull; <strong className="text-foreground">Contact enquiries:</strong> 12 months after resolution.</li>
              </ul>
            </div>

            <Separator />

            {/* 8. Your Rights */}
            <div id="rights">
              <h2 className="font-serif text-primary text-2xl mb-4">
                8. Your Rights Under GDPR
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under the General Data Protection Regulation, you have the following rights:
              </p>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Right of Access (Article 15):</strong> You may request a copy of the personal data we hold about you.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Right to Rectification (Article 16):</strong> You may request correction of inaccurate or incomplete personal data.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Right to Erasure (Article 17):</strong> You may request deletion of your personal data where there is no compelling reason for its continued processing (&ldquo;right to be forgotten&rdquo;).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Right to Restriction (Article 18):</strong> You may request that we restrict the processing of your personal data in certain circumstances.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Right to Data Portability (Article 20):</strong> You may request your personal data in a structured, commonly used, machine-readable format.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Right to Object (Article 21):</strong> You may object to processing based on legitimate interest, including profiling. You have an absolute right to object to direct marketing.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Rights Related to Automated Decision-Making (Article 22):</strong> You have the right not to be subject to decisions based solely on automated processing that produce legal effects concerning you. We do not currently use automated decision-making.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of processing before withdrawal.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">&bull;</span>
                  <span><strong className="text-foreground">Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with your national supervisory authority (Data Protection Authority) if you believe your data protection rights have been violated.</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:privacy@codevictorian.com" className="text-accent hover:underline">
                  privacy@codevictorian.com
                </a>.
                We will respond to your request within 30 days as required by GDPR.
              </p>
            </div>

            <Separator />

            {/* 9. Data Security */}
            <div>
              <h2 className="font-serif text-primary text-2xl mb-4">
                9. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We implement appropriate technical and organisational measures to
                protect your personal data against unauthorised or unlawful
                processing, accidental loss, destruction, or damage. These measures include:
              </p>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>&bull; TLS/SSL encryption for all data in transit</li>
                <li>&bull; Encryption of personal data at rest</li>
                <li>&bull; Access controls limiting data access to authorised personnel</li>
                <li>&bull; Regular security assessments and vulnerability testing</li>
                <li>&bull; Staff training on data protection and security</li>
                <li>&bull; Incident response procedures for data breaches</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                In the event of a personal data breach that poses a risk to your
                rights and freedoms, we will notify the relevant supervisory authority
                within 72 hours and notify you without undue delay where required.
              </p>
            </div>

            <Separator />

            {/* 10. Children */}
            <div>
              <h2 className="font-serif text-primary text-2xl mb-4">
                10. Children&rsquo;s Data
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website and services are not directed at individuals under the
                age of 16. We do not knowingly collect personal data from children.
                If we become aware that we have collected personal data from a child
                under 16 without appropriate parental consent, we will take steps to
                delete that data promptly. If you believe a child has provided us
                with personal data, please contact us at{" "}
                <a href="mailto:privacy@codevictorian.com" className="text-accent hover:underline">
                  privacy@codevictorian.com
                </a>.
              </p>
            </div>

            <Separator />

            {/* 11. Changes */}
            <div>
              <h2 className="font-serif text-primary text-2xl mb-4">
                11. Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, legal requirements, or operational needs.
                We will publish the updated policy on this page with a new &ldquo;Last
                updated&rdquo; date. Where changes are material, we will notify you
                by email or via a prominent notice on our website. We encourage you
                to review this policy periodically.
              </p>
            </div>

            <Separator />

            {/* 12. Contact */}
            <div>
              <h2 className="font-serif text-primary text-2xl mb-4">
                12. Contact the Data Controller
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                If you have any questions about this Privacy Policy, wish to exercise
                your data subject rights, or have a complaint about how we handle
                your personal data, please contact us:
              </p>
              <div className="bg-muted rounded-xl p-5 text-sm text-foreground space-y-1">
                <p><strong>Code Victorian &mdash; Data Protection</strong></p>
                <p>Email: <a href="mailto:privacy@codevictorian.com" className="text-accent hover:underline">privacy@codevictorian.com</a></p>
                <p>Website: codevictorian.com</p>
                <p>Registered with: National Electoral Authority</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                If you are not satisfied with our response, you have the right to
                lodge a complaint with your national Data Protection Authority
                (supervisory authority).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
