// Supabase client factories — used purely for the cms_documents data
// store now. Auth is handled by lib/admin-auth.ts (env-var-backed
// username/password), so the @supabase/ssr auth helpers were removed.
//
// `publicClient()` uses the anon key and is safe in any context — used by
// page-side fetchers that read CMS documents.
// `adminClient()` uses the service-role key and bypasses RLS. Only ever
// imported from server actions or route handlers under /admin. Never
// imported into a client component or shipped to the browser.

import { createClient, type SupabaseClient } from "@supabase/supabase-js"

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""

export function isSupabaseConfigured(): boolean {
  return Boolean(url && anonKey)
}

let _publicClient: SupabaseClient | null = null
export function publicClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) return null
  if (_publicClient) return _publicClient
  _publicClient = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  return _publicClient
}

let _adminClient: SupabaseClient | null = null
export function adminClient(): SupabaseClient | null {
  if (!url || !serviceKey) return null
  if (_adminClient) return _adminClient
  _adminClient = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  return _adminClient
}
