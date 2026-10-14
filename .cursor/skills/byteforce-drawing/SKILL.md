---
name: byteforce-drawing
description: >-
  Draws Byte Force illustrations as slate line windows, charts, and linked
  people. Use when the user asks for an illustration, a drawing, a diagram, a
  homepage mark, or says a picture should look like the Logiciel, SaaS, IA, and
  Plateformes row.
---

# Byte Force drawings

Copy the homepage offer row. A drawing is a product seen from the side: a window, what is inside it, and who it connects. It is inline SVG. It is not a photo, a generated image, a 3D render, or a filled icon.

The reference implementation is `components/offer-drawings.tsx`.

## Stroke and fill

- Stroke and small marks use `currentColor` on an SVG with `text-secondary` (`#3a4370`). Do not stroke in `#000dbf`.
- Window body is `var(--color-surface-container-lowest)`. Title bar band is a hairline, then two dots.
- A panel inside the window uses `var(--color-surface-container)`.
- A chart bar or an active node may be `currentColor` at about 0.35 opacity. One polyline stays solid.
- Corners on a window are `rx="8"`. Page cards stay square.
- Stroke width is about 1.4. Caps and joins are round.

## What goes in the frame

- **Logiciel.** One window. A narrow list on the left. On the right, a few bars and one line.
- **SaaS.** One window, a rising line across it, and a small circle at the corner, like a second look at the same chart.
- **IA.** Two person marks joined by a line to a window that holds a grid. The people are outside the product.
- **Plateformes.** Two overlapping windows. The back one is a table. The front one carries a gear.

A person is a circle on a shoulder arc. A gear is a circle with a ring of short ticks. A link that is not the product itself is dashed.

## Wider drawings

Use these when the point is a flow, not a single product. Sit them under the offer row. Each one is a link.

- A document, then a solid arrow, then two lattices of nodes, then a dashed arrow to a row of outputs. Link: `/insights/intelligence-artificielle-entreprise-maroc`.
- A window, then a solid arrow, then a portal (a square with a globe), then three branches labeled `client`, `partenaire`, and `équipe`. Link: `/application-web-sur-mesure-maroc`.

Labels are French, lowercase, and only name a party. Do not label a chart with a number.

## Page

- The drawing sits above the existing title. Do not replace the title, the kicker, or the sentence.
- The whole block is one link to a page that already exists. Do not invent a route.
- The SVG is `aria-hidden`. The link's text is the name. A drawing with no visible title gets a `sr-only` name.
- At 390px the drawing stays inside its column. No horizontal scroll.
- `prefers-reduced-motion` does not matter: these drawings do not move.

Insight labs that switch state stay on `byteforce-illustrate`. When one of those labs is drawn new, the window, the stroke, and the person still follow this file.
