const fs = require('fs');
const path = require('path');

async function main() {
  const baseUrl = 'http://localhost:3000';

  // 1. Get all routes from sitemap / publicEntries
  const sitemapRes = await fetch(`${baseUrl}/sitemap.xml`);
  const sitemapXml = await sitemapRes.text();
  const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  
  console.log(`Sitemap total URLs: ${sitemapUrls.length}`);

  // We will crawl and audit key routes and landing pages, plus all required pages
  const targetRoutes = [
    '/',
    '/services',
    '/solutions',
    '/realisations',
    '/insights',
    '/contact',
    '/developpement-logiciel-sur-mesure-maroc',
    '/crm-sur-mesure-maroc',
    '/developpement-saas-maroc',
    '/agence-wordpress-maroc',
    '/developpement-application-mobile-maroc',
    '/integration-ia-automatisation-entreprise-maroc',
    '/villes/casablanca',
    '/villes/marrakech',
    '/villes/agadir',
    '/villes/fes',
    '/insights/prix-application-mobile-maroc',
    '/insights/cout-logiciel-sur-mesure-maroc',
    '/insights/prix-seo-maroc',
    '/insights/tarif-creation-site-wordpress-maroc'
  ];

  // Also include remaining public paths for full inventory
  const allRoutesToTest = Array.from(new Set([
    ...targetRoutes,
    ...sitemapUrls.map(u => u.replace('https://byteforce.ma', '').replace('http://localhost:3000', '') || '/')
  ]));

  console.log(`Total routes to inventory: ${allRoutesToTest.length}`);

  const inventory = [];
  const landingPages = [
    '/developpement-logiciel-sur-mesure-maroc',
    '/crm-sur-mesure-maroc',
    '/developpement-saas-maroc',
    '/agence-wordpress-maroc',
    '/developpement-application-mobile-maroc',
    '/integration-ia-automatisation-entreprise-maroc'
  ];

  const cityPages = [
    '/villes/casablanca',
    '/villes/marrakech',
    '/villes/agadir',
    '/villes/fes'
  ];

  const pricingArticles = [
    '/insights/prix-application-mobile-maroc',
    '/insights/cout-logiciel-sur-mesure-maroc',
    '/insights/prix-seo-maroc',
    '/insights/tarif-creation-site-wordpress-maroc'
  ];

  const results = {};

  for (const route of allRoutesToTest) {
    try {
      const url = `${baseUrl}${route}`;
      const res = await fetch(url);
      if (!res.ok) {
        inventory.push({ route, status: res.status, error: 'HTTP ' + res.status });
        continue;
      }
      const html = await res.text();

      // Title
      const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : '';

      // Meta description
      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                        html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
      const description = descMatch ? descMatch[1].trim() : '';

      // Canonical
      const canMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                       html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
      const canonical = canMatch ? canMatch[1] : '';

      // Hreflang
      const hreflangMatch = html.match(/<link[^>]*hreflang=["']fr-MA["']/i);

      // H1s
      const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
      
      // H2s
      const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

      // Body text & word count (strip script, style, tags)
      const cleanBody = html
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<nav[\s\S]*?<\/nav>/gi, '')
        .replace(/<footer[\s\S]*?<\/footer>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      const words = cleanBody ? cleanBody.split(/\s+/).filter(Boolean) : [];
      const wordCount = words.length;

      // JSON-LD scripts
      const jsonLdMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
      const jsonLdTypes = [];
      let jsonLdValid = true;
      let jsonLdData = [];
      for (const m of jsonLdMatches) {
        try {
          const parsed = JSON.parse(m[1]);
          jsonLdData.push(parsed);
          if (parsed['@type']) jsonLdTypes.push(parsed['@type']);
          if (parsed['@graph']) {
            for (const item of parsed['@graph']) {
              if (item['@type']) jsonLdTypes.push(item['@type']);
            }
          }
        } catch (e) {
          jsonLdValid = false;
        }
      }

      // Conversion checks
      const hasWhatsApp = html.includes('https://wa.me/212666650696') || html.includes('wa.me/212666650696');
      const hasForm = html.includes('<form') || html.includes('data-lead-form');
      const hasStickyCta = html.includes('Devis Gratuit (24h)');
      const hasCtaFirstScreen = html.includes('Discuter sur WhatsApp') || html.includes('Devis');

      // Direct snippet answer
      const snippetBoxMatch = html.match(/class=["'][^"']*direct-snippet-box[^"']*["'][\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
      let directSnippetWords = 0;
      let directSnippetText = '';
      if (snippetBoxMatch) {
        directSnippetText = snippetBoxMatch[1].replace(/<[^>]+>/g, '').trim();
        directSnippetWords = directSnippetText.split(/\s+/).filter(Boolean).length;
      }

      inventory.push({
        route,
        title,
        titleLength: title.length,
        description,
        descLength: description.length,
        h1: h1Matches.join(' | '),
        h1Count: h1Matches.length,
        h2Count: h2Matches.length,
        h2List: h2Matches,
        wordCount,
        canonical,
        hreflang: !!hreflangMatch,
        jsonLdTypes,
        jsonLdValid,
        jsonLdData,
        hasWhatsApp,
        hasForm,
        hasStickyCta,
        hasCtaFirstScreen,
        directSnippetWords,
        directSnippetText,
        first100Words: words.slice(0, 100).join(' '),
        first60Words: words.slice(0, 60).join(' '),
        rawHtml: html
      });
    } catch (e) {
      inventory.push({ route, error: e.message });
    }
  }

  fs.writeFileSync('scratch/audit_inventory.json', JSON.stringify(inventory, null, 2));
  console.log('Saved audit_inventory.json');
}

main().catch(console.error);
