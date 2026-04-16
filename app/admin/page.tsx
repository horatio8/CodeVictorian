"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatEUR } from "@/lib/utils"
import {
  PenLine,
  Users,
  HandHeart,
  Heart,
  MessageSquare,
  Newspaper,
  Calendar,
  ShoppingBag,
  ArrowRight,
  AlertCircle,
} from "lucide-react"

interface Stats {
  counts: {
    petitions: number
    members: number
    volunteers: number
    donationTotal: number
    donationCount: number
    messages: number
    unreadMessages: number
    pendingVolunteers: number
    news: number
    events: number
    products: number
  }
  recentDonations: Array<{
    id: string
    amount: number
    name: string | null
    email: string | null
    createdAt: string
  }>
  recentPetitions: Array<{
    id: string
    firstName: string
    lastName: string
    country: string | null
    createdAt: string
  }>
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then(setStats)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-400">
        Loading dashboard\u2026
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="flex items-center justify-center h-64 text-red-500 gap-2">
        <AlertCircle className="h-5 w-5" />
        Failed to load stats
      </div>
    )
  }

  const statCards = [
    {
      label: "Petition Signatures",
      value: stats.counts.petitions.toLocaleString("en-GB"),
      icon: PenLine,
      href: "/admin/petitions",
      colour: "bg-blue-50 text-blue-600",
    },
    {
      label: "Members",
      value: stats.counts.members.toLocaleString("en-GB"),
      icon: Users,
      href: "/admin/members",
      colour: "bg-purple-50 text-purple-600",
    },
    {
      label: "Volunteers",
      value: stats.counts.volunteers.toLocaleString("en-GB"),
      icon: HandHeart,
      href: "/admin/volunteers",
      colour: "bg-green-50 text-green-600",
      badge: stats.counts.pendingVolunteers > 0
        ? `${stats.counts.pendingVolunteers} pending`
        : undefined,
    },
    {
      label: "Total Donations",
      value: formatEUR(stats.counts.donationTotal),
      icon: Heart,
      href: "/admin/donations",
      colour: "bg-amber-50 text-amber-600",
      sub: `${stats.counts.donationCount} donations`,
    },
    {
      label: "Messages",
      value: stats.counts.messages.toLocaleString("en-GB"),
      icon: MessageSquare,
      href: "/admin/messages",
      colour: "bg-pink-50 text-pink-600",
      badge: stats.counts.unreadMessages > 0
        ? `${stats.counts.unreadMessages} unread`
        : undefined,
    },
    {
      label: "News Articles",
      value: stats.counts.news.toLocaleString("en-GB"),
      icon: Newspaper,
      href: "/admin/news",
      colour: "bg-sky-50 text-sky-600",
    },
    {
      label: "Events",
      value: stats.counts.events.toLocaleString("en-GB"),
      icon: Calendar,
      href: "/admin/events",
      colour: "bg-indigo-50 text-indigo-600",
    },
    {
      label: "Products",
      value: stats.counts.products.toLocaleString("en-GB"),
      icon: ShoppingBag,
      href: "/admin/store",
      colour: "bg-orange-50 text-orange-600",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <Link key={card.label} href={card.href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${card.colour}`}
                  >
                    <card.icon className="h-5 w-5" />
                  </div>
                  {card.badge && (
                    <Badge variant="accent" className="text-[10px]">
                      {card.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-2xl font-serif font-bold text-primary">
                  {card.value}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{card.label}</p>
                {card.sub && (
                  <p className="text-[10px] text-gray-400 mt-0.5">{card.sub}</p>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Signatures */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif font-bold text-primary">
                Recent Signatures
              </h3>
              <Link
                href="/admin/petitions"
                className="text-xs text-accent hover:underline flex items-center gap-1"
              >
                View all <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            {stats.recentPetitions.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-8">
                No signatures yet
              </p>
            ) : (
              <div className="space-y-3">
                {stats.recentPetitions.map((sig) => (
                  <div
                    key={sig.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <div>
                      <span className="font-medium text-gray-700">
                        {sig.firstName} {sig.lastName}
                      </span>
                      {sig.country && (
                        <span className="text-gray-400 ml-2 text-xs">
                          {sig.country}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-400">
                      {new Date(sig.createdAt).toLocaleDateString("en-GB")}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Donations */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif font-bold text-primary">
                Recent Donations
              </h3>
              <Link
                href="/admin/donations"
                className="text-xs text-accent hover:underline flex items-center gap-1"
              >
                View all <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            {stats.recentDonations.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-8">
                No donations yet
              </p>
            ) : (
              <div className="space-y-3">
                {stats.recentDonations.map((don) => (
                  <div
                    key={don.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <div>
                      <span className="font-medium text-gray-700">
                        {don.name || don.email || "Anonymous"}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-accent">
                        {formatEUR(don.amount)}
                      </span>
                      <span className="text-xs text-gray-400 block">
                        {new Date(don.createdAt).toLocaleDateString("en-GB")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
