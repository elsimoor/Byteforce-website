---
name: byteforce-illustrate
description: >-
  Rewrites a Byte Force page and adds a few interactive illustrations in the
  existing ink-on-paper layout, on the model of the Cloudflare insight. Use
  when the user gives a page, URL, or slug and asks for illustrations, diagrams,
  an interactive article, a rewrite, awareness, or to make a page like the
  Cloudflare one.
---

# Illustrate a Byte Force page

The user names one existing page. Rewrite it so a buyer understands the mechanism, and add a few illustrations they can switch. The model is `/insights/cloudflare-devant-le-site`.

Read [reference.md](reference.md) before drawing. If the page is an insight, also follow `.cursor/skills/byteforce-article/SKILL.md`.

## What the page must do

A buyer should leave able to say what is happening, what the choice changes, and what to send to Casablanca. Beauty is that clarity, in the site's current type and borders. Do not redesign the site.

## Steps

1. Open the page they named. Find its source in `lib/tech-articles.ts`, `lib/articles.ts`, `lib/money`, or `app/`. Extend that URL. Do not add a second one.
2. Write one sentence: the single thing this page teaches. Every section and every illustration serves that sentence.
3. Rewrite French and English together. Same facts. Shorter sentences. One idea per section. Contact stays in the lede and the last section, as `[[/contact|...]]`, on an insight.
4. Add at most three illustrations. Each one sits after the section it explains. The first teaches the core choice. The later ones teach a configuration or a failure the buyer might already have.
5. Inject them. On an insight, add a slot in `components/article-view.tsx` the way `CloudflareSlot` does: match the slug, match the French heading and the English heading, render the same component with `lang`. On any other page, render the component from that page.
6. Check the rendered page. French and English both respond. A control changes the drawing and which sentence is emphasized. The other sentence stays in the HTML. Nothing scrolls sideways at 390px wide.

## Rewrite

Keep every limit the current page already states: what is true, what is not claimed, what is not measured. Do not add a price, a client, a review, a metric, or a promise the source does not support.

Name the reader's situation in the first lines. Then the mechanism. Then the choice. The last section says what to write, and links to `/contact`.

Do not place a button after every paragraph. One quiet contact link after the first illustration. One stronger close after the last illustration: `/contact`, and `/audit` only when the audit really does the job you describe.

## Illustrations

Build them as a client component, one file, on the shape of `components/cloudflare-lab.tsx`. Inline SVG and HTML. Not a screenshot, a stock photo, a generated image, or a dashboard clone.

- French and English copy live in the component. Render it twice, once per language.
- Both states of a switch stay in the page. The inactive state is `text-mute`. The active state is the body color.
- The drawing is labeled as an illustration. It is not a live test and not a measurement of byteforce.ma.
- Example values are obviously examples. Do not present the studio's real DNS, headers, or timings as if they were read live.
- A vendor claim gets one link to that vendor's own documentation.
- Motion is a short SVG animation. Under `prefers-reduced-motion: reduce`, the drawing holds still and the text remains.
- Lab titles are `h3`. The article's `h2` stays the outline.

Stop at three. A fourth idea goes into a sentence, not a new widget.

## Check

- The slug, title, and facts are unchanged in kind. The prose is clearer.
- `/contact` is reachable from the French text and the English text.
- The illustration's caveat is visible without a click: illustration, not a measurement.
- Desktop and a 390px width show the controls without a horizontal scrollbar.
- `npx tsc --noEmit` passes.
