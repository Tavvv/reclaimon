import { Reveal } from "@/components/Reveal"
import { HeartPulse, Activity, LayoutGrid, Newspaper, BellRing, Lock } from "lucide-react"

const EXTRAS = [
  {
    icon: HeartPulse,
    title: "Apple Health",
    text: "Workouts and mindful minutes from other apps count automatically — read-only, always.",
  },
  {
    icon: Activity,
    title: "Live Activity",
    text: "A running session on your Lock Screen and in the Dynamic Island.",
  },
  {
    icon: LayoutGrid,
    title: "Widgets",
    text: "Home Screen and Lock Screen, so the number is always one glance away.",
  },
  {
    icon: Newspaper,
    title: "Weekly Digest",
    text: "How the week actually felt, every Sunday at 18:00.",
  },
  {
    icon: BellRing,
    title: "Smart nudges",
    text: "Arrive somewhere and get a gentle “Want to read?” — never a lecture.",
  },
  {
    icon: Lock,
    title: "Privacy first",
    text: "No account, no servers, no tracking. Ever.",
  },
]

export default function Extras() {
  return (
    <section className="bg-paper py-24 md:py-32" aria-labelledby="extras-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-clay">Everything else</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="extras-heading"
              className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl"
            >
              The quiet <em className="italic text-clay">details</em>.
            </h2>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXTRAS.map((extra, i) => (
            <Reveal as="li" key={extra.title} delay={(i % 3) * 100}>
              <div className="h-full rounded-2xl border border-ink/10 bg-cream p-7 transition-shadow hover:shadow-warm-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay/10">
                  <extra.icon className="h-5 w-5 text-clay" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-sans text-lg font-bold text-ink">{extra.title}</h3>
                <p className="mt-2 font-sans text-base leading-relaxed text-text-secondary">
                  {extra.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
