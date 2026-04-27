import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News",
  description:
    "The latest news and updates from the Code Victorian campaign — policy developments, events, press coverage, and grassroots progress across Europe.",
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
