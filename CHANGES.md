# MangoStack site — v5 Glass redesign + build migration

Branch: `v5-glass`. Everything below is in this branch. Review, push, flip one
GitHub setting, and it ships.

## How to ship it

1. Push the branch and open a PR (or push straight to main if you're happy):
   ```
   git push origin v5-glass
   ```
2. In the repo: **Settings → Pages → Build and deployment → Source → "GitHub Actions"**
   (one-time switch away from branch-based deployment).
3. Merge to `main`. The included workflow (`.github/workflows/deploy.yml`)
   builds and deploys automatically on every push to main.

To preview locally before pushing: `npm install && npm run dev` (instant dev
server) or `npm run build && npm run preview` (the exact production output).

## 1. Build migration (Vite + prerender) — the foundation

**Before:** every page loaded React 18 *development* builds + Babel Standalone
(~5 MB of JS), transpiled JSX in the browser on every visit, showed a blank
page until JS ran, and served **zero content to search engines** — crawlers and
link previews saw an empty `<div id="root">`.

**Now:**
- Vite production build; total JS ~200 kB before gzip (~25× smaller).
- Every page is **prerendered to static HTML** at build time — full content for
  crawlers, instant first paint — then hydrated client-side. `scripts/prerender.mjs`
  doubles as a smoke test: the build fails if any page throws or renders empty.
- All 16 `.jsx` files converted to proper ES modules under `src/`
  (`src/shared.jsx`, `src/product-mocks.jsx`, `src/pages/*`, `src/entry/*`).
  Old root-level `.jsx` files removed.
- Static files (`assets/`, `CNAME`, `robots.txt`, `sitemap.xml`, the nine
  legacy redirect stubs) moved to `public/` — copied verbatim into the build.
- No more React dev-build error internals exposed in the console.

## 2. Glass design system

All in `styles.css` — design tokens edited in `:root`, plus an appended,
clearly-marked **"v5 — GLASS LAYER"** block (nothing above it deleted, so the
diff is easy to read and easy to revert piecewise).

- **Brand typography** (now matches the showcase PDF / letterhead system):
  Archivo for display & headings, Hanken Grotesk for body, JetBrains Mono for
  eyebrows, pills, and diagram labels. Poppins removed.
- **Glass surfaces**: three-tier translucent fills with `backdrop-filter`
  blur/saturate, 1 px borders, top-edge inner highlight, layered shadows —
  applied to motion cards, proof cards, engine items, finline cards, the Pelvar
  flow diagram, form fields, nav dropdown, and the mobile drawer. Solid
  fallbacks for browsers without backdrop-filter support.
- **Atmosphere**: soft radial light (orange/amber + a cool counter-tone) behind
  card sections so the glass has something to refract; film-grain overlay
  (inline SVG, zero network cost) per the brand system.
- **Floating pill nav**: detached from the top edge, fully rounded, glassed.
- **Pop details**: cursor-following spotlight on glass cards, gradient
  hairlines between sections, glow shadows on the primary CTA and status
  pills, glass secondary buttons, dot-grid fade behind the hero headline,
  **animated beam flow on the Pelvar diagram** (the agent visibly pulls from
  the four entities).
- **Scroll reveals** on all sections (IntersectionObserver, JS-armed — with JS
  off, everything stays visible; respects `prefers-reduced-motion`).
- **Cream sections converted to elevated dark glass** — one coherent dark
  language across the site (the engagement-phases section on Operating was the
  main one).

## 3. Messaging changes (homepage) — review these

| Where | Before | After | Why |
|---|---|---|---|
| Hero H1 | "We deploy senior operators into your hardest problems — and engineer what we learn into software." (4 lines) | **"Senior operators on your hardest problems. Software built from what they learn."** | Outcome first; halves the parsing cost. Tagline below unchanged. |
| Under hero CTAs | — | "Built by operators who have led transformation and operations across 14 markets in payments, fintech, and financial services." | The page had zero track-record specificity. Company-voice, no founder mention, all true. |
| Section eyebrow | THE TWO MOTIONS | WHAT WE DO | Internal strategy language → buyer language. |
| Section eyebrow | OPERATING · THE ENGINE | OPERATING | Same. |
| Flywheel section | Full homepage section | **Removed from homepage**; one-line pointer added under the two motion cards: "The two feed each other — and each turn compounds. How the studio model works →" | The studio-model story sells the business model, not the buyer outcome. It lives in full on the Approach page, where it already existed. |
| Proof strip | 3 cards + Workforce Atlas as a footnote | **4 cards (2×2)** — Workforce Atlas promoted to a full card: "An AI workforce audit for UK accounting firms — capacity unlocked, never headcount reduced." (LAUNCHING) | Atlas is the launching product and the productised consulting entry point; a footnote under-sold the nearest-term revenue line. |

Pelvar stays positioned as the flagship throughout, as the site already had it.

## 4. Housekeeping

- Deleted `scraps/` (internal test screenshots) and `uploads/` (personal phone
  screenshots) — both were publicly browsable on GitHub; neither was referenced
  by any page.
- Added `.gitignore` (node_modules, dist).
- Umami analytics, schema.org JSON-LD, OG tags, redirect stubs, robots, and
  sitemap all preserved unchanged.

## What I could not verify

I validated that every page builds, prerenders with full content, and throws no
errors — but I could not run a browser, so **do a visual pass before merging**
(`npm run dev`, click through all 14 pages, check mobile). Most likely places
to need a nudge: nav spacing at small widths, and the converted
engagement-phases section on Operating.
