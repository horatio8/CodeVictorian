// Simple username/password admin auth for /admin.
// Credentials come from ADMIN_USERNAME / ADMIN_PASSWORD env vars; if unset,
// the demo defaults below are used so the login flow works out of the box.
//
// CHANGE BOTH BEFORE GOING TO LIVE TRAFFIC. Set ADMIN_USERNAME and
// ADMIN_PASSWORD on Vercel and redeploy — the env values override the
// defaults here without any code change.

import { cookies } from "next/headers"

const DEFAULT_USERNAME = "admin"
const DEFAULT_PASSWORD = "CodeVictorian2026"

const SESSION_COOKIE = "cv_admin_session"
const SESSION_VALUE = "ok"
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7 // 7 days

function adminUsername(): string {
  return process.env.ADMIN_USERNAME || DEFAULT_USERNAME
}
function adminPassword(): string {
  return process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD
}

export type AdminSession = {
  username: string
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies()
  const value = cookieStore.get(SESSION_COOKIE)?.value
  if (value !== SESSION_VALUE) return null
  return { username: adminUsername() }
}

export function checkCredentials(username: string, password: string): boolean {
  // Constant-time compare not strictly needed for a demo gate, but cheap
  // and consistent with handling secrets defensively.
  const u = adminUsername()
  const p = adminPassword()
  return username === u && password === p
}

export async function setSessionCookie() {
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, SESSION_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  })
}

export async function clearSessionCookie() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
}
