import { defineField, defineType } from "sanity"

export const petitionPage = defineType({
  name: "petitionPage",
  title: "Petition page",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({
      name: "heroHeadline",
      title: "Hero headline",
      type: "string",
      description: "Use {italic} to wrap the gold italic word, e.g. 'Defend Europe\\'s {italic}Future{/italic}'.",
    }),
    defineField({ name: "heroLede", title: "Hero lede", type: "text", rows: 4 }),
    defineField({
      name: "demands",
      title: "Demands",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "roman", type: "string", title: "Roman numeral" },
            { name: "title", type: "string" },
            { name: "body", type: "text", rows: 3 },
          ],
        },
      ],
      validation: (rule) => rule.min(1).max(7),
    }),
    defineField({
      name: "preamble",
      title: "Preamble (the quote above the demands)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "closing",
      title: "Closing line under the demands",
      type: "text",
      rows: 2,
    }),
  ],
  preview: { prepare: () => ({ title: "Petition page" }) },
})
