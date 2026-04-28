// Calling-code list, ordered with the most common audience countries
// pinned at the top, then the rest alphabetised. Country names are kept
// terse so the dropdown stays narrow on mobile.

export type CallingCode = {
  /** Country flag emoji */
  flag: string
  /** Full country name (used as the visible label) */
  name: string
  /** ISO-3166-1 alpha-2 code (used as the option value) */
  iso: string
  /** Dial code with leading + */
  dial: string
}

// Pinned to the top — campaign audience, in priority order.
const PINNED: CallingCode[] = [
  { flag: "🇬🇧", name: "United Kingdom",  iso: "GB", dial: "+44"  },
  { flag: "🇺🇸", name: "United States",   iso: "US", dial: "+1"   },
  { flag: "🇨🇦", name: "Canada",          iso: "CA", dial: "+1"   },
  { flag: "🇦🇺", name: "Australia",       iso: "AU", dial: "+61"  },
  { flag: "🇳🇿", name: "New Zealand",     iso: "NZ", dial: "+64"  },
  { flag: "🇮🇪", name: "Ireland",         iso: "IE", dial: "+353" },
  { flag: "🇫🇷", name: "France",          iso: "FR", dial: "+33"  },
  { flag: "🇩🇪", name: "Germany",         iso: "DE", dial: "+49"  },
  { flag: "🇮🇹", name: "Italy",           iso: "IT", dial: "+39"  },
  { flag: "🇪🇸", name: "Spain",           iso: "ES", dial: "+34"  },
  { flag: "🇳🇱", name: "Netherlands",     iso: "NL", dial: "+31"  },
  { flag: "🇧🇪", name: "Belgium",         iso: "BE", dial: "+32"  },
  { flag: "🇦🇹", name: "Austria",         iso: "AT", dial: "+43"  },
  { flag: "🇨🇭", name: "Switzerland",     iso: "CH", dial: "+41"  },
  { flag: "🇸🇪", name: "Sweden",          iso: "SE", dial: "+46"  },
  { flag: "🇩🇰", name: "Denmark",         iso: "DK", dial: "+45"  },
  { flag: "🇳🇴", name: "Norway",          iso: "NO", dial: "+47"  },
  { flag: "🇫🇮", name: "Finland",         iso: "FI", dial: "+358" },
  { flag: "🇵🇹", name: "Portugal",        iso: "PT", dial: "+351" },
  { flag: "🇬🇷", name: "Greece",          iso: "GR", dial: "+30"  },
  { flag: "🇵🇱", name: "Poland",          iso: "PL", dial: "+48"  },
  { flag: "🇨🇿", name: "Czechia",         iso: "CZ", dial: "+420" },
  { flag: "🇭🇺", name: "Hungary",         iso: "HU", dial: "+36"  },
]

const REST: CallingCode[] = [
  { flag: "🇦🇱", name: "Albania",                iso: "AL", dial: "+355"  },
  { flag: "🇦🇩", name: "Andorra",                iso: "AD", dial: "+376"  },
  { flag: "🇦🇷", name: "Argentina",              iso: "AR", dial: "+54"   },
  { flag: "🇦🇲", name: "Armenia",                iso: "AM", dial: "+374"  },
  { flag: "🇦🇿", name: "Azerbaijan",             iso: "AZ", dial: "+994"  },
  { flag: "🇧🇾", name: "Belarus",                iso: "BY", dial: "+375"  },
  { flag: "🇧🇦", name: "Bosnia & Herzegovina",   iso: "BA", dial: "+387"  },
  { flag: "🇧🇷", name: "Brazil",                 iso: "BR", dial: "+55"   },
  { flag: "🇧🇬", name: "Bulgaria",               iso: "BG", dial: "+359"  },
  { flag: "🇨🇱", name: "Chile",                  iso: "CL", dial: "+56"   },
  { flag: "🇭🇷", name: "Croatia",                iso: "HR", dial: "+385"  },
  { flag: "🇨🇾", name: "Cyprus",                 iso: "CY", dial: "+357"  },
  { flag: "🇪🇪", name: "Estonia",                iso: "EE", dial: "+372"  },
  { flag: "🇬🇪", name: "Georgia",                iso: "GE", dial: "+995"  },
  { flag: "🇮🇸", name: "Iceland",                iso: "IS", dial: "+354"  },
  { flag: "🇮🇱", name: "Israel",                 iso: "IL", dial: "+972"  },
  { flag: "🇯🇵", name: "Japan",                  iso: "JP", dial: "+81"   },
  { flag: "🇽🇰", name: "Kosovo",                 iso: "XK", dial: "+383"  },
  { flag: "🇱🇻", name: "Latvia",                 iso: "LV", dial: "+371"  },
  { flag: "🇱🇮", name: "Liechtenstein",          iso: "LI", dial: "+423"  },
  { flag: "🇱🇹", name: "Lithuania",              iso: "LT", dial: "+370"  },
  { flag: "🇱🇺", name: "Luxembourg",             iso: "LU", dial: "+352"  },
  { flag: "🇲🇹", name: "Malta",                  iso: "MT", dial: "+356"  },
  { flag: "🇲🇩", name: "Moldova",                iso: "MD", dial: "+373"  },
  { flag: "🇲🇨", name: "Monaco",                 iso: "MC", dial: "+377"  },
  { flag: "🇲🇪", name: "Montenegro",             iso: "ME", dial: "+382"  },
  { flag: "🇲🇽", name: "Mexico",                 iso: "MX", dial: "+52"   },
  { flag: "🇲🇰", name: "North Macedonia",        iso: "MK", dial: "+389"  },
  { flag: "🇷🇴", name: "Romania",                iso: "RO", dial: "+40"   },
  { flag: "🇷🇸", name: "Serbia",                 iso: "RS", dial: "+381"  },
  { flag: "🇸🇰", name: "Slovakia",               iso: "SK", dial: "+421"  },
  { flag: "🇸🇮", name: "Slovenia",               iso: "SI", dial: "+386"  },
  { flag: "🇿🇦", name: "South Africa",           iso: "ZA", dial: "+27"   },
  { flag: "🇹🇷", name: "Turkey",                 iso: "TR", dial: "+90"   },
  { flag: "🇺🇦", name: "Ukraine",                iso: "UA", dial: "+380"  },
  { flag: "🇻🇦", name: "Vatican City",           iso: "VA", dial: "+379"  },
  { flag: "🌍", name: "Other",                    iso: "XX", dial: ""      },
].sort((a, b) => a.name.localeCompare(b.name))

export const CALLING_CODES: CallingCode[] = [...PINNED, ...REST]

export const DEFAULT_CALLING_CODE = "GB"

/** Combine the chosen calling code with the user-entered local number,
 *  trimming everything to a single E.164-shaped string for downstream
 *  systems (Campaign Nucleus, future Stripe customer records, etc.).
 *  Returns "" if the user left the number blank. */
export function composePhone(iso: string, local: string): string {
  const trimmed = (local ?? "").trim()
  if (!trimmed) return ""
  const code = CALLING_CODES.find((c) => c.iso === iso)
  if (!code || !code.dial) return trimmed // "Other" / unknown — just send what they typed
  // Strip leading 0 from the local part (UK / many EU local trunk prefixes).
  const cleaned = trimmed.replace(/^0+/, "")
  // Don't double-prefix if the user already typed +44 etc.
  if (cleaned.startsWith("+")) return cleaned
  return `${code.dial} ${cleaned}`
}
