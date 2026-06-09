// Stub CMS layer.
//
// Public pages call `await getHomePage()` etc. and use the result via
// `cms?.field ?? "fallback"`, so a null return is harmless and the
// hard-coded fallback copy renders. This file exists only to preserve
// that import surface — there's no backing store. Reintroduce real
// fetching here if/when a CMS gets added back.

const nullPage = <T>(): Promise<T | null> => Promise.resolve(null)

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
export const getSiteSettings = () => nullPage<SiteSettings>()

export type HomePage = {
  heroEyebrow?: string
  heroHeadlineLines?: Array<{ text?: string; italic?: boolean }>
  heroLede?: string
}
export const getHomePage = () => nullPage<HomePage>()

export type PetitionPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroLede?: string
  demands?: Array<{ roman?: string; title?: string; body?: string }>
  preamble?: string
  closing?: string
}
export const getPetitionPage = () => nullPage<PetitionPage>()

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
export const getIssuesPage = () => nullPage<IssuesPage>()

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
export const getAboutPage = () => nullPage<AboutPage>()

export type DonatePage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  transparencyPromise?: string[]
  stripeProductDescription?: string
}
export const getDonatePage = () => nullPage<DonatePage>()

export type MemberPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  principles?: Array<{ roman?: string; title?: string; desc?: string }>
  expectations?: string[]
  notExpected?: string
}
export const getMemberPage = () => nullPage<MemberPage>()

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
    ctaHref?: string
  }>
}
export const getJoinPage = () => nullPage<JoinPage>()

export type VolunteerPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  roles?: Array<{ roman?: string; title?: string; desc?: string; commitment?: string }>
}
export const getVolunteerPage = () => nullPage<VolunteerPage>()

export type ContactPage = {
  heroEyebrow?: string
  heroHeadline?: string
  heroItalicWord?: string
  heroLede?: string
  contacts?: Array<{ icon?: string; label?: string; value?: string }>
  subjectOptions?: string[]
  quickLinks?: Array<{ label?: string; href?: string }>
}
export const getContactPage = () => nullPage<ContactPage>()

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
export const getPrivacyPage = () => nullPage<PrivacyPage>()
