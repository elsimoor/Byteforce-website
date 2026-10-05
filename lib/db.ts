import fs from "fs";
import path from "path";
import { createRequire } from "node:module";
import type { DatabaseSync } from "node:sqlite";
import { catalogPages } from "@/lib/catalog";

const require = createRequire(import.meta.url);

export type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  created_at: string;
};

export type KeywordRow = {
  id: number;
  cluster: string;
  keyword: string;
  intent: string;
  target_path: string;
  role: string;
  priority: number;
  status: string;
  notes: string;
  created_at: string;
};

export type ActionRow = {
  id: number;
  title: string;
  detail: string;
  status: string;
  created_at: string;
};

export type PageMeta = {
  path: string;
  kind: string;
  label: string;
  meta_title: string;
  meta_description: string;
  updated_at: string;
};

const globalForDb = globalThis as unknown as { byteforceDb?: DatabaseSync };

function openDatabase() {
  const { DatabaseSync } = require("node:sqlite") as typeof import("node:sqlite");
  const dir = path.join(process.cwd(), "data");
  fs.mkdirSync(dir, { recursive: true });
  const db = new DatabaseSync(path.join(dir, "byteforce.db"));
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL DEFAULT '',
      company TEXT NOT NULL DEFAULT '',
      service TEXT NOT NULL DEFAULT '',
      message TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS keywords (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cluster TEXT NOT NULL,
      keyword TEXT NOT NULL UNIQUE,
      intent TEXT NOT NULL,
      target_path TEXT NOT NULL,
      role TEXT NOT NULL,
      priority INTEGER NOT NULL,
      status TEXT NOT NULL,
      notes TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS actions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      detail TEXT NOT NULL DEFAULT '',
      status TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS page_meta (
      path TEXT PRIMARY KEY,
      kind TEXT NOT NULL,
      label TEXT NOT NULL,
      meta_title TEXT NOT NULL,
      meta_description TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);
  seed(db);
  ensurePageMeta(db);
  return db;
}

function ensurePageMeta(db: DatabaseSync) {
  const insert = db.prepare(
    `INSERT OR IGNORE INTO page_meta (path, kind, label, meta_title, meta_description, updated_at)
     VALUES (?, ?, ?, ?, ?, ?)`,
  );
  const now = new Date().toISOString();
  for (const page of catalogPages()) {
    insert.run(page.path, page.kind, page.label, page.defaultTitle, page.defaultDescription, now);
  }
}

function seed(db: DatabaseSync) {
  const keywordCount = db.prepare("SELECT COUNT(*) AS count FROM keywords").get() as {
    count: number;
  };
  if (keywordCount.count === 0) {
    const insert = db.prepare(
      `INSERT INTO keywords (cluster, keyword, intent, target_path, role, priority, status, notes, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    );
    const now = new Date().toISOString();
    const rows: Array<[string, string, string, string, string, number, string, string]> = [
      ["Sites web", "création site web Casablanca", "commercial", "/services/creation-site-web", "principal", 1, "publie", "Page offre déjà en ligne dans ce site."],
      ["Sites web", "agence web Casablanca", "commercial", "/services/creation-site-web", "variante", 2, "publie", "Même URL que le mot-clé principal."],
      ["Sites web", "site e-commerce Maroc", "commercial", "/services/creation-site-web", "variante", 2, "a_creer", "À couvrir dans la page, sans créer une seconde URL."],
      ["Sites web", "création site vitrine Casablanca", "local", "/services/creation-site-web", "variante", 2, "publie", ""],
      ["Applications mobiles", "développement application mobile Maroc", "commercial", "/services/applications-mobiles", "principal", 1, "publie", ""],
      ["Applications mobiles", "application iOS Android Casablanca", "commercial", "/services/applications-mobiles", "variante", 2, "a_creer", ""],
      ["Logiciel sur mesure", "développement logiciel sur mesure Maroc", "commercial", "/services/logiciel-sur-mesure", "principal", 1, "publie", ""],
      ["Logiciel sur mesure", "agence développement web Casablanca", "commercial", "/services/logiciel-sur-mesure", "variante", 2, "a_creer", "Ne pas ouvrir une URL séparée."],
      ["Référencement", "agence SEO Casablanca", "commercial", "/services/referencement-seo", "principal", 1, "publie", ""],
      ["Référencement", "référencement naturel Maroc", "commercial", "/services/referencement-seo", "variante", 2, "publie", ""],
      ["Hébergement", "hébergement web Maroc", "commercial", "/services/hebergement", "principal", 1, "publie", ""],
      ["Maintenance", "maintenance site web Casablanca", "commercial", "/services/maintenance", "principal", 1, "publie", ""],
      ["Design", "design graphique Casablanca", "commercial", "/services/design-graphique", "principal", 1, "publie", ""],
      ["Design", "identité visuelle entreprise Maroc", "commercial", "/services/design-graphique", "variante", 2, "a_creer", ""],
      ["API", "développement API sur mesure", "commercial", "/services/api-backend", "principal", 1, "publie", ""],
      ["WordPress", "développement plugin WordPress Maroc", "commercial", "/services/plugins-wordpress", "principal", 1, "publie", ""],
    ];
    for (const row of rows) insert.run(...row, now);
  }

  const actionCount = db.prepare("SELECT COUNT(*) AS count FROM actions").get() as {
    count: number;
  };
  if (actionCount.count === 0) {
    const insert = db.prepare(
      `INSERT INTO actions (title, detail, status, created_at) VALUES (?, ?, ?, ?)`,
    );
    const now = new Date().toISOString();
    const rows: Array<[string, string, string]> = [
      [
        "Compléter la carte avec les requêtes entendues en appel",
        "Chaque nouveau mot-clé a une intention, une URL cible, et un seul rôle principal par page.",
        "a_faire",
      ],
      [
        "Brancher le domaine byteforce.ma",
        "Le site public est prêt dans ce dépôt. Le domaine actuel a renvoyé une erreur au moment du cadrage.",
        "a_faire",
      ],
      [
        "Répondre aux demandes du tableau de bord",
        "Chaque ligne du formulaire est une piste. Noter la suite dans l'échange, pas dans une promesse inventée sur le site.",
        "a_faire",
      ],
      [
        "Relier une réalisation réelle à chaque offre prioritaire",
        "Utiliser le catalogue. Ne pas ajouter de chiffre, d'avis ou de client qui n'y figure pas.",
        "en_cours",
      ],
    ];
    for (const row of rows) insert.run(...row, now);
  }
}

export function getDb() {
  if (!globalForDb.byteforceDb) globalForDb.byteforceDb = openDatabase();
  return globalForDb.byteforceDb;
}

export function listLeads() {
  return getDb()
    .prepare("SELECT * FROM leads ORDER BY id DESC")
    .all() as Lead[];
}

export function listKeywords() {
  return getDb()
    .prepare("SELECT * FROM keywords ORDER BY cluster, priority, keyword")
    .all() as KeywordRow[];
}

export function listPageMeta() {
  return getDb()
    .prepare("SELECT * FROM page_meta ORDER BY kind, label")
    .all() as PageMeta[];
}

export function getPageMeta(pagePath: string) {
  return getDb().prepare("SELECT * FROM page_meta WHERE path = ?").get(pagePath) as
    | PageMeta
    | undefined;
}

export function listActions() {
  return getDb()
    .prepare("SELECT * FROM actions ORDER BY CASE status WHEN 'en_cours' THEN 0 WHEN 'a_faire' THEN 1 ELSE 2 END, id DESC")
    .all() as ActionRow[];
}
