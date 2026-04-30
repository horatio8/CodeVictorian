import { defineField, defineType } from "sanity"

export const joinPage = defineType({
  name: "joinPage",
  title: "Membership tiers (/join)",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string" }),
    defineField({ name: "heroItalicWord", title: "Italic gold word", type: "string" }),
    defineField({ name: "heroLede", title: "Hero lede", type: "text", rows: 4 }),
    defineField({
      name: "tiers",
      title: "Membership tiers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "roman", type: "string", title: "Roman numeral" },
            { name: "name", type: "string", title: "Tier name" },
            { name: "price", type: "string", title: "Price (e.g. '€15')" },
            { name: "period", type: "string", title: "Period (e.g. '/month')" },
            {
              name: "popular",
              type: "boolean",
              title: "Highlighted as 'Most Popular'?",
            },
            {
              name: "features",
              type: "array",
              title: "Feature bullets",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "benefits",
      title: "Why join — benefit tiles",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "roman", type: "string" },
            { name: "title", type: "string" },
            { name: "desc", type: "text", rows: 3 },
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Membership tiers" }) },
})
