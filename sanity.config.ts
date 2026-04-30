import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./sanity/schemas"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ""
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-12-01"

// Pin singletons in the Studio's left rail — there's only ever one of
// each, so no "create another" should appear.
const SINGLETON_TYPES = new Set([
  "siteSettings",
  "homePage",
  "petitionPage",
  "issuesPage",
  "aboutPage",
  "donatePage",
  "memberPage",
  "joinPage",
  "volunteerPage",
  "contactPage",
  "privacyPage",
])

export default defineConfig({
  name: "default",
  title: "Code Victorian — CMS",
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    // Hide singletons from the global "Create new" menu.
    templates: (templates) =>
      templates.filter((t) => !SINGLETON_TYPES.has(t.schemaType)),
  },
  document: {
    // Hide "Duplicate" / "Delete" actions on singletons.
    actions: (input, { schemaType }) => {
      if (SINGLETON_TYPES.has(schemaType)) {
        return input.filter(
          ({ action }) => action && !["duplicate", "delete"].includes(action),
        )
      }
      return input
    },
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.document().schemaType("siteSettings").documentId("siteSettings"),
              ),
            S.divider(),
            ...[
              ["homePage", "Home page"],
              ["petitionPage", "Petition page"],
              ["issuesPage", "Issues page"],
              ["aboutPage", "About page"],
              ["donatePage", "Donate page"],
              ["memberPage", "Member (Europe First)"],
              ["joinPage", "Membership tiers"],
              ["volunteerPage", "Volunteer"],
              ["contactPage", "Contact"],
              ["privacyPage", "Privacy"],
            ].map(([type, title]) =>
              S.listItem()
                .title(title)
                .id(type)
                .child(S.document().schemaType(type).documentId(type)),
            ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
