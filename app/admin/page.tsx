import Link from "next/link"
import { redirect } from "next/navigation"
import { clearSessionCookie, getAdminSession } from "@/lib/admin-auth"
import { adminClient } from "@/lib/supabase"
import { SCHEMAS } from "@/lib/cms-schemas"

export const dynamic = "force-dynamic"

async function signOut() {
  "use server"
  await clearSessionCookie()
  redirect("/admin/login")
}

export default async function AdminDashboard() {
  const session = await getAdminSession()
  if (!session) redirect("/admin/login")

  const admin = adminClient()
  const { data: rows } = admin
    ? await admin.from("cms_documents").select("slug, updated_at, updated_by")
    : { data: null }
  const meta = new Map(
    (rows ?? []).map((r) => [r.slug as string, r as { updated_at: string; updated_by: string | null }]),
  )

  return (
    <div>
      <div className="flex items-end justify-between">
        <div>
          <span className="eyebrow">Editorial</span>
          <h1 className="mt-3 font-serif text-4xl font-medium">All documents</h1>
          <p className="mt-2 text-sm text-navy-800/65">
            Edit any document — changes go live within ~1 second of publish.
          </p>
        </div>
        <form action={signOut}>
          <button
            type="submit"
            className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-navy-800/60 hover:text-gold-600"
          >
            Sign out · {session.username}
          </button>
        </form>
      </div>

      <ul className="mt-10 divide-y divide-gold-400/20 border-y border-gold-400/25">
        {SCHEMAS.map((schema) => {
          const m = meta.get(schema.slug)
          const stamp = m?.updated_at ? new Date(m.updated_at) : null
          return (
            <li key={schema.slug}>
              <Link
                href={`/admin/${schema.slug}`}
                className="flex items-center justify-between gap-6 px-2 py-5 transition-colors hover:bg-gold-400/5"
              >
                <div>
                  <div className="font-serif text-xl font-medium text-navy-800">
                    {schema.title}
                  </div>
                  {schema.description && (
                    <div className="mt-1 text-sm text-navy-800/60">
                      {schema.description}
                    </div>
                  )}
                </div>
                <div className="text-right font-mono text-[0.625rem] uppercase tracking-[0.24em] text-navy-800/55">
                  {stamp ? (
                    <>
                      <div>edited {stamp.toLocaleDateString("en-GB")}</div>
                      {m?.updated_by && <div>by {m.updated_by}</div>}
                    </>
                  ) : (
                    <div>not yet edited</div>
                  )}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
