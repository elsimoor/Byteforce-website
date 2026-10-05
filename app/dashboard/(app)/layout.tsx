import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { logout } from "@/lib/actions";
import { isAuthed } from "@/lib/auth";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  if (!(await isAuthed())) redirect("/dashboard/login");

  return (
    <div>
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-3 text-sm">
          <nav className="flex gap-5" aria-label="Tableau de bord">
            <Link href="/dashboard" className="hover:text-copper">
              Demandes
            </Link>
            <Link href="/dashboard/strategie" className="hover:text-copper">
              Stratégie SEO
            </Link>
            <Link href="/dashboard/pages" className="hover:text-copper">
              Métas
            </Link>
          </nav>
          <form action={logout}>
            <button type="submit" className="hover:text-copper">
              Sortir
            </button>
          </form>
        </div>
      </div>
      {children}
    </div>
  );
}
