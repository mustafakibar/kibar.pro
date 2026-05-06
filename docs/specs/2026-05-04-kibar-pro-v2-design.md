# kibar.pro · v2 — Design Spec

**Working branch:** `kibar.pro-v2`
**Date:** 2026-05-04
**Status:** Draft for review
**Goal:** Rebuild kibar.pro end-to-end as a Premium Dark Luxe editorial portfolio.

---

## § 0 — Vision

The current site is a competent dark dev portfolio. v2 is a different animal: an **editorial, cinematic, single-author publication** that happens to be a portfolio. The reading experience matters as much as the content. Every detail — the italic _i_ in the wordmark, the gold sweep across the hero, the Roman-numeral list rows, the _§_ chapter markers — should reinforce a single coherent voice: **a senior engineer who treats craft seriously**.

### Brand Covenant

The site MUST honour these inviolable rules across every page, asset, and artifact:

|                |                                                                                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Wordmark**   | `KiBAR` — only the `i` is lowercase; `K`, `B`, `A`, `R` are uppercase. The italic `i` is the brand's signature. Never write `Kibar`, `KIBAR`, or `kibar` in any rendered headline. |
| **Monogram**   | `k.` — a single italic Fraunces lowercase `k` followed by a crimson period. Used in the header logo, favicon variants, and as the brand stamp.                                     |
| **Theme**      | Dark only. No light mode, no toggle. Brand commitment, not a limitation.                                                                                                           |
| **Authorship** | No reference to AI, "AI-assisted", "Claude", or similar in any commit message, code comment, README, PR description, or visible artifact. The author is Mustafa Kibar.             |
| **Language**   | All copy, comments, code, docs, and metadata are in English. Turkish appears only as occasional intentional brand details (the `kibar` = polite easter egg, etc.).                 |

---

## § I — Information Architecture

Seven routes. No more.

```
/                    Home          — Hero · Selected Work · Credentials
/about               About         — Biography · Timeline · Portrait
/projects            Projects      — Full grid of work · year-sorted
/certificates        Certificates  — Curated certificate gallery
/contact             Contact       — Editorial: status · email · socials
/uses                Uses          — Editorial Index of hardware/software/tools
/notes               Notes (Index) — Snippets index, year-sorted
/notes/[slug]        Note          — MDX content, Shiki-highlighted
```

**Out of scope:** `/tags/[tag]`, `/projects/[slug]` case studies, `/writing` longform, `/talks`, RSS, comments, pagination on Notes/Projects (a single year-sorted page is fine for personal scale).

Each top-level page carries a **chapter marker** in its hero band:

```
§ 0  Home
§ I  About — The Maker
§ II Projects — Selected Work
§ III Certificates — Credentials
§ IV Contact — Correspondence
§ V Uses — Workshop
§ VI Notes — Marginalia
```

The chapter marker is rendered in Geist Sans 10px, letter-spacing 5px, uppercase, gold; positioned above the page heading.

---

## § II — Design System

### II.1 — Color tokens

All colors are defined in OKLCH for perceptual consistency. Tailwind v4 `@theme` reads from CSS custom properties; legacy `hsl()` variables are removed.

```css
:root {
  /* Surfaces */
  --bg-canvas: oklch(0.09 0.012 35); /* near-black, warm tint */
  --bg-elevated: oklch(0.13 0.018 30); /* card surfaces */
  --bg-overlay: oklch(0.06 0.01 30 / 0.85); /* modals / palette */
  --bg-stage: oklch(0.14 0.045 20); /* hero / chapter bands */

  /* Ink (text) */
  --ink: oklch(0.96 0.022 85); /* primary body */
  --ink-muted: oklch(0.8 0.045 75); /* secondary body */
  --ink-subtle: oklch(0.58 0.045 70); /* captions, labels */
  --ink-faint: oklch(0.4 0.03 65); /* metadata */

  /* Brand accents */
  --gold: oklch(0.74 0.105 72); /* primary gold */
  --gold-bright: oklch(0.86 0.085 82); /* hero sweep peak */
  --gold-deep: oklch(0.55 0.11 60); /* gold pressed/active */
  --crimson: oklch(0.55 0.18 22); /* primary crimson */
  --crimson-deep: oklch(0.34 0.15 22); /* crimson backgrounds */

  /* Structure */
  --rule: oklch(0.96 0.022 85 / 0.1); /* hairlines */
  --rule-strong: oklch(0.96 0.022 85 / 0.18);

  /* State */
  --success: oklch(0.7 0.15 145);
  --warning: oklch(0.78 0.14 82);
  --danger: oklch(0.62 0.22 25);

  /* Glow / atmospheric */
  --glow-gold: oklch(0.74 0.105 72 / 0.15);
  --glow-crimson: oklch(0.55 0.18 22 / 0.18);
}
```

**Gradient — the gold sweep** (used in wordmark, hero, monogram, heading accents):

```css
background: linear-gradient(
  95deg,
  var(--ink) 0%,
  var(--gold) 60%,
  var(--ink) 100%
);
```

**Background atmosphere:** A subtle radial gold glow at upper-left (10% opacity) and crimson glow at lower-right of every page hero. Fixed-positioned, blurred 130px, behind content.

**Grain texture:** Inherited from current site (SVG noise, opacity 0.013, fixed). Kept as-is.

### II.2 — Typography

Three families, all loaded via `next/font/google` with `display: swap`.

```ts
// app/fonts.ts
display: Fraunces  (axes: opsz 9..144, wght 300..700, ital 0|1, soft 0..100)
body:    Geist Sans (wght 300..600)
mono:    Geist Mono (wght 400..500)
```

**Removed:** `Rowdies`, `Inconsolata`, `Lilita_One`, `Outfit`, `react-type-animation`. The brand consolidates to a single tightly-controlled trio.

**Display settings:** Fraunces is loaded with `font-variation-settings: 'opsz' 144, 'SOFT' 30` for hero/heading sizes (gives the warm, slightly soft optical-sized cut that defines the brand). Italic is reserved for: the `i` in the wordmark, the `k` in the monogram, list-row Roman numerals (`i. ii. iii.`), and category labels in editorial indices.

**Type scale** (rem-based, 1.0rem = 16px):

| Token          | Size                       | Usage              |
| -------------- | -------------------------- | ------------------ |
| `text-xs`      | 0.6875rem (11px)           | Labels, footnotes  |
| `text-sm`      | 0.8125rem (13px)           | Captions, metadata |
| `text-base`    | 0.9375rem (15px)           | Body               |
| `text-md`      | 1.0625rem (17px)           | Body-lead          |
| `text-lg`      | 1.25rem (20px)             | Subheadings        |
| `text-xl`      | 1.625rem (26px)            | Section heads      |
| `text-2xl`     | 2.125rem (34px)            | Page titles        |
| `text-3xl`     | 2.75rem (44px)             | Hero subheads      |
| `text-4xl`     | 3.75rem (60px)             | Hero (mobile)      |
| `text-display` | `clamp(3rem, 9vw, 8.5rem)` | Hero (desktop)     |

**Line-heights:** Display = 0.92. Headings = 1.05. Body = 1.55. Captions = 1.45.

**Letter-spacing:** Display = -0.02em. Headings = -0.015em. Body = -0.005em. Labels = 0.4em (with uppercase).

### II.3 — Spacing scale

4px base. Tailwind v4 default scale fits; we use `1, 2, 3, 4, 6, 8, 12, 16, 24, 32` consistently.

### II.4 — Motion tokens

```css
:root {
  --dur-instant: 80ms;
  --dur-fast: 150ms;
  --dur-normal: 220ms;
  --dur-slow: 360ms;
  --dur-hero: 720ms;
  --dur-cinematic: 1200ms;

  /* Custom easings — premium feel */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1); /* soft landing */
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-emphasis: cubic-bezier(0.32, 0.72, 0, 1); /* MD3 emphasised */
}
```

**Reveal stagger:** Lists/grids reveal child-by-child with 60ms stagger.

**Reduced motion:** Every motion path checks `prefers-reduced-motion: reduce` and falls back to opacity-only or static.

### II.5 — Layout tokens

```
--container-narrow: 680px   /* editorial reading column */
--container-wide:  1100px   /* grids, hero */
--container-full:  100%     /* full-bleed bands */
```

**Editorial Narrow grammar:** Default page layout uses `--container-narrow` for prose, `--container-wide` for grids/hero. Chapter bands break to full-bleed background with content centred on `--container-wide`.

**Breakpoints (Tailwind defaults preserved):** `sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`.

### II.6 — Elevation / Shadow

Premium Luxe minimises shadows. Two ambient shadows:

- `shadow-quiet`: `0 1px 0 0 var(--rule)` (hairline)
- `shadow-lift`: `0 12px 40px -10px oklch(0.05 0 0 / 0.6), 0 0 0 1px var(--rule)` (cards on hover)

### II.7 — Radius

`--radius-sm: 4px · --radius-md: 8px · --radius-lg: 14px · --radius-pill: 9999px`. Cards default to `md`.

---

## § III — Brand Marks

### III.1 — Wordmark

```
K𝑖BAR
```

- `K`, `B`, `A`, `R` set in Fraunces 500, opsz 144, SOFT 30.
- The `i` is set in Fraunces 400 _italic_, opsz 144, SOFT 60.
- Tracking: -0.025em.
- The `i` is rendered with `inline-block; transform: scale(0.75); transform-origin: center;` so it sits visually smaller than the surrounding caps — the "small breath" between the strong letters.
- In the hero: gradient-fill with the gold sweep.
- In OG images: gold static fill on near-black.
- In favicon variants: `i` only (see Monogram).

### III.2 — Monogram

```
k.
```

- Lowercase Fraunces _italic_ `k`, opsz 144, SOFT 60, weight 500, gold-sweep gradient fill.
- Followed immediately by a `.` set in Geist Sans, color `var(--crimson)`, no gradient.
- Sizes: header 22px → favicon 32px master → favicon 16/32/48 generated from master.
- The `.` is the brand's "full stop" — quiet, decisive.

### III.3 — Wordmark vs Monogram usage

| Surface             | Mark                                  |
| ------------------- | ------------------------------------- |
| Browser tab favicon | `i` (just the italic `i`, simplified) |
| Header (sticky)     | `k.`                                  |
| Hero (home)         | `KiBAR` (display)                     |
| OG image — home     | `KiBAR` + chapter marker              |
| OG image — others   | Page chapter + page name              |
| Footer              | `KiBAR · © 2026`                     |

---

## § IV — Page Specifications

### IV.1 — Home (`/`)

**Composition (top to bottom):**

1. **Hero band** (full-bleed, ~85vh on desktop, ~60vh on mobile)

   - Chapter marker: `§ 0 — INDEX` (Geist Sans 11px, gold).
   - Massive type-driven wordmark: `KiBAR`. Animated entry: letter-by-letter staggered fade-up, then a single gold-sweep highlight passes left-to-right (`background-position` animation, ~1.4s, eased `--ease-out`). Plays once on mount.
   - Subhead (Fraunces 1.625rem italic): "_— shipping reliable systems since 2011._"
   - Body lede (Geist 17px, max 60ch): a single tight paragraph about what you do and where (inherits the existing copy, lightly tightened).
   - A single inline link row: `mailto · GitHub · LinkedIn` (Geist 13px, ink-muted, hover gold).
   - Atmospheric: gold radial glow upper-right; subtle dust particles (CSS-only, 8 absolutely-positioned dots with looping float animations, all `prefers-reduced-motion` respected).

2. **§ II — Selected Work** (chapter band header → editorial-narrow card list)

   - Chapter marker + heading "_Selected Work_".
   - 6-9 GitHub repos from the existing `getProjects()` cache, rendered as **list rows** (not card grid) — Roman numeral, repo name, year, language indicator chip. On hover: row gains a 1px gold left border, name shifts 4px right, becomes gold.
   - "View all →" link (chevron rotates -24° on hover, current behaviour preserved).

3. **§ III — Credentials** (chapter band header → 3 most-recent certificates)

   - Same editorial-narrow row treatment as Selected Work.
   - Tile-style card variant for the 3 home-featured certificates only — see Certificates page for full grid treatment.

4. **Closing band** (subtle)
   - A single italic Fraunces line: "_Currently available for senior roles._" + small gold pill linking to `/contact`.

**Removed from current home:** `react-type-animation` typing effect, `HeroWithLoveSection` (replaced by the static italic subhead), the photo (moved to /about only).

### IV.2 — About (`/about`)

**Chapter marker:** `§ I — THE MAKER`

**Composition:**

1. Page heading "_The Maker_" + biography lede (1 paragraph, Geist 17px).
2. **Portrait band** — full-bleed image (current `me-2.webp`), grayscale + gold overlay tint at low opacity, height ~50vh. Caption below in italic Fraunces ("_Mustafa Kibar, Istanbul, 2026._").
3. **Biography prose** — editorial-narrow column, 3-5 paragraphs, Geist 15-17px. The current copy migrates with light editorial tightening.
4. **Skills index** (see § VI.SkillsIndex — Editorial Index treatment).
5. **§ I.b — Education** — Timeline (rebuilt; see § VI.Timeline).
6. **Footer link strip:** "→ Workshop & gear at /uses · → Recent thinking at /notes."

**Removed from current about:** Workspace gear list (moves to /uses), `desk.webp` band (moves to /uses), the inline `text-highlight`-styled equipment chips.

### IV.3 — Projects (`/projects`)

**Chapter marker:** `§ II — SELECTED WORK`

**Composition:**

1. Heading + 1-paragraph lede.
2. Optional year filter row (chips, visual-only on mobile if scope is tight; client-side filter is a stretch goal).
3. **Project grid** — `Card.Project` (rebuilt from `ProjectShowcase`). 1 column mobile, 2 columns md, 3 columns xl. Each card:
   - Header row: project name (Fraunces 500, 18px, gold on hover) + year (Geist Mono 12px, ink-faint).
   - Hairline divider.
   - Description (line-clamp 3, Geist 14px, ink-muted).
   - Footer row: tag chips (visual only — not clickable) + source-link icon (`SourceLink`, lucide GitHub/GitLab).
   - Hover: card lifts 2px, gold ring intensifies, subtle scale 1.005.
4. Empty state: "No projects to show yet." (rare, only if GitHub fetch fails).

**Tags:** Chips are rendered with `<span>`, no router push, no underline. The broken `/tags/:tag` route is removed.

### IV.4 — Certificates (`/certificates`)

**Chapter marker:** `§ III — CREDENTIALS`

**Composition:**

1. Heading + lede.
2. **Certificate grid** — `Card.Certificate`. 1/2/3 columns. Each card:
   - Image fills card (object-cover, grayscale, 1.25× scaled).
   - Frosted-glass info strip at bottom-left: title (Fraunces 500), description + date (Geist 13px, ink-muted).
   - Hover: image desaturates to color, lifts and scales to 1.0, info strip skews slightly. (Current behaviour preserved but modernised.)
3. The `CertificateView` placeholder component is **deleted** (it was a stub).

**Data:** `certificates.data.ts` (renamed from `constant.ts`). Same shape, no functional change.

### IV.5 — Contact (`/contact`)

**Chapter marker:** `§ IV — CORRESPONDENCE`

**Composition:**

1. Display heading: "_Currently available for senior roles._" — Fraunces 500, italic, gold sweep, 60-80px.
2. Status pill (small gold-bordered pill): "Available · Istanbul · Remote-friendly".
3. **Email row** — large (Fraunces 500, 36px): `mustafa@kibar.pro`. Click copies to clipboard with a brief tooltip ("Copied"); long-press / aux-click opens `mailto:`. Implementation uses `navigator.clipboard.writeText` with a small `motion`-driven tooltip.
4. **Socials** — three large rows: GitHub, LinkedIn, Resume. Each row: lucide icon · label · external chevron. Hover: row gains crimson left border, icon goes gold.
5. Closing italic line: "_Reply within 48 hours._"

**No form. No CAPTCHA. No third-party booking.**

### IV.6 — Uses (`/uses`)

**Chapter marker:** `§ V — WORKSHOP`

**Composition:**

1. Heading "_Workshop_" + 1-paragraph lede.
2. **Editorial Index** — `UsesIndex` component:
   - Categories (italic Fraunces label, gold) + items (Geist 14px, ivory) in a 2-column grid (label left, value right) on desktop; stacked on mobile.
   - Categories: _Desk_, _Computer_, _Peripherals_, _Audio_, _Software_, _Editor & Dotfiles_.
   - Each item is a one-liner; long descriptions go to `/notes` instead.
3. **Desk image** at the bottom — full-bleed band, current `desk.webp`, with a gold-tinted overlay and bottom gradient fade. Caption italic ("_The desk, 2026._").

**Data:** `lib/data/uses.data.ts` — typed array of `{ category, items: { name, label?, link? }[] }`.

### IV.7 — Notes (`/notes`, `/notes/[slug]`)

**Chapter marker:** `§ VI — MARGINALIA`

**Index page:**

1. Heading "_Marginalia_" + lede ("_Snippets, observations, things worth keeping._").
2. **Year-sorted list** — Roman numeral + title + reading-time estimate + date.
3. Hover: row lifts, gold left border, subtle background tint.

**Note page (`/notes/[slug]`):**

1. Chapter marker + back-to-index link.
2. Title (Fraunces 500, 44px) + date + reading time.
3. **MDX content body** — editorial-narrow column. Custom MDX components:
   - `<Callout type="note|warning">` — gold/crimson left-border block.
   - `<Code lang="ts">{...}</Code>` — Shiki SSR-rendered, dark theme tuned to brand (gold comments, crimson keywords, ivory identifiers — custom Shiki theme `kibar-luxe`).
   - `<Demo>{children}</Demo>` — bordered sandbox block for inline interactive snippets.
4. Footer: previous/next note links.

**MDX architecture:**

- Content lives under `content/notes/<slug>.mdx` — one file per note. No per-route mdx files in `app/`.
- The dynamic route `app/notes/[slug]/page.tsx` reads the matching mdx file at request time, parses frontmatter via `gray-matter`, and compiles with `next-mdx-remote/rsc`'s `compileMDX`.
- Frontmatter: `title`, `description`, `date`, `tags`, `published`.
- An index builder (`lib/notes.ts`, `'server-only'`) reads all `content/notes/*.mdx` at build time, returns sorted metadata for `/notes`.
- Shiki is initialised with a single `getHighlighter` instance per module, using a custom theme JSON (`lib/shiki/kibar-luxe.json`) committed to the repo. Highlighted output is generated at compile time as part of the MDX pipeline; client receives static HTML.

**Initial seed:** 3-5 short notes seeded as part of Phase 6, written by the user (placeholders are OK for shipping).

---

## § V — Component Inventory & Naming Refactor

The following table captures every existing component, its replacement, and the reason. Old paths break — that's intentional; v2 branch carries the burden.

### V.1 — Renames

| Old                                                          | New                                                           | Reason                                                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `Hero/HeroWithLoveSection`                                   | _(deleted)_                                                   | Typing animation removed; replaced by static italic subhead.                                     |
| `Hero/Hero`                                                  | `home/HomeHero`                                               | Scoped to home; co-located. Card wrapper around HeroWithLoveSection drops.                       |
| `MyLoading`                                                  | `feedback/LoadingCard`                                        | "My" prefix removed; clearer purpose.                                                            |
| `AnimatedItemWrapper`                                        | `motion/RevealOnView`                                         | Describes behaviour; not "wrapper".                                                              |
| `GridWrapper`                                                | `layout/Grid`                                                 | Drops `Wrapper` suffix.                                                                          |
| `ParallaxSkills`                                             | `home/SkillsIndex` _(rebuilt)_                                | Was a marquee mis-labelled "parallax"; replaced by Editorial Index.                              |
| `ParallaxCertificates`                                       | _(deleted)_                                                   | Unused; replaced by editorial grid on /certificates.                                             |
| `Parallax`                                                   | _(deleted)_                                                   | Was a mis-labelled marquee. Editorial Index replaces all uses; no marquee primitive shipped.     |
| `Showcase` (compound)                                        | `card/Card.*` family                                          | Reframed as Card primitive with sub-components.                                                  |
| `Showcase/ShowcaseViewer`                                    | `layout/SectionViewer`                                        | Wraps Section heading + Grid.                                                                    |
| `ProjectShowcase`                                            | `projects/ProjectCard`                                        | Co-located, clearer.                                                                             |
| `CertificatesShowcase/CertificateShowcase`                   | `certificates/CertificateCard`                                | Folder/file mismatch resolved.                                                                   |
| `Certificates/CertificateView`                               | _(deleted)_                                                   | Was a stub.                                                                                      |
| `Certificates/constant.ts`                                   | `lib/data/certificates.data.ts`                               | `constants` plural; `.data.ts` convention.                                                       |
| `RepoIcon`                                                   | `projects/SourceLink`                                         | Describes destination, not just iconography.                                                     |
| `TopProgressBar`                                             | `chrome/ScrollProgress`                                       | "Top" is positional; meaning is "scroll progress".                                               |
| `FooterHeartIcon`                                            | `chrome/FooterStamp`                                          | "Heart icon with pulsing animation" → simpler "stamp" idea.                                      |
| `Header`                                                     | `chrome/SiteHeader`                                           | Consistency with chrome bucket.                                                                  |
| `Footer`                                                     | `chrome/SiteFooter`                                           | Same.                                                                                            |
| `CommandPalette`                                             | `chrome/CommandPalette`                                       | Stays — already good.                                                                            |
| `ProfileImage`                                               | `media/Portrait`                                              | One word, clearer.                                                                               |
| `TurkeyFlagImage`                                            | _(deleted if unused)_                                         | Verify usage; remove if dead.                                                                    |
| `Contact`                                                    | `contact/ContactList`                                         | Co-located.                                                                                      |
| `Nav/NavItem`, `Nav/NavItems`                                | `chrome/nav/NavLink`, `chrome/nav/NavList`                    | Kept structure, renamed for clarity.                                                             |
| `Tag/TagItem`, `Tag/TagItems`                                | `tag/Tag`, `tag/TagList`                                      | Drops the `Item` redundancy.                                                                     |
| `Timeline/Timeline*` (5 components)                          | `timeline/Timeline` (single component, data-driven)           | Over-modularised; collapsed.                                                                     |
| `SectionHeading`                                             | `layout/ChapterHead`                                          | Reframed around "chapter" brand language.                                                        |
| `ViewAllButton`                                              | `layout/ViewAllLink`                                          | It's a link, not a button.                                                                       |
| `typography/Heading`, `Title`, `Subhead`, `Subtitle`, `Text` | `typography/Display`, `Heading`, `Subhead`, `Body`, `Caption` | Consolidated 5 thin wrappers into a clear scale. `Text` is dropped (it just wrapped a `<span>`). |
| `useAnimationInView`, `useAnimationOnHover`                  | `hooks/useMarqueeControls`                                    | Single hook serving the Marquee primitive's needs; private to that primitive.                    |
| `lib/utils.getRandomInt`                                     | _(deleted)_                                                   | Used in `ParallaxSkills` default prop — caused hydration risk; replaced with deterministic data. |
| `lib/icons` (re-exports react-icons)                         | `lib/icons` _(rewritten)_                                     | Switches to `lucide-react`. Keeps thin re-export for project-wide consistency.                   |

### V.2 — New components

| Name                                                                             | Purpose                                                                                    |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `chrome/SiteHeader`                                                              | Sticky header with shrinking height + gold-sweep monogram.                                 |
| `chrome/CommandPalette`                                                          | Existing cmdk palette, polished: gold accent on selected, Geist Mono labels, ⌘K hint chip. |
| `home/HomeHero`                                                                  | Type-driven hero with gold-sweep wordmark.                                                 |
| `home/SkillsIndex`                                                               | Editorial Index (categorised italic-label list).                                           |
| `home/SelectedWorkList`                                                          | Editorial-row list of recent projects.                                                     |
| `home/CredentialsList`                                                           | Editorial-row list of recent certificates.                                                 |
| `about/Biography`                                                                | Editorial-narrow prose with section breaks.                                                |
| `about/PortraitBand`                                                             | Full-bleed portrait with caption.                                                          |
| `projects/ProjectCard`                                                           | Replaces ProjectShowcase.                                                                  |
| `projects/SourceLink`                                                            | Replaces RepoIcon.                                                                         |
| `certificates/CertificateCard`                                                   | Replaces CertificateShowcase.                                                              |
| `contact/EmailRow`                                                               | Large click-to-copy email with tooltip.                                                    |
| `contact/SocialRow`                                                              | Icon + label + external chevron.                                                           |
| `contact/StatusPill`                                                             | Availability pill.                                                                         |
| `uses/UsesIndex`                                                                 | Editorial Index for hardware/software.                                                     |
| `uses/DeskBand`                                                                  | Full-bleed desk image footer.                                                              |
| `notes/NoteCard`                                                                 | Index-page row.                                                                            |
| `notes/NoteContent`                                                              | MDX wrapper with custom components.                                                        |
| `notes/Callout`                                                                  | Custom MDX `<Callout>`.                                                                    |
| `notes/CodeBlock`                                                                | Custom MDX code with Shiki + copy button.                                                  |
| `notes/Demo`                                                                     | Sandbox container for interactive demos.                                                   |
| `layout/Container`                                                               | Width-bounded container (narrow / wide / full).                                            |
| `layout/ChapterHead`                                                             | `§ N — TITLE` chapter marker + heading.                                                    |
| `layout/ChapterBand`                                                             | Full-bleed chapter band.                                                                   |
| `layout/Grid`                                                                    | Responsive grid.                                                                           |
| `layout/SectionViewer`                                                           | Section heading + grid.                                                                    |
| `layout/ViewAllLink`                                                             | "View all →" link.                                                                         |
| `motion/RevealOnView`                                                            | Opacity + 8px translate on enter view.                                                     |
| `motion/GoldSweep`                                                               | Mask-based gold gradient sweep across element.                                             |
| `motion/PageTransition`                                                          | Wraps `app/template.tsx` with View Transitions / motion fallback.                          |
| `media/Portrait`                                                                 | Polymorphic profile/portrait image with grayscale + tint.                                  |
| `tag/Tag`, `tag/TagList`                                                         | Visual-only chips.                                                                         |
| `timeline/Timeline`                                                              | Data-driven timeline (single component).                                                   |
| `typography/Display`, `Heading`, `Subhead`, `Body`, `Caption`, `Eyebrow`, `Mono` | Consolidated typographic scale.                                                            |
| `feedback/LoadingCard`, `feedback/EmptyState`, `feedback/ErrorState`             | Loading/empty/error primitives.                                                            |
| `chrome/ScrollProgress`                                                          | Existing top progress bar, simplified.                                                     |
| `chrome/FooterStamp`                                                             | Quiet brand stamp at footer (replaces heart icon animation).                               |
| `chrome/SiteFooter`                                                              | Footer with stamp + nav rail + © year.                                                    |

### V.3 — Folder reorganisation

The flat-folder-per-component pattern is replaced with a thin domain grouping. Each component file is co-located with its tiny `index.ts` re-export.

```
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
    Marquee/
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
    Button/
    Card/
    Skeleton/
```

`components/ui/` keeps shadcn-style primitives (Button, Card, Skeleton). Domain components depend on `ui` but never the reverse.

### V.4 — File-naming conventions

- Components: `PascalCase.tsx` co-located with `index.ts` barrel. The barrel exports the component and its props type only.
- Hooks: `useThing.ts` in `hooks/`.
- Data: `<scope>.data.ts` (e.g. `certificates.data.ts`, `nav.data.ts`, `uses.data.ts`).
- Constants: `<scope>.constants.ts` (plural, never `constant.ts`).
- Types: `types.ts` per domain folder when shared; otherwise inline.
- Utilities: `lib/<scope>.ts`.
- Test fixtures (future): `__fixtures__/` next to the consumer.

### V.5 — Import conventions

- Use the `@/...` path alias everywhere; no relative `../../..`.
- Each domain folder has a barrel `index.ts` that re-exports the public surface.
- Type-only imports use `import type { ... }`.
- ESLint rule for `unused-imports/no-unused-imports` stays.
- Add `prettier-plugin-organize-imports` (already present) — relied on for import sort.

---

## § VI — Motion Strategy

### VI.1 — Page transitions

- **View Transitions API** wired via `app/template.tsx` with the experimental `unstable_ViewTransition` Next.js component.
- Default transition: cross-fade `opacity 0 → 1` + 8px y-translate on `motion-reduce: no-preference`. Reduced-motion: hard cut.
- Per-element `view-transition-name` set on hero wordmark, chapter marker, page title — they "morph" between routes that share them (e.g. site logo persists across pages).

### VI.2 — Hero gold sweep

`motion/GoldSweep` renders a child element with the brand gold-sweep gradient as a `background-image` plus an animated `background-position-x: -100% → 200%` over 1.4s, eased `--ease-out`. Plays once on mount; can re-trigger via prop.

### VI.3 — Reveal on view

`motion/RevealOnView` wraps any node and uses Intersection Observer (`useInView` from `motion`) to animate `opacity 0 → 1` + `y 8px → 0` once. Stagger via `delay` prop. Reduced-motion bypasses entirely (renders children directly).

### VI.4 — Hover micro-interactions

| Element                       | Effect                                                                            |
| ----------------------------- | --------------------------------------------------------------------------------- |
| Editorial list rows           | 1px gold left-border slide-in (transform: scaleY) + name 4px right + color → gold |
| Cards (Project / Certificate) | translateY -2px, ring intensifies, scale 1.005                                    |
| Source / external link        | underline grows from left (transform: scaleX)                                     |
| Nav link                      | underline-grow, opacity 0.6 → 1                                                   |
| View-all chevron              | rotate -24deg, scale 1.75 (preserved from v1)                                     |
| Email row                     | Click: copy + brief gold tooltip "Copied" (200ms)                                 |
| Footer stamp                  | Looping 10s breath: opacity 0→0.1→0 + scale 1→2                                   |

### VI.5 — Reduced motion

Every motion primitive has a reduced-motion branch that renders the static end state. This is enforced by:

- Tailwind v4 `motion-reduce:*` variants for CSS animations.
- A `useReducedMotion()` hook for JS-driven motion.
- A global CSS rule (already present): `@media (prefers-reduced-motion: reduce)` zeroes all animation durations.

### VI.6 — Performance discipline

- Hero gold-sweep: pure CSS `background-position` animation. No JS per-frame work.
- Reveal on view: Intersection Observer (one shared observer per scope). No scroll listener.
- Scroll progress: `useScroll` from motion (passive listener), single transformed motion value.
- All `will-change` declarations are scoped and removed after animation.

---

## § VII — Performance Strategy

### VII.1 — Targets

| Metric                        | Target          |
| ----------------------------- | --------------- |
| Lighthouse Perf               | 100             |
| Lighthouse A11y               | 100             |
| Lighthouse Best Practices     | 100             |
| Lighthouse SEO                | 100             |
| LCP (75p mobile)              | < 1.5s          |
| TBT                           | < 100ms         |
| CLS                           | < 0.05          |
| INP (75p)                     | < 200ms         |
| Client JS (initial)           | < 100kb gzipped |
| Total transfer (home, mobile) | < 250kb         |

### VII.2 — Tactics

- **Server Components first.** `'use client'` is the exception, not the norm. Currently many components needlessly opt in.
- **`react-icons` dropped, `lucide-react` adopted.** lucide-react tree-shakes per-icon by default, smaller bundle.
- **`react-type-animation` dropped.** Replaced by static italic copy (saves ~9kb gzipped).
- **MDX is build-time.** `next-mdx-remote/rsc` renders on the server; zero client MDX runtime.
- **Shiki is build-time.** Code blocks compiled at build, served as static HTML. `shiki` itself is stripped from client bundle.
- **Images:** `next/image` everywhere, `formats: ['image/avif', 'image/webp']` (already configured). All blurDataURLs preserved. Hero portrait removed from / saves the largest LCP candidate.
- **Fonts:** `display: swap`, latin subset only, `preload: true` for the body font, weight set is restricted to actually-used weights.
- **Bundle analyzer:** `bun run analyze` runs in CI before merge to main. Regressions block.
- **CSS:** Tailwind v4's `@import` produces a small focused stylesheet. Custom CSS is restricted to `globals.css` + token definitions.
- **React Compiler:** Already enabled; we keep it.

### VII.3 — Lighthouse audit gate

A Phase 8 task: run Lighthouse against all 7 routes, mobile + desktop, with throttling. Fail the merge if any score is below 100 in any category.

---

## § VIII — Accessibility Strategy

### VIII.1 — Targets

- WCAG 2.2 AA across all routes.
- Keyboard-only navigation works everywhere; visible focus rings on every interactive element.
- Screen-reader pass with VoiceOver (macOS) and NVDA (Windows) — verified manually in Phase 8.

### VIII.2 — Specifics

- **Skip link** added to `app/layout.tsx` (`Skip to main content`), visible on focus.
- **Heading hierarchy** strict: one `<h1>` per page (the chapter title), `<h2>` for sections, `<h3>` for sub-sections.
- **Links:** all external links have `aria-label` if icon-only, `rel="noopener noreferrer"` always.
- **Contrast:** ivory `--ink` on `--bg-canvas` clears 7.0:1; gold `--gold` on `--bg-canvas` clears 4.7:1 (AA Large) — gold is reserved for non-text or large display text.
- **Status messages:** clipboard-copy tooltip uses `aria-live="polite"`.
- **Reduced motion:** as covered.
- **Reduced transparency / increased contrast:** `prefers-contrast: more` doubles rule strengths and removes background gradients.
- **Alt text:** all images have meaningful `alt`. Decorative SVGs use `aria-hidden`.
- **Forms:** none on this site (intentional).
- **Command palette:** keyboard ⌘K; trap-focused while open; ESC closes.

---

## § IX — SEO / OG / Structured Data

### IX.1 — Metadata

The current Metadata API setup is solid; v2 retains it. New routes (`/contact`, `/uses`, `/notes`, `/notes/[slug]`) get full `Metadata` exports including `openGraph`, `twitter` (delete — already removed), `alternates.canonical`, route-specific `description`.

### IX.2 — OG images

Per-route OG images via `app/<route>/opengraph-image.tsx`. Each is a 1200×630 image rendered with `@vercel/og`, using:

- Background: dark gradient + grain.
- Top-left: chapter marker (`§ N — ROUTE NAME`), Geist Sans 24px gold.
- Centre: page-specific display title, Fraunces 96px, gold sweep.
- Bottom-right: `kibar.pro` URL stamp.

### IX.3 — Structured data

- `Person` (`@id: site#person`) — global, in root layout.
- `WebSite` — global.
- `BlogPosting` — per `/notes/[slug]` (article schema with author, datePublished, headline).
- `BreadcrumbList` — on Notes detail and Projects detail (if added later).

### IX.4 — Sitemap & robots

- `app/sitemap.ts` regenerated to include the new routes plus all `notes/[slug]` entries from `content/notes/`.
- `app/robots.ts` allows all (current behaviour).

---

## § X — Build, Tooling, & Dependencies

### X.1 — Dependencies — added

| Package           | Why                                                    |
| ----------------- | ------------------------------------------------------ |
| `next-mdx-remote` | MDX rendering at runtime in RSC; build-time compilable |
| `shiki`           | Build-time code highlighting                           |
| `lucide-react`    | Icon library (replaces `react-icons`)                  |
| `gray-matter`     | MDX frontmatter parsing                                |
| `reading-time`    | Estimated read time on /notes                          |

### X.2 — Dependencies — removed

| Package                | Reason                     |
| ---------------------- | -------------------------- |
| `react-type-animation` | Hero typing effect dropped |
| `react-icons`          | Replaced by lucide-react   |

### X.3 — Dependencies — kept

`@radix-ui/react-slot`, `@vercel/analytics`, `@vercel/speed-insights`, `class-variance-authority`, `clsx`, `cmdk`, `motion`, `next`, `react`, `react-dom`, `server-only`, `tailwind-merge`.

### X.4 — Dev dependencies — unchanged

ESLint stack, Prettier, Husky, lint-staged, commitlint, bundle analyzer, Tailwind v4, TypeScript 5.

### X.5 — Tailwind v4 configuration

`globals.css` is rewritten to:

- Import Tailwind v4.
- Define `@theme` with all OKLCH tokens + spacing/type/motion tokens.
- Define a single dark-only palette (no `:root` light + `.dark` override).
- Drop the legacy `--background: 180 9 98` HSL split format.
- Define keyframes for: gold-sweep, fade-in-up, marquee.

### X.6 — Commits & branching

- All work on `kibar.pro-v2`.
- Conventional commits enforced (commitlint, husky, lint-staged stay).
- Phase boundaries are commit boundaries — each phase ends with a verifiable commit and a manual local preview.
- No squash on phase commits; rebase-merge to main at the end preserves the phase history.
- No commits mention AI, Claude, or AI assistance (per Brand Covenant).

---

## § XI — Phase Plan

Nine phases. Each ends with a verifiable local preview. The user reviews after every phase before approving the next.

### Phase 0 — Foundation (1 PR-equivalent commit)

- Rewrite `globals.css` with OKLCH `@theme`.
- Replace fonts in `app/fonts.ts` with Fraunces + Geist + Geist Mono; delete the 4 unused families.
- Drop `react-type-animation` and `react-icons` from `package.json`; add `lucide-react`, `next-mdx-remote`, `shiki`, `gray-matter`, `reading-time`.
- Rewrite `lib/icons.ts` as lucide re-exports.
- Add `useReducedMotion` hook.
- Add `lib/tokens.ts` exporting motion durations / easings as JS constants for use in `motion`.

**Deliverable:** Project builds, types pass, Lighthouse runs (the site looks broken — that's expected). Bundle analyzer baseline captured.

### Phase 1 — Primitives

Build (in this order):

1. `typography/*` (Display, Heading, Subhead, Body, Caption, Eyebrow, Mono).
2. `layout/Container`, `layout/Grid`.
3. `motion/RevealOnView`, `motion/GoldSweep`, `motion/PageTransition`.
4. `media/Portrait`.
5. `feedback/LoadingCard`, `feedback/EmptyState`, `feedback/ErrorState`.
6. `tag/Tag`, `tag/TagList`.
7. `timeline/Timeline` (single component).
8. `layout/ChapterHead`, `layout/ChapterBand`, `layout/SectionViewer`, `layout/ViewAllLink`.
9. `chrome/SiteHeader`, `chrome/SiteFooter`, `chrome/ScrollProgress`, `chrome/FooterStamp`, `chrome/CommandPalette`, `chrome/nav/NavLink`, `chrome/nav/NavList`.

**Deliverable:** App layout renders the new chrome on every route; all routes still error-free at the page level (placeholder content where needed).

### Phase 2 — Home

- Build `home/HomeHero` with gold-sweep wordmark.
- Build `home/SkillsIndex` (Editorial Index).
- Build `home/SelectedWorkList`, `home/CredentialsList`.
- Wire `app/page.tsx` together with chapter bands.
- Update home OG image to v2 design.

**Deliverable:** Home works end-to-end. Reduced motion verified.

### Phase 3 — About

- Build `about/Biography`, `about/PortraitBand`.
- Migrate timeline data + render with rebuilt `Timeline`.
- Move workspace gear list out (will land on /uses in Phase 6).
- Update about OG image.

### Phase 4 — Projects

- Build `projects/ProjectCard`, `projects/SourceLink`.
- Wire `app/projects/page.tsx`. Tags become non-clickable.
- Update projects OG image.
- Update `/notes` index OG separately in Phase 6.

### Phase 5 — Certificates

- Build `certificates/CertificateCard`.
- Migrate to `lib/data/certificates.data.ts`.
- Wire `app/certificates/page.tsx`.
- Update certificates OG image.
- Delete `CertificateView` stub.

### Phase 6 — New routes (`/contact`, `/uses`, `/notes`)

- Build `contact/*` (ContactList, EmailRow, SocialRow, StatusPill).
- Wire `app/contact/page.tsx` + OG image.
- Build `uses/UsesIndex`, `uses/DeskBand`. Migrate gear list to `lib/data/uses.data.ts`.
- Wire `app/uses/page.tsx` + OG image.
- Stand up MDX pipeline: `content/notes/`, `app/notes/page.tsx`, `app/notes/[slug]/page.tsx`, custom Shiki theme `kibar-luxe.json`, custom MDX components (Callout, CodeBlock, Demo).
- Seed 3-5 short notes from the user.
- Add `app/notes/opengraph-image.tsx` and per-slug OG variants.
- Update sitemap.

### Phase 7 — Polish

- Wire View Transitions in `app/template.tsx`.
- Per-route motion timings tuned by hand.
- CommandPalette: gold-sweep on selected item, Geist Mono labels, ⌘K hint chip on home hero. Mobile uses the same centred-modal pattern (no separate drawer).
- All hover micro-interactions verified across all pages.
- Footer stamp animation verified on real device.

### Phase 8 — QA, A11y, Performance

- Lighthouse audit on all 7 routes, mobile + desktop. Fix until 100 across the board.
- Bundle analyzer: client JS < 100kb gzipped.
- Manual a11y pass: keyboard navigation, screen reader (VoiceOver), focus management.
- Mobile QA (real devices): iPhone Safari, Android Chrome, smallest supported viewport (360px).
- Reduced-motion QA pass.
- High-contrast mode QA pass.
- Image audit (no LCP regressions, all blurDataURLs in place, sizes attributes correct).
- Cross-browser QA: Safari, Chrome, Firefox, Edge.
- Final visual regression sweep against the Brand Covenant.

### Phase 9 — Merge

- Update `README.md` to reflect v2 stack & feature set (no AI references).
- Final local preview side-by-side with main (`bun run build && bun run start`).
- User approval gate.
- Rebase-merge `kibar.pro-v2` into `main`.
- Tag `v2.0.0`.
- Push to `main`.
- Verify production deploy via Vercel.
- Post-deploy smoke test (load each route, run a quick `gstack canary` if applicable).

---

## § XII — Out of Scope

Explicitly NOT in v2:

- Light mode / theme toggle.
- Project case-study detail pages (`/projects/[slug]`).
- Tags index / filter pages (`/tags/*`).
- A blog / writing longform area beyond Notes-as-snippets.
- An RSS feed.
- A Resume builder / inline résumé page.
- A Cal.com / scheduling integration.
- A contact form / Resend integration.
- i18n / Turkish translation.
- Comments, reactions, or any user-generated content.
- A backend service of any kind beyond the existing Github API fetch.
- Three.js / WebGL backdrops.
- Lenis / smoothscroll JS.

These are stretch goals for a future v3 if and only if they earn their place.

---

## § XIII — Risks & Mitigations

| Risk                                                                      | Mitigation                                                                                                                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Fraunces variable axes don't render in older Safari (`SOFT` axis support) | Provide a fallback `font-variation-settings: 'opsz' 144` (no SOFT). Visually nearly identical.                                                                                                                     |
| View Transitions API support varies                                       | `unstable_ViewTransition` from Next 15.x is the entry point; on browsers without support, default to motion-driven cross-fade in `app/template.tsx`.                                                               |
| Lighthouse 100 across all metrics is hard with hero gradients/animations  | Hero gradient is CSS-only; sweep is `background-position`; particles are 8 absolutely-positioned dots. JS-driven motion is gated by reduced-motion. Worst-case: lower hero motion intensity to keep TBT in budget. |
| MDX content authoring is new                                              | Phase 6 includes a 5-snippet seed. Templates and Callout/Code/Demo components remove most authoring friction.                                                                                                      |
| Naming refactor breaks every internal import                              | The branch is isolated. Imports are rewritten as part of the same commit that creates the new component. ESLint catches strays.                                                                                    |
| `K𝑖BAR` scaled-`i` rendering inconsistencies (subpixel / kerning)         | Implemented as a styled `<span>` with `inline-block`, explicit `transform: scale(0.75)`, `font-style: italic`, and `transform-origin: center`. Tested across browsers in Phase 1.                                  |

---

## § XIV — Acceptance Criteria

v2 is shippable to `main` when ALL of the following are true:

1. All 7 routes render without console errors or warnings.
2. Lighthouse 100/100/100/100 on every route, mobile and desktop.
3. Bundle analyzer shows client JS < 100kb gzipped on home.
4. Type-check (`bun run typecheck`) passes.
5. Lint (`bun run lint`) passes.
6. Format (`bun run format`) clean.
7. Production build (`bun run build`) succeeds with no warnings beyond known framework noise.
8. Manual reduced-motion smoke test on /, /about, /projects passes.
9. Manual VoiceOver smoke test on / passes.
10. Mobile real-device test (360px width) passes.
11. The Brand Covenant rules (§ 0) all hold across the deployed site.
12. The user has personally previewed the full site locally and approved.

---

_— End of spec —_
