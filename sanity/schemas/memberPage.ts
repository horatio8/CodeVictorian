import { defineField, defineType } from "sanity"

export const memberPage = defineType({
  name: "memberPage",
  title: "Member (Europe First) page",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string" }),
    defineField({ name: "heroItalicWord", title: "Italic gold word", type: "string" }),
    defineField({ name: "heroLede", title: "Hero lede", type: "text", rows: 4 }),
    defineField({
      name: "principles",
      title: "Principles",
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
    defineField({
      name: "expectations",
      title: "What's expected of a member (bullets)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "notExpected",
      title: "What's NOT expected (paragraph)",
      type: "text",
      rows: 4,
    }),
  ],
  preview: { prepare: () => ({ title: "Member page" }) },
})
