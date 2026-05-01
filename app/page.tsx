import HomeClient from "./HomeClient"
import { getHomePage } from "@/lib/cms"

export default async function HomePage() {
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
