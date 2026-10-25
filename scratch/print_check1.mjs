import fs from 'fs';

const audit = JSON.parse(fs.readFileSync('scratch/comprehensive_audit_result.json', 'utf8'));

const titleOver60 = [];
const descOutside = [];
const missingH1 = [];
const multiH1 = [];
const titleMap = {};
const descMap = {};

audit.pages.forEach(p => {
  if (p.titleLength > 60) titleOver60.push({ url: p.url, len: p.titleLength, title: p.title });
  if (p.descLength < 140 || p.descLength > 155) descOutside.push({ url: p.url, len: p.descLength, desc: p.description });
  if (p.h1Count === 0) missingH1.push(p.url);
  if (p.h1Count > 1) multiH1.push({ url: p.url, h1s: p.h1Matches });
  if (p.title) {
    titleMap[p.title] = titleMap[p.title] || [];
    titleMap[p.title].push(p.url);
  }
  if (p.description) {
    descMap[p.description] = descMap[p.description] || [];
    descMap[p.description].push(p.url);
  }
});

const dupTitles = Object.entries(titleMap).filter(([t, u]) => u.length > 1);
const dupDescs = Object.entries(descMap).filter(([d, u]) => u.length > 1);

console.log('Total pages audited:', audit.pages.length);
console.log('Title > 60 chars count:', titleOver60.length);
titleOver60.forEach(t => console.log(`  [${t.len}] ${t.title} -> ${t.url}`));

console.log('\nDesc outside 140-155 count:', descOutside.length);
console.log('Missing H1 (' + missingH1.length + '):', missingH1);
console.log('Multiple H1 (' + multiH1.length + '):', multiH1);

console.log('\nDuplicate Titles (' + dupTitles.length + '):');
dupTitles.forEach(([t, u]) => console.log(`  Title: "${t}" -> ${u.join(', ')}`));

console.log('\nDuplicate Descs (' + dupDescs.length + '):');
dupDescs.forEach(([d, u]) => console.log(`  Desc: "${d.slice(0, 60)}..." -> ${u.join(', ')}`));
