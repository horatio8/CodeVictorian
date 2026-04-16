import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get("page") || "1")
  const limit = parseInt(searchParams.get("limit") || "50")
  const status = searchParams.get("status")
  const skip = (page - 1) * limit
  const where = status ? { status } : {}

  const [items, total] = await Promise.all([
    db.volunteer.findMany({ where, orderBy: { createdAt: "desc" }, skip, take: limit }),
    db.volunteer.count({ where }),
  ])

  return NextResponse.json({ items, total, page, pages: Math.ceil(total / limit) })
}

export async function PUT(request: NextRequest) {
  const body = await request.json()
  const { id, status } = body
  const volunteer = await db.volunteer.update({ where: { id }, data: { status } })
  return NextResponse.json(volunteer)
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 })

  await db.volunteer.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
