import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CookieConsent from "@/components/CookieConsent"
import ChatWidget from "@/components/ChatWidget"

export const metadata: Metadata = {
  title: {
    default: "Code Victorian — Europe for Europeans",
    template: "%s | Code Victorian",
  },
  description:
    "A movement dedicated to preserving European heritage, culture, and identity. Sign our petition and join the cause.",
  metadataBase: new URL("https://codevictorian.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Code Victorian",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-cream text-gray-800">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <ChatWidget />
      </body>
    </html>
  )
}
