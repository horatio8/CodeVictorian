import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { db } from "@/lib/db"

// GET /api/admin/init — seeds the database if empty. Safe to call multiple times.
export async function GET() {
  try {
    const existingAdmin = await db.admin.findFirst()
    if (existingAdmin) {
      return NextResponse.json({
        message: "Database already initialised. Login at /admin/login",
        seeded: false,
      })
    }

    // Create admin
    const passwordHash = bcrypt.hashSync("admin123", 10)
    await db.admin.create({
      data: {
        email: "admin@codevictorian.com",
        name: "Admin",
        password: passwordHash,
      },
    })

    // Seed news
    const articles = [
      {
        title: "Record Petition Numbers: 45,000 and Growing",
        slug: "record-petition-numbers-45000-and-growing",
        excerpt: "Our petition has reached a major milestone as support surges across the continent.",
        content: "We are thrilled to announce that our petition has surpassed 45,000 signatures, a testament to the growing concern among Europeans about the direction of our continent.\n\nThis remarkable achievement comes just months after we launched the campaign, and the momentum shows no signs of slowing.",
        category: "Campaign",
        published: true,
        publishedAt: new Date("2026-04-10"),
      },
      {
        title: "Code Victorian Rally Draws Thousands in Vienna",
        slug: "code-victorian-rally-draws-thousands-in-vienna",
        excerpt: "Supporters from across Europe gathered for our largest event yet.",
        content: "Last Saturday, the streets of Vienna were filled with thousands of Code Victorian supporters who gathered for our largest rally to date.\n\nSpeakers from across Europe addressed the crowd, calling for decisive action on immigration, cultural preservation, and the protection of European identity.",
        category: "Events",
        published: true,
        publishedAt: new Date("2026-04-05"),
      },
      {
        title: "New Policy Paper: A Blueprint for Cultural Preservation",
        slug: "new-policy-paper-blueprint-for-cultural-preservation",
        excerpt: "Our research team outlines actionable strategies for protecting European heritage.",
        content: "Today we publish our latest policy paper, which outlines a comprehensive strategy for safeguarding Europe's cultural heritage.\n\nThe paper addresses education reform, heritage site protection, arts funding, and the role of national institutions in maintaining cultural continuity.",
        category: "Policy",
        published: true,
        publishedAt: new Date("2026-03-28"),
      },
    ]

    for (const a of articles) {
      await db.newsArticle.create({ data: a })
    }

    // Seed events
    const events = [
      {
        title: "European Heritage March \u2014 Brussels",
        description: "A peaceful march through the heart of the EU capital, calling for the protection of European culture and identity.",
        location: "Brussels, Belgium",
        date: new Date("2026-04-28T10:00:00"),
        featured: true,
        published: true,
        attendees: 2500,
      },
      {
        title: "Cultural Preservation Conference \u2014 Vienna",
        description: "A full-day conference with speakers and workshops on safeguarding European traditions.",
        location: "Vienna, Austria",
        date: new Date("2026-05-15T09:00:00"),
        published: true,
        attendees: 800,
      },
      {
        title: "Policy Forum \u2014 Berlin",
        description: "An open forum on immigration reform and border security in the EU context.",
        location: "Berlin, Germany",
        date: new Date("2026-06-10T14:00:00"),
        published: true,
        attendees: 400,
      },
    ]

    for (const e of events) {
      await db.event.create({ data: e })
    }

    // Seed products
    const products = [
      { name: "Campaign T-Shirt", description: "High-quality cotton t-shirt with the Code Victorian logo.", price: 25, category: "Apparel", inStock: true, published: true },
      { name: "Enamel Pin Badge", description: "Gold-plated enamel pin featuring the CV emblem.", price: 8, category: "Accessories", inStock: true, published: true },
      { name: "Heritage Flag", description: "Premium quality 90\u00d7150cm flag.", price: 35, category: "Accessories", inStock: true, published: true },
      { name: "Campaign Cap", description: "Embroidered baseball cap in navy with gold CV logo.", price: 20, category: "Apparel", inStock: true, published: true },
      { name: "Ceramic Mug", description: "Sturdy ceramic mug with full-colour design. 330ml.", price: 12, category: "Accessories", inStock: true, published: true },
      { name: "Canvas Tote Bag", description: "Durable canvas tote with campaign slogan.", price: 15, category: "Accessories", inStock: true, published: true },
    ]

    for (const p of products) {
      await db.product.create({ data: p })
    }

    // Seed sample data
    const signatures = [
      { firstName: "Hans", lastName: "M\u00fcller", email: "hans@example.com", country: "Germany" },
      { firstName: "Marie", lastName: "Dupont", email: "marie@example.com", country: "France" },
      { firstName: "Pieter", lastName: "de Vries", email: "pieter@example.com", country: "Netherlands" },
      { firstName: "Sofia", lastName: "Andersson", email: "sofia@example.com", country: "Sweden" },
      { firstName: "Luca", lastName: "Rossi", email: "luca@example.com", country: "Italy" },
    ]

    for (const s of signatures) {
      await db.petitionSignature.create({ data: s })
    }

    const donations = [
      { amount: 135, email: "hans@example.com", name: "Hans M\u00fcller", frequency: "once" },
      { amount: 65, email: "marie@example.com", name: "Marie Dupont", frequency: "monthly" },
      { amount: 265, email: "pieter@example.com", name: "Pieter de Vries", frequency: "once" },
      { amount: 600, email: "sofia@example.com", name: "Sofia Andersson", frequency: "once" },
      { amount: 135, email: "luca@example.com", name: "Luca Rossi", frequency: "monthly" },
    ]

    for (const d of donations) {
      await db.donation.create({ data: d })
    }

    return NextResponse.json({
      message: "Database seeded successfully!",
      seeded: true,
      admin: { email: "admin@codevictorian.com", password: "admin123" },
      data: {
        articles: articles.length,
        events: events.length,
        products: products.length,
        signatures: signatures.length,
        donations: donations.length,
      },
    })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
