// Sanity client config + helpers used by every Sanity-backed page.
//
// Reading is anonymous via the published dataset (no token needed for
// the public API). Writes happen only through the embedded Studio at
// /studio, which authenticates against sanity.io directly.

import { createClient, type SanityClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

export const SANITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ""
export const SANITY_DATASET =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production"
export const SANITY_API_VERSION =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-12-01"

export const isSanityConfigured = SANITY_PROJECT_ID.length > 0

export const sanityClient: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: SANITY_API_VERSION,
      useCdn: process.env.NODE_ENV === "production",
      perspective: "published",
    })
  : null

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null

export function urlFor(source: SanityImageSource | undefined | null): string | null {
  if (!builder || !source) return null
  try {
    return builder.image(source).auto("format").fit("max").url()
  } catch {
    return null
  }
}

/** Safe fetch wrapper. If Sanity isn't configured or the query fails,
 *  returns null instead of throwing — callers fall back to local copy. */
export async function safeQuery<T>(
  query: string,
  params: Record<string, unknown> = {},
  tags: string[] = [],
): Promise<T | null> {
  if (!sanityClient) return null
  try {
    return await sanityClient.fetch<T>(query, params, {
      next: { revalidate: 60, tags },
    })
  } catch (err) {
    console.error("[sanity] query failed", err)
    return null
  }
}
