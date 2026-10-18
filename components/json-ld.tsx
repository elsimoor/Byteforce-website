import { services } from "@/lib/content";
import type { Project } from "@/lib/content";
import { ldJson, site } from "@/lib/site";

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
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": businessId,
        name: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        image: `${site.url}/logo.png`,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/logo.png`,
          width: 360,
          height: 360,
        },
        address: {
          "@type": "PostalAddress",
          "@id": `${site.url}/#address`,
          streetAddress: `${site.street}, ${site.locality}`,
          addressLocality: site.city,
          postalCode: site.postal,
          addressCountry: site.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          "@id": `${site.url}/#geo`,
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        sameAs: [site.instagram, site.linkedin, site.catalogue],
        contactPoint: {
          "@type": "ContactPoint",
          "@id": `${site.url}/#contact`,
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
        areaServed: [
          { "@type": "City", name: "Casablanca" },
          { "@type": "City", name: "Rabat" },
          { "@type": "City", name: "Marrakech" },
          { "@type": "City", name: "Tanger" },
          { "@type": "City", name: "Fès" },
          { "@type": "City", name: "Safi" },
          { "@type": "City", name: "Lille" },
          { "@type": "City", name: "Montréal" },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        founder: {
          "@type": "Person",
          "@id": `${site.url}/walid-moultamiss#person`,
          name: "Walid Moultamiss",
          url: `${site.url}/walid-moultamiss`,
        },
        knowsLanguage: ["fr", "ar", "en"],
        description: site.description,
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(data) }} />
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(data) }} />;
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(data) }} />;
}
