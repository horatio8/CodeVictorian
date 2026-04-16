"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { PenLine, CheckCircle2 } from "lucide-react"

interface PetitionFormProps {
  compact?: boolean
  className?: string
}

export function PetitionForm({ compact = false, className }: PetitionFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    postcode: "",
    country: "",
  })

  const signatureCount = 47832

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={cn("bg-white rounded-2xl shadow-lg border border-border p-6 md:p-8 text-center", className)}>
        <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="font-serif font-bold text-primary text-2xl mb-2">
          Thank You!
        </h3>
        <p className="text-muted-foreground mb-4">
          Your signature has been recorded. Together we are stronger.
        </p>
        <p className="text-sm text-muted-foreground">
          Share this petition with your friends and family to amplify our message.
        </p>
        <div className="flex justify-center gap-3 mt-5">
          {["Facebook", "X", "WhatsApp", "Email"].map((platform) => (
            <button
              key={platform}
              className="px-4 py-2 text-xs font-medium bg-primary-50 text-primary rounded-full hover:bg-primary-100 transition-colors"
            >
              {platform}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("bg-white rounded-2xl shadow-lg border border-border p-6 md:p-8", className)}>
      {!compact && (
        <div className="text-center mb-6">
          <PenLine className="h-8 w-8 text-accent mx-auto mb-3" />
          <h3 className="font-serif font-bold text-primary text-2xl mb-2">
            Sign the Petition
          </h3>
          <p className="text-muted-foreground text-sm">
            Add your name to the growing list of Europeans demanding action.
          </p>
        </div>
      )}

      {/* Signature Counter */}
      <div className="bg-primary-50 rounded-xl p-4 mb-6">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-2xl font-serif font-bold text-primary">
            {signatureCount.toLocaleString("en-GB")}
          </span>
          <span className="text-xs text-muted-foreground">Goal: 100,000</span>
        </div>
        <div className="w-full h-2.5 bg-primary-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent to-accent-400 rounded-full transition-all duration-1000"
            style={{ width: `${(signatureCount / 100000) * 100}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1.5">
          {(100000 - signatureCount).toLocaleString("en-GB")} more signatures needed
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder="First name"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          <Input
            placeholder="Last name"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>
        <Input
          type="email"
          placeholder="Email address"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder="Postcode"
            value={formData.postcode}
            onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
          />
          <Input
            placeholder="Country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          />
        </div>

        <div className="flex items-start gap-2 pt-1">
          <input
            type="checkbox"
            id="consent-petition"
            required
            className="mt-1 rounded border-border accent-accent"
          />
          <label htmlFor="consent-petition" className="text-xs text-muted-foreground leading-relaxed">
            I consent to Code Victorian processing my data for this petition
            and contacting me about campaign updates. I can withdraw consent at
            any time.{" "}
            <a href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <Button type="submit" className="w-full cta-glow" size="lg">
          Sign Now &mdash; Add My Name
        </Button>
      </form>
    </div>
  )
}
