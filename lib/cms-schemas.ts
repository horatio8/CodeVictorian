// Field schemas for every CMS document. The admin editor renders forms
// directly from these definitions; the public-site fetchers in lib/cms.ts
// read the same documents and treat the JSONB blob as the typed shape.
//
// Keeping fields in plain TypeScript (rather than a third-party schema lib)
// means: zero extra dependencies, types are exactly what the page reads,
// and the editor UI knows what to render with no extra config.

export type FieldKind =
  | { type: "text"; label: string; placeholder?: string; help?: string }
  | { type: "textarea"; label: string; rows?: number; help?: string }
  | { type: "boolean"; label: string; help?: string }
  | { type: "stringList"; label: string; itemLabel?: string; help?: string }
  | {
      type: "objectList"
      label: string
      itemLabel?: string
      help?: string
      fields: Record<string, FieldKind>
    }
  | { type: "object"; label: string; fields: Record<string, FieldKind> }

export type DocumentSchema = {
  slug: string
  title: string
  description?: string
  fields: Record<string, FieldKind>
}

const ctaFields: Record<string, FieldKind> = {
  label: { type: "text", label: "Label" },
  href: { type: "text", label: "Link target" },
}

export const SCHEMAS: DocumentSchema[] = [
  {
    slug: "siteSettings",
    title: "Site Settings",
    description: "Brand mark, navigation, footer — used across every page.",
    fields: {
      brandName: { type: "text", label: "Brand name" },
      tagline: { type: "text", label: "Tagline" },
      headquarters: { type: "text", label: "Headquarters" },
      navigation: {
        type: "objectList",
        label: "Header navigation",
        itemLabel: "Link",
        fields: {
          label: { type: "text", label: "Label" },
          href: { type: "text", label: "Link target (leave blank for dropdown)" },
          children: {
            type: "objectList",
            label: "Sub-links (for dropdowns)",
            itemLabel: "Sub-link",
            fields: {
              label: { type: "text", label: "Label" },
              href: { type: "text", label: "Link target" },
            },
          },
        },
      },
      footerCopyright: { type: "text", label: "Footer copyright" },
      footerDisclaimer: { type: "textarea", label: "Footer disclaimer", rows: 3 },
    },
  },

  {
    slug: "homePage",
    title: "Home page",
    fields: {
      heroEyebrow: { type: "text", label: "Hero eyebrow" },
      heroHeadlineLines: {
        type: "objectList",
        label: "Hero headline lines",
        itemLabel: "Line",
        help: "Each line renders on its own row. Mark a line italic to apply the gold accent.",
        fields: {
          text: { type: "text", label: "Line text" },
          italic: { type: "boolean", label: "Render in italic gold" },
        },
      },
      heroLede: { type: "textarea", label: "Hero lede", rows: 3 },
    },
  },

  {
    slug: "petitionPage",
    title: "Petition page",
    fields: {
      heroEyebrow: { type: "text", label: "Hero eyebrow" },
      heroHeadline: {
        type: "text",
        label: "Hero headline",
        help: "Wrap the gold-accent word in {italic}…{/italic} markers — e.g. \"Defend Europe's {italic}Future{/italic}\".",
      },
      heroLede: { type: "textarea", label: "Hero lede", rows: 4 },
      preamble: { type: "textarea", label: "Preamble paragraph", rows: 3 },
      demands: {
        type: "objectList",
        label: "Demands",
        itemLabel: "Demand",
        fields: {
          roman: { type: "text", label: "Roman numeral (I, II, III…)" },
          title: { type: "text", label: "Demand title" },
          body: { type: "textarea", label: "Demand body", rows: 3 },
        },
      },
      closing: { type: "textarea", label: "Closing paragraph", rows: 2 },
    },
  },

  {
    slug: "issuesPage",
    title: "Issues page",
    fields: {
      heroEyebrow: { type: "text", label: "Hero eyebrow" },
      heroHeadline: { type: "text", label: "Hero headline" },
      heroItalicWord: { type: "text", label: "Hero italic accent word" },
      heroLede: { type: "textarea", label: "Hero lede", rows: 3 },
      mainIssues: {
        type: "objectList",
        label: "Main issues (numbered)",
        itemLabel: "Issue",
        fields: {
          id: { type: "text", label: "Anchor id (e.g. demographics)" },
          title: { type: "text", label: "Title" },
          subtitle: { type: "text", label: "Subtitle" },
          paragraphs: { type: "stringList", label: "Body paragraphs", itemLabel: "Paragraph" },
          stats: {
            type: "objectList",
            label: "Stats",
            itemLabel: "Stat",
            fields: {
              value: { type: "text", label: "Value (e.g. 23%)" },
              label: { type: "text", label: "Label" },
            },
          },
        },
      },
      additionalPriorities: {
        type: "objectList",
        label: "Additional priorities",
        itemLabel: "Priority",
        fields: {
          roman: { type: "text", label: "Roman numeral" },
          title: { type: "text", label: "Title" },
          desc: { type: "textarea", label: "Description", rows: 2 },
        },
      },
    },
  },

  {
    slug: "aboutPage",
    title: "About page",
    fields: {
      heroEyebrow: { type: "text", label: "Hero eyebrow" },
      heroHeadline: { type: "text", label: "Hero headline" },
      heroItalicWord: { type: "text", label: "Hero italic accent word" },
      heroLede: { type: "textarea", label: "Hero lede", rows: 3 },
      mission: {
        type: "object",
        label: "Mission section",
        fields: {
          headline: { type: "text", label: "Headline" },
          italicWord: { type: "text", label: "Italic accent word" },
          quote: { type: "textarea", label: "Pull-quote", rows: 2 },
          paragraphs: { type: "stringList", label: "Mission paragraphs", itemLabel: "Paragraph" },
        },
      },
      values: {
        type: "objectList",
        label: "Values",
        itemLabel: "Value",
        fields: {
          roman: { type: "text", label: "Roman numeral" },
          title: { type: "text", label: "Title (HTML allowed)" },
          text: { type: "textarea", label: "Text", rows: 3 },
        },
      },
      timeline: {
        type: "objectList",
        label: "Timeline milestones",
        itemLabel: "Milestone",
        fields: {
          date: { type: "text", label: "Date label (e.g. Apr 2026)" },
          short: { type: "text", label: "Short label (e.g. APR)" },
          title: { type: "text", label: "Title" },
          desc: { type: "textarea", label: "Description", rows: 2 },
        },
      },
    },
  },

  {
    slug: "donatePage",
    title: "Donate page",
    fields: {
      heroEyebrow: { type: "text", label: "Hero eyebrow" },
      heroHeadline: { type: "text", label: "Hero headline" },
      heroItalicWord: { type: "text", label: "Hero italic accent word" },
      heroLede: { type: "textarea", label: "Hero lede", rows: 3 },
      transparencyPromise: {
        type: "stringList",
        label: "Transparency promises",
        itemLabel: "Promise",
      },
      stripeProductDescription: {
        type: "textarea",
        label: "Stripe Checkout product description",
        rows: 2,
        help: "The line shown on the Stripe-hosted checkout page.",
      },
    },
  },

  {
    slug: "memberPage",
    title: "Europe First page",
    fields: {
      heroEyebrow: { type: "text", label: "Hero eyebrow" },
      heroHeadline: { type: "text", label: "Hero headline" },
      heroItalicWord: { type: "text", label: "Hero italic accent word" },
      heroLede: { type: "textarea", label: "Hero lede", rows: 3 },
      principles: {
        type: "objectList",
        label: "Principles",
        itemLabel: "Principle",
        fields: {
          roman: { type: "text", label: "Roman numeral" },
          title: { type: "text", label: "Title" },
          desc: { type: "textarea", label: "Description", rows: 3 },
        },
      },
      expectations: { type: "stringList", label: "Expectations", itemLabel: "Expectation" },
      notExpected: { type: "textarea", label: "Not expected (footer paragraph)", rows: 3 },
    },
  },

  {
    slug: "joinPage",
    title: "Membership tiers page",
    fields: {
      heroEyebrow: { type: "text", label: "Hero eyebrow" },
      heroHeadline: { type: "text", label: "Hero headline" },
      heroItalicWord: { type: "text", label: "Hero italic accent word" },
      heroLede: { type: "textarea", label: "Hero lede", rows: 3 },
      tiers: {
        type: "objectList",
        label: "Tiers",
        itemLabel: "Tier",
        fields: {
          roman: { type: "text", label: "Roman numeral" },
          name: { type: "text", label: "Name" },
          price: { type: "text", label: "Price (e.g. €9.99)" },
          priceWas: { type: "text", label: "Strikethrough former price (optional, e.g. €14.99)" },
          period: { type: "text", label: "Period (e.g. p/m or One-time)" },
          popular: { type: "boolean", label: "Mark as popular" },
          features: { type: "stringList", label: "Features", itemLabel: "Feature" },
          subsectionTitle: {
            type: "text",
            label: "Subsection title (optional, e.g. \"Founder Privileges (First 1000 members only)\")",
          },
          subsectionItems: { type: "stringList", label: "Subsection bullets", itemLabel: "Bullet" },
          ctaLabel: { type: "text", label: "Button label (defaults to \"Join as <name>\")" },
        },
      },
    },
  },

  {
    slug: "volunteerPage",
    title: "Volunteer page",
    fields: {
      heroEyebrow: { type: "text", label: "Hero eyebrow" },
      heroHeadline: { type: "text", label: "Hero headline" },
      heroItalicWord: { type: "text", label: "Hero italic accent word" },
      heroLede: { type: "textarea", label: "Hero lede", rows: 3 },
      roles: {
        type: "objectList",
        label: "Volunteer roles",
        itemLabel: "Role",
        fields: {
          roman: { type: "text", label: "Roman numeral" },
          title: { type: "text", label: "Title" },
          desc: { type: "textarea", label: "Description", rows: 2 },
          commitment: { type: "text", label: "Commitment (e.g. 4-6 hrs/week)" },
        },
      },
    },
  },

  {
    slug: "contactPage",
    title: "Contact page",
    fields: {
      heroEyebrow: { type: "text", label: "Hero eyebrow" },
      heroHeadline: { type: "text", label: "Hero headline" },
      heroItalicWord: { type: "text", label: "Hero italic accent word" },
      heroLede: { type: "textarea", label: "Hero lede", rows: 3 },
      contacts: {
        type: "objectList",
        label: "Contact rows",
        itemLabel: "Row",
        fields: {
          icon: { type: "text", label: "Icon (MapPin | Clock | Mail | Phone | MessageSquare)" },
          label: { type: "text", label: "Label" },
          value: { type: "text", label: "Value" },
        },
      },
      subjectOptions: { type: "stringList", label: "Subject dropdown options", itemLabel: "Option" },
      quickLinks: {
        type: "objectList",
        label: "Quick links",
        itemLabel: "Link",
        fields: ctaFields,
      },
    },
  },

  {
    slug: "privacyPage",
    title: "Privacy policy page",
    fields: {
      heroEyebrow: { type: "text", label: "Hero eyebrow" },
      heroHeadline: { type: "text", label: "Hero headline" },
      heroItalicWord: { type: "text", label: "Hero italic accent word" },
      lastRevised: { type: "text", label: "Last revised date" },
      intro: { type: "textarea", label: "Intro paragraph", rows: 3 },
      sections: {
        type: "objectList",
        label: "Sections",
        itemLabel: "Section",
        fields: {
          roman: { type: "text", label: "Roman numeral" },
          title: { type: "text", label: "Title" },
          body: { type: "textarea", label: "Body", rows: 4 },
          bullets: { type: "stringList", label: "Bullet points", itemLabel: "Bullet" },
        },
      },
      calloutHeadline: { type: "text", label: "Callout headline" },
      calloutBody: { type: "textarea", label: "Callout body", rows: 3 },
    },
  },
]

export function getSchema(slug: string): DocumentSchema | undefined {
  return SCHEMAS.find((s) => s.slug === slug)
}

export function defaultValueFor(field: FieldKind): unknown {
  switch (field.type) {
    case "text":
    case "textarea":
      return ""
    case "boolean":
      return false
    case "stringList":
      return []
    case "objectList":
      return []
    case "object": {
      const out: Record<string, unknown> = {}
      for (const [k, f] of Object.entries(field.fields)) out[k] = defaultValueFor(f)
      return out
    }
  }
}
