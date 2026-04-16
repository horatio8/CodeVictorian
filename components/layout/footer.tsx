import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  campaign: [
    { name: "About Us", href: "/about" },
    { name: "Our Issues", href: "/issues" },
    { name: "News", href: "/news" },
    { name: "Events", href: "/events" },
    { name: "Media", href: "/media" },
  ],
  getInvolved: [
    { name: "Sign the Petition", href: "/petition" },
    { name: "Donate", href: "/donate" },
    { name: "Join Us", href: "/join" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Store", href: "/store" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/privacy#cookies" },
    { name: "Data Subject Rights", href: "/privacy#rights" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto max-w-7xl section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-lg">CV</span>
              </div>
              <span className="font-serif font-bold text-xl">Code Victorian</span>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed mb-6">
              Europe for Native Europeans. Standing up for the preservation of
              European culture, identity, and heritage.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {["Facebook", "X", "Instagram", "YouTube"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-400/30 hover:bg-accent flex items-center justify-center transition-colors group"
                  aria-label={platform}
                >
                  <span className="text-xs font-bold text-primary-200 group-hover:text-primary-900">
                    {platform[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Campaign Links */}
          <div>
            <h4 className="font-serif font-bold text-accent mb-4 text-sm uppercase tracking-wider">
              Campaign
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.campaign.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-serif font-bold text-accent mb-4 text-sm uppercase tracking-wider">
              Get Involved
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-bold text-accent mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-primary-400/30" />

        {/* Electoral Disclaimer */}
        <div className="bg-primary-600/50 rounded-lg p-4 mb-6 border border-primary-400/20">
          <p className="text-xs text-primary-200 leading-relaxed text-center">
            <strong className="text-accent">Electoral Disclaimer:</strong>{" "}
            Published and promoted by Code Victorian, a registered third-party
            campaigner. Registered with the National Electoral Authority.
            Consult your national electoral authority for required disclaimer
            format. All campaign materials comply with applicable electoral
            regulations.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-300">
          <p>&copy; {new Date().getFullYear()} Code Victorian. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span className="text-primary-400/50">|</span>
            <Link href="/privacy#cookies" className="hover:text-accent transition-colors">
              Cookie Policy
            </Link>
            <span className="text-primary-400/50">|</span>
            <span>EU / GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
