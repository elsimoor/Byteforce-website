"use client";

import { Avant, Couches, Dns, Hote, Langue, Reponse, Roles } from "@/components/illustrations/systems";
import { Cache, Certificat, Chemin, Cle, Depot, Ecran, Theme } from "@/components/illustrations/routes";
import { Delai, Envoi, Etapes, Nom, Perimetre, Remise } from "@/components/illustrations/work";

const pieces = [
  { id: "chemin", name: "Deux chemins", View: Chemin },
  { id: "depot", name: "Branche ou domaine", View: Depot },
  { id: "ecran", name: "Page ou produit", View: Ecran },
  { id: "cle", name: "Qui garde la clé", View: Cle },
  { id: "theme", name: "Thème ou parcours", View: Theme },
  { id: "certificat", name: "Quel certificat", View: Certificat },
  { id: "cache", name: "Cache ou origine", View: Cache },
  { id: "hote", name: "Quel hôte", View: Hote },
  { id: "langue", name: "Une adresse, deux textes", View: Langue },
  { id: "roles", name: "Trois portes", View: Roles },
  { id: "reponse", name: "Code HTTP", View: Reponse },
  { id: "dns", name: "Un enregistrement", View: Dns },
  { id: "couches", name: "Trois couches", View: Couches },
  { id: "avant", name: "Avant le produit", View: Avant },
  { id: "etapes", name: "Cinq temps", View: Etapes },
  { id: "remise", name: "Ce qui est remis", View: Remise },
  { id: "nom", name: "Ce qu'on peut nommer", View: Nom },
  { id: "envoi", name: "Avant l'envoi", View: Envoi },
  { id: "delai", name: "Le message", View: Delai },
  { id: "perimetre", name: "Ce qui change le travail", View: Perimetre },
] as const;

export function IllustrationBoard() {
  return (
    <>
      <ol className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2">
        {pieces.map((item, index) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="border-b border-ink">
              {String(index + 1).padStart(2, "0")} {item.name}
            </a>
          </li>
        ))}
      </ol>
      <div className="mt-16 space-y-20">
        {pieces.map((item, index) => (
          <section key={item.id} id={item.id} className="border-t border-line pt-10">
            <p className="text-sm text-mute">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="display mt-2 max-w-[16ch] text-4xl">{item.name}</h2>
            <item.View />
          </section>
        ))}
      </div>
    </>
  );
}
