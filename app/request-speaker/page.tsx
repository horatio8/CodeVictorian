import type { Metadata } from "next"
import RequestSpeakerForm from "./RequestSpeakerForm"

export const metadata: Metadata = { title: "Request a Speaker" }

export default function RequestSpeakerPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">Engagements</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            Request a{" "}
            <span className="italic font-normal text-gold-400">Speaker</span>
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">
            Invite Matthias or a member of the Code Victorian team to speak at
            your conference, summit, podcast, or community event.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-2xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. I</span>
            <span className="line" />
            <span className="label">The Invitation</span>
          </div>

          <div className="text-center">
            <span className="eyebrow eyebrow-both">Tell Us About Your Event</span>
            <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl">
              Brief us on the{" "}
              <span className="italic font-normal text-gold-400">occasion</span>.
            </h2>
            <p className="lede mt-6">
              The more we know up front, the faster we can come back to you with
              availability.
            </p>
          </div>

          <div className="mt-12 ornament border border-gold-400/40 bg-ivory p-8 sm:p-12">
            <RequestSpeakerForm />
          </div>
        </div>
      </section>
    </>
  )
}
