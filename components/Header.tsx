"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

// Per the Apr 23 client brief: hide Events / Media / Store from nav for now.
// Apr 28: also hide Updates until the monthly newsletter archive is ready.
// "News" was renamed to "Updates" and points at the new /updates route
// when re-enabled. The membership entry now points at /member.
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
  {
    label: "Contact",
    children: [
      { href: "/contact", label: "Contact Us" },
      { href: "/request-speaker", label: "Request a Speaker" },
    ],
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // Keyed so multiple dropdowns can coexist; only one open at a time.
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

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

  useEffect(() => {
    if (!mobileOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [mobileOpen])

  return (
    <>
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
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-gold-400">
                    {link.label}
                    <ChevronDown className={`h-3 w-3 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                      openDropdown === link.label
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
              style={{ padding: "10px 20px", fontSize: "10px", fontWeight: 700 }}
            >
              Donate <span className="font-serif">→</span>
            </Link>
          </div>

          {/* Mobile hamburger — z-50 keeps the close (X) above the open menu. */}
          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center text-gold-400 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile menu — sibling of <header>, NOT a descendant. The header
        applies backdrop-blur-md when scrolled, and `backdrop-filter`
        promotes its element to a containing block for fixed descendants —
        which would re-anchor `fixed inset-0` to the header's bounding box
        (a thin top bar) instead of the viewport, leaving most of the page
        visible behind the menu. Sitting outside the header avoids that. */}
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-40 bg-navy-900 transition-opacity duration-300 lg:hidden ${
        mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={() => setMobileOpen(false)}
      aria-hidden={!mobileOpen}
    >
        <nav className="flex h-full flex-col items-center justify-start gap-3 overflow-y-auto px-6 pt-24 pb-10">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="my-2 w-full max-w-xs border border-gold-400/30 bg-navy-800/40 px-5 py-4"
              >
                <div className="mb-3 text-center font-mono text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-gold-400">
                  {link.label}
                </div>
                <div className="flex flex-col divide-y divide-gold-400/15 border-y border-gold-400/15">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="py-3 text-center font-serif italic text-lg text-white/85 transition-colors hover:text-gold-400"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="py-1 font-serif text-3xl text-white transition-colors hover:text-gold-400"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="mt-6 flex flex-col items-center gap-3">
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
    </>
  )
}
