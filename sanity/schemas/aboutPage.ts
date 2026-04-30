import { defineField, defineType } from "sanity"

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string" }),
    defineField({ name: "heroItalicWord", title: "Italic gold word", type: "string" }),
    defineField({ name: "heroLede", title: "Hero lede", type: "text", rows: 4 }),
    defineField({
      name: "mission",
      title: "Mission section",
      type: "object",
      fields: [
        { name: "headline", type: "string" },
        { name: "italicWord", type: "string", title: "Italic gold word" },
        { name: "quote", type: "text", rows: 3, title: "Pull quote (in italic serif)" },
        { name: "paragraphs", type: "array", of: [{ type: "text", rows: 4 }] },
      ],
    }),
    defineField({
      name: "values",
      title: "Values (4 recommended)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "roman", type: "string", title: "Roman numeral" },
            { name: "title", type: "string" },
            { name: "text", type: "text", rows: 3 },
          ],
        },
      ],
    }),
    defineField({
      name: "timeline",
      title: "Timeline milestones",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "date", type: "string", title: "Long date label (e.g. 'February MMXXV')" },
            { name: "short", type: "string", title: "Short label for the chip (e.g. 'II · XXV')" },
            { name: "title", type: "string" },
            { name: "desc", type: "text", rows: 3 },
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "About page" }) },
})
