import { defineField, defineType } from "sanity"

export const volunteerPage = defineType({
  name: "volunteerPage",
  title: "Volunteer page",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string" }),
    defineField({ name: "heroItalicWord", title: "Italic gold word", type: "string" }),
    defineField({ name: "heroLede", title: "Hero lede", type: "text", rows: 4 }),
    defineField({
      name: "roles",
      title: "Volunteer roles",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "roman", type: "string" },
            { name: "title", type: "string" },
            { name: "desc", type: "text", rows: 3 },
            { name: "commitment", type: "string", title: "Time commitment label" },
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Volunteer page" }) },
})
