export const LEAD_RECEIPT_KEY = "bf-lead-receipt";

export type LeadReceipt = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  sentAt: string;
};

export function writeLeadReceipt(draft: Omit<LeadReceipt, "sentAt">) {
  const receipt: LeadReceipt = { ...draft, sentAt: new Date().toISOString() };
  sessionStorage.setItem(LEAD_RECEIPT_KEY, JSON.stringify(receipt));
}

export function parseLeadReceipt(raw: string | null): LeadReceipt | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as Partial<LeadReceipt>;
    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const message = String(data.message ?? "").trim();
    if (!name || !email || !message) return null;
    return {
      name,
      email,
      phone: String(data.phone ?? "").trim(),
      company: String(data.company ?? "").trim(),
      service: String(data.service ?? "").trim(),
      budget: String(data.budget ?? "").trim(),
      message,
      sentAt: String(data.sentAt ?? ""),
    };
  } catch {
    return null;
  }
}

export function givenName(name: string) {
  const first = name.trim().split(/\s+/)[0] ?? "";
  if (first.length < 2 || first.length > 32) return "";
  return first;
}

export function formatReceiptTime(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Africa/Casablanca",
  }).format(date);
}
