import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "cv-admin-secret-change-in-production"
)

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only protect admin routes (not the login page or admin API auth)
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const token = request.cookies.get("cv_admin_token")?.value

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    try {
      await jwtVerify(token, SECRET)
      return NextResponse.next()
    } catch {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  // Protect admin API routes (except auth)
  if (
    pathname.startsWith("/api/admin") &&
    !pathname.startsWith("/api/admin/auth") &&
    !pathname.startsWith("/api/admin/init")
  ) {
    const token = request.cookies.get("cv_admin_token")?.value

    if (!token) {
      return NextResponse.json({ error: "Unauthorised" }, { status: 401 })
    }

    try {
      await jwtVerify(token, SECRET)
      return NextResponse.next()
    } catch {
      return NextResponse.json({ error: "Unauthorised" }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
}
