"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Shield } from "lucide-react"

type ConsentState = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const CONSENT_KEY = "cv_cookie_consent"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      setVisible(true)
    }
  }, [])

  function saveConsent(state: ConsentState) {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(state))
    setVisible(false)

    // Load analytics only after explicit opt-in
    if (state.analytics) {
      loadGoogleAnalytics()
    }
    if (state.marketing) {
      loadFacebookPixel()
    }
  }

  function acceptAll() {
    saveConsent({ necessary: true, analytics: true, marketing: true })
  }

  function acceptNecessary() {
    saveConsent({ necessary: true, analytics: false, marketing: false })
  }

  function savePreferences() {
    saveConsent(consent)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] p-4 md:p-6">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
          <div className="p-5 md:p-6">
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-primary text-lg">
                  Your Privacy Matters
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  We use cookies to improve your experience. In accordance with
                  GDPR, we require your explicit consent before activating any
                  non-essential cookies. No tracking occurs until you opt in.{" "}
                  <Link
                    href="/privacy#cookies"
                    className="text-accent hover:underline font-medium"
                  >
                    Read our Cookie Policy
                  </Link>
                </p>
              </div>
              <button
                onClick={acceptNecessary}
                className="p-1 rounded hover:bg-muted transition-colors shrink-0"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>

            {/* Detailed Preferences */}
            {showDetails && (
              <div className="space-y-3 mb-5 pl-8">
                <label className="flex items-center gap-3 cursor-not-allowed opacity-70">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="rounded border-border"
                  />
                  <div>
                    <span className="text-sm font-medium">Strictly Necessary</span>
                    <span className="text-xs text-muted-foreground block">
                      Required for the website to function. Always active.
                    </span>
                  </div>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) =>
                      setConsent({ ...consent, analytics: e.target.checked })
                    }
                    className="rounded border-border accent-accent"
                  />
                  <div>
                    <span className="text-sm font-medium">Analytics</span>
                    <span className="text-xs text-muted-foreground block">
                      Google Analytics &mdash; helps us understand how visitors use the site.
                    </span>
                  </div>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={(e) =>
                      setConsent({ ...consent, marketing: e.target.checked })
                    }
                    className="rounded border-border accent-accent"
                  />
                  <div>
                    <span className="text-sm font-medium">Marketing</span>
                    <span className="text-xs text-muted-foreground block">
                      Facebook Pixel &mdash; used for campaign advertising measurement.
                    </span>
                  </div>
                </label>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pl-8">
              <Button onClick={acceptAll} size="sm">
                Accept All
              </Button>
              {showDetails ? (
                <Button onClick={savePreferences} variant="primary" size="sm">
                  Save Preferences
                </Button>
              ) : (
                <Button
                  onClick={() => setShowDetails(true)}
                  variant="outline"
                  size="sm"
                >
                  Customise
                </Button>
              )}
              <Button onClick={acceptNecessary} variant="ghost" size="sm">
                Necessary Only
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// These functions only run AFTER explicit opt-in consent
function loadGoogleAnalytics() {
  // Placeholder: Replace GA_MEASUREMENT_ID with actual ID
  const script = document.createElement("script")
  script.src = "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  script.async = true
  document.head.appendChild(script)

  script.onload = () => {
    ;(window as any).dataLayer = (window as any).dataLayer || []
    function gtag(...args: any[]) {
      ;(window as any).dataLayer.push(args)
    }
    gtag("js", new Date())
    gtag("config", "GA_MEASUREMENT_ID", { anonymize_ip: true })
  }
}

function loadFacebookPixel() {
  // Placeholder: Replace FB_PIXEL_ID with actual ID
  const script = document.createElement("script")
  script.innerHTML = `
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'FB_PIXEL_ID');
    fbq('track', 'PageView');
  `
  document.head.appendChild(script)
}
