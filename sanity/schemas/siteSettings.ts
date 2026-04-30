import { defineField, defineType } from "sanity"

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      title: "Brand name",
      type: "string",
      description: "Shown in the header / footer / page titles. e.g. 'Code Victorian'.",
    }),
    defineField({
      name: "tagline",
      title: "Tagline (under the wordmark)",
      type: "string",
      description: "e.g. 'Est. MMXXVI'.",
    }),
    defineField({
      name: "headquarters",
      title: "Headquarters location",
      type: "string",
      description: "Shown in the footer. e.g. 'Budapest · Hungary'.",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Replaces /logo.png in the header and About page.",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroVideo",
      title: "Home hero background video",
      description:
        "MP4 file. Shown muted/looped behind the home hero. Falls back to /hero-video.mp4 if not set.",
      type: "file",
      options: { accept: "video/mp4" },
    }),
    defineField({
      name: "missionVideo",
      title: "About-page mission video",
      description:
        "Played on the About page beneath the mission statement. Falls back to /mission.mp4.",
      type: "file",
      options: { accept: "video/mp4" },
    }),
    defineField({
      name: "navigation",
      title: "Header navigation",
      type: "array",
      of: [
        {
          type: "object",
          name: "navItem",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "href", type: "string", title: "Path (/about, /donate, …)" },
            {
              name: "children",
              type: "array",
              title: "Dropdown items (optional)",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", type: "string", title: "Label" },
                    { name: "href", type: "string", title: "Path" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "footerCopyright",
      title: "Footer copyright line",
      type: "string",
      description: "e.g. '© MMXXVI Code Victorian · All Rights Reserved'.",
    }),
    defineField({
      name: "footerDisclaimer",
      title: "Footer disclaimer",
      type: "text",
      rows: 3,
    }),
  ],
  preview: { select: { title: "brandName", subtitle: "tagline" } },
})
