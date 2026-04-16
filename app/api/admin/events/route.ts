import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get("page") || "1")
  const limit = parseInt(searchParams.get("limit") || "20")
  const skip = (page - 1) * limit

  const [items, total] = await Promise.all([
    db.event.findMany({ orderBy: { date: "desc" }, skip, take: limit }),
    db.event.count(),
  ])

  return NextResponse.json({ items, total, page, pages: Math.ceil(total / limit) })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const event = await db.event.create({
      data: {
        title: body.title,
        description: body.description,
        location: body.location,
        date: new Date(body.date),
        endDate: body.endDate ? new Date(body.endDate) : null,
        featured: body.featured ?? false,
        imageUrl: body.imageUrl || null,
        published: body.published ?? false,
      },
    })
    return NextResponse.json(event, { status: 201 })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...data } = body
    if (data.date) data.date = new Date(data.date)
    if (data.endDate) data.endDate = new Date(data.endDate)

    const event = await db.event.update({ where: { id }, data })
    return NextResponse.json(event)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 })

  await db.event.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
