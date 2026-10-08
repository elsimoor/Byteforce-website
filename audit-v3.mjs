// SEO audit v3. Node 18+, no dependencies.
// Run:            node audit-v3.mjs https://byteforce.ma
// With speed test: node audit-v3.mjs https://byteforce.ma --psi      (optional: set PSI_KEY=your_google_api_key to avoid rate limits)
// Output: audit-result.json + audit-summary.txt  (send me either one)

import { writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const BASE = (args.find((a) => a.startsWith('http')) || 'https://byteforce.ma').replace(/\/$/, '');
const RUN_PSI = args.includes('--psi');
const HOST = new URL(BASE).host.replace(/^www\./, '');
const UA = 'Mozilla/5.0 (compatible; SEOAudit/3.0)';

const bust = (u) => u + (u.includes('?') ? '&' : '?') + '_cb=' + Date.now() + Math.floor(Math.random() * 1e6);
const clean = (u) => (u || '').replace(/([?&])_cb=\d+/, '').replace(/[?&]$/, '');
const norm = (u) => (u || '').replace(/\/$/, '');
const path = (u) => u.replace(BASE, '') || '/';

async function get(url, { follow = true, body = true } = {}) {
  const t0 = Date.now();
  try {
    const res = await fetch(bust(url), {
      redirect: follow ? 'follow' : 'manual',
      headers: { 'user-agent': UA, 'cache-control': 'no-cache, no-store', pragma: 'no-cache' },
    });
    const text = body ? await res.text() : '';
    if (!body) res.body?.cancel?.();
    const h = (n) => res.headers.get(n);
    return {
      status: res.status,
      finalUrl: clean(res.url),
      location: h('location'),
      ms: Date.now() - t0,
      headers: {
        'cache-control': h('cache-control'),
        age: h('age'),
        'x-vercel-cache': h('x-vercel-cache'),
        'cf-cache-status': h('cf-cache-status'),
        'x-robots-tag': h('x-robots-tag'),
        'content-type': h('content-type'),
        'content-encoding': h('content-encoding'),
        'strict-transport-security': h('strict-transport-security'),
        'x-content-type-options': h('x-content-type-options'),
        server: h('server'),
      },
      text,
    };
  } catch (e) {
    return { status: 0, error: String(e), text: '', headers: {} };
  }
}

const stripTags = (s) => s.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const decode = (s) => (s || '').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim();

function attrs(tag) {
  const o = {};
  for (const m of tag.matchAll(/([a-zA-Z:-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) o[m[1].toLowerCase()] = decode(m[3] ?? m[4]);
  return o;
}

// English UI strings that should not appear on a French site
const EN_PHRASES = ['Start a project', 'Software engineering studio', 'All rights reserved', 'Explore our work', 'Case study', 'Talk to ByteForce', 'About the studio', 'Book the free call'];
const EN_LINK_TEXT = ['Work', 'About', 'Legal', 'Privacy', 'Terms', 'Services', 'Insights', 'Contact', 'Studio', 'Connect'];

function englishCheck(html) {
  const visible = stripTags(html);
  const hits = [];
  for (const p of EN_PHRASES) {
    const i = visible.indexOf(p);
    if (i >= 0) hits.push(`"${p}" ... ${visible.slice(Math.max(0, i - 25), i + p.length + 25)}`);
  }
  // anchor text exactly equal to an English nav word
  const anchors = [...html.matchAll(/<a\s[^>]*>([\s\S]*?)<\/a>/gi)].map((m) => decode(stripTags(m[1])));
  const navEn = ['Work', 'About', 'Legal', 'Privacy', 'Terms', 'Insights', 'Studio', 'Connect'].filter((w) => anchors.includes(w));
  // only in scripts (RSC payload) = probably false positive
  const scripts = [...html.matchAll(/<script[\s\S]*?<\/script>/gi)].map((m) => m[0]).join(' ');
  const inScriptOnly = EN_PHRASES.filter((p) => scripts.includes(p) && !visible.includes(p));
  return { visibleEnglish: hits, englishAnchors: navEn, onlyInScripts: inScriptOnly };
}

function parse(html, pageUrl) {
  const r = {};
  r.title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]);
  r.lang = (html.match(/<html[^>]*\slang=["']([^"']+)/i) || [])[1] || null;

  const meta = {};
  for (const m of html.matchAll(/<meta\s[^>]*>/gi)) {
    const a = attrs(m[0]);
    const key = a.name || a.property;
    if (key && a.content !== undefined) meta[key.toLowerCase()] = a.content;
  }
  r.metaDescription = meta['description'] || null;
  r.robotsMeta = meta['robots'] || null;
  r.viewport = meta['viewport'] || null;
  r.og = Object.fromEntries(Object.entries(meta).filter(([k]) => k.startsWith('og:')));
  r.twitter = Object.fromEntries(Object.entries(meta).filter(([k]) => k.startsWith('twitter:')));

  r.canonical = null;
  r.hreflang = [];
  r.hasFavicon = false;
  for (const m of html.matchAll(/<link\s[^>]*>/gi)) {
    const a = attrs(m[0]);
    if (a.rel === 'canonical') r.canonical = a.href;
    if (a.rel === 'alternate' && a.hreflang) r.hreflang.push({ lang: a.hreflang, href: a.href });
    if (/icon/.test(a.rel || '')) r.hasFavicon = true;
  }

  const hs = (n) => [...html.matchAll(new RegExp(`<h${n}[^>]*>([\\s\\S]*?)</h${n}>`, 'gi'))].map((m) => decode(stripTags(m[1]))).filter(Boolean);
  r.h1 = hs(1);
  r.h2 = hs(2);
  r.h3Count = hs(3).length;

  r.jsonLdTypes = [];
  r.jsonLdInvalid = 0;
  r.business = null;
  for (const m of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const j = JSON.parse(m[1]);
      const walk = (n) => {
        if (Array.isArray(n)) return n.forEach(walk);
        if (n && typeof n === 'object') {
          if (n['@type']) r.jsonLdTypes.push([].concat(n['@type']).join('/'));
          if (/ProfessionalService|LocalBusiness|Organization/.test([].concat(n['@type'] || []).join()) && n.telephone && !r.business)
            r.business = { name: n.name, telephone: n.telephone, address: n.address, url: n.url, sameAs: n.sameAs };
          Object.values(n).forEach(walk);
        }
      };
      walk(j);
    } catch {
      r.jsonLdInvalid++;
    }
  }

  r.wordCount = stripTags(html.replace(/<(header|nav|footer)[\s\S]*?<\/\1>/gi, ' ')).split(' ').filter(Boolean).length;
  r.titleLen = (r.title || '').length;
  r.descLen = (r.metaDescription || '').length;

  const imgs = [...html.matchAll(/<img\s[^>]*>/gi)].map((m) => attrs(m[0]));
  r.images = { total: imgs.length, missingAlt: imgs.filter((i) => i.alt === undefined).length, emptyAlt: imgs.filter((i) => i.alt === '').length };

  const links = new Set();
  for (const m of html.matchAll(/<a\s[^>]*>/gi)) {
    const href = attrs(m[0]).href;
    if (!href || /^(mailto:|tel:|javascript:|#)/i.test(href)) continue;
    try {
      const u = new URL(href, pageUrl);
      u.hash = '';
      if (u.host.replace(/^www\./, '') === HOST) links.add(norm(BASE + u.pathname) + u.search);
    } catch {}
  }
  r.internalLinks = [...links];
  r.english = englishCheck(html);
  return r;
}

async function pool(items, n, fn) {
  const out = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx], idx);
      }
    })
  );
  return out;
}

async function psi(url) {
  const key = process.env.PSI_KEY;
  const api =
    'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=' + encodeURIComponent(url) +
    '&strategy=mobile&category=performance&category=seo&category=accessibility&category=best-practices' + (key ? '&key=' + key : '');
  try {
    const r = await fetch(api);
    if (!r.ok) return { url, error: 'HTTP ' + r.status + (r.status === 429 ? ' (rate limited: set PSI_KEY or retry later)' : '') };
    const j = await r.json();
    const c = j.lighthouseResult.categories;
    const a = j.lighthouseResult.audits;
    const s = (k) => Math.round((c[k]?.score ?? 0) * 100);
    return {
      url,
      performance: s('performance'), seo: s('seo'), accessibility: s('accessibility'), bestPractices: s('best-practices'),
      lcp: a['largest-contentful-paint']?.displayValue, cls: a['cumulative-layout-shift']?.displayValue,
      tbt: a['total-blocking-time']?.displayValue, fcp: a['first-contentful-paint']?.displayValue, si: a['speed-index']?.displayValue,
      failedSeoAudits: Object.values(a).filter((x) => x.score === 0 && /seo/.test(JSON.stringify(c.seo?.auditRefs?.map((r) => r.id)) || '') && c.seo.auditRefs.some((r) => r.id === x.id)).map((x) => x.title),
    };
  } catch (e) {
    return { url, error: String(e) };
  }
}

(async () => {
  console.log('Auditing', BASE, '...');
  const result = { base: BASE, ranAt: new Date().toISOString(), node: process.version };
  const issues = {};
  const add = (name, u) => ((issues[name] ||= []).push(u));

  // ---- sitemap / robots / host checks
  const sm = await get(BASE + '/sitemap.xml');
  const entries = [...sm.text.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
    loc: (m[1].match(/<loc>\s*([^<]+?)\s*<\/loc>/) || [])[1],
    lastmod: (m[1].match(/<lastmod>\s*([^<]+?)\s*<\/lastmod>/) || [])[1],
  })).filter((e) => e.loc);
  const urls = entries.map((e) => e.loc);
  const lastmods = new Set(entries.map((e) => e.lastmod).filter(Boolean));
  result.sitemap = {
    status: sm.status, urlCount: urls.length, withLastmod: entries.filter((e) => e.lastmod).length,
    distinctLastmodValues: lastmods.size, sampleLastmod: [...lastmods].slice(0, 3), headers: sm.headers, entries,
  };

  const rb = await get(BASE + '/robots.txt');
  result.robots = { status: rb.status, text: rb.text.slice(0, 2000), hasSitemapDirective: /sitemap:/i.test(rb.text) };

  const www = await get(BASE.replace('://', '://www.'), { follow: false, body: false });
  const http = await get(BASE.replace('https://', 'http://'), { follow: false, body: false });
  const nf = await get(BASE + '/this-page-does-not-exist-' + Date.now());
  result.hostChecks = {
    www: { status: www.status, location: clean(www.location || '') },
    http: { status: http.status, location: clean(http.location || '') },
    notFound: { status: nf.status, title: decode((nf.text.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]), words: stripTags(nf.text).split(' ').length },
  };

  // ---- crawl sitemap pages
  const pages = await pool(urls.length ? urls : [BASE], 6, async (u) => {
    const r = await get(u);
    const p = r.text ? parse(r.text, u) : {};
    return {
      url: u, status: r.status,
      redirectedTo: norm(r.finalUrl) !== norm(u) ? r.finalUrl : undefined,
      ms: r.ms, htmlBytes: r.text.length, headers: r.headers, error: r.error, ...p,
    };
  });
  result.pages = pages;

  // ---- link graph + link target checks
  const inbound = {};
  const targets = new Set();
  pages.forEach((p) => (p.internalLinks || []).forEach((l) => { targets.add(l); inbound[l] = (inbound[l] || 0) + 1; }));
  const sitemapSet = new Set(urls.map(norm));
  const linkChecks = await pool([...targets], 6, async (t) => {
    const r = await get(t, { follow: false, body: false });
    return { url: t, status: r.status, location: clean(r.location || '') || undefined, inSitemap: sitemapSet.has(norm(t)), inbound: inbound[t] };
  });
  result.linkIssues = linkChecks.filter((l) => l.status >= 300 || l.status === 0);
  const extraUrls = linkChecks.filter((l) => l.status === 200 && !l.inSitemap).map((l) => l.url);
  result.extraPages = await pool(extraUrls, 6, async (u) => {
    const r = await get(u);
    const p = r.text ? parse(r.text, u) : {};
    return {
      url: u, status: r.status, title: p.title, canonical: p.canonical, robotsMeta: p.robotsMeta,
      noindex: /noindex/i.test((p.robotsMeta || '') + (r.headers['x-robots-tag'] || '')), wordCount: p.wordCount,
    };
  });
  result.orphans = urls.filter((u) => !inbound[norm(u)] && norm(u) !== norm(BASE));

  // ---- og:image reachability
  const ogImgs = [...new Set(pages.map((p) => p.og?.['og:image']).filter(Boolean))];
  const ogChecks = await pool(ogImgs, 6, async (u) => {
    const r = await get(u, { body: false });
    return { url: u, status: r.status, type: r.headers['content-type'] };
  });
  result.ogImageChecks = ogChecks;
  const badOg = new Set(ogChecks.filter((c) => c.status !== 200 || !/image/.test(c.type || '')).map((c) => c.url));

  // ---- per-page issue detection
  const GENERIC_H1 = /^(écrire|décider|travaux|contact|insights|services|accueil)\.?$/i;
  for (const p of pages) {
    const u = path(p.url);
    const noindex = /noindex/i.test((p.robotsMeta || '') + (p.headers?.['x-robots-tag'] || ''));
    if (p.status !== 200) add('HTTP_NOT_200', `${u} (${p.status})`);
    if (p.redirectedTo) add('SITEMAP_URL_REDIRECTS', `${u} -> ${p.redirectedTo}`);
    if (noindex) add('NOINDEX_IN_SITEMAP', u);
    if (!p.title) add('NO_TITLE', u); else {
      if (p.titleLen > 65) add('TITLE_TOO_LONG(>65)', `${u} (${p.titleLen})`);
      if (p.titleLen < 25) add('TITLE_TOO_SHORT(<25)', `${u} (${p.titleLen})`);
    }
    if (!p.metaDescription) add('NO_META_DESCRIPTION', u); else {
      if (p.descLen > 165) add('DESC_TOO_LONG(>165)', `${u} (${p.descLen})`);
      if (p.descLen < 70) add('DESC_TOO_SHORT(<70)', `${u} (${p.descLen})`);
    }
    if (!p.canonical) add('NO_CANONICAL', u);
    else if (norm(clean(p.canonical)) !== norm(p.url)) add('CANONICAL_DIFFERS_FROM_URL', `${u} -> ${p.canonical}`);
    if (!p.h1 || p.h1.length !== 1) add('H1_COUNT_NOT_1', `${u} (${p.h1?.length ?? 0})`);
    else if (GENERIC_H1.test(p.h1[0]) || p.h1[0].length < 12) add('GENERIC_OR_SHORT_H1', `${u} ("${p.h1[0]}")`);
    if (p.wordCount < 250) add('THIN_CONTENT(<250w)', `${u} (${p.wordCount}w)`);
    if (!p.og?.['og:image']) add('NO_OG_IMAGE', u); else if (badOg.has(p.og['og:image'])) add('OG_IMAGE_BROKEN', u);
    if (!p.og?.['og:locale']) add('NO_OG_LOCALE', u);
    if (!p.twitter?.['twitter:card']) add('NO_TWITTER_CARD', u);
    if (!p.jsonLdTypes?.length) add('NO_JSONLD', u);
    if (p.jsonLdInvalid) add('INVALID_JSONLD', u);
    if (!p.jsonLdTypes?.includes('BreadcrumbList') && u !== '/') add('NO_BREADCRUMB_SCHEMA', u);
    if (p.images?.missingAlt) add('IMG_MISSING_ALT', `${u} (${p.images.missingAlt})`);
    if (!p.viewport) add('NO_VIEWPORT', u);
    if (p.lang !== 'fr') add('LANG_NOT_FR', `${u} (${p.lang})`);
    if (p.hreflang?.length) add('HAS_HREFLANG(info)', `${u} (${p.hreflang.length})`);
    if (p.english?.visibleEnglish?.length || p.english?.englishAnchors?.length) add('ENGLISH_TEXT_VISIBLE', `${u}: ${[...p.english.englishAnchors.map((a) => `link "${a}"`), ...p.english.visibleEnglish].join(' | ')}`);
    if (p.english?.onlyInScripts?.length) add('ENGLISH_ONLY_IN_SCRIPTS(likely ok)', `${u}: ${p.english.onlyInScripts.join(', ')}`);
    if (p.ms > 1500) add('SLOW_SERVER_RESPONSE(>1.5s)', `${u} (${p.ms}ms)`);
    if (p.htmlBytes > 400000) add('HEAVY_HTML(>400KB)', `${u} (${Math.round(p.htmlBytes / 1024)}KB)`);
    if (!p.headers?.['content-encoding']) add('NO_COMPRESSION_HEADER', u);
  }
  result.linkIssues.forEach((l) => add('INTERNAL_LINK_REDIRECTS_OR_ERRORS', `${l.url.replace(BASE, '')} ${l.status}${l.location ? ' -> ' + l.location : ''}`));
  result.extraPages.filter((e) => !e.noindex).forEach((e) => add('INDEXABLE_PAGE_NOT_IN_SITEMAP', path(e.url)));
  result.orphans.forEach((u) => add('ORPHAN_PAGE(no internal links in)', path(u)));
  const dup = (key) => {
    const m = {};
    pages.forEach((p) => p[key] && (m[p[key]] = (m[p[key]] || []).concat(path(p.url))));
    return Object.entries(m).filter(([, v]) => v.length > 1);
  };
  dup('title').forEach(([k, v]) => add('DUPLICATE_TITLE', `"${k}": ${v.join(', ')}`));
  dup('metaDescription').forEach(([k, v]) => add('DUPLICATE_DESCRIPTION', `"${k.slice(0, 60)}...": ${v.join(', ')}`));
  if (result.sitemap.withLastmod < urls.length) add('SITEMAP_MISSING_LASTMOD', `${urls.length - result.sitemap.withLastmod} URLs`);
  if (result.sitemap.distinctLastmodValues === 1 && urls.length > 5) add('SITEMAP_LASTMOD_ALL_IDENTICAL', [...lastmods][0]);
  if (!result.robots.hasSitemapDirective) add('ROBOTS_NO_SITEMAP_DIRECTIVE', '/robots.txt');
  if (result.hostChecks.www.status !== 308 && result.hostChecks.www.status !== 301) add('WWW_REDIRECT_NOT_PERMANENT', String(result.hostChecks.www.status));
  if (result.hostChecks.http.status !== 308 && result.hostChecks.http.status !== 301) add('HTTP_REDIRECT_NOT_PERMANENT', String(result.hostChecks.http.status));
  if (result.hostChecks.notFound.status !== 404) add('SOFT_404', String(result.hostChecks.notFound.status));
  const home = pages.find((p) => norm(p.url) === norm(BASE));
  if (home && !home.headers['strict-transport-security']) add('NO_HSTS_HEADER', '/');
  if (home && !home.business) add('NO_BUSINESS_SCHEMA_WITH_PHONE', '/');
  result.business = home?.business;
  result.issues = issues;

  // ---- optional PageSpeed
  if (RUN_PSI) {
    console.log('Running PageSpeed (mobile) ...');
    result.pagespeed = [];
    for (const u of [BASE, BASE + '/services/creation-site-web', BASE + '/developpement-logiciel-sur-mesure-maroc']) {
      result.pagespeed.push(await psi(u));
      await new Promise((r) => setTimeout(r, 2500));
    }
  }

  // ---- summary
  const L = [];
  L.push(`AUDIT v3 ${BASE}  ${result.ranAt}`);
  L.push(`Sitemap: ${urls.length} URLs | lastmod ${result.sitemap.withLastmod}/${urls.length} (distinct values: ${result.sitemap.distinctLastmodValues}) | robots sitemap directive: ${result.robots.hasSitemapDirective}`);
  L.push(`Host: www=${result.hostChecks.www.status} http=${result.hostChecks.http.status} 404test=${result.hostChecks.notFound.status} ("${result.hostChecks.notFound.title}")`);
  L.push('Cache (first 3): ' + pages.slice(0, 3).map((p) => `${path(p.url)} vercel=${p.headers?.['x-vercel-cache']} age=${p.headers?.age}`).join(' | '));
  if (result.business) L.push('Business schema: ' + JSON.stringify(result.business));
  L.push('');
  L.push('=== ISSUES (grouped) ===');
  const names = Object.keys(issues).sort();
  if (!names.length) L.push('none');
  for (const n of names) {
    L.push(`[${n}] x${issues[n].length}`);
    issues[n].slice(0, 12).forEach((x) => L.push('   ' + x));
    if (issues[n].length > 12) L.push(`   ... +${issues[n].length - 12} more (see audit-result.json)`);
  }
  L.push('');
  L.push('=== NOT IN SITEMAP (linked) ===');
  result.extraPages.forEach((e) => L.push(`${path(e.url)} | ${e.status} | ${e.noindex ? 'NOINDEX' : 'INDEXABLE'} | canonical=${e.canonical || '-'} | ${e.wordCount}w`));
  if (result.pagespeed) {
    L.push('');
    L.push('=== PAGESPEED (mobile) ===');
    result.pagespeed.forEach((p) => L.push(p.error ? `${path(p.url)}: ERROR ${p.error}` : `${path(p.url)}: perf=${p.performance} seo=${p.seo} a11y=${p.accessibility} bp=${p.bestPractices} | LCP=${p.lcp} CLS=${p.cls} TBT=${p.tbt} FCP=${p.fcp} SI=${p.si}`));
  }
  L.push('');
  L.push('=== PAGES ===');
  for (const p of pages) L.push(`${path(p.url)} | ${p.status} | title(${p.titleLen}) "${p.title}" | desc(${p.descLen}) | h1="${(p.h1 || [])[0] || '-'}" | ${p.wordCount}w | ${p.ms}ms`);

  const summary = L.join('\n');
  writeFileSync('audit-result.json', JSON.stringify(result, null, 2));
  writeFileSync('audit-summary.txt', summary);
  console.log('\n' + summary);
  console.log('\nDone. Send me audit-summary.txt (or audit-result.json).');
})();
