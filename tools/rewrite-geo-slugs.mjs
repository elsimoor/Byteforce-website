import fs from "node:fs";

function intentOf(keyword) {
  if (keyword.startsWith("Agence de ")) return "agence";
  if (keyword.startsWith("Création de ")) return "creation";
  if (keyword.startsWith("Développement de ")) return "developpement";
  if (keyword.startsWith("Entreprise de ")) return "entreprise";
  if (keyword.startsWith("Prix ")) return "prix";
  if (keyword.includes(" sur mesure sur mesure ")) return "sur-mesure";
  if (keyword.includes(" sur mesure ") && !keyword.startsWith("Développement logiciel sur mesure ")) return "sur-mesure";
  return "demande";
}

function parseCsv(csv) {
  const rows = [];
  let i = 0;
  let field = "";
  let row = [];
  let quoted = false;
  while (i < csv.length) {
    const char = csv[i];
    if (quoted) {
      if (char === '"') {
        if (csv[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        quoted = false;
        i += 1;
        continue;
      }
      field += char;
      i += 1;
      continue;
    }
    if (char === '"') {
      quoted = true;
      i += 1;
      continue;
    }
    if (char === ",") {
      row.push(field);
      field = "";
      i += 1;
      continue;
    }
    if (char === "\n" || char === "\r") {
      if (char === "\r" && csv[i + 1] === "\n") i += 1;
      row.push(field);
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      field = "";
      i += 1;
      continue;
    }
    field += char;
    i += 1;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function quote(value) {
  return `"${value.replace(/"/g, '""')}"`;
}

const file = "byteforce-geo-keywords.csv";
const rows = parseCsv(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
const slugs = new Set();
for (const cells of rows.slice(1)) {
  const intent = intentOf(cells[0]);
  const base = cells[6].replace(/\/(demande|agence|creation|developpement|entreprise|prix|sur-mesure)$/, "");
  cells[6] = `${base}/${intent}`;
  if (slugs.has(cells[6])) throw new Error(`Slug en double: ${cells[6]}`);
  slugs.add(cells[6]);
}
fs.writeFileSync(file, `\uFEFF${rows.map((row) => row.map(quote).join(",")).join("\r\n")}\r\n`);
console.log("rows", rows.length - 1, "slugs", slugs.size);
