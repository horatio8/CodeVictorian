"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CookieConsent from "@/components/CookieConsent"
import ChatWidget from "@/components/ChatWidget"
import type { SiteSettings } from "@/lib/cms"

// Routes that should render with no global nav / footer / overlays —
// "clean landing pages" used for paid/social promotion, plus the
// embedded Sanity Studio at /studio.
const NAKED_ROUTES = ["/remigration", "/studio"] as const

function isNakedRoute(pathname: string | null): boolean {
  if (!pathname) return false
  return NAKED_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`))
}

export default function SiteChrome({
  children,
  settings,
}: {
  children: React.ReactNode
  settings: SiteSettings | null
}) {
  const pathname = usePathname()
  if (isNakedRoute(pathname)) {
    return <main>{children}</main>
  }
  return (
    <>
      <Header settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} />
      <CookieConsent />
      <ChatWidget />
    </>
  )
}
