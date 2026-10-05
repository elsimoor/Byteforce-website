type SiteLead = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

export async function pushLeadToCocoinbox(input: SiteLead) {
  const base = process.env.COCOINBOX_API_URL?.replace(/\/$/, "");
  const tenant = process.env.COCOINBOX_TENANT_SLUG?.trim();
  if (!base || !tenant || !input.email) return;
  const message = [input.service ? `Offre: ${input.service}` : "", input.message].filter(Boolean).join("\n");
  try {
    await fetch(`${base}/public/site-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tenant-slug": tenant,
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        phone: input.phone,
        company: input.company,
        message,
        country: "Maroc",
        city: "Casablanca",
        pageUrl: "https://byteforce.ma/contact",
        utmSource: "byteforce.ma",
      }),
    });
  } catch {
    // The local copy is already stored. A CRM outage must not block the visitor.
  }
}
