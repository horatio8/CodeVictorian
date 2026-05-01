"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CookieConsent from "@/components/CookieConsent"

// Routes that should render with no global nav / footer / overlays —
// "clean landing pages" used for paid/social promotion.
const NAKED_ROUTES = ["/remigration", "/admin"] as const

function isNakedRoute(pathname: string | null): boolean {
  if (!pathname) return false
  return NAKED_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`))
}

// `overflow-x:hidden` on <main> catches any horizontal overflow from page
// content without affecting the mobile menu or footer (both siblings, not
// descendants — so <main> doesn't become a containing block for the menu's
// position:fixed).
const mainClass = "overflow-x-hidden"

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (isNakedRoute(pathname)) {
    return <main className={mainClass}>{children}</main>
  }
  return (
    <>
      <Header />
      <main className={mainClass}>{children}</main>
      <Footer />
      <CookieConsent />
    </>
  )
}
