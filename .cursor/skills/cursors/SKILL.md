---
name: cursors
description: >-
  Builds a Byte Force page with the floating colored cursors, the drawn
  reveal, the Nous contacter dock, and the WhatsApp button. Use when the user
  invokes /cursors, or asks for the cursor design, the floating cursors, the
  CRM Canada page, or the logiciel sur mesure page on another URL.
---

# Cursors

Reuse the existing engine. Do not copy `motion.ts` or `crm-canada.css` into a new folder.

Reference pages:

- `components/crm-canada/crm-canada-page.tsx` — `/geo-location/crm/ca`
- `components/logiciel-maroc/logiciel-maroc-page.tsx` — `/developpement-logiciel-sur-mesure-maroc`

Engine:

- Motion: `startCrmCanadaMotion` in `components/crm-canada/motion.ts`
- Styles: `components/crm-canada/crm-canada.css`, scoped to `main.cursor-page`

Leave `components/header.tsx` and `components/footer.tsx` alone. The site header and footer stay. This design replaces only the page body.

## New page

1. A client component renders `<main ref={root} className="cursor-page" data-landing>`.
2. Import `@/components/crm-canada/crm-canada.css`.
3. In `useEffect`, call `startCrmCanadaMotion(root.current, copy)` and return its cleanup. Do not store the Turnstile token in React state after that effect starts. Word-splitting writes into the DOM, and a later render wipes it. Write the token with `form.dataset` (`data-turnstile` on `#f`).
4. The server route keeps the title, the description, the canonical, and the JSON-LD. FAQ schema must match the questions on the page.

`copy` is the lead message, not the page copy:

```ts
startCrmCanadaMotion(node, {
  intro: "Bonjour Byte Force, je souhaite décrire un projet (…).",
  subject: "Projet …",
  country: "Maroc",
  city: "Casablanca",
  pageUrl: "https://byteforce.ma/…",
});
```

Canada is the default when `copy` is omitted. Pass it for every other page.

## Marks the script needs

These ids stay unique on the page. The script looks them up inside `main`.

| Id | Role |
| --- | --- |
| `#layer` | Empty fixed layer. Cursors and selection boxes are appended here. |
| `#dock` and `#dslot` | “Nous contacter”. Idle cursors stack into `#dslot`. |
| `a.wa` and `#wslot` | WhatsApp. UX, Architecture, and Produit dock here when the button is visible. |
| `#f`, `#res`, `#msg`, `#wa`, `#ml`, `#cp` | Lead form. Optional. If `#f` is missing, the animation still runs. |

`#layer` is `aria-hidden`. The dock links to `#contact`.

## What the cursors draw

Put `data-build` on each block that should appear.

- `data-build="text"` on a heading or paragraph. The script splits words into `.w` and reveals them in order. A `nosplit` child stays one word.
- `data-build="box"` on a card, a button row, a chip row, a step, or a details element. It fades and scales in.
- `data-by` names the cursor that should draw that block. If that cursor is busy, the nearest idle cursor draws it.

Cursor names, in order: Design, Stratégie, Frontend, Contenu, UX, Logique CRM, Analytique, SEO, Motion, Architecture, Rédaction, Tests, Marketing, Produit, Automatisation. Use one of these strings. Do not invent a name.

Desktop shows 15 cursors. Under 700px, 8. After the queue is idle and the reader has not scrolled, the cursors dock. Scroll, wheel, touch, or a key sends them back out. Blocks still off screen, or waiting more than 7 seconds, appear at once.

`prefers-reduced-motion: reduce` skips the cursors and shows the page. Do not hide content outside that media query.

## Page shape

Keep the section rhythm. Change the words, the board labels, and the links. Do not restyle the system.

1. Hero. Crumbs, eyebrow, one H1, one lede, two actions, a note, then the example board.
2. Place. A sticky heading and three fact cards.
3. Offer. One paragraph, one proof callout, one line that says the board is fake.
4. Six cells. “Six engagements avant de coder.”
5. Four steps.
6. Price or the page that owns the price. Do not repeat a cost article on the service page.
7. Links. Offers, then cities, using `.city`.
8. FAQ. The questions in the schema are these questions.
9. Contact. The form ids above, Turnstile, honeypot `#company_website`.
10. `a.wa`, `#dock`, `#layer`, in that order, inside `main`.

The board is an example. Caption it `ÉCRAN D'EXEMPLE · DONNÉES FICTIVES`. Names on the cards are Dossier A–F or Entreprise A–F. Do not put a real client, a real price, or a real metric on the board.

Buttons that are links use `class="btn"`. A filled button also uses `primary`. An unclassed link inside `main` is forced blue by the site CSS. The cursor stylesheet already wins for links with no class. Give a link a class when it is a card (`.city`) or a button (`.btn`).

Track the quote buttons in PostHog only when the project token and host exist. Event name is specific to the page. Positions are `hero`, `price`, and `form`.

## Do not

- Do not add a second header, footer, or mobile contact bar. `body:has(main.cursor-page)` already hides the site’s sticky mobile bar so the dock can sit at the bottom.
- Do not raise `#layer` to `z-index: 50`. The header is 50. The layer is 48 so the white lead cursor shows inside the dock and stays under the header. The dock and WhatsApp are 45.
- Do not publish a price, a delay, a client, or a metric that is not already on that URL. If another URL owns the cost query, link to it. Do not copy its ranges into the H1, the title, or the first FAQ.
- Do not fork the CSS selector to `main.some-new-page`. New pages use `cursor-page`.
