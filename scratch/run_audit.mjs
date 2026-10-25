import fs from 'fs';
import path from 'path';

const APP_DIR = path.resolve('.next/server/app');
const SRC_APP_DIR = path.resolve('app');
const LIB_DIR = path.resolve('lib');

// 1. Read sitemap.xml
const sitemapContent = fs.readFileSync(path.join(APP_DIR, 'sitemap.xml.body'), 'utf8');
const sitemapUrls = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

console.log('Total sitemap URLs:', sitemapUrls.length);

// Helper to find HTML files
function getHtmlForRoute(route) {
  let cleanRoute = route.replace(/^https:\/\/byteforce\.ma/, '');
  if (cleanRoute === '' || cleanRoute === '/') {
    return fs.readFileSync(path.join(APP_DIR, 'index.html'), 'utf8');
  }
  cleanRoute = cleanRoute.replace(/^\//, '');
  // Try exact .html
  let candidate = path.join(APP_DIR, cleanRoute + '.html');
  if (fs.existsSync(candidate)) return fs.readFileSync(candidate, 'utf8');
  // Try index.html in folder
  candidate = path.join(APP_DIR, cleanRoute, 'index.html');
  if (fs.existsSync(candidate)) return fs.readFileSync(candidate, 'utf8');
  // Try (money)/...
  candidate = path.join(APP_DIR, '(money)', cleanRoute + '.html');
  if (fs.existsSync(candidate)) return fs.readFileSync(candidate, 'utf8');
  // Try (money)/.../index.html
  candidate = path.join(APP_DIR, '(money)', cleanRoute, 'index.html');
  if (fs.existsSync(candidate)) return fs.readFileSync(candidate, 'utf8');

  return null;
}

const audit = {
  sitemapUrls,
  pages: []
};

for (const url of sitemapUrls) {
  const route = url.replace('https://byteforce.ma', '') || '/';
  const html = getHtmlForRoute(url);
  if (!html) {
    audit.pages.push({ url, route, error: 'HTML file not found in .next build' });
    continue;
  }

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
  const hreflangMatches = [...html.matchAll(/<link[^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi)];

  // H1 tags
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

  // H2 tags
  const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

  // Word count (excluding header/nav/footer/scripts/styles)
  let cleanText = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();

  const words = cleanText ? cleanText.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;

  // JSON-LD
  const jsonLdBlocks = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const jsonLdTypes = [];
  let jsonLdValid = true;
  let jsonLdParsed = [];
  for (const m of jsonLdBlocks) {
    try {
      const p = JSON.parse(m[1]);
      jsonLdParsed.push(p);
      const collectTypes = (obj) => {
        if (!obj) return;
        if (Array.isArray(obj)) return obj.forEach(collectTypes);
        if (typeof obj === 'object') {
          if (obj['@type']) {
            if (Array.isArray(obj['@type'])) jsonLdTypes.push(...obj['@type']);
            else jsonLdTypes.push(obj['@type']);
          }
          if (obj['@graph']) collectTypes(obj['@graph']);
        }
      };
      collectTypes(p);
    } catch (e) {
      jsonLdValid = false;
    }
  }

  // Conversion elements
  // WhatsApp: https://wa.me/212666650696
  const hasWaLink = html.includes('https://wa.me/212666650696') || html.includes('wa.me/212666650696');
  // Form present
  const hasForm = html.includes('<form') || html.includes('name="lead"') || html.includes('data-lead-form');
  // Sticky mobile CTA
  const hasStickyCta = html.includes('Devis Gratuit (24h)') || html.includes('fixed bottom') || html.includes('sticky-cta') || html.includes('bottom-0');
  // CTA in first screen
  const hasFirstScreenCta = /<(a|button)[^>]*>(Discuter sur WhatsApp|Demandez un devis|Devis gratuit|Démarrer un projet|Contacter le studio|Écrire au studio)/i.test(html) || html.includes('Devis gratuit en 24h');

  // Direct answer snippet (40-60 words)
  // Check for direct-snippet-box or similar or lede
  const snippetMatch = html.match(/class=["'][^"']*direct-snippet-box[^"']*["'][\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
  let directSnippetWords = 0;
  let directSnippetText = '';
  if (snippetMatch) {
    directSnippetText = snippetMatch[1].replace(/<[^>]+>/g, '').trim();
    directSnippetWords = directSnippetText.split(/\s+/).filter(Boolean).length;
  }

  // Links on page
  const pageLinks = [...html.matchAll(/<a\s[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)].map(m => ({
    href: m[1],
    anchor: m[2].replace(/<[^>]+>/g, '').trim()
  }));

  // Images on page
  const images = [...html.matchAll(/<img\s([^>]+)>/gi)].map(m => {
    const tag = m[1];
    const altMatch = tag.match(/alt=["']([^"']*)["']/i);
    const loadingMatch = tag.match(/loading=["']([^"']*)["']/i);
    return {
      alt: altMatch ? altMatch[1] : null,
      loading: loadingMatch ? loadingMatch[1] : null,
      tag
    };
  });

  // Robots meta
  const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i) ||
                      html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']robots["']/i);
  const robotsMeta = robotsMatch ? robotsMatch[1] : null;

  audit.pages.push({
    url,
    route,
    title,
    titleLength: title.length,
    description,
    descLength: description.length,
    h1: h1Matches.join(' | '),
    h1Count: h1Matches.length,
    h1Matches,
    h2Matches,
    h2Count: h2Matches.length,
    wordCount,
    canonical,
    hreflangs: hreflangMatches.map(m => ({ lang: m[1], href: m[2] })),
    jsonLdTypes: [...new Set(jsonLdTypes)],
    jsonLdValid,
    jsonLdParsed,
    hasWaLink,
    hasForm,
    hasStickyCta,
    hasFirstScreenCta,
    directSnippetWords,
    directSnippetText,
    first100Words: words.slice(0, 100).join(' '),
    first60Words: words.slice(0, 60).join(' '),
    pageLinks,
    images,
    robotsMeta
  });
}

fs.writeFileSync(path.resolve('scratch/comprehensive_audit_result.json'), JSON.stringify(audit, null, 2));
console.log('Wrote comprehensive_audit_result.json successfully!');
