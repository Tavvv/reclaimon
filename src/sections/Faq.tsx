import { Reveal } from "@/components/Reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// NOTE: these Q&As are mirrored verbatim in the FAQPage JSON-LD in index.html.
// If you edit one, edit the other.
const FAQS = [
  {
    q: "What is ReclaimOn?",
    a: "ReclaimOn is an iPhone and iPad app that helps you reclaim time from distracting apps. You pick a goal, anchor it to a real time and a real place, and ReclaimOn shields the apps that pull you away for that window — every focused minute counts toward a weekly target.",
  },
  {
    q: "How is ReclaimOn different from other app blockers?",
    a: "Most blockers only count the time you resisted. ReclaimOn anchors one goal to a real time and a real place, so shields switch on when you arrive and off when you leave — and it counts the minutes you actually put in. Honest post-session reflections replace streak guilt with coach insights about what is working.",
  },
  {
    q: "Is ReclaimOn free?",
    a: "Yes — the full app is free for 21 days, the time it takes to build a habit, with no card and no account. After that you can stay on the free-forever tier (1 goal, 2 anchors, app shielding, joining Focus Pacts, and a Home Screen widget) or upgrade to ReclaimOn+ for $5.99/month or $29.99/year.",
  },
  {
    q: "Can ReclaimOn see which apps I block or how I use my phone?",
    a: "No. Apple's Screen Time API returns opaque tokens, so ReclaimOn can't see which apps you block or anything about your usage. Everything stays on your device — there is no account, no analytics, and no ads.",
  },
  {
    q: "What happens after the 21-day free trial?",
    a: "Nothing is deleted. You keep 1 goal and 2 anchors free forever, with app shielding, the ability to join Focus Pacts, and a small Home Screen widget. If you want unlimited goals and anchors, Focus Pact creation, the Weekly Digest, coach insights, Apple Health sync, Live Activity, and full history and trends, you can upgrade to ReclaimOn+.",
  },
  {
    q: "Does ReclaimOn work with Apple Health and other apps?",
    a: "Yes. With ReclaimOn+, Apple Health sync is read-only: workouts and mindful minutes logged in other apps like Strava, Calm, or Headspace count toward matching goals automatically. ReclaimOn never writes to Apple Health.",
  },
  {
    q: "Can I use ReclaimOn with a friend?",
    a: "Yes — Focus Pacts let you make an accountability or do-it-together pact with a friend, with check-ins and an optional shared streak. Creating a pact is a ReclaimOn+ feature, but joining a pact is always free.",
  },
]

export default function Faq() {
  return (
    <section id="faq" className="bg-paper py-24 md:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <Reveal>
            <p className="eyebrow text-clay">FAQ</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="faq-heading"
              className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl"
            >
              Honest <em className="italic text-clay">answers</em>.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <Accordion type="single" collapsible className="mt-12">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="border-b border-ink/10"
              >
                <AccordionTrigger className="py-5 text-left font-sans text-lg font-semibold text-ink hover:text-clay hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-base leading-relaxed text-text-secondary">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
