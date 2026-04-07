# kibar.pro

Personal portfolio of **Mustafa Kibar** — senior full-stack engineer based in Istanbul.

Live: [kibar.pro](https://kibar.pro)

## Stack

- **Framework:** Next.js 15 (App Router, React Server Components, Turbopack)
- **UI:** React 19, Tailwind CSS v4, lightweight shadcn/ui-style primitives
- **Motion:** [`motion`](https://motion.dev) (Framer Motion successor)
- **Analytics:** Vercel Analytics + Speed Insights (free, privacy-friendly)
- **Tooling:** TypeScript 5, ESLint 9, Prettier, Husky, lint-staged, commitlint
- **Compiler:** React Compiler (experimental)
- **Package manager:** Bun (`bun.lock` checked in)

## Project structure

```
app/                   App Router routes (home, about, projects, certificates)
  layout.tsx           Root layout, metadata, fonts, providers
  sitemap.ts           Sitemap generator
  robots.ts            robots.txt generator
components/            Feature components and ui/ primitives
env/                   Typed environment variable access
hooks/                 Reusable React hooks
lib/
  constants/           Paths, headers, image and cache-tag constants
  data/                Server-only data fetchers (cached)
  github.ts            GitHub API client
  utils.ts             Shared utilities (cn, ...)
public/                Static assets
middleware.ts          Path-aware redirects + request headers
next.config.ts         Security headers, image config, React Compiler
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

## Security & quality

- Strict, nonce-based Content-Security-Policy generated per request in `middleware.ts` (uses `'strict-dynamic'` in production, `'unsafe-eval'` in dev for HMR).
- Security headers (HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy, X-Content-Type-Options) configured in `next.config.ts`.
- `poweredByHeader` disabled.
- Server-only data fetchers marked with `'server-only'`.
- Optimized images via `next/image` with allow-listed remote patterns and AVIF/WebP.
- Full Metadata API + per-route OG images, sitemap, robots, JSON-LD (`Person` + `WebSite`).
- A11y baseline: semantic headings, focus rings, ARIA labels on interactive controls, `prefers-reduced-motion` guard.
- Husky + lint-staged + commitlint enforce conventional commits and formatting.

## License

[MIT](./LICENSE)

## Contact

[mustafa@kibar.pro](mailto:mustafa@kibar.pro)
