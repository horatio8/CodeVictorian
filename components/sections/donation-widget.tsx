"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { formatEUR } from "@/lib/utils"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const PRESET_AMOUNTS = [65, 135, 265, 600, 1500]

interface DonationWidgetProps {
  compact?: boolean
  className?: string
}

export function DonationWidget({ compact = false, className }: DonationWidgetProps) {
  const [selected, setSelected] = useState<number | null>(135)
  const [custom, setCustom] = useState("")
  const [frequency, setFrequency] = useState<"once" | "monthly">("once")

  const amount = custom ? parseInt(custom, 10) : selected

  return (
    <div className={cn("bg-white rounded-2xl shadow-lg border border-border p-6 md:p-8", className)}>
      {!compact && (
        <div className="text-center mb-6">
          <Heart className="h-8 w-8 text-accent mx-auto mb-3" />
          <h3 className="font-serif font-bold text-primary text-2xl mb-2">
            Support Our Cause
          </h3>
          <p className="text-muted-foreground text-sm">
            Every contribution strengthens our mission to preserve European culture.
          </p>
        </div>
      )}

      {/* Frequency Toggle */}
      <div className="flex bg-muted rounded-lg p-1 mb-5">
        <button
          onClick={() => setFrequency("once")}
          className={cn(
            "flex-1 py-2 text-sm font-medium rounded-md transition-all",
            frequency === "once"
              ? "bg-white text-primary shadow-sm"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          One-time
        </button>
        <button
          onClick={() => setFrequency("monthly")}
          className={cn(
            "flex-1 py-2 text-sm font-medium rounded-md transition-all",
            frequency === "monthly"
              ? "bg-white text-primary shadow-sm"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          Monthly
        </button>
      </div>

      {/* Preset Amounts */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {PRESET_AMOUNTS.map((amt) => (
          <button
            key={amt}
            onClick={() => {
              setSelected(amt)
              setCustom("")
            }}
            className={cn(
              "py-3 rounded-lg text-sm font-semibold border-2 transition-all",
              selected === amt && !custom
                ? "border-accent bg-accent/10 text-primary"
                : "border-border hover:border-primary-200 text-foreground"
            )}
          >
            {formatEUR(amt)}
          </button>
        ))}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">
            &euro;
          </span>
          <Input
            type="number"
            placeholder="Other"
            value={custom}
            onChange={(e) => {
              setCustom(e.target.value)
              setSelected(null)
            }}
            className="pl-7 h-full text-sm font-semibold text-center"
            min={1}
          />
        </div>
      </div>

      {/* Donate Button */}
      <Button className="w-full cta-glow" size="xl">
        Donate {amount ? formatEUR(amount) : ""}{" "}
        {frequency === "monthly" ? "/ month" : ""}
      </Button>

      <p className="text-xs text-muted-foreground text-center mt-3">
        Secure payment. All donations are processed in EUR. Contributions are
        not tax-deductible. By donating you agree to our{" "}
        <a href="/privacy" className="text-accent hover:underline">
          privacy policy
        </a>
        .
      </p>
    </div>
  )
}
