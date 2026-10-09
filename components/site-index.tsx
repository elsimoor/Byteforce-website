import Link from "next/link";
import { publicEntries } from "@/lib/public-urls";

const parts = 6;

function label(path: string) {
  if (path === "/") return "Accueil";
  return path.slice(1).replaceAll("/", " · ");
}

export function SiteIndex({ part }: { part: number }) {
  const entries = publicEntries().filter((_, index) => index % parts === part);
  if (entries.length === 0) return null;
  return (
    <nav aria-label="Autres pages" className="px-6 py-10 md:px-12">
      <h2 className="text-sm text-mute">Autres pages du site</h2>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {entries.map((entry) => (
          <li key={entry.path}>
            <Link href={entry.path} className="text-mute hover:text-ink">
              {label(entry.path)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
