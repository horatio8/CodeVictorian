import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Clock, Mail, MessageSquare, Phone } from "lucide-react"
import { getContactPage } from "@/lib/cms"

export const metadata: Metadata = { title: "Contact" }

const ICONS = { MapPin, Clock, Mail, MessageSquare, Phone } as const

const FALLBACK_CONTACTS = [
  { icon: "MapPin", label: "Headquarters", value: "Budapest, Hungary" },
  { icon: "Clock", label: "Office Hours", value: "Mon–Fri · 09:00–17:30 CET" },
]

const FALLBACK_SUBJECTS = [
  "General Enquiry",
  "Volunteer Enquiry",
  "Donation Query",
  "Partnership / Collaboration",
  "Data Subject Request (GDPR)",
  "Other",
]

const FALLBACK_QUICK_LINKS = [
  { href: "/volunteer", label: "Volunteer with us" },
  { href: "/donate", label: "Make a donation" },
  { href: "/petition", label: "Sign the petition" },
  { href: "/privacy#rights", label: "Data subject rights (GDPR)" },
]

export default async function ContactPage() {
  const cms = await getContactPage()
  const heroEyebrow = cms?.heroEyebrow ?? "Correspondence"
  const heroHeadline = cms?.heroHeadline ?? "Contact"
  const heroItalicWord = cms?.heroItalicWord ?? "Us"
  const heroLede =
    cms?.heroLede ??
    "Have a question, want to collaborate, or need to get in touch with our team? We’d love to hear from you."
  const contacts =
    cms?.contacts && cms.contacts.length > 0 ? cms.contacts : FALLBACK_CONTACTS
  const subjects =
    cms?.subjectOptions && cms.subjectOptions.length > 0
      ? cms.subjectOptions
      : FALLBACK_SUBJECTS
  const quickLinks =
    cms?.quickLinks && cms.quickLinks.length > 0
      ? cms.quickLinks
      : FALLBACK_QUICK_LINKS

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">{heroEyebrow}</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            {heroHeadline}{" "}
            <span className="italic font-normal text-gold-400">{heroItalicWord}</span>
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">{heroLede}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <span className="eyebrow">Send a Message</span>
              <h2 className="mt-5 font-serif text-4xl font-medium sm:text-5xl">
                Write to{" "}
                <span className="italic font-normal text-gold-400">us</span>.
              </h2>
              <form className="mt-10 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First name" className="form-input" required />
                  <input type="text" placeholder="Last name" className="form-input" required />
                </div>
                <input type="email" placeholder="your name@correspondence.eu" className="form-input" required />
                <select className="form-input" required defaultValue="">
                  <option value="">Subject</option>
                  {subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Your message"
                  rows={6}
                  className="form-input resize-none"
                  required
                />
                <label className="flex items-start gap-2 font-lede text-xs text-navy-800/65">
                  <input type="checkbox" required className="mt-1 h-3.5 w-3.5 accent-gold-400" />
                  <span>
                    I agree to the{" "}
                    <Link href="/privacy" className="text-gold-600 underline underline-offset-2">privacy policy</Link>.
                    My data will only be used to respond to this enquiry.
                  </span>
                </label>
                <button type="submit" className="btn-primary">
                  Send Message <span className="font-serif">→</span>
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-8">
                <div className="border border-gold-400/30 bg-ivory p-8">
                  <span className="eyebrow">Contact Information</span>
                  <ul className="mt-6 space-y-6 border-t border-gold-400/20 pt-5">
                    {contacts.map((c, i) => {
                      const Icon =
                        c.icon && c.icon in ICONS
                          ? ICONS[c.icon as keyof typeof ICONS]
                          : MapPin
                      return (
                        <li key={c.label ?? i} className="flex items-start gap-4">
                          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                          <div>
                            <div className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.28em] text-gold-600">
                              {c.label}
                            </div>
                            <div className="mt-1 font-lede text-base text-navy-800">{c.value}</div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className="border border-gold-400/30 bg-ivory p-8">
                  <span className="eyebrow">Quick Links</span>
                  <ul className="mt-6 space-y-0 border-t border-gold-400/20">
                    {quickLinks.map((link, i) => (
                      <li key={link.href ?? i} className="border-b border-gold-400/15 last:border-b-0">
                        <Link
                          href={link.href ?? "#"}
                          className="flex items-center justify-between py-3 font-lede text-base text-navy-800 transition-colors hover:text-gold-600"
                        >
                          {link.label}
                          <span className="font-serif italic text-gold-400">→</span>
                        </Link>
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
