"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { DataTable } from "@/components/admin/data-table"
import { Trash2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Signature {
  id: string
  firstName: string
  lastName: string
  email: string
  postcode: string | null
  country: string | null
  createdAt: string
}

export default function AdminPetitionsPage() {
  const [items, setItems] = useState<Signature[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)

  async function fetchData(p = page) {
    const res = await fetch(`/api/admin/petitions?page=${p}`)
    const data = await res.json()
    setItems(data.items)
    setTotal(data.total)
    setPages(data.pages)
    setPage(data.page)
  }

  useEffect(() => { fetchData() }, [])

  async function handleDelete(id: string) {
    if (!confirm("Remove this signature?")) return
    await fetch(`/api/admin/petitions?id=${id}`, { method: "DELETE" })
    fetchData()
  }

  function exportCSV() {
    const csv = [
      "First Name,Last Name,Email,Postcode,Country,Date",
      ...items.map((i) =>
        [i.firstName, i.lastName, i.email, i.postcode || "", i.country || "", new Date(i.createdAt).toLocaleDateString("en-GB")].join(",")
      ),
    ].join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "petition-signatures.csv"
    a.click()
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <p className="text-sm text-gray-500">{total.toLocaleString("en-GB")} signatures</p>
        </div>
        <Button size="sm" variant="outline" onClick={exportCSV}>
          <Download className="h-4 w-4 mr-1" /> Export CSV
        </Button>
      </div>

      <DataTable headers={["Name", "Email", "Location", "Date", ""]} page={page} pages={pages} total={total} onPageChange={(p) => fetchData(p)} empty="No petition signatures yet">
        {items.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800">{item.firstName} {item.lastName}</td>
            <td className="px-4 py-3 text-gray-500">{item.email}</td>
            <td className="px-4 py-3 text-gray-500">
              {[item.postcode, item.country].filter(Boolean).join(", ") || "\u2014"}
            </td>
            <td className="px-4 py-3 text-gray-500">{new Date(item.createdAt).toLocaleDateString("en-GB")}</td>
            <td className="px-4 py-3">
              <button onClick={() => handleDelete(item.id)} className="p-1.5 rounded hover:bg-red-50 text-red-600">
                <Trash2 className="h-4 w-4" />
              </button>
            </td>
          </tr>
        ))}
      </DataTable>
    </div>
  )
}
