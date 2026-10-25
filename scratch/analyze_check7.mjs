import fs from 'fs';
import path from 'path';

const audit = JSON.parse(fs.readFileSync('scratch/comprehensive_audit_result.json', 'utf8'));

// Fix direct snippet extraction directly from page.tsx files
const landingFiles = [
  { route: '/developpement-logiciel-sur-mesure-maroc', file: 'app/developpement-logiciel-sur-mesure-maroc/page.tsx', kw: 'développement logiciel sur mesure maroc' },
  { route: '/crm-sur-mesure-maroc', file: 'app/crm-sur-mesure-maroc/page.tsx', kw: 'crm sur mesure maroc' },
  { route: '/developpement-saas-maroc', file: 'app/developpement-saas-maroc/page.tsx', kw: 'développement saas maroc' },
  { route: '/agence-wordpress-maroc', file: 'app/agence-wordpress-maroc/page.tsx', kw: 'agence wordpress maroc' },
  { route: '/developpement-application-mobile-maroc', file: 'app/developpement-application-mobile-maroc/page.tsx', kw: 'développement application mobile maroc' },
  { route: '/integration-ia-automatisation-entreprise-maroc', file: 'app/integration-ia-automatisation-entreprise-maroc/page.tsx', kw: 'intégration ia automatisation maroc' },
];

console.log('=== CHECK 4.5: DIRECT ANSWER SNIPPETS ===');
for (const lf of landingFiles) {
  const content = fs.readFileSync(lf.file, 'utf8');
  const m = content.match(/directAnswerSnippet="([^"]+)"/s);
  const snippet = m ? m[1] : '';
  const words = snippet.split(/\s+/).filter(Boolean);
  console.log(`${lf.route}:`);
  console.log(`  Word count: ${words.length}`);
  console.log(`  Between 40-60 words?: ${words.length >= 40 && words.length <= 60}`);
  console.log(`  Snippet: "${snippet}"`);
}

// CHECK 7: Internal linking
console.log('\n=== CHECK 7: INBOUND INTERNAL LINKS ===');
const inboundLinks = {};
for (const target of landingFiles.map(k => k.route)) {
  inboundLinks[target] = [];
}

for (const source of audit.pages) {
  if (!source || !source.pageLinks) continue;
  for (const l of source.pageLinks) {
    let cleanHref = (l.href || '').replace(/^https:\/\/byteforce\.ma/, '').replace(/\/$/, '') || '/';
    if (inboundLinks[cleanHref]) {
      inboundLinks[cleanHref].push({ from: source.route, anchor: l.anchor });
    }
  }
}

for (const [target, links] of Object.entries(inboundLinks)) {
  console.log(`Inbound links to ${target}: ${links.length}`);
  const anchorCounts = {};
  for (const l of links) {
    anchorCounts[l.anchor] = (anchorCounts[l.anchor] || 0) + 1;
  }
  console.log(`  Anchor texts:`, anchorCounts);
}

// CHECK 7: Mentions of "cocoinbox", "salesforce", "ERP", "CRM" without Maroc context
console.log('\n=== CHECK 7: PROHIBITED / UNCONTEXTUALIZED KEYWORDS ===');
// Scan src/app and lib
const targetWords = ['cocoinbox', 'salesforce'];
const findings = [];

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.git'].includes(entry.name)) continue;
      walkDir(fullPath);
    } else if (entry.isFile() && /\.(tsx|ts|jsx|js|md|html)$/.test(entry.name)) {
      const text = fs.readFileSync(fullPath, 'utf8');
      const lines = text.split('\n');
      lines.forEach((line, idx) => {
        for (const w of targetWords) {
          if (new RegExp('\\b' + w + '\\b', 'i').test(line)) {
            findings.push({ file: fullPath, line: idx + 1, term: w, content: line.trim().slice(0, 100) });
          }
        }
      });
    }
  }
}

walkDir('app');
walkDir('lib');
walkDir('components');

console.log(`Found ${findings.length} occurrences of cocoinbox / salesforce:`);
findings.slice(0, 20).forEach(f => {
  console.log(`  ${f.file}:${f.line} [${f.term}] -> ${f.content}`);
});

fs.writeFileSync('scratch/uncontextualized_words.json', JSON.stringify(findings, null, 2));
