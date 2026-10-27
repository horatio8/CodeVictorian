"use client"

import Link from "next/link"
import NewsletterForm from "@/components/NewsletterForm"
import { EUROPE_FIRST_URL, SHOW_DONATE, SHOW_EUROPE_FIRST } from "@/lib/site"
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
} from "lucide-react"

// Apr 23 client brief: hide Events / Media / Store; rename News → Updates;
// Oct 2026: site narrowed to donations + Europe First; petition, issues,
// membership and speaker pages removed.
// Apr 28: hide Updates from nav + footer until newsletter archive is ready.
const footerLinks = {
  campaign: [
    { href: "/about", label: "About Us" },
  ],
  involved: [
    ...(SHOW_DONATE ? [{ href: "/donate", label: "Donate" }] : []),
    ...(SHOW_EUROPE_FIRST ? [{ href: EUROPE_FIRST_URL, label: "Join Europe First" }] : []),
    { href: "/volunteer", label: "Volunteer" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/privacy#cookies", label: "Cookie Policy" },
    { href: "/privacy#rights", label: "Your Data Rights" },
    { href: "/contact", label: "Contact" },
  ],
}

const socialLinks = [
  { href: "https://www.facebook.com/profile.php?id=61586654893617", icon: Facebook, label: "Facebook" },
  { href: "https://x.com/CodeVictorian", icon: Twitter, label: "X (Twitter)" },
  { href: "https://www.instagram.com/codevictorian/", icon: Instagram, label: "Instagram" },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white border-t border-gold-400/25 on-dark">
      {/* Newsletter strip */}
      <div className="border-b border-gold-400/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between md:py-14">
          <div>
            <span className="eyebrow">Dispatches · Weekly</span>
            <h3 className="mt-4 font-serif text-2xl font-medium text-white md:text-3xl">
              Stay Informed
            </h3>
            <p className="mt-2 font-lede text-sm text-white/60">
              Join thousands of Europeans who receive our weekly updates.
            </p>
          </div>
          <NewsletterForm variant="inline" />
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col leading-tight">
              <span className="font-serif text-2xl font-medium text-white">
                Code Victorian
              </span>
              <span className="mt-2 font-mono text-[0.625rem] font-normal uppercase tracking-[0.32em] text-gold-400">
                A Cultural Force · Est. MMXXVI
              </span>
            </Link>
            <p className="mt-6 max-w-xs font-lede text-base leading-relaxed text-white/60">
              A cultural society dedicated to preserving European heritage,
              culture, and identity for future generations. Together, we stand for a Europe
              that honours its people and traditions.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center border border-gold-400/40 text-white/70 transition-colors duration-200 hover:bg-gold-400 hover:text-navy-900 hover:border-gold-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-gold-400">
              Society
            </h4>
            <ul className="mt-5 space-y-2.5">
              {footerLinks.campaign.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-lede text-sm text-white/70 transition-colors hover:text-gold-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-gold-400">
              Get Involved
            </h4>
            <ul className="mt-5 space-y-2.5">
              {footerLinks.involved.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-lede text-sm text-white/70 transition-colors hover:text-gold-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-gold-400">
              Correspondence
            </h4>
            <ul className="mt-5 space-y-2.5">
              {footerLinks.legal.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-lede text-sm text-white/70 transition-colors hover:text-gold-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-white/40">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400/70" />
                <span>Budapest · Hungary</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar — double-rule + mono copyright */}
      <div className="border-t border-gold-400/20">
        <div className="mx-auto max-w-7xl px-6 py-7">
          <div className="dbl-rule mb-6" />
          <div className="text-center font-mono text-[0.6875rem] uppercase tracking-[0.14em]">
            <p className="text-white/50">
              © MMXXVI Code Victorian · All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
