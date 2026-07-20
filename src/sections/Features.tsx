import { Reveal } from "@/components/Reveal"
import { Check } from "lucide-react"

type Feature = {
  eyebrow: string
  title: [string, string] // [plain, italic clay accent]
  bullets: string[]
  image: string
  alt: string
}

const FEATURES: Feature[] = [
  {
    eyebrow: "Habit Anchors",
    title: ["Set it once,", "it holds you."],
    bullets: [
      "Tie one goal to a real time and a real place.",
      "Arrive, and distractions switch off. Leave, and they come back on.",
      "An anchor is a place as well as a clock — geofenced, with your own radius and days.",
    ],
    image: "/screenshots/03-anchors.jpg",
    alt: "ReclaimOn Habit Anchor setup screen, anchoring a goal to a time and a geofenced place with a radius and app blocklist",
  },
  {
    eyebrow: "Shielding that speaks up",
    title: ["The scroll", "stops here."],
    bullets: [
      "The moment you drift, ReclaimOn shields the app and asks what matters more.",
      "No bypass button — quitting early means naming a reason and typing your goal.",
      "The pull to switch usually passes in a minute.",
    ],
    image: "/screenshots/02-shielding.jpg",
    alt: "ReclaimOn shield screen on a dark background asking whether anything in the blocked app is more important than the goal",
  },
  {
    eyebrow: "Progress & Streaks",
    title: ["Momentum", "you can see."],
    bullets: [
      "Every minute lands against a weekly goal.",
      "The number on your home screen is what you put in, not what you resisted.",
      "Streaks, best days, and shield-hit trends keep the story honest.",
    ],
    image: "/screenshots/04-progress.jpg",
    alt: "ReclaimOn progress screen with weekly targets, a streak calendar, best day, and shield-hit trend charts",
  },
  {
    eyebrow: "End every session",
    title: ["Make it count,", "every time."],
    bullets: [
      "Two honest questions after each session — that's the whole checkout.",
      "“Drained” and “Nearly quit” are real answers, and they teach the coach.",
      "Counted time you didn't earn? Say so and take it back.",
    ],
    image: "/screenshots/05-session.jpg",
    alt: "ReclaimOn post-session checkout asking how you feel and how hard it was to stay on task, with an optional note",
  },
  {
    eyebrow: "Focus Pacts",
    title: ["Stay on,", "together."],
    bullets: [
      "Make a pact with a friend and keep each other switched on.",
      "Check-ins and shared streaks, synced privately through your own iCloud.",
      "A friend checking in, no coach required — joining a pact is always free.",
    ],
    image: "/screenshots/06-pacts.jpg",
    alt: "ReclaimOn Focus Pacts screen showing an accountability pact with a friend, check-ins, and a shared streak",
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-cream py-24 md:py-32" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-clay">Features</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="features-heading"
              className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl"
            >
              Built to hold the line, <em className="italic text-clay">kindly</em>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 space-y-24 md:space-y-32">
          {FEATURES.map((feature, i) => {
            const flip = i % 2 === 1
            return (
              <div
                key={feature.eyebrow}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <Reveal className={flip ? "md:order-2" : ""}>
                  <p className="eyebrow text-clay">{feature.eyebrow}</p>
                  <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
                    {feature.title[0]} <em className="italic text-clay">{feature.title[1]}</em>
                  </h3>
                  <ul className="mt-6 space-y-3.5">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/15">
                          <Check className="h-3 w-3 text-sage" aria-hidden="true" />
                        </span>
                        <span className="font-sans text-base leading-relaxed text-text-secondary">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={120} className={flip ? "md:order-1" : ""}>
                  <div className="mx-auto max-w-[300px] rounded-[2.2rem] border border-ink/10 bg-paper p-3 shadow-warm">
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      width={1284}
                      height={2778}
                      loading="lazy"
                      className="w-full rounded-[1.7rem]"
                    />
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
