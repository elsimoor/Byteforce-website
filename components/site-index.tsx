import Link from "next/link";

const hubs = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/insights", label: "Insights" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
  { href: "/developpement-logiciel-maroc", label: "Maroc" },
  { href: "/developpement-logiciel-france", label: "France" },
];

export function SiteIndex({ part: _part }: { part: number }) {
  return (
    <nav aria-label="Autres pages" className="px-6 py-10 md:px-12">
      <h2 className="text-sm text-mute">Autres pages du site</h2>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {hubs.map((hub) => (
          <li key={hub.href}>
            <Link href={hub.href} className="text-mute hover:text-ink">
              {hub.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
