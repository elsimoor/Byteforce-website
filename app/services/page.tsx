import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Offres",
  description:
    "Création de sites, applications mobiles, logiciels sur mesure, SEO, hébergement, design, API et maintenance à Casablanca.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <header className="px-6 pb-8 pt-16 md:px-12 md:pt-24">
        <h1 className="display max-w-[12ch] text-[clamp(3.2rem,8vw,7rem)]">Ce que l&apos;on construit.</h1>
      </header>
      <ol className="border-t border-line">
        {services.map((service, index) => (
          <li key={service.slug} className="border-b border-line">
            <Link
              href={`/services/${service.slug}`}
              className="index-row grid items-baseline gap-4 px-6 py-8 md:grid-cols-12 md:px-12 md:py-12"
            >
              <span className="text-sm text-mute md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
              <span className="display text-4xl md:col-span-6 md:text-6xl">{service.title}</span>
              <span className="text-sm text-mute md:col-span-5">{service.summary}</span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
