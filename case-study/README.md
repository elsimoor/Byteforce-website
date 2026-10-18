# `<CaseStudy />` — reusable case-study / app presentation page

A data-driven React + TypeScript component. You pass one `data` object (title,
hero, sections, images, colors, fonts, next case, CTA) and it renders a full
scrolling presentation page: hero → scope → numbered sections → palette /
typography → gallery of screens → next case → contact footer.

Reuse it for every app: **change the data, not the code.**

- No dependencies beyond React 17+ (works with Next.js, Vite, CRA, Remix)
- CSS Modules (no Tailwind needed), dark/light themes, one accent color prop
- Responsive, scroll-reveal animation, respects `prefers-reduced-motion`
- Plug-in points for `next/image` and `next/link`

---

## 1. Install

Copy the `case-study/` folder into your project, e.g. `src/components/case-study/`.

```
case-study/
├─ CaseStudy.tsx          component
├─ CaseStudy.module.css   styles + theme tokens
├─ types.ts               all prop / block types
├─ index.ts               exports
├─ example.tsx            working sample data
└─ README.md
```

Requirements: React ≥ 17, TypeScript (optional but recommended), a bundler that
supports CSS Modules (Next.js and Vite do out of the box).

## 2. Quick start

```tsx
import { CaseStudy } from "@/components/case-study";
import type { CaseStudyData } from "@/components/case-study";

const data: CaseStudyData = {
  title: "Syfter",
  tagline: "Mobile app for stocks & crypto.",
  hero: { src: "/img/syfter/hero.jpg", alt: "Syfter hero" },
  scope: { body: "We designed and built the app in Flutter…" },
  blocks: [
    { type: "text", label: ["01", "Onboarding"], title: "Onboarding", body: "…" },
    {
      type: "gallery",
      variant: "phones",
      images: [{ src: "/img/syfter/s1.png" }, { src: "/img/syfter/s2.png" }],
    },
  ],
  nextCase: { title: "Next app", href: "/cases/next-app" },
  cta: { buttonLabel: "Become a client", href: "https://byteforce.ma" },
};

export default function Page() {
  return <CaseStudy data={data} theme="dark" accent="#7C5CFF" />;
}
```

## 3. Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | `CaseStudyData` | required | All page content (see §4) |
| `theme` | `"dark" \| "light"` | `"dark"` | Color scheme |
| `accent` | `string` | `"#7C5CFF"` | Accent color (labels, bullets, button, hover) |
| `maxWidth` | `number` | `1200` | Content max width in px |
| `animate` | `boolean` | `true` | Scroll-reveal animation |
| `renderImage` | `(image, className) => ReactNode` | `<img>` | Swap in `next/image`, etc. |
| `renderLink` | `({href, className, children}) => ReactNode` | `<a>` | Swap in `next/link`, router links |
| `className` | `string` | – | Extra class on the root element |

## 4. `data` shape (`CaseStudyData`)

| Field | Type | Notes |
|---|---|---|
| `title` | `string` | Big project name |
| `tagline` | `string?` | One-line summary |
| `meta` | `{label, value}[]?` | Client, Year, Platform, Role… |
| `tags` | `string[]?` | Tech chips |
| `hero` | `ImageSrc?` | Full-width hero image |
| `scope` | `{title?, body}?` | "The Scope" intro (title defaults to "The Scope") |
| `blocks` | `Block[]` | Page body, rendered in order |
| `nextCase` | `{title, href, label?}?` | "Next case" link |
| `cta` | `{title?, text?, buttonLabel, href, secondary?}?` | Contact footer |

`ImageSrc` = `{ src: string; alt?: string; width?: number; height?: number }`.
Pass `width`/`height` when you can, to avoid layout shift (required by `next/image`).

`label` accepts a string or array, e.g. `["01", "Logo", "App icon"]` renders as
`/ 01 / LOGO / APP ICON`. `body` accepts a string or `string[]` (one paragraph each).

## 5. Block reference

All blocks go in `data.blocks`. Pick by `type`.

### `text`
Heading + paragraphs + optional bullets.
```ts
{ type: "text", label?, title?, body?, bullets?, align?: "left"|"right"|"center" }
```

### `image`
One image; `bleed: true` makes it edge-to-edge.
```ts
{ type: "image", image, bleed?, caption? }
```

### `gallery`
Row of images — use for phone screens.
```ts
{ type: "gallery", images, columns?: 1|2|3|4, variant?: "card"|"phones"|"plain" }
```
- `card` — images in rounded cards (default)
- `phones` — transparent, bottom-aligned (for PNGs of devices with transparent bg)
- `plain` — no chrome

### `split`
Text beside an image (stacks on mobile).
```ts
{ type: "split", label?, title?, body?, bullets?, image, reverse? }
```

### `palette`
Color swatches drawn in CSS — no image needed. Text color auto-contrasts.
```ts
{ type: "palette", label?, title?, body?, colors: { name, hex, usage? }[] }
```

### `typography`
Live font specimens. **Load the fonts yourself** (`next/font`, Google Fonts, `@font-face`).
```ts
{ type: "typography", label?, title?, body?, fonts: { name, family, weights?, usage?, sample? }[] }
```

### `stats`
Big KPI numbers.
```ts
{ type: "stats", label?, items: { value, label }[] }
```

### `custom`
Anything else, inside the page rhythm (video embed, Lottie, code sample…).
```ts
{ type: "custom", render: <YourComponent /> }
```

## 6. Recipes

### Next.js (App Router) with `next/image` + `next/link`
```tsx
import Image from "next/image";
import Link from "next/link";

<CaseStudy
  data={data}
  renderImage={(img, cls) => (
    <Image className={cls} src={img.src} alt={img.alt ?? ""}
           width={img.width ?? 1600} height={img.height ?? 900} />
  )}
  renderLink={({ href, className, children }) => (
    <Link href={href} className={className}>{children}</Link>
  )}
/>
```
`CaseStudy.tsx` already has `"use client"` (needed for the scroll animation), so it
can be imported from Server Components.

### One page per app (dynamic route)
```
data/cases/syfter.ts      export const syfter: CaseStudyData = {...}
data/cases/index.ts       export const cases = { syfter, ... }
app/cases/[slug]/page.tsx
```
```tsx
import { cases } from "@/data/cases";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/case-study";

export default function Page({ params }: { params: { slug: string } }) {
  const data = cases[params.slug as keyof typeof cases];
  if (!data) notFound();
  return <CaseStudy data={data} />;
}
```

### Load data from JSON / a CMS
`data` is plain JSON-compatible (except the `custom` block), so you can fetch it
from a file, Supabase, Sanity, etc. and pass it straight in.

### Present full-screen / embed in a slide or iframe
Render the page on its own route and iframe it, or wrap it in your own container;
the component only needs a width and scrolls normally. Use `animate={false}`
for screenshots or PDF export so nothing is hidden before it scrolls into view.

## 7. Theming

Everything is driven by CSS variables on the root. Override per instance:

```css
.myCase { --cs-bg: #06121f; --cs-card: #0d2238; --cs-radius: 8px; }
```
```tsx
<CaseStudy className="myCase" data={data} />
```

| Variable | Meaning |
|---|---|
| `--cs-bg` / `--cs-fg` | Page background / text |
| `--cs-muted` | Secondary text |
| `--cs-line` | Borders and dividers |
| `--cs-card` | Card / specimen background |
| `--cs-accent` | Set by the `accent` prop |
| `--cs-radius` | Corner radius |
| `--cs-gap`, `--cs-pad` | Vertical section spacing / side padding |

To change the font, set `font-family` on your `className`.

## 8. Image tips for good results

- Hero: 1600×900 or wider, JPG/WebP
- Phone screens: PNG/WebP with transparent background, same height for each, `variant: "phones"`
- Keep each image under ~300 KB; use WebP
- Always give `alt` text

## 9. Accessibility notes

- Single `<h1>` (title); section titles are `<h2>`
- Links and buttons have visible focus rings
- Animation is disabled for users with `prefers-reduced-motion`

## 10. Extending

- New block type: add an interface in `types.ts`, add it to the `Block` union,
  then add a `case` in `renderBlock` inside `CaseStudy.tsx`, plus its styles.
- Need a sticky header/nav? Render it outside the component and pass nothing
  — the page has no built-in nav, so it drops into any layout.
