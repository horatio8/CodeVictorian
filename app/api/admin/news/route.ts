import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get("page") || "1")
  const limit = parseInt(searchParams.get("limit") || "20")
  const skip = (page - 1) * limit

  const [items, total] = await Promise.all([
    db.newsArticle.findMany({
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    db.newsArticle.count(),
  ])

  return NextResponse.json({ items, total, page, pages: Math.ceil(total / limit) })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const slug = body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    const article = await db.newsArticle.create({
      data: {
        title: body.title,
        slug,
        excerpt: body.excerpt,
        content: body.content,
        category: body.category || "Campaign",
        imageUrl: body.imageUrl || null,
        published: body.published ?? false,
        publishedAt: body.published ? new Date() : null,
      },
    })

    return NextResponse.json(article, { status: 201 })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...data } = body

    if (data.published && !data.publishedAt) {
      data.publishedAt = new Date()
    }

    const article = await db.newsArticle.update({
      where: { id },
      data,
    })

    return NextResponse.json(article)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 })

  await db.newsArticle.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
