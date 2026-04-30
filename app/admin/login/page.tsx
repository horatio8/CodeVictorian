import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { getAuthClient, getAdminSession } from "@/lib/admin-auth"
import { adminClient } from "@/lib/supabase"

export const dynamic = "force-dynamic"

async function sendLink(formData: FormData) {
  "use server"
  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  if (!email) redirect("/admin/login?error=missing")

  // Allowlist gate: only emails seeded in cms_admins can sign in.
  const admin = adminClient()
  if (!admin) redirect("/admin/login?error=unconfigured")
  const { data } = await admin
    .from("cms_admins")
    .select("email")
    .eq("email", email)
    .maybeSingle()
  if (!data) redirect("/admin/login?error=denied")

  const supa = await getAuthClient()
  if (!supa) redirect("/admin/login?error=unconfigured")

  const hdrs = await headers()
  const host = hdrs.get("x-forwarded-host") ?? hdrs.get("host") ?? "localhost:3000"
  const proto = hdrs.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https")
  const redirectTo = `${proto}://${host}/admin/auth/callback`

  const { error } = await supa.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: redirectTo },
  })
  if (error) redirect(`/admin/login?error=${encodeURIComponent(error.message)}`)
  redirect("/admin/login?sent=1")
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string }>
}) {
  const session = await getAdminSession()
  if (session) redirect("/admin")
  const params = await searchParams

  return (
    <div className="mx-auto max-w-md border border-gold-400/30 bg-ivory p-10">
      <span className="eyebrow">Sign in</span>
      <h1 className="mt-4 font-serif text-3xl font-medium">Admin access</h1>
      <p className="mt-3 text-sm text-navy-800/70">
        Enter your email — we'll send a one-time sign-in link. Only emails on the
        admin allowlist can request a link.
      </p>

      {params.sent && (
        <p className="mt-6 border border-gold-400/40 bg-gold-400/10 px-4 py-3 text-sm text-navy-800">
          Check your inbox for the sign-in link.
        </p>
      )}
      {params.error && (
        <p className="mt-6 border border-red-400/40 bg-red-50 px-4 py-3 text-sm text-red-800">
          {errorMessage(params.error)}
        </p>
      )}

      <form action={sendLink} className="mt-8 space-y-4">
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="form-input"
        />
        <button type="submit" className="btn-primary w-full">
          Send sign-in link
        </button>
      </form>
    </div>
  )
}

function errorMessage(code: string): string {
  switch (code) {
    case "missing":
      return "Enter your email."
    case "denied":
      return "That email isn't on the admin allowlist."
    case "unconfigured":
      return "Supabase isn't configured yet."
    default:
      return code
  }
}
