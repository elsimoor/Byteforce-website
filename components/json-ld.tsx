import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const businessId = `${site.url}/#business`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: `${site.url}/`,
        name: site.name,
        description: site.description,
        inLanguage: ["fr", "en"],
        publisher: { "@id": businessId },
      },
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        image: `${site.url}/logo.png`,
        logo: `${site.url}/logo.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.street}, ${site.locality}`,
          addressLocality: site.city,
          postalCode: site.postal,
          addressCountry: site.country,
        },
        areaServed: ["MA", "FR", "CA"],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        description: site.description,
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
