import { defineField, defineType } from "sanity"

export const issuesPage = defineType({
  name: "issuesPage",
  title: "Issues page",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string" }),
    defineField({ name: "heroItalicWord", title: "Italic gold word", type: "string" }),
    defineField({ name: "heroLede", title: "Hero lede", type: "text", rows: 4 }),
    defineField({
      name: "mainIssues",
      title: "Main issues (3)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", type: "string", title: "Anchor id (e.g. 'remigration')" },
            { name: "title", type: "string" },
            { name: "subtitle", type: "string" },
            {
              name: "paragraphs",
              title: "Body paragraphs",
              type: "array",
              of: [{ type: "text", rows: 4 }],
            },
            {
              name: "stats",
              title: "Stat cards",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "value", type: "string" },
                    { name: "label", type: "string" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "additionalPriorities",
      title: "Additional priorities (smaller tiles)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "roman", type: "string", title: "Roman numeral" },
            { name: "title", type: "string" },
            { name: "desc", type: "text", rows: 3 },
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Issues page" }) },
})
