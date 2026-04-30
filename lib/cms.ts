// Server-side helpers that fetch each singleton document from Sanity.
// Every helper falls back to `null` when Sanity isn't configured or
// returns nothing, so pages can use `cms ?? FALLBACK` and never throw.

import { safeQuery } from "./sanity"

export type CmsBlock = unknown

export type SiteSettings = {
  brandName?: string
  tagline?: string
  headquarters?: string
  logo?: { asset?: { url?: string } } | null
  navigation?: Array<{
    label?: string
    href?: string
    children?: Array<{ label?: string; href?: string }>
  }>
  footerCopyright?: string
  footerDisclaimer?: string
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return safeQuery<SiteSettings>(
    `*[_type == "siteSettings"][0]{
      brandName, tagline, headquarters,
      logo{ asset->{ url } },
      navigation,
      footerCopyright, footerDisclaimer
    }`,
    {},
    ["siteSettings"],
  )
}

export type HomePage = {
  heroEyebrow?: string
  heroHeadlineLines?: Array<{ text?: string; italic?: boolean }>
  heroLede?: string
  heroPrimaryCta?: { label?: string; href?: string }
  heroSecondaryCta?: { label?: string; href?: string }
  issuesEyebrow?: string
  issuesHeadline?: string
  issuesItalicWord?: string
  issuesLede?: string
  issuesItems?: Array<{ roman?: string; title?: string; desc?: string; href?: string }>
  petitionEyebrow?: string
  petitionHeadline?: string
  petitionItalicWord?: string
  petitionLede?: string
  newsEyebrow?: string
  newsHeadline?: string
  newsItalicWord?: string
  newsItems?: Array<{
    date?: string
    category?: string
    label?: string
    title?: string
    excerpt?: string
  }>
  donateEyebrow?: string
  donateHeadline?: string
  donateItalicWord?: string
  donateLede?: string
  donateBullets?: string[]
  finalCtaHeadline?: string
  finalCtaItalicLine?: string
  finalCtaLede?: string
}

export const getHomePage = () =>
  safeQuery<HomePage>(`*[_type == "homePage"][0]`, {}, ["homePage"])

export type PetitionPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroLede?: string
  demands?: Array<{ roman?: string; title?: string; body?: string }>
  preamble?: string
  closing?: string
}

export const getPetitionPage = () =>
  safeQuery<PetitionPage>(`*[_type == "petitionPage"][0]`, {}, ["petitionPage"])

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

export const getIssuesPage = () =>
  safeQuery<IssuesPage>(`*[_type == "issuesPage"][0]`, {}, ["issuesPage"])

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

export const getAboutPage = () =>
  safeQuery<AboutPage>(`*[_type == "aboutPage"][0]`, {}, ["aboutPage"])

export type DonatePage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  presetsEUR?: number[]
  presetsUSD?: number[]
  impactEUR?: Array<{ amount?: string; desc?: string }>
  impactUSD?: Array<{ amount?: string; desc?: string }>
  transparencyPromise?: string[]
  stripeProductDescription?: string
}

export const getDonatePage = () =>
  safeQuery<DonatePage>(`*[_type == "donatePage"][0]`, {}, ["donatePage"])

export type MemberPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  principles?: Array<{ roman?: string; title?: string; desc?: string }>
  expectations?: string[]
  notExpected?: string
}

export const getMemberPage = () =>
  safeQuery<MemberPage>(`*[_type == "memberPage"][0]`, {}, ["memberPage"])

export type JoinPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  tiers?: Array<{
    roman?: string
    name?: string
    price?: string
    period?: string
    popular?: boolean
    features?: string[]
  }>
  benefits?: Array<{ roman?: string; title?: string; desc?: string }>
}

export const getJoinPage = () =>
  safeQuery<JoinPage>(`*[_type == "joinPage"][0]`, {}, ["joinPage"])

export type VolunteerPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  roles?: Array<{ roman?: string; title?: string; desc?: string; commitment?: string }>
}

export const getVolunteerPage = () =>
  safeQuery<VolunteerPage>(`*[_type == "volunteerPage"][0]`, {}, ["volunteerPage"])

export type ContactPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  contacts?: Array<{ icon?: string; label?: string; value?: string }>
  subjectOptions?: string[]
  quickLinks?: Array<{ label?: string; href?: string }>
}

export const getContactPage = () =>
  safeQuery<ContactPage>(`*[_type == "contactPage"][0]`, {}, ["contactPage"])

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

export const getPrivacyPage = () =>
  safeQuery<PrivacyPage>(`*[_type == "privacyPage"][0]`, {}, ["privacyPage"])
