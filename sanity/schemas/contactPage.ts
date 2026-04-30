import { defineField, defineType } from "sanity"

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string" }),
    defineField({ name: "heroItalicWord", title: "Italic gold word", type: "string" }),
    defineField({ name: "heroLede", title: "Hero lede", type: "text", rows: 4 }),
    defineField({
      name: "contacts",
      title: "Contact info rows (sidebar)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              type: "string",
              title: "Icon (lucide name)",
              options: {
                list: ["MapPin", "Mail", "Clock", "MessageSquare", "Phone"],
              },
            },
            { name: "label", type: "string" },
            { name: "value", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "subjectOptions",
      title: "Subject dropdown options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "quickLinks",
      title: "Quick links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "href", type: "string" },
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Contact page" }) },
})
