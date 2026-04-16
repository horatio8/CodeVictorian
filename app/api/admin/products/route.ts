import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get("page") || "1")
  const limit = parseInt(searchParams.get("limit") || "20")
  const skip = (page - 1) * limit

  const [items, total] = await Promise.all([
    db.product.findMany({ orderBy: { createdAt: "desc" }, skip, take: limit }),
    db.product.count(),
  ])

  return NextResponse.json({ items, total, page, pages: Math.ceil(total / limit) })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const product = await db.product.create({
      data: {
        name: body.name,
        description: body.description,
        price: parseFloat(body.price),
        imageUrl: body.imageUrl || null,
        category: body.category || "Merchandise",
        inStock: body.inStock ?? true,
        published: body.published ?? false,
      },
    })
    return NextResponse.json(product, { status: 201 })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...data } = body
    if (data.price) data.price = parseFloat(data.price)

    const product = await db.product.update({ where: { id }, data })
    return NextResponse.json(product)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 })

  await db.product.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
