"use client"

import { useState, useEffect } from "react"
import { Shield, X } from "lucide-react"

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [prefs, setPrefs] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cv_cookie_consent")
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept(all: boolean) {
    const consent = all
      ? { necessary: true, analytics: true, marketing: true }
      : prefs
    localStorage.setItem("cv_cookie_consent", JSON.stringify(consent))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] animate-fade-in-up p-4">
      <div className="mx-auto max-w-3xl rounded-xl bg-navy-800 p-6 shadow-2xl shadow-navy-950/40 ring-1 ring-white/10">
        <div className="flex items-start gap-4">
          <Shield className="mt-0.5 h-6 w-6 shrink-0 text-gold-400" />
          <div className="flex-1">
            <h3 className="font-serif text-base font-bold text-white">
              Your Privacy Matters
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-white/60">
              We use cookies to enhance your experience. Under GDPR, we require
              your explicit consent before activating any non-essential cookies.
              No analytics or marketing cookies are loaded until you opt in.
            </p>

            {showDetails && (
              <div className="mt-4 space-y-3 rounded-lg bg-navy-900/60 p-4">
                <label className="flex items-center gap-3 text-sm text-white/70">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="h-4 w-4 rounded accent-gold-400"
                  />
                  <span>
                    <strong className="text-white">Strictly Necessary</strong>
                    &nbsp;&mdash; Required for the website to function. Always on.
                  </span>
                </label>
                <label className="flex items-center gap-3 text-sm text-white/70 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={prefs.analytics}
                    onChange={(e) =>
                      setPrefs((p) => ({ ...p, analytics: e.target.checked }))
                    }
                    className="h-4 w-4 rounded accent-gold-400"
                  />
                  <span>
                    <strong className="text-white">Analytics</strong>
                    &nbsp;&mdash; Help us understand how visitors use our site
                    (Google Analytics).
                  </span>
                </label>
                <label className="flex items-center gap-3 text-sm text-white/70 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={prefs.marketing}
                    onChange={(e) =>
                      setPrefs((p) => ({ ...p, marketing: e.target.checked }))
                    }
                    className="h-4 w-4 rounded accent-gold-400"
                  />
                  <span>
                    <strong className="text-white">Marketing</strong>
                    &nbsp;&mdash; Enable social media features and targeted
                    outreach (Facebook Pixel).
                  </span>
                </label>
              </div>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button onClick={() => accept(true)} className="btn-primary !py-2.5 !px-5 !text-xs">
                Accept All
              </button>
              <button
                onClick={() => accept(false)}
                className="rounded-md border border-white/20 bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-white/40"
              >
                {showDetails ? "Save Preferences" : "Reject Non-Essential"}
              </button>
              {!showDetails && (
                <button
                  onClick={() => setShowDetails(true)}
                  className="text-xs font-medium text-gold-400/80 underline underline-offset-2 transition-colors hover:text-gold-400"
                >
                  Manage preferences
                </button>
              )}
            </div>
          </div>
          <button
            onClick={() => accept(false)}
            className="shrink-0 text-white/40 transition-colors hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
