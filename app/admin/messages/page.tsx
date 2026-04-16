"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { DataTable } from "@/components/admin/data-table"
import { Trash2, Mail, MailOpen } from "lucide-react"

interface MessageItem {
  id: string
  name: string
  email: string
  subject: string
  message: string
  read: boolean
  createdAt: string
}

export default function AdminMessagesPage() {
  const [items, setItems] = useState<MessageItem[]>([])
  const [total, setTotal] = useState(0)
  const [unread, setUnread] = useState(0)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [expanded, setExpanded] = useState<string | null>(null)

  async function fetchData(p = page) {
    const res = await fetch(`/api/admin/messages?page=${p}`)
    const data = await res.json()
    setItems(data.items)
    setTotal(data.total)
    setUnread(data.unread)
    setPages(data.pages)
    setPage(data.page)
  }

  useEffect(() => { fetchData() }, [])

  async function toggleRead(id: string, currentRead: boolean) {
    await fetch("/api/admin/messages", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, read: !currentRead }),
    })
    fetchData()
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this message?")) return
    await fetch(`/api/admin/messages?id=${id}`, { method: "DELETE" })
    fetchData()
  }

  function toggleExpand(id: string) {
    setExpanded(expanded === id ? null : id)
    // Mark as read when expanded
    const item = items.find((i) => i.id === id)
    if (item && !item.read) {
      toggleRead(id, false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <p className="text-sm text-gray-500">{total} messages</p>
        {unread > 0 && <Badge variant="accent">{unread} unread</Badge>}
      </div>

      <DataTable headers={["", "From", "Subject", "Date", "Actions"]} page={page} pages={pages} total={total} onPageChange={(p) => fetchData(p)} empty="No messages yet">
        {items.map((item) => (
          <>
            <tr
              key={item.id}
              className={`hover:bg-gray-50 cursor-pointer ${!item.read ? "bg-blue-50/50" : ""}`}
              onClick={() => toggleExpand(item.id)}
            >
              <td className="px-4 py-3 w-8">
                {item.read ? (
                  <MailOpen className="h-4 w-4 text-gray-300" />
                ) : (
                  <Mail className="h-4 w-4 text-accent" />
                )}
              </td>
              <td className="px-4 py-3">
                <span className={`text-sm ${!item.read ? "font-bold text-gray-800" : "text-gray-600"}`}>
                  {item.name}
                </span>
                <span className="text-xs text-gray-400 block">{item.email}</span>
              </td>
              <td className="px-4 py-3">
                <span className={`text-sm ${!item.read ? "font-semibold text-gray-800" : "text-gray-600"}`}>
                  {item.subject}
                </span>
              </td>
              <td className="px-4 py-3 text-gray-500 text-sm">
                {new Date(item.createdAt).toLocaleDateString("en-GB")}
              </td>
              <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                <div className="flex gap-1">
                  <button
                    onClick={() => toggleRead(item.id, item.read)}
                    className="p-1.5 rounded hover:bg-blue-50 text-blue-600"
                    title={item.read ? "Mark unread" : "Mark read"}
                  >
                    {item.read ? <Mail className="h-4 w-4" /> : <MailOpen className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-1.5 rounded hover:bg-red-50 text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            {expanded === item.id && (
              <tr key={`${item.id}-detail`}>
                <td colSpan={5} className="px-6 py-4 bg-gray-50/80 border-b">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {item.message}
                  </p>
                </td>
              </tr>
            )}
          </>
        ))}
      </DataTable>
    </div>
  )
}
