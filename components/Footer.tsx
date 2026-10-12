import Link from "next/link"

const columns = [
  {
    title: "The Community",
    links: [
      { href: "/#principles", label: "Principles" },
      { href: "/#membership", label: "Membership Tiers" },
    ],
  },
  {
    title: "Code Victorian",
    links: [
      { href: "https://codevictorian.com/donate", label: "Support the Foundation", external: true },
      { href: "https://codevictorian.com", label: "codevictorian.com", external: true },
    ],
  },
  {
    title: "Correspondence",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/privacy#cookies", label: "Cookie Policy" },
    ],
  },
]

const linkClass = "font-lede text-sm text-white/70 transition-colors hover:text-gold-400"

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white border-t border-gold-400/25 on-dark">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col leading-tight">
              <span className="font-serif text-2xl font-medium text-white">Europe First</span>
              <span className="mt-2 font-mono text-[0.625rem] font-normal uppercase tracking-[0.32em] text-gold-400">
                A Code Victorian Community · Est. MMXXVI
              </span>
            </Link>
            <p className="mt-6 max-w-xs font-lede text-base leading-relaxed text-white/60">
              Europeans at home and abroad, organising in person and online.
              Members in twenty-four countries.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-gold-400">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gold-400/20">
        <div className="mx-auto max-w-7xl px-6 py-7">
          <div className="dbl-rule mb-6" />
          <p className="text-center font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-white/50">
            © MMXXVI Europe First · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
