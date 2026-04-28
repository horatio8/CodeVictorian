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
    // Tell same-tab listeners (Clarity, etc.) consent has changed.
    // Cross-tab updates fire the standard storage event automatically.
    window.dispatchEvent(new CustomEvent("cv:consent-changed", { detail: consent }))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] animate-fade-in-up p-4">
      <div className="mx-auto max-w-3xl border border-gold-400/40 bg-navy-900 p-6 on-dark">
        <div className="flex items-start gap-4">
          <Shield className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
          <div className="flex-1">
            <span className="eyebrow">Your Privacy</span>
            <h3 className="mt-3 font-serif text-xl font-medium text-white">
              Your Privacy Matters
            </h3>
            <p className="mt-2 font-lede text-sm leading-relaxed text-white/70">
              We use cookies to enhance your experience. Under GDPR, we require
              your explicit consent before activating any non-essential cookies.
              No analytics or marketing cookies are loaded until you opt in.
            </p>

            {showDetails && (
              <div className="mt-5 space-y-3 border border-gold-400/20 bg-navy-950/60 p-4">
                <label className="flex items-start gap-3 text-sm text-white/70">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="mt-0.5 h-4 w-4 accent-gold-400"
                  />
                  <span className="font-lede">
                    <strong className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-gold-400">
                      Strictly Necessary
                    </strong>
                    <br />
                    Required for the website to function. Always on.
                  </span>
                </label>
                <label className="flex items-start gap-3 text-sm text-white/70 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={prefs.analytics}
                    onChange={(e) =>
                      setPrefs((p) => ({ ...p, analytics: e.target.checked }))
                    }
                    className="mt-0.5 h-4 w-4 accent-gold-400"
                  />
                  <span className="font-lede">
                    <strong className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-gold-400">
                      Analytics
                    </strong>
                    <br />
                    Help us understand how visitors use our site (Google Analytics).
                  </span>
                </label>
                <label className="flex items-start gap-3 text-sm text-white/70 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={prefs.marketing}
                    onChange={(e) =>
                      setPrefs((p) => ({ ...p, marketing: e.target.checked }))
                    }
                    className="mt-0.5 h-4 w-4 accent-gold-400"
                  />
                  <span className="font-lede">
                    <strong className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-gold-400">
                      Marketing
                    </strong>
                    <br />
                    Enable social media features and targeted outreach (Facebook Pixel).
                  </span>
                </label>
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={() => accept(true)}
                className="btn-primary"
                style={{ padding: "10px 18px", fontSize: "10px" }}
              >
                Accept All
              </button>
              <button
                onClick={() => accept(false)}
                className="btn-secondary"
                style={{ padding: "10px 18px", fontSize: "10px", color: "white", borderColor: "rgba(255,255,255,0.4)" }}
              >
                {showDetails ? "Save Preferences" : "Reject Non-Essential"}
              </button>
              {!showDetails && (
                <button
                  onClick={() => setShowDetails(true)}
                  className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-gold-400/80 underline underline-offset-4 transition-colors hover:text-gold-400"
                >
                  Manage preferences
                </button>
              )}
            </div>
          </div>
          <button
            onClick={() => accept(false)}
            className="shrink-0 text-white/50 transition-colors hover:text-gold-400"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
