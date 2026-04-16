"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/admin/data-table"
import { Trash2, Download } from "lucide-react"

interface MemberItem {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string | null
  country: string | null
  reason: string | null
  status: string
  createdAt: string
}

export default function AdminMembersPage() {
  const [items, setItems] = useState<MemberItem[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)

  async function fetchData(p = page) {
    const res = await fetch(`/api/admin/members?page=${p}`)
    const data = await res.json()
    setItems(data.items)
    setTotal(data.total)
    setPages(data.pages)
    setPage(data.page)
  }

  useEffect(() => { fetchData() }, [])

  async function toggleStatus(id: string, current: string) {
    const status = current === "active" ? "inactive" : "active"
    await fetch("/api/admin/members", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    })
    fetchData()
  }

  async function handleDelete(id: string) {
    if (!confirm("Remove this member?")) return
    await fetch(`/api/admin/members?id=${id}`, { method: "DELETE" })
    fetchData()
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{total} members</p>
        <Button size="sm" variant="outline" onClick={() => {
          const csv = ["First Name,Last Name,Email,Country,Status,Joined", ...items.map(i => [i.firstName, i.lastName, i.email, i.country || "", i.status, new Date(i.createdAt).toLocaleDateString("en-GB")].join(","))].join("\n")
          const blob = new Blob([csv], { type: "text/csv" })
          const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "members.csv"; a.click()
        }}>
          <Download className="h-4 w-4 mr-1" /> Export
        </Button>
      </div>

      <DataTable headers={["Name", "Email", "Country", "Status", "Joined", "Actions"]} page={page} pages={pages} total={total} onPageChange={(p) => fetchData(p)} empty="No members yet">
        {items.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800">{item.firstName} {item.lastName}</td>
            <td className="px-4 py-3 text-gray-500 text-xs">{item.email}</td>
            <td className="px-4 py-3 text-gray-500">{item.country || "\u2014"}</td>
            <td className="px-4 py-3">
              <button onClick={() => toggleStatus(item.id, item.status)}>
                {item.status === "active" ? <Badge variant="accent">Active</Badge> : <Badge variant="outline">Inactive</Badge>}
              </button>
            </td>
            <td className="px-4 py-3 text-gray-500">{new Date(item.createdAt).toLocaleDateString("en-GB")}</td>
            <td className="px-4 py-3">
              <button onClick={() => handleDelete(item.id)} className="p-1.5 rounded hover:bg-red-50 text-red-600"><Trash2 className="h-4 w-4" /></button>
            </td>
          </tr>
        ))}
      </DataTable>
    </div>
  )
}
