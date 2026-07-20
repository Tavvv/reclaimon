import { useState } from "react"
import { Reveal } from "@/components/Reveal"
import { AppStoreButton } from "@/components/AppStoreButton"
import { Check } from "lucide-react"

const FREE_FEATURES = [
  "1 goal",
  "2 anchors",
  "App shielding",
  "Join Focus Pacts",
  "Home Screen widget",
]

const PLUS_FEATURES = [
  "Unlimited goals & anchors",
  "Create Focus Pacts",
  "Weekly Digest",
  "Coach insights",
  "Apple Health sync",
  "Live Activity",
  "Full history & trends",
  "All widgets",
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="bg-ink py-24 md:py-32" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl bg-clay px-6 py-4 text-center shadow-warm">
            <p className="font-sans text-sm font-semibold text-paper md:text-base">
              Free for 21 days — the time it takes to build a habit. No card, no account.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 text-center">
          <Reveal>
            <p className="eyebrow text-clay-bright">Pricing</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="pricing-heading"
              className="mt-4 font-serif text-4xl leading-tight tracking-tight text-cream sm:text-5xl"
            >
              Start free. Stay if it <em className="italic text-clay-bright">works</em>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Free forever */}
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl bg-ink-card p-8 ring-1 ring-paper/10 md:p-10">
              <h3 className="font-sans text-xl font-bold text-cream">Free forever</h3>
              <p className="mt-1 font-sans text-sm text-text-muted">After your 21 days</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-serif text-6xl text-cream">$0</span>
              </p>
              <ul className="mt-8 space-y-3">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                    <span className="font-sans text-base text-paper/80">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <AppStoreButton label="Download Free" variant="light" className="w-full" />
              </div>
            </div>
          </Reveal>

          {/* ReclaimOn+ */}
          <Reveal delay={120}>
            <div className="relative flex h-full flex-col rounded-3xl bg-ink-card p-8 ring-2 ring-clay md:p-10">
              <span className="absolute -top-3.5 left-8 rounded-full bg-clay px-4 py-1 font-sans text-xs font-bold uppercase tracking-wider text-paper">
                Most popular
              </span>
              <h3 className="font-sans text-xl font-bold text-cream">
                ReclaimOn<span className="text-clay-bright">+</span>
              </h3>
              <p className="mt-1 font-sans text-sm text-text-muted">Everything, unlimited</p>

              {/* billing toggle */}
              <div
                className="mt-6 inline-flex self-start rounded-full bg-ink p-1 ring-1 ring-paper/10"
                role="group"
                aria-label="Billing period"
              >
                <button
                  type="button"
                  onClick={() => setYearly(false)}
                  aria-pressed={!yearly}
                  className={`rounded-full px-4 py-1.5 font-sans text-sm font-semibold transition-colors ${
                    !yearly ? "bg-clay text-paper" : "text-paper/60 hover:text-paper"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setYearly(true)}
                  aria-pressed={yearly}
                  className={`rounded-full px-4 py-1.5 font-sans text-sm font-semibold transition-colors ${
                    yearly ? "bg-clay text-paper" : "text-paper/60 hover:text-paper"
                  }`}
                >
                  Yearly · save 58%
                </button>
              </div>

              <p className="mt-5 flex items-baseline gap-2">
                <span className="font-serif text-6xl text-cream">
                  {yearly ? "$29.99" : "$5.99"}
                </span>
                <span className="font-sans text-base text-text-muted">
                  {yearly ? "/year (~$2.50/mo)" : "/month"}
                </span>
              </p>

              <ul className="mt-8 space-y-3">
                {PLUS_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-clay-bright" aria-hidden="true" />
                    <span className="font-sans text-base text-paper/80">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <AppStoreButton label="Start your 21 days free" className="w-full" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
