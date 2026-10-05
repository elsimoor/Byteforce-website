import { projects, type Project } from "@/lib/content";

export type PageKind = "client" | "category" | "city";

export type CatalogEntry = {
  kind: PageKind;
  slug: string;
  path: string;
  label: string;
  defaultTitle: string;
  defaultDescription: string;
};

const categoryCopy: Record<Project["category"], { title: string; description: string }> = {
  "E-Commerce": {
    title: "Projets e-commerce",
    description:
      "Boutiques en ligne livrées par Byte Force: fleurs, mobilier et services, en France et au Maroc.",
  },
  Vitrine: {
    title: "Sites vitrines",
    description:
      "Sites vitrines Byte Force pour présenter une activité et recevoir des demandes.",
  },
  "Plate-forme": {
    title: "Plateformes",
    description:
      "Plateformes Byte Force: mise en relation, dons, communication, tourisme et campagnes.",
  },
};

export function slugify(value: string) {
  return value
    .replace(/œ/gi, "oe")
    .replace(/æ/gi, "ae")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function categories() {
  const names = [...new Set(projects.map((project) => project.category))];
  return names.map((name) => {
    const slug = slugify(name);
    const copy = categoryCopy[name];
    return {
      name,
      slug,
      path: `/categories/${slug}`,
      title: copy.title,
      description: copy.description,
      projects: projects.filter((project) => project.category === name),
    };
  });
}

export function cities() {
  const seen = new Map<string, { city: string; country: string }>();
  for (const project of projects) {
    const slug = slugify(project.city);
    if (!seen.has(slug)) seen.set(slug, { city: project.city, country: project.country });
  }
  return [...seen.entries()].map(([slug, place]) => ({
    slug,
    path: `/villes/${slug}`,
    city: place.city,
    country: place.country,
    title: `Projets à ${place.city}`,
    description: `Réalisations Byte Force à ${place.city}, ${place.country}.`,
    projects: projects.filter((project) => slugify(project.city) === slug),
  }));
}

export function getCategory(slug: string) {
  return categories().find((category) => category.slug === slug);
}

export function getCity(slug: string) {
  return cities().find((city) => city.slug === slug);
}

export function catalogPages(): CatalogEntry[] {
  return [
    ...projects.map((project) => ({
      kind: "client" as const,
      slug: project.slug,
      path: `/realisations/${project.slug}`,
      label: project.title,
      defaultTitle: `${project.title} · Byte Force`,
      defaultDescription: project.description,
    })),
    ...categories().map((category) => ({
      kind: "category" as const,
      slug: category.slug,
      path: category.path,
      label: category.name,
      defaultTitle: `${category.title} · Byte Force`,
      defaultDescription: category.description,
    })),
    ...cities().map((city) => ({
      kind: "city" as const,
      slug: city.slug,
      path: city.path,
      label: `${city.city}, ${city.country}`,
      defaultTitle: `${city.title} · Byte Force`,
      defaultDescription: city.description,
    })),
  ];
}
