import Link from "next/link";
import { publicEntries } from "@/lib/public-urls";

function label(path: string) {
  if (path === "/") return "Accueil";
  return path.slice(1).replaceAll("/", " · ");
}

export function SiteIndex() {
  const entries = publicEntries();
  return (
    <details className="mt-12 border-t border-outline-variant/20 pt-8">
      <summary className="cursor-pointer text-sm font-medium text-on-surface">Plan du site</summary>
      <ul className="mt-4 columns-1 gap-x-8 text-sm sm:columns-2 lg:columns-3">
        {entries.map((entry) => (
          <li key={entry.path} className="mb-1.5 break-inside-avoid">
            <Link href={entry.path} className="text-on-surface-variant hover:text-on-surface">
              {label(entry.path)}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
