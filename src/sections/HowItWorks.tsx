import { Reveal } from "@/components/Reveal"
import { Target, MapPin, TrendingUp } from "lucide-react"

const STEPS = [
  {
    icon: Target,
    title: "Pick a goal",
    text: "Read more, move more, learn the language — start with the one thing that matters to you.",
  },
  {
    icon: MapPin,
    title: "Anchor it to real life",
    text: "Tie the goal to a real time and a real place. Arrive, and distracting apps switch off. Leave, and they come back.",
  },
  {
    icon: TrendingUp,
    title: "Watch it add up",
    text: "Every shielded minute counts toward your weekly target — and the streaks, trends, and digest show it growing.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper py-24 md:py-32" aria-labelledby="how-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-clay">How it works</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="how-heading"
              className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl"
            >
              One goal. One place. One <em className="italic text-clay">time</em>.
            </h2>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120}>
              <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-cream p-8 shadow-warm-sm">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-5xl italic text-clay/30">0{i + 1}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay/10">
                    <step.icon className="h-5 w-5 text-clay" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-6 font-sans text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-text-secondary">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200}>
          <p className="mt-12 text-center font-serif text-2xl italic text-ink/70 md:text-3xl">
            &ldquo;You see the time you put in, not the time you resisted.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  )
}
