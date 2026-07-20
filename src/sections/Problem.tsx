import { Reveal } from "@/components/Reveal"

export default function Problem() {
  return (
    <section className="bg-ink py-24 md:py-32" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="eyebrow text-clay-bright">The problem</p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            id="problem-heading"
            className="mt-5 font-serif text-4xl leading-tight tracking-tight text-cream sm:text-5xl md:text-6xl"
          >
            The feed took your <em className="italic text-clay-bright">attention</em>.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-7 max-w-2xl font-sans text-lg leading-relaxed text-text-muted md:text-xl">
            This is where you switch it back — one thing that matters, starting today. No guilt, no
            lectures. ReclaimOn doesn&rsquo;t just block distractions. It turns that time into
            something you can see.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
