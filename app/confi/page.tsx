import type { Metadata } from "next"
import HomeClient from "../HomeClient"
import { getHomePage } from "@/lib/cms"

// The original homepage, kept reachable at /confi while "/" shows the
// "New homepage coming soon" placeholder. Not indexed by search engines.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function ConfiPage() {
  const cms = await getHomePage()
  return (
    <HomeClient
      cms={{
        heroEyebrow: cms?.heroEyebrow,
        heroHeadlineLines: cms?.heroHeadlineLines,
        heroLede: cms?.heroLede,
      }}
    />
  )
}
