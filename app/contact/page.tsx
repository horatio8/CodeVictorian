"use client"

import Link from "next/link"
import { Mail, MapPin, Clock, MessageSquare } from "lucide-react"

const contacts = [
  { icon: Mail,           label: "General Enquiries", value: "info@codevictorian.com" },
  { icon: MessageSquare,  label: "Press & Media",     value: "press@codevictorian.com" },
  { icon: MapPin,         label: "Headquarters",      value: "Brussels, Belgium" },
  { icon: Clock,          label: "Office Hours",      value: "Mon–Fri · 09:00–17:30 CET" },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">Correspondence</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            Contact{" "}
            <span className="italic font-normal text-gold-400">Us</span>
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">
            Have a question, want to collaborate, or need to get in touch with our team?
            We&rsquo;d love to hear from you.
          </p>
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
              <form className="mt-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First name" className="form-input" required />
                  <input type="text" placeholder="Last name" className="form-input" required />
                </div>
                <input type="email" placeholder="your name@correspondence.eu" className="form-input" required />
                <select className="form-input" required>
                  <option value="">Subject</option>
                  <option>General Enquiry</option>
                  <option>Press / Media Request</option>
                  <option>Volunteer Enquiry</option>
                  <option>Donation Query</option>
                  <option>Event Information</option>
                  <option>Partnership / Collaboration</option>
                  <option>Data Subject Request (GDPR)</option>
                  <option>Other</option>
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
                    {contacts.map((c) => (
                      <li key={c.label} className="flex items-start gap-4">
                        <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                        <div>
                          <div className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.28em] text-gold-600">
                            {c.label}
                          </div>
                          <div className="mt-1 font-lede text-base text-navy-800">{c.value}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-gold-400/30 bg-ivory p-8">
                  <span className="eyebrow">Quick Links</span>
                  <ul className="mt-6 space-y-0 border-t border-gold-400/20">
                    {[
                      { href: "/volunteer", label: "Volunteer with us" },
                      { href: "/donate", label: "Make a donation" },
                      { href: "/petition", label: "Sign the petition" },
                      { href: "/privacy#rights", label: "Data subject rights (GDPR)" },
                      { href: "/media", label: "Press kit & resources" },
                    ].map((link) => (
                      <li key={link.href} className="border-b border-gold-400/15 last:border-b-0">
                        <Link
                          href={link.href}
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
