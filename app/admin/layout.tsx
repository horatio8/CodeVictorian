import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Admin · Code Victorian",
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream font-lede text-navy-800">
      <header className="border-b border-gold-400/25 bg-ivory">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            href="/admin"
            className="font-serif text-xl font-medium text-navy-800 hover:text-gold-600"
          >
            Code Victorian · Admin
          </Link>
          <Link
            href="/"
            className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-navy-800/60 hover:text-gold-600"
          >
            View site →
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  )
}
