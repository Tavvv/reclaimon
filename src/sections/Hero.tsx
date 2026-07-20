import { Reveal } from "@/components/Reveal"
import { AppStoreButton } from "@/components/AppStoreButton"
import { MapPin, ShieldCheck } from "lucide-react"

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-28 pb-20 md:pt-40 md:pb-28">
      {/* soft warm gradient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-clay/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div>
          <Reveal>
            <p className="eyebrow text-clay">Your time, adding back up</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Get your <em className="italic text-clay">time back</em>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-text-secondary md:text-xl">
              ReclaimOn anchors one goal to a real time and a real place, blocks the apps that pull
              you away, and counts every minute you win back.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <AppStoreButton />
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-ink/20 px-7 py-3.5 font-sans text-base font-semibold text-ink transition-colors hover:border-clay hover:text-clay"
              >
                See how it works
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-6 font-sans text-sm text-text-muted">
              Free for 21 days · No card · No account · Your data never leaves your iPhone
            </p>
          </Reveal>
        </div>

        {/* Pure-CSS iPhone mock echoing the app's dark home screen */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-[320px]">
          <div className="relative">
            <div
              className="relative mx-auto aspect-[9/19] w-full rounded-[3rem] border-[10px] border-ink bg-ink shadow-warm-lg"
              role="img"
              aria-label="ReclaimOn home screen showing 210 minutes reclaimed and the Nightly Reading anchor switching on at 21:30"
            >
              {/* notch */}
              <div className="absolute left-1/2 top-2.5 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
              {/* screen */}
              <div className="flex h-full flex-col rounded-[2.4rem] bg-ink-card px-6 pb-7 pt-14 text-paper">
                {/* status bar */}
                <div className="flex items-center justify-between font-sans text-[11px] font-semibold text-paper/80">
                  <span>9:41</span>
                  <span className="flex items-center gap-1" aria-hidden="true">
                    <span className="inline-block h-2 w-3 rounded-[2px] bg-paper/80" />
                    <span className="inline-block h-2 w-3 rounded-[2px] bg-paper/80" />
                    <span className="inline-block h-2 w-4 rounded-[2px] bg-paper/80" />
                  </span>
                </div>

                <p className="mt-8 font-serif text-2xl italic text-paper/90">You&rsquo;re on.</p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-serif text-7xl leading-none text-clay-bright">210</span>
                  <span className="font-sans text-sm font-medium text-paper/70">min back</span>
                </div>

                <div className="mt-8">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/50">
                    Today&rsquo;s goals
                  </p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink">
                    <div className="h-full w-[70%] rounded-full bg-clay" />
                  </div>
                </div>

                <div className="mt-auto rounded-2xl bg-ink p-4 ring-1 ring-paper/10">
                  <p className="font-sans text-[13px] leading-snug text-paper/85">
                    <span className="font-semibold text-paper">Nightly Reading</span> switches on at{" "}
                    <span className="text-clay-bright">21:30</span>
                  </p>
                </div>
              </div>
            </div>

            {/* floating badges */}
            <div className="absolute -left-6 top-24 hidden animate-float items-center gap-2 rounded-full bg-paper px-4 py-2 shadow-warm sm:flex">
              <ShieldCheck className="h-4 w-4 text-sage" aria-hidden="true" />
              <span className="font-sans text-xs font-semibold text-ink">App shielding on</span>
            </div>
            <div
              className="absolute -right-4 bottom-28 hidden animate-float items-center gap-2 rounded-full bg-paper px-4 py-2 shadow-warm sm:flex"
              style={{ animationDelay: "1.2s" }}
            >
              <MapPin className="h-4 w-4 text-clay" aria-hidden="true" />
              <span className="font-sans text-xs font-semibold text-ink">9:30 PM · Home</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
