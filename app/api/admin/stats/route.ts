import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  try {
    const [
      petitions,
      members,
      volunteers,
      donations,
      messages,
      news,
      events,
      products,
      unreadMessages,
      pendingVolunteers,
      recentDonations,
      recentPetitions,
    ] = await Promise.all([
      db.petitionSignature.count(),
      db.member.count(),
      db.volunteer.count(),
      db.donation.aggregate({ _sum: { amount: true }, _count: true }),
      db.contactMessage.count(),
      db.newsArticle.count(),
      db.event.count(),
      db.product.count(),
      db.contactMessage.count({ where: { read: false } }),
      db.volunteer.count({ where: { status: "pending" } }),
      db.donation.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
      db.petitionSignature.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ])

    return NextResponse.json({
      counts: {
        petitions,
        members,
        volunteers: volunteers,
        donationTotal: donations._sum.amount || 0,
        donationCount: donations._count,
        messages,
        unreadMessages,
        pendingVolunteers,
        news,
        events,
        products,
      },
      recentDonations,
      recentPetitions,
    })
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    )
  }
}
