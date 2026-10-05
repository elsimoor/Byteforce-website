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

export async function pushLeadToCocoinbox(input: SiteLead): Promise<boolean> {
  const base = process.env.COCOINBOX_API_URL?.replace(/\/$/, "");
  const tenant = process.env.COCOINBOX_TENANT_SLUG?.trim();
  const token = process.env.COCOINBOX_WEBHOOK_TOKEN?.trim();
  const email = clip(input.email, 160);
  const country = clip(input.country, 80);
  const city = clip(input.city, 80);
  if (!base || !tenant || !token || !email.includes("@") || !country || !city) return false;

  const pageUrl = /^https?:\/\//i.test(input.pageUrl.trim())
    ? clip(input.pageUrl, 500)
    : "https://byteforce.ma/contact";

  try {
    const response = await fetch(`${base}/public/website`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tenant-slug": tenant,
        "x-website-token": token,
      },
      body: JSON.stringify({
        name: clip(input.name, 120),
        email,
        phone: clip(input.phone, 40),
        company: clip(input.company, 120),
        service: clip(input.service, 80),
        message: clip(input.message, 4000),
        country,
        city,
        pageUrl,
      }),
      cache: "no-store",
    });
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
