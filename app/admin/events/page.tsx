"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { DataTable } from "@/components/admin/data-table"
import { Plus, Pencil, Trash2, X, Eye, EyeOff, Star } from "lucide-react"

interface EventItem {
  id: string
  title: string
  description: string
  location: string
  date: string
  featured: boolean
  published: boolean
  attendees: number
  createdAt: string
}

export default function AdminEventsPage() {
  const [items, setItems] = useState<EventItem[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [editing, setEditing] = useState<Partial<EventItem> | null>(null)
  const [saving, setSaving] = useState(false)

  async function fetchData(p = page) {
    const res = await fetch(`/api/admin/events?page=${p}`)
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
    await fetch("/api/admin/events", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    })
    setSaving(false)
    setEditing(null)
    fetchData()
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this event?")) return
    await fetch(`/api/admin/events?id=${id}`, { method: "DELETE" })
    fetchData()
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{total} events</p>
        <Button size="sm" onClick={() => setEditing({ title: "", description: "", location: "", date: "", featured: false, published: false })}>
          <Plus className="h-4 w-4 mr-1" /> New Event
        </Button>
      </div>

      {editing && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-primary">{editing.id ? "Edit Event" : "New Event"}</h3>
            <button onClick={() => setEditing(null)}><X className="h-5 w-5 text-gray-400" /></button>
          </div>
          <Input placeholder="Title" value={editing.title || ""} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Location" value={editing.location || ""} onChange={(e) => setEditing({ ...editing, location: e.target.value })} />
            <Input type="datetime-local" value={editing.date ? new Date(editing.date).toISOString().slice(0, 16) : ""} onChange={(e) => setEditing({ ...editing, date: e.target.value })} />
          </div>
          <Textarea placeholder="Description" value={editing.description || ""} onChange={(e) => setEditing({ ...editing, description: e.target.value })} />
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={editing.featured || false} onChange={(e) => setEditing({ ...editing, featured: e.target.checked })} className="accent-accent" />
              Featured
            </label>
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

      <DataTable headers={["Event", "Location", "Date", "Status", "Actions"]} page={page} pages={pages} total={total} onPageChange={(p) => fetchData(p)}>
        {items.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50">
            <td className="px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">{item.title}</span>
                {item.featured && <Star className="h-3.5 w-3.5 text-accent fill-accent" />}
              </div>
            </td>
            <td className="px-4 py-3 text-gray-500">{item.location}</td>
            <td className="px-4 py-3 text-gray-500">{new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</td>
            <td className="px-4 py-3">
              {item.published ? <Badge variant="accent">Published</Badge> : <Badge variant="outline">Draft</Badge>}
            </td>
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
