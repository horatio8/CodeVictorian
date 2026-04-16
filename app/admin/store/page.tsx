"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { DataTable } from "@/components/admin/data-table"
import { formatEUR } from "@/lib/utils"
import { Plus, Pencil, Trash2, X } from "lucide-react"

interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl?: string | null
  category: string
  inStock: boolean
  published: boolean
  createdAt: string
}

export default function AdminStorePage() {
  const [items, setItems] = useState<Product[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [editing, setEditing] = useState<Partial<Product> | null>(null)
  const [saving, setSaving] = useState(false)

  async function fetchData(p = page) {
    const res = await fetch(`/api/admin/products?page=${p}`)
    const data = await res.json()
    setItems(data.items)
    setTotal(data.total)
    setPages(data.pages)
    setPage(data.page)
  }

  useEffect(() => { fetchData() }, [])

  async function handleSave() {
    if (!editing?.name) return
    setSaving(true)
    const method = editing.id ? "PUT" : "POST"
    await fetch("/api/admin/products", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    })
    setSaving(false)
    setEditing(null)
    fetchData()
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this product?")) return
    await fetch(`/api/admin/products?id=${id}`, { method: "DELETE" })
    fetchData()
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{total} products</p>
        <Button size="sm" onClick={() => setEditing({ name: "", description: "", price: 0, category: "Merchandise", inStock: true, published: false })}>
          <Plus className="h-4 w-4 mr-1" /> New Product
        </Button>
      </div>

      {editing && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-primary">{editing.id ? "Edit Product" : "New Product"}</h3>
            <button onClick={() => setEditing(null)}><X className="h-5 w-5 text-gray-400" /></button>
          </div>
          <Input placeholder="Product name" value={editing.name || ""} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
          <div className="grid grid-cols-3 gap-4">
            <Input type="number" step="0.01" placeholder="Price (EUR)" value={editing.price || ""} onChange={(e) => setEditing({ ...editing, price: parseFloat(e.target.value) })} />
            <Input placeholder="Category" value={editing.category || ""} onChange={(e) => setEditing({ ...editing, category: e.target.value })} />
            <Input placeholder="Image URL (optional)" value={editing.imageUrl || ""} onChange={(e) => setEditing({ ...editing, imageUrl: e.target.value })} />
          </div>
          <Textarea placeholder="Description" value={editing.description || ""} onChange={(e) => setEditing({ ...editing, description: e.target.value })} />
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={editing.inStock ?? true} onChange={(e) => setEditing({ ...editing, inStock: e.target.checked })} className="accent-accent" />
              In Stock
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

      <DataTable headers={["Product", "Price", "Category", "Stock", "Status", "Actions"]} page={page} pages={pages} total={total} onPageChange={(p) => fetchData(p)}>
        {items.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800">{item.name}</td>
            <td className="px-4 py-3 font-bold text-accent">{formatEUR(item.price)}</td>
            <td className="px-4 py-3"><Badge variant="muted">{item.category}</Badge></td>
            <td className="px-4 py-3">{item.inStock ? <Badge variant="accent">In Stock</Badge> : <Badge variant="outline">Out of Stock</Badge>}</td>
            <td className="px-4 py-3">{item.published ? <Badge variant="accent">Published</Badge> : <Badge variant="outline">Draft</Badge>}</td>
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
