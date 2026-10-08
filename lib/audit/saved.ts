import type { AuditStep } from "@/lib/site-audit";

const AUDITS_KEY = "byteforce-audits";
const LOTS_KEY = "byteforce-audit-lots";
const AUDIT_CAP = 24;
const LOT_CAP = 8;

export type SavedAudit = {
  url: string;
  savedAt: number;
  steps: AuditStep[];
};

export type AuditLot = {
  id: string;
  pages: string[];
  createdAt: number;
};

function storage() {
  if (typeof window === "undefined") return null;
  return window.localStorage;
}

function isStep(value: unknown): value is AuditStep {
  if (!value || typeof value !== "object") return false;
  const step = value as Partial<AuditStep>;
  return typeof step.id === "string" && typeof step.label === "string" && typeof step.state === "string" && typeof step.detail === "string";
}

export function readAudits(): Record<string, SavedAudit> {
  const store = storage();
  if (!store) return {};
  try {
    const parsed = JSON.parse(store.getItem(AUDITS_KEY) ?? "{}") as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    const audits: Record<string, SavedAudit> = {};
    for (const [url, value] of Object.entries(parsed)) {
      if (!value || typeof value !== "object") continue;
      const entry = value as Partial<SavedAudit>;
      if (typeof entry.url !== "string" || typeof entry.savedAt !== "number" || !Array.isArray(entry.steps)) continue;
      const steps = entry.steps.filter(isStep);
      if (!steps.length) continue;
      audits[url] = { url: entry.url, savedAt: entry.savedAt, steps };
    }
    return audits;
  } catch {
    return {};
  }
}

export function readAudit(url: string) {
  return readAudits()[url] ?? null;
}

export function writeAudit(url: string, steps: AuditStep[]) {
  const store = storage();
  const settled = steps.filter((step) => step.state !== "running" && step.id !== "suite");
  if (!store || !settled.length) return;
  const next = { ...readAudits(), [url]: { url, savedAt: Date.now(), steps: settled } };
  const capped = Object.fromEntries(
    Object.values(next)
      .sort((left, right) => right.savedAt - left.savedAt)
      .slice(0, AUDIT_CAP)
      .map((entry) => [entry.url, entry]),
  );
  try {
    store.setItem(AUDITS_KEY, JSON.stringify(capped));
  } catch {
    const smaller = Object.fromEntries(
      Object.values(capped)
        .sort((left, right) => right.savedAt - left.savedAt)
        .slice(0, 8)
        .map((entry) => [entry.url, entry]),
    );
    try {
      store.setItem(AUDITS_KEY, JSON.stringify(smaller));
    } catch {
      return;
    }
  }
  window.dispatchEvent(new CustomEvent("byteforce-audit-saved", { detail: { url } }));
}

export function markAudit(url: string, status: "running" | "error") {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("byteforce-audit-status", { detail: { url, status } }));
}

function readLots(): AuditLot[] {
  const store = storage();
  if (!store) return [];
  try {
    const parsed = JSON.parse(store.getItem(LOTS_KEY) ?? "[]") as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((value) => {
      if (!value || typeof value !== "object") return [];
      const lot = value as Partial<AuditLot>;
      if (typeof lot.id !== "string" || typeof lot.createdAt !== "number" || !Array.isArray(lot.pages)) return [];
      const pages = lot.pages.filter((page): page is string => typeof page === "string" && page.length > 0 && page.length <= 300).slice(0, 10);
      if (!pages.length) return [];
      return [{ id: lot.id, pages, createdAt: lot.createdAt }];
    });
  } catch {
    return [];
  }
}

export function readLot(id: string) {
  if (!id) return null;
  return readLots().find((lot) => lot.id === id) ?? null;
}

export function writeLot(pages: string[]) {
  const store = storage();
  const id = crypto.randomUUID();
  const lot: AuditLot = { id, pages: pages.slice(0, 10), createdAt: Date.now() };
  if (!store) return id;
  const lots = [...readLots().filter((item) => Date.now() - item.createdAt < 1000 * 60 * 60 * 24 * 14), lot].slice(-LOT_CAP);
  try {
    store.setItem(LOTS_KEY, JSON.stringify(lots));
  } catch {
    return id;
  }
  return id;
}
