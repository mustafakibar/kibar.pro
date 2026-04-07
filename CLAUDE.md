# kibar.pro refresh

You are working on `kibar.pro`, my personal portfolio website.

## Objective

Modernize the entire project end-to-end for a senior full-stack developer portfolio. Improve both code quality and visual quality. Keep the result clean, fast, premium, maintainable, and production-ready.

## Core rules

- Scan the entire project before making major decisions.
- All code, naming, file names, component names, commit-style notes, and UI text must be in English.
- Do not add unnecessary comments.
- Keep implementations simple, explicit, and maintainable.
- Apply best practices based on the actual stack, language, and libraries used in the repo.
- Remove dead code, duplicate code, unused files, unused folders, unused components, unused assets, and unused dependencies.
- Fix grammar, wording, clarity, and consistency across all visible content.
- Preserve what is genuinely strong, but do not keep outdated structure or weak UX just because it already exists.

## Current status

Final professional polish complete. Plausible swapped for free Vercel Analytics + Speed Insights, all Twitter/X removed, a11y baseline wired, dead code purged, copy/grammar tightened, JSON-LD expanded with WebSite schema. `bun run build` green (10 routes, 102 kB shared JS).

## Next steps

- None — project is shipping-ready.

## Completed

- Analytics swap: removed Plausible (paid) — deleted `components/Analytics/`, `PLAUSIBLE_*` env vars, and Plausible CSP allowance. Added `@vercel/analytics` + `@vercel/speed-insights` (free on Vercel Hobby), mounted in root layout, no extra CSP host needed (same-origin `/_vercel/insights`). `connect-src` adds `vitals.vercel-insights.com`.
- Twitter/X full removal: `metadata.twitter` block, `Contact` X icon entry, `lib/icons.ts` `FaXTwitter`/`SocialX` exports — all gone. Verified zero residual references.
- A11y: Header burger button gets `aria-label`/`aria-expanded`/`aria-controls`, `<nav id="primary-navigation" aria-label="Primary">`. `RepoIcon` is now an `<a>` with `aria-label`, focus ring, and proper `rel`. `Contact` icons get `aria-label`. `Heading` component now renders `<h2>` (semantic). `NavItem` cleaned to single Link with `aria-current`, focus-visible ring. `TagItem` converted to `<button>` with focus ring. `prefers-reduced-motion` global guard added to `globals.css`.
- Copy & visual: Hero headline now `<h1>`, sentence tightened (no "from API to UI" double-dash); `HeroWithLoveSection` gerund-consistent ("Shipping/Crafting/Building/Designing"); Footer rewritten as `Crafted with ❤ by Mustafa Kibar · © {year}` with dynamic year, no bracket hack; About `<h1>` softened to "Hi 👋 I'm Mustafa Kibar"; consistent empty states (`No projects to show yet.` / `No credentials to show yet.`).
- SEO: explicit `metadata` with canonical on `/`. JSON-LD expanded to `@graph` with both `Person` and `WebSite` schemas.
- Dead code purge: deleted `components/ThemeSwitchButton/`, `components/Project/ProjectView/`, `lib/data/getCertificates.ts` (page now imports `CERTIFICATE_ITEMS` directly). Removed `openInNewTab`, `shuffle`, `asyncTimeout` from `lib/utils.ts`. Removed `Moon`/`Sun`/`SunMoon` icon exports (theme switcher gone). Dropped `.html.light` SVG pattern from `globals.css` and unused `light` viewport entries (project is `forcedTheme="dark"`).
- Theme consistency: `viewport.themeColor: '#0a0a0a'`, `colorScheme: 'dark'`. Removed commented `ThemeSwitchButton` slot from `Header`.
- Performance: Hero `<ProfileImage priority>` for LCP. Removed redundant `AnimatePresence` wrapper around the single-fade Hero motion.
- About page: rewrote intro block — proper `<h1>`, semantic paragraph stack, dropped `<br>` spacing hack, increased section gaps (gap-16/24), added subtle top border between intro and Education/Environment grid, bumped body opacity for readability.
- Per-route OG image variants for `/about`, `/projects`, `/certificates`. Shared rendering helper in `app/_og/og-template.tsx` (eyebrow + title + subtitle template), keeping each route file ~10 lines.
- Polished `ShowcaseContainer` hover state: subtle `-translate-y-0.5` lift, `ring-1`, primary-tinted shadow, 300ms ease-out. Removed leftover `hover:gap-8` from earlier experiments.
- Added dynamic Open Graph image route at `app/opengraph-image.tsx` (1200×630, edge runtime, gradient + brand layout).
- Refined Header: replaced state-flag shadow + opacity tween with a single backdrop-blur layer whose opacity is bound to scrollYProgress, sleeker entrance (-16y, 0.5s easeOut), border-bottom only when scrolled or menu open. Removed unused `AnimatePresence` mount thrash on the wrapper.
- Migrated CSP to a strict, nonce-based policy via `middleware.ts`. Each HTML response gets a fresh `nonce`, propagated through `x-nonce` request header. Layout reads it via `headers()` and applies it to JSON-LD. `script-src` now uses `'strict-dynamic'` with the nonce in production; dev keeps `'unsafe-eval'` for HMR. Removed CSP from `next.config.ts` to avoid duplication.
- Replaced inline base64 blob `blurDataURL` placeholders in `TurkeyFlagImage.tsx` and About page `desk` image with constants in `lib/constants/image.ts`.
- Migrated `package.json` lint script from deprecated `next lint` to direct `eslint .`. Added `lint:fix` script. Added `ignores` block in `eslint.config.mjs` (`.next`, `node_modules`, `next-env.d.ts`, `public`, `.husky`, `bun.lock`).
- Standardized barrel `index.ts` files (`AnimatedItemWrapper`, `Footer`, `ProfileImage`, `Tag`, `Nav`, `RepoIcon`) to single-line `export … from` form.
- Fixed `RepoIconPros` typo → `RepoIconProps`.
- Replaced `setIsMenuOpen.bind(this, …)` and `onItemClicked?.bind(this, …)` with arrow callbacks in `Header.tsx` and `NavItems.tsx`.
- Simplified Hero entrance motion: dropped `AnimatePresence` variants for a single subtle fade-in (0.6s easeOut).
- Branded `app/not-found.tsx` and `app/error.tsx` with friendly copy, robots noindex on 404, retry/back-to-home actions, error digest reference.
- Added baseline Content-Security-Policy header in `next.config.ts` (default-src 'self', frame-ancestors 'none', object-src 'none', restricted connect-src to api.github.com, upgrade-insecure-requests).
- Confirmed `react-icons` already uses per-icon subpath imports (tree-shake friendly).
- Per-route `metadata` (title, description, OG, canonical) for `/about`, `/projects`, `/certificates`.
- Rewrote About copy and Projects page empty state.
- Added JSON-LD `Person` schema in root layout `<head>`.
- Removed unused UI primitives (`carousel.tsx`, `drawer.tsx`, `tooltip.tsx`).
- Removed unused dependencies: `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-tooltip`, `embla-carousel-react`, `vaul` (17 transitive packages dropped).
- Verified `bun run build` (10 routes, prerendered, 102 kB shared JS).
- Audited repo; identified broken imports from the in-progress refactor.
- Added full Next.js Metadata API config in `app/layout.tsx` (title template, OG, Twitter, robots, keywords, canonical, viewport, themeColor).
- Added `app/sitemap.ts` and `app/robots.ts` using `env.SITE_URL`.
- Hardened `next.config.ts`: HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, disabled `poweredByHeader`, set `reactStrictMode`, added `images.remotePatterns` + AVIF/WebP formats.
- Rewrote Hero copy and landing section titles ("Selected Work", "Credentials") in a senior full-stack voice.
- Fixed broken type imports across `Footer`, `ProfileImage`, `TurkeyFlagImage`, `Tag/TagItem`, `Tag/TagItems`, `typography/*`, `NavItems` (removed duplicate type declarations, dead `..` barrel imports, and `enabled` filter referencing a removed field).
- Rewrote `README.md` to match the new stack, structure, env vars, scripts, and security story.

## Progress tracking

Keep this file short. Maintain only these sections:

- `Current status`
- `Next steps`
- `Completed`

Update them during the work so the session can continue safely after interruption.

## Output expectations

Make the project feel like a high-quality, modern, premium engineer portfolio with strong code standards.

Before finishing:

1. run a final cleanup pass
2. run a final security and consistency pass
3. update `README.md` to reflect the new structure, stack, scripts, and usage
4. summarize all important changes clearly and briefly
