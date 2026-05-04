# kibar.pro · v2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild kibar.pro end-to-end as a Premium Dark Luxe editorial portfolio on the `kibar.pro-v2` branch, in nine sequential phases that culminate in a clean rebase-merge to `main`.

**Architecture:** Next.js 15 App Router with React Server Components by default; OKLCH design tokens defined in Tailwind v4 `@theme`; type-driven hero with gold-sweep wordmark; editorial-narrow layout grammar with `§` chapter markers; MDX content pipeline with build-time Shiki highlighting for `/notes`; View Transitions API for navigation; lucide-react icons; motion (Framer Motion successor) for JS-driven animations; reduced-motion-first.

**Tech Stack:** Next.js 15, React 19, TypeScript 5, Tailwind CSS v4, motion, Fraunces + Geist (Google Fonts), lucide-react, next-mdx-remote, shiki, gray-matter, reading-time, cmdk, class-variance-authority, clsx, tailwind-merge, Bun.

**Spec source of truth:** `docs/specs/2026-05-04-kibar-pro-v2-design.md`. The spec governs design intent; this plan governs the executable steps. If they disagree, fix the plan to match the spec.

**Branch:** All work happens on `kibar.pro-v2`. Main is untouched until Phase 9.

**Brand Covenant reminder (binding for every commit, comment, and rendered string):**
- Wordmark: `KiBAR` (only the `i` is lowercase, italic).
- Monogram: `k.` (italic Fraunces `k` + crimson period).
- Dark only.
- English only.
- **No reference to AI, "AI-assisted", "Claude", or similar in any commit message, code comment, README, PR description, or visible artifact.**

---

## Conventions Used Throughout This Plan

- **File paths** are absolute from repo root (e.g. `app/page.tsx`, `components/typography/Display/Display.tsx`).
- **Commands** assume the repo root as cwd unless otherwise stated.
- **Verification** at the end of every task means: `bun run typecheck && bun run lint && bun run build` all pass with no new warnings. Where a task adds verifiable behaviour beyond compile, an additional manual smoke step is included.
- **Commits** use conventional commit style: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `style:`, `perf:`, `test:`. Each task ends with one commit (sometimes multiple; explicit when so).
- **TDD** is applied where it makes sense: data utilities (notes index, frontmatter parsing, MDX compile), env helpers, and any pure logic. Visual components are not unit-tested in this plan; their verification is type-check + build + manual local preview at phase boundaries.
- **Each task is self-contained.** A subagent reading just one task should have everything it needs.

---

## File Structure (post-v2)

The full layout the codebase will land at by the end of Phase 9.

```
app/
  layout.tsx                    Root layout, metadata, fonts, structured data
  template.tsx                  View Transitions wrapper (NEW)
  page.tsx                      Home
  globals.css                   Tailwind v4 import + @theme tokens (REWRITTEN)
  fonts.ts                      Fraunces + Geist + Geist Mono (REWRITTEN)
  error.tsx                     500
  not-found.tsx                 404
  sitemap.ts                    Sitemap generator (extended)
  robots.ts                     robots.txt
  opengraph-image.tsx           Home OG (REDESIGNED)
  about/
    page.tsx
    opengraph-image.tsx
  projects/
    page.tsx
    loading.tsx
    opengraph-image.tsx
  certificates/
    page.tsx
    loading.tsx
    opengraph-image.tsx
  contact/                      NEW
    page.tsx
    opengraph-image.tsx
  uses/                         NEW
    page.tsx
    opengraph-image.tsx
  notes/                        NEW
    page.tsx                    Notes index
    opengraph-image.tsx
    [slug]/
      page.tsx                  Note detail
      opengraph-image.tsx
  _og/
    og-template.tsx             Shared OG layout primitive

components/
  chrome/
    SiteHeader/
    SiteFooter/
    CommandPalette/
    ScrollProgress/
    FooterStamp/
    nav/
      NavLink/
      NavList/
  home/
    HomeHero/
    SkillsIndex/
    SelectedWorkList/
    CredentialsList/
  about/
    Biography/
    PortraitBand/
  projects/
    ProjectCard/
    SourceLink/
  certificates/
    CertificateCard/
  contact/
    ContactList/
    EmailRow/
    SocialRow/
    StatusPill/
  uses/
    UsesIndex/
    DeskBand/
  notes/
    NoteCard/
    NoteContent/
    Callout/
    CodeBlock/
    Demo/
  layout/
    Container/
    ChapterHead/
    ChapterBand/
    Grid/
    SectionViewer/
    ViewAllLink/
  motion/
    RevealOnView/
    GoldSweep/
    PageTransition/
  media/
    Portrait/
  tag/
    Tag/
    TagList/
  timeline/
    Timeline/
  typography/
    Display/
    Heading/
    Subhead/
    Body/
    Caption/
    Eyebrow/
    Mono/
  feedback/
    LoadingCard/
    EmptyState/
    ErrorState/
  ui/
    button.tsx                  KEPT (shadcn primitive)
    card.tsx                    KEPT
    skeleton.tsx                KEPT

content/
  notes/                        NEW — MDX content
    <slug>.mdx
    ...

env/
  index.ts                      Existing
  utils.ts                      Existing

hooks/
  useReducedMotion.ts           NEW
  useCopyToClipboard.ts         NEW
  useScrollProgress.ts          NEW (extracted from ScrollProgress)

lib/
  utils.ts                      cn() only (getRandomInt deleted)
  icons.ts                      REWRITTEN (lucide re-exports)
  tokens.ts                     NEW — JS motion tokens
  github.ts                     Existing
  notes.ts                      NEW — content/notes/*.mdx index
  shiki.ts                      NEW — highlighter singleton
  shiki/
    kibar-luxe.json             NEW — custom Shiki theme
  data/
    getProjects.ts              Existing
    certificates.data.ts        RENAMED from components/Certificates/constant.ts
    nav.data.ts                 RENAMED from components/Nav/NavItems/constants.ts
    uses.data.ts                NEW — workshop gear inventory
    skills.data.ts              NEW — skills index data
    timeline.data.ts            NEW — about page timeline
    socials.data.ts             NEW — contact socials
  constants/
    paths.ts                    Existing (extended)
    headers.ts                  Existing
    image.ts                    Existing (extended for /uses)
    cache-tags.ts               Existing

middleware.ts                   Existing (no functional changes)
next.config.ts                  Existing (extended for MDX)
tsconfig.json                   Existing
eslint.config.mjs               Existing
postcss.config.mjs              Existing
prettier.config.mjs             Existing
commitlint.config.ts            Existing
package.json                    UPDATED — deps churn
```

The `components/Certificates/`, `components/Project/`, `components/Hero/`, `components/Showcase/`, `components/Skills/`, `components/Parallax/`, `components/Footer/`, `components/Header/`, `components/Nav/`, `components/Tag/`, `components/Timeline/`, `components/Contact/`, `components/RepoIcon/`, `components/AnimatedItemWrapper/`, `components/GridWrapper/`, `components/MyLoading/`, `components/ProfileImage/`, `components/SectionHeading/`, `components/TopProgressBar/`, `components/TurkeyFlagImage/`, `components/ViewAllButton/`, and `components/typography/` directories are all replaced or restructured under the new layout above.

---

## Phase Map

| # | Phase | Output | Dep |
|---|---|---|---|
| 0 | Foundation | Build green, tokens defined, deps churn done | — |
| 1 | Primitives | Domain-agnostic component library | 0 |
| 2 | Home | `/` works end-to-end | 1 |
| 3 | About | `/about` works end-to-end | 1 |
| 4 | Projects | `/projects` works end-to-end | 1 |
| 5 | Certificates | `/certificates` works end-to-end | 1 |
| 6 | New routes | `/contact`, `/uses`, `/notes/*` work | 1, 5 |
| 7 | Polish | View Transitions, motion polish, OG variants | 6 |
| 8 | QA & Performance | Lighthouse 100×4, a11y verified, mobile QA | 7 |
| 9 | Merge | Squash-rebase to `main`, tag, deploy | 8 |

Each phase ends with a verifiable deliverable AND a manual local preview gate. Do not advance to the next phase until the user has personally previewed the result of the current phase locally and approved it.

---

## Phase 0 — Foundation

**Goal:** Replace fonts, design tokens, dependency baseline, and shared utilities. End state: project type-checks, lints, builds, but the site appears visually broken (existing pages reference deleted icon/component identifiers) — that is intended; pages get rebuilt from Phase 1 onward.

**Phase deliverable:** A green `bun run build` on `kibar.pro-v2` with the new tokens, fonts, and dependency tree in place. Bundle analyzer baseline captured.

---

### Task 0.1: Snapshot the bundle baseline before any churn

**Goal:** Record the current bundle size for after-comparison.

**Files:**
- Read-only: `package.json`, the existing site as it stands at branch start.

**Steps:**

- [ ] **Step 1: Confirm the working branch**

```bash
git branch --show-current
```
Expected: `kibar.pro-v2`. If not, `git checkout kibar.pro-v2` before continuing.

- [ ] **Step 2: Install current deps**

```bash
bun install
```

- [ ] **Step 3: Run the bundle analyzer**

```bash
ANALYZE=true bun run build
```

- [ ] **Step 4: Save the baseline summary**

Record (in chat or notes) the totals reported in the build output: First Load JS shared by all, route-by-route First Load JS, and total chunks. This is the "before" reference for Phase 8's perf gate.

- [ ] **Step 5: Commit nothing**

This task is read-only. No commit.

---

### Task 0.2: Replace Google Fonts in `app/fonts.ts`

**Goal:** Drop `Rowdies`, `Inconsolata`, `Lilita_One`, `Outfit`. Add `Fraunces`, `Geist Sans`, `Geist Mono`. Single source of truth for typography.

**Files:**
- Modify: `app/fonts.ts`

**Steps:**

- [ ] **Step 1: Rewrite `app/fonts.ts`**

```ts
import { Fraunces, Geist, Geist_Mono } from 'next/font/google';

const displayFont = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz', 'SOFT'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const bodyFont = Geist({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
});

const monoFont = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono',
});

export { displayFont, bodyFont, monoFont };
```

- [ ] **Step 2: Verify**

```bash
bun run typecheck
```
Expected: no type errors related to fonts. Other errors elsewhere are expected at this stage and will be cleared by later tasks.

- [ ] **Step 3: Commit**

```bash
git add app/fonts.ts
git commit -m "refactor(fonts): replace four families with Fraunces + Geist + Geist Mono"
```

---

### Task 0.3: Update `app/layout.tsx` to apply the new font variables

**Goal:** The body element carries `--font-body` `--font-display` `--font-mono` CSS variables for use throughout the site. Drop the old `textFont.className` pattern.

**Files:**
- Modify: `app/layout.tsx:1-135`

**Steps:**

- [ ] **Step 1: Update imports and body element**

In `app/layout.tsx`, change:
```ts
import { textFont } from './fonts';
```
to:
```ts
import { bodyFont, displayFont, monoFont } from './fonts';
```

And change the body opening tag from:
```tsx
<body
  suppressHydrationWarning
  className={cn(
    '[&::-webkit-scrollbar-thumb]:bg-secondary [&::-webkit-scrollbar-thumb]:hover:bg-primary/80 bg-background text-foreground min-h-screen min-w-screen overflow-x-hidden scroll-smooth [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-s-full',
    textFont.className,
  )}>
```
to:
```tsx
<body
  suppressHydrationWarning
  className={cn(
    'bg-canvas text-ink min-h-screen min-w-full overflow-x-hidden font-body antialiased',
    bodyFont.variable,
    displayFont.variable,
    monoFont.variable,
  )}>
```

The custom scrollbar styling moves into `app/globals.css` in Task 0.5. Drop it from inline className here.

- [ ] **Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "refactor(layout): wire new font variables onto body"
```

---

### Task 0.4: Churn dependencies

**Goal:** Add new dependencies, remove dropped ones, install.

**Files:**
- Modify: `package.json`
- Modify: `bun.lock` (auto-updated by `bun install`)

**Steps:**

- [ ] **Step 1: Remove dropped packages**

```bash
bun remove react-type-animation react-icons
```

- [ ] **Step 2: Add new packages**

```bash
bun add lucide-react next-mdx-remote shiki gray-matter reading-time
```

- [ ] **Step 3: Verify install**

```bash
bun install
```
Expected: `bun.lock` updates without errors.

- [ ] **Step 4: Commit**

```bash
git add package.json bun.lock
git commit -m "chore(deps): swap react-icons/react-type-animation for lucide + mdx pipeline"
```

---

### Task 0.5: Rewrite `app/globals.css` with OKLCH `@theme` tokens

**Goal:** Replace the legacy HSL-split `:root` + `.dark` system with a single dark-only OKLCH palette and define all design tokens (color, spacing, type, motion, radius, layout) inside Tailwind v4's `@theme` block.

**Files:**
- Modify: `app/globals.css` (full rewrite)

**Steps:**

- [ ] **Step 1: Replace the entire contents of `app/globals.css`**

```css
@import 'tailwindcss';

/* ============================================================
   kibar.pro v2 — Premium Dark Luxe
   Single dark-only palette. OKLCH tokens. No light variant.
   ============================================================ */

@theme {
  /* Surfaces */
  --color-canvas:        oklch(0.09  0.012  35);
  --color-elevated:      oklch(0.13  0.018  30);
  --color-overlay:       oklch(0.06  0.010  30 / 0.85);
  --color-stage:         oklch(0.14  0.045  20);

  /* Ink (text) */
  --color-ink:           oklch(0.96  0.022  85);
  --color-ink-muted:     oklch(0.80  0.045  75);
  --color-ink-subtle:    oklch(0.58  0.045  70);
  --color-ink-faint:     oklch(0.40  0.030  65);

  /* Brand accents */
  --color-gold:          oklch(0.74  0.105  72);
  --color-gold-bright:   oklch(0.86  0.085  82);
  --color-gold-deep:     oklch(0.55  0.110  60);
  --color-crimson:       oklch(0.55  0.180  22);
  --color-crimson-deep:  oklch(0.34  0.150  22);

  /* Structure */
  --color-rule:          oklch(0.96  0.022  85 / 0.10);
  --color-rule-strong:   oklch(0.96  0.022  85 / 0.18);

  /* State */
  --color-success:       oklch(0.70  0.150 145);
  --color-warning:       oklch(0.78  0.140  82);
  --color-danger:        oklch(0.62  0.220  25);

  /* Glow */
  --color-glow-gold:     oklch(0.74  0.105  72 / 0.15);
  --color-glow-crimson:  oklch(0.55  0.180  22 / 0.18);

  /* Type families (read from variable fonts via app/layout.tsx) */
  --font-display: var(--font-display);
  --font-body:    var(--font-body);
  --font-mono:    var(--font-mono);

  /* Type scale */
  --text-xs:      0.6875rem;  /* 11 */
  --text-sm:      0.8125rem;  /* 13 */
  --text-base:    0.9375rem;  /* 15 */
  --text-md:      1.0625rem;  /* 17 */
  --text-lg:      1.25rem;    /* 20 */
  --text-xl:      1.625rem;   /* 26 */
  --text-2xl:     2.125rem;   /* 34 */
  --text-3xl:     2.75rem;    /* 44 */
  --text-4xl:     3.75rem;    /* 60 */

  /* Layout */
  --container-narrow: 680px;
  --container-wide:  1100px;

  /* Radius */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:  14px;

  /* Motion durations */
  --dur-instant:    80ms;
  --dur-fast:      150ms;
  --dur-normal:    220ms;
  --dur-slow:      360ms;
  --dur-hero:      720ms;
  --dur-cinematic: 1200ms;

  /* Easings */
  --ease-out:      cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);
  --ease-emphasis: cubic-bezier(0.32, 0.72, 0, 1);
}

@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    border-color: var(--color-rule);
  }

  html {
    background-color: var(--color-canvas);
    color: var(--color-ink);
    color-scheme: dark;
    font-family: var(--font-body, system-ui, sans-serif);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body {
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Scrollbar (kept from v1) */
  body::-webkit-scrollbar { width: 6px; }
  body::-webkit-scrollbar-thumb {
    background: var(--color-elevated);
    border-radius: 9999px;
  }
  body::-webkit-scrollbar-thumb:hover { background: var(--color-gold-deep); }

  ::selection {
    background: var(--color-gold);
    color: var(--color-canvas);
  }
}

@layer utilities {
  .container {
    margin-inline: auto;
    padding-inline: 1rem;
    max-width: var(--container-wide);
  }
  @media (min-width: 1400px) {
    .container { padding-inline: 6rem; }
  }

  /* Editorial-narrow column */
  .container-narrow {
    margin-inline: auto;
    padding-inline: 1rem;
    max-width: var(--container-narrow);
  }

  /* Brand gold sweep — used in wordmark, hero, monogram */
  .gold-sweep {
    background-image: linear-gradient(
      95deg,
      var(--color-ink) 0%,
      var(--color-gold) 60%,
      var(--color-ink) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  /* Background grain texture — kept from v1, dark-only variant */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    touch-action: none;
    opacity: 0.013;
    z-index: 999;
    background-color: var(--color-canvas);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23fefefe' fill-opacity='0.41' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1z'/%3E%3C/svg%3E");
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}
```

- [ ] **Step 2: Verify build**

```bash
bun run build
```
Expected: build succeeds (existing pages will fail to compile due to deleted icon imports — that's later tasks; if build fails purely on CSS, fix CSS now).

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "refactor(css): rewrite globals with OKLCH @theme tokens for v2"
```

---

### Task 0.6: Rewrite `lib/icons.ts` to re-export lucide icons

**Goal:** Single icon module returns lucide-react icons in the names the rest of the codebase will use. The shape stays similar to v1 to keep imports stable while we refactor.

**Files:**
- Modify: `lib/icons.ts` (full rewrite)

**Steps:**

- [ ] **Step 1: Replace contents of `lib/icons.ts`**

```ts
export {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  ChevronUpRight as ChevronUpRight,
  Circle,
  Code as CodeIcon,
  Command as CommandIcon,
  Copy,
  ExternalLink,
  FileText,
  Folder,
  Github,
  Gitlab,
  Heart as HeartIcon,
  Home as HomeIcon,
  Linkedin,
  Mail as Envelope,
  Menu as BurgerMenu,
  Milestone,
  Search,
  User as UserIcon,
  X as XIcon,
  X as BurgerMenuOpened,
  GraduationCap as AcademicCapIcon,
  Wrench as ToolboxIcon,
  Layers as SquareStack,
} from 'lucide-react';
```

- [ ] **Step 2: Verify type-check**

```bash
bun run typecheck
```
Expected: errors only in v1 files that referenced specific old icon names not mapped above. The mapping above covers every lucide alias used in v1 plus extras for v2.

- [ ] **Step 3: Commit**

```bash
git add lib/icons.ts
git commit -m "refactor(icons): replace react-icons with lucide-react re-exports"
```

---

### Task 0.7: Add `lib/tokens.ts` for JS-side motion constants

**Goal:** Numeric durations and easing curves accessible to motion-driven JS animations (typed `as const` so callers get string-literal types).

**Files:**
- Create: `lib/tokens.ts`

**Steps:**

- [ ] **Step 1: Create `lib/tokens.ts`**

```ts
/**
 * Motion tokens mirrored from globals.css for JS-driven animations.
 * Keep durations in sync with --dur-* CSS variables.
 */

export const duration = {
  instant: 0.08,
  fast: 0.15,
  normal: 0.22,
  slow: 0.36,
  hero: 0.72,
  cinematic: 1.2,
} as const;

export const easing = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
  emphasis: [0.32, 0.72, 0, 1],
} as const;

export const stagger = {
  default: 0.06,
  loose: 0.1,
} as const;
```

- [ ] **Step 2: Commit**

```bash
git add lib/tokens.ts
git commit -m "feat(tokens): add JS motion duration/easing constants"
```

---

### Task 0.8: Add `hooks/useReducedMotion.ts`

**Goal:** Single source for the reduced-motion media query that JS-driven animations check. SSR-safe (returns `false` on the server, syncs after mount).

**Files:**
- Create: `hooks/useReducedMotion.ts`

**Steps:**

- [ ] **Step 1: Write the hook**

```ts
'use client';

import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

const useReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const update = () => setReduced(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  return reduced;
};

export { useReducedMotion };
```

- [ ] **Step 2: Commit**

```bash
git add hooks/useReducedMotion.ts
git commit -m "feat(hooks): add useReducedMotion"
```

---

### Task 0.9: Drop `lib/utils.getRandomInt` (hydration risk)

**Goal:** Remove the `getRandomInt` helper that was used in `ParallaxSkills`'s default prop. Random in render = hydration mismatch hazard. The component is being deleted anyway in Phase 1.

**Files:**
- Modify: `lib/utils.ts`

**Steps:**

- [ ] **Step 1: Replace contents of `lib/utils.ts`**

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { cn };
```

- [ ] **Step 2: Verify type-check**

```bash
bun run typecheck
```
Expected: errors only where `getRandomInt` is referenced (currently `components/Skills/ParallaxSkills.tsx` only). Tolerated for now; that file is deleted in Phase 1.

- [ ] **Step 3: Commit**

```bash
git add lib/utils.ts
git commit -m "refactor(utils): drop getRandomInt (hydration risk; consumer being removed)"
```

---

### Task 0.10: Add `next.config.ts` MDX configuration

**Goal:** Allow `.mdx` files to be processed by Next.js for the `/notes` pipeline. Even though we use `next-mdx-remote` to render at request time, configuring the loader keeps door open for static `.mdx` files in app/ later.

**Files:**
- Modify: `next.config.ts`

**Steps:**

- [ ] **Step 1: Update `next.config.ts`**

Replace contents with:

```ts
import bundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    reactCompiler: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
    ],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default withBundleAnalyzer(nextConfig);
```

- [ ] **Step 2: Verify**

```bash
bun run typecheck
```
Expected: no new errors.

- [ ] **Step 3: Commit**

```bash
git add next.config.ts
git commit -m "chore(next): allow .mdx page extensions for /notes pipeline"
```

---

### Task 0.11: Phase 0 verification gate

**Goal:** Confirm the foundation is sound before moving to Phase 1.

**Steps:**

- [ ] **Step 1: Type-check**

```bash
bun run typecheck
```
Expected: errors only in v1 component files that import deleted symbols (e.g. `Showcase`, removed icon names from old patterns). Tolerated. Note them for Phase 1 cleanup.

- [ ] **Step 2: Lint**

```bash
bun run lint
```
Expected: similar tolerance — only errors from soon-to-be-removed components.

- [ ] **Step 3: Build is NOT expected to pass yet**

The site cannot build until Phase 1 replaces the broken imports. This is the ONLY phase where the build is allowed to fail. Document the failing imports for Phase 1.

- [ ] **Step 4: Local preview checkpoint (optional)**

If you want to verify the foundation visually, replace `app/page.tsx` temporarily with a placeholder:

```tsx
export default function Page() {
  return (
    <main className="container py-16">
      <h1 className="font-display text-4xl gold-sweep">K<em>i</em>BAR</h1>
      <p className="mt-4 font-body text-ink-muted">v2 foundation alive.</p>
    </main>
  );
}
```
Run `bun run dev`. The wordmark with gold sweep should render on the canvas color. Revert the placeholder before committing.

- [ ] **Step 5: Phase 0 closing commit**

```bash
git commit --allow-empty -m "chore(phase-0): foundation complete"
```

This is a marker commit for phase boundaries.

## Phase 1 — Primitives

**Goal:** Build the domain-agnostic component library that every page composes from. By the end of Phase 1 the new chrome (`SiteHeader`, `SiteFooter`, `ScrollProgress`, `CommandPalette`, `FooterStamp`) renders on every route, and all pages have placeholder bodies that compile cleanly.

**Phase deliverable:** Site builds, all 7 routes render with new chrome and a "Phase N coming next" placeholder body. No legacy components in `components/` (everything from v1 is deleted).

**Order matters:** Primitives are built bottom-up — typography → layout containers → motion → media → feedback → tag/timeline → chrome. Earlier primitives are imported by later ones.

---

### Task 1.1: Delete v1 component directories

**Goal:** Remove every legacy folder under `components/` except `ui/`.

**Files:**
- Delete: `components/AnimatedItemWrapper/`, `components/Certificates/`, `components/CommandPalette/` (rebuilt later in this phase), `components/Contact/`, `components/Footer/`, `components/GridWrapper/`, `components/Header/`, `components/Hero/`, `components/MyLoading/`, `components/Nav/`, `components/Parallax/`, `components/ProfileImage/`, `components/Project/`, `components/RepoIcon/`, `components/SectionHeading/`, `components/Showcase/`, `components/Skills/`, `components/Tag/`, `components/Timeline/`, `components/TopProgressBar/`, `components/TurkeyFlagImage/`, `components/typography/`, `components/ViewAllButton/`
- Delete: `hooks/useAnimationInView.ts`, `hooks/useAnimationOnHover.ts` (replaced by domain-specific hooks)

**Steps:**

- [ ] **Step 1: Remove component directories**

```bash
rm -rf \
  components/AnimatedItemWrapper \
  components/Certificates \
  components/CommandPalette \
  components/Contact \
  components/Footer \
  components/GridWrapper \
  components/Header \
  components/Hero \
  components/MyLoading \
  components/Nav \
  components/Parallax \
  components/ProfileImage \
  components/Project \
  components/RepoIcon \
  components/SectionHeading \
  components/Showcase \
  components/Skills \
  components/Tag \
  components/Timeline \
  components/TopProgressBar \
  components/TurkeyFlagImage \
  components/typography \
  components/ViewAllButton
```

- [ ] **Step 2: Remove old animation hooks**

```bash
rm hooks/useAnimationInView.ts hooks/useAnimationOnHover.ts
```

- [ ] **Step 3: Replace `app/page.tsx`, `app/about/page.tsx`, `app/projects/page.tsx`, `app/certificates/page.tsx` with placeholders**

For each file, replace the entire contents with:

```tsx
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' }, // adjust per route
};

const Page: NextPage = () => (
  <main className="container py-16">
    <p className="font-body text-ink-subtle">Page rebuilds in a later phase.</p>
  </main>
);

export default Page;
```

For each route, set `alternates.canonical` correctly: `/about`, `/projects`, `/certificates`, etc.

- [ ] **Step 4: Replace `app/layout.tsx` body content with a minimal shell**

In `app/layout.tsx`, change the body's children block from:

```tsx
<div className="flex min-h-screen min-w-screen flex-col">
  <TopProgressBar />
  <CommandPalette />
  <Header />
  <div className="container">{children}</div>
  <Footer />
</div>
```

to:

```tsx
<div className="flex min-h-screen min-w-full flex-col">
  {children}
</div>
```

And remove these now-stale imports from the file:

```ts
import { CommandPalette } from '@/components/CommandPalette';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { TopProgressBar } from '@/components/TopProgressBar';
```

- [ ] **Step 5: Type-check + build**

```bash
bun run typecheck && bun run build
```
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "refactor(components): clear v1 components and stub legacy routes"
```

---

### Task 1.2: Build `components/typography/*` primitives

**Goal:** Seven typographic primitives covering the brand's full type scale: `Display`, `Heading`, `Subhead`, `Body`, `Caption`, `Eyebrow`, `Mono`. Each is a thin server component with prop-controlled element (`as`).

**Files:**
- Create: `components/typography/Display/Display.tsx`, `components/typography/Display/index.ts`
- Create: `components/typography/Heading/Heading.tsx`, `components/typography/Heading/index.ts`
- Create: `components/typography/Subhead/Subhead.tsx`, `components/typography/Subhead/index.ts`
- Create: `components/typography/Body/Body.tsx`, `components/typography/Body/index.ts`
- Create: `components/typography/Caption/Caption.tsx`, `components/typography/Caption/index.ts`
- Create: `components/typography/Eyebrow/Eyebrow.tsx`, `components/typography/Eyebrow/index.ts`
- Create: `components/typography/Mono/Mono.tsx`, `components/typography/Mono/index.ts`
- Create: `components/typography/index.ts` (barrel)

**Steps:**

- [ ] **Step 1: Create `Display`**

`components/typography/Display/Display.tsx`:
```tsx
import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type DisplayProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  italic?: boolean;
  sweep?: boolean;
};

const Display = ({
  as: Tag = 'h1',
  children,
  className,
  italic = false,
  sweep = false,
}: DisplayProps) => (
  <Tag
    className={cn(
      'font-display text-4xl leading-[0.95] tracking-[-0.02em] md:text-[clamp(3rem,9vw,8.5rem)]',
      italic && 'italic',
      sweep && 'gold-sweep',
      className,
    )}
    style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}>
    {children}
  </Tag>
);

export { Display };
export type { DisplayProps };
```

`components/typography/Display/index.ts`:
```ts
export { Display, type DisplayProps } from './Display';
```

- [ ] **Step 2: Create `Heading`**

`components/typography/Heading/Heading.tsx`:
```tsx
import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type HeadingProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  italic?: boolean;
};

const Heading = ({
  as: Tag = 'h2',
  children,
  className,
  italic = false,
}: HeadingProps) => (
  <Tag
    className={cn(
      'font-display text-2xl leading-[1.05] tracking-[-0.015em] md:text-3xl',
      italic && 'italic',
      className,
    )}
    style={{ fontVariationSettings: "'opsz' 100, 'SOFT' 30" }}>
    {children}
  </Tag>
);

export { Heading };
export type { HeadingProps };
```

`components/typography/Heading/index.ts`:
```ts
export { Heading, type HeadingProps } from './Heading';
```

- [ ] **Step 3: Create `Subhead`**

`components/typography/Subhead/Subhead.tsx`:
```tsx
import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type SubheadProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

const Subhead = ({
  as: Tag = 'h3',
  children,
  className,
}: SubheadProps) => (
  <Tag
    className={cn(
      'font-display text-lg italic font-normal text-ink-muted leading-tight',
      className,
    )}>
    {children}
  </Tag>
);

export { Subhead };
export type { SubheadProps };
```

`components/typography/Subhead/index.ts`:
```ts
export { Subhead, type SubheadProps } from './Subhead';
```

- [ ] **Step 4: Create `Body`**

`components/typography/Body/Body.tsx`:
```tsx
import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type BodyProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg';
  muted?: boolean;
};

const sizes = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-md',
} as const;

const Body = ({
  as: Tag = 'p',
  children,
  className,
  size = 'base',
  muted = false,
}: BodyProps) => (
  <Tag
    className={cn(
      'font-body leading-[1.55]',
      sizes[size],
      muted ? 'text-ink-muted' : 'text-ink',
      className,
    )}>
    {children}
  </Tag>
);

export { Body };
export type { BodyProps };
```

`components/typography/Body/index.ts`:
```ts
export { Body, type BodyProps } from './Body';
```

- [ ] **Step 5: Create `Caption`**

`components/typography/Caption/Caption.tsx`:
```tsx
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type CaptionProps = {
  children: ReactNode;
  className?: string;
};

const Caption = ({ children, className }: CaptionProps) => (
  <p className={cn('font-body text-sm text-ink-subtle leading-[1.45]', className)}>
    {children}
  </p>
);

export { Caption };
export type { CaptionProps };
```

`components/typography/Caption/index.ts`:
```ts
export { Caption, type CaptionProps } from './Caption';
```

- [ ] **Step 6: Create `Eyebrow`**

`components/typography/Eyebrow/Eyebrow.tsx`:
```tsx
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

const Eyebrow = ({ children, className }: EyebrowProps) => (
  <p
    className={cn(
      'font-body text-xs uppercase text-gold tracking-[0.4em] font-medium',
      className,
    )}>
    {children}
  </p>
);

export { Eyebrow };
export type { EyebrowProps };
```

`components/typography/Eyebrow/index.ts`:
```ts
export { Eyebrow, type EyebrowProps } from './Eyebrow';
```

- [ ] **Step 7: Create `Mono`**

`components/typography/Mono/Mono.tsx`:
```tsx
import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type MonoProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

const Mono = ({ as: Tag = 'span', children, className }: MonoProps) => (
  <Tag className={cn('font-mono text-sm', className)}>{children}</Tag>
);

export { Mono };
export type { MonoProps };
```

`components/typography/Mono/index.ts`:
```ts
export { Mono, type MonoProps } from './Mono';
```

- [ ] **Step 8: Barrel re-export**

`components/typography/index.ts`:
```ts
export * from './Display';
export * from './Heading';
export * from './Subhead';
export * from './Body';
export * from './Caption';
export * from './Eyebrow';
export * from './Mono';
```

- [ ] **Step 9: Type-check & commit**

```bash
bun run typecheck
git add components/typography
git commit -m "feat(typography): add Display/Heading/Subhead/Body/Caption/Eyebrow/Mono primitives"
```

---

### Task 1.3: Build `components/layout/*` containers

**Goal:** Layout primitives — `Container`, `Grid`, `ChapterHead`, `ChapterBand`, `SectionViewer`, `ViewAllLink`. Compose pages without each page reinventing layout rules.

**Files:**
- Create: `components/layout/Container/Container.tsx` + `index.ts`
- Create: `components/layout/Grid/Grid.tsx` + `index.ts`
- Create: `components/layout/ChapterHead/ChapterHead.tsx` + `index.ts`
- Create: `components/layout/ChapterBand/ChapterBand.tsx` + `index.ts`
- Create: `components/layout/SectionViewer/SectionViewer.tsx` + `index.ts`
- Create: `components/layout/ViewAllLink/ViewAllLink.tsx` + `index.ts`
- Create: `components/layout/index.ts`

**Steps:**

- [ ] **Step 1: Create `Container`**

`components/layout/Container/Container.tsx`:
```tsx
import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  size?: 'narrow' | 'wide';
};

const Container = ({
  as: Tag = 'div',
  children,
  className,
  size = 'wide',
}: ContainerProps) => (
  <Tag
    className={cn(
      size === 'narrow' ? 'container-narrow' : 'container',
      className,
    )}>
    {children}
  </Tag>
);

export { Container };
export type { ContainerProps };
```

`components/layout/Container/index.ts`:
```ts
export { Container, type ContainerProps } from './Container';
```

- [ ] **Step 2: Create `Grid`**

`components/layout/Grid/Grid.tsx`:
```tsx
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type ColCount = 1 | 2 | 3;

type GridProps = {
  children: ReactNode;
  className?: string;
  cols?: ColCount | { sm?: 1 | 2; md?: ColCount; xl?: ColCount };
  gap?: 'sm' | 'md' | 'lg';
};

const gapClass = { sm: 'gap-4', md: 'gap-8', lg: 'gap-10' } as const;

const SM_CLASS: Record<1 | 2, string> = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
};

const MD_CLASS: Record<ColCount, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
};

const XL_CLASS: Record<ColCount, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
};

const Grid = ({ children, className, cols = 3, gap = 'md' }: GridProps) => {
  const classes =
    typeof cols === 'number'
      ? cn('grid grid-cols-1', MD_CLASS[cols])
      : cn(
          'grid grid-cols-1',
          cols.sm ? SM_CLASS[cols.sm] : '',
          cols.md ? MD_CLASS[cols.md] : '',
          cols.xl ? XL_CLASS[cols.xl] : '',
        );
  return (
    <div className={cn(classes, gapClass[gap], className)}>{children}</div>
  );
};

export { Grid };
export type { GridProps };
```

The static lookup tables matter: Tailwind v4's JIT scanner only picks up class names that appear literally in source. `md:grid-cols-${cols}` template strings get stripped from the build. The lookup tables ensure every potential class is present as a string literal in the file.

`components/layout/Grid/index.ts`:
```ts
export { Grid, type GridProps } from './Grid';
```

- [ ] **Step 3: Create `ChapterHead`**

`components/layout/ChapterHead/ChapterHead.tsx`:
```tsx
import { Eyebrow, Heading, Body } from '@/components/typography';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type ChapterHeadProps = {
  chapter: string; // e.g. "§ II — SELECTED WORK"
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: 'start' | 'center';
};

const ChapterHead = ({
  chapter,
  title,
  description,
  className,
  align = 'start',
}: ChapterHeadProps) => (
  <header
    className={cn(
      'flex flex-col gap-3',
      align === 'center' && 'items-center text-center',
      className,
    )}>
    <Eyebrow>{chapter}</Eyebrow>
    <Heading as="h1">{title}</Heading>
    {description && <Body muted size="lg" className="max-w-prose">{description}</Body>}
  </header>
);

export { ChapterHead };
export type { ChapterHeadProps };
```

`components/layout/ChapterHead/index.ts`:
```ts
export { ChapterHead, type ChapterHeadProps } from './ChapterHead';
```

- [ ] **Step 4: Create `ChapterBand`**

`components/layout/ChapterBand/ChapterBand.tsx`:
```tsx
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type ChapterBandProps = {
  children: ReactNode;
  className?: string;
};

const ChapterBand = ({ children, className }: ChapterBandProps) => (
  <section
    className={cn(
      'relative isolate overflow-hidden bg-stage py-16 md:py-24',
      'before:pointer-events-none before:absolute before:left-1/4 before:top-1/2 before:-z-10 before:h-[460px] before:w-[460px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-glow-gold before:blur-[130px]',
      'after:pointer-events-none after:absolute after:right-0 after:top-2/3 after:-z-10 after:h-[420px] after:w-[420px] after:translate-x-1/3 after:rounded-full after:bg-glow-crimson after:blur-[130px]',
      className,
    )}>
    {children}
  </section>
);

export { ChapterBand };
export type { ChapterBandProps };
```

`components/layout/ChapterBand/index.ts`:
```ts
export { ChapterBand, type ChapterBandProps } from './ChapterBand';
```

- [ ] **Step 5: Create `SectionViewer`**

`components/layout/SectionViewer/SectionViewer.tsx`:
```tsx
import { ChapterHead } from '@/components/layout/ChapterHead';
import { ViewAllLink } from '@/components/layout/ViewAllLink';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionViewerProps = {
  chapter: string;
  title: ReactNode;
  description?: ReactNode;
  viewAllHref?: string;
  viewAllLabel?: string;
  children: ReactNode;
  className?: string;
};

const SectionViewer = ({
  chapter,
  title,
  description,
  viewAllHref,
  viewAllLabel = 'View all',
  children,
  className,
}: SectionViewerProps) => (
  <section className={cn('flex flex-col gap-8', className)}>
    <div className="flex flex-wrap items-end justify-between gap-4">
      <ChapterHead chapter={chapter} title={title} description={description} />
      {viewAllHref && <ViewAllLink href={viewAllHref}>{viewAllLabel}</ViewAllLink>}
    </div>
    {children}
  </section>
);

export { SectionViewer };
export type { SectionViewerProps };
```

`components/layout/SectionViewer/index.ts`:
```ts
export { SectionViewer, type SectionViewerProps } from './SectionViewer';
```

- [ ] **Step 6: Create `ViewAllLink`**

`components/layout/ViewAllLink/ViewAllLink.tsx`:
```tsx
import { ChevronUpRight } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';

type ViewAllLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const ViewAllLink = ({ href, children, className }: ViewAllLinkProps) => (
  <Link
    href={href}
    className={cn(
      'group inline-flex items-center gap-1 text-sm text-ink-muted underline-offset-4 transition-colors duration-fast ease-out hover:text-gold',
      className,
    )}>
    <span>{children}</span>
    <ChevronUpRight
      className="size-4 transition-transform duration-normal ease-out group-hover:-rotate-12 group-hover:translate-x-1"
      strokeWidth={2}
    />
  </Link>
);

export { ViewAllLink };
export type { ViewAllLinkProps };
```

`components/layout/ViewAllLink/index.ts`:
```ts
export { ViewAllLink, type ViewAllLinkProps } from './ViewAllLink';
```

- [ ] **Step 7: Layout barrel**

`components/layout/index.ts`:
```ts
export * from './Container';
export * from './Grid';
export * from './ChapterHead';
export * from './ChapterBand';
export * from './SectionViewer';
export * from './ViewAllLink';
```

- [ ] **Step 8: Type-check & commit**

```bash
bun run typecheck
git add components/layout
git commit -m "feat(layout): add Container/Grid/ChapterHead/ChapterBand/SectionViewer/ViewAllLink"
```

---

### Task 1.4: Build `components/motion/*` primitives

**Goal:** `RevealOnView`, `GoldSweep`, `PageTransition`. JS motion primitives that respect reduced-motion.

**Files:**
- Create: `components/motion/RevealOnView/RevealOnView.tsx` + `index.ts`
- Create: `components/motion/GoldSweep/GoldSweep.tsx` + `index.ts`
- Create: `components/motion/PageTransition/PageTransition.tsx` + `index.ts`
- Create: `components/motion/index.ts`

**Steps:**

- [ ] **Step 1: Create `RevealOnView`**

`components/motion/RevealOnView/RevealOnView.tsx`:
```tsx
'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { duration, easing } from '@/lib/tokens';
import * as motion from 'motion/react-client';
import type { ReactNode } from 'react';

type RevealOnViewProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  once?: boolean;
};

const RevealOnView = ({
  children,
  delay = 0,
  className,
  y = 8,
  once = true,
}: RevealOnViewProps) => {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-10% 0px' }}
      transition={{ duration: duration.slow, delay, ease: easing.out }}>
      {children}
    </motion.div>
  );
};

export { RevealOnView };
export type { RevealOnViewProps };
```

`components/motion/RevealOnView/index.ts`:
```ts
export { RevealOnView, type RevealOnViewProps } from './RevealOnView';
```

- [ ] **Step 2: Create `GoldSweep`**

`components/motion/GoldSweep/GoldSweep.tsx`:
```tsx
'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { duration, easing } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';
import type { ReactNode } from 'react';

type GoldSweepProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Renders children with a gold-sweep gradient text fill that animates
 * left-to-right once on mount. Falls back to a static gold-sweep if
 * the user prefers reduced motion.
 */
const GoldSweep = ({ children, className, delay = 0 }: GoldSweepProps) => {
  const reduced = useReducedMotion();
  if (reduced) {
    return <span className={cn('gold-sweep', className)}>{children}</span>;
  }
  return (
    <motion.span
      className={cn('inline-block bg-clip-text text-transparent', className)}
      style={{
        backgroundImage:
          'linear-gradient(95deg, var(--color-ink) 0%, var(--color-gold-bright) 50%, var(--color-ink) 100%)',
        backgroundSize: '200% 100%',
        backgroundPosition: '100% 0%',
      }}
      initial={{ backgroundPosition: '100% 0%' }}
      animate={{ backgroundPosition: '0% 0%' }}
      transition={{ duration: duration.cinematic, delay, ease: easing.out }}>
      {children}
    </motion.span>
  );
};

export { GoldSweep };
export type { GoldSweepProps };
```

`components/motion/GoldSweep/index.ts`:
```ts
export { GoldSweep, type GoldSweepProps } from './GoldSweep';
```

- [ ] **Step 3: Create `PageTransition`**

`components/motion/PageTransition/PageTransition.tsx`:
```tsx
'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { duration, easing } from '@/lib/tokens';
import * as motion from 'motion/react-client';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.normal, ease: easing.out }}>
      {children}
    </motion.div>
  );
};

export { PageTransition };
export type { PageTransitionProps };
```

`components/motion/PageTransition/index.ts`:
```ts
export { PageTransition, type PageTransitionProps } from './PageTransition';
```

- [ ] **Step 4: Motion barrel**

`components/motion/index.ts`:
```ts
export * from './RevealOnView';
export * from './GoldSweep';
export * from './PageTransition';
```

- [ ] **Step 5: Type-check & commit**

```bash
bun run typecheck
git add components/motion
git commit -m "feat(motion): add RevealOnView, GoldSweep, PageTransition primitives"
```

---

### Task 1.5: Build `components/media/Portrait`

**Goal:** Wrapper around `next/image` with portrait-defaults (square, blur placeholder support, optional grayscale).

**Files:**
- Create: `components/media/Portrait/Portrait.tsx` + `index.ts`
- Create: `components/media/index.ts`

**Steps:**

- [ ] **Step 1: Create the component**

`components/media/Portrait/Portrait.tsx`:
```tsx
import { cn } from '@/lib/utils';
import Image from 'next/image';

type PortraitProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
  priority?: boolean;
  grayscale?: boolean;
  tint?: boolean;
  className?: string;
  sizes?: string;
};

const Portrait = ({
  src,
  alt,
  width = 512,
  height = 512,
  blurDataURL,
  priority = false,
  grayscale = false,
  tint = false,
  className,
  sizes = '(min-width: 1024px) 384px, 256px',
}: PortraitProps) => (
  <div className={cn('relative overflow-hidden', tint && 'after:absolute after:inset-0 after:bg-gold/10 after:mix-blend-overlay', className)}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}
      priority={priority}
      sizes={sizes}
      className={cn('h-full w-full object-cover', grayscale && 'grayscale')}
    />
  </div>
);

export { Portrait };
export type { PortraitProps };
```

`components/media/Portrait/index.ts`:
```ts
export { Portrait, type PortraitProps } from './Portrait';
```

`components/media/index.ts`:
```ts
export * from './Portrait';
```

- [ ] **Step 2: Type-check & commit**

```bash
bun run typecheck
git add components/media
git commit -m "feat(media): add Portrait primitive"
```

---

### Task 1.6: Build `components/feedback/*` (Loading/Empty/Error)

**Goal:** Standardised feedback states.

**Files:**
- Create: `components/feedback/LoadingCard/LoadingCard.tsx` + `index.ts`
- Create: `components/feedback/EmptyState/EmptyState.tsx` + `index.ts`
- Create: `components/feedback/ErrorState/ErrorState.tsx` + `index.ts`
- Create: `components/feedback/index.ts`

**Steps:**

- [ ] **Step 1: `LoadingCard`**

`components/feedback/LoadingCard/LoadingCard.tsx`:
```tsx
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

type LoadingCardProps = {
  className?: string;
  rows?: number;
};

const LoadingCard = ({ className, rows = 3 }: LoadingCardProps) => (
  <div
    className={cn(
      'flex flex-col gap-3 rounded-lg border border-rule bg-elevated p-5',
      className,
    )}
    aria-busy="true"
    aria-live="polite">
    <Skeleton className="h-5 w-3/5" />
    {Array.from({ length: rows }).map((_, i) => (
      <Skeleton key={i} className="h-3 w-full last:w-2/3" />
    ))}
  </div>
);

export { LoadingCard };
export type { LoadingCardProps };
```

`components/feedback/LoadingCard/index.ts`:
```ts
export { LoadingCard, type LoadingCardProps } from './LoadingCard';
```

- [ ] **Step 2: `EmptyState`**

`components/feedback/EmptyState/EmptyState.tsx`:
```tsx
import { Body } from '@/components/typography';
import { cn } from '@/lib/utils';

type EmptyStateProps = {
  message: string;
  className?: string;
};

const EmptyState = ({ message, className }: EmptyStateProps) => (
  <div className={cn('flex min-h-32 items-center justify-center', className)}>
    <Body muted size="lg">{message}</Body>
  </div>
);

export { EmptyState };
export type { EmptyStateProps };
```

`components/feedback/EmptyState/index.ts`:
```ts
export { EmptyState, type EmptyStateProps } from './EmptyState';
```

- [ ] **Step 3: `ErrorState`**

`components/feedback/ErrorState/ErrorState.tsx`:
```tsx
import { Body, Heading } from '@/components/typography';
import { cn } from '@/lib/utils';

type ErrorStateProps = {
  title?: string;
  message: string;
  className?: string;
};

const ErrorState = ({ title = 'Something broke', message, className }: ErrorStateProps) => (
  <div className={cn('flex flex-col items-center gap-3 py-16 text-center', className)}>
    <Heading>{title}</Heading>
    <Body muted size="lg" className="max-w-md">{message}</Body>
  </div>
);

export { ErrorState };
export type { ErrorStateProps };
```

`components/feedback/ErrorState/index.ts`:
```ts
export { ErrorState, type ErrorStateProps } from './ErrorState';
```

- [ ] **Step 4: Feedback barrel**

`components/feedback/index.ts`:
```ts
export * from './LoadingCard';
export * from './EmptyState';
export * from './ErrorState';
```

- [ ] **Step 5: Type-check & commit**

```bash
bun run typecheck
git add components/feedback
git commit -m "feat(feedback): add LoadingCard/EmptyState/ErrorState primitives"
```

---

### Task 1.7: Build `components/tag/*`

**Goal:** Visual-only tag chips. No router push, no clickability.

**Files:**
- Create: `components/tag/Tag/Tag.tsx` + `index.ts`
- Create: `components/tag/TagList/TagList.tsx` + `index.ts`
- Create: `components/tag/index.ts`

**Steps:**

- [ ] **Step 1: `Tag`**

`components/tag/Tag/Tag.tsx`:
```tsx
import { cn } from '@/lib/utils';

type TagProps = {
  name: string;
  className?: string;
};

const Tag = ({ name, className }: TagProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-sm bg-rule px-2 py-0.5 font-mono text-xs text-ink-subtle',
      className,
    )}>
    #{name}
  </span>
);

export { Tag };
export type { TagProps };
```

`components/tag/Tag/index.ts`:
```ts
export { Tag, type TagProps } from './Tag';
```

- [ ] **Step 2: `TagList`**

`components/tag/TagList/TagList.tsx`:
```tsx
import { Tag } from '@/components/tag/Tag';
import { cn } from '@/lib/utils';

type TagListProps = {
  tags: readonly string[] | null | undefined;
  className?: string;
  max?: number;
};

const TagList = ({ tags, className, max }: TagListProps) => {
  if (!tags || tags.length === 0) return null;
  const visible = max ? tags.slice(0, max) : tags;
  const remainder = max && tags.length > max ? tags.length - max : 0;
  return (
    <div className={cn('flex flex-wrap gap-1', className)}>
      {visible.map((tag) => <Tag key={tag} name={tag} />)}
      {remainder > 0 && <Tag name={`+${remainder}`} />}
    </div>
  );
};

export { TagList };
export type { TagListProps };
```

`components/tag/TagList/index.ts`:
```ts
export { TagList, type TagListProps } from './TagList';
```

- [ ] **Step 3: Tag barrel**

`components/tag/index.ts`:
```ts
export * from './Tag';
export * from './TagList';
```

- [ ] **Step 4: Type-check & commit**

```bash
bun run typecheck
git add components/tag
git commit -m "feat(tag): add visual-only Tag and TagList primitives"
```

---

### Task 1.8: Build `components/timeline/Timeline` (data-driven, single component)

**Goal:** Replace v1's 5-component Timeline with one data-driven primitive.

**Files:**
- Create: `components/timeline/Timeline/Timeline.tsx` + `index.ts`
- Create: `components/timeline/index.ts`

**Steps:**

- [ ] **Step 1: Create `Timeline`**

`components/timeline/Timeline/Timeline.tsx`:
```tsx
import { Body, Caption, Mono, Subhead } from '@/components/typography';
import { Milestone } from '@/lib/icons';
import { cn } from '@/lib/utils';

export type TimelineEntry = {
  period: string;
  title: string;
  detail?: string;
};

type TimelineProps = {
  entries: readonly TimelineEntry[];
  className?: string;
};

const Timeline = ({ entries, className }: TimelineProps) => (
  <ol className={cn('flex flex-col', className)} role="list">
    {entries.map((entry, i) => (
      <li key={`${entry.period}-${entry.title}`} className="relative flex gap-4 pb-8 last:pb-0">
        <div className="relative flex shrink-0 flex-col items-center">
          <span className="z-10 flex size-6 items-center justify-center text-gold">
            <Milestone className="size-5" strokeWidth={1.75} />
          </span>
          {i < entries.length - 1 && (
            <span aria-hidden className="absolute left-1/2 top-6 -translate-x-1/2 h-full w-px bg-rule-strong" />
          )}
        </div>
        <div className="flex flex-col gap-1 pb-2">
          <Mono className="text-ink-faint">{entry.period}</Mono>
          <Subhead as="h3" className="not-italic text-ink">{entry.title}</Subhead>
          {entry.detail && <Caption>{entry.detail}</Caption>}
        </div>
      </li>
    ))}
  </ol>
);

export { Timeline };
export type { TimelineProps };
```

`components/timeline/Timeline/index.ts`:
```ts
export { Timeline, type TimelineProps, type TimelineEntry } from './Timeline';
```

`components/timeline/index.ts`:
```ts
export * from './Timeline';
```

- [ ] **Step 2: Type-check & commit**

```bash
bun run typecheck
git add components/timeline
git commit -m "feat(timeline): add data-driven Timeline primitive (replaces 5-component v1)"
```

---

### Task 1.9: Build `components/chrome/SiteHeader` + Nav primitives

**Goal:** Sticky header with shrinking height, monogram (`k.`) wordmark, navigation, mobile menu toggle.

**Files:**
- Create: `components/chrome/nav/NavLink/NavLink.tsx` + `index.ts`
- Create: `components/chrome/nav/NavList/NavList.tsx` + `index.ts`
- Create: `components/chrome/SiteHeader/SiteHeader.tsx` + `index.ts`
- Create: `components/chrome/SiteHeader/Monogram.tsx` (private to header)
- Create: `lib/data/nav.data.ts`

**Steps:**

- [ ] **Step 1: Create `lib/data/nav.data.ts`**

```ts
import {
  ABOUT_PATH,
  CERTIFICATES_PATH,
  CONTACT_PATH,
  NOTES_PATH,
  PROJECTS_PATH,
  RESUME_PATH,
  USES_PATH,
} from '@/lib/constants/paths';

export type NavEntry = {
  label: string;
  href: string;
  external?: boolean;
};

export const NAV_ENTRIES: readonly NavEntry[] = [
  { label: 'About', href: ABOUT_PATH },
  { label: 'Projects', href: PROJECTS_PATH },
  { label: 'Notes', href: NOTES_PATH },
  { label: 'Uses', href: USES_PATH },
  { label: 'Certificates', href: CERTIFICATES_PATH },
  { label: 'Contact', href: CONTACT_PATH },
  { label: 'Resume', href: RESUME_PATH, external: true },
] as const;
```

- [ ] **Step 2: Extend `lib/constants/paths.ts`**

Replace contents with:
```ts
const HOME_PATH = '/';
const ABOUT_PATH = '/about';
const PROJECTS_PATH = '/projects';
const CERTIFICATES_PATH = '/certificates';
const CONTACT_PATH = '/contact';
const USES_PATH = '/uses';
const NOTES_PATH = '/notes';
const RESUME_PATH =
  'https://drive.google.com/file/d/1JiFtl1BGmENDRV5OV3MpcaydRlGOS-2M';

export {
  ABOUT_PATH,
  CERTIFICATES_PATH,
  CONTACT_PATH,
  HOME_PATH,
  NOTES_PATH,
  PROJECTS_PATH,
  RESUME_PATH,
  USES_PATH,
};
```

- [ ] **Step 3: `NavLink`**

`components/chrome/nav/NavLink/NavLink.tsx`:
```tsx
'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

const NavLink = ({ href, label, active, external, className, onClick }: NavLinkProps) => (
  <Link
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    onClick={onClick}
    aria-current={active ? 'page' : undefined}
    className={cn(
      'group relative inline-flex px-2 py-1 text-sm font-body transition-colors duration-fast ease-out',
      active
        ? 'pointer-events-none text-ink'
        : 'text-ink-muted hover:text-ink',
      className,
    )}>
    <span className="relative">
      {label}
      <span
        aria-hidden
        className={cn(
          'absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gold transition-transform duration-normal ease-out',
          active ? 'scale-x-100' : 'group-hover:scale-x-100',
        )}
      />
    </span>
  </Link>
);

export { NavLink };
export type { NavLinkProps };
```

`components/chrome/nav/NavLink/index.ts`:
```ts
export { NavLink, type NavLinkProps } from './NavLink';
```

- [ ] **Step 4: `NavList`**

`components/chrome/nav/NavList/NavList.tsx`:
```tsx
'use client';

import { NavLink } from '@/components/chrome/nav/NavLink';
import { NAV_ENTRIES } from '@/lib/data/nav.data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type NavListProps = {
  className?: string;
  variant?: 'horizontal' | 'vertical';
  onItemClick?: () => void;
};

const NavList = ({ className, variant = 'horizontal', onItemClick }: NavListProps) => {
  const pathname = usePathname();
  return (
    <ul
      className={cn(
        'flex list-none gap-1',
        variant === 'vertical' ? 'flex-col items-start gap-3' : 'flex-row items-center',
        className,
      )}>
      {NAV_ENTRIES.map((entry) => (
        <li key={entry.href}>
          <NavLink
            href={entry.href}
            label={entry.label}
            external={entry.external}
            active={pathname === entry.href}
            onClick={onItemClick}
            className={variant === 'vertical' ? 'text-lg' : ''}
          />
        </li>
      ))}
    </ul>
  );
};

export { NavList };
export type { NavListProps };
```

`components/chrome/nav/NavList/index.ts`:
```ts
export { NavList, type NavListProps } from './NavList';
```

- [ ] **Step 5: Header monogram**

`components/chrome/SiteHeader/Monogram.tsx`:
```tsx
import { cn } from '@/lib/utils';

type MonogramProps = {
  className?: string;
};

const Monogram = ({ className }: MonogramProps) => (
  <span className={cn('inline-flex items-baseline font-display', className)}>
    <span className="gold-sweep italic" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
      k
    </span>
    <span className="text-crimson">.</span>
  </span>
);

export { Monogram };
export type { MonogramProps };
```

- [ ] **Step 6: `SiteHeader`**

`components/chrome/SiteHeader/SiteHeader.tsx`:
```tsx
'use client';

import { NavList } from '@/components/chrome/nav/NavList';
import { Button } from '@/components/ui/button';
import { BurgerMenu, BurgerMenuOpened } from '@/lib/icons';
import { HOME_PATH } from '@/lib/constants/paths';
import { duration, easing } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { Monogram } from './Monogram';

const SiteHeader = ({ className }: { className?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 0.15], [76, 60]);
  const backdropOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 0.85]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setIsScrolled(latest > 0.05);
  });

  return (
    <motion.header
      className={cn('sticky top-0 right-0 left-0 z-20 mx-auto w-full', className)}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.slow, ease: easing.out }}
      style={{ height }}>
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 bg-canvas/80 backdrop-blur-md"
        style={{ opacity: isMenuOpen ? 1 : backdropOpacity }}
      />
      <div className="container flex h-full items-center justify-between py-3">
        <Link
          href={HOME_PATH}
          aria-label="kibar.pro home"
          onClick={() => setIsMenuOpen(false)}
          className="text-3xl">
          <Monogram />
        </Link>

        <nav id="primary-navigation" aria-label="Primary" className="hidden md:block">
          <NavList />
        </nav>

        <Button
          className="md:hidden"
          variant="ghost"
          size="icon"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}>
          {isMenuOpen ? <BurgerMenuOpened className="size-7" /> : <BurgerMenu className="size-7" />}
        </Button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.normal, ease: easing.inOut }}>
            <nav
              aria-label="Mobile primary"
              className="absolute left-0 z-10 h-screen w-full bg-canvas/95 px-6 py-10">
              <NavList variant="vertical" onItemClick={() => setIsMenuOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-x-0 bottom-0 border-b border-rule transition-opacity duration-normal',
          isScrolled || isMenuOpen ? 'opacity-100' : 'opacity-0',
        )}
      />
    </motion.header>
  );
};

export { SiteHeader };
```

`components/chrome/SiteHeader/index.ts`:
```ts
export { SiteHeader } from './SiteHeader';
```

- [ ] **Step 7: Type-check & commit**

```bash
bun run typecheck
git add components/chrome lib/constants/paths.ts lib/data/nav.data.ts
git commit -m "feat(chrome): add SiteHeader with monogram, nav, mobile menu"
```

---

### Task 1.10: Build `components/chrome/SiteFooter` + `FooterStamp`

**Goal:** Footer with brand stamp + © year.

**Files:**
- Create: `components/chrome/FooterStamp/FooterStamp.tsx` + `index.ts`
- Create: `components/chrome/SiteFooter/SiteFooter.tsx` + `index.ts`

**Steps:**

- [ ] **Step 1: `FooterStamp`**

`components/chrome/FooterStamp/FooterStamp.tsx`:
```tsx
'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';

type FooterStampProps = {
  className?: string;
};

const FooterStamp = ({ className }: FooterStampProps) => {
  const reduced = useReducedMotion();
  return (
    <span
      aria-hidden
      className={cn(
        'relative inline-flex size-9 items-center justify-center rounded-full border border-gold/40 text-xs font-display italic text-gold',
        className,
      )}
      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
      k
      {!reduced && (
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full border border-gold/30"
          animate={{ scale: [1, 1.6, 1.9], opacity: [0.6, 0.1, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatDelay: 6, ease: 'easeOut' }}
        />
      )}
    </span>
  );
};

export { FooterStamp };
export type { FooterStampProps };
```

`components/chrome/FooterStamp/index.ts`:
```ts
export { FooterStamp, type FooterStampProps } from './FooterStamp';
```

- [ ] **Step 2: `SiteFooter`**

`components/chrome/SiteFooter/SiteFooter.tsx`:
```tsx
import { FooterStamp } from '@/components/chrome/FooterStamp';
import { Caption, Mono } from '@/components/typography';
import { cn } from '@/lib/utils';

const SiteFooter = ({ className }: { className?: string }) => {
  const year = new Date().getFullYear();
  return (
    <footer
      className={cn(
        'mt-32 w-full border-t border-rule py-12 text-ink-subtle',
        className,
      )}>
      <div className="container flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <FooterStamp />
          <Caption>Crafted by Mustafa Kibar in Istanbul.</Caption>
        </div>
        <Mono className="text-ink-faint">© {year} · KiBAR</Mono>
      </div>
    </footer>
  );
};

export { SiteFooter };
```

`components/chrome/SiteFooter/index.ts`:
```ts
export { SiteFooter } from './SiteFooter';
```

- [ ] **Step 3: Type-check & commit**

```bash
bun run typecheck
git add components/chrome/FooterStamp components/chrome/SiteFooter
git commit -m "feat(chrome): add SiteFooter with FooterStamp"
```

---

### Task 1.11: Build `components/chrome/ScrollProgress`

**Goal:** Top scroll progress bar (carries over v1's `TopProgressBar` behaviour, refactored).

**Files:**
- Create: `components/chrome/ScrollProgress/ScrollProgress.tsx` + `index.ts`
- Create: `hooks/useScrollProgress.ts` (extracted)

**Steps:**

- [ ] **Step 1: `useScrollProgress` hook**

`hooks/useScrollProgress.ts`:
```ts
'use client';

import { useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const useScrollProgress = () => {
  const [hide, setHide] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.3 });
  const width = useTransform(smoothed, [0, 0.985], ['0%', '100%'], { clamp: true });
  const lastTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (y) => {
      if (lastTimeout.current) {
        clearTimeout(lastTimeout.current);
        lastTimeout.current = null;
        if (hide) setHide(false);
      }
      if (y >= 0.985 && !hide) {
        setHide(true);
        return;
      }
      lastTimeout.current = setTimeout(() => setHide(true), 1000);
    });
    return () => {
      unsub();
      if (lastTimeout.current) clearTimeout(lastTimeout.current);
    };
  }, [hide, scrollYProgress]);

  return { width, hide };
};

export { useScrollProgress };
```

- [ ] **Step 2: `ScrollProgress` component**

`components/chrome/ScrollProgress/ScrollProgress.tsx`:
```tsx
'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const ScrollProgress = () => {
  const { width, hide } = useScrollProgress();
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] transition-opacity duration-slow ease-out',
        hide ? 'opacity-0' : 'opacity-100',
      )}>
      <motion.div
        className="h-full bg-gradient-to-r from-gold via-gold-bright to-gold"
        style={{ width }}
      />
    </div>
  );
};

export { ScrollProgress };
```

`components/chrome/ScrollProgress/index.ts`:
```ts
export { ScrollProgress } from './ScrollProgress';
```

- [ ] **Step 3: Type-check & commit**

```bash
bun run typecheck
git add hooks/useScrollProgress.ts components/chrome/ScrollProgress
git commit -m "feat(chrome): add ScrollProgress with extracted useScrollProgress hook"
```

---

### Task 1.12: Build `components/chrome/CommandPalette`

**Goal:** Command palette polished for v2 — gold-sweep on selected, Geist Mono labels, ⌘K hint, lucide icons.

**Files:**
- Create: `components/chrome/CommandPalette/CommandPalette.tsx` + `index.ts`

**Steps:**

- [ ] **Step 1: Component**

`components/chrome/CommandPalette/CommandPalette.tsx`:
```tsx
'use client';

import { duration, easing } from '@/lib/tokens';
import {
  ABOUT_PATH,
  CERTIFICATES_PATH,
  CONTACT_PATH,
  HOME_PATH,
  NOTES_PATH,
  PROJECTS_PATH,
  RESUME_PATH,
  USES_PATH,
} from '@/lib/constants/paths';
import { cn } from '@/lib/utils';
import {
  AcademicCapIcon,
  Envelope,
  FileText,
  Folder,
  Github,
  HomeIcon,
  Linkedin,
  ToolboxIcon,
  UserIcon,
  CodeIcon,
} from '@/lib/icons';
import { Command } from 'cmdk';
import { AnimatePresence, motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

type Item = {
  label: string;
  href: string;
  group: 'Navigate' | 'Links';
  icon: React.ReactNode;
  external?: boolean;
};

const ITEMS: readonly Item[] = [
  { label: 'Home',         href: HOME_PATH,         group: 'Navigate', icon: <HomeIcon className="size-4" /> },
  { label: 'About',        href: ABOUT_PATH,        group: 'Navigate', icon: <UserIcon className="size-4" /> },
  { label: 'Projects',     href: PROJECTS_PATH,     group: 'Navigate', icon: <Folder className="size-4" /> },
  { label: 'Notes',        href: NOTES_PATH,        group: 'Navigate', icon: <CodeIcon className="size-4" /> },
  { label: 'Uses',         href: USES_PATH,         group: 'Navigate', icon: <ToolboxIcon className="size-4" /> },
  { label: 'Certificates', href: CERTIFICATES_PATH, group: 'Navigate', icon: <AcademicCapIcon className="size-4" /> },
  { label: 'Contact',      href: CONTACT_PATH,      group: 'Navigate', icon: <Envelope className="size-4" /> },
  { label: 'Resume',       href: RESUME_PATH,       group: 'Links',    icon: <FileText className="size-4" />, external: true },
  { label: 'GitHub',       href: 'https://github.com/mustafakibar', group: 'Links', icon: <Github className="size-4" />, external: true },
  { label: 'LinkedIn',     href: 'https://www.linkedin.com/in/mustafakibar', group: 'Links', icon: <Linkedin className="size-4" />, external: true },
];

const CommandPalette = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const run = useCallback(
    (item: Item) => {
      setOpen(false);
      if (item.external) window.open(item.href, '_blank', 'noopener,noreferrer');
      else router.push(item.href);
    },
    [router],
  );

  const groups = Array.from(new Set(ITEMS.map((i) => i.group)));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[15vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration.fast }}>
          <div
            aria-hidden
            className="absolute inset-0 bg-overlay backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: duration.normal, ease: easing.out }}
            className="relative w-full max-w-lg overflow-hidden rounded-lg border border-rule-strong bg-elevated shadow-2xl">
            <Command
              label="Command palette"
              className={cn(
                '[&_[cmdk-group-heading]]:text-ink-faint [&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest',
              )}>
              <Command.Input
                placeholder="Type a command or search…"
                className="w-full border-b border-rule bg-transparent px-4 py-4 font-body text-base text-ink placeholder:text-ink-faint outline-none"
              />
              <Command.List className="max-h-[50vh] overflow-y-auto p-2">
                <Command.Empty className="px-4 py-6 text-center font-body text-sm text-ink-faint">
                  No results.
                </Command.Empty>
                {groups.map((group) => (
                  <Command.Group key={group} heading={group}>
                    {ITEMS.filter((i) => i.group === group).map((item) => (
                      <Command.Item
                        key={item.label}
                        value={item.label}
                        onSelect={() => run(item)}
                        className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 font-body text-sm text-ink-muted data-[selected=true]:bg-rule data-[selected=true]:text-ink">
                        <span className="text-gold">{item.icon}</span>
                        <span>{item.label}</span>
                        {item.external && (
                          <span className="ml-auto font-mono text-xs uppercase tracking-widest text-ink-faint">
                            external
                          </span>
                        )}
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </Command.List>
              <div className="flex items-center justify-between border-t border-rule px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink-faint">
                <span>⏎ select</span>
                <span>esc close</span>
              </div>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { CommandPalette };
```

`components/chrome/CommandPalette/index.ts`:
```ts
export { CommandPalette } from './CommandPalette';
```

- [ ] **Step 2: Type-check & commit**

```bash
bun run typecheck
git add components/chrome/CommandPalette
git commit -m "feat(chrome): add v2 CommandPalette with lucide icons and brand styling"
```

---

### Task 1.13: Wire chrome into `app/layout.tsx`

**Goal:** Restore the full chrome on every route. Layout becomes the new shell.

**Files:**
- Modify: `app/layout.tsx`

**Steps:**

- [ ] **Step 1: Update layout's body content**

In `app/layout.tsx`, replace the body's children block (which was reduced in Task 1.1) with:

```tsx
<div className="flex min-h-screen min-w-full flex-col">
  <ScrollProgress />
  <CommandPalette />
  <SiteHeader />
  <main className="flex-1">{children}</main>
  <SiteFooter />
</div>
```

And add the imports at the top:

```ts
import { CommandPalette } from '@/components/chrome/CommandPalette';
import { ScrollProgress } from '@/components/chrome/ScrollProgress';
import { SiteFooter } from '@/components/chrome/SiteFooter';
import { SiteHeader } from '@/components/chrome/SiteHeader';
```

- [ ] **Step 2: Verify build**

```bash
bun run build
```
Expected: PASS. Site routes render with new chrome and "Page rebuilds in a later phase." placeholder bodies.

- [ ] **Step 3: Manual smoke**

```bash
bun run dev
```

Visit:
- `http://localhost:3000/` — header monogram, nav, footer stamp visible. Scroll causes header to shrink.
- `http://localhost:3000/about` — same chrome, placeholder body.
- `http://localhost:3000/contact`, `/uses`, `/notes` — these routes don't exist yet; expect 404 with the new chrome around the 404. Confirmed expected.
- ⌘K opens command palette.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "feat(layout): wire v2 chrome (header, footer, palette, progress) into app shell"
```

---

### Task 1.14: Phase 1 verification gate

**Steps:**

- [ ] **Step 1: Type-check, lint, build**

```bash
bun run typecheck && bun run lint && bun run build
```
All three must pass cleanly with no warnings beyond known framework noise.

- [ ] **Step 2: Bundle baseline**

```bash
ANALYZE=true bun run build
```
Compare to Phase 0 baseline. Initial JS for chrome routes should be modest (< 60kb gzipped at this stage).

- [ ] **Step 3: Manual local preview**

User reviews the bare-chrome site at `localhost:3000` and approves before advancing to Phase 2.

- [ ] **Step 4: Phase boundary commit**

```bash
git commit --allow-empty -m "chore(phase-1): primitives complete"
```

## Phase 2 — Home

**Goal:** Build the new home (`/`) end-to-end. Type-driven hero with gold-sweep wordmark; "§ II — Selected Work" editorial-row list of recent projects; "§ III — Credentials" editorial-row list of recent certificates; closing italic CTA to `/contact`.

**Phase deliverable:** `bun run dev` shows a fully working home that matches the Brand Covenant; all reduced-motion paths verified; OG image regenerated.

---

### Task 2.1: Add `lib/data/skills.data.ts`

**Goal:** Curated skill index data for the home page's "§ Stack" block.

**Files:**
- Create: `lib/data/skills.data.ts`

**Steps:**

- [ ] **Step 1: Create the data file**

```ts
export type SkillCategory = {
  label: string;
  items: readonly string[];
};

export const SKILLS: readonly SkillCategory[] = [
  { label: 'Languages', items: ['TypeScript', 'Rust', 'Kotlin', 'Dart', 'Go'] },
  { label: 'Web',       items: ['React', 'Next.js', 'Tailwind', 'Motion'] },
  { label: 'Backend',   items: ['Node.js', 'gRPC', 'PostgreSQL', 'Redis'] },
  { label: 'Mobile',    items: ['React Native', 'Flutter', 'Swift'] },
  { label: 'Platform',  items: ['AWS', 'Docker', 'Kubernetes', 'GitHub'] },
] as const;
```

- [ ] **Step 2: Commit**

```bash
git add lib/data/skills.data.ts
git commit -m "feat(data): add curated skills index"
```

---

### Task 2.2: Build `components/home/SkillsIndex`

**Goal:** Editorial Index treatment — categorised italic Fraunces label + Geist body, two-column at md+, stacked on mobile.

**Files:**
- Create: `components/home/SkillsIndex/SkillsIndex.tsx` + `index.ts`

**Steps:**

- [ ] **Step 1: Create component**

`components/home/SkillsIndex/SkillsIndex.tsx`:
```tsx
import { Body, Eyebrow, Subhead } from '@/components/typography';
import { SKILLS } from '@/lib/data/skills.data';
import { cn } from '@/lib/utils';

type SkillsIndexProps = {
  className?: string;
  eyebrow?: string;
};

const SkillsIndex = ({ className, eyebrow = '§ Stack · Index' }: SkillsIndexProps) => (
  <section className={cn('flex flex-col gap-6', className)} aria-label="Skills">
    <Eyebrow>{eyebrow}</Eyebrow>
    <dl className="grid grid-cols-1 gap-y-4 gap-x-8 md:grid-cols-[120px_1fr]">
      {SKILLS.map((cat) => (
        <div key={cat.label} className="contents">
          <dt><Subhead className="text-gold">{cat.label}</Subhead></dt>
          <dd><Body>{cat.items.join(', ')}</Body></dd>
        </div>
      ))}
    </dl>
  </section>
);

export { SkillsIndex };
export type { SkillsIndexProps };
```

`components/home/SkillsIndex/index.ts`:
```ts
export { SkillsIndex, type SkillsIndexProps } from './SkillsIndex';
```

- [ ] **Step 2: Type-check & commit**

```bash
bun run typecheck
git add components/home/SkillsIndex
git commit -m "feat(home): add SkillsIndex editorial-index"
```

---

### Task 2.3: Build `components/home/HomeHero`

**Goal:** Type-driven hero — chapter eyebrow, massive `KiBAR` wordmark with letter-by-letter staggered fade-in and gold-sweep, italic subhead, body lede, inline contact row, atmospheric glow.

**Files:**
- Create: `components/home/HomeHero/HomeHero.tsx` + `index.ts`
- Create: `components/home/HomeHero/Wordmark.tsx`

**Steps:**

- [ ] **Step 1: Wordmark component**

`components/home/HomeHero/Wordmark.tsx`:
```tsx
'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { duration, easing, stagger } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';

const LETTERS = ['K', 'i', 'B', 'A', 'R'] as const;

type WordmarkProps = {
  className?: string;
};

const Wordmark = ({ className }: WordmarkProps) => {
  const reduced = useReducedMotion();
  return (
    <h1
      className={cn(
        'gold-sweep font-display leading-[0.92] tracking-[-0.025em]',
        'text-[clamp(4rem,15vw,12rem)]',
        className,
      )}
      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
      aria-label="KiBAR">
      {LETTERS.map((letter, i) => {
        const isItalic = letter === 'i';
        const span = (
          <span
            className={cn(
              'inline-block',
              isItalic && 'italic font-normal',
              isItalic && 'mx-[0.05em] scale-[0.7]',
            )}
            style={isItalic ? { fontVariationSettings: "'opsz' 144, 'SOFT' 60" } : undefined}>
            {letter}
          </span>
        );
        if (reduced) return <span key={i} aria-hidden>{span}</span>;
        return (
          <motion.span
            key={i}
            aria-hidden
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: duration.hero,
              delay: i * stagger.loose,
              ease: easing.out,
            }}>
            {span}
          </motion.span>
        );
      })}
    </h1>
  );
};

export { Wordmark };
```

- [ ] **Step 2: HomeHero component**

`components/home/HomeHero/HomeHero.tsx`:
```tsx
import { Container } from '@/components/layout/Container';
import { Body, Eyebrow, Subhead } from '@/components/typography';
import { ChevronUpRight } from '@/lib/icons';
import { CONTACT_PATH } from '@/lib/constants/paths';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Wordmark } from './Wordmark';

type HomeHeroProps = {
  className?: string;
};

const HomeHero = ({ className }: HomeHeroProps) => (
  <section
    className={cn(
      'relative isolate overflow-hidden py-20 md:py-32',
      'before:pointer-events-none before:absolute before:right-[10%] before:top-[20%] before:-z-10 before:h-[420px] before:w-[420px] before:rounded-full before:bg-glow-gold before:blur-[140px]',
      'after:pointer-events-none after:absolute after:left-0 after:bottom-0 after:-z-10 after:h-[360px] after:w-[360px] after:rounded-full after:bg-glow-crimson after:blur-[120px]',
      className,
    )}>
    <Container>
      <div className="flex flex-col gap-8">
        <Eyebrow>§ 0 — INDEX</Eyebrow>
        <Wordmark />
        <Subhead className="max-w-xl text-2xl">
          — shipping reliable systems since 2011.
        </Subhead>
        <Body size="lg" muted className="max-w-2xl">
          Senior full-stack engineer based in Istanbul. I design and ship
          reliable, performant products end-to-end — clean architecture, strong
          developer experience, considered motion.
        </Body>
        <Link
          href={CONTACT_PATH}
          className="group mt-2 inline-flex items-center gap-2 text-sm font-body text-ink-muted transition-colors hover:text-gold">
          <span className="italic">Currently available for senior roles.</span>
          <ChevronUpRight className="size-4 transition-transform duration-normal ease-out group-hover:-rotate-12 group-hover:translate-x-1" />
        </Link>
      </div>
    </Container>
  </section>
);

export { HomeHero };
export type { HomeHeroProps };
```

Note the missing import — add `import { cn } from '@/lib/utils';` at the top of `HomeHero.tsx`.

`components/home/HomeHero/index.ts`:
```ts
export { HomeHero, type HomeHeroProps } from './HomeHero';
```

(The `cn` import is included above; no separate amendment needed.)

- [ ] **Step 3: Type-check & commit**

```bash
bun run typecheck
git add components/home/HomeHero
git commit -m "feat(home): add HomeHero with type-driven KiBAR wordmark"
```

---

### Task 2.4: Build `components/home/SelectedWorkList`

**Goal:** Editorial row list of selected projects (item rows, not cards).

**Files:**
- Create: `components/home/SelectedWorkList/SelectedWorkList.tsx` + `index.ts`

**Steps:**

- [ ] **Step 1: Component**

`components/home/SelectedWorkList/SelectedWorkList.tsx`:
```tsx
import type { Project } from '@/components/projects/ProjectCard';
import { Body, Mono } from '@/components/typography';
import { ChevronUpRight } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type SelectedWorkListProps = {
  projects: readonly Project[];
  className?: string;
};

const ROMANS = [
  'i','ii','iii','iv','v','vi','vii','viii','ix','x','xi','xii',
] as const;

const SelectedWorkList = ({ projects, className }: SelectedWorkListProps) => (
  <ol className={cn('flex flex-col divide-y divide-rule', className)} role="list">
    {projects.map((p, idx) => {
      const href = p.repoUrl ?? '#';
      return (
        <li key={p.id}>
          <Link
            href={href}
            target={p.repoUrl ? '_blank' : undefined}
            rel={p.repoUrl ? 'noopener noreferrer' : undefined}
            className="group relative flex items-center gap-4 py-4 transition-colors duration-fast ease-out hover:bg-rule/40">
            <span className="font-display italic text-gold w-10 shrink-0 text-base">
              {ROMANS[idx] ?? `${idx + 1}.`}
            </span>
            <span className="flex flex-1 items-baseline gap-3 transition-transform duration-normal ease-out group-hover:translate-x-1">
              <Body className="font-medium text-ink">{p.title}</Body>
              {p.description && (
                <Body size="sm" muted className="line-clamp-1">— {p.description}</Body>
              )}
            </span>
            <Mono className="text-ink-faint">{p.year}</Mono>
            <ChevronUpRight className="size-4 text-ink-faint opacity-0 transition-all duration-normal ease-out group-hover:opacity-100 group-hover:text-gold" />
          </Link>
        </li>
      );
    })}
  </ol>
);

export { SelectedWorkList };
export type { SelectedWorkListProps };
```

`components/home/SelectedWorkList/index.ts`:
```ts
export { SelectedWorkList, type SelectedWorkListProps } from './SelectedWorkList';
```

- [ ] **Step 2: Note dependency**

This component imports `Project` type from `@/components/projects/ProjectCard` which doesn't exist yet. The Project type currently lives at `components/Project/index.ts` (deleted in Task 1.1). Add it now in a stub location so the import resolves; the full ProjectCard is built in Phase 4.

Create `components/projects/ProjectCard/types.ts`:
```ts
export type Project = {
  id: string;
  title: string;
  slug?: string;
  tags?: readonly string[] | null;
  year: number | string;
  description: string;
  images?: readonly { src: string; alt: string }[];
  repoUrl?: string;
};
```

Create `components/projects/ProjectCard/index.ts`:
```ts
export type { Project } from './types';
// Component exported in Phase 4
```

Update `lib/data/getProjects.ts` import:

Replace:
```ts
import { Project } from '@/components/Project';
```
with:
```ts
import type { Project } from '@/components/projects/ProjectCard';
```

- [ ] **Step 3: Type-check & commit**

```bash
bun run typecheck
git add components/home/SelectedWorkList components/projects/ProjectCard lib/data/getProjects.ts
git commit -m "feat(home): add SelectedWorkList + Project type stub"
```

---

### Task 2.5: Build `components/home/CredentialsList`

**Goal:** Editorial row list of recent certificates.

**Files:**
- Create: `components/home/CredentialsList/CredentialsList.tsx` + `index.ts`
- Create: `lib/data/certificates.data.ts` (migrated from `components/Certificates/constant.ts`)

**Steps:**

- [ ] **Step 1: Migrate certificates data**

The original data lived at `components/Certificates/constant.ts` (deleted in Phase 1). Recreate the data at the new canonical path.

Create `lib/data/certificates.data.ts`:

Copy the entire `CERTIFICATE_ITEMS` array and the BLUR_HASH constants from the v1 file (it's a long list). The exact contents are preserved in `git log` from main; pull them via:

```bash
git show main:components/Certificates/constant.ts > /tmp/v1-certs.ts
```

Then transform into:
```ts
export type Certificate = {
  title: string;
  description: string;
  imageUrl?: string;
  blurDataURL?: string;
  date: string;
};

// (paste BLUR_HASH consts from /tmp/v1-certs.ts, exactly as-is)

export const CERTIFICATES: readonly Certificate[] = [
  // (paste the existing array, renamed from CERTIFICATE_ITEMS)
];
```

- [ ] **Step 2: `CredentialsList`**

`components/home/CredentialsList/CredentialsList.tsx`:
```tsx
import type { Certificate } from '@/lib/data/certificates.data';
import { Body, Mono } from '@/components/typography';
import { cn } from '@/lib/utils';

type CredentialsListProps = {
  certificates: readonly Certificate[];
  className?: string;
};

const ROMANS = ['i','ii','iii','iv','v','vi','vii','viii','ix','x'] as const;

const CredentialsList = ({ certificates, className }: CredentialsListProps) => (
  <ol className={cn('flex flex-col divide-y divide-rule', className)} role="list">
    {certificates.map((c, idx) => (
      <li key={c.title} className="flex items-baseline gap-4 py-4">
        <span className="font-display italic text-gold w-10 shrink-0 text-base">
          {ROMANS[idx] ?? `${idx + 1}.`}
        </span>
        <span className="flex-1">
          <Body className="font-medium text-ink">{c.title}</Body>
          <Body size="sm" muted className="mt-0.5">{c.description}</Body>
        </span>
        <Mono className="text-ink-faint">{c.date}</Mono>
      </li>
    ))}
  </ol>
);

export { CredentialsList };
export type { CredentialsListProps };
```

`components/home/CredentialsList/index.ts`:
```ts
export { CredentialsList, type CredentialsListProps } from './CredentialsList';
```

- [ ] **Step 3: Type-check & commit**

```bash
bun run typecheck
git add lib/data/certificates.data.ts components/home/CredentialsList
git commit -m "feat(home): add CredentialsList + migrate certificates data"
```

---

### Task 2.6: Wire `app/page.tsx`

**Goal:** Replace placeholder home with full v2 home.

**Files:**
- Modify: `app/page.tsx`

**Steps:**

- [ ] **Step 1: Rewrite `app/page.tsx`**

```tsx
import { CredentialsList } from '@/components/home/CredentialsList';
import { HomeHero } from '@/components/home/HomeHero';
import { SelectedWorkList } from '@/components/home/SelectedWorkList';
import { SkillsIndex } from '@/components/home/SkillsIndex';
import { Container } from '@/components/layout/Container';
import { SectionViewer } from '@/components/layout/SectionViewer';
import { EmptyState } from '@/components/feedback/EmptyState';
import { Body, Eyebrow, Subhead } from '@/components/typography';
import { CERTIFICATES, type Certificate } from '@/lib/data/certificates.data';
import {
  CERTIFICATES_PATH,
  CONTACT_PATH,
  PROJECTS_PATH,
} from '@/lib/constants/paths';
import { getProjects } from '@/lib/data/getProjects';
import Link from 'next/link';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const HomePage: NextPage = async () => {
  const projects = await getProjects();
  const featuredProjects = projects.slice(0, 7);
  const featuredCerts: readonly Certificate[] = CERTIFICATES.slice(0, 3);

  return (
    <>
      <HomeHero />

      <Container className="flex flex-col gap-24 pb-24">
        <SkillsIndex />

        <SectionViewer
          chapter="§ II — SELECTED WORK"
          title={<>Selected <em className="italic font-normal">Work</em></>}
          description="A small body of considered work, shipped end-to-end across the stack."
          viewAllHref={PROJECTS_PATH}>
          {featuredProjects.length > 0 ? (
            <SelectedWorkList projects={featuredProjects} />
          ) : (
            <EmptyState message="No projects to show yet." />
          )}
        </SectionViewer>

        <SectionViewer
          chapter="§ III — CREDENTIALS"
          title={<>Credentials</>}
          description="Certificates earned across engineering, cloud, and product disciplines."
          viewAllHref={CERTIFICATES_PATH}>
          <CredentialsList certificates={featuredCerts} />
        </SectionViewer>

        <section className="flex flex-col items-center gap-3 py-12 text-center">
          <Eyebrow>§ Coda</Eyebrow>
          <Subhead className="text-2xl text-ink">
            Currently available for senior roles.
          </Subhead>
          <Link
            href={CONTACT_PATH}
            className="mt-2 inline-flex rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-gold transition-colors duration-fast hover:bg-gold/20">
            → Reach out
          </Link>
        </section>
      </Container>
    </>
  );
};

export default HomePage;
```

- [ ] **Step 2: Verify build**

```bash
bun run typecheck && bun run build
```
Expected: PASS.

- [ ] **Step 3: Manual smoke**

```bash
bun run dev
```
Visit `http://localhost:3000/`. Confirm:
- KiBAR wordmark renders with gold sweep, letters stagger in.
- Subhead in italic, body lede legible.
- Skills index renders with categories.
- Selected Work shows up to 7 projects in numbered rows.
- Credentials shows 3 certs.
- Coda CTA reaches `/contact`.
- Reduced motion (Mac System Settings → Accessibility → Display → Reduce motion) collapses all animations.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat(home): wire v2 home page composition"
```

---

### Task 2.7: Update home OG image

**Goal:** v2-styled OG image for `/`.

**Files:**
- Modify: `app/opengraph-image.tsx`
- Modify: `app/_og/og-template.tsx`

**Steps:**

- [ ] **Step 1: Refresh `app/_og/og-template.tsx`**

Open the existing file and rewrite to use the new tokens. Keep the v1 signature (`size`, `contentType`, function returning ImageResponse) — only the visual contents change.

```tsx
// app/_og/og-template.tsx
import type { ReactNode } from 'react';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

type OgFrameProps = {
  chapter: string;
  title: ReactNode;
  description?: string;
};

export const OgFrame = ({ chapter, title, description }: OgFrameProps) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background:
        'radial-gradient(ellipse at 30% 20%, #2a1212 0%, #0a0606 80%)',
      color: '#f3e3c7',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 80,
      fontFamily: 'Geist',
    }}>
    <div
      style={{
        fontSize: 28,
        letterSpacing: 8,
        textTransform: 'uppercase',
        color: '#c89b53',
        fontWeight: 500,
      }}>
      {chapter}
    </div>
    <div
      style={{
        fontFamily: 'Fraunces',
        fontWeight: 500,
        fontSize: 140,
        lineHeight: 1,
        letterSpacing: '-0.04em',
        backgroundImage:
          'linear-gradient(95deg, #f3e3c7 0%, #c89b53 60%, #f3e3c7 100%)',
        backgroundClip: 'text',
        color: 'transparent',
        whiteSpace: 'pre-wrap',
      }}>
      {title}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div style={{ fontSize: 20, color: '#d4c19b', maxWidth: 700, lineHeight: 1.4 }}>
        {description}
      </div>
      <div style={{ fontFamily: 'Geist Mono', fontSize: 22, color: '#c89b53' }}>
        kibar.pro
      </div>
    </div>
  </div>
);
```

- [ ] **Step 2: Update `app/opengraph-image.tsx`**

```tsx
import { ImageResponse } from 'next/og';
import { OgFrame, ogContentType, ogSize } from './_og/og-template';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'Mustafa Kibar — Senior Full-Stack Engineer';

export default async function OG() {
  return new ImageResponse(
    (
      <OgFrame
        chapter="§ 0 — INDEX"
        title="K𝑖BAR"
        description="Senior full-stack engineer based in Istanbul. Reliable, performant products end-to-end."
      />
    ),
    { ...ogSize },
  );
}
```

The displayed `K𝑖BAR` uses the `𝑖` Mathematical Italic Small i (U+1D456) as a typographic substitute for italic-i in OG, since OG `<img>` rendering can't apply CSS italic to a single span.

- [ ] **Step 3: Verify**

```bash
bun run dev
```
Visit `http://localhost:3000/opengraph-image` to confirm the rendered image looks correct.

- [ ] **Step 4: Commit**

```bash
git add app/opengraph-image.tsx app/_og/og-template.tsx
git commit -m "feat(og): redesign home OG image with v2 brand"
```

---

### Task 2.8: Phase 2 verification gate

**Steps:**

- [ ] **Step 1: Type-check, lint, build**

```bash
bun run typecheck && bun run lint && bun run build
```

- [ ] **Step 2: Manual local preview & user approval**

User loads `/` in `bun run dev`, confirms the brand covenant rules visually, and approves before advancing to Phase 3.

- [ ] **Step 3: Phase boundary commit**

```bash
git commit --allow-empty -m "chore(phase-2): home complete"
```

## Phase 3 — About

**Goal:** Build `/about` end-to-end. Chapter heading "§ I — THE MAKER", biography lede, full-bleed portrait band with caption, biography prose column, skills index, education timeline. The workspace gear list does NOT live here in v2 — it moves to `/uses` in Phase 6.

**Phase deliverable:** `/about` ships with new chrome, content, and OG image.

---

### Task 3.1: Add `lib/data/timeline.data.ts`

**Goal:** Timeline data for the about page.

**Files:**
- Create: `lib/data/timeline.data.ts`

**Steps:**

- [ ] **Step 1: Create the data file**

```ts
import type { TimelineEntry } from '@/components/timeline/Timeline';

export const EDUCATION_TIMELINE: readonly TimelineEntry[] = [
  { period: 'Present',  title: 'Computer Programming',         detail: 'Istanbul University' },
  { period: '2018–2020', title: 'Public Administration',        detail: 'Eskisehir University' },
  { period: '2011–2013', title: 'Rustu Unsal P.M.Y.O',          detail: 'Buca / Izmir' },
  { period: '2005–2009', title: 'T.O.K.I Anatolian High School', detail: 'Eryaman / Ankara' },
  { period: '1998–2005', title: 'Meliksah Primary School',       detail: 'Sincan / Ankara' },
  { period: '1991',      title: 'Born',                          detail: 'Yenimahalle / Ankara' },
] as const;
```

- [ ] **Step 2: Commit**

```bash
git add lib/data/timeline.data.ts
git commit -m "feat(data): add education timeline"
```

---

### Task 3.2: Build `components/about/Biography`

**Goal:** Editorial-narrow prose column with the v2 biography copy.

**Files:**
- Create: `components/about/Biography/Biography.tsx` + `index.ts`

**Steps:**

- [ ] **Step 1: Create component**

`components/about/Biography/Biography.tsx`:
```tsx
import { Body } from '@/components/typography';
import { cn } from '@/lib/utils';

type BiographyProps = {
  className?: string;
};

const Biography = ({ className }: BiographyProps) => (
  <article className={cn('flex flex-col gap-5', className)}>
    <Body size="lg">
      I&apos;ve been building software since 2011, focused on shipping
      scalable, maintainable systems end-to-end — from data layer to UI.
    </Body>
    <Body size="lg" className="font-medium text-ink">
      Day-to-day stack: TypeScript, React, Next.js, Node.js, Rust, Kotlin,
      React Native, and Flutter.
    </Body>
    <Body size="lg" muted>
      I care about clean architecture, strong developer experience, and tools
      that get out of the user&apos;s way. Lately my interests lean toward
      systems programming, AI tooling, and the boring fundamentals that make
      products feel fast and reliable.
    </Body>
  </article>
);

export { Biography };
export type { BiographyProps };
```

`components/about/Biography/index.ts`:
```ts
export { Biography, type BiographyProps } from './Biography';
```

- [ ] **Step 2: Type-check & commit**

```bash
bun run typecheck
git add components/about/Biography
git commit -m "feat(about): add Biography prose primitive"
```

---

### Task 3.3: Build `components/about/PortraitBand`

**Goal:** Full-bleed portrait with grayscale + gold tint and italic caption.

**Files:**
- Create: `components/about/PortraitBand/PortraitBand.tsx` + `index.ts`

**Steps:**

- [ ] **Step 1: Component**

`components/about/PortraitBand/PortraitBand.tsx`:
```tsx
import { Caption } from '@/components/typography';
import { Portrait } from '@/components/media/Portrait';
import {
  ABOUT_PROFILE_IMAGE_ALT,
  ABOUT_PROFILE_IMAGE_BLUR_DATA_URL,
  ABOUT_PROFILE_IMAGE_SRC,
} from '@/lib/constants/image';
import { cn } from '@/lib/utils';

type PortraitBandProps = {
  caption?: string;
  className?: string;
};

const PortraitBand = ({
  caption = 'Mustafa Kibar, Istanbul, 2026.',
  className,
}: PortraitBandProps) => (
  <figure className={cn('flex flex-col gap-3', className)}>
    <Portrait
      src={ABOUT_PROFILE_IMAGE_SRC}
      alt={ABOUT_PROFILE_IMAGE_ALT}
      blurDataURL={ABOUT_PROFILE_IMAGE_BLUR_DATA_URL}
      width={1600}
      height={1066}
      grayscale
      tint
      sizes="(min-width: 1024px) 100vw, 100vw"
      className="aspect-[3/2] w-full rounded-lg ring-1 ring-rule"
    />
    <figcaption>
      <Caption className="italic text-ink-muted">{caption}</Caption>
    </figcaption>
  </figure>
);

export { PortraitBand };
export type { PortraitBandProps };
```

`components/about/PortraitBand/index.ts`:
```ts
export { PortraitBand, type PortraitBandProps } from './PortraitBand';
```

- [ ] **Step 2: Type-check & commit**

```bash
bun run typecheck
git add components/about/PortraitBand
git commit -m "feat(about): add PortraitBand"
```

---

### Task 3.4: Wire `app/about/page.tsx`

**Goal:** Compose the v2 about page.

**Files:**
- Modify: `app/about/page.tsx`

**Steps:**

- [ ] **Step 1: Rewrite**

```tsx
import { Biography } from '@/components/about/Biography';
import { PortraitBand } from '@/components/about/PortraitBand';
import { Container } from '@/components/layout/Container';
import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { SkillsIndex } from '@/components/home/SkillsIndex';
import { Timeline } from '@/components/timeline/Timeline';
import { Body, Eyebrow, Subhead } from '@/components/typography';
import { EDUCATION_TIMELINE } from '@/lib/data/timeline.data';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Senior full-stack engineer based in Istanbul. Background, experience, and the workshop I build from.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About · Mustafa Kibar',
    description:
      'Senior full-stack engineer based in Istanbul. Background, experience, and the workshop I build from.',
    url: '/about',
  },
};

const AboutPage: NextPage = () => (
  <>
    <ChapterBand>
      <Container>
        <ChapterHead
          chapter="§ I — THE MAKER"
          title={<>The <em className="italic font-normal">Maker</em></>}
          description="A short biography, a portrait, and the threads that brought me here."
        />
      </Container>
    </ChapterBand>

    <Container size="narrow" className="flex flex-col gap-16 py-16">
      <PortraitBand />
      <Biography />
      <SkillsIndex eyebrow="§ I.a — Stack" />
      <section className="flex flex-col gap-6">
        <Eyebrow>§ I.b — Education</Eyebrow>
        <Subhead className="text-ink">A path, briefly</Subhead>
        <Timeline entries={EDUCATION_TIMELINE} />
      </section>

      <Body muted className="border-t border-rule pt-8 text-center italic">
        → Workshop &amp; gear at <a className="text-gold hover:underline" href="/uses">/uses</a> · → Recent thinking at <a className="text-gold hover:underline" href="/notes">/notes</a>.
      </Body>
    </Container>
  </>
);

export default AboutPage;
```

- [ ] **Step 2: Verify build**

```bash
bun run typecheck && bun run build
```

- [ ] **Step 3: Manual smoke**

`bun run dev` → `/about`. Confirm chapter band, portrait band, biography prose, skills index, timeline, and footer link strip render correctly. Verify the Brand Covenant (no AI references; English only; KiBAR wordmark only on home).

- [ ] **Step 4: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat(about): wire v2 composition with chapter band, portrait, timeline"
```

---

### Task 3.5: Update about OG image

**Files:**
- Modify: `app/about/opengraph-image.tsx`

**Steps:**

- [ ] **Step 1: Rewrite**

```tsx
import { ImageResponse } from 'next/og';
import { OgFrame, ogContentType, ogSize } from '@/app/_og/og-template';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'About · Mustafa Kibar';

export default async function OG() {
  return new ImageResponse(
    (
      <OgFrame
        chapter="§ I — THE MAKER"
        title="About"
        description="Background, stack, and the workshop I build from."
      />
    ),
    { ...ogSize },
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/about/opengraph-image.tsx
git commit -m "feat(og): refresh /about OG image for v2"
```

---

### Task 3.6: Phase 3 verification gate

**Steps:**

- [ ] **Step 1: Type-check, lint, build**

```bash
bun run typecheck && bun run lint && bun run build
```

- [ ] **Step 2: Manual local preview & user approval**

User reviews `/about` and approves.

- [ ] **Step 3: Phase boundary commit**

```bash
git commit --allow-empty -m "chore(phase-3): about complete"
```

## Phase 4 — Projects

**Goal:** Build `/projects` end-to-end. Chapter band header, full grid of GitHub-fetched projects, year-sorted, with `ProjectCard` (replaces `ProjectShowcase`) and `SourceLink` (replaces `RepoIcon`). Tag chips render via `TagList` and are visual-only.

**Phase deliverable:** `/projects` ships; tag click is dead (intentional); OG image refreshed; loading state present.

---

### Task 4.1: Build `components/projects/SourceLink`

**Goal:** Replaces `RepoIcon`. Detects GitHub vs GitLab from URL; renders icon button.

**Files:**
- Create: `components/projects/SourceLink/SourceLink.tsx` + `index.ts`

**Steps:**

- [ ] **Step 1: Component**

`components/projects/SourceLink/SourceLink.tsx`:
```tsx
'use client';

import { Github, Gitlab, ExternalLink } from '@/lib/icons';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SourceLinkProps = {
  url: string;
  label?: string;
  className?: string;
};

const detect = (url: string): { icon: ReactNode; label: string } => {
  if (url.includes('github')) return { icon: <Github className="size-4" />, label: 'View on GitHub' };
  if (url.includes('gitlab')) return { icon: <Gitlab className="size-4" />, label: 'View on GitLab' };
  return { icon: <ExternalLink className="size-4" />, label: 'View source' };
};

const SourceLink = ({ url, label, className }: SourceLinkProps) => {
  const detected = detect(url);
  const finalLabel = label ?? detected.label;
  return (
    <button
      type="button"
      aria-label={finalLabel}
      title={finalLabel}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(url, '_blank', 'noopener,noreferrer');
      }}
      className={cn(
        'inline-flex items-center justify-center rounded-sm p-1 text-ink-muted transition-colors duration-fast ease-out hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60',
        className,
      )}>
      {detected.icon}
    </button>
  );
};

export { SourceLink };
export type { SourceLinkProps };
```

`components/projects/SourceLink/index.ts`:
```ts
export { SourceLink, type SourceLinkProps } from './SourceLink';
```

- [ ] **Step 2: Type-check & commit**

```bash
bun run typecheck
git add components/projects/SourceLink
git commit -m "feat(projects): add SourceLink (replaces RepoIcon)"
```

---

### Task 4.2: Build `components/projects/ProjectCard`

**Goal:** Replaces `ProjectShowcase`. Card with header (title + year + source link), description, tags, hover lift.

**Files:**
- Modify: `components/projects/ProjectCard/index.ts` (add export)
- Create: `components/projects/ProjectCard/ProjectCard.tsx`

**Steps:**

- [ ] **Step 1: Component**

`components/projects/ProjectCard/ProjectCard.tsx`:
```tsx
import { SourceLink } from '@/components/projects/SourceLink';
import { TagList } from '@/components/tag/TagList';
import { Body, Mono, Subhead } from '@/components/typography';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { Project } from './types';

type ProjectCardProps = {
  project: Project;
  hideTags?: boolean;
  className?: string;
};

const ProjectCard = ({ project, hideTags = false, className }: ProjectCardProps) => {
  const href = project.repoUrl ?? '#';
  const showTags = !hideTags && project.tags && project.tags.length > 0;
  const isLinked = Boolean(project.repoUrl);

  return (
    <Link
      href={href}
      target={isLinked ? '_blank' : undefined}
      rel={isLinked ? 'noopener noreferrer' : undefined}
      className={cn(
        'group flex flex-col gap-3 rounded-lg border border-rule bg-elevated p-5 transition-all duration-normal ease-out',
        isLinked && 'hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-[0_8px_24px_-12px_oklch(0.05_0_0/0.6)]',
        !isLinked && 'pointer-events-none',
        className,
      )}>
      <header className="flex items-start justify-between gap-3">
        <Subhead as="h3" className="not-italic text-ink transition-colors duration-fast group-hover:text-gold">
          {project.title}
        </Subhead>
        <div className="flex shrink-0 items-center gap-2">
          <Mono className="text-ink-faint">{project.year}</Mono>
          {project.repoUrl && <SourceLink url={project.repoUrl} />}
        </div>
      </header>
      {project.description && (
        <Body size="sm" muted className="line-clamp-3">
          {project.description}
        </Body>
      )}
      {showTags && (
        <footer className="mt-auto pt-2">
          <TagList tags={project.tags ?? null} max={5} />
        </footer>
      )}
    </Link>
  );
};

export { ProjectCard };
export type { ProjectCardProps };
```

- [ ] **Step 2: Update `index.ts`**

`components/projects/ProjectCard/index.ts`:
```ts
export type { Project } from './types';
export { ProjectCard, type ProjectCardProps } from './ProjectCard';
```

- [ ] **Step 3: Type-check & commit**

```bash
bun run typecheck
git add components/projects/ProjectCard
git commit -m "feat(projects): add ProjectCard (replaces ProjectShowcase)"
```

---

### Task 4.3: Wire `app/projects/page.tsx` and `loading.tsx`

**Files:**
- Modify: `app/projects/page.tsx`
- Modify: `app/projects/loading.tsx`

**Steps:**

- [ ] **Step 1: `app/projects/loading.tsx`**

```tsx
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { LoadingCard } from '@/components/feedback/LoadingCard';

export default function ProjectsLoading() {
  return (
    <Container className="py-16">
      <Grid cols={{ md: 2, xl: 3 }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </Grid>
    </Container>
  );
}
```

- [ ] **Step 2: `app/projects/page.tsx`**

```tsx
import { EmptyState } from '@/components/feedback/EmptyState';
import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { RevealOnView } from '@/components/motion/RevealOnView';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getProjects } from '@/lib/data/getProjects';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A selection of open-source and production work spanning web, mobile, and backend systems.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects · Mustafa Kibar',
    description:
      'A selection of open-source and production work spanning web, mobile, and backend systems.',
    url: '/projects',
  },
};

const ProjectsPage: NextPage = async () => {
  const projects = await getProjects();
  return (
    <>
      <ChapterBand>
        <Container>
          <ChapterHead
            chapter="§ II — SELECTED WORK"
            title="Projects"
            description="A selection of open-source and production work across the stack."
          />
        </Container>
      </ChapterBand>

      <Container className="py-16">
        {projects.length === 0 ? (
          <EmptyState message="No projects to show yet." />
        ) : (
          <Grid cols={{ md: 2, xl: 3 }}>
            {projects.map((p, i) => (
              <RevealOnView key={p.id} delay={Math.min(i, 9) * 0.04}>
                <ProjectCard project={p} />
              </RevealOnView>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default ProjectsPage;
```

- [ ] **Step 3: Verify**

```bash
bun run typecheck && bun run build && bun run dev
```
Visit `/projects`. Confirm grid, hover lift, tag chips render but aren't clickable, source-link icon opens GitHub in new tab.

- [ ] **Step 4: Commit**

```bash
git add app/projects
git commit -m "feat(projects): wire v2 page composition with grid and reveal"
```

---

### Task 4.4: Update projects OG image

**Files:**
- Modify: `app/projects/opengraph-image.tsx`

**Steps:**

- [ ] **Step 1: Rewrite**

```tsx
import { ImageResponse } from 'next/og';
import { OgFrame, ogContentType, ogSize } from '@/app/_og/og-template';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'Projects · Mustafa Kibar';

export default async function OG() {
  return new ImageResponse(
    (
      <OgFrame
        chapter="§ II — SELECTED WORK"
        title="Projects"
        description="Open-source and production work across the stack."
      />
    ),
    { ...ogSize },
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/projects/opengraph-image.tsx
git commit -m "feat(og): refresh /projects OG image for v2"
```

---

### Task 4.5: Phase 4 verification gate

**Steps:**

- [ ] **Step 1: Type-check, lint, build**

```bash
bun run typecheck && bun run lint && bun run build
```

- [ ] **Step 2: Manual local preview & user approval**

- [ ] **Step 3: Phase boundary commit**

```bash
git commit --allow-empty -m "chore(phase-4): projects complete"
```

## Phase 5 — Certificates

**Goal:** Build `/certificates` end-to-end. `CertificateCard` (replaces `CertificateShowcase`) in a grid, with the existing image-hover behaviour modernised. The `CertificateView` v1 stub stays deleted.

**Phase deliverable:** `/certificates` ships with v2 chrome and OG image.

---

### Task 5.1: Build `components/certificates/CertificateCard`

**Files:**
- Create: `components/certificates/CertificateCard/CertificateCard.tsx` + `index.ts`

**Steps:**

- [ ] **Step 1: Component**

`components/certificates/CertificateCard/CertificateCard.tsx`:
```tsx
import { Caption, Subhead } from '@/components/typography';
import type { Certificate } from '@/lib/data/certificates.data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type CertificateCardProps = {
  certificate: Certificate;
  className?: string;
};

const CertificateCard = ({ certificate, className }: CertificateCardProps) => {
  const href = certificate.imageUrl ?? '';
  const isLinked = Boolean(href);
  const Wrapper: typeof Link | 'div' = isLinked ? Link : 'div';
  const wrapperProps = isLinked
    ? { href, target: '_blank', rel: 'noopener noreferrer' as const }
    : ({} as Record<string, never>);

  return (
    <Wrapper
      {...(wrapperProps as { href: string })}
      className={cn(
        'group relative block overflow-hidden rounded-lg border border-rule bg-elevated transition-all duration-normal ease-out',
        isLinked && 'hover:-translate-y-0.5 hover:border-gold/40',
        !isLinked && 'pointer-events-none',
        className,
      )}>
      {certificate.imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            className="h-full w-full scale-125 object-cover object-left-top grayscale transition-all duration-slow ease-out group-hover:-translate-y-1 group-hover:scale-100 group-hover:grayscale-0"
            src={certificate.imageUrl}
            alt={certificate.title}
            width={512}
            height={384}
            sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
            placeholder={certificate.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={certificate.blurDataURL}
          />
        </div>
      )}
      <header className="absolute bottom-0 left-0 flex flex-col gap-0.5 rounded-tr-lg border-t border-r border-rule bg-canvas/90 px-3 py-1.5 shadow-md backdrop-blur-sm">
        <Caption className="text-xs">
          {certificate.description} · {certificate.date}
        </Caption>
        <Subhead className="not-italic text-base text-ink transition-transform duration-normal ease-out group-hover:-skew-y-1">
          {certificate.title}
        </Subhead>
      </header>
    </Wrapper>
  );
};

export { CertificateCard };
export type { CertificateCardProps };
```

`components/certificates/CertificateCard/index.ts`:
```ts
export { CertificateCard, type CertificateCardProps } from './CertificateCard';
```

- [ ] **Step 2: Type-check & commit**

```bash
bun run typecheck
git add components/certificates/CertificateCard
git commit -m "feat(certificates): add CertificateCard (replaces CertificateShowcase)"
```

---

### Task 5.2: Wire `app/certificates/page.tsx` and `loading.tsx`

**Files:**
- Modify: `app/certificates/page.tsx`
- Modify: `app/certificates/loading.tsx`

**Steps:**

- [ ] **Step 1: `loading.tsx`**

```tsx
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { LoadingCard } from '@/components/feedback/LoadingCard';

export default function CertificatesLoading() {
  return (
    <Container className="py-16">
      <Grid cols={{ md: 2, xl: 3 }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </Grid>
    </Container>
  );
}
```

- [ ] **Step 2: `page.tsx`**

```tsx
import { CertificateCard } from '@/components/certificates/CertificateCard';
import { EmptyState } from '@/components/feedback/EmptyState';
import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { RevealOnView } from '@/components/motion/RevealOnView';
import { CERTIFICATES } from '@/lib/data/certificates.data';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Credentials',
  description:
    'Professional certificates and credentials earned across engineering, cloud, and product disciplines.',
  alternates: { canonical: '/certificates' },
  openGraph: {
    title: 'Credentials · Mustafa Kibar',
    description:
      'Professional certificates and credentials earned across engineering, cloud, and product disciplines.',
    url: '/certificates',
  },
};

const CertificatesPage: NextPage = () => (
  <>
    <ChapterBand>
      <Container>
        <ChapterHead
          chapter="§ III — CREDENTIALS"
          title="Credentials"
          description="Certificates earned across engineering, cloud, and product disciplines."
        />
      </Container>
    </ChapterBand>

    <Container className="py-16">
      {CERTIFICATES.length === 0 ? (
        <EmptyState message="No credentials to show yet." />
      ) : (
        <Grid cols={{ md: 2, xl: 3 }}>
          {CERTIFICATES.map((c, i) => (
            <RevealOnView key={c.title} delay={Math.min(i, 9) * 0.04}>
              <CertificateCard certificate={c} />
            </RevealOnView>
          ))}
        </Grid>
      )}
    </Container>
  </>
);

export default CertificatesPage;
```

- [ ] **Step 3: Verify**

```bash
bun run typecheck && bun run build && bun run dev
```
Visit `/certificates`. Confirm grid, image desaturate-on-hover, info strip render.

- [ ] **Step 4: Commit**

```bash
git add app/certificates
git commit -m "feat(certificates): wire v2 page composition"
```

---

### Task 5.3: Update certificates OG image

**Files:**
- Modify: `app/certificates/opengraph-image.tsx`

**Steps:**

- [ ] **Step 1: Rewrite**

```tsx
import { ImageResponse } from 'next/og';
import { OgFrame, ogContentType, ogSize } from '@/app/_og/og-template';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'Credentials · Mustafa Kibar';

export default async function OG() {
  return new ImageResponse(
    (
      <OgFrame
        chapter="§ III — CREDENTIALS"
        title="Credentials"
        description="Earned across engineering, cloud, and product disciplines."
      />
    ),
    { ...ogSize },
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/certificates/opengraph-image.tsx
git commit -m "feat(og): refresh /certificates OG image for v2"
```

---

### Task 5.4: Phase 5 verification gate

**Steps:**

- [ ] **Step 1: Type-check, lint, build**

```bash
bun run typecheck && bun run lint && bun run build
```

- [ ] **Step 2: Manual local preview & user approval**

- [ ] **Step 3: Phase boundary commit**

```bash
git commit --allow-empty -m "chore(phase-5): certificates complete"
```

## Phase 6 — New Routes (`/contact`, `/uses`, `/notes`)

**Goal:** Three new pages plus the MDX pipeline for `/notes`. Each route ships with chapter band, content composition, and OG image. Five seed notes are committed.

**Phase deliverable:** All seven routes work end-to-end. Notes index lists seeded MDX files; each note renders with Shiki-highlighted code blocks.

---

### Task 6.1: Add `lib/data/socials.data.ts`

**Files:**
- Create: `lib/data/socials.data.ts`

**Steps:**

- [ ] **Step 1: Create**

```ts
import { Envelope, FileText, Github, Linkedin } from '@/lib/icons';
import { RESUME_PATH } from '@/lib/constants/paths';
import type { ComponentType, SVGProps } from 'react';

export type Social = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  external?: boolean;
};

export const EMAIL_ADDRESS = 'mustafa@kibar.pro';

export const SOCIALS: readonly Social[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/mustafakibar',
    icon: Github,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mustafakibar',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'Resume',
    href: RESUME_PATH,
    icon: FileText,
    external: true,
  },
] as const;

export const EMAIL_SOCIAL: Social = {
  label: EMAIL_ADDRESS,
  href: `mailto:${EMAIL_ADDRESS}`,
  icon: Envelope,
};
```

- [ ] **Step 2: Commit**

```bash
git add lib/data/socials.data.ts
git commit -m "feat(data): add socials and email constants"
```

---

### Task 6.2: Add `hooks/useCopyToClipboard.ts`

**Files:**
- Create: `hooks/useCopyToClipboard.ts`

**Steps:**

- [ ] **Step 1: Hook**

```ts
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const useCopyToClipboard = (resetMs = 1500) => {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(
    async (value: string) => {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        if (timeout.current) clearTimeout(timeout.current);
        timeout.current = setTimeout(() => setCopied(false), resetMs);
      } catch {
        setCopied(false);
      }
    },
    [resetMs],
  );

  useEffect(() => () => {
    if (timeout.current) clearTimeout(timeout.current);
  }, []);

  return { copied, copy };
};

export { useCopyToClipboard };
```

- [ ] **Step 2: Commit**

```bash
git add hooks/useCopyToClipboard.ts
git commit -m "feat(hooks): add useCopyToClipboard"
```

---

### Task 6.3: Build `components/contact/*` (StatusPill, EmailRow, SocialRow, ContactList)

**Files:**
- Create: `components/contact/StatusPill/StatusPill.tsx` + `index.ts`
- Create: `components/contact/EmailRow/EmailRow.tsx` + `index.ts`
- Create: `components/contact/SocialRow/SocialRow.tsx` + `index.ts`
- Create: `components/contact/ContactList/ContactList.tsx` + `index.ts`
- Create: `components/contact/index.ts`

**Steps:**

- [ ] **Step 1: `StatusPill`**

`components/contact/StatusPill/StatusPill.tsx`:
```tsx
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type StatusPillProps = {
  children: ReactNode;
  className?: string;
};

const StatusPill = ({ children, className }: StatusPillProps) => (
  <span
    className={cn(
      'inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-gold',
      className,
    )}>
    <span aria-hidden className="size-1.5 rounded-full bg-success" />
    {children}
  </span>
);

export { StatusPill };
export type { StatusPillProps };
```

`components/contact/StatusPill/index.ts`:
```ts
export { StatusPill, type StatusPillProps } from './StatusPill';
```

- [ ] **Step 2: `EmailRow`**

`components/contact/EmailRow/EmailRow.tsx`:
```tsx
'use client';

import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { Copy, Check } from '@/lib/icons';
import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';
import { duration, easing } from '@/lib/tokens';
import { AnimatePresence } from 'motion/react';

type EmailRowProps = {
  email: string;
  className?: string;
};

const EmailRow = ({ email, className }: EmailRowProps) => {
  const { copied, copy } = useCopyToClipboard();
  return (
    <a
      href={`mailto:${email}`}
      onClick={(e) => {
        if (!e.shiftKey && !e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          void copy(email);
        }
      }}
      className={cn(
        'group inline-flex items-center gap-3 font-display text-3xl tracking-[-0.02em] text-ink transition-colors duration-fast hover:text-gold md:text-4xl',
        className,
      )}
      aria-label={`Copy ${email} to clipboard`}>
      <span className="gold-sweep">{email}</span>
      <span className="relative inline-flex size-6 shrink-0">
        <AnimatePresence initial={false} mode="wait">
          {copied ? (
            <motion.span
              key="check"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: duration.fast, ease: easing.out }}
              className="absolute inset-0 inline-flex items-center justify-center text-success">
              <Check className="size-5" />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: duration.fast, ease: easing.out }}
              className="absolute inset-0 inline-flex items-center justify-center text-ink-muted opacity-0 transition-opacity duration-fast group-hover:opacity-100">
              <Copy className="size-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span aria-live="polite" className="sr-only">
        {copied ? 'Copied to clipboard' : ''}
      </span>
    </a>
  );
};

export { EmailRow };
export type { EmailRowProps };
```

`components/contact/EmailRow/index.ts`:
```ts
export { EmailRow, type EmailRowProps } from './EmailRow';
```

- [ ] **Step 3: `SocialRow`**

`components/contact/SocialRow/SocialRow.tsx`:
```tsx
import { ChevronUpRight } from '@/lib/icons';
import type { Social } from '@/lib/data/socials.data';
import { Body } from '@/components/typography';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type SocialRowProps = {
  social: Social;
  className?: string;
};

const SocialRow = ({ social, className }: SocialRowProps) => {
  const Icon = social.icon;
  return (
    <Link
      href={social.href}
      target={social.external ? '_blank' : undefined}
      rel={social.external ? 'noopener noreferrer' : undefined}
      className={cn(
        'group flex items-center justify-between gap-4 border-b border-rule py-4 transition-colors duration-fast hover:border-gold/40',
        className,
      )}>
      <span className="flex items-center gap-4">
        <Icon className="size-5 text-ink-muted transition-colors duration-fast group-hover:text-gold" />
        <Body className="text-ink">{social.label}</Body>
      </span>
      <ChevronUpRight className="size-4 text-ink-faint transition-all duration-normal group-hover:-rotate-12 group-hover:translate-x-1 group-hover:text-gold" />
    </Link>
  );
};

export { SocialRow };
export type { SocialRowProps };
```

`components/contact/SocialRow/index.ts`:
```ts
export { SocialRow, type SocialRowProps } from './SocialRow';
```

- [ ] **Step 4: `ContactList`**

`components/contact/ContactList/ContactList.tsx`:
```tsx
import { SocialRow } from '@/components/contact/SocialRow';
import { SOCIALS } from '@/lib/data/socials.data';
import { cn } from '@/lib/utils';

type ContactListProps = {
  className?: string;
};

const ContactList = ({ className }: ContactListProps) => (
  <div className={cn('flex flex-col', className)}>
    {SOCIALS.map((s) => <SocialRow key={s.href} social={s} />)}
  </div>
);

export { ContactList };
export type { ContactListProps };
```

`components/contact/ContactList/index.ts`:
```ts
export { ContactList, type ContactListProps } from './ContactList';
```

- [ ] **Step 5: Contact barrel**

`components/contact/index.ts`:
```ts
export * from './StatusPill';
export * from './EmailRow';
export * from './SocialRow';
export * from './ContactList';
```

- [ ] **Step 6: Type-check & commit**

```bash
bun run typecheck
git add components/contact
git commit -m "feat(contact): add StatusPill, EmailRow (click-to-copy), SocialRow, ContactList"
```

---

### Task 6.4: Wire `app/contact/page.tsx` + OG image

**Files:**
- Create: `app/contact/page.tsx`
- Create: `app/contact/opengraph-image.tsx`

**Steps:**

- [ ] **Step 1: `page.tsx`**

```tsx
import { ContactList } from '@/components/contact/ContactList';
import { EmailRow } from '@/components/contact/EmailRow';
import { StatusPill } from '@/components/contact/StatusPill';
import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { Body, Subhead } from '@/components/typography';
import { EMAIL_ADDRESS } from '@/lib/data/socials.data';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach out for senior roles, consulting, and considered correspondence.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact · Mustafa Kibar',
    description:
      'Reach out for senior roles, consulting, and considered correspondence.',
    url: '/contact',
  },
};

const ContactPage: NextPage = () => (
  <>
    <ChapterBand>
      <Container>
        <ChapterHead
          chapter="§ IV — CORRESPONDENCE"
          title={<>Currently <em className="italic font-normal">available</em> for senior roles.</>}
          description="Direct, considered correspondence preferred over forms."
        />
      </Container>
    </ChapterBand>

    <Container size="narrow" className="flex flex-col gap-12 py-16">
      <StatusPill>Available · Istanbul · Remote-friendly</StatusPill>
      <div className="flex flex-col gap-3">
        <Subhead className="not-italic text-ink-muted">Write directly</Subhead>
        <EmailRow email={EMAIL_ADDRESS} />
      </div>
      <div className="flex flex-col gap-3">
        <Subhead className="not-italic text-ink-muted">Or find me at</Subhead>
        <ContactList />
      </div>
      <Body muted className="border-t border-rule pt-6 italic">
        Replies within 48 hours.
      </Body>
    </Container>
  </>
);

export default ContactPage;
```

- [ ] **Step 2: OG image**

`app/contact/opengraph-image.tsx`:
```tsx
import { ImageResponse } from 'next/og';
import { OgFrame, ogContentType, ogSize } from '@/app/_og/og-template';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'Contact · Mustafa Kibar';

export default async function OG() {
  return new ImageResponse(
    (
      <OgFrame
        chapter="§ IV — CORRESPONDENCE"
        title="Contact"
        description="Available for senior roles. Reach out directly."
      />
    ),
    { ...ogSize },
  );
}
```

- [ ] **Step 3: Verify**

```bash
bun run typecheck && bun run build && bun run dev
```
Visit `/contact`. Confirm: status pill renders; email row gold-sweep + copy icon; clicking email triggers copy + check icon for ~1.5s; social rows hover gold; reduced-motion still legible.

- [ ] **Step 4: Commit**

```bash
git add app/contact
git commit -m "feat(contact): build /contact with editorial composition"
```

---

### Task 6.5: Add `lib/data/uses.data.ts`

**Files:**
- Create: `lib/data/uses.data.ts`

**Steps:**

- [ ] **Step 1: Migrate from v1's about page inline list**

```ts
export type UseItem = {
  name: string;
  label?: string;
  link?: string;
};

export type UseCategory = {
  category: string;
  items: readonly UseItem[];
};

export const USES: readonly UseCategory[] = [
  {
    category: 'Desk',
    items: [
      { name: 'Tischkönig Flex v2 Adjustable', label: 'Standing desk' },
    ],
  },
  {
    category: 'Computer',
    items: [
      { name: 'MacBook Pro M3', label: 'Daily driver' },
      { name: 'AMD Ryzen 9 5900X · MSI Meg X570 Ace · Asus GTX 1070 · 32GB G.Skill Trident Z Neo · Seagate Firecuda 530 1TB · Corsair RM850x · Corsair 5000D', label: 'Tower' },
    ],
  },
  {
    category: 'Display & Audio',
    items: [
      { name: 'ViewSonic VP3268-4K', label: 'IPS monitor' },
      { name: 'SteelSeries Arctis Pro Wireless', label: 'Headset' },
      { name: 'Anker Soundcore Motion+', label: 'Bluetooth speaker' },
    ],
  },
  {
    category: 'Peripherals',
    items: [
      { name: 'Logitech G915 TKL Lightspeed', label: 'Wireless keyboard' },
      { name: 'Logitech G502 Lightspeed', label: 'Wireless mouse' },
    ],
  },
  {
    category: 'Software',
    items: [
      { name: 'Cursor', label: 'Editor' },
      { name: 'iTerm2 + zsh', label: 'Shell' },
      { name: 'Raycast', label: 'Launcher' },
      { name: '1Password', label: 'Secrets' },
      { name: 'Linear', label: 'Tracking' },
    ],
  },
  {
    category: 'Editor & Dotfiles',
    items: [
      { name: 'Cursor settings', label: 'Synced via Cursor account' },
      { name: 'Custom zsh config', label: 'Mostly defaults + a handful of aliases' },
    ],
  },
] as const;
```

- [ ] **Step 2: Commit**

```bash
git add lib/data/uses.data.ts
git commit -m "feat(data): add /uses workshop inventory"
```

---

### Task 6.6: Build `components/uses/UsesIndex` and `components/uses/DeskBand`

**Files:**
- Create: `components/uses/UsesIndex/UsesIndex.tsx` + `index.ts`
- Create: `components/uses/DeskBand/DeskBand.tsx` + `index.ts`

**Steps:**

- [ ] **Step 1: `UsesIndex`**

`components/uses/UsesIndex/UsesIndex.tsx`:
```tsx
import { Body, Caption, Subhead } from '@/components/typography';
import { USES } from '@/lib/data/uses.data';
import { cn } from '@/lib/utils';

type UsesIndexProps = {
  className?: string;
};

const UsesIndex = ({ className }: UsesIndexProps) => (
  <dl className={cn('grid grid-cols-1 gap-y-8 md:grid-cols-[140px_1fr] md:gap-x-12', className)}>
    {USES.map((cat) => (
      <div key={cat.category} className="contents">
        <dt><Subhead className="text-gold">{cat.category}</Subhead></dt>
        <dd className="flex flex-col gap-2">
          {cat.items.map((item) => (
            <div key={item.name} className="flex flex-col">
              <Body className="text-ink">{item.name}</Body>
              {item.label && <Caption>{item.label}</Caption>}
            </div>
          ))}
        </dd>
      </div>
    ))}
  </dl>
);

export { UsesIndex };
export type { UsesIndexProps };
```

`components/uses/UsesIndex/index.ts`:
```ts
export { UsesIndex, type UsesIndexProps } from './UsesIndex';
```

- [ ] **Step 2: `DeskBand`**

`components/uses/DeskBand/DeskBand.tsx`:
```tsx
import { Caption } from '@/components/typography';
import {
  ABOUT_DESK_IMAGE_ALT,
  ABOUT_DESK_IMAGE_SRC,
} from '@/lib/constants/image';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type DeskBandProps = {
  caption?: string;
  className?: string;
};

const DeskBand = ({ caption = 'The desk, 2026.', className }: DeskBandProps) => (
  <figure className={cn('relative isolate flex flex-col gap-3', className)}>
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg ring-1 ring-rule">
      <Image
        src={ABOUT_DESK_IMAGE_SRC}
        alt={ABOUT_DESK_IMAGE_ALT}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/80 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-0 mix-blend-overlay bg-glow-gold" />
    </div>
    <figcaption><Caption className="italic">{caption}</Caption></figcaption>
  </figure>
);

export { DeskBand };
export type { DeskBandProps };
```

`components/uses/DeskBand/index.ts`:
```ts
export { DeskBand, type DeskBandProps } from './DeskBand';
```

- [ ] **Step 3: Type-check & commit**

```bash
bun run typecheck
git add components/uses
git commit -m "feat(uses): add UsesIndex and DeskBand"
```

---

### Task 6.7: Wire `app/uses/page.tsx` + OG image

**Files:**
- Create: `app/uses/page.tsx`
- Create: `app/uses/opengraph-image.tsx`

**Steps:**

- [ ] **Step 1: `page.tsx`**

```tsx
import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { DeskBand } from '@/components/uses/DeskBand';
import { UsesIndex } from '@/components/uses/UsesIndex';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    'The hardware, software, and tools I work from in Istanbul.',
  alternates: { canonical: '/uses' },
  openGraph: {
    title: 'Uses · Mustafa Kibar',
    description:
      'The hardware, software, and tools I work from in Istanbul.',
    url: '/uses',
  },
};

const UsesPage: NextPage = () => (
  <>
    <ChapterBand>
      <Container>
        <ChapterHead
          chapter="§ V — WORKSHOP"
          title="Workshop"
          description="The desk, the machine, and the tools — what I actually use."
        />
      </Container>
    </ChapterBand>

    <Container size="narrow" className="flex flex-col gap-16 py-16">
      <UsesIndex />
      <DeskBand />
    </Container>
  </>
);

export default UsesPage;
```

- [ ] **Step 2: OG**

`app/uses/opengraph-image.tsx`:
```tsx
import { ImageResponse } from 'next/og';
import { OgFrame, ogContentType, ogSize } from '@/app/_og/og-template';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'Uses · Mustafa Kibar';

export default async function OG() {
  return new ImageResponse(
    (
      <OgFrame
        chapter="§ V — WORKSHOP"
        title="Uses"
        description="Hardware, software, and tools I actually use."
      />
    ),
    { ...ogSize },
  );
}
```

- [ ] **Step 3: Verify & commit**

```bash
bun run typecheck && bun run build && bun run dev
git add app/uses
git commit -m "feat(uses): build /uses page with editorial index and desk band"
```

---

### Task 6.8: Build the MDX pipeline (Shiki theme + utilities)

**Goal:** Build-time MDX compilation with Shiki SSR highlighting using a custom theme.

**Files:**
- Create: `lib/shiki/kibar-luxe.json` (custom theme)
- Create: `lib/shiki.ts` (highlighter singleton)
- Create: `lib/notes.ts` (content/notes index)
- Create: `content/notes/.gitkeep` (placeholder dir)
- Create: `tests/lib/notes.test.ts` (TDD for notes index)

**Steps:**

- [ ] **Step 1: Install ts-node-test runner if absent**

For TDD on a single utility function we use Bun's built-in test runner. No install needed.

- [ ] **Step 2: Custom Shiki theme**

`lib/shiki/kibar-luxe.json`:
```json
{
  "name": "kibar-luxe",
  "type": "dark",
  "colors": {
    "editor.background": "#0d0a09",
    "editor.foreground": "#f3e3c7"
  },
  "tokenColors": [
    { "scope": ["comment", "punctuation.definition.comment"],            "settings": { "foreground": "#c89b53", "fontStyle": "italic" } },
    { "scope": ["keyword", "storage", "storage.type"],                    "settings": { "foreground": "#c84545" } },
    { "scope": ["string", "string.quoted"],                                "settings": { "foreground": "#d4c19b" } },
    { "scope": ["constant.numeric", "constant.language"],                  "settings": { "foreground": "#e6b870" } },
    { "scope": ["entity.name.function", "support.function"],               "settings": { "foreground": "#f3e3c7" } },
    { "scope": ["entity.name.type", "support.type", "support.class"],      "settings": { "foreground": "#e6b870", "fontStyle": "italic" } },
    { "scope": ["variable", "variable.parameter"],                         "settings": { "foreground": "#f3e3c7" } },
    { "scope": ["punctuation"],                                            "settings": { "foreground": "#9f8a6a" } },
    { "scope": ["meta.tag", "entity.name.tag"],                            "settings": { "foreground": "#c89b53" } },
    { "scope": ["entity.other.attribute-name"],                            "settings": { "foreground": "#e6b870", "fontStyle": "italic" } }
  ]
}
```

- [ ] **Step 3: Highlighter singleton**

`lib/shiki.ts`:
```ts
import 'server-only';
import { createHighlighter, type Highlighter } from 'shiki';
import theme from './shiki/kibar-luxe.json';

const LANGS = [
  'typescript', 'tsx', 'javascript', 'jsx',
  'css', 'html', 'json', 'bash', 'shell',
  'rust', 'go', 'sql', 'kotlin', 'dart',
  'markdown', 'mdx', 'yaml', 'toml', 'diff',
] as const;

let highlighterPromise: Promise<Highlighter> | null = null;

const getHighlighter = (): Promise<Highlighter> => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [theme],
      langs: [...LANGS],
    });
  }
  return highlighterPromise;
};

export { getHighlighter };
```

- [ ] **Step 4: Notes index module — TDD**

Write the failing test first.

`tests/lib/notes.test.ts`:
```ts
import { describe, expect, it } from 'bun:test';
import { parseNoteFrontmatter, sortNotes } from '@/lib/notes';

describe('parseNoteFrontmatter', () => {
  it('extracts title, description, date, tags, published', () => {
    const raw = `---
title: My note
description: A short description
date: 2026-04-12
tags: [typescript, mdx]
published: true
---

# Body
`;
    const result = parseNoteFrontmatter('test-slug', raw);
    expect(result.slug).toBe('test-slug');
    expect(result.frontmatter.title).toBe('My note');
    expect(result.frontmatter.description).toBe('A short description');
    expect(result.frontmatter.date).toBe('2026-04-12');
    expect(result.frontmatter.tags).toEqual(['typescript', 'mdx']);
    expect(result.frontmatter.published).toBe(true);
    expect(result.content.trim().startsWith('# Body')).toBe(true);
  });

  it('defaults published to true when missing', () => {
    const raw = `---
title: T
description: D
date: 2026-04-01
tags: []
---

x
`;
    const { frontmatter } = parseNoteFrontmatter('s', raw);
    expect(frontmatter.published).toBe(true);
  });
});

describe('sortNotes', () => {
  it('sorts by date descending', () => {
    const a = { slug: 'a', frontmatter: { title: 'A', description: '', date: '2026-01-01', tags: [], published: true }, content: '' };
    const b = { slug: 'b', frontmatter: { title: 'B', description: '', date: '2026-06-01', tags: [], published: true }, content: '' };
    const c = { slug: 'c', frontmatter: { title: 'C', description: '', date: '2026-03-01', tags: [], published: true }, content: '' };
    const result = sortNotes([a, b, c]);
    expect(result.map((n) => n.slug)).toEqual(['b', 'c', 'a']);
  });

  it('filters unpublished', () => {
    const a = { slug: 'a', frontmatter: { title: 'A', description: '', date: '2026-01-01', tags: [], published: false }, content: '' };
    const b = { slug: 'b', frontmatter: { title: 'B', description: '', date: '2026-06-01', tags: [], published: true }, content: '' };
    const result = sortNotes([a, b]);
    expect(result.map((n) => n.slug)).toEqual(['b']);
  });
});
```

Run:
```bash
bun test tests/lib/notes.test.ts
```
Expected: FAIL (module doesn't exist yet).

- [ ] **Step 5: Implement `lib/notes.ts`**

```ts
import 'server-only';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export type NoteFrontmatter = {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  tags: readonly string[];
  published: boolean;
};

export type Note = {
  slug: string;
  frontmatter: NoteFrontmatter;
  content: string;
};

export type NoteSummary = {
  slug: string;
  frontmatter: NoteFrontmatter;
  readingTimeMinutes: number;
};

const NOTES_DIR = path.join(process.cwd(), 'content', 'notes');

const parseNoteFrontmatter = (slug: string, raw: string): Note => {
  const parsed = matter(raw);
  const fm = parsed.data as Partial<NoteFrontmatter>;
  return {
    slug,
    frontmatter: {
      title: fm.title ?? 'Untitled',
      description: fm.description ?? '',
      date: fm.date ?? '1970-01-01',
      tags: Array.isArray(fm.tags) ? (fm.tags as string[]) : [],
      published: fm.published ?? true,
    },
    content: parsed.content,
  };
};

const sortNotes = (notes: readonly Note[]): readonly Note[] =>
  notes
    .filter((n) => n.frontmatter.published)
    .slice()
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

const listAllNotes = async (): Promise<readonly Note[]> => {
  let files: string[] = [];
  try {
    files = await fs.readdir(NOTES_DIR);
  } catch {
    return [];
  }
  const mdxFiles = files.filter((f) => f.endsWith('.mdx'));
  const notes = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = await fs.readFile(path.join(NOTES_DIR, file), 'utf8');
      return parseNoteFrontmatter(slug, raw);
    }),
  );
  return sortNotes(notes);
};

const summariseNote = (note: Note): NoteSummary => ({
  slug: note.slug,
  frontmatter: note.frontmatter,
  readingTimeMinutes: Math.max(1, Math.round(readingTime(note.content).minutes)),
});

const listNoteSummaries = async (): Promise<readonly NoteSummary[]> => {
  const notes = await listAllNotes();
  return notes.map(summariseNote);
};

const getNote = async (slug: string): Promise<Note | null> => {
  try {
    const raw = await fs.readFile(path.join(NOTES_DIR, `${slug}.mdx`), 'utf8');
    return parseNoteFrontmatter(slug, raw);
  } catch {
    return null;
  }
};

const getNoteSlugs = async (): Promise<readonly string[]> => {
  const notes = await listAllNotes();
  return notes.map((n) => n.slug);
};

export {
  parseNoteFrontmatter,
  sortNotes,
  listAllNotes,
  listNoteSummaries,
  getNote,
  getNoteSlugs,
  summariseNote,
};
```

- [ ] **Step 6: Re-run test — expect PASS**

```bash
bun test tests/lib/notes.test.ts
```
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
mkdir -p content/notes
touch content/notes/.gitkeep
git add lib/shiki.ts lib/shiki content/notes lib/notes.ts tests
git commit -m "feat(notes): add MDX pipeline (shiki theme + notes index utilities)"
```

---

### Task 6.9: Build `components/notes/*` (Callout, CodeBlock, Demo, NoteContent, NoteCard)

**Files:**
- Create: `components/notes/Callout/Callout.tsx` + `index.ts`
- Create: `components/notes/CodeBlock/CodeBlock.tsx` + `index.ts`
- Create: `components/notes/Demo/Demo.tsx` + `index.ts`
- Create: `components/notes/NoteCard/NoteCard.tsx` + `index.ts`
- Create: `components/notes/NoteContent/NoteContent.tsx` + `index.ts`
- Create: `components/notes/index.ts`

**Steps:**

- [ ] **Step 1: `Callout`**

`components/notes/Callout/Callout.tsx`:
```tsx
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type CalloutProps = {
  type?: 'note' | 'warning';
  children: ReactNode;
  className?: string;
};

const Callout = ({ type = 'note', children, className }: CalloutProps) => (
  <aside
    role="note"
    className={cn(
      'my-6 rounded-md border-l-2 bg-elevated px-4 py-3 font-body text-sm text-ink-muted',
      type === 'note' ? 'border-gold' : 'border-crimson',
      className,
    )}>
    {children}
  </aside>
);

export { Callout };
export type { CalloutProps };
```

`components/notes/Callout/index.ts`:
```ts
export { Callout, type CalloutProps } from './Callout';
```

- [ ] **Step 2: `CodeBlock` (uses Shiki at server render time)**

`components/notes/CodeBlock/CodeBlock.tsx`:
```tsx
import 'server-only';
import { getHighlighter } from '@/lib/shiki';
import { cn } from '@/lib/utils';

type CodeBlockProps = {
  code: string;
  lang?: string;
  className?: string;
};

const CodeBlock = async ({ code, lang = 'tsx', className }: CodeBlockProps) => {
  const highlighter = await getHighlighter();
  const html = highlighter.codeToHtml(code, { lang, theme: 'kibar-luxe' });
  return (
    <div
      className={cn(
        'my-6 overflow-x-auto rounded-md border border-rule bg-canvas font-mono text-sm leading-relaxed [&_pre]:p-4',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export { CodeBlock };
export type { CodeBlockProps };
```

`components/notes/CodeBlock/index.ts`:
```ts
export { CodeBlock, type CodeBlockProps } from './CodeBlock';
```

- [ ] **Step 3: `Demo`**

`components/notes/Demo/Demo.tsx`:
```tsx
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type DemoProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

const Demo = ({ title, children, className }: DemoProps) => (
  <figure
    className={cn(
      'my-6 overflow-hidden rounded-md border border-rule-strong bg-stage',
      className,
    )}>
    {title && (
      <figcaption className="border-b border-rule px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
        {title}
      </figcaption>
    )}
    <div className="p-6">{children}</div>
  </figure>
);

export { Demo };
export type { DemoProps };
```

`components/notes/Demo/index.ts`:
```ts
export { Demo, type DemoProps } from './Demo';
```

- [ ] **Step 4: `NoteContent` — wraps MDX with custom components**

`components/notes/NoteContent/NoteContent.tsx`:
```tsx
import { Callout } from '@/components/notes/Callout';
import { CodeBlock } from '@/components/notes/CodeBlock';
import { Demo } from '@/components/notes/Demo';
import { Body, Heading, Mono, Subhead } from '@/components/typography';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { ReactNode } from 'react';

const components = {
  h1: ({ children }: { children: ReactNode }) => <Heading as="h1">{children}</Heading>,
  h2: ({ children }: { children: ReactNode }) => <Subhead as="h2" className="mt-10 not-italic text-ink">{children}</Subhead>,
  h3: ({ children }: { children: ReactNode }) => <Subhead as="h3" className="mt-6">{children}</Subhead>,
  p:  ({ children }: { children: ReactNode }) => <Body className="my-3">{children}</Body>,
  ul: ({ children }: { children: ReactNode }) => <ul className="my-3 list-disc pl-6 marker:text-gold">{children}</ul>,
  ol: ({ children }: { children: ReactNode }) => <ol className="my-3 list-decimal pl-6 marker:text-gold">{children}</ol>,
  li: ({ children }: { children: ReactNode }) => <li className="my-1 font-body text-ink"><Body>{children}</Body></li>,
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="my-6 border-l-2 border-gold/50 pl-4 italic text-ink-muted">{children}</blockquote>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <Mono className="rounded bg-elevated px-1 py-0.5 text-gold">{children}</Mono>
  ),
  pre: ({ children }: { children: { props: { children: string; className?: string } } }) => {
    const child = children.props;
    const lang = child.className?.replace(/^language-/, '') ?? 'tsx';
    return <CodeBlock code={String(child.children).trim()} lang={lang} />;
  },
  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-gold underline-offset-4 hover:underline">
      {children}
    </a>
  ),
  Callout,
  Demo,
};

type NoteContentProps = {
  source: string;
};

const NoteContent = async ({ source }: NoteContentProps) => {
  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: false },
    components,
  });
  return <article className="prose-luxe">{content}</article>;
};

export { NoteContent };
export type { NoteContentProps };
```

`components/notes/NoteContent/index.ts`:
```ts
export { NoteContent, type NoteContentProps } from './NoteContent';
```

- [ ] **Step 5: `NoteCard` (index row)**

`components/notes/NoteCard/NoteCard.tsx`:
```tsx
import type { NoteSummary } from '@/lib/notes';
import { Body, Mono, Subhead } from '@/components/typography';
import { cn } from '@/lib/utils';
import { NOTES_PATH } from '@/lib/constants/paths';
import Link from 'next/link';

type NoteCardProps = {
  note: NoteSummary;
  index: number;
  className?: string;
};

const ROMANS = ['i','ii','iii','iv','v','vi','vii','viii','ix','x','xi','xii'] as const;

const NoteCard = ({ note, index, className }: NoteCardProps) => (
  <Link
    href={`${NOTES_PATH}/${note.slug}`}
    className={cn(
      'group flex items-baseline gap-4 border-b border-rule py-4 transition-colors duration-fast hover:bg-rule/40',
      className,
    )}>
    <span className="font-display italic text-gold w-10 shrink-0">
      {ROMANS[index] ?? `${index + 1}.`}
    </span>
    <div className="flex-1">
      <Subhead as="h3" className="not-italic text-ink transition-colors duration-fast group-hover:text-gold">
        {note.frontmatter.title}
      </Subhead>
      {note.frontmatter.description && (
        <Body size="sm" muted className="mt-1 line-clamp-1">
          {note.frontmatter.description}
        </Body>
      )}
    </div>
    <Mono className="text-ink-faint">{note.frontmatter.date}</Mono>
    <Mono className="text-ink-faint">{note.readingTimeMinutes} min</Mono>
  </Link>
);

export { NoteCard };
export type { NoteCardProps };
```

`components/notes/NoteCard/index.ts`:
```ts
export { NoteCard, type NoteCardProps } from './NoteCard';
```

- [ ] **Step 6: Notes barrel**

`components/notes/index.ts`:
```ts
export * from './Callout';
export * from './CodeBlock';
export * from './Demo';
export * from './NoteCard';
export * from './NoteContent';
```

- [ ] **Step 7: Type-check & commit**

```bash
bun run typecheck
git add components/notes
git commit -m "feat(notes): add Callout, CodeBlock, Demo, NoteCard, NoteContent components"
```

---

### Task 6.10: Wire `app/notes/page.tsx` (index)

**Files:**
- Create: `app/notes/page.tsx`
- Create: `app/notes/opengraph-image.tsx`

**Steps:**

- [ ] **Step 1: Index page**

```tsx
import { EmptyState } from '@/components/feedback/EmptyState';
import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { NoteCard } from '@/components/notes/NoteCard';
import { listNoteSummaries } from '@/lib/notes';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Notes',
  description:
    'Snippets, observations, and things worth keeping — short technical notes.',
  alternates: { canonical: '/notes' },
  openGraph: {
    title: 'Notes · Mustafa Kibar',
    description:
      'Snippets, observations, and things worth keeping — short technical notes.',
    url: '/notes',
  },
};

const NotesPage: NextPage = async () => {
  const notes = await listNoteSummaries();
  return (
    <>
      <ChapterBand>
        <Container>
          <ChapterHead
            chapter="§ VI — MARGINALIA"
            title="Marginalia"
            description="Snippets, observations, and things worth keeping."
          />
        </Container>
      </ChapterBand>

      <Container size="narrow" className="py-16">
        {notes.length === 0 ? (
          <EmptyState message="No notes published yet." />
        ) : (
          <ol className="flex flex-col" role="list">
            {notes.map((note, i) => (
              <li key={note.slug}><NoteCard note={note} index={i} /></li>
            ))}
          </ol>
        )}
      </Container>
    </>
  );
};

export default NotesPage;
```

- [ ] **Step 2: OG**

`app/notes/opengraph-image.tsx`:
```tsx
import { ImageResponse } from 'next/og';
import { OgFrame, ogContentType, ogSize } from '@/app/_og/og-template';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'Notes · Mustafa Kibar';

export default async function OG() {
  return new ImageResponse(
    (
      <OgFrame
        chapter="§ VI — MARGINALIA"
        title="Notes"
        description="Snippets, observations, and things worth keeping."
      />
    ),
    { ...ogSize },
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/notes
git commit -m "feat(notes): build notes index page"
```

---

### Task 6.11: Wire `app/notes/[slug]/page.tsx` + per-slug OG

**Files:**
- Create: `app/notes/[slug]/page.tsx`
- Create: `app/notes/[slug]/opengraph-image.tsx`

**Steps:**

- [ ] **Step 1: Detail page**

```tsx
import { NoteContent } from '@/components/notes/NoteContent';
import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { Body, Mono } from '@/components/typography';
import { ChevronRight } from '@/lib/icons';
import { NOTES_PATH } from '@/lib/constants/paths';
import { getNote, getNoteSlugs, summariseNote } from '@/lib/notes';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await getNoteSlugs();
  return slugs.map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNote(slug);
  if (!note) return {};
  return {
    title: note.frontmatter.title,
    description: note.frontmatter.description,
    alternates: { canonical: `${NOTES_PATH}/${slug}` },
    openGraph: {
      title: `${note.frontmatter.title} · Notes`,
      description: note.frontmatter.description,
      url: `${NOTES_PATH}/${slug}`,
      type: 'article',
    },
  };
}

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;
  const note = await getNote(slug);
  if (!note) notFound();
  const summary = summariseNote(note);

  return (
    <>
      <ChapterBand>
        <Container size="narrow">
          <Link href={NOTES_PATH} className="mb-3 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-gold hover:text-gold-bright">
            <ChevronRight className="size-3 rotate-180" />
            Notes
          </Link>
          <ChapterHead
            chapter={`§ VI · ${summary.frontmatter.date}`}
            title={summary.frontmatter.title}
            description={summary.frontmatter.description}
          />
          <Body muted className="mt-4 flex items-center gap-3">
            <Mono className="text-ink-faint">{summary.readingTimeMinutes} min read</Mono>
          </Body>
        </Container>
      </ChapterBand>

      <Container size="narrow" className="py-16">
        <NoteContent source={note.content} />
      </Container>
    </>
  );
}
```

- [ ] **Step 2: Per-slug OG**

`app/notes/[slug]/opengraph-image.tsx`:
```tsx
import { ImageResponse } from 'next/og';
import { OgFrame, ogContentType, ogSize } from '@/app/_og/og-template';
import { getNote } from '@/lib/notes';
import { notFound } from 'next/navigation';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'Notes · Mustafa Kibar';

export default async function OG({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = await getNote(slug);
  if (!note) notFound();
  return new ImageResponse(
    (
      <OgFrame
        chapter={`§ VI · ${note.frontmatter.date}`}
        title={note.frontmatter.title}
        description={note.frontmatter.description}
      />
    ),
    { ...ogSize },
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/notes/\[slug\]
git commit -m "feat(notes): build per-slug note page with MDX rendering"
```

---

### Task 6.12: Seed five notes

**Goal:** Five short note files so the index has content and the pipeline is exercised.

**Files:**
- Create: `content/notes/welcome.mdx`
- Create: `content/notes/typescript-satisfies-vs-as.mdx`
- Create: `content/notes/oklch-for-design-tokens.mdx`
- Create: `content/notes/server-components-mental-model.mdx`
- Create: `content/notes/scroll-driven-animations-css.mdx`

**Steps:**

- [ ] **Step 1: Create `welcome.mdx`**

```mdx
---
title: Welcome to Marginalia
description: A short index of intent.
date: 2026-05-04
tags: [meta]
published: true
---

This is where I keep what would otherwise vanish: small ideas, sharp snippets,
the half-paragraphs you write to yourself after a long debugging session.

Some are notes I want to remember. Some are notes I want to be searchable. All
of them assume you already know what you're doing.

<Callout type="note">
  Notes are short by design. If something here grows past five paragraphs, it
  belongs somewhere else.
</Callout>
```

- [ ] **Step 2: Create `typescript-satisfies-vs-as.mdx`**

```mdx
---
title: TypeScript — satisfies vs as
description: Use satisfies to validate a value's shape without widening it.
date: 2026-04-22
tags: [typescript]
published: true
---

`as` casts a value, throwing away whatever the compiler knew. `satisfies`
validates a value against a type and keeps the narrower inferred shape:

```ts
type Color = 'gold' | 'crimson';

const palette = {
  gold:    'oklch(0.74 0.105 72)',
  crimson: 'oklch(0.55 0.180 22)',
} satisfies Record<Color, string>;

type Keys = keyof typeof palette; // 'gold' | 'crimson'  (kept narrow)
```

Reach for `satisfies` whenever you'd otherwise write `as const` plus a manual
type assertion.
```

- [ ] **Step 3: Create `oklch-for-design-tokens.mdx`**

```mdx
---
title: OKLCH for design tokens
description: Why OKLCH beats HSL for perceptual lightness and brand control.
date: 2026-04-12
tags: [css, design]
published: true
---

HSL's lightness axis lies — `hsl(60 100% 50%)` and `hsl(240 100% 50%)` are nominally
the same lightness but yellow looks much brighter than blue. OKLCH fixes this.

```css
:root {
  --gold:    oklch(0.74 0.105 72);
  --crimson: oklch(0.55 0.180 22);
}
```

When I want a paler gold, I tweak `L` (the first axis) and chroma stays
honest. Modern Safari, Chrome, Firefox all support it.
```

- [ ] **Step 4: Create `server-components-mental-model.mdx`**

```mdx
---
title: A small mental model for Server Components
description: Components are server-by-default; 'use client' is the exception.
date: 2026-03-30
tags: [react, next.js]
published: true
---

The simplest mental model that has worked for me: pretend every component is
server-rendered until proven otherwise. Then add `'use client'` only when the
component needs:

- state hooks (`useState`, `useReducer`),
- lifecycle effects (`useEffect`, `useLayoutEffect`),
- browser APIs (clipboard, observers, refs you actually mutate), or
- event handlers wired through callbacks.

Most components don't need any of this. Most components are server components.
```

- [ ] **Step 5: Create `scroll-driven-animations-css.mdx`**

```mdx
---
title: Scroll-driven animations in CSS
description: animation-timeline lets you drive keyframes from scroll position — no JS, no observer.
date: 2026-03-15
tags: [css, animation]
published: true
---

Replace many JS scroll observers with native CSS:

```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

.reveal {
  animation: fade-in linear both;
  animation-timeline: view();
  animation-range: entry 10% cover 30%;
}
```

Zero JS. Browser-native. Falls back gracefully on older engines.
```

- [ ] **Step 6: Verify pipeline**

```bash
bun run dev
```
Visit `/notes` (5 entries listed) and click into each one — code blocks render with the kibar-luxe theme.

- [ ] **Step 7: Commit**

```bash
git add content/notes
git commit -m "feat(notes): seed five initial marginalia entries"
```

---

### Task 6.13: Update sitemap

**Files:**
- Modify: `app/sitemap.ts`

**Steps:**

- [ ] **Step 1: Rewrite**

```ts
import {
  ABOUT_PATH,
  CERTIFICATES_PATH,
  CONTACT_PATH,
  HOME_PATH,
  NOTES_PATH,
  PROJECTS_PATH,
  USES_PATH,
} from '@/lib/constants/paths';
import env from '@/env';
import { getNoteSlugs } from '@/lib/notes';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.SITE_URL;
  const lastModified = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    HOME_PATH,
    ABOUT_PATH,
    PROJECTS_PATH,
    CERTIFICATES_PATH,
    CONTACT_PATH,
    USES_PATH,
    NOTES_PATH,
  ].map((p) => ({ url: `${base}${p}`, lastModified, changeFrequency: 'monthly' as const }));

  const slugs = await getNoteSlugs();
  const noteRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${base}${NOTES_PATH}/${slug}`,
    lastModified,
    changeFrequency: 'yearly' as const,
  }));

  return [...staticRoutes, ...noteRoutes];
}
```

- [ ] **Step 2: Verify**

```bash
bun run build
```
Visit `/sitemap.xml` in dev — confirm all 7 static + 5 note URLs are present.

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat(sitemap): include new routes and dynamic note slugs"
```

---

### Task 6.14: Phase 6 verification gate

**Steps:**

- [ ] **Step 1: Type-check, lint, build, test**

```bash
bun run typecheck && bun run lint && bun run build && bun test
```

- [ ] **Step 2: Manual local preview & user approval**

Verify all seven routes work: `/`, `/about`, `/projects`, `/certificates`, `/contact`, `/uses`, `/notes`, `/notes/welcome`, etc.

- [ ] **Step 3: Phase boundary commit**

```bash
git commit --allow-empty -m "chore(phase-6): new routes complete"
```

## Phase 7 — Polish

**Goal:** View Transitions wiring, motion fine-tuning, micro-interactions verified across pages, command palette gold-sweep on selected, mobile menu polish, dotted attention to detail.

**Phase deliverable:** The site feels finished. Every hover, every page transition, every focus ring tested and tuned.

---

### Task 7.1: Wire `app/template.tsx` for page transitions

**Goal:** Cross-page fade + 8px y-translate on every navigation, reduced-motion-respecting.

**Files:**
- Create: `app/template.tsx`

**Steps:**

- [ ] **Step 1: Create the template**

```tsx
import { PageTransition } from '@/components/motion/PageTransition';
import type { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
```

- [ ] **Step 2: Verify**

```bash
bun run dev
```
Navigate between routes — observe the fade/translate. Toggle reduced motion in OS settings — observe the cut.

- [ ] **Step 3: Commit**

```bash
git add app/template.tsx
git commit -m "feat(motion): add page transitions via app/template"
```

---

### Task 7.2: Add `view-transition-name` for shared elements (header monogram, page title)

**Goal:** When the browser supports the View Transitions API, shared header monogram morphs across navigations.

**Files:**
- Modify: `components/chrome/SiteHeader/Monogram.tsx`
- Modify: `app/globals.css`

**Steps:**

- [ ] **Step 1: Tag the monogram**

In `components/chrome/SiteHeader/Monogram.tsx`, change the outer `<span>` from:

```tsx
<span className={cn('inline-flex items-baseline font-display', className)}>
```

to:

```tsx
<span
  className={cn('inline-flex items-baseline font-display', className)}
  style={{ viewTransitionName: 'site-monogram' }}>
```

- [ ] **Step 2: Add the CSS opt-in for browsers that support it**

Append to `app/globals.css`'s `@layer utilities`:

```css
@view-transition {
  navigation: auto;
}

::view-transition-old(site-monogram),
::view-transition-new(site-monogram) {
  animation-duration: var(--dur-normal);
  animation-timing-function: var(--ease-out);
}
```

- [ ] **Step 3: Verify in Chrome**

```bash
bun run dev
```
Navigate between pages — observe a single subtle morph on the monogram (Chrome). Other browsers silently fall back to no-op (still fade via app/template.tsx).

- [ ] **Step 4: Commit**

```bash
git add components/chrome/SiteHeader/Monogram.tsx app/globals.css
git commit -m "feat(motion): wire View Transitions for shared monogram element"
```

---

### Task 7.3: Add ⌘K hint chip on the home hero

**Goal:** A small affordance that nudges visitors to discover the command palette.

**Files:**
- Modify: `components/home/HomeHero/HomeHero.tsx`

**Steps:**

- [ ] **Step 1: Add the hint chip**

In `HomeHero.tsx`, just below the `<Link>` for "Currently available", add:

```tsx
<span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-rule px-3 py-1 font-mono text-xs uppercase tracking-widest text-ink-faint">
  Press <kbd className="rounded bg-rule px-1.5 py-0.5 text-ink">⌘</kbd>
  <kbd className="rounded bg-rule px-1.5 py-0.5 text-ink">K</kbd>
  <span>to navigate</span>
</span>
```

- [ ] **Step 2: Commit**

```bash
git add components/home/HomeHero/HomeHero.tsx
git commit -m "feat(home): add ⌘K hint chip"
```

---

### Task 7.4: Polish CommandPalette selected state with gold-sweep

**Goal:** Selected item background uses a gold-sweep gradient.

**Files:**
- Modify: `components/chrome/CommandPalette/CommandPalette.tsx`

**Steps:**

- [ ] **Step 1: Update selected style**

In `CommandPalette.tsx`, replace the `Command.Item` className with:

```tsx
className="group flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 font-body text-sm text-ink-muted transition-colors duration-fast data-[selected=true]:bg-gradient-to-r data-[selected=true]:from-gold/10 data-[selected=true]:via-gold/15 data-[selected=true]:to-transparent data-[selected=true]:text-ink"
```

- [ ] **Step 2: Commit**

```bash
git add components/chrome/CommandPalette/CommandPalette.tsx
git commit -m "feat(palette): gold-sweep highlight on selected item"
```

---

### Task 7.5: Add `RevealOnView` to long lists where helpful

**Goal:** Index lists (notes, certificates, projects) reveal staggered. Skip on home (already animated via wordmark + fast scroll).

**Files:**
- Modify: `app/notes/page.tsx`
- Modify: `app/certificates/page.tsx` (already done in Phase 5)
- Modify: `app/projects/page.tsx` (already done in Phase 4)

**Steps:**

- [ ] **Step 1: Wrap notes index rows**

In `app/notes/page.tsx`:
```tsx
import { RevealOnView } from '@/components/motion/RevealOnView';
// ...
{notes.map((note, i) => (
  <li key={note.slug}>
    <RevealOnView delay={Math.min(i, 9) * 0.04}>
      <NoteCard note={note} index={i} />
    </RevealOnView>
  </li>
))}
```

- [ ] **Step 2: Verify visually & commit**

```bash
bun run dev
git add app/notes/page.tsx
git commit -m "feat(notes): reveal-on-view for index rows"
```

---

### Task 7.6: Phase 7 verification gate

- [ ] **Step 1: Type-check, lint, build, test**

```bash
bun run typecheck && bun run lint && bun run build && bun test
```

- [ ] **Step 2: Manual smoke pass across every route**

Navigate every route in `bun run dev`. Verify hover micro-interactions, page transitions, ⌘K hint, command palette gold-sweep on selected, monogram morph (Chrome), and reduced-motion fallback.

- [ ] **Step 3: Phase boundary commit**

```bash
git commit --allow-empty -m "chore(phase-7): polish complete"
```

## Phase 8 — QA, Accessibility, Performance

**Goal:** Hit Lighthouse 100 across all four categories on every route, mobile + desktop. Pass a manual a11y review. Verify mobile QA on a real device. Verify reduced-motion. Verify high-contrast.

**Phase deliverable:** Every route is green. The acceptance criteria in the spec (§ XIV) are all true.

---

### Task 8.1: Run bundle analyzer and fix any > 100kb route

**Steps:**

- [ ] **Step 1: Build with analyzer**

```bash
ANALYZE=true bun run build
```

- [ ] **Step 2: Compare to baseline**

Open the generated `.next/analyze/client.html`. The home route's First Load JS should be < 100kb gzipped. If it's higher, investigate via the treemap.

- [ ] **Step 3: Common fixes (apply only if needed)**

- A `'use client'` annotation that should not be there: walk client components, demote any that don't actually need state/effects to server components.
- Heavy lucide imports: ensure each icon is named-imported (e.g. `import { Github } from 'lucide-react'`) rather than `import * as Icons from 'lucide-react'`.
- Motion bundle: `motion/react-client` is fine; do not import from `framer-motion` (we never installed it).

- [ ] **Step 4: Document the final bundle in commit**

If you made changes, commit with a message that names the saving:
```bash
git commit -am "perf: reduce home First Load JS (<commentary on what changed>)"
```
If no changes were needed, no commit.

---

### Task 8.2: Lighthouse audit (mobile + desktop) on every route

**Steps:**

- [ ] **Step 1: Build + start production server**

```bash
bun run build && bun run start
```

In another terminal:

- [ ] **Step 2: Run Lighthouse on each route**

For each of `/`, `/about`, `/projects`, `/certificates`, `/contact`, `/uses`, `/notes`, `/notes/welcome`:

1. Open Chrome DevTools → Lighthouse panel.
2. Pick "Mobile" device, throttling: Slow 4G, Simulated.
3. Audit: Performance + Accessibility + Best Practices + SEO.
4. Run.
5. Goal: 100/100/100/100. If any category is below 100, note the audits and fix them in this task.
6. Repeat with "Desktop" device.

Common fixes:
- LCP element not preloaded: check the home hero's wordmark is rendered server-side (no `'use client'` boundary above it for the static text). The Wordmark component IS client; if LCP is the wordmark text, accept the modest hit, or move letter staggering inside a single `motion` element (one wrapper) rather than one motion span per letter.
- Render-blocking resources: ensure `font-display: swap` is in effect (it is, via fonts.ts). No third-party blocking JS.
- CLS: pin all images with explicit width/height; the only band image is `desk.webp` and it uses `fill` with aspect-ratio container.
- a11y: verify `<main>` exists on every page (it does via app/layout.tsx).

- [ ] **Step 3: Commit any fixes**

If fixes were necessary, commit each focused fix.

---

### Task 8.3: Manual accessibility pass

**Steps:**

- [ ] **Step 1: Keyboard navigation**

Tab through `/` end-to-end. Confirm:
- Focus ring is visible on every interactive element.
- The ⌘K palette traps focus when open and ESC closes it.
- Mobile menu (`md:` breakpoint or below) is keyboard-operable: hamburger → Tab through nav → ESC closes.
- The email row on `/contact` is reachable; pressing Enter triggers copy and tooltip.

If a focus ring is missing, add Tailwind `focus-visible:ring-2 focus-visible:ring-gold/60` to that interactive element.

- [ ] **Step 2: Skip link**

Add a skip link at the top of `app/layout.tsx`'s body, above the chrome:

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-gold focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-canvas">
  Skip to main content
</a>
```

And in the `<main>` element add `id="main-content"`.

- [ ] **Step 3: Screen reader smoke (VoiceOver on macOS)**

Enable VoiceOver. Navigate `/` start to finish. Confirm:
- Page title announced as "Mustafa Kibar — Senior Full-Stack Engineer · Mustafa Kibar".
- Wordmark announced as "KiBAR" (the `aria-label` on the heading).
- Section landmarks announced (Selected Work, Credentials).
- Footer announced.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "feat(a11y): add skip-to-main link"
```

---

### Task 8.4: Mobile QA on a real device

**Steps:**

- [ ] **Step 1: Find your machine's LAN IP**

```bash
ipconfig getifaddr en0
```
(or `ipconfig getifaddr en1` if on a different interface)

- [ ] **Step 2: Run dev server bound to all hosts**

```bash
bun run dev -- --hostname 0.0.0.0
```

- [ ] **Step 3: Visit from your phone**

On the phone, browse to `http://<your-lan-ip>:3000/`. Test:
- Layout at 360px-wide viewport (Safari iOS).
- Mobile menu open/close.
- ⌘K palette equivalent (long-press menu? command palette is desktop-first; mobile users use the menu — that's intentional).
- Notes list scrolling.
- Email click on `/contact`: confirm `mailto:` opens the mail composer (mobile clipboard API may not be available; the fallback is to follow the `mailto:` href, which the existing code does via `e.preventDefault()` only when desktop).

If mobile copy doesn't trigger, that's accepted: mobile users follow `mailto:`. Adjust EmailRow's onClick to only `preventDefault` on devices with a fine pointer:

```ts
onClick={(e) => {
  if (matchMedia('(pointer: fine)').matches && !e.shiftKey && !e.metaKey && !e.ctrlKey) {
    e.preventDefault();
    void copy(email);
  }
}}
```

If you make this change, commit it:
```bash
git add components/contact/EmailRow/EmailRow.tsx
git commit -m "fix(contact): only intercept email click on fine-pointer devices"
```

---

### Task 8.5: Reduced motion + high contrast smoke

**Steps:**

- [ ] **Step 1: Reduced motion (macOS)**

System Settings → Accessibility → Display → Reduce motion. Reload `/`. Confirm:
- Wordmark renders statically (no letter stagger, no gold sweep animation).
- Page transitions cut instantly.
- ScrollProgress bar still works (it's passive, not animated motion).
- Footer stamp does NOT pulse.

- [ ] **Step 2: High contrast (macOS)**

System Settings → Accessibility → Display → Increase contrast. Reload. Confirm legibility holds; if any low-contrast element jumps out, increase its tint manually.

If any element fails contrast, raise its color to a stronger token (e.g. `text-ink-muted` → `text-ink`) inside a `@media (prefers-contrast: more)` block in `app/globals.css`:

```css
@media (prefers-contrast: more) {
  :root {
    --color-rule: oklch(0.96 0.022 85 / 0.25);
    --color-rule-strong: oklch(0.96 0.022 85 / 0.40);
  }
}
```

- [ ] **Step 3: Commit any contrast tweaks**

```bash
git add app/globals.css
git commit -m "feat(a11y): tighten contrast under prefers-contrast: more"
```

---

### Task 8.6: Cross-browser smoke

**Steps:**

- [ ] **Step 1: Chrome (already done)**

- [ ] **Step 2: Safari**

Open every route in Safari. Verify:
- Fraunces SOFT axis falls back gracefully (font still renders).
- View Transitions API not supported — page transitions still fade via `app/template.tsx`.

- [ ] **Step 3: Firefox**

Same battery.

- [ ] **Step 4: Edge**

Same battery.

If any fails, fix and commit.

---

### Task 8.7: Phase 8 verification gate

- [ ] **Step 1: Final build + Lighthouse re-run**

```bash
bun run build && bun run start
```
Run Lighthouse on `/` mobile one final time. 100/100/100/100 required.

- [ ] **Step 2: User approval**

User personally walks through every route in production-mode local preview.

- [ ] **Step 3: Phase boundary commit**

```bash
git commit --allow-empty -m "chore(phase-8): qa and accessibility complete"
```

## Phase 9 — Merge

**Goal:** Bring `kibar.pro-v2` to `main` cleanly, tag the release, deploy, smoke-test in production.

**Phase deliverable:** `main` reflects v2; production at https://kibar.pro is the new site.

---

### Task 9.1: Refresh `README.md` to reflect v2

**Files:**
- Modify: `README.md`

**Steps:**

- [ ] **Step 1: Rewrite**

Update the project structure section, stack, and feature list to match v2. Critically: do NOT mention AI assistance anywhere.

```markdown
# kibar.pro

Personal portfolio of **Mustafa Kibar** — senior full-stack engineer based in Istanbul.

Live: [kibar.pro](https://kibar.pro)

## Stack

- **Framework:** Next.js 15 (App Router, React Server Components, Turbopack)
- **UI:** React 19, Tailwind CSS v4, OKLCH design tokens
- **Type:** Fraunces (display) + Geist Sans (body) + Geist Mono (code)
- **Motion:** [`motion`](https://motion.dev) + native CSS animations + View Transitions API
- **Content:** MDX for `/notes` with build-time Shiki highlighting
- **Icons:** lucide-react
- **Analytics:** Vercel Analytics + Speed Insights
- **Tooling:** TypeScript 5, ESLint 9, Prettier, Husky, lint-staged, commitlint
- **Compiler:** React Compiler
- **Package manager:** Bun

## Project structure

```
app/                   App Router routes
content/notes/         MDX notes content
components/            Domain-grouped components
  chrome/              SiteHeader, SiteFooter, CommandPalette, ScrollProgress
  home/                Hero, SkillsIndex, SelectedWorkList, CredentialsList
  about/               Biography, PortraitBand
  projects/            ProjectCard, SourceLink
  certificates/        CertificateCard
  contact/             ContactList, EmailRow, SocialRow, StatusPill
  uses/                UsesIndex, DeskBand
  notes/               NoteCard, NoteContent, Callout, CodeBlock, Demo
  layout/              Container, Grid, ChapterHead, ChapterBand, SectionViewer, ViewAllLink
  motion/              RevealOnView, GoldSweep, PageTransition
  media/               Portrait
  tag/                 Tag, TagList
  timeline/            Timeline
  typography/          Display, Heading, Subhead, Body, Caption, Eyebrow, Mono
  feedback/            LoadingCard, EmptyState, ErrorState
  ui/                  Button, Card, Skeleton (shadcn primitives)
env/                   Typed environment variable access
hooks/                 useReducedMotion, useCopyToClipboard, useScrollProgress
lib/
  shiki.ts             Highlighter singleton
  shiki/               Custom kibar-luxe theme
  notes.ts             MDX content index
  data/                Typed content data
  constants/           Paths, headers, image, cache-tag constants
  github.ts            GitHub API client
  utils.ts             cn() utility
  tokens.ts            JS motion tokens
docs/
  specs/               Design specifications
  plans/               Implementation plans
public/                Static assets
middleware.ts          CSP nonce + headers
next.config.ts         Security headers, image config, MDX, React Compiler
```

## Getting started

Requirements: Node.js 20+ and [Bun](https://bun.sh).

```bash
bun install
cp .env.example .env.local
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
| `bun run analyze`    | Build with bundle analyzer      |
| `bun run start`      | Run production build            |
| `bun run lint`       | ESLint                          |
| `bun run typecheck`  | `tsc --noEmit`                  |
| `bun run format`     | Prettier check                  |
| `bun run format:fix` | Prettier write                  |
| `bun test`           | Bun test runner                 |

## Authoring notes

Drop `.mdx` files into `content/notes/`. Frontmatter:

```yaml
---
title: A short title
description: One-line description
date: 2026-04-12
tags: [typescript]
published: true
---
```

Custom MDX components: `<Callout type="note|warning">`, `<Demo title="…">`. Code fences pick a language; output is highlighted at build time using the bundled `kibar-luxe` Shiki theme.

## Performance & accessibility

- Lighthouse 100/100/100/100 across all routes.
- Bundle: First Load JS < 100kb gzipped.
- WCAG 2.2 AA across all routes.
- Reduced-motion respected throughout.
- Strict CSP via nonce per request (see `middleware.ts`).

## License

[MIT](./LICENSE)

## Contact

[mustafa@kibar.pro](mailto:mustafa@kibar.pro)
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs(readme): update to reflect v2 stack and structure"
```

---

### Task 9.2: Final local production preview

**Steps:**

- [ ] **Step 1: Production build & start**

```bash
bun run build && bun run start
```

- [ ] **Step 2: Walk every route**

Verify the full Brand Covenant from § 0 of the spec — wordmark, monogram, dark-only, English-only, no AI references in any rendered content or any commit.

- [ ] **Step 3: User approval**

User personally signs off. This is the final gate before merging to `main`.

---

### Task 9.3: Rebase `kibar.pro-v2` onto current `main`

**Goal:** Pick up any drift from `main` (e.g. a hotfix landed there independently).

**Steps:**

- [ ] **Step 1: Fetch and rebase**

```bash
git fetch origin
git rebase origin/main
```

- [ ] **Step 2: Resolve conflicts (if any)**

Conflicts are unlikely (no one else is meant to be touching the same files), but if any arise: resolve by accepting the v2 version unless the conflict is in `.gitignore`, `.husky/`, or another infra file — then merge manually.

After resolving:
```bash
git add .
git rebase --continue
```

- [ ] **Step 3: Re-run verification**

```bash
bun run typecheck && bun run lint && bun run build && bun test
```

If anything broke from the rebase, fix and amend the relevant commit.

---

### Task 9.4: Merge to `main`

**Steps:**

- [ ] **Step 1: Switch to main**

```bash
git checkout main
git pull origin main
```

- [ ] **Step 2: Fast-forward merge**

```bash
git merge --ff-only kibar.pro-v2
```

If fast-forward is not possible, the rebase in 9.3 didn't happen. Go back, rebase, retry.

- [ ] **Step 3: Tag release**

```bash
git tag -a v2.0.0 -m "v2.0.0 — premium dark luxe rebuild"
```

- [ ] **Step 4: Push to origin**

```bash
git push origin main
git push origin v2.0.0
```

---

### Task 9.5: Post-deploy smoke

**Steps:**

- [ ] **Step 1: Wait for Vercel deploy**

Watch the Vercel deploy log; expect green within ~2 minutes.

- [ ] **Step 2: Production smoke**

Visit https://kibar.pro/ and walk every route. Confirm:
- Home renders new wordmark + sweep.
- All 7 routes load < 1.5s LCP on a 4G simulated network.
- OG previews render correctly when sharing the URL on a service that fetches OG (e.g. https://www.opengraph.xyz/).
- Sitemap at `/sitemap.xml` lists all routes including all note slugs.
- 404 / error pages still work (visit `/this-does-not-exist`).

- [ ] **Step 3: Tag closing commit (optional)**

If the deploy revealed something tiny, fix and ship a follow-up commit.

---

### Task 9.6: Branch cleanup

**Steps:**

- [ ] **Step 1: Delete local v2 branch**

```bash
git branch -d kibar.pro-v2
```

- [ ] **Step 2: (Optional) Push deletion of remote v2 if it was ever pushed**

```bash
git push origin --delete kibar.pro-v2 2>/dev/null || true
```

The implementation is complete. The v2 site is live; the brand covenant is honoured; the work is done.

## Plan Appendix

### A — Phase Boundary Summary

After every phase, the user reviews locally and approves before the next phase begins. This is non-negotiable.

| Phase | Approval gate signal |
|---|---|
| 0 | "Foundation locked." |
| 1 | "Chrome looks right." |
| 2 | "Home is shipped." |
| 3 | "About is shipped." |
| 4 | "Projects is shipped." |
| 5 | "Certificates is shipped." |
| 6 | "All routes work." |
| 7 | "Polish is in." |
| 8 | "QA is green." |
| 9 | "It's live." |

### B — Conventional Commit Vocabulary

- `feat:` new functionality
- `fix:` bug fix
- `refactor:` restructure without behaviour change
- `chore:` tooling, deps, infra
- `docs:` doc-only change
- `style:` formatting, no code logic
- `perf:` performance improvement
- `test:` tests only

Phase boundary commits use `chore(phase-N):`.

### C — Forbidden in Every Artifact

The Brand Covenant from § 0 of the spec is binding. Specifically:
- No commit, comment, README, or PR mentions AI, "AI-assisted", "generated by", Claude, Copilot, GPT, or any agent.
- No co-author trailers from agents.
- All visible copy is in English.
- The wordmark is `KiBAR` exactly — never `Kibar`, `KIBAR`, or `kibar`.

### D — Anti-Patterns to Avoid While Executing

- **Don't pre-optimise.** Stay on plan. If you spot a real opportunity not in the plan, file it as a follow-up note in `content/notes/` (drafts: `published: false`) — don't sneak it into a phase commit.
- **Don't widen scope.** No tags route, no project case studies, no light mode, no i18n. Spec § XII is binding.
- **Don't skip the local-preview gate** between phases. The user is the QA.
- **Don't squash phase commits.** Phase history is the change-log.

---

*— End of plan —*
