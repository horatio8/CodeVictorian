"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/issues", label: "Issues" },
  {
    label: "Get Involved",
    children: [
      { href: "/petition", label: "Sign the Petition" },
      { href: "/volunteer", label: "Volunteer" },
      { href: "/join", label: "Join Us" },
      { href: "/events", label: "Events" },
    ],
  },
  { href: "/news", label: "News" },
  { href: "/media", label: "Media" },
  { href: "/store", label: "Store" },
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
          ? "bg-navy-900/97 backdrop-blur-md shadow-lg shadow-navy-950/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-gold-400 transition-all duration-300 group-hover:bg-gold-300">
              <span className="font-serif text-xl font-bold text-navy-900">V</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wide text-white leading-tight">
                Code Victorian
              </span>
              <span className="hidden text-[0.625rem] font-medium uppercase tracking-[0.2em] text-gold-400/80 sm:block">
                Europe for Europeans
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-gold-400">
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                      dropdownOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="w-52 rounded-lg bg-navy-800 p-2 shadow-xl shadow-navy-950/30 ring-1 ring-white/10">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-navy-700 hover:text-gold-400"
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
                  className="px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/donate" className="btn-primary !py-2.5 !px-5 !text-xs">
              Donate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
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
        <nav className="flex h-full flex-col items-center justify-center gap-2 px-6 pt-20">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="flex flex-col items-center">
                <span className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400/60">
                  {link.label}
                </span>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="py-2 text-lg font-medium text-white/80 transition-colors hover:text-gold-400"
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
                className="py-2.5 text-xl font-medium text-white transition-colors hover:text-gold-400"
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
    </header>
  )
}
