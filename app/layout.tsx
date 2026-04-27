import type { Metadata } from "next"
import "./globals.css"
import SiteChrome from "@/components/SiteChrome"

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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen bg-cream text-navy-800"
        data-theme="navy"
        data-display="playfair"
      >
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
