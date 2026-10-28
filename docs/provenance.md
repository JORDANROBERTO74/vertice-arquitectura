# Vértice Arquitectura — Provenance & Compliance Ledger

This ledger records the origin, brand transformation, and asset provenance for **Vértice Arquitectura**.

## 1. Project Background & Transformation

- **Original Working Directory:** `E:\Projects\landing\next\minimal-architecture-firm`
- **Duplicate Removed:** `minimal-architecture-landing` (identical variant, deleted)
- **Rebuilt Project Name:** `vertice-arquitectura`
- **Final Repository:** `https://github.com/JORDANROBERTO74/vertice-arquitectura`
- **Live Production URL:** `https://verticearquitectura.vercel.app`
- **Mode:** Change pass over the existing layout, raised to production standard.

The original header brand ("Línea Norte") was discarded: an active repository of the same name already exists under the account, and reusing it would create a naming collision.

## 2. Brand & Identity

- **Brand:** Vértice Arquitectura
- **Sector:** Contemporary architecture studio — residential, cultural and commercial work.
- **Visual system:** Warm paper (`#fbfaf8`), near-black ink (`#121312`), stone border (`#e3e0d8`), muted clay (`#f1efe9`).
- **Typography:** Geist (headlines and body) with Geist Mono for the coordinate and label microcopy, self-hosted via `next/font/google`.
- **Locale strategy:** Typed bilingual copy (`en`, `es`) on `/[locale]` routes, negotiated from `Accept-Language` and persisted in the `vertice.locale` cookie.

## 3. Asset & Visual Provenance

- **Photography:** Six images generated for this project with a text-to-image model (`folio-flux`) and stored under `public/images/editorial` and `public/images/projects`. No Unsplash, no stock library, no third-party photographer is represented.
- **Generated set:**
  - `editorial/hero.jpg` — concrete and glass tower, overcast sky.
  - `editorial/break.jpg` — limestone and bronze frame material detail.
  - `projects/project-01.jpg` — timber and glass residence at dusk.
  - `projects/project-02.jpg` — whitewashed colonnade pavilion.
  - `projects/project-03.jpg` — stone-finned commercial tower.
  - `projects/project-04.jpg` — civic centre reflected in still water.
- **People and marks:** No recognisable individuals, no faces, no logos, no trademarked products appear in any asset.
- **Brand mark:** Custom SVG (`src/app/icon.svg`) — an inverted chevron drawn from three strokes.
- **Runtime dependencies:** Zero remote font networks, image hosts, or CDNs. All media is served from the repository; fonts are emitted at build time.

### Discarded reference assets

The template shipped with `images.unsplash.com` URLs. Those photographs were downloaded for evaluation, found to be unlicensed stock and partially unrelated to the subject matter (one resolved to a children's toy photograph), and were deleted. They are not present in this repository or its history.

## 4. Copy & Localisation

- All English copy was rewritten; the Spanish dictionary is an original translation, not machine output pasted verbatim.
- Project names, locations and years are fictional and do not reference real commissions.
- The pull quote is attributed to Juhani Pallasmaa as a published author; the surrounding editorial framing is original.

## 5. Architectural Verification

- Next.js 16.4.3 App Router with Turbopack; React 19.2.4; strict TypeScript.
- Static generation for `/en` and `/es`; `/` returns `307` to the negotiated locale.
- `pnpm typecheck`, `pnpm lint` and `pnpm build` complete without errors or warnings.
- `robots.txt`, multilingual `sitemap.xml`, `hreflang` alternates and a generated 1200x630 OpenGraph card are in place.
- Scroll-reveal is progressive: content is rendered in the document at all times and only the entrance transition depends on `IntersectionObserver`.
