"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { DataTable } from "@/components/admin/data-table"
import { Trash2, Check, Clock, X as XIcon } from "lucide-react"

interface VolunteerItem {
  id: string
  firstName: string
  lastName: string
  email: string
  location: string | null
  availability: string | null
  interests: string | null
  status: string
  createdAt: string
}

const statusBadge = (s: string) => {
  switch (s) {
    case "approved": return <Badge variant="accent">Approved</Badge>
    case "rejected": return <Badge variant="outline">Rejected</Badge>
    default: return <Badge variant="muted"><Clock className="h-3 w-3 mr-1" />Pending</Badge>
  }
}

export default function AdminVolunteersPage() {
  const [items, setItems] = useState<VolunteerItem[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)

  async function fetchData(p = page) {
    const res = await fetch(`/api/admin/volunteers?page=${p}`)
    const data = await res.json()
    setItems(data.items)
    setTotal(data.total)
    setPages(data.pages)
    setPage(data.page)
  }

  useEffect(() => { fetchData() }, [])

  async function updateStatus(id: string, status: string) {
    await fetch("/api/admin/volunteers", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    })
    fetchData()
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this volunteer application?")) return
    await fetch(`/api/admin/volunteers?id=${id}`, { method: "DELETE" })
    fetchData()
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">{total} volunteers</p>

      <DataTable headers={["Name", "Email", "Location", "Availability", "Status", "Actions"]} page={page} pages={pages} total={total} onPageChange={(p) => fetchData(p)} empty="No volunteer applications yet">
        {items.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800">{item.firstName} {item.lastName}</td>
            <td className="px-4 py-3 text-gray-500 text-xs">{item.email}</td>
            <td className="px-4 py-3 text-gray-500">{item.location || "\u2014"}</td>
            <td className="px-4 py-3 text-gray-500 text-xs">{item.availability || "\u2014"}</td>
            <td className="px-4 py-3">{statusBadge(item.status)}</td>
            <td className="px-4 py-3">
              <div className="flex gap-1">
                {item.status !== "approved" && (
                  <button onClick={() => updateStatus(item.id, "approved")} className="p-1.5 rounded hover:bg-green-50 text-green-600" title="Approve">
                    <Check className="h-4 w-4" />
                  </button>
                )}
                {item.status !== "rejected" && (
                  <button onClick={() => updateStatus(item.id, "rejected")} className="p-1.5 rounded hover:bg-orange-50 text-orange-600" title="Reject">
                    <XIcon className="h-4 w-4" />
                  </button>
                )}
                <button onClick={() => handleDelete(item.id)} className="p-1.5 rounded hover:bg-red-50 text-red-600" title="Delete">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </DataTable>
    </div>
  )
}
