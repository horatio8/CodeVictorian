// Helpers for /admin auth. Keep in one file so we never accidentally hit
// the database from a route that should redirect to login first.

import { cookies } from "next/headers"
import { createServerClient } from "@supabase/ssr"
import { adminClient, isSupabaseConfigured } from "./supabase"

export async function getAuthClient() {
  if (!isSupabaseConfigured()) return null
  const cookieStore = await cookies()
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(toSet) {
        try {
          toSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          )
        } catch {
          // setAll fails when called from a Server Component render path.
          // The middleware refresh keeps cookies fresh on subsequent requests.
        }
      },
    },
  })
}

export type AdminSession = {
  email: string
  userId: string
}

// Returns the signed-in admin's session, or null. Verifies both:
//   1. The cookie carries a valid Supabase session, and
//   2. The email is present in the cms_admins allowlist.
export async function getAdminSession(): Promise<AdminSession | null> {
  const supa = await getAuthClient()
  if (!supa) return null
  const {
    data: { user },
  } = await supa.auth.getUser()
  if (!user?.email) return null

  const admin = adminClient()
  if (!admin) return null
  const { data, error } = await admin
    .from("cms_admins")
    .select("email")
    .eq("email", user.email.toLowerCase())
    .maybeSingle()
  if (error || !data) return null

  return { email: user.email, userId: user.id }
}
