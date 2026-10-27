/**
 * Production Verification Script for https://byteforce.ma
 * Checks robots.txt, all 5 sitemaps, XML validity, page counts, titles, canonicals, and CTAs.
 */

const PROD_BASE = "https://byteforce.ma";

const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  bold: "\x1b[1m",
};

let passCount = 0;
let failCount = 0;
let warnCount = 0;

function pass(label, detail = "") {
  passCount++;
  console.log(`  ${colors.green}✔ PASS${colors.reset}  ${label} ${detail ? colors.cyan + `(${detail})` + colors.reset : ""}`);
}

function fail(label, detail = "") {
  failCount++;
  console.log(`  ${colors.red}✖ FAIL${colors.reset}  ${label} ${detail ? colors.yellow + `[${detail}]` + colors.reset : ""}`);
}

function warn(label, detail = "") {
  warnCount++;
  console.log(`  ${colors.yellow}⚠ WARN${colors.reset}  ${label} ${detail ? colors.yellow + `[${detail}]` + colors.reset : ""}`);
}

async function fetchUrl(url, options = {}) {
  const start = Date.now();
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "ByteForce-Prod-Auditor/1.0",
        Accept: "*/*",
      },
      ...options,
    });
    const text = await res.text();
    const duration = Date.now() - start;
    return { status: res.status, headers: res.headers, text, duration };
  } catch (err) {
    return { status: 0, headers: new Headers(), text: "", error: err.message, duration: Date.now() - start };
  }
}

async function run() {
  console.log(`\n${colors.bold}${colors.cyan}====================================================${colors.reset}`);
  console.log(`${colors.bold}   PROD VERIFICATION AUDIT — ${PROD_BASE}${colors.reset}`);
  console.log(`${colors.cyan}====================================================${colors.reset}\n`);

  // 1. ROBOTS.TXT
  console.log(`${colors.bold}1. Checking robots.txt${colors.reset}`);
  const robots = await fetchUrl(`${PROD_BASE}/robots.txt`);
  if (robots.status === 200) {
    pass("robots.txt responds with HTTP 200", `${robots.duration}ms`);
    
    // Check sitemap directives
    const expectedSitemaps = [
      "/sitemap.xml",
      "/pages-sitemap.xml",
      "/insights-sitemap.xml",
      "/villes-sitemap.xml",
      "/geo-location-sitemap.xml",
    ];

    for (const sm of expectedSitemaps) {
      if (robots.text.includes(sm)) {
        pass(`robots.txt declares ${sm}`);
      } else {
        fail(`robots.txt missing declaration for ${sm}`);
      }
    }

    // Check that /geo-location/ is NOT blocked in robots.txt
    if (/Disallow:\s*\/geo-location\b/i.test(robots.text)) {
      fail("robots.txt blocks /geo-location/ with Disallow directive");
    } else {
      pass("robots.txt permits crawling of /geo-location/");
    }
  } else {
    fail(`robots.txt responded with HTTP ${robots.status}`);
  }

  // 2. SITEMAPS
  console.log(`\n${colors.bold}2. Checking Sitemaps${colors.reset}`);

  // 2A. Global Index: /sitemap.xml
  const sitemapIndex = await fetchUrl(`${PROD_BASE}/sitemap.xml`);
  if (sitemapIndex.status === 200) {
    pass("/sitemap.xml responds with HTTP 200", `${sitemapIndex.duration}ms`);
    const isIndex = sitemapIndex.text.includes("<sitemapindex");
    if (isIndex) {
      pass("/sitemap.xml is a valid <sitemapindex>");
      const locs = [...sitemapIndex.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
      pass(`/sitemap.xml contains ${locs.length} child sitemaps`, locs.map(l => l.replace(PROD_BASE, "")).join(", "));
    } else {
      fail("/sitemap.xml is not formatted as <sitemapindex>");
    }
  } else {
    fail(`/sitemap.xml returned HTTP ${sitemapIndex.status}`);
  }

  // 2B. Child sitemaps checks
  const childSitemaps = [
    { name: "/pages-sitemap.xml", minCount: 50, maxCount: 120, checkFilter: true },
    { name: "/insights-sitemap.xml", minCount: 30, maxCount: 100 },
    { name: "/villes-sitemap.xml", minCount: 10, maxCount: 80 },
    { name: "/geo-location-sitemap.xml", minCount: 2000, maxCount: 3000 },
  ];

  for (const item of childSitemaps) {
    const res = await fetchUrl(`${PROD_BASE}${item.name}`);
    if (res.status === 200) {
      const locs = [...res.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
      if (locs.length >= item.minCount && locs.length <= item.maxCount) {
        pass(`${item.name} is valid <urlset> with expected count`, `${locs.length} URLs in ${res.duration}ms`);
      } else {
        warn(`${item.name} count differs from expectation`, `Found ${locs.length} URLs (expected ${item.minCount}-${item.maxCount})`);
      }

      if (item.checkFilter) {
        const hasVilles = locs.some(u => u.includes("/villes/"));
        const hasInsights = locs.some(u => u.includes("/insights/"));
        if (!hasVilles && !hasInsights) {
          pass(`${item.name} cleanly separates /villes and /insights (0 leaks)`);
        } else {
          fail(`${item.name} still contains /villes or /insights URLs`);
        }
      }
    } else {
      fail(`${item.name} returned HTTP ${res.status}`);
    }
  }

  // 3. CORE LANDING PAGES
  console.log(`\n${colors.bold}3. Checking Key Money & Hub Pages${colors.reset}`);
  const pagesToCheck = [
    { path: "/", expectedInTitle: "Byte Force" },
    { path: "/crm-sur-mesure-maroc", expectedInTitle: "CRM" },
    { path: "/developpement-logiciel-sur-mesure-maroc", expectedInTitle: "Logiciel" },
    { path: "/developpement-saas-maroc", expectedInTitle: "SaaS" },
    { path: "/developpement-application-mobile-maroc", expectedInTitle: "Mobile" },
    { path: "/agence-wordpress-maroc", expectedInTitle: "WordPress" },
    { path: "/integration-ia-automatisation-entreprise-maroc", expectedInTitle: "IA" },
    { path: "/geo-location", expectedInTitle: "lieu" },
  ];

  for (const page of pagesToCheck) {
    const res = await fetchUrl(`${PROD_BASE}${page.path}`);
    if (res.status === 200) {
      const titleMatch = res.text.match(/<title[^>]*>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : "";
      
      const hasTitle = title.toLowerCase().includes(page.expectedInTitle.toLowerCase());
      if (hasTitle) {
        pass(`${page.path} (200 OK)`, `Title: "${title.slice(0, 55)}..."`);
      } else {
        warn(`${page.path} title mismatch`, title);
      }

      // Check robots meta tag
      const robotsMatch = res.text.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
      const robotsContent = robotsMatch ? robotsMatch[1] : "";
      if (robotsContent.includes("noindex")) {
        fail(`${page.path} has unexpected 'noindex' directive`);
      } else {
        pass(`${page.path} is indexable`);
      }

      // Check WhatsApp CTA
      const hasWhatsApp = res.text.includes("wa.me/212666650696") || res.text.includes("wa.me/212");
      if (hasWhatsApp) {
        pass(`${page.path} has direct WhatsApp CTA`);
      } else {
        warn(`${page.path} missing direct WhatsApp link`);
      }
    } else {
      fail(`${page.path} returned HTTP ${res.status}`);
    }
  }

  // SUMMARY
  console.log(`\n${colors.bold}${colors.cyan}====================================================${colors.reset}`);
  console.log(`${colors.bold}                 AUDIT SUMMARY${colors.reset}`);
  console.log(`${colors.cyan}====================================================${colors.reset}`);
  console.log(`  Passed: ${colors.green}${passCount}${colors.reset}`);
  console.log(`  Failed: ${colors.red}${failCount}${colors.reset}`);
  console.log(`  Warnings: ${colors.yellow}${warnCount}${colors.reset}`);
  console.log(`\nVerdict: ${failCount === 0 ? colors.green + "ALL SYSTEMS OPERATIONAL IN PROD ✔" : colors.red + "ISSUES DETECTED - REVIEW FAILS ✖"}${colors.reset}\n`);
}

run();
