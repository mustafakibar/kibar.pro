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

Modernization pass complete. Strict nonce-based CSP, full SEO, branded error pages, dependency cleanup, ESLint-CLI migration, image-constant cleanup — all done. `bun run typecheck`, `bun run lint`, `bun run build` all green. Routes are now dynamic (`ƒ`) due to per-request nonce; caching still active via `unstable_cache`.

## Next steps

1. Optional: privacy-friendly analytics (Plausible/Umami) with CSP allow-list.
2. Optional: per-route OG image variants (about, projects, certificates).
3. Optional: revisit Showcase card hover/reveal motion.

## Completed

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
