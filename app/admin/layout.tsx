import type { Metadata } from "next"
import Link from "next/link"
import { isSupabaseConfigured } from "@/lib/supabase"

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
      <main className="mx-auto max-w-5xl px-6 py-10">
        {!isSupabaseConfigured() ? <NotConfigured /> : children}
      </main>
    </div>
  )
}

function NotConfigured() {
  return (
    <div className="border border-gold-400/30 bg-ivory p-10 text-center">
      <h1 className="font-serif text-3xl font-medium">CMS not configured</h1>
      <p className="mx-auto mt-4 max-w-lg text-base text-navy-800/70">
        Set <code className="font-mono">NEXT_PUBLIC_SUPABASE_URL</code>,{" "}
        <code className="font-mono">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> and{" "}
        <code className="font-mono">SUPABASE_SERVICE_ROLE_KEY</code> on Vercel,
        run the SQL in <code className="font-mono">supabase/schema.sql</code>,
        and redeploy. See <code className="font-mono">CMS_SETUP.md</code> for
        the walkthrough.
      </p>
    </div>
  )
}
