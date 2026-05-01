// Server-side helpers that fetch each CMS singleton from Supabase.
// Every helper falls back to `null` when Supabase isn't configured or
// returns nothing, so pages can use `cms ?? FALLBACK` and never throw.

import { unstable_cache, revalidateTag } from "next/cache"
import { publicClient } from "./supabase"

async function fetchDocument<T>(slug: string): Promise<T | null> {
  const supa = publicClient()
  if (!supa) return null
  const { data, error } = await supa
    .from("cms_documents")
    .select("content")
    .eq("slug", slug)
    .maybeSingle()
  if (error || !data) return null
  return (data.content ?? null) as T | null
}

// Cache each document for 60 seconds, tagged so server actions can punch
// the cache the moment an editor publishes a change.
function cachedDocument<T>(slug: string) {
  return unstable_cache(
    async () => fetchDocument<T>(slug),
    [`cms:${slug}`],
    { tags: [`cms:${slug}`], revalidate: 60 },
  )
}

// Helper used by the admin save action.
export function invalidateDocument(slug: string) {
  revalidateTag(`cms:${slug}`)
}

export type SiteSettings = {
  brandName?: string
  tagline?: string
  headquarters?: string
  navigation?: Array<{
    label?: string
    href?: string
    children?: Array<{ label?: string; href?: string }>
  }>
  footerCopyright?: string
  footerDisclaimer?: string
}

export const getSiteSettings = cachedDocument<SiteSettings>("siteSettings")

export type HomePage = {
  heroEyebrow?: string
  heroHeadlineLines?: Array<{ text?: string; italic?: boolean }>
  heroLede?: string
}

export const getHomePage = cachedDocument<HomePage>("homePage")

export type PetitionPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroLede?: string
  demands?: Array<{ roman?: string; title?: string; body?: string }>
  preamble?: string
  closing?: string
}

export const getPetitionPage = cachedDocument<PetitionPage>("petitionPage")

export type IssuesPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  mainIssues?: Array<{
    id?: string
    title?: string
    subtitle?: string
    paragraphs?: string[]
    stats?: Array<{ value?: string; label?: string }>
  }>
  additionalPriorities?: Array<{ roman?: string; title?: string; desc?: string }>
}

export const getIssuesPage = cachedDocument<IssuesPage>("issuesPage")

export type AboutPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  mission?: {
    headline?: string
    italicWord?: string
    quote?: string
    paragraphs?: string[]
  }
  values?: Array<{ roman?: string; title?: string; text?: string }>
  timeline?: Array<{ date?: string; short?: string; title?: string; desc?: string }>
}

export const getAboutPage = cachedDocument<AboutPage>("aboutPage")

export type DonatePage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  transparencyPromise?: string[]
  stripeProductDescription?: string
}

export const getDonatePage = cachedDocument<DonatePage>("donatePage")

export type MemberPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  principles?: Array<{ roman?: string; title?: string; desc?: string }>
  expectations?: string[]
  notExpected?: string
}

export const getMemberPage = cachedDocument<MemberPage>("memberPage")

export type JoinPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  tiers?: Array<{
    roman?: string
    name?: string
    price?: string
    priceWas?: string
    period?: string
    popular?: boolean
    features?: string[]
    subsectionTitle?: string
    subsectionItems?: string[]
    ctaLabel?: string
  }>
}

export const getJoinPage = cachedDocument<JoinPage>("joinPage")

export type VolunteerPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  roles?: Array<{ roman?: string; title?: string; desc?: string; commitment?: string }>
}

export const getVolunteerPage = cachedDocument<VolunteerPage>("volunteerPage")

export type ContactPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  contacts?: Array<{ icon?: string; label?: string; value?: string }>
  subjectOptions?: string[]
  quickLinks?: Array<{ label?: string; href?: string }>
}

export const getContactPage = cachedDocument<ContactPage>("contactPage")

export type PrivacyPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  lastRevised?: string
  intro?: string
  sections?: Array<{
    roman?: string
    title?: string
    body?: string
    bullets?: string[]
  }>
  calloutHeadline?: string
  calloutBody?: string
}

export const getPrivacyPage = cachedDocument<PrivacyPage>("privacyPage")
