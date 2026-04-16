"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { DataTable } from "@/components/admin/data-table"
import { Plus, Pencil, Trash2, X, Eye, EyeOff } from "lucide-react"

interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  imageUrl?: string | null
  published: boolean
  publishedAt: string | null
  createdAt: string
}

export default function AdminNewsPage() {
  const [items, setItems] = useState<Article[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [editing, setEditing] = useState<Partial<Article> | null>(null)
  const [saving, setSaving] = useState(false)

  async function fetchData(p = page) {
    const res = await fetch(`/api/admin/news?page=${p}`)
    const data = await res.json()
    setItems(data.items)
    setTotal(data.total)
    setPages(data.pages)
    setPage(data.page)
  }

  useEffect(() => { fetchData() }, [])

  async function handleSave() {
    if (!editing?.title) return
    setSaving(true)
    const method = editing.id ? "PUT" : "POST"
    await fetch("/api/admin/news", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    })
    setSaving(false)
    setEditing(null)
    fetchData()
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this article?")) return
    await fetch(`/api/admin/news?id=${id}`, { method: "DELETE" })
    fetchData()
  }

  async function togglePublished(item: Article) {
    await fetch("/api/admin/news", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item.id, published: !item.published }),
    })
    fetchData()
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{total} articles</p>
        <Button size="sm" onClick={() => setEditing({ title: "", excerpt: "", content: "", category: "Campaign", published: false })}>
          <Plus className="h-4 w-4 mr-1" /> New Article
        </Button>
      </div>

      {editing && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-primary">
              {editing.id ? "Edit Article" : "New Article"}
            </h3>
            <button onClick={() => setEditing(null)}>
              <X className="h-5 w-5 text-gray-400" />
            </button>
          </div>
          <Input placeholder="Title" value={editing.title || ""} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Category" value={editing.category || ""} onChange={(e) => setEditing({ ...editing, category: e.target.value })} />
            <Input placeholder="Image URL (optional)" value={editing.imageUrl || ""} onChange={(e) => setEditing({ ...editing, imageUrl: e.target.value })} />
          </div>
          <Input placeholder="Excerpt" value={editing.excerpt || ""} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} />
          <Textarea placeholder="Full content" value={editing.content || ""} onChange={(e) => setEditing({ ...editing, content: e.target.value })} className="min-h-[200px]" />
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={editing.published || false} onChange={(e) => setEditing({ ...editing, published: e.target.checked })} className="accent-accent" />
              Published
            </label>
            <div className="flex-1" />
            <Button variant="outline" size="sm" onClick={() => setEditing(null)}>Cancel</Button>
            <Button size="sm" onClick={handleSave} disabled={saving}>{saving ? "Saving\u2026" : "Save"}</Button>
          </div>
        </div>
      )}

      <DataTable
        headers={["Title", "Category", "Status", "Date", "Actions"]}
        page={page}
        pages={pages}
        total={total}
        onPageChange={(p) => fetchData(p)}
      >
        {items.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800 max-w-xs truncate">{item.title}</td>
            <td className="px-4 py-3"><Badge variant="muted">{item.category}</Badge></td>
            <td className="px-4 py-3">
              <button onClick={() => togglePublished(item)}>
                {item.published ? (
                  <Badge variant="accent"><Eye className="h-3 w-3 mr-1" />Published</Badge>
                ) : (
                  <Badge variant="outline"><EyeOff className="h-3 w-3 mr-1" />Draft</Badge>
                )}
              </button>
            </td>
            <td className="px-4 py-3 text-gray-500">{new Date(item.createdAt).toLocaleDateString("en-GB")}</td>
            <td className="px-4 py-3">
              <div className="flex gap-1">
                <button onClick={() => setEditing(item)} className="p-1.5 rounded hover:bg-blue-50 text-blue-600"><Pencil className="h-4 w-4" /></button>
                <button onClick={() => handleDelete(item.id)} className="p-1.5 rounded hover:bg-red-50 text-red-600"><Trash2 className="h-4 w-4" /></button>
              </div>
            </td>
          </tr>
        ))}
      </DataTable>
    </div>
  )
}
