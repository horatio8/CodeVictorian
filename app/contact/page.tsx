"use client"

import Link from "next/link"
import { Mail, MapPin, Clock, MessageSquare } from "lucide-react"


const contacts = [
  { icon: Mail, label: "General Enquiries", value: "info@codevictorian.com" },
  { icon: MessageSquare, label: "Press & Media", value: "press@codevictorian.com" },
  { icon: MapPin, label: "Headquarters", value: "Brussels, Belgium" },
  { icon: Clock, label: "Office Hours", value: "Mon\u2013Fri, 09:00\u201317:30 CET" },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 40% 40%, rgba(212,175,55,0.4) 0%, transparent 50%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Reach Out</span>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
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
              <h2 className="gold-accent relative font-serif text-2xl font-bold sm:text-3xl">
                Send a Message
              </h2>
              <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First name" className="form-input" required />
                  <input type="text" placeholder="Last name" className="form-input" required />
                </div>
                <input type="email" placeholder="Email address" className="form-input" required />
                <select className="form-input text-gray-500" required>
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
                <label className="flex items-start gap-2 text-xs text-gray-500">
                  <input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 rounded accent-gold-400" />
                  <span>
                    I agree to the{" "}
                    <Link href="/privacy" className="text-gold-500 underline">privacy policy</Link>.
                    My data will only be used to respond to this enquiry.
                  </span>
                </label>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-6">
                <div className="card p-6">
                  <h3 className="font-serif text-lg font-bold">Contact Information</h3>
                  <ul className="mt-5 space-y-5">
                    {contacts.map((c) => (
                      <li key={c.label} className="flex items-start gap-3">
                        <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                            {c.label}
                          </div>
                          <div className="mt-0.5 text-sm font-medium text-navy-700">{c.value}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="font-serif text-lg font-bold">Quick Links</h3>
                  <ul className="mt-4 space-y-2.5">
                    {[
                      { href: "/volunteer", label: "Volunteer with us" },
                      { href: "/donate", label: "Make a donation" },
                      { href: "/petition", label: "Sign the petition" },
                      { href: "/privacy#rights", label: "Data subject rights (GDPR)" },
                      { href: "/media", label: "Press kit & resources" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-sm text-gold-500 hover:text-gold-600 transition-colors">
                          {link.label} &rarr;
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
