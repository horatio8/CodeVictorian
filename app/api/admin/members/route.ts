import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get("page") || "1")
  const limit = parseInt(searchParams.get("limit") || "50")
  const skip = (page - 1) * limit

  const [items, total] = await Promise.all([
    db.member.findMany({ orderBy: { createdAt: "desc" }, skip, take: limit }),
    db.member.count(),
  ])

  return NextResponse.json({ items, total, page, pages: Math.ceil(total / limit) })
}

export async function PUT(request: NextRequest) {
  const body = await request.json()
  const { id, status } = body
  const member = await db.member.update({ where: { id }, data: { status } })
  return NextResponse.json(member)
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 })

  await db.member.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
