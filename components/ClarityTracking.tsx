"use client"

import { useEffect } from "react"

// Microsoft Clarity bootstrap, mounted client-side and gated behind
// the analytics-cookie consent stored by components/CookieConsent.tsx.
// This is intentional: /privacy advertises that "no analytics or marketing
// cookies are loaded until you opt in".

const CLARITY_ID = "wiwtif4o5x"
const CONSENT_KEY = "cv_cookie_consent"

declare global {
  interface Window {
    clarity?: ClarityFn
    __cvClarityLoaded?: boolean
  }
}

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] }

function loadClarity() {
  if (typeof window === "undefined") return
  if (window.__cvClarityLoaded) return
  window.__cvClarityLoaded = true

  // Inlined Clarity bootstrap — equivalent to the snippet from clarity.microsoft.com.
  if (!window.clarity) {
    const stub: ClarityFn = function (...args: unknown[]) {
      stub.q = stub.q ?? []
      stub.q.push(args)
    }
    window.clarity = stub
  }

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`
  const first = document.getElementsByTagName("script")[0]
  first?.parentNode?.insertBefore(script, first)
}

function hasAnalyticsConsent(): boolean {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return false
    const parsed = JSON.parse(raw) as { analytics?: boolean }
    return parsed?.analytics === true
  } catch {
    return false
  }
}

export default function ClarityTracking() {
  useEffect(() => {
    if (hasAnalyticsConsent()) loadClarity()

    function onStorage(e: StorageEvent) {
      if (e.key === CONSENT_KEY && hasAnalyticsConsent()) loadClarity()
    }
    function onConsentChanged() {
      if (hasAnalyticsConsent()) loadClarity()
    }
    window.addEventListener("storage", onStorage)
    window.addEventListener("cv:consent-changed", onConsentChanged)
    return () => {
      window.removeEventListener("storage", onStorage)
      window.removeEventListener("cv:consent-changed", onConsentChanged)
    }
  }, [])
  return null
}
