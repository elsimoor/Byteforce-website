const fs = require('fs');
const path = require('path');

async function run() {
  const baseUrl = 'http://localhost:3000';

  // 1. Core pages & Required landing pages to audit via HTTP
  const priorityRoutes = [
    '/',
    '/services',
    '/solutions',
    '/realisations',
    '/insights',
    '/contact',
    '/developpement-logiciel-sur-mesure-maroc',
    '/crm-sur-mesure-maroc',
    '/developpement-logiciel-sur-mesure-maroc/crm',
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

  console.log(`Auditing ${priorityRoutes.length} priority routes...`);

  const pageReports = [];

  for (const route of priorityRoutes) {
    try {
      const res = await fetch(`${baseUrl}${route}`);
      const status = res.status;
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
      const hreflang = html.includes('hreflang="fr-MA"') || html.includes('hreflang="fr_MA"') || html.includes('hreflang=\'fr-MA\'');

      // H1s
      const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

      // H2s
      const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

      // Body text
      const cleanBody = html
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<nav[\s\S]*?<\/nav>/gi, '')
        .replace(/<footer[\s\S]*?<\/footer>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      const words = cleanBody ? cleanBody.split(/\s+/).filter(Boolean) : [];

      // JSON-LD
      const jsonLdMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
      const jsonLdTypes = [];
      let jsonLdValid = true;
      const jsonLdParsed = [];
      for (const m of jsonLdMatches) {
        try {
          const parsed = JSON.parse(m[1]);
          jsonLdParsed.push(parsed);
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

      // Conversion items
      const hasWhatsApp = html.includes('+212 666 650 696') || html.includes('212666650696');
      const hasForm = html.includes('<form') || html.includes('name="nom"') || html.includes('data-lead-form');
      const hasStickyCta = html.includes('Devis Gratuit (24h)');
      const hasCtaFirstScreen = html.includes('Discuter sur WhatsApp') || html.includes('Devis') || html.includes('Audit');

      // Direct snippet answer
      const snippetBoxMatch = html.match(/class=["'][^"']*direct-snippet-box[^"']*["'][\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
      let directSnippetWords = 0;
      let directSnippetText = '';
      if (snippetBoxMatch) {
        directSnippetText = snippetBoxMatch[1].replace(/<[^>]+>/g, '').trim();
        directSnippetWords = directSnippetText.split(/\s+/).filter(Boolean).length;
      }

      pageReports.push({
        route,
        status,
        title,
        titleLength: title.length,
        description,
        descLength: description.length,
        h1List: h1Matches,
        h1Count: h1Matches.length,
        h2Matches,
        wordCount: words.length,
        canonical,
        hreflang,
        jsonLdTypes,
        jsonLdValid,
        jsonLdParsed,
        hasWhatsApp,
        hasForm,
        hasStickyCta,
        hasCtaFirstScreen,
        directSnippetWords,
        directSnippetText,
        first60Words: words.slice(0, 60).join(' '),
        first100Words: words.slice(0, 100).join(' ')
      });
      console.log(`Audited ${route} - Status: ${status}, Title len: ${title.length}, Desc len: ${description.length}, Words: ${words.length}`);
    } catch (e) {
      console.error(`Error auditing ${route}:`, e);
      pageReports.push({ route, error: e.message });
    }
  }

  // 2. Full scan of lib/seo-meta.ts to detect any titles > 60, desc outside 140-155, duplicates
  const seoMetaCode = fs.readFileSync('lib/seo-meta.ts', 'utf8');
  // Match key: { title: '...', description: '...' }
  const metaRegex = /"([^"]+)":\s*{\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)"\s*}/g;
  let match;
  const allSeoEntries = [];
  const titleMap = new Map();
  const descMap = new Map();
  const metaViolations = [];

  while ((match = metaRegex.exec(seoMetaCode)) !== null) {
    const [_, urlPath, title, desc] = match;
    allSeoEntries.push({ urlPath, title, desc, titleLen: title.length, descLen: desc.length });
    
    // Check duplicates
    if (titleMap.has(title)) {
      metaViolations.push({ type: 'DUPLICATE_TITLE', title, url1: titleMap.get(title), url2: urlPath });
    } else {
      titleMap.set(title, urlPath);
    }

    if (descMap.has(desc)) {
      metaViolations.push({ type: 'DUPLICATE_DESC', desc, url1: descMap.get(desc), url2: urlPath });
    } else {
      descMap.set(desc, urlPath);
    }

    if (title.length > 60) {
      metaViolations.push({ type: 'TITLE_TOO_LONG', urlPath, len: title.length, title });
    }
    if (desc.length < 140 || desc.length > 155) {
      metaViolations.push({ type: 'DESC_LENGTH_VIOLATION', urlPath, len: desc.length, desc });
    }
  }

  // Check 4: Placeholder list ([À REMPLIR])
  const srcFiles = [];
  function walk(dir) {
    for (const f of fs.readdirSync(dir)) {
      const full = path.join(dir, f);
      if (['node_modules', '.next', '.git', 'graphify-out'].includes(f)) continue;
      if (fs.statSync(full).isDirectory()) walk(full);
      else if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md'].includes(path.extname(f))) {
        srcFiles.push(full);
      }
    }
  }
  walk('.');

  const placeholders = [];
  for (const file of srcFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('[À REMPLIR]') || line.includes('[A REMPLIR]') || line.includes('[À REMPLIR')) {
        placeholders.push({ file, line: idx + 1, content: line.trim() });
      }
    });
  }

  // Check 7: Count inbound internal links to the new landing pages
  const landingUrls = [
    '/developpement-logiciel-sur-mesure-maroc',
    '/crm-sur-mesure-maroc',
    '/developpement-saas-maroc',
    '/agence-wordpress-maroc',
    '/developpement-application-mobile-maroc',
    '/integration-ia-automatisation-entreprise-maroc'
  ];

  const inboundLinks = {};
  for (const u of landingUrls) inboundLinks[u] = [];

  for (const file of srcFiles) {
    const content = fs.readFileSync(file, 'utf8');
    for (const u of landingUrls) {
      if (content.includes(`"${u}"`) || content.includes(`'${u}'`) || content.includes(`href="${u}"`)) {
        inboundLinks[u].push(file);
      }
    }
  }

  // City pages text duplication
  const cityFiles = ['casablanca', 'marrakech', 'agadir', 'fes'];
  const cityPagesCode = fs.readFileSync('lib/city-pages.ts', 'utf8');

  const resultData = {
    pageReports,
    allSeoEntriesCount: allSeoEntries.length,
    metaViolations,
    placeholders,
    inboundLinks
  };

  fs.writeFileSync('fast_audit_output.json', JSON.stringify(resultData, null, 2));
  console.log('Fast audit finished and written to fast_audit_output.json');
}

run().catch(console.error);
