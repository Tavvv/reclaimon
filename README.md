# ReclaimOn — Marketing Website

Marketing site for **ReclaimOn**, an iPhone + iPad app (iOS 17+) by Ohh Wow Labs that anchors
goals to a real time and place, shields distracting apps via Apple's Screen Time API, and counts
every minute you reclaim.

## Stack

- Vite 7 + React 19 + TypeScript
- Tailwind CSS 3.4 + shadcn/ui (pre-installed components)
- Fonts: Instrument Serif (display) + Hanken Grotesk (UI), via Google Fonts
- Scroll-reveal: lightweight IntersectionObserver wrapper (`src/components/Reveal.tsx`), no
  animation dependency

## Develop

```bash
npm install
npm run dev      # dev server on http://localhost:3000
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
```

## App Store URL

All download CTAs point to a single constant in **`src/config.ts`**:

```ts
// TODO: replace with the real App Store URL once approved
export const APP_STORE_URL = "https://apps.apple.com/app/reclaimon"
```

Swap that one value once the app is approved — every button on the page uses it.

## Structure

- `index.html` — SEO meta, Open Graph / Twitter cards, JSON-LD (MobileApplication, Organization,
  FAQPage). The FAQPage JSON-LD mirrors the visible FAQ answers in `src/sections/Faq.tsx`
  verbatim — edit both together.
- `src/pages/Home.tsx` — assembles the single-page layout
- `src/sections/` — Nav, Hero, Problem, HowItWorks, Features, Extras, Pricing, Faq, FinalCta,
  Footer
- `public/screenshots/` — App Store marketing screenshots used in the feature showcase
- `public/privacy.html` — privacy policy (linked in the footer)
- `public/robots.txt`, `public/sitemap.xml`, `public/favicon.svg`

## Deploy

`npm run build` produces a fully static `dist/` — host it on any static provider (Cloudflare
Pages, Netlify, Vercel, S3 + CDN, …) over **HTTPS** at `https://www.reclaimon.com/`.

After deploying:

1. Verify `https://www.reclaimon.com/sitemap.xml` and `/robots.txt` resolve.
2. Submit the sitemap in Google Search Console.
3. Confirm the canonical URL and `og:*` tags match the final domain.
