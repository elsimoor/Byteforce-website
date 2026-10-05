"use server";

import { redirect } from "next/navigation";
import { catalogPages } from "@/lib/catalog";
import { clearSession, isAuthed, passwordConfigured, setSession } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { pushLeadToCocoinbox } from "@/lib/cocoinbox";

function text(formData: FormData, key: string, max: number) {
  return String(formData.get(key) ?? "").trim().slice(0, max);
}

function requireAuth() {
  return isAuthed();
}

export async function recordLead(input: {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  company_website: string;
  country?: string;
  city?: string;
  pageUrl?: string;
}) {
  if (input.company_website.trim()) return;
  const name = input.name.trim().slice(0, 120);
  const email = input.email.trim().slice(0, 160);
  const message = input.message.trim().slice(0, 4000);
  if (!name || !email || !message || !email.includes("@")) return;
  const budget = input.budget.trim().slice(0, 80);
  const storedMessage = budget ? `Budget: ${budget}\n${message}` : message;
  const phone = input.phone.trim().slice(0, 40);
  const company = input.company.trim().slice(0, 120);
  const service = input.service.trim().slice(0, 80);
  getDb()
    .prepare(
      `INSERT INTO leads (name, email, phone, company, service, message, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(name, email, phone, company, service, storedMessage, new Date().toISOString());
  const saved = await pushLeadToCocoinbox({
    name,
    email,
    phone,
    company,
    service,
    message: storedMessage,
    country: input.country?.trim() || "Maroc",
    city: input.city?.trim() || "Casablanca",
    pageUrl: input.pageUrl?.trim() || "https://byteforce.ma/contact",
  });
  return { ok: saved };
}

export async function createLead(formData: FormData) {
  if (text(formData, "company_website", 80)) {
    redirect("/contact?sent=1");
  }
  const name = text(formData, "name", 120);
  const email = text(formData, "email", 160);
  const phone = text(formData, "phone", 40);
  const company = text(formData, "company", 120);
  const service = text(formData, "service", 80);
  const budget = text(formData, "budget", 80);
  const message = text(formData, "message", 4000);
  if (!name || !email || !message || !email.includes("@")) {
    redirect("/contact?error=1");
  }
  const storedMessage = budget ? `Budget: ${budget}\n${message}` : message;
  getDb()
    .prepare(
      `INSERT INTO leads (name, email, phone, company, service, message, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(name, email, phone, company, service, storedMessage, new Date().toISOString());
  await pushLeadToCocoinbox({
    name,
    email,
    phone,
    company,
    service,
    message: storedMessage,
    country: "Maroc",
    city: "Casablanca",
    pageUrl: "https://byteforce.ma/contact",
  });
  redirect("/contact?sent=1");
}

export async function login(formData: FormData) {
  const password = text(formData, "password", 200);
  if (!passwordConfigured() || password !== process.env.DASHBOARD_PASSWORD) {
    redirect("/dashboard/login?error=1");
  }
  await setSession();
  redirect("/dashboard");
}

export async function logout() {
  await clearSession();
  redirect("/dashboard/login");
}

export async function addKeyword(formData: FormData) {
  if (!(await requireAuth())) redirect("/dashboard/login");
  const cluster = text(formData, "cluster", 80);
  const keyword = text(formData, "keyword", 160);
  const intent = text(formData, "intent", 40);
  const targetPath = text(formData, "target_path", 160);
  const role = text(formData, "role", 20);
  const priority = Number(text(formData, "priority", 1)) || 2;
  const notes = text(formData, "notes", 500);
  if (!cluster || !keyword || !targetPath.startsWith("/")) {
    redirect("/dashboard/strategie?error=1");
  }
  try {
    getDb()
      .prepare(
        `INSERT INTO keywords (cluster, keyword, intent, target_path, role, priority, status, notes, created_at)
         VALUES (?, ?, ?, ?, ?, ?, 'a_creer', ?, ?)`,
      )
      .run(
        cluster,
        keyword,
        intent || "commercial",
        targetPath,
        role === "principal" ? "principal" : "variante",
        Math.min(3, Math.max(1, priority)),
        notes,
        new Date().toISOString(),
      );
  } catch {
    redirect("/dashboard/strategie?error=duplicate");
  }
  redirect("/dashboard/strategie");
}

export async function updateKeyword(formData: FormData) {
  if (!(await requireAuth())) redirect("/dashboard/login");
  const id = Number(text(formData, "id", 12));
  const status = text(formData, "status", 20);
  const allowed = new Set(["a_creer", "en_cours", "publie"]);
  if (!id || !allowed.has(status)) redirect("/dashboard/strategie");
  getDb().prepare("UPDATE keywords SET status = ? WHERE id = ?").run(status, id);
  redirect("/dashboard/strategie");
}

export async function removeKeyword(formData: FormData) {
  if (!(await requireAuth())) redirect("/dashboard/login");
  const id = Number(text(formData, "id", 12));
  if (id) getDb().prepare("DELETE FROM keywords WHERE id = ?").run(id);
  redirect("/dashboard/strategie");
}

export async function addAction(formData: FormData) {
  if (!(await requireAuth())) redirect("/dashboard/login");
  const title = text(formData, "title", 180);
  const detail = text(formData, "detail", 800);
  if (!title) redirect("/dashboard/strategie?error=1");
  getDb()
    .prepare(`INSERT INTO actions (title, detail, status, created_at) VALUES (?, ?, 'a_faire', ?)`)
    .run(title, detail, new Date().toISOString());
  redirect("/dashboard/strategie");
}

export async function savePageMeta(formData: FormData) {
  if (!(await requireAuth())) redirect("/dashboard/login");
  const pagePath = text(formData, "path", 180);
  const metaTitle = text(formData, "meta_title", 70);
  const metaDescription = text(formData, "meta_description", 180);
  const allowed = new Set(catalogPages().map((page) => page.path));
  if (!allowed.has(pagePath) || !metaTitle || !metaDescription) {
    redirect("/dashboard/pages?error=1");
  }
  getDb()
    .prepare(
      `UPDATE page_meta SET meta_title = ?, meta_description = ?, updated_at = ? WHERE path = ?`,
    )
    .run(metaTitle, metaDescription, new Date().toISOString(), pagePath);
  redirect(`/dashboard/pages?saved=${encodeURIComponent(pagePath)}`);
}

export async function updateAction(formData: FormData) {
  if (!(await requireAuth())) redirect("/dashboard/login");
  const id = Number(text(formData, "id", 12));
  const status = text(formData, "status", 20);
  const allowed = new Set(["a_faire", "en_cours", "fait"]);
  if (!id || !allowed.has(status)) redirect("/dashboard/strategie");
  getDb().prepare("UPDATE actions SET status = ? WHERE id = ?").run(status, id);
  redirect("/dashboard/strategie");
}
