import { defineField, defineType } from "sanity"

export const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "issues", title: "Issues teaser" },
    { name: "petitionCta", title: "Petition CTA" },
    { name: "news", title: "News teaser" },
    { name: "donateCta", title: "Donate teaser" },
    { name: "finalCta", title: "Final CTA" },
  ],
  fields: [
    // ---- Hero ----
    defineField({
      name: "heroEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "hero",
      description: "Small caps text above the headline. e.g. 'A Cultural Society · Since MMXXVI'.",
    }),
    defineField({
      name: "heroHeadlineLines",
      title: "Headline (one per line)",
      type: "array",
      group: "hero",
      of: [
        {
          type: "object",
          fields: [
            { name: "text", type: "string", title: "Text" },
            {
              name: "italic",
              type: "boolean",
              title: "Italic gold accent?",
              description: "Tick to render this line in italic gold (the design's signature emphasis).",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "heroLede",
      title: "Lede paragraph",
      type: "text",
      rows: 4,
      group: "hero",
    }),
    defineField({
      name: "heroPrimaryCta",
      title: "Primary CTA",
      type: "object",
      group: "hero",
      fields: [
        { name: "label", type: "string" },
        { name: "href", type: "string" },
      ],
    }),
    defineField({
      name: "heroSecondaryCta",
      title: "Secondary CTA",
      type: "object",
      group: "hero",
      fields: [
        { name: "label", type: "string" },
        { name: "href", type: "string" },
      ],
    }),

    // ---- Issues ----
    defineField({
      name: "issuesEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "issues",
    }),
    defineField({
      name: "issuesHeadline",
      title: "Headline",
      type: "string",
      group: "issues",
    }),
    defineField({
      name: "issuesItalicWord",
      title: "Italic gold word in headline",
      type: "string",
      group: "issues",
      description: "The single word inside the headline that gets the italic gold treatment.",
    }),
    defineField({
      name: "issuesLede",
      title: "Lede",
      type: "text",
      rows: 3,
      group: "issues",
    }),
    defineField({
      name: "issuesItems",
      title: "Issue tiles (3)",
      type: "array",
      group: "issues",
      of: [
        {
          type: "object",
          fields: [
            { name: "roman", type: "string", title: "Roman numeral (e.g. 'I.')" },
            { name: "title", type: "string" },
            { name: "desc", type: "text", rows: 3 },
            { name: "href", type: "string" },
          ],
        },
      ],
      validation: (rule) => rule.max(4),
    }),

    // ---- Petition CTA ----
    defineField({
      name: "petitionEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "petitionCta",
    }),
    defineField({
      name: "petitionHeadline",
      title: "Headline",
      type: "string",
      group: "petitionCta",
    }),
    defineField({
      name: "petitionItalicWord",
      title: "Italic gold word in headline",
      type: "string",
      group: "petitionCta",
    }),
    defineField({
      name: "petitionLede",
      title: "Lede",
      type: "text",
      rows: 3,
      group: "petitionCta",
    }),

    // ---- News ----
    defineField({
      name: "newsEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "news",
    }),
    defineField({
      name: "newsHeadline",
      title: "Headline",
      type: "string",
      group: "news",
    }),
    defineField({
      name: "newsItalicWord",
      title: "Italic gold word in headline",
      type: "string",
      group: "news",
    }),
    defineField({
      name: "newsItems",
      title: "News cards",
      type: "array",
      group: "news",
      of: [
        {
          type: "object",
          fields: [
            { name: "date", type: "string", title: "Date label (e.g. '12 April MMXXVI')" },
            { name: "category", type: "string" },
            { name: "label", type: "string", title: "Plate label (small caption)" },
            { name: "title", type: "string" },
            { name: "excerpt", type: "text", rows: 3 },
          ],
        },
      ],
    }),

    // ---- Donate teaser ----
    defineField({
      name: "donateEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "donateCta",
    }),
    defineField({
      name: "donateHeadline",
      title: "Headline",
      type: "string",
      group: "donateCta",
    }),
    defineField({
      name: "donateItalicWord",
      title: "Italic gold word in headline",
      type: "string",
      group: "donateCta",
    }),
    defineField({
      name: "donateLede",
      title: "Lede",
      type: "text",
      rows: 3,
      group: "donateCta",
    }),
    defineField({
      name: "donateBullets",
      title: "Donation impact bullets",
      type: "array",
      group: "donateCta",
      of: [{ type: "string" }],
    }),

    // ---- Final CTA ----
    defineField({
      name: "finalCtaHeadline",
      title: "Final CTA headline",
      type: "string",
      group: "finalCta",
    }),
    defineField({
      name: "finalCtaItalicLine",
      title: "Italic gold line under headline",
      type: "string",
      group: "finalCta",
    }),
    defineField({
      name: "finalCtaLede",
      title: "Lede",
      type: "text",
      rows: 3,
      group: "finalCta",
    }),
  ],
  preview: { prepare: () => ({ title: "Home page" }) },
})
