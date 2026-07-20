import { CONTACT_EMAIL, PRIVACY_URL } from "@/config"

export default function Footer() {
  return (
    <footer className="bg-ink py-12" aria-label="Site footer">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center md:flex-row md:justify-between md:text-left md:px-8">
        <div>
          <p className="font-sans text-lg font-bold text-cream">
            Reclaim<span className="text-clay-bright">On</span>
          </p>
          <p className="mt-1 font-sans text-sm text-text-muted">© 2026 Ohh Wow Labs</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href={PRIVACY_URL}
                className="font-sans text-sm text-paper/70 transition-colors hover:text-clay-bright"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-sans text-sm text-paper/70 transition-colors hover:text-clay-bright"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-5 text-center font-sans text-xs text-text-muted md:px-8 md:text-left">
        ReclaimOn is currently awaiting App Store review.
      </p>
    </footer>
  )
}
