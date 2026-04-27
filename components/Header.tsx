"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

// Per the Apr 23 client brief: hide Events / Media / Store from nav for now.
// "News" is renamed to "Updates" and points at the new /updates route.
// The membership entry now points at /member (Europe First community).
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/issues", label: "Issues" },
  {
    label: "Get Involved",
    children: [
      { href: "/petition", label: "Sign the Petition" },
      { href: "/volunteer", label: "Volunteer" },
      { href: "/member", label: "Europe First" },
      { href: "/join", label: "Membership Tiers" },
    ],
  },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/92 backdrop-blur-md border-b border-gold-400/25"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between lg:h-20">
          {/* Brand mark — small logo + text wordmark */}
          <Link href="/" className="relative z-10 flex items-center gap-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              className="h-9 w-auto shrink-0 transition-opacity group-hover:opacity-90"
            />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl font-medium tracking-wide text-white transition-colors group-hover:text-gold-400">
                Code Victorian
              </span>
              <span className="hidden mt-1 font-mono text-[0.625rem] font-normal uppercase tracking-[0.32em] text-gold-400 sm:block">
                Est. MMXXVI
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-gold-400">
                    {link.label}
                    <ChevronDown className={`h-3 w-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                      dropdownOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="w-56 bg-navy-900/95 backdrop-blur-md border border-gold-400/25 p-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 font-lede text-sm text-white/80 transition-colors hover:bg-navy-800 hover:text-gold-400"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="px-4 py-2 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/donate"
              className="btn-primary"
              style={{ padding: "10px 20px", fontSize: "10px" }}
            >
              Donate <span className="font-serif">→</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative z-10 flex h-10 w-10 items-center justify-center text-gold-400 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-navy-900 transition-all duration-300 lg:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-1 px-6 pt-20">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="flex flex-col items-center">
                <span className="mb-2 text-[0.625rem] font-medium uppercase tracking-[0.28em] text-gold-400">
                  {link.label}
                </span>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="py-1.5 font-lede text-lg text-white/80 transition-colors hover:text-gold-400"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="py-2 font-serif text-2xl text-white transition-colors hover:text-gold-400"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="mt-8 flex flex-col items-center gap-3">
            <Link
              href="/petition"
              className="btn-primary"
              onClick={() => setMobileOpen(false)}
            >
              Sign the Petition
            </Link>
            <Link
              href="/donate"
              className="btn-secondary"
              onClick={() => setMobileOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
