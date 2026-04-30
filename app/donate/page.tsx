import DonateClient from "./DonateClient"
import { getDonatePage } from "@/lib/cms"

export default async function DonatePage() {
  const cms = await getDonatePage()
  return (
    <DonateClient
      cms={{
        heroEyebrow: cms?.heroEyebrow,
        heroHeadline: cms?.heroHeadline,
        heroItalicWord: cms?.heroItalicWord,
        heroLede: cms?.heroLede,
        transparencyPromise: cms?.transparencyPromise,
      }}
    />
  )
}
