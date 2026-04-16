import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

// Public petition submission
export async function POST(request: NextRequest) {
  try {
    const { action, ...data } = await request.json()

    switch (action) {
      case "petition": {
        const sig = await db.petitionSignature.create({
          data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            postcode: data.postcode || null,
            country: data.country || null,
          },
        })
        const count = await db.petitionSignature.count()
        return NextResponse.json({ success: true, id: sig.id, count })
      }

      case "volunteer": {
        const vol = await db.volunteer.create({
          data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            location: data.location || null,
            availability: data.availability || null,
            interests: data.interests || null,
          },
        })
        return NextResponse.json({ success: true, id: vol.id })
      }

      case "join": {
        const member = await db.member.create({
          data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone || null,
            country: data.country || null,
            reason: data.reason || null,
          },
        })
        return NextResponse.json({ success: true, id: member.id })
      }

      case "contact": {
        const msg = await db.contactMessage.create({
          data: {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
          },
        })
        return NextResponse.json({ success: true, id: msg.id })
      }

      case "donate": {
        const donation = await db.donation.create({
          data: {
            amount: parseFloat(data.amount),
            currency: "EUR",
            frequency: data.frequency || "once",
            email: data.email || null,
            name: data.name || null,
          },
        })
        return NextResponse.json({ success: true, id: donation.id })
      }

      default:
        return NextResponse.json({ error: "Unknown action" }, { status: 400 })
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }
}
