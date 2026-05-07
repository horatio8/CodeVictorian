import { notFound, redirect } from "next/navigation"
import Link from "next/link"
import { getAdminSession } from "@/lib/admin-auth"
import { adminClient } from "@/lib/supabase"
import { getSchema } from "@/lib/cms-schemas"
import { invalidateDocument } from "@/lib/cms"
import DocumentEditor from "./DocumentEditor"

export const dynamic = "force-dynamic"

async function saveDocument(slug: string, formData: FormData) {
  "use server"
  const session = await getAdminSession()
  if (!session) redirect("/admin/login")

  const schema = getSchema(slug)
  if (!schema) redirect("/admin")

  const raw = String(formData.get("content") ?? "{}")
  let content: unknown
  try {
    content = JSON.parse(raw)
  } catch {
    redirect(`/admin/${slug}?error=invalid_json`)
  }

  const admin = adminClient()
  if (!admin) redirect(`/admin/${slug}?error=unconfigured`)

  const { error } = await admin.from("cms_documents").upsert(
    {
      slug,
      content,
      updated_at: new Date().toISOString(),
      updated_by: session.email,
    },
    { onConflict: "slug" },
  )
  if (error) redirect(`/admin/${slug}?error=${encodeURIComponent(error.message)}`)

  invalidateDocument(slug)
  redirect(`/admin/${slug}?saved=1`)
}

export default async function EditPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ saved?: string; error?: string }>
}) {
  const session = await getAdminSession()
  if (!session) redirect("/admin/login")

  const { slug } = await params
  const schema = getSchema(slug)
  if (!schema) notFound()

  const admin = adminClient()
  let initial: unknown = {}
  if (admin) {
    const { data } = await admin
      .from("cms_documents")
      .select("content")
      .eq("slug", slug)
      .maybeSingle()
    initial = (data?.content as unknown) ?? {}
  }

  const sp = await searchParams
  const action = saveDocument.bind(null, slug)

  return (
    <div>
      <Link
        href="/admin"
        className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-navy-800/60 hover:text-gold-600"
      >
        ← All documents
      </Link>
      <div className="mt-3 flex items-end justify-between">
        <div>
          <span className="eyebrow">Editing</span>
          <h1 className="mt-3 font-serif text-4xl font-medium">{schema.title}</h1>
          {schema.description && (
            <p className="mt-2 text-sm text-navy-800/65">{schema.description}</p>
          )}
        </div>
      </div>

      {sp.saved && (
        <p className="mt-6 border border-gold-400/40 bg-gold-400/10 px-4 py-3 text-sm text-navy-800">
          Saved. Live within ~1 second.
        </p>
      )}
      {sp.error && (
        <p className="mt-6 border border-red-400/40 bg-red-50 px-4 py-3 text-sm text-red-800">
          {sp.error}
        </p>
      )}

      <div className="mt-8">
        <DocumentEditor schema={schema} initial={initial} action={action} />
      </div>
    </div>
  )
}
