# Illustration reference

Look at `components/cloudflare-lab.tsx` and the `CloudflareSlot` in `components/article-view.tsx`. Copy that shape. Do not invent a second visual system.

## The page

Background is the site surface. Text is ink. A quiet line is `border-line`. Secondary text is `text-mute`. Headlines use the `display` class. Technical values use `font-mono`.

A block is:

```tsx
<div className="mt-10 max-w-3xl border border-line p-5 md:p-8">
  <p className="text-sm text-mute">Schéma</p>
  <h3 className="display mt-3 max-w-[16ch] text-3xl">Title</h3>
  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">
    Illustration. Pas un test, et pas une mesure de ce site.
  </p>
</div>
```

Selected control: `bg-ink px-3 py-2 text-sm text-paper`, `aria-pressed`.
Unselected control: `border border-line px-3 py-2 text-sm`.
Links stay `border-b border-ink`.

SVG nodes use `fill="var(--color-surface)"` and `stroke="currentColor"`. A node that is "on" is filled with `currentColor`. A path that is "off" is dashed and dimmed.

Animate an SVG geometry property such as `cx`, in `app/globals.css`, with a named class. In the reduced-motion query, set `animation: none` and a resting position. Do not animate layout properties that shift the article.

## Injection

```tsx
function TopicSlot({ heading, lang }: { heading: string; lang: "fr" | "en" }) {
  if (heading === "Titre français" || heading === "English heading") {
    return <TopicFlow lang={lang} />;
  }
  return null;
}
```

Render it only when `article.slug` is the page being illustrated, after that section's paragraphs, in both the French map and the English map.

## What a good illustration teaches

One switch, two honest outcomes.

The Cloudflare page does this three times:

- Direct connection or through the proxy. Both explanations stay on the page.
- One DNS record, proxied or DNS-only. Records that cannot be proxied say so and do not pretend to toggle.
- A status the buyer might already see, with the code, the header, and a sentence on whether the origin was called.

The drawing changes with the switch. The sentence that matches the switch is full ink. The other sentence stays visible and muted. Screen readers hear the change through `aria-live="polite"` on the detail.

## Accuracy

If a protection is partial, say the limit in the same paragraph as the benefit. The proxy example hides an address in the DNS answer and still says another path can reveal the origin.

Do not invent milliseconds, uptime, or a reading of the visitor's site. If a number is required to make a scenario readable, label it as an example and prefer omitting it.

## Close

After the last illustration:

```tsx
<h3 className="display max-w-[18ch] text-3xl">Lire une page, ou décrire le domaine</h3>
```

Say what the free audit actually reads, and what it does not open. Then link to `/audit` only for that real reading, and to `/contact` for the work.
