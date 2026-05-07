import { redirect } from "next/navigation"
import {
  checkCredentials,
  getAdminSession,
  setSessionCookie,
} from "@/lib/admin-auth"

export const dynamic = "force-dynamic"

async function signIn(formData: FormData) {
  "use server"
  const username = String(formData.get("username") ?? "").trim()
  const password = String(formData.get("password") ?? "")
  if (!checkCredentials(username, password)) {
    redirect("/admin/login?error=invalid")
  }
  await setSessionCookie()
  redirect("/admin")
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const session = await getAdminSession()
  if (session) redirect("/admin")
  const params = await searchParams

  return (
    <div className="mx-auto max-w-md border border-gold-400/30 bg-ivory p-10">
      <span className="eyebrow">Sign in</span>
      <h1 className="mt-4 font-serif text-3xl font-medium">Admin access</h1>
      <p className="mt-3 text-sm text-navy-800/70">
        Enter your administrator username and password.
      </p>

      {params.error === "invalid" && (
        <p className="mt-6 border border-red-400/40 bg-red-50 px-4 py-3 text-sm text-red-800">
          Invalid username or password.
        </p>
      )}

      <form action={signIn} className="mt-8 space-y-4">
        <input
          type="text"
          name="username"
          required
          placeholder="Username"
          autoComplete="username"
          className="form-input"
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          autoComplete="current-password"
          className="form-input"
        />
        <button type="submit" className="btn-primary w-full">
          Sign in
        </button>
      </form>
    </div>
  )
}
