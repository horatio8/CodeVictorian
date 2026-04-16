import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get("page") || "1")
  const limit = parseInt(searchParams.get("limit") || "50")
  const skip = (page - 1) * limit

  const [items, total, unread] = await Promise.all([
    db.contactMessage.findMany({ orderBy: { createdAt: "desc" }, skip, take: limit }),
    db.contactMessage.count(),
    db.contactMessage.count({ where: { read: false } }),
  ])

  return NextResponse.json({ items, total, unread, page, pages: Math.ceil(total / limit) })
}

export async function PUT(request: NextRequest) {
  const body = await request.json()
  const { id, read } = body
  const message = await db.contactMessage.update({ where: { id }, data: { read } })
  return NextResponse.json(message)
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 })

  await db.contactMessage.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
