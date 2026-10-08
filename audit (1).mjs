// SEO audit crawler. Needs Node 18+ (built-in fetch). No npm install required.
// Run:  node audit.mjs https://byteforce.ma
// Output: audit-result.json (send this file back)  +  audit-summary.txt (printed too)

import { writeFileSync } from 'node:fs';

const BASE = (process.argv[2] || 'https://byteforce.ma').replace(/\/$/, '');
const HOST = new URL(BASE).host;
const UA = 'Mozilla/5.0 (compatible; SEOAudit/1.0)';

const bust = (u) => u + (u.includes('?') ? '&' : '?') + '_cb=' + Date.now() + Math.floor(Math.random() * 1e6);
const clean = (u) => (u || '').replace(/([?&])_cb=\d+/, '').replace(/[?&]$/, '');

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
        server: h('server'),
        date: h('date'),
      },
      text,
    };
  } catch (e) {
    return { status: 0, error: String(e), text: '' };
  }
}

const strip = (s) => s.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const decode = (s) => (s || '').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim();

function attrs(tag) {
  const o = {};
  for (const m of tag.matchAll(/([a-zA-Z:-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) o[m[1].toLowerCase()] = decode(m[3] ?? m[4]);
  return o;
}

function parse(html, pageUrl) {
  const r = {};
  r.title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]);
  r.lang = (html.match(/<html[^>]*\slang=["']([^"']+)/i) || [])[1] || null;
  r.englishNav = /Start a project|>\s*About\s*<|>\s*Work\s*<|Software engineering studio/i.test(html);

  const meta = {};
  for (const m of html.matchAll(/<meta\s[^>]*>/gi)) {
    const a = attrs(m[0]);
    const key = a.name || a.property;
    if (key && a.content !== undefined) meta[key.toLowerCase()] = a.content;
  }
  r.metaDescription = meta['description'] || null;
  r.robotsMeta = meta['robots'] || null;
  r.og = Object.fromEntries(Object.entries(meta).filter(([k]) => k.startsWith('og:')));
  r.twitter = Object.fromEntries(Object.entries(meta).filter(([k]) => k.startsWith('twitter:')));

  r.canonical = null;
  r.hreflang = [];
  for (const m of html.matchAll(/<link\s[^>]*>/gi)) {
    const a = attrs(m[0]);
    if (a.rel === 'canonical') r.canonical = a.href;
    if (a.rel === 'alternate' && a.hreflang) r.hreflang.push({ lang: a.hreflang, href: a.href });
  }

  const hs = (n) => [...html.matchAll(new RegExp(`<h${n}[^>]*>([\\s\\S]*?)</h${n}>`, 'gi'))].map((m) => decode(strip(m[1]))).filter(Boolean);
  r.h1 = hs(1);
  r.h2 = hs(2);
  r.h3Count = hs(3).length;

  r.jsonLdTypes = [];
  for (const m of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const j = JSON.parse(m[1]);
      const walk = (n) => {
        if (Array.isArray(n)) return n.forEach(walk);
        if (n && typeof n === 'object') {
          if (n['@type']) r.jsonLdTypes.push([].concat(n['@type']).join('/'));
          Object.values(n).forEach(walk);
        }
      };
      walk(j);
    } catch {
      r.jsonLdTypes.push('INVALID_JSON');
    }
  }

  r.wordCount = strip(html.replace(/<(header|nav|footer)[\s\S]*?<\/\1>/gi, ' ')).split(' ').filter(Boolean).length;

  const imgs = [...html.matchAll(/<img\s[^>]*>/gi)].map((m) => attrs(m[0]));
  r.images = { total: imgs.length, missingAlt: imgs.filter((i) => i.alt === undefined).length, emptyAlt: imgs.filter((i) => i.alt === '').length };

  const links = new Set();
  for (const m of html.matchAll(/<a\s[^>]*>/gi)) {
    const href = attrs(m[0]).href;
    if (!href || /^(mailto:|tel:|javascript:|#)/i.test(href)) continue;
    try {
      const u = new URL(href, pageUrl);
      u.hash = '';
      if (u.host === HOST || u.host === 'www.' + HOST) links.add(u.origin.replace('www.', '') + u.pathname.replace(/\/$/, '') + u.search);
    } catch {}
  }
  r.internalLinks = [...links];
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

(async () => {
  console.log('Auditing', BASE, '...');
  const result = { base: BASE, ranAt: new Date().toISOString(), node: process.version };

  // sitemap + robots
  const sm = await get(BASE + '/sitemap.xml');
  const urls = [...sm.text.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) => m[1]);
  const lastmods = [...sm.text.matchAll(/<lastmod>/g)].length;
  result.sitemap = { status: sm.status, urlCount: urls.length, lastmodCount: lastmods, headers: sm.headers, urls };

  const rb = await get(BASE + '/robots.txt');
  result.robots = { status: rb.status, text: rb.text.slice(0, 2000) };

  // www, http, 404 test
  const www = await get(BASE.replace('://', '://www.'), { follow: false, body: false });
  const http = await get(BASE.replace('https://', 'http://'), { follow: false, body: false });
  const nf = await get(BASE + '/this-page-does-not-exist-' + Date.now(), { body: false });
  result.hostChecks = {
    www: { status: www.status, location: www.location, error: www.error },
    http: { status: http.status, location: http.location, error: http.error },
    notFoundStatus: nf.status,
  };

  // pages
  const allUrls = urls.length ? urls : [BASE];
  const pages = await pool(allUrls, 6, async (u) => {
    const r = await get(u);
    const p = r.text ? parse(r.text, u) : {};
    return {
      url: u,
      status: r.status,
      finalUrl: (r.finalUrl || '').replace(/\/$/, '') !== u.replace(/\/$/, '') ? r.finalUrl : undefined,
      ms: r.ms,
      headers: r.headers,
      error: r.error,
      htmlBytes: r.text.length,
      ...p,
    };
  });
  result.pages = pages;

  // internal link targets (redirects / 404s)
  const targets = new Set();
  pages.forEach((p) => (p.internalLinks || []).forEach((l) => targets.add(l)));
  const sitemapSet = new Set(urls.map((u) => u.replace(/\/$/, '')));
  const linkChecks = await pool([...targets], 6, async (t) => {
    const r = await get(t, { follow: false, body: false });
    return { url: t, status: r.status, location: r.location || undefined, inSitemap: sitemapSet.has(t) };
  });
  result.linkIssues = linkChecks.filter((l) => l.status >= 300 || l.status === 0);
  result.linksNotInSitemap = linkChecks.filter((l) => l.status === 200 && !l.inSitemap).map((l) => l.url);

  // crawl pages that are linked but not in the sitemap (city pages, categories...)
  result.extraPages = await pool(result.linksNotInSitemap, 6, async (u) => {
    const r = await get(u);
    const p = r.text ? parse(r.text, u) : {};
    return {
      url: u,
      status: r.status,
      title: p.title,
      canonical: p.canonical,
      robotsMeta: p.robotsMeta,
      xRobotsTag: r.headers?.['x-robots-tag'],
      noindex: /noindex/i.test((p.robotsMeta || '') + (r.headers?.['x-robots-tag'] || '')),
      wordCount: p.wordCount,
      englishNav: p.englishNav,
    };
  });

  // duplicates
  const dup = (key) => {
    const m = {};
    pages.forEach((p) => p[key] && (m[p[key]] = (m[p[key]] || []).concat(p.url)));
    return Object.entries(m).filter(([, v]) => v.length > 1).map(([k, v]) => ({ value: k, urls: v }));
  };
  result.duplicates = { title: dup('title'), metaDescription: dup('metaDescription') };

  // summary
  const L = [];
  L.push(`AUDIT ${BASE}  ${result.ranAt}`);
  L.push(`Sitemap: ${urls.length} URLs, lastmod on ${lastmods}`);
  L.push(`Host: www=${www.status}->${www.location || '-'}  http=${http.status}->${http.location || '-'}  404test=${nf.status}`);
  const cacheHints = pages.slice(0, 3).map((p) => `${p.url.replace(BASE, '') || '/'}: x-vercel-cache=${p.headers?.['x-vercel-cache']} cf=${p.headers?.['cf-cache-status']} age=${p.headers?.age}`);
  L.push('Cache headers (first 3): ' + cacheHints.join(' | '));
  L.push('');
  for (const p of pages) {
    const flags = [];
    if (p.status !== 200) flags.push('STATUS ' + p.status);
    if (p.finalUrl) flags.push('REDIRECT->' + p.finalUrl);
    if (!p.title) flags.push('NO_TITLE');
    else if (p.title.length > 65) flags.push('TITLE_LONG');
    if (!p.metaDescription) flags.push('NO_DESC');
    else if (p.metaDescription.length > 165) flags.push('DESC_LONG');
    if (!p.canonical) flags.push('NO_CANONICAL');
    if (/noindex/i.test((p.robotsMeta || '') + (p.headers?.['x-robots-tag'] || ''))) flags.push('NOINDEX');
    if (!p.h1 || p.h1.length !== 1) flags.push('H1x' + (p.h1 ? p.h1.length : 0));
    if (p.wordCount < 250) flags.push('THIN(' + p.wordCount + 'w)');
    if (!p.og || !p.og['og:image']) flags.push('NO_OG_IMAGE');
    if (!p.jsonLdTypes?.length) flags.push('NO_JSONLD');
    if (p.englishNav) flags.push('ENGLISH_NAV');
    L.push(`${p.url.replace(BASE, '') || '/'} | lang=${p.lang} | "${p.title}" | h1=${(p.h1 || [])[0] || '-'} | ${p.wordCount}w | ld=${(p.jsonLdTypes || []).join(',') || '-'} | og:locale=${p.og?.['og:locale'] || '-'} | ${flags.join(' ') || 'ok'}`);
  }
  L.push('');
  L.push(`Internal links that redirect/error: ${result.linkIssues.length}`);
  result.linkIssues.forEach((l) => L.push(`  ${l.status} ${l.url}${l.location ? ' -> ' + l.location : ''}`));
  L.push(`Linked pages missing from sitemap: ${result.linksNotInSitemap.length}`);
  result.extraPages.forEach((e) =>
    L.push(`  ${e.url.replace(BASE, '')} | ${e.status} | ${e.noindex ? 'NOINDEX' : 'INDEXABLE'} | robots="${e.robotsMeta || '-'}" | canonical=${e.canonical || '-'} | ${e.wordCount}w${e.englishNav ? ' | ENGLISH_NAV' : ''}`)
  );
  L.push(`Duplicate titles: ${result.duplicates.title.length}  Duplicate descriptions: ${result.duplicates.metaDescription.length}`);

  const summary = L.join('\n');
  writeFileSync('audit-result.json', JSON.stringify(result, null, 2));
  writeFileSync('audit-summary.txt', summary);
  console.log('\n' + summary);
  console.log('\nDone. Send me audit-result.json (or paste audit-summary.txt).');
})();
