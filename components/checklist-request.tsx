"use client";

import { useState, type FormEvent } from "react";
import { recordLead } from "@/lib/actions";

export function ChecklistRequest() {
  const [state, setState] = useState<"idle" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company_website") ?? "").trim()) {
      setState("sent");
      return;
    }
    const email = String(data.get("email") ?? "").trim();
    const name = email.split("@")[0]?.replace(/[._-]+/g, " ").slice(0, 80) || "Liste PDF";
    const saved = await recordLead({
      name,
      email,
      phone: "",
      company: "",
      service: "Liste de lancement",
      budget: "",
      message:
        "Demande de la liste PDF : lancement d'un produit. À envoyer plus tard, le fichier n'est pas joint automatiquement.",
      company_website: "",
      country: "Maroc",
      city: "Casablanca",
      pageUrl: "https://byteforce.ma/checklists/lancer-le-produit",
    });
    setState(saved.ok ? "sent" : "error");
  }

  if (state === "sent") {
    return (
      <p className="text-lg leading-relaxed" role="status">
        Email enregistré. La liste PDF part ensuite, elle n&apos;est pas téléchargée depuis cette page.
      </p>
    );
  }

  return (
    <form method="post" onSubmit={onSubmit} className="max-w-md space-y-4">
      <p className="text-lg leading-relaxed">
        Laissez un email pour recevoir la liste complète en PDF. Elle est ajoutée au suivi, puis envoyée plus tard.
      </p>
      <label className="block text-sm">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full border border-ink bg-paper px-3 py-3 text-ink"
        />
      </label>
      <input name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button type="submit" className="border border-ink bg-ink px-5 py-3 text-sm text-paper">
        Recevoir la liste PDF
      </button>
      {state === "error" ? (
        <p className="text-sm" role="alert">
          L&apos;email n&apos;a pas été enregistré. Écrire à contact@byteforce.ma.
        </p>
      ) : null}
    </form>
  );
}
