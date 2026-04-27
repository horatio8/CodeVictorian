// Shared config for the donation form + checkout API.

export const SUPPORTED_CURRENCIES = ["EUR", "USD"] as const
export type Currency = (typeof SUPPORTED_CURRENCIES)[number]

export const PRESET_AMOUNTS: Record<Currency, number[]> = {
  EUR: [65, 135, 265, 600, 1500],
  USD: [70, 145, 285, 650, 1600],
}

export const SYMBOL: Record<Currency, string> = {
  EUR: "€",
  USD: "$",
}

export type Frequency = "once" | "monthly"
