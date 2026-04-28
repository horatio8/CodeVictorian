"use client"

import { CALLING_CODES } from "@/lib/calling-codes"

type Props = {
  /** ISO-3166-1 alpha-2 country code controlling the dial prefix */
  countryIso: string
  onCountryIso: (iso: string) => void
  /** The local number (without dial prefix) */
  number: string
  onNumber: (value: string) => void
  /** Visible placeholder for the number input */
  placeholder?: string
  required?: boolean
}

export default function PhoneField({
  countryIso,
  onCountryIso,
  number,
  onNumber,
  placeholder = "Phone (optional)",
  required = false,
}: Props) {
  return (
    <div className="grid grid-cols-[7.5rem_1fr] gap-2">
      <select
        aria-label="Country dialing code"
        className="form-input pr-2"
        value={countryIso}
        onChange={(e) => onCountryIso(e.target.value)}
      >
        {CALLING_CODES.map((c) => (
          <option key={c.iso} value={c.iso}>
            {c.flag} {c.dial || "—"}
          </option>
        ))}
      </select>
      <input
        type="tel"
        className="form-input"
        autoComplete="tel-national"
        inputMode="tel"
        placeholder={placeholder}
        value={number}
        onChange={(e) => onNumber(e.target.value)}
        required={required}
        maxLength={250}
      />
    </div>
  )
}
