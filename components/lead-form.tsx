"use client";

import { useRef, type FormEvent } from "react";
import { recordLead } from "@/lib/actions";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

type Draft = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  company_website: string;
};

function readDraft(form: HTMLFormElement): Draft {
  const data = new FormData(form);
  const value = (key: string) => String(data.get(key) ?? "").trim();
  return {
    name: value("name"),
    email: value("email"),
    phone: value("phone"),
    company: value("company"),
    service: value("service"),
    budget: value("budget"),
    message: value("message"),
    company_website: value("company_website"),
  };
}

function projectText(draft: Draft) {
  const lines = [
    "Bonjour, je souhaite parler d'un projet.",
    "",
    `Nom: ${draft.name}`,
    `Email: ${draft.email}`,
  ];
  if (draft.phone) lines.push(`Téléphone: ${draft.phone}`);
  if (draft.company) lines.push(`Société: ${draft.company}`);
  if (draft.service) lines.push(`Offre: ${draft.service}`);
  if (draft.budget) lines.push(`Budget: ${draft.budget}`);
  lines.push("", "Projet:", draft.message);
  return lines.join("\n");
}

function whatsappUrl(text: string) {
  const phone = site.phone.replace(/\D/g, "");
  const capped = text.length > 1200 ? `${text.slice(0, 1199)}…` : text;
  return `https://wa.me/${phone}?text=${encodeURIComponent(capped)}`;
}

function mailtoUrl(draft: Draft, text: string) {
  const subject = `Projet Byte Force — ${draft.name}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}

export function LeadForm() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const draftRef = useRef<Draft | null>(null);

  function openChoice(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const next = readDraft(form);
    if (next.company_website) return;
    draftRef.current = next;
    dialogRef.current?.showModal();
  }

  function choose(channel: "email" | "whatsapp") {
    const draft = draftRef.current;
    if (!draft) return;
    const text = projectText(draft);
    void recordLead(draft).catch(() => {
      // The message still opens in email or WhatsApp if the copy could not be stored.
    });
    const url = channel === "whatsapp" ? whatsappUrl(text) : mailtoUrl(draft, text);
    if (channel === "whatsapp") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
    dialogRef.current?.close();
  }

  return (
    <>
      <form onSubmit={openChoice} className="grid gap-8">
        <div className="grid gap-8 md:grid-cols-2">
          <label className="grid gap-1 text-sm">
            Nom
            <input name="name" required autoComplete="name" className="field" />
          </label>
          <label className="grid gap-1 text-sm">
            Email
            <input name="email" type="email" required autoComplete="email" className="field" />
          </label>
          <label className="grid gap-1 text-sm">
            Téléphone
            <input name="phone" autoComplete="tel" className="field" />
          </label>
          <label className="grid gap-1 text-sm">
            Société
            <input name="company" autoComplete="organization" className="field" />
          </label>
        </div>
        <label className="grid gap-1 text-sm">
          Offre
          <select name="service" className="field" defaultValue="">
            <option value="">Choisir</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          Budget
          <select name="budget" className="field" defaultValue="">
            <option value="">Pas encore défini</option>
            <option>Un correctif ou un audit</option>
            <option>Un nouveau produit</option>
            <option>Un suivi après livraison</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          Projet
          <textarea name="message" required rows={4} className="field" />
        </label>
        <label className="absolute -left-[9999px]" aria-hidden="true">
          Site
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
        <button type="submit" className="justify-self-start border-b border-ink pb-1 text-left">
          Envoyer la demande
        </button>
      </form>
      <dialog
        ref={dialogRef}
        aria-labelledby="send-choice-title"
        className="m-auto w-[min(28rem,calc(100%-2rem))] border border-line bg-paper p-8 text-ink backdrop:bg-ink/40"
      >
        <h2 id="send-choice-title" className="text-2xl">
          Comment envoyer la demande ?
        </h2>
        <p className="mt-3 text-sm text-mute">
          Le message reprend le projet que vous venez d&apos;écrire. WhatsApp l&apos;ouvre déjà rédigé, prêt à envoyer.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" className="border border-ink px-4 py-3 text-sm" onClick={() => choose("email")}>
            Email
          </button>
          <button type="button" className="bg-ink px-4 py-3 text-sm text-paper" onClick={() => choose("whatsapp")}>
            WhatsApp
          </button>
          <button type="button" className="px-4 py-3 text-sm text-mute" onClick={() => dialogRef.current?.close()}>
            Annuler
          </button>
        </div>
      </dialog>
    </>
  );
}
