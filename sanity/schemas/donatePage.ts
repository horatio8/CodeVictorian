import { defineField, defineType } from "sanity"

export const donatePage = defineType({
  name: "donatePage",
  title: "Donate page",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string" }),
    defineField({ name: "heroItalicWord", title: "Italic gold word", type: "string" }),
    defineField({ name: "heroLede", title: "Hero lede", type: "text", rows: 4 }),
    defineField({
      name: "presetsEUR",
      title: "EUR preset amounts (whole numbers)",
      type: "array",
      of: [{ type: "number" }],
      validation: (rule) => rule.max(8),
    }),
    defineField({
      name: "presetsUSD",
      title: "USD preset amounts (whole numbers)",
      type: "array",
      of: [{ type: "number" }],
      validation: (rule) => rule.max(8),
    }),
    defineField({
      name: "impactEUR",
      title: "Impact rows (EUR)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "amount", type: "string", title: "Amount label (e.g. '€65')" },
            { name: "desc", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "impactUSD",
      title: "Impact rows (USD)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "amount", type: "string", title: "Amount label (e.g. '$70')" },
            { name: "desc", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "transparencyPromise",
      title: "Transparency promise bullets",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "stripeProductDescription",
      title: "Stripe Checkout product description",
      type: "string",
      description:
        "Shown on the Stripe-hosted Checkout page under the amount. Shipping default if blank: 'Supports the fight to keep Europe for native Europeans.'",
    }),
  ],
  preview: { prepare: () => ({ title: "Donate page" }) },
})
