// Tests (1) /insights articles and (2) backlinks from your case-study sites. Node 18+, no dependencies.
// Run:  node test-content.mjs https://byteforce.ma
// Optional keyword check per article:  node test-content.mjs https://byteforce.ma --kw "logiciel sur mesure maroc"
// Output: content-test-summary.txt + content-test-result.json  (send me either)

import { writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const BASE = (args.find((a) => a.startsWith('http')) || 'https://byteforce.ma').replace(/\/$/, '');
const KW = args.includes('--kw') ? (args[args.indexOf('--kw') + 1] || '').toLowerCase() : '';
const HOST = new URL(BASE).host.replace(/^www\./, '');
const UA = 'Mozilla/5.0 (compatible; SEOContentTest/1.0)';
const MIN_ARTICLES = 3;
const MIN_WORDS = 700;

const bust = (u) => u + (u.includes('?') ? '&' : '?') + '_cb=' + Date.now() + Math.floor(Math.random() * 1e6);
const norm = (u) => (u || '').replace(/\/$/, '').replace(/[?&]_cb=\d+/, '');
const decode = (s) => (s || '').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim();
const strip = (s) => decode(s.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' '));
const attrs = (tag) => {
  const o = {};
  for (const m of tag.matchAll(/([a-zA-Z:-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) o[m[1].toLowerCase()] = decode(m[3] ?? m[4]);
  return o;
};

async function get(url, cacheBust = true) {
  try {
    const res = await fetch(cacheBust ? bust(url) : url, {
      redirect: 'follow',
      signal: AbortSignal.timeout(20000),
      headers: { 'user-agent': UA, 'cache-control': 'no-cache', pragma: 'no-cache', 'accept-language': 'fr,en;q=0.8' },
    });
    return { status: res.status, finalUrl: norm(res.url), text: await res.text(), cache: res.headers.get('x-vercel-cache'), age: res.headers.get('age') };
  } catch (e) {
    return { status: 0, error: String(e.cause?.code || e.message || e), text: '' };
  }
}

function links(html, pageUrl) {
  const out = [];
  for (const m of html.matchAll(/<a\s[^>]*>([\s\S]*?)<\/a>/gi)) {
    const a = attrs(m[0].match(/<a\s[^>]*>/i)[0]);
    if (!a.href || /^(mailto:|tel:|javascript:|#)/i.test(a.href)) continue;
    try {
      const u = new URL(a.href, pageUrl);
      out.push({ href: u.href, host: u.host.replace(/^www\./, ''), path: u.pathname, rel: a.rel || '', text: strip(m[1]).slice(0, 80) });
    } catch {}
  }
  return out;
}

async function pool(items, n, fn) {
  const out = [];
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k], k); } }));
  return out;
}

(async () => {
  const result = { base: BASE, ranAt: new Date().toISOString(), keyword: KW || null };
  const L = [];
  const verdicts = [];

  // =============== PART 1: INSIGHTS ARTICLES ===============
  const sm = await get(BASE + '/sitemap.xml');
  const sitemapUrls = [...sm.text.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) => norm(m[1]));
  const sitemapSet = new Set(sitemapUrls);

  const idx = await get(BASE + '/insights');
  const fromIndex = links(idx.text, BASE + '/insights').filter((l) => l.host === HOST && /^\/insights\/[^/]+/.test(l.path)).map((l) => norm(BASE + l.path));
  const fromSitemap = sitemapUrls.filter((u) => /\/insights\/[^/]+/.test(u));
  const articleUrls = [...new Set([...fromIndex, ...fromSitemap])];

  L.push(`CONTENT TEST ${BASE}  ${result.ranAt}`);
  L.push(`Insights index: status ${idx.status} | cache=${idx.cache} age=${idx.age} | articles found: ${articleUrls.length} (linked from index: ${fromIndex.length}, in sitemap: ${fromSitemap.length})`);
  verdicts.push([articleUrls.length >= MIN_ARTICLES, `At least ${MIN_ARTICLES} articles under /insights/ (found ${articleUrls.length})`]);
  verdicts.push([fromIndex.length >= articleUrls.length && articleUrls.length > 0, 'Every article is linked from /insights']);
  verdicts.push([fromSitemap.length >= articleUrls.length && articleUrls.length > 0, 'Every article is in sitemap.xml']);
  L.push('');

  const articles = await pool(articleUrls, 4, async (u) => {
    const r = await get(u);
    const html = r.text;
    const title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]);
    const meta = {};
    for (const m of html.matchAll(/<meta\s[^>]*>/gi)) { const a = attrs(m[0]); const k = a.name || a.property; if (k && a.content !== undefined) meta[k.toLowerCase()] = a.content; }
    let canonical = null;
    for (const m of html.matchAll(/<link\s[^>]*>/gi)) { const a = attrs(m[0]); if (a.rel === 'canonical') canonical = a.href; }
    const h = (n) => [...html.matchAll(new RegExp(`<h${n}[^>]*>([\\s\\S]*?)</h${n}>`, 'gi'))].map((m) => strip(m[1])).filter(Boolean);
    const h1 = h(1), h2 = h(2);
    const body = strip(html.replace(/<(header|nav|footer)[\s\S]*?<\/\1>/gi, ' '));
    const words = body.split(' ').filter(Boolean);
    const ld = [];
    for (const m of html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
      try { const walk = (n) => { if (Array.isArray(n)) return n.forEach(walk); if (n && typeof n === 'object') { if (n['@type']) ld.push({ type: [].concat(n['@type']).join('/'), datePublished: n.datePublished, dateModified: n.dateModified, author: n.author?.name || (typeof n.author === 'string' ? n.author : undefined), image: !!n.image }); Object.values(n).forEach(walk); } }; walk(JSON.parse(m[1])); } catch { ld.push({ type: 'INVALID_JSON' }); }
    }
    const article = ld.find((x) => /Article|BlogPosting|NewsArticle/.test(x.type));
    const ls = links(html, u);
    const internalOut = ls.filter((l) => l.host === HOST && !/^\/insights/.test(l.path) && l.path !== '/' && !/^\/(contact|services|realisations|a-propos|mentions-legales|confidentialite|conditions)$/.test(l.path));
    const toService = ls.filter((l) => l.host === HOST && (/maroc|casablanca|services\/|solutions\/|sur-mesure/.test(l.path)));
    const toContact = ls.some((l) => l.host === HOST && l.path === '/contact');
    const imgs = [...html.matchAll(/<img\s[^>]*>/gi)].map((m) => attrs(m[0]));
    const first100 = words.slice(0, 100).join(' ').toLowerCase();
    const kwOk = KW ? { title: title.toLowerCase().includes(KW), h1: (h1[0] || '').toLowerCase().includes(KW), meta: (meta.description || '').toLowerCase().includes(KW), first100words: first100.includes(KW), slug: u.toLowerCase().includes(KW.replace(/\s+/g, '-')) } : null;
    const checks = {
      status200: r.status === 200,
      titleLen: title.length >= 30 && title.length <= 65,
      descLen: (meta.description || '').length >= 100 && (meta.description || '').length <= 165,
      oneH1: h1.length === 1,
      h2s: h2.length >= 3,
      words: words.length >= MIN_WORDS,
      canonicalSelf: norm(canonical) === norm(u),
      indexable: !/noindex/i.test(meta.robots || ''),
      inSitemap: sitemapSet.has(norm(u)),
      linkedFromIndex: fromIndex.includes(norm(u)),
      articleSchema: !!article,
      schemaDates: !!(article?.datePublished),
      schemaAuthor: !!(article?.author),
      ogImage: !!meta['og:image'],
      linksToServicePage: toService.length >= 2,
      linksToContact: toContact,
      imgAlt: imgs.every((i) => i.alt !== undefined && i.alt !== ''),
      frenchLang: /<html[^>]*lang=["']fr/i.test(html),
    };
    return { url: u, status: r.status, cache: r.cache, age: r.age, title, titleLen: title.length, descLen: (meta.description || '').length, h1, h2Count: h2.length, words: words.length, canonical, schema: ld.map((x) => x.type), article, serviceLinks: toService.map((l) => l.path), kw: kwOk, checks, failed: Object.entries(checks).filter(([, v]) => !v).map(([k]) => k) };
  });
  result.articles = articles;

  L.push('=== ARTICLES ===');
  if (!articles.length) L.push('No articles found under /insights/<slug>. Publish them, link them from /insights, and add them to the sitemap.');
  for (const a of articles) {
    L.push(`${a.url.replace(BASE, '')} | ${a.status} | ${a.words}w | title(${a.titleLen}) "${a.title}" | h1="${a.h1[0] || '-'}" | h2=${a.h2Count}`);
    L.push(`   schema: ${[...new Set(a.schema)].join(', ') || 'none'}${a.article ? ` | published=${a.article.datePublished || '-'} modified=${a.article.dateModified || '-'} author=${a.article.author || '-'}` : ''}`);
    L.push(`   links to service pages: ${a.serviceLinks.length} ${a.serviceLinks.slice(0, 3).join(' ')}`);
    if (a.kw) L.push(`   keyword "${KW}": ${Object.entries(a.kw).map(([k, v]) => `${k}=${v ? 'Y' : 'N'}`).join(' ')}`);
    L.push(`   ${a.failed.length ? 'FAILED: ' + a.failed.join(', ') : 'all checks passed'}`);
  }
  verdicts.push([articles.length > 0 && articles.every((a) => a.failed.length === 0), 'All articles pass every check']);
  const dupTitles = articles.map((a) => a.title).filter((t, i, arr) => arr.indexOf(t) !== i);
  verdicts.push([!dupTitles.length, 'No duplicate article titles']);

  // =============== PART 2: BACKLINKS FROM CASE-STUDY SITES ===============
  const caseUrls = sitemapUrls.filter((u) => /\/realisations\/[^/]+/.test(u));
  const sites = {};
  await pool(caseUrls, 4, async (u) => {
    const r = await get(u);
    for (const l of links(r.text, u)) {
      if (l.host === HOST || /(wa\.me|share\.google|google\.com|facebook|instagram|linkedin|twitter|x\.com)/.test(l.host)) continue;
      const key = l.host;
      (sites[key] ||= { host: key, url: l.href.split('#')[0], from: new Set() }).from.add(u.replace(BASE, ''));
    }
  });
  const siteList = Object.values(sites);
  L.push('');
  L.push(`=== BACKLINKS FROM CASE-STUDY SITES (${siteList.length} external sites found in /realisations/*) ===`);

  const SUBPATHS = ['', '/mentions-legales', '/mentions', '/a-propos', '/about', '/contact', '/fr', '/en', '/fr/mentions-legales'];
  const backlinks = await pool(siteList, 3, async (s) => {
    const origin = new URL(s.url).origin;
    const found = [];
    const checked = [];
    for (const sp of SUBPATHS) {
      const r = await get(origin + sp);
      checked.push(`${sp || '/'}:${r.status}${r.error ? '(' + r.error + ')' : ''}`);
      if (r.status !== 200) continue;
      for (const l of links(r.text, origin + sp)) {
        if (l.host === HOST) found.push({ onPage: sp || '/', href: l.href, anchor: l.text, rel: l.rel, nofollow: /nofollow|sponsored|ugc/.test(l.rel) });
      }
      if (found.length) break; // stop at first page that has the link
    }
    const linksBackToCaseStudy = found.some((f) => /\/realisations\//.test(f.href));
    return { site: origin, caseStudyPages: [...s.from], hasBacklink: found.length > 0, dofollow: found.some((f) => !f.nofollow), linksToCaseStudy: linksBackToCaseStudy, found, checked };
  });
  result.backlinks = backlinks;

  for (const b of backlinks) {
    L.push(`${b.site} | ${b.hasBacklink ? (b.dofollow ? 'BACKLINK OK (dofollow)' : 'BACKLINK nofollow') : 'NO BACKLINK'} | case study: ${b.caseStudyPages.join(', ')}`);
    b.found.slice(0, 3).forEach((f) => L.push(`   on ${f.onPage}: ${f.href} | anchor="${f.anchor}" | rel="${f.rel}"`));
    if (!b.hasBacklink) L.push(`   pages checked: ${b.checked.join(' ')}`);
  }
  const ok = backlinks.filter((b) => b.hasBacklink).length;
  verdicts.push([siteList.length > 0 && ok === siteList.length, `Every case-study site links back to ${HOST} (${ok}/${siteList.length})`]);
  verdicts.push([backlinks.some((b) => b.dofollow), 'At least one dofollow backlink exists']);

  // =============== VERDICT ===============
  L.push('');
  L.push('=== VERDICT ===');
  verdicts.forEach(([pass, label]) => L.push(`${pass ? 'PASS' : 'FAIL'}  ${label}`));
  result.verdicts = verdicts.map(([pass, label]) => ({ pass, label }));

  const summary = L.join('\n');
  writeFileSync('content-test-result.json', JSON.stringify(result, (k, v) => (v instanceof Set ? [...v] : v), 2));
  writeFileSync('content-test-summary.txt', summary);
  console.log(summary);
  console.log('\nDone. Send me content-test-summary.txt');
})();
