---
name: byteforce-article
description: >-
  Publishes one Byte Force insight in French and English on the same URL.
  Use when the user pastes a blog article, asks for French and English
  copies, an insight, interlinking, a contact conversion, sitemap, or llms.txt.
---

# Byte Force article

Publish one insight. French is the page. English is the same page, same slug. The page exists to produce a contact request.

## One slug

Write both languages together. Store English on `article.en`. Render it under the French text on `/insights/[slug]`.

Do not add a second article, a `-en` slug, `/en/`, or a separate canonical. One sitemap URL. One llms line. That line is the French URL.

## Facts

Use only facts already on the site or in the draft the user confirms. Byte Force is a software studio at Technopark, Bd Dammam, Aïn Chock, 20001 Casablanca. No public prices, invented reviews, invented metrics, or an "AI agent" product. Automation is a stable rule in the software. llms.txt is not a Google ranking factor. Allowing a bot is not a recommendation.

## Before a new URL

Search `lib/articles.ts`, `lib/money`, and `app/`. If a page already answers the query, extend it. Do not add a second URL for the same intent.

## Write

Add the article to `lib/articles.ts`.

French fields: `title`, `description`, `h1`, `lede`, `sections`. One h1. Contact in the lede and again in the last section, as `[[/contact|...]]`.

English fields, same shape, on `en`: `title`, `description`, `h1`, `lede`, `sections`. Same facts. Contact in the English lede and last section too, still linking to `/contact`.

`links` are shared. Put `/contact` first. Also link the parent offer (`/developpement-logiciel-sur-mesure-maroc` or `/services/creation-site-web`) and `/audit` when the draft is about being found or read.

Do not translate an internal plan ("I would build") as if it were a public promise. Rewrite it as a decision a buyer can use.

## Publish surfaces

These update themselves once the article is in `articles`:

- `/insights` and `/insights/[slug]`
- `app/sitemap.ts`
- `app/llms-full.txt/route.ts`

Also add one line to the short list in `app/llms.txt/route.ts`, using the single French URL. Mention the article once from `/insights` and from `/ai` when it is about machines.

## Check

- Title, description, and h1 describe the same offer in each language.
- French and English are both on `/insights/[slug]`.
- No second slug exists for the English copy.
- A buyer can reach `/contact` from either language without hunting.
- No invented client, price, or review.
- Slug and French title are unique in `articles`.
