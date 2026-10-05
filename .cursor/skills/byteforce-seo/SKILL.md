---
name: byteforce-seo
description: >-
  Plans and writes Byte Force Maroc pages that attract buyers and generate
  leads. Use when the user invokes /byteforce-seo, or asks for Byteforce,
  byteforce.ma, keyword research, competitor analysis, clustering,
  cannibalization, landing pages, service pages, articles, titles, meta,
  schema, internal links, Google SEO, or ChatGPT/AI-search optimization.
---

# Byteforce SEO

One workflow for this repository. The site exists to generate leads for Byte Force Maroc. Rankings are a means to an inquiry, a call, or a quote.

Use the installed `cursor-seo` plugin for the mechanics of each step. Read that skill and follow it. Do not invent a second method, and do not load another SEO skill pack.

Plugin root: `C:\Users\Dell\.cursor\plugins\local\cursor-seo`

Python for plugin scripts, on this machine:

`C:\Users\Dell\.cursor\plugins\local\cursor-seo\.venv\Scripts\python.exe`

## Business

Byte Force Maroc is the company. The Google listing is [Byte force maroc](https://share.google/L12w0TmJ9kkUcVBg7). Do not use ByteForce IT Solutions or byteforceitsolutions.com.

- Site: https://byteforce.ma/
- This repo: the Byteforce site being built
- Office on the Google listing: Technopark, Bd Dammam, Aïn Chock, 20001 Casablanca, Morocco
- Phone: +212 666 650 696
- Email: walidmoultamis@gmail.com
- Hours: Monday to Friday, 09:00–19:00
- Language: French, unless the user asks for another language
- Markets: Morocco first, plus the countries where a catalogue project already exists (France, Canada)
- Offers: custom software, websites, web apps, mobile apps (iOS and Android), graphic design, social media, cloud and web hosting, SEO, backend APIs, maintenance
- Portfolio archive: https://catalogue-iota.vercel.app/ — 12 published projects. Use a project name only as it appears there. Do not invent results, clients, or reviews.
- Publish only the contact facts in this section, plus facts the user adds in the chat.

## Pipeline

Copy this checklist and complete it in order. Skip a step only when the user already supplied that output and it still matches the lead goal.

```
- [ ] Research buyer keywords
- [ ] Identify search intent
- [ ] Analyze competitors
- [ ] Cluster keywords
- [ ] Detect cannibalization
- [ ] Choose pages to create
- [ ] Generate the page
- [ ] Generate title, meta, and schema
- [ ] Suggest internal links
- [ ] Optimize for Google
- [ ] Optimize for ChatGPT and AI search
- [ ] Validate before publishing
```

## Which cursor-seo skill to read

| Step | Read |
|---|---|
| Buyer keywords, and live volume if DataForSEO is connected | `skills/seo-dataforseo/SKILL.md`, else expand with web search the way `skills/seo-cluster/SKILL.md` expands a seed |
| Search intent and whether a query can produce a lead | `skills/seo-content-brief/SKILL.md` |
| Who already ranks, and what their pages cover | `skills/seo-plan/SKILL.md` |
| A "vs" or "alternatives" page, only if that page was chosen | `skills/seo-competitor-pages/SKILL.md` |
| Cluster keywords into hub-and-spoke groups | `skills/seo-cluster/SKILL.md` |
| Service, market, or landing-page plan | `skills/seo-plan/SKILL.md` (agency template) |
| Many location or industry URLs from one template | `skills/seo-programmatic/SKILL.md` |
| Page draft quality | `skills/seo-content/SKILL.md` |
| Title, meta, and JSON-LD | `skills/seo-schema/SKILL.md` and `skills/seo-page/SKILL.md` |
| Google on-page pass | `skills/seo-page/SKILL.md` |
| ChatGPT, AI Overviews, and citations | `skills/seo-geo/SKILL.md` |
| Local pack or a real office market | `skills/seo-local/SKILL.md` |

`seo-geo` inside this plugin is the AI-search step. Do not add `jkishaba-creator/seo-geo-claude-skills` unless the user asks after this workflow has been used.

## Lead rules

Judge every keyword and URL by this question: would a buyer of a Byteforce service search this, and can the page ask them to get in touch?

Keep a keyword when the intent is commercial: agence, création de site, application mobile, logiciel sur mesure, référencement, hébergement, or a problem Byte Force solves for a business in Casablanca or Morocco.

Drop a keyword when the searcher wants a job, a course, a free tool, or a definition, unless the user explicitly wants a supporting article. A supporting article is allowed only when it links to one service page that can take the lead.

Page types, in this order of priority:

1. Service page for one offer
2. Market or industry landing page with that same offer
3. Comparison page, only for a competitor the user names
4. Supporting article tied to one service page

One primary keyword per URL. One primary call to action per URL: contact Byteforce about that offer.

Do not create a city page for a city Byteforce does not serve. Do not split one offer across two URLs that could rank for the same query.

## Page choice

Before proposing a new URL, list existing URLs on https://byteforce.ma/ and in this repo that target the same offer. If one already covers the query, improve that page. Say which URL would cannibalize the new one and why. The live site may fail to load; if it does, say so and check this repo only.

A new page needs:

- primary keyword
- intent
- the Byteforce offer it sells
- the single URL slug
- the page it must not compete with

## Writing the page

Read `skills/seo-content-brief/SKILL.md` before drafting. Then write the page.

- Say who Byteforce is, what the offer includes, and who it is for in the first screen.
- Use only the offers and contact facts in this skill, plus facts the user provides in the chat.
- Put the contact path in the introduction and again at the end.
- Answer the query directly, in sentences a search engine or an AI answer can cite.
- Internal links go to the parent service page and to contact. Do not link sideways to another article when a service page exists.

## Title, meta, and schema

- Title: the offer plus the market or audience, under 60 characters when possible.
- Meta description: the problem, the offer, and the reason to contact Byteforce, under 160 characters when possible.
- JSON-LD only. Prefer `Organization` or `ProfessionalService`, plus `Service`. Add `FAQPage` only for questions the page actually answers.
- Read `skills/seo-schema/SKILL.md` before writing the script. Use absolute URLs. No placeholder text.

## Validate before publishing

Do not present the page as ready until every line below is true. If one fails, fix it and check again.

- The primary keyword is a buyer query, and the page asks for a lead.
- No existing Byteforce URL targets the same keyword.
- Title, meta description, H1, and JSON-LD exist and describe the same offer.
- The introduction names Byteforce and the offer.
- Contact details match this skill.
- No invented clients, metrics, guarantees, or addresses.
- At least one internal link points at the service or contact page that should receive the lead.
- The AI-search pass from `skills/seo-geo/SKILL.md` is done, and the page states who, what, and where in citable sentences.
- The draft lives in this repo, or the user has the final copy to publish.

## Report shape

```markdown
# [Primary keyword] — Byteforce

## Lead
Who searches this, which offer it sells, and what the page asks them to do.

## Keyword
Primary keyword, intent, and close variants assigned to this URL only.

## Cannibalization
Existing URL to update, or "none".

## Page
Slug, title, meta description, H1.

## Outline
Sections, in order, with the call to action marked.

## Internal links
Source, target, anchor.

## Schema
JSON-LD type and required fields.

## Publish check
The validation list, each item pass or fail.
```
