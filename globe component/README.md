# TechnologyCard

React + TypeScript card with a rotating 3D Earth (three.js).

## Install

```bash
npm i three
npm i -D @types/three   # not needed on three >= 0.180 if types are bundled in your setup
```

Requires React 18+ and three >= r155 (light intensities are tuned for physically based units).

## Files

```
TechnologyCard.tsx          the card (props, icons, markup)
TechnologyCard.module.css   styles (CSS Modules)
EarthGlobe.tsx              reusable rotating globe
public/textures/earth-blue-marble.jpg   Earth texture (2:1 equirectangular)
```

Copy `public/textures/earth-blue-marble.jpg` to your app's `public/textures/`.

## Usage

```tsx
import { TechnologyCard } from "./TechnologyCard";

export default function Page() {
  return <TechnologyCard />;
}
```

Next.js App Router: the globe uses browser APIs, so add `"use client";` as the first line of
`EarthGlobe.tsx` (and `TechnologyCard.tsx`), or load it with `next/dynamic` and `ssr: false`.

## Font

The card uses `var(--font-rubik)` and falls back to `Rubik`. With Next.js:

```tsx
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
// <body className={rubik.variable}>
```

## Props

| Prop | Default | Notes |
|---|---|---|
| `eyebrow`, `titleLead`, `titleAccent`, `description` | French copy from the design | Text content |
| `items` | 5 default rows | `{ label, href?, icon }[]` |
| `globe` | – | `{ textureUrl, speed, startLongitude, tiltNorth, tiltRoll }` |
| `className` | – | Extra class on the card |

Globe defaults: `speed` 0.096 rad/s (one turn per ~65s), `startLongitude` 45 (Middle East),
`tiltNorth` 0.38.

## Behavior

- Pauses when off-screen or in a background tab; static for `prefers-reduced-motion`.
- Falls back to a plain blue sphere if WebGL or the texture is unavailable.
- Fully disposes renderer, geometry, materials and texture on unmount (safe in React StrictMode).
- Responsive: below 1000px the card stacks and the globe sits under the text.
