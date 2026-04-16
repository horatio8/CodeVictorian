"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { DataTable } from "@/components/admin/data-table"
import { formatEUR } from "@/lib/utils"
import { Heart } from "lucide-react"

interface DonationItem {
  id: string
  amount: number
  currency: string
  frequency: string
  email: string | null
  name: string | null
  status: string
  createdAt: string
}

export default function AdminDonationsPage() {
  const [items, setItems] = useState<DonationItem[]>([])
  const [total, setTotal] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)

  async function fetchData(p = page) {
    const res = await fetch(`/api/admin/donations?page=${p}`)
    const data = await res.json()
    setItems(data.items)
    setTotal(data.total)
    setTotalAmount(data.totalAmount)
    setPages(data.pages)
    setPage(data.page)
  }

  useEffect(() => { fetchData() }, [])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                <Heart className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-primary">{formatEUR(totalAmount)}</p>
                <p className="text-xs text-gray-500">Total raised</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-serif font-bold text-primary">{total}</p>
            <p className="text-xs text-gray-500">Total donations</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-serif font-bold text-primary">
              {total > 0 ? formatEUR(totalAmount / total) : formatEUR(0)}
            </p>
            <p className="text-xs text-gray-500">Average donation</p>
          </CardContent>
        </Card>
      </div>

      <DataTable headers={["Donor", "Amount", "Frequency", "Status", "Date"]} page={page} pages={pages} total={total} onPageChange={(p) => fetchData(p)} empty="No donations yet">
        {items.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800">{item.name || item.email || "Anonymous"}</td>
            <td className="px-4 py-3 font-bold text-accent">{formatEUR(item.amount)}</td>
            <td className="px-4 py-3">
              <Badge variant={item.frequency === "monthly" ? "accent" : "muted"}>
                {item.frequency === "monthly" ? "Monthly" : "One-time"}
              </Badge>
            </td>
            <td className="px-4 py-3">
              <Badge variant={item.status === "completed" ? "accent" : "outline"}>
                {item.status}
              </Badge>
            </td>
            <td className="px-4 py-3 text-gray-500">{new Date(item.createdAt).toLocaleDateString("en-GB")}</td>
          </tr>
        ))}
      </DataTable>
    </div>
  )
}
