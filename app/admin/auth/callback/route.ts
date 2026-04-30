import { NextResponse, type NextRequest } from "next/server"
import { getAuthClient } from "@/lib/admin-auth"

// Magic-link landing route. Supabase appends `?token_hash=…&type=…` (the new
// PKCE flow) or `?code=…` to the URL we set as `emailRedirectTo`. Verify the
// token, set the session cookie via the @supabase/ssr server client, then
// bounce to /admin.

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const code = url.searchParams.get("code")
  const tokenHash = url.searchParams.get("token_hash")
  const type = url.searchParams.get("type") as
    | "email"
    | "magiclink"
    | "recovery"
    | "invite"
    | "signup"
    | null

  const supa = await getAuthClient()
  if (!supa) {
    return NextResponse.redirect(new URL("/admin/login?error=unconfigured", url))
  }

  if (code) {
    const { error } = await supa.auth.exchangeCodeForSession(code)
    if (error) {
      return NextResponse.redirect(
        new URL(`/admin/login?error=${encodeURIComponent(error.message)}`, url),
      )
    }
  } else if (tokenHash && type) {
    const { error } = await supa.auth.verifyOtp({ token_hash: tokenHash, type })
    if (error) {
      return NextResponse.redirect(
        new URL(`/admin/login?error=${encodeURIComponent(error.message)}`, url),
      )
    }
  } else {
    return NextResponse.redirect(new URL("/admin/login?error=missing", url))
  }

  return NextResponse.redirect(new URL("/admin", url))
}
