import { Reveal } from "@/components/Reveal"
import { AppStoreButton } from "@/components/AppStoreButton"

export default function FinalCta() {
  return (
    <section className="bg-clay py-24 md:py-32" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2
            id="cta-heading"
            className="font-serif text-5xl leading-tight tracking-tight text-paper sm:text-6xl"
          >
            Turn it back <em className="italic">on</em>.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-relaxed text-paper/85 md:text-xl">
            A calmer relationship with your phone starts with one goal, one place, one time.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-10">
            <AppStoreButton variant="light" />
            <p className="mt-5 font-sans text-sm text-paper/70">
              Free for 21 days · No card · No account
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
