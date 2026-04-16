"use client"

import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

const footerLinks = {
  campaign: [
    { href: "/about", label: "About Us" },
    { href: "/issues", label: "Our Issues" },
    { href: "/news", label: "News" },
    { href: "/media", label: "Media Centre" },
    { href: "/events", label: "Events" },
  ],
  involved: [
    { href: "/petition", label: "Sign the Petition" },
    { href: "/donate", label: "Donate" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/join", label: "Join Us" },
    { href: "/store", label: "Store" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/privacy#cookies", label: "Cookie Policy" },
    { href: "/privacy#rights", label: "Your Data Rights" },
    { href: "/contact", label: "Contact" },
  ],
}

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "X (Twitter)" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Youtube, label: "YouTube" },
]

export default function Footer() {
  return (
    <footer className="gradient-navy text-white">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 md:flex-row md:justify-between md:py-12">
          <div>
            <h3 className="font-serif text-xl font-bold text-white md:text-2xl">
              Stay Informed
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Join thousands of Europeans who receive our weekly updates.
            </p>
          </div>
          <form className="flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="form-input !border-white/20 !bg-white/10 !text-white !placeholder-white/40 flex-1"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap !py-3 !px-6">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-gold-400">
                <span className="font-serif text-xl font-bold text-navy-900">V</span>
              </div>
              <span className="font-serif text-xl font-bold text-white">
                Code Victorian
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              A movement dedicated to preserving European heritage, culture, and
              identity for future generations. Together, we stand for a Europe
              that honours its people and traditions.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-200 hover:bg-gold-400 hover:text-navy-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              Campaign
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.campaign.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors hover:text-gold-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              Get Involved
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.involved.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors hover:text-gold-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.legal.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors hover:text-gold-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-xs text-white/40">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>Brussels, Belgium</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span>info@codevictorian.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Code Victorian. All rights reserved.
            </p>
            <p className="max-w-xl text-[0.6875rem] leading-relaxed text-white/30">
              Published by Code Victorian, a registered third-party campaigner.
              Consult your national electoral authority for required disclaimer
              format. This campaign material is published in accordance with
              applicable EU electoral regulations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
