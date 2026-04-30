"use client"

import Link from "next/link"
import { useState } from "react"
import PhoneField from "@/components/PhoneField"
import { DEFAULT_CALLING_CODE } from "@/lib/calling-codes"

type Role = { roman?: string; title?: string; desc?: string; commitment?: string }

export default function VolunteerForm({ roles }: { roles: Role[] }) {
  const [phoneCountry, setPhoneCountry] = useState(DEFAULT_CALLING_CODE)
  const [phone, setPhone] = useState("")
  return (
    <form className="mt-14 space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="First name" className="form-input" required />
        <input type="text" placeholder="Last name" className="form-input" required />
      </div>
      <input type="email" placeholder="your name@correspondence.eu" className="form-input" required />
      <PhoneField
        countryIso={phoneCountry}
        onCountryIso={setPhoneCountry}
        number={phone}
        onNumber={setPhone}
        placeholder="Phone number (optional)"
      />
      <div className="grid grid-cols-2 gap-4">
        <select className="form-input" required defaultValue="">
          <option value="">Country</option>
          <option>Austria</option><option>Belgium</option><option>France</option>
          <option>Germany</option><option>Italy</option><option>Netherlands</option>
          <option>Poland</option><option>Spain</option><option>Sweden</option>
          <option>Other EU Country</option>
        </select>
        <input type="text" placeholder="City" className="form-input" />
      </div>
      <div>
        <label className="block mb-3 font-mono text-[0.625rem] font-medium uppercase tracking-[0.28em] text-gold-600">
          Which roles interest you? (select all that apply)
        </label>
        <div className="grid gap-0 border border-gold-400/25 sm:grid-cols-2">
          {roles.map((r, i, arr) => (
            <label
              key={r.title ?? i}
              className={`flex items-center gap-3 p-4 font-lede text-base text-navy-800 cursor-pointer transition-colors hover:bg-gold-400/5 ${
                i % 2 === 0 ? "sm:border-r sm:border-gold-400/20" : ""
              } ${i < arr.length - 2 ? "border-b border-gold-400/15" : "sm:border-b-0"} ${
                i === arr.length - 2 ? "border-b border-gold-400/15 sm:border-b-0" : ""
              }`}
            >
              <input type="checkbox" className="h-3.5 w-3.5 accent-gold-400" />
              <span className="font-serif italic text-sm text-gold-400">{r.roman}</span>
              {r.title}
            </label>
          ))}
        </div>
      </div>
      <textarea
        placeholder="Tell us about yourself and why you want to volunteer (optional)"
        rows={4}
        className="form-input resize-none"
      />
      <label className="flex items-start gap-2 font-lede text-xs text-navy-800/65">
        <input type="checkbox" required className="mt-1 h-3.5 w-3.5 accent-gold-400" />
        <span>
          I agree to the{" "}
          <Link href="/privacy" className="text-gold-600 underline underline-offset-2">privacy policy</Link>
          {" "}and consent to being contacted about volunteer opportunities.
        </span>
      </label>
      <button type="submit" className="btn-primary w-full">
        Submit Application <span className="font-serif">→</span>
      </button>
    </form>
  )
}
