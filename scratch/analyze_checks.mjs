import fs from 'fs';
import path from 'path';

const audit = JSON.parse(fs.readFileSync('scratch/comprehensive_audit_result.json', 'utf8'));

console.log('=== CHECK 1 AUDIT ===');
const flags = {
  titleOver60: [],
  descOutside140_155: [],
  missingH1: [],
  multipleH1: [],
  duplicateTitles: {},
  duplicateDescs: {},
  thinLandingPages: []
};

const landingPageRoutes = [
  '/developpement-logiciel-sur-mesure-maroc',
  '/crm-sur-mesure-maroc',
  '/developpement-saas-maroc',
  '/agence-wordpress-maroc',
  '/developpement-application-mobile-maroc',
  '/integration-ia-automatisation-entreprise-maroc'
];

for (const p of audit.pages) {
  if (p.titleLength > 60) flags.titleOver60.push({ url: p.url, len: p.titleLength, title: p.title });
  if (p.descLength < 140 || p.descLength > 155) flags.descOutside140_155.push({ url: p.url, len: p.descLength, desc: p.description });
  if (p.h1Count === 0) flags.missingH1.push(p.url);
  if (p.h1Count > 1) flags.multipleH1.push({ url: p.url, h1s: p.h1Matches });
  
  if (p.title) {
    flags.duplicateTitles[p.title] = flags.duplicateTitles[p.title] || [];
    flags.duplicateTitles[p.title].push(p.url);
  }
  if (p.description) {
    flags.duplicateDescs[p.description] = flags.duplicateDescs[p.description] || [];
    flags.duplicateDescs[p.description].push(p.url);
  }

  if (landingPageRoutes.includes(p.route)) {
    if (p.wordCount < 600) flags.thinLandingPages.push({ url: p.url, wordCount: p.wordCount });
  }
}

const dupTitles = Object.entries(flags.duplicateTitles).filter(([_, urls]) => urls.length > 1);
const dupDescs = Object.entries(flags.duplicateDescs).filter(([_, urls]) => urls.length > 1);

console.log('Title > 60 chars count:', flags.titleOver60.length);
console.log('Desc outside 140-155 count:', flags.descOutside140_155.length);
console.log('Missing H1 count:', flags.missingH1.length);
console.log('Multiple H1 count:', flags.multipleH1.length);
console.log('Duplicate titles count:', dupTitles.length);
console.log('Duplicate descs count:', dupDescs.length);
console.log('Landing pages < 600 words:', flags.thinLandingPages);

console.log('\n=== CHECK 2: REQUIRED PAGES ===');
const check2Targets = [
  { name: 'développement logiciel sur mesure maroc', slug: '/developpement-logiciel-sur-mesure-maroc' },
  { name: 'crm sur mesure maroc', slug: '/crm-sur-mesure-maroc' },
  { name: 'développement saas maroc', slug: '/developpement-saas-maroc' },
  { name: 'agence wordpress maroc', slug: '/agence-wordpress-maroc' },
  { name: 'développement application mobile maroc', slug: '/developpement-application-mobile-maroc' },
  { name: 'intégration ia / automatisation entreprise maroc', slug: '/integration-ia-automatisation-entreprise-maroc' },
  { name: 'city page: Casablanca', slug: '/villes/casablanca' },
  { name: 'city page: Marrakech', slug: '/villes/marrakech' },
  { name: 'city page: Agadir', slug: '/villes/agadir' },
  { name: 'city page: Fès', slug: '/villes/fes' },
  { name: 'pricing: application mobile', pattern: /application-mobile.*prix|prix.*application-mobile|cout.*application-mobile/i, expected: '/insights/prix-application-mobile-maroc' },
  { name: 'pricing: logiciel sur mesure', pattern: /logiciel.*prix|cout.*logiciel|tarif.*logiciel/i, expected: '/insights/cout-logiciel-sur-mesure-maroc' },
  { name: 'pricing: SEO', pattern: /prix-seo|tarif-seo/i, expected: '/insights/prix-seo-maroc' },
  { name: 'pricing: site WordPress', pattern: /wordpress.*prix|tarif.*wordpress/i, expected: '/insights/tarif-creation-site-wordpress-maroc' }
];

for (const t of check2Targets) {
  if (t.slug) {
    const page = audit.pages.find(p => p.route === t.slug);
    console.log(`${t.name}: ${page ? 'EXISTS' : 'MISSING'} (${t.slug})`);
  } else {
    const page = audit.pages.find(p => p.route === t.expected || t.pattern.test(p.route));
    console.log(`${t.name}: ${page ? 'EXISTS' : 'MISSING'} (${page ? page.route : 'NOT FOUND'})`);
  }
}

console.log('\n=== CHECK 3: KEYWORD PLACEMENT ===');
const landingKws = [
  { route: '/developpement-logiciel-sur-mesure-maroc', kw: 'développement logiciel sur mesure maroc' },
  { route: '/crm-sur-mesure-maroc', kw: 'crm sur mesure maroc' },
  { route: '/developpement-saas-maroc', kw: 'développement saas maroc' },
  { route: '/agence-wordpress-maroc', kw: 'agence wordpress maroc' },
  { route: '/developpement-application-mobile-maroc', kw: 'développement application mobile maroc' },
  { route: '/integration-ia-automatisation-entreprise-maroc', kw: 'intégration ia automatisation maroc' }
];

function normalize(str) {
  return (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

for (const lk of landingKws) {
  const p = audit.pages.find(p => p.route === lk.route);
  if (!p) {
    console.log(`Page not found: ${lk.route}`);
    continue;
  }
  const normKw = normalize(lk.kw);
  const normTitle = normalize(p.title);
  const normDesc = normalize(p.description);
  const normH1 = normalize(p.h1);
  const normFirst100 = normalize(p.first100Words);
  const normSlug = normalize(lk.route);

  const titleHas = normTitle.includes(normKw);
  const titleStarts = normTitle.startsWith(normKw);
  const descHas = normDesc.includes(normKw);
  const h1Has = normH1.includes(normKw);
  const first100Has = normFirst100.includes(normKw);
  const h2Has = p.h2Matches.some(h2 => normalize(h2).includes(normKw));
  const slugHas = normSlug.includes(normKw.replace(/\s+/g, '-')) || normSlug.includes(normKw);

  console.log(`Page: ${lk.route}`);
  console.log(`  Target KW: "${lk.kw}"`);
  console.log(`  Title (has/starts): ${titleHas} / ${titleStarts} ("${p.title}")`);
  console.log(`  Meta desc: ${descHas}`);
  console.log(`  H1: ${h1Has} ("${p.h1}")`);
  console.log(`  First 100 words: ${first100Has}`);
  console.log(`  At least one H2: ${h2Has}`);
  console.log(`  URL slug: ${slugHas}`);
}

console.log('\n=== CHECK 4: CONTENT QUALITY ===');
// 1. City pages duplication
const cityRoutes = ['/villes/casablanca', '/villes/marrakech', '/villes/agadir', '/villes/fes', '/villes/tanger', '/villes/safi', '/villes/rabat'];
const cityPagesData = audit.pages.filter(p => cityRoutes.includes(p.route));
console.log('Auditing city pages duplication across:', cityPagesData.map(c => c.route));

function getJaccard(text1, text2) {
  const set1 = new Set(normalize(text1).split(/\s+/).filter(w => w.length > 3));
  const set2 = new Set(normalize(text2).split(/\s+/).filter(w => w.length > 3));
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);
  return ((intersection.size / union.size) * 100).toFixed(1);
}

for (let i = 0; i < cityPagesData.length; i++) {
  for (let j = i + 1; j < cityPagesData.length; j++) {
    const sim = getJaccard(cityPagesData[i].first100Words + ' ' + (cityPagesData[i].cleanText || ''), cityPagesData[j].first100Words + ' ' + (cityPagesData[j].cleanText || ''));
    console.log(`Similarity ${cityPagesData[i].route} vs ${cityPagesData[j].route}: ${sim}%`);
  }
}

// 2. Search for [À REMPLIR]
let placeholders = [];
for (const p of audit.pages) {
  if (!p) continue;
  const f100 = p.first100Words || '';
  const desc = p.description || '';
  const t = p.title || '';
  if (f100.includes('REMPLIR') || desc.includes('REMPLIR') || t.includes('REMPLIR')) {
    placeholders.push({ url: p.url, match: 'REMPLIR found' });
  }
}
console.log('[À REMPLIR] occurrences in pages:', placeholders);

// 3. Three quotes of 60 words
for (const r of ['/developpement-logiciel-sur-mesure-maroc', '/crm-sur-mesure-maroc', '/agence-wordpress-maroc']) {
  const p = audit.pages.find(x => x.route === r);
  if (p) {
    console.log(`\nQuote first 60 words for ${r}:`);
    console.log(`"${p.first60Words}"`);
  }
}

// 4. Direct answers 40-60 words
console.log('\nDirect answer snippet per landing page:');
for (const lk of landingKws) {
  const p = audit.pages.find(x => x.route === lk.route);
  if (p) {
    console.log(`${lk.route}: words=${p.directSnippetWords}, hasSnippet=${p.directSnippetWords >= 40 && p.directSnippetWords <= 60}`);
    console.log(`  Snippet: "${p.directSnippetText}"`);
  }
}

console.log('\n=== CHECK 5: CONVERSION ELEMENTS ===');
for (const lk of landingKws) {
  const p = audit.pages.find(x => x.route === lk.route);
  if (p) {
    console.log(`${lk.route}: CTA_First_Screen=${p.hasFirstScreenCta}, WhatsApp=${p.hasWaLink}, Form=${p.hasForm}, StickyMobile=${p.hasStickyCta}`);
  }
}

console.log('\n=== CHECK 6: STRUCTURED DATA ===');
for (const lk of landingKws) {
  const p = audit.pages.find(x => x.route === lk.route);
  if (p) {
    console.log(`${lk.route}: Valid=${p.jsonLdValid}, Types=[${p.jsonLdTypes.join(', ')}]`);
  }
}

console.log('\n=== CHECK 7: INTERNAL LINKING & TECHNICAL SEO ===');
// Link graph
const inboundLinks = {};
for (const target of landingKws.map(k => k.route)) {
  inboundLinks[target] = [];
}

for (const source of audit.pages) {
  for (const l of source.pageLinks) {
    let cleanHref = l.href.replace(/^https:\/\/byteforce\.ma/, '').replace(/\/$/, '') || '/';
    if (inboundLinks[cleanHref]) {
      inboundLinks[cleanHref].push({ from: source.route, anchor: l.anchor });
    }
  }
}

for (const [target, links] of Object.entries(inboundLinks)) {
  console.log(`Inbound links to ${target}: ${links.length}`);
  console.log(`  Anchors:`, [...new Set(links.map(l => l.anchor))].slice(0, 5));
}

// Check canonical and hreflang
let canonicalIssues = [];
let hreflangCount = 0;
for (const p of audit.pages) {
  const expectedCanonical = p.url.replace(/\/$/, '');
  const actualCanonical = (p.canonical || '').replace(/\/$/, '');
  if (!p.canonical || actualCanonical !== expectedCanonical) {
    canonicalIssues.push({ route: p.route, expected: expectedCanonical, actual: p.canonical });
  }
  if (p.hreflangs.some(h => h.lang === 'fr-MA')) {
    hreflangCount++;
  }
}
console.log('Canonical issues count:', canonicalIssues.length);
console.log('Pages with hreflang fr-MA:', hreflangCount, 'out of', audit.pages.length);

fs.writeFileSync('scratch/check_analysis_summary.json', JSON.stringify({
  flags,
  dupTitles,
  dupDescs,
  canonicalIssues,
  inboundLinks
}, null, 2));
