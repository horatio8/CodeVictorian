"use client"

import Link from "next/link"
import {
  Megaphone,
  PenTool,
  Globe,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
} from "lucide-react"


const roles = [
  { icon: Megaphone, title: "Campaign Outreach", desc: "Distribute materials, attend rallies, and engage with the public at local events across your city.", commitment: "4\u20138 hours/week" },
  { icon: PenTool, title: "Content & Communications", desc: "Write articles, create social media content, produce videos, or help translate materials into European languages.", commitment: "3\u20136 hours/week" },
  { icon: Globe, title: "Digital Campaigning", desc: "Manage social media accounts, run online campaigns, moderate forums, and grow our digital presence.", commitment: "5\u201310 hours/week" },
  { icon: MapPin, title: "Local Chapter Leader", desc: "Organise and lead a local chapter, coordinate events, recruit new volunteers, and represent the movement in your area.", commitment: "6\u201312 hours/week" },
  { icon: Calendar, title: "Event Organisation", desc: "Plan and execute events from small meetups to large rallies. Handle logistics, venues, and promotion.", commitment: "Variable" },
  { icon: Users, title: "Community Building", desc: "Welcome new members, facilitate discussions, and build relationships within the movement.", commitment: "2\u20134 hours/week" },
]

export default function VolunteerPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.4) 0%, transparent 50%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Take Action</span>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Volunteer With Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            Your time and talent can change the course of history. Join thousands of
            dedicated volunteers working to preserve Europe&rsquo;s future.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Opportunities</span>
            <h2 className="gold-accent-center relative mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Volunteer Roles
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-base text-gray-600">
              We have roles for every skill set and schedule. Whether you can give two hours
              a week or twenty, there&rsquo;s a place for you.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <div key={role.title} className="card group p-7">
                <role.icon className="h-8 w-8 text-gold-500" />
                <h3 className="mt-4 font-serif text-lg font-bold">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{role.desc}</p>
                <div className="mt-4 inline-block rounded bg-navy-50 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-wider text-navy-600">
                  {role.commitment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign-up form */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Get Started</span>
            <h2 className="gold-accent-center relative mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Register as a Volunteer
            </h2>
          </div>
          <form className="mt-12 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="form-input" required />
              <input type="text" placeholder="Last name" className="form-input" required />
            </div>
            <input type="email" placeholder="Email address" className="form-input" required />
            <input type="tel" placeholder="Phone number (optional)" className="form-input" />
            <div className="grid grid-cols-2 gap-4">
              <select className="form-input text-gray-500" required>
                <option value="">Country</option>
                <option>Austria</option><option>Belgium</option><option>France</option>
                <option>Germany</option><option>Italy</option><option>Netherlands</option>
                <option>Poland</option><option>Spain</option><option>Sweden</option>
                <option>Other EU Country</option>
              </select>
              <input type="text" placeholder="City" className="form-input" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                Which roles interest you? (select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {roles.map((r) => (
                  <label key={r.title} className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" className="h-3.5 w-3.5 rounded accent-gold-400" />
                    {r.title}
                  </label>
                ))}
              </div>
            </div>
            <textarea
              placeholder="Tell us about yourself and why you want to volunteer (optional)"
              rows={4}
              className="form-input resize-none"
            />
            <label className="flex items-start gap-2 text-xs text-gray-500">
              <input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 rounded accent-gold-400" />
              <span>
                I agree to the <Link href="/privacy" className="text-gold-500 underline">privacy policy</Link> and
                consent to being contacted about volunteer opportunities.
              </span>
            </label>
            <button type="submit" className="btn-primary w-full">
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Prefer Another Way to Help?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Every contribution matters, whether it&rsquo;s your signature, your donation, or your time.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/petition" className="btn-primary">Sign the Petition</Link>
            <Link href="/donate" className="btn-secondary">Donate</Link>
          </div>
        </div>
      </section>
    </>
  )
}
