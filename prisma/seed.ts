import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const db = new PrismaClient()

async function main() {
  console.log("Seeding database...")

  // Admin account
  const passwordHash = bcrypt.hashSync("admin123", 10)
  await db.admin.upsert({
    where: { email: "admin@codevictorian.com" },
    update: {},
    create: {
      email: "admin@codevictorian.com",
      name: "Admin",
      password: passwordHash,
    },
  })
  console.log("Admin account created: admin@codevictorian.com / admin123")

  // News articles
  const articles = [
    {
      title: "Record Petition Numbers: 45,000 and Growing",
      slug: "record-petition-numbers-45000-and-growing",
      excerpt: "Our petition has reached a major milestone as support surges across the continent.",
      content: "We are thrilled to announce that our petition has surpassed 45,000 signatures, a testament to the growing concern among Europeans about the direction of our continent.\n\nThis remarkable achievement comes just months after we launched the campaign, and the momentum shows no signs of slowing. Every day, hundreds of new supporters are adding their names.\n\nWe extend our heartfelt thanks to every signatory. Your voice matters, and together we will be heard.",
      category: "Campaign",
      published: true,
      publishedAt: new Date("2026-04-10"),
    },
    {
      title: "Code Victorian Rally Draws Thousands in Vienna",
      slug: "code-victorian-rally-draws-thousands-in-vienna",
      excerpt: "Supporters from across Europe gathered for our largest event yet.",
      content: "Last Saturday, the streets of Vienna were filled with thousands of Code Victorian supporters who gathered for our largest rally to date.\n\nSpeakers from across Europe addressed the crowd, calling for decisive action on immigration, cultural preservation, and the protection of European identity.\n\nThe event was peaceful, well-organised, and a powerful demonstration of the breadth and depth of support for our movement.",
      category: "Events",
      published: true,
      publishedAt: new Date("2026-04-05"),
    },
    {
      title: "New Policy Paper: A Blueprint for Cultural Preservation",
      slug: "new-policy-paper-blueprint-for-cultural-preservation",
      excerpt: "Our research team outlines actionable strategies for protecting European heritage.",
      content: "Today we publish our latest policy paper, \"A Blueprint for Cultural Preservation\", which outlines a comprehensive strategy for safeguarding Europe's cultural heritage.\n\nThe paper addresses education reform, heritage site protection, arts funding, and the role of national institutions in maintaining cultural continuity.\n\nThis is a serious, evidence-based document that we encourage policymakers across Europe to read and consider.",
      category: "Policy",
      published: true,
      publishedAt: new Date("2026-03-28"),
    },
    {
      title: "Interview: Why Remigration Is a Democratic Necessity",
      slug: "interview-why-remigration-is-a-democratic-necessity",
      excerpt: "Our policy director explains the legal and ethical framework behind structured remigration.",
      content: "In an exclusive interview, Dr. Chiara Fontana, our Policy Director, explains the legal and ethical framework behind structured remigration programmes.\n\n\"Remigration is not about ethnicity,\" she says. \"It is about ensuring that those who come to Europe respect its laws, values, and institutions. Where integration has failed, a structured, humane return process is both lawful and necessary.\"",
      category: "Policy",
      published: true,
      publishedAt: new Date("2026-03-15"),
    },
    {
      title: "Spring Campaign Merchandise Now Available",
      slug: "spring-campaign-merchandise-now-available",
      excerpt: "Show your support with our new range of campaign merchandise.",
      content: "Our spring collection of campaign merchandise is now available in the store. From t-shirts to pins, every purchase supports our work across Europe.",
      category: "Campaign",
      published: true,
      publishedAt: new Date("2026-03-01"),
    },
  ]

  for (const article of articles) {
    await db.newsArticle.upsert({
      where: { slug: article.slug },
      update: {},
      create: article,
    })
  }
  console.log(`${articles.length} news articles created`)

  // Events
  const events = [
    {
      title: "European Heritage March \u2014 Brussels",
      description: "A peaceful march through the heart of the EU capital, calling for the protection of European culture and identity. All supporters welcome.",
      location: "Brussels, Belgium",
      date: new Date("2026-04-28T10:00:00"),
      featured: true,
      published: true,
      attendees: 2500,
    },
    {
      title: "Cultural Preservation Conference \u2014 Vienna",
      description: "A full-day conference with speakers and workshops on safeguarding European traditions, heritage sites, and classical education.",
      location: "Vienna, Austria",
      date: new Date("2026-05-15T09:00:00"),
      featured: false,
      published: true,
      attendees: 800,
    },
    {
      title: "Community Meet-up \u2014 Amsterdam",
      description: "An informal gathering for Code Victorian supporters in the Netherlands. Meet fellow members and discuss local campaign activities.",
      location: "Amsterdam, Netherlands",
      date: new Date("2026-05-22T18:00:00"),
      featured: false,
      published: true,
      attendees: 150,
    },
    {
      title: "Policy Forum \u2014 Berlin",
      description: "Join our policy team for an open forum on immigration reform and border security in the EU context.",
      location: "Berlin, Germany",
      date: new Date("2026-06-10T14:00:00"),
      featured: false,
      published: true,
      attendees: 400,
    },
  ]

  for (const event of events) {
    await db.event.create({ data: event })
  }
  console.log(`${events.length} events created`)

  // Products
  const products = [
    { name: "Campaign T-Shirt", description: "High-quality cotton t-shirt with the Code Victorian logo. Available in navy blue.", price: 25, category: "Apparel", inStock: true, published: true },
    { name: "Enamel Pin Badge", description: "Gold-plated enamel pin featuring the CV emblem. A subtle way to show your support.", price: 8, category: "Accessories", inStock: true, published: true },
    { name: "Heritage Flag", description: "Premium quality 90\u00d7150cm flag. Perfect for events and rallies.", price: 35, category: "Accessories", inStock: true, published: true },
    { name: "Campaign Cap", description: "Embroidered baseball cap in navy with gold CV logo.", price: 20, category: "Apparel", inStock: true, published: true },
    { name: "Ceramic Mug", description: "Sturdy ceramic mug with full-colour Code Victorian design. 330ml.", price: 12, category: "Accessories", inStock: true, published: true },
    { name: "Canvas Tote Bag", description: "Durable canvas tote with campaign slogan. Great for everyday use.", price: 15, category: "Accessories", inStock: true, published: true },
  ]

  for (const product of products) {
    await db.product.create({ data: product })
  }
  console.log(`${products.length} products created`)

  // Sample petition signatures
  const signatures = [
    { firstName: "Hans", lastName: "M\u00fcller", email: "hans@example.com", country: "Germany", postcode: "10115" },
    { firstName: "Marie", lastName: "Dupont", email: "marie@example.com", country: "France", postcode: "75001" },
    { firstName: "Pieter", lastName: "de Vries", email: "pieter@example.com", country: "Netherlands", postcode: "1012" },
    { firstName: "Sofia", lastName: "Andersson", email: "sofia@example.com", country: "Sweden" },
    { firstName: "Luca", lastName: "Rossi", email: "luca@example.com", country: "Italy", postcode: "00100" },
  ]

  for (const sig of signatures) {
    await db.petitionSignature.create({ data: sig })
  }
  console.log(`${signatures.length} petition signatures created`)

  // Sample donations
  const donations = [
    { amount: 135, email: "hans@example.com", name: "Hans M\u00fcller", frequency: "once" },
    { amount: 65, email: "marie@example.com", name: "Marie Dupont", frequency: "monthly" },
    { amount: 265, email: "pieter@example.com", name: "Pieter de Vries", frequency: "once" },
    { amount: 600, email: "sofia@example.com", name: "Sofia Andersson", frequency: "once" },
    { amount: 135, email: "luca@example.com", name: "Luca Rossi", frequency: "monthly" },
  ]

  for (const donation of donations) {
    await db.donation.create({ data: donation })
  }
  console.log(`${donations.length} donations created`)

  console.log("\nSeed complete!")
  console.log("Login at /admin/login with: admin@codevictorian.com / admin123")
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect())
