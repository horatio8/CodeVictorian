import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get("page") || "1")
  const limit = parseInt(searchParams.get("limit") || "50")
  const skip = (page - 1) * limit

  const [items, total, aggregate] = await Promise.all([
    db.donation.findMany({ orderBy: { createdAt: "desc" }, skip, take: limit }),
    db.donation.count(),
    db.donation.aggregate({ _sum: { amount: true } }),
  ])

  return NextResponse.json({
    items,
    total,
    totalAmount: aggregate._sum.amount || 0,
    page,
    pages: Math.ceil(total / limit),
  })
}
