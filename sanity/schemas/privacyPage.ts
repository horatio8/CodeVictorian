import { defineField, defineType } from "sanity"

export const privacyPage = defineType({
  name: "privacyPage",
  title: "Privacy page",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string" }),
    defineField({ name: "heroItalicWord", title: "Italic gold word", type: "string" }),
    defineField({ name: "lastRevised", title: "Last revised label", type: "string" }),
    defineField({ name: "intro", title: "Introductory paragraph", type: "text", rows: 4 }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "roman", type: "string", title: "Roman numeral (e.g. 'I.')" },
            { name: "title", type: "string" },
            {
              name: "body",
              title: "Body (markdown — supports **bold** + [links](https://…))",
              type: "text",
              rows: 6,
            },
            {
              name: "bullets",
              title: "Bullet list (optional)",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "calloutHeadline",
      title: "Bottom callout — headline",
      type: "string",
    }),
    defineField({
      name: "calloutBody",
      title: "Bottom callout — body",
      type: "text",
      rows: 3,
    }),
  ],
  preview: { prepare: () => ({ title: "Privacy page" }) },
})
