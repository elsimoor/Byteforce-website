import Image from "next/image";
import Link from "next/link";
import { SiteIndex } from "@/components/site-index";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-low py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image alt="Byte Force" className="h-11 w-11 object-cover" src="/logo.png" width={44} height={44} sizes="44px" />
              <span className="font-headline text-base font-bold tracking-tight text-on-surface">ByteForce</span>
            </Link>
            <p className="max-w-sm text-sm text-on-surface-variant">
              Studio logiciel à Casablanca. Sites, applications et logiciels sur mesure.
            </p>
            <p className="pt-2 font-mono text-xs tracking-wide text-outline">
              Technopark, Bd Dammam, Aïn Chock
              <br />
              20001 Casablanca
            </p>
          </div>
          <div>
            <h2 className="mb-4 font-headline text-xs font-bold tracking-wider text-on-surface uppercase">Studio</h2>
            <ul className="space-y-2.5 text-sm">
              <li className="leading-none">
                <Link href="/realisations" className="text-on-surface-variant transition-colors hover:text-on-surface">
                  Travaux
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/services" className="text-on-surface-variant transition-colors hover:text-on-surface">
                  Services
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/a-propos" className="text-on-surface-variant transition-colors hover:text-on-surface">
                  Qui sommes-nous
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/insights" className="text-on-surface-variant transition-colors hover:text-on-surface">
                  Décisions
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/audit" className="text-on-surface-variant transition-colors hover:text-on-surface">
                  Audit gratuit
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/ai" className="text-on-surface-variant transition-colors hover:text-on-surface">
                  Pour les agents
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-headline text-xs font-bold tracking-wider text-on-surface uppercase">Contact</h2>
            <ul className="space-y-2.5 text-sm">
              <li className="leading-none">
                <Link href="/contact" className="text-on-surface-variant transition-colors hover:text-on-surface">
                  Parler d&apos;un projet
                </Link>
              </li>
              <li className="leading-none">
                <a
                  href={`mailto:${site.email}`}
                  className="text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  {site.email}
                </a>
              </li>
              <li className="leading-none">
                <a
                  href="https://wa.me/212666650696"
                  className="text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  WhatsApp
                </a>
              </li>
              {process.env.NODE_ENV === "development" ? (
                <li className="leading-none">
                  <Link href="/dashboard/login" className="text-on-surface-variant transition-colors hover:text-on-surface">
                    Client Portal
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
        <SiteIndex />
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-on-surface-variant">
          {site.description} Le bureau est au Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. On répond du
          lundi au vendredi, de 9h à 19h.
        </p>
        <p className="financial-disclaimer mt-4 max-w-3xl text-xs text-on-surface-variant">
          This page is not financial advice. Aucun prix n&apos;est publié sur ce site.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(site.url)}`}>
            Partager sur Facebook
          </a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(site.url)}`}>
            Partager sur LinkedIn
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(site.url)}`}>Partager sur X</a>
          <Link href="/how-we-write">Comment les pages sont écrites</Link>
          <time dateTime="2026-10-09">Mis à jour le 9 octobre 2026</time>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-outline-variant/20 pt-8 text-xs text-on-surface-variant sm:flex-row">
          <span>© {new Date().getFullYear()} Byte Force. Tous droits réservés.</span>
          <span className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-on-surface">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-on-surface">
              Politique de confidentialité
            </Link>
            <Link href="/llms.txt" className="hover:text-on-surface">
              llms.txt
            </Link>
            <Link href="/conditions" className="hover:text-on-surface">
              Conditions
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
