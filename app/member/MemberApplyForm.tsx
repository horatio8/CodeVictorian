"use client"

import Link from "next/link"
import { useState } from "react"
import PhoneField from "@/components/PhoneField"
import { DEFAULT_CALLING_CODE } from "@/lib/calling-codes"

export default function MemberApplyForm() {
  const [phoneCountry, setPhoneCountry] = useState(DEFAULT_CALLING_CODE)
  const [phone, setPhone] = useState("")

  return (
    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-3">
        <input type="text" placeholder="First name" className="form-input" required />
        <input type="text" placeholder="Last name" className="form-input" required />
      </div>
      <input type="email" placeholder="your name@correspondence.eu" className="form-input" required />
      <PhoneField
        countryIso={phoneCountry}
        onCountryIso={setPhoneCountry}
        number={phone}
        onNumber={setPhone}
        placeholder="Mobile (optional)"
      />
      <input type="text" placeholder="City, Country" className="form-input" required />
      <textarea
        rows={4}
        placeholder="A short note about why you'd like to join (optional but helpful)."
        className="form-input resize-none"
      />
      <button type="submit" className="btn-primary w-full">
        Submit Application <span className="font-serif">→</span>
      </button>
      <p className="text-center text-xs leading-relaxed text-navy-800/65">
        By submitting, you agree to the{" "}
        <Link href="/privacy" className="text-gold-600 underline underline-offset-2">
          privacy policy
        </Link>
        {" "}and consent to receive correspondence about Europe First. Unsubscribe at any time.
      </p>
    </form>
  )
}
