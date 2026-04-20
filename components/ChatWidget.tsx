"use client"

import { useState } from "react"
import { X, Sparkles } from "lucide-react"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[90] flex h-12 w-12 items-center justify-center border border-gold-400 bg-navy-900 text-gold-400 transition-all duration-250 hover:bg-gold-400 hover:text-navy-900 hover:-translate-y-0.5"
        style={{ boxShadow: open ? "none" : "0 6px 24px -10px var(--color-gold-400)" }}
        aria-label={open ? "Close chat" : "Open design assistant"}
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <span className="font-serif text-2xl italic leading-none">✦</span>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-[90] w-[380px] overflow-hidden border border-gold-400/40 bg-cream animate-fade-in-up sm:w-[420px]">
          <div className="flex items-center justify-between border-b border-gold-400/30 bg-navy-900 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-xl italic text-gold-400 leading-none">✦</span>
              <div>
                <h3 className="font-serif text-base font-medium text-white leading-tight">
                  Design Assistant
                </h3>
                <p className="mt-0.5 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-gold-400/70">
                  Powered by 21st.dev
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/50 transition-colors hover:text-gold-400"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center border border-gold-400/40 mb-5">
              <Sparkles className="h-7 w-7 text-gold-400" />
            </div>
            <span className="eyebrow">An Aide-Mémoire</span>
            <h4 className="mt-5 font-serif text-xl font-medium text-navy-800">
              AI Design Assistant
            </h4>
            <p className="mt-3 font-lede text-sm leading-relaxed text-navy-800/70">
              This assistant helps refine the site&rsquo;s UI design using 21st.dev
              AI agents. To activate, deploy to Vercel and add your{" "}
              <code className="font-mono text-[0.75rem] text-gold-600">
                API_KEY_21ST
              </code>{" "}
              environment variable.
            </p>
            <a
              href="https://21st.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
              style={{ padding: "10px 20px", fontSize: "10px" }}
            >
              Get an API Key <span className="font-serif">→</span>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
