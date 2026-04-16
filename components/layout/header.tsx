"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Issues", href: "/issues" },
  {
    name: "Get Involved",
    children: [
      { name: "Sign the Petition", href: "/petition" },
      { name: "Join Us", href: "/join" },
      { name: "Volunteer", href: "/volunteer" },
      { name: "Donate", href: "/donate" },
    ],
  },
  { name: "Events", href: "/events" },
  { name: "News", href: "/news" },
  { name: "Media", href: "/media" },
  { name: "Store", href: "/store" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-accent font-serif font-bold text-lg">CV</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif font-bold text-primary text-lg leading-none block">
                Code Victorian
              </span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                Europe for Native Europeans
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      item.children.some((c) => c.href === pathname)
                        ? "text-accent"
                        : "text-foreground hover:text-primary hover:bg-primary-50"
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-border py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm transition-colors",
                            pathname === child.href
                              ? "text-accent bg-accent-50 font-medium"
                              : "text-foreground hover:bg-primary-50 hover:text-primary"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    pathname === item.href
                      ? "text-accent"
                      : "text-foreground hover:text-primary hover:bg-primary-50"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link href="/petition">Sign the Petition</Link>
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-primary-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container mx-auto max-w-7xl py-4 space-y-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {item.name}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-6 py-2.5 text-sm rounded-md transition-colors",
                        pathname === child.href
                          ? "text-accent bg-accent-50 font-medium"
                          : "text-foreground hover:bg-primary-50"
                      )}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 text-sm font-medium rounded-md transition-colors",
                    pathname === item.href
                      ? "text-accent bg-accent-50"
                      : "text-foreground hover:bg-primary-50"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="px-4 pt-4">
              <Button asChild className="w-full">
                <Link href="/petition" onClick={() => setMobileOpen(false)}>
                  Sign the Petition
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
