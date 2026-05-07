// Shared config for the donation form + checkout API.

export const SUPPORTED_CURRENCIES = ["EUR", "USD"] as const
export type Currency = (typeof SUPPORTED_CURRENCIES)[number]

export const PRESET_AMOUNTS: Record<Currency, number[]> = {
  EUR: [35, 65, 135, 600, 1500],
  USD: [40, 70, 145, 650, 1600],
}

export const SYMBOL: Record<Currency, string> = {
  EUR: "€",
  USD: "$",
}

export type Frequency = "once" | "monthly"
