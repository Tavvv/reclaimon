import { APP_STORE_URL } from "@/config"
import { cn } from "@/lib/utils"

type AppStoreButtonProps = {
  label?: string
  className?: string
  variant?: "clay" | "light" | "outline-dark"
}

/** Shared App Store CTA used by every download button on the page. */
export function AppStoreButton({
  label = "Download on the App Store",
  className,
  variant = "clay",
}: AppStoreButtonProps) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — ReclaimOn on the App Store`}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 font-sans text-base font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "clay" &&
          "bg-clay text-paper shadow-warm-sm hover:bg-clay-bright hover:shadow-warm focus-visible:outline-clay",
        variant === "light" &&
          "bg-paper text-ink hover:bg-cream focus-visible:outline-paper",
        variant === "outline-dark" &&
          "border border-ink/20 text-ink hover:border-ink/50 focus-visible:outline-ink",
        className,
      )}
    >
      <AppleIcon className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </a>
  )
}

export function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.72 1.13-4.72 2.86-2.01 3.49-.51 8.66 1.45 11.5.96 1.39 2.1 2.95 3.6 2.89 1.45-.06 2-.93 3.75-.93s2.25.93 3.78.9c1.56-.03 2.55-1.41 3.5-2.8 1.1-1.62 1.56-3.19 1.58-3.27-.03-.02-3.04-1.17-3.09-4.59zM14.16 4.06c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.38 1.74-.74.86-1.39 2.23-1.22 3.55 1.29.1 2.6-.65 3.41-1.63z" />
    </svg>
  )
}
