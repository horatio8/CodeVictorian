"use client"

import { useEffect } from "react"

// ManyChat widget bootstrap, mounted client-side and gated behind the
// marketing-cookie consent stored by components/CookieConsent.tsx.
// /privacy advertises that no marketing cookies load until the user opts in,
// so we hold the scripts back until the consent flag flips on.

const CONSENT_KEY = "cv_cookie_consent"

const SCRIPTS = [
  "//widget.manychat.com/4819535_17c08.js",
  "https://mccdn.me/assets/js/widget.js",
]

declare global {
  interface Window {
    __cvManyChatLoaded?: boolean
  }
}

function loadManyChat() {
  if (typeof window === "undefined") return
  if (window.__cvManyChatLoaded) return
  window.__cvManyChatLoaded = true

  for (const src of SCRIPTS) {
    const script = document.createElement("script")
    script.src = src
    script.defer = true
    document.head.appendChild(script)
  }
}

function hasMarketingConsent(): boolean {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return false
    const parsed = JSON.parse(raw) as { marketing?: boolean }
    return parsed?.marketing === true
  } catch {
    return false
  }
}

export default function ManyChat() {
  useEffect(() => {
    if (hasMarketingConsent()) loadManyChat()

    function onStorage(e: StorageEvent) {
      if (e.key === CONSENT_KEY && hasMarketingConsent()) loadManyChat()
    }
    function onConsentChanged() {
      if (hasMarketingConsent()) loadManyChat()
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
