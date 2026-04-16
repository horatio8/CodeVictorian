import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CookieConsent } from "@/components/layout/cookie-consent"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Code Victorian | Europe for Native Europeans",
    template: "%s | Code Victorian",
  },
  description:
    "Join the movement to preserve European culture, heritage, and identity. Sign our petition and stand with thousands of Europeans committed to their homeland.",
  keywords: [
    "Code Victorian",
    "European identity",
    "preserve European culture",
    "petition",
    "campaign",
  ],
  metadataBase: new URL("https://codevictorian.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://codevictorian.com",
    siteName: "Code Victorian",
    title: "Code Victorian | Europe for Native Europeans",
    description:
      "Join the movement to preserve European culture, heritage, and identity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Victorian | Europe for Native Europeans",
    description:
      "Join the movement to preserve European culture, heritage, and identity.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
