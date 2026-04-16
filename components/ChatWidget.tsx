"use client"

import { useState } from "react"
import { MessageSquare, X, Sparkles } from "lucide-react"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-500 text-navy-900 shadow-lg shadow-gold-400/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-gold-400/40"
        aria-label={open ? "Close chat" : "Open design assistant"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-[90] w-[380px] overflow-hidden rounded-2xl bg-white shadow-2xl shadow-navy-950/20 ring-1 ring-navy-100 animate-fade-in-up sm:w-[420px]">
          <div className="flex items-center justify-between bg-navy-700 px-5 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-400">
                <span className="font-serif text-sm font-bold text-navy-900">V</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Design Assistant</h3>
                <p className="text-[0.625rem] text-white/50">Powered by 21st.dev</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/50 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-400/10 mb-4">
              <Sparkles className="h-8 w-8 text-gold-500" />
            </div>
            <h4 className="font-serif text-lg font-bold text-navy-700">AI Design Assistant</h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              This assistant helps refine the site&rsquo;s UI design using 21st.dev AI agents.
              To activate, deploy to Vercel and add your <code className="rounded bg-navy-50 px-1.5 py-0.5 text-xs font-mono text-navy-600">API_KEY_21ST</code> environment variable.
            </p>
            <a
              href="https://21st.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 !text-xs !py-2.5 !px-5"
            >
              Get an API Key
            </a>
          </div>
        </div>
      )}
    </>
  )
}
