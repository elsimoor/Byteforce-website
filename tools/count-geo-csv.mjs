import fs from "node:fs";

const text = fs.readFileSync("byteforce-geo-keywords.csv", "utf8").replace(/^\uFEFF/, "");

function parse(csv) {
  const rows = [];
  let i = 0;
  let field = "";
  let row = [];
  let q = false;
  while (i < csv.length) {
    const c = csv[i];
    if (q) {
      if (c === '"') {
        if (csv[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        q = false;
        i += 1;
        continue;
      }
      field += c;
      i += 1;
      continue;
    }
    if (c === '"') {
      q = true;
      i += 1;
      continue;
    }
    if (c === ",") {
      row.push(field);
      field = "";
      i += 1;
      continue;
    }
    if (c === "\n" || c === "\r") {
      if (c === "\r" && csv[i + 1] === "\n") i += 1;
      row.push(field);
      if (row.some((x) => x !== "")) rows.push(row);
      row = [];
      field = "";
      i += 1;
      continue;
    }
    field += c;
    i += 1;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

const rows = parse(text);
const data = rows.slice(1);
console.log("rows", data.length);
console.log("cols", rows[0]);
const slugs = new Set(data.map((r) => r[6]));
const services = [...new Set(data.map((r) => r[1]))];
const places = [...new Set(data.map((r) => `${r[2]} | ${r[3]} | ${r[4]}`))];
console.log("unique slugs", slugs.size);
console.log("services", services);
console.log("places", places);
const perSlug = {};
for (const r of data) perSlug[r[6]] = (perSlug[r[6]] || 0) + 1;
const counts = {};
for (const n of Object.values(perSlug)) counts[n] = (counts[n] || 0) + 1;
console.log("keywords per slug", counts);
const thin = Object.entries(perSlug).filter(([, n]) => n !== 7);
for (const [slug] of thin) {
  const kws = data.filter((r) => r[6] === slug).map((r) => r[0]);
  console.log("\n" + slug);
  for (const kw of kws) console.log(" - " + kw);
}
