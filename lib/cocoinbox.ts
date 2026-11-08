import { createHmac, randomBytes } from "node:crypto";

type SiteLead = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  country: string;
  city: string;
  pageUrl: string;
};

function clip(value: string, max: number) {
  return value.trim().slice(0, max);
}

function canonicalJson(value: unknown): string {
  if (value === null || typeof value !== "object") return JSON.stringify(value) ?? "null";
  if (Array.isArray(value)) return `[${value.map((item) => canonicalJson(item)).join(",")}]`;
  const record = value as Record<string, unknown>;
  return `{${Object.keys(record)
    .sort()
    .map((key) => `${JSON.stringify(key)}:${canonicalJson(record[key])}`)
    .join(",")}}`;
}

function sign(secret: string, payload: string) {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export async function pushLeadToCocoinbox(input: SiteLead): Promise<boolean> {
  const base = process.env.COCOINBOX_API_URL?.replace(/\/$/, "");
  const tenant = process.env.COCOINBOX_FORM_TENANT?.trim();
  const formKey = process.env.COCOINBOX_FORM_KEY?.trim();
  const publicKey = process.env.COCOINBOX_PUBLIC_KEY?.trim();
  const secret = process.env.COCOINBOX_FORM_SECRET?.trim();
  const email = clip(input.email, 160);
  const country = clip(input.country, 80);
  const city = clip(input.city, 80);
  if (!base || !tenant || !formKey || !publicKey || !secret || !email.includes("@") || !country || !city) {
    return false;
  }

  const pageUrl = /^https?:\/\//i.test(input.pageUrl.trim())
    ? clip(input.pageUrl, 500)
    : "https://byteforce.ma/contact";
  const body = canonicalJson({
    name: clip(input.name, 120),
    email,
    phone: clip(input.phone, 40),
    company: clip(input.company, 120),
    service: clip(input.service, 80),
    message: clip(input.message, 4000),
    country,
    city,
    pageUrl,
  });

  try {
    const timestamp = String(Math.floor(Date.now() / 1000));
    const nonce = randomBytes(16).toString("hex");
    const handshake = await fetch(
      `${base}/public/forms/${encodeURIComponent(formKey)}/handshake?tenant=${encodeURIComponent(tenant)}`,
      {
        method: "POST",
        headers: {
          "X-Coco-Key": publicKey,
          "X-Coco-Timestamp": timestamp,
          "X-Coco-Nonce": nonce,
          "X-Coco-Signature": sign(secret, `${timestamp}.${nonce}.handshake.${formKey}`),
        },
        cache: "no-store",
      },
    );
    if (!handshake.ok) {
      const detail = (await handshake.text()).slice(0, 300);
      console.error(`Cocoinbox handshake rejected (${handshake.status}) ${detail}`);
      return false;
    }
    const token = String((await handshake.json()).token ?? "");
    if (!token) return false;

    const response = await fetch(
      `${base}/public/forms/${encodeURIComponent(formKey)}?tenant=${encodeURIComponent(tenant)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "X-Coco-Signature": sign(secret, `${token}.${body}`),
        },
        body,
        cache: "no-store",
      },
    );
    if (!response.ok) {
      const detail = (await response.text()).slice(0, 300);
      console.error(`Cocoinbox lead rejected (${response.status}) ${detail}`);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
