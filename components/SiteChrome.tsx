"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CookieConsent from "@/components/CookieConsent"
import ChatWidget from "@/components/ChatWidget"

// Routes that should render with no global nav / footer / overlays —
// "clean landing pages" used for paid/social promotion.
const NAKED_ROUTES = ["/remigration"] as const

function isNakedRoute(pathname: string | null): boolean {
  if (!pathname) return false
  return NAKED_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`))
}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (isNakedRoute(pathname)) {
    return <main>{children}</main>
  }
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieConsent />
      <ChatWidget />
    </>
  )
}
