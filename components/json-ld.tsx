import { services } from "@/lib/content";
import type { Project } from "@/lib/content";
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
        potentialAction: {
          "@type": "SearchAction",
          target: `${site.url}/recherche?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
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
        sameAs: ["https://share.google/L12w0TmJ9kkUcVBg7", site.catalogue],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phone,
          email: site.email,
          contactType: "sales",
          availableLanguage: ["French", "English"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "19:00",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Offres Byte Force",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.summary,
              url: `${site.url}${service.href ?? `/services/${service.slug}`}`,
              provider: { "@id": businessId },
            },
          })),
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

export function ProjectJsonLd({ project }: { project: Project }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${site.url}/realisations/${project.slug}`,
    mainEntityOfPage: `${site.url}/realisations/${project.slug}`,
    creator: { "@id": `${site.url}/#business` },
    about: project.problem || project.description,
    contentLocation: {
      "@type": "Place",
      name: `${project.city}, ${project.country}`,
    },
    sameAs: project.url,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${site.url}${item.path === "/" ? "/" : item.path}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
