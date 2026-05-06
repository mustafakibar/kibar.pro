# kibar.pro

Personal portfolio of **Mustafa KiBAR** — senior full-stack engineer based in Istanbul.

Live: [kibar.pro](https://kibar.pro)

## Stack

- **Framework:** Next.js 15 (App Router, React Server Components, Turbopack)
- **UI:** React 19, Tailwind CSS v4, OKLCH design tokens, lightweight shadcn/ui-style primitives
- **Motion:** [`motion`](https://motion.dev) (Framer Motion successor) + [`lenis`](https://lenis.darkroom.engineering) for smooth scroll
- **Content:** MDX for notes, [Shiki](https://shiki.style) for syntax highlighting (custom luxe theme)
- **Analytics:** Vercel Analytics + Speed Insights (privacy-friendly)
- **Tooling:** TypeScript 5, ESLint 9, Prettier, Husky, lint-staged, commitlint
- **Compiler:** React Compiler (experimental)
- **Package manager:** Bun (`bun.lock` checked in)

## Highlights

- **Brand-locked wordmark.** `KıBAR` + animated gold dot, in sync with the `k.` site monogram (shared `<AnimatedDot>` primitive). Mustafa subtitle in italic at three-quarters scale.
- **Premium interactions.** Custom cursor with lagged ring, magnetic socials, 3D card tilt with glare, hero parallax, scroll-driven heading reveal mask + animated accent line.
- **Ambient chrome.** Diagonal moiré + cursor-following gold halo on inner pages, gold-dot grid on home, fixed vertical brand stamp on the right edge across every page.
- **Cookie-persisted views.** Grid ↔ list toggle on Projects, Certificates, and Notes with cookie-driven SSR — no flash on first paint.
- **Composable layout.** Single `<PageShell>` with shared header / toolbar / content slots, unified `<ViewToggle>`, dedupe of three list page wrappers.
- **Considered motion.** All animations respect `prefers-reduced-motion`, easings tokenised in `lib/tokens.ts`, AnimatePresence between layouts.
- **A11y baseline.** Semantic headings, focus rings, ARIA labels, native `title` + custom CSS tooltips on truncated text, skip-to-main link.

## Project structure

```
app/                       App Router routes
  layout.tsx               Root layout, metadata, fonts, chrome wiring
  page.tsx                 Home (hero + selected work + credentials + reach out)
  about/                   Bio, portrait, stack, education, stats
  projects/                GitHub-driven project list (grid/list toggle)
  certificates/            Credential gallery (grid/list toggle)
  notes/                   MDX notes + GitHub Gist feed (grid/list toggle)
  contact/                 Email + socials with magnetic interactions
  uses/                    Tools and workshop
  sitemap.ts robots.ts     Generators
components/
  brand/                   Wordmark and synced animated dot
  chrome/                  SiteHeader, SiteFooter, ScrollProgress, SmoothScroll,
                           CursorTracker, CustomCursor, AmbientBackground,
                           SideStamp, InteractionGuards, CommandPalette
  layout/                  Container, Grid, PageShell, ChapterHead, ViewAllLink
  motion/                  RevealOnView, Marquee, Magnetic, Tilt, GoldSweep
  ui/                      Button, Card, Skeleton, ViewToggle
  feedback/                EmptyState, ErrorState, LoadingCard, Counter
  typography/              Display, Heading, Subhead, Body, Caption, Mono, Eyebrow
  about/ certificates/     Page-scoped components
  contact/ home/ notes/
  projects/ uses/ tag/
  timeline/ media/
hooks/                     Reusable React hooks (cursor, view preference, etc.)
lib/
  constants/               Paths, headers, image and cache-tag constants
  data/                    Server-only data fetchers (cached)
  github.ts                GitHub API client
  notes.ts                 MDX loading + reading-time estimator
  tokens.ts                Motion duration / easing / stagger tokens
  viewCookie.ts            Shared view cookie keys + helpers
  viewPreference.ts        Server-only cookie reader (`server-only`)
  utils.ts                 Shared utilities (cn, ...)
content/notes/             MDX-authored notes
public/                    Static assets (avatars, certificates, workspace)
middleware.ts              Path-aware redirects + per-request CSP nonce
next.config.ts             Security headers, image config, React Compiler
```

## Getting started

Requirements: Node.js 20+ and [Bun](https://bun.sh) (or npm/pnpm).

```bash
bun install
cp .env.example .env.local   # then fill in values
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See [`.env.example`](./.env.example).

| Variable               | Required | Purpose                                              |
| ---------------------- | -------- | ---------------------------------------------------- |
| `GITHUB_USERNAME`      | optional | GitHub user whose repos populate the projects page   |
| `GITHUB_API_KEY`       | optional | PAT to raise GitHub API rate limits                  |
| `GITHUB_API_VER`       | optional | GitHub API version (defaults to `2022-11-28`)        |
| `NEXT_PUBLIC_SITE_URL` | optional | Canonical site URL (defaults to `https://kibar.pro`) |

## Scripts

| Script               | Description                     |
| -------------------- | ------------------------------- |
| `bun run dev`        | Start dev server with Turbopack |
| `bun run build`      | Production build                |
| `bun run start`      | Run production build            |
| `bun run lint`       | ESLint                          |
| `bun run typecheck`  | `tsc --noEmit`                  |
| `bun run format`     | Prettier check                  |
| `bun run format:fix` | Prettier write                  |
| `bun run analyze`    | Bundle analyzer                 |

## Security & quality

- Strict, nonce-based Content-Security-Policy generated per request in `middleware.ts` (uses `'strict-dynamic'` in production, `'unsafe-eval'` in dev for HMR).
- Security headers (HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy, X-Content-Type-Options) configured in `next.config.ts`.
- `poweredByHeader` disabled.
- Server-only data fetchers marked with `'server-only'`.
- Optimized images via `next/image` with allow-listed remote patterns and AVIF/WebP.
- Full Metadata API + per-route OG images, sitemap, robots, JSON-LD (`Person` + `WebSite`).
- Husky + lint-staged + commitlint enforce conventional commits and formatting.

## License

[MIT](./LICENSE)

## Contact

[mustafa@kibar.pro](mailto:mustafa@kibar.pro)
