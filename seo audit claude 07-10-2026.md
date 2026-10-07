I'll start by pulling your sitemap.xml and homepage, then crawl the pages it lists and audit them.

# SEO audit: byteforce.ma

I read your sitemap (59 URLs), robots.txt, and 24 pages across every section of the site. I couldn't get a PageSpeed result (Google's API rate-limited me), so speed, Core Web Vitals, indexing status and backlinks are not covered. I also couldn't see JSON-LD, so I can't tell you whether structured data exists.

**Overall:** the French service pages are strong. Their content is unique, specific and honest, and they target good long-tail keywords. What holds the site back is the homepage language, the templated city pages, thin high-value pages and generic metadata.

## Critical

**1. Your homepage is in English, but the rest of the site is French.**
- The title, meta description and `og:locale` (en_US) are all English. Every other page is French, and so is your market.
- The homepage title has no "développement logiciel", "Casablanca" or "Maroc", so your strongest page isn't targeting any keyword.
- The nav and footer are English everywhere ("Work", "About", "Start a project", "Legal"), even on French pages.
- Fix: make the homepage French by default and translate the nav and footer. If you want English, build a real `/en/` version with hreflang tags.

**2. The city pages look like doorway pages.**
- `/villes/lille`, `marcq-en-baroeul`, `roubaix`, `nord`, `montreal`, `marrakech` and `tanger` are the same template with the city name swapped. Even the questions and answers repeat word for word.
- That is 7 near-duplicate pages, and the office exists only in Casablanca. Google's spam policies target exactly this pattern.
- Fix: either write real unique content per city (local projects, a client story, local context), or merge them into one "Où nous travaillons" page and `noindex` the rest.
- Keep `/developpement-logiciel-casablanca` and `/developpement-logiciel-france`. They are unique and good.

**3. Your two most commercial service pages are the thinnest.**
- `/services/creation-site-web` and `/services/referencement-seo` are about 60–80 words each, with no sub-headings, no FAQ and no proof.
- "Création de site web Maroc" is likely your biggest commercial keyword, yet the page has no location in its title or content.
- An SEO service page that isn't optimized is also a credibility problem.
- Fix: rebuild them at the depth of `/developpement-logiciel-sur-mesure-maroc` (500+ words, H2s, FAQ, case studies, pricing logic).
- The same applies to `/services/hebergement`, `design-graphique`, `api-backend`, `maintenance`, `audit-correction` and `plugins-wordpress`. I didn't open these, but they probably have the same template.

## High

**4. The metadata on many pages is generic or missing.**
- `/services`, `/insights`, `/a-propos`, `/realisations` and `/mentions-legales` all share the same Open Graph title ("Byte Force · Casablanca") and description. That is a leftover layout default.
- `/contact` shows no canonical, meta description or Open Graph tags in the page head. Its title appears only at the end of the page body, so check view-source to confirm it is really in `<head>`.
- Titles like "Offres · Byte Force" and "Référencement naturel · Byte Force" have no location or intent keyword. Compare "Développement logiciel sur mesure au Maroc", which works.
- `/insights` has an English meta description on an otherwise French site.
- Case study meta descriptions are placeholder buzzwords. Coco Inbox says "Outil innovant pour la gestion et l'optimisation des flux de communication digitale", which doesn't match what the product is.

**5. Subpages have no social image.**
- Only top-level pages have an `og:image`. City, solution and case-study pages use `twitter:card: summary` with no image.
- Fix: generate a per-page Open Graph image (Next.js can do this automatically).

**6. Your internal links point to redirects.**
- `/services/logiciel-sur-mesure` and `/services/applications-mobiles` are linked from every city page and case study. Both redirect to `/developpement-logiciel-sur-mesure-maroc` and `/developpement-application-mobile-maroc`.
- Fix: update those links to the final URLs.

**7. Some pages probably compete with each other.**
- `/solutions/remplacer-excel` and `/developpement-logiciel-sur-mesure-maroc/crm/remplacer-excel` have near-identical H1s and the same topic.
- Their content is differentiated (general operations versus sales pipeline) and they cross-link, so it's manageable, but give them clearly distinct title tags.
- I didn't open these pairs, so check them for the same overlap:
  - `crm` and `crm/logiciel-crm-personnalise`
  - `erp` and `erp/erp-personnalise`
  - `erp/logiciel-gestion-entreprise` and `solutions/logiciel-entreprise`

**8. Your site's positioning contradicts itself.**
- `/developpement-logiciel-sur-mesure-maroc` says "Byte Force est-il une agence web généraliste ? Non."
- Yet your services, sitemap and homepage all sell websites, SEO, hosting, graphic design and WordPress plugins.
- That muddles topical focus. Decide whether you are a software studio or a full agency, and align the copy and navigation with that.

## Medium

**9. `/a-propos` is almost empty.**
- It has about 30 words and four stats. There is no team, founder, story, certifications or testimonials.
- This is your weakest page for trust (E-E-A-T), and a B2B buyer will look at it before calling.

**10. `/insights` isn't a blog.**
- It links to six existing solution pages and has no articles, dates or authors.
- You are missing an easy source of long-tail traffic. Example topics:
  - "Combien coûte un logiciel sur mesure au Maroc"
  - "ERP vs logiciel sur mesure"
  - "Remplacer un fichier Excel: 5 signes"

**11. The sitemap lacks `lastmod` dates.**
- Add accurate `lastmod` values, and update them only when content actually changes.
- Consider removing or de-prioritizing `/categories/*` (3–4 thin list pages) and the legal pages.

**12. Local SEO signals are weak.**
- Your name, address and phone are consistent across pages, which is good.
- The homepage links a `share.google` short link instead of a proper Google Business Profile/Maps link.
- Verify that you have a complete Google Business Profile, and add `ProfessionalService` or `LocalBusiness` schema. Add `BreadcrumbList` and `Service` schema too if they aren't already there.

**13. `og:locale` is `fr_MA`.**
- I'm not sure Facebook and LinkedIn recognize this value. `fr_FR` is the safe choice.
- City and solution pages are missing `og:locale` and `og:url` entirely.

**14. The homepage logo image appears to have empty alt text.**
- Project images do have alt text. Give the logo "Byte Force" as its alt.

## What's working

- Every page I checked has a self-referencing canonical and `index, follow`.
- robots.txt is clean: it blocks only `/dashboard` and `/taches` and points to the sitemap.
- A nonexistent URL returns a real 404, not a soft 404.
- `www` resolves to the non-www version.
- URL structure is clean and logical, with keywords in the slugs.
- Copy is specific and unique, with FAQs and honest claims ("Pas de bureau en France").
- Meta descriptions on the main service pages are well written and the right length.

## Suggested order

1. Make the homepage and nav/footer French, with a keyword-rich title.
2. Decide on the city pages: delete or rewrite them, and `noindex` the weak ones.
3. Rewrite the thin service pages, starting with site creation and SEO.
4. Fix `/contact` metadata and the generic Open Graph and meta descriptions.
5. Fix the redirecting internal links and add `lastmod` to the sitemap.
6. Flesh out `/a-propos`, then start publishing in `/insights`.
7. Verify structured data, Google Business Profile, Core Web Vitals and Search Console coverage. These are the gaps I couldn't check.

I can turn this into a shareable document, or write the new homepage title, meta descriptions and page outlines for the thin service pages, if you want.