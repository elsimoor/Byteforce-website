"use client";

import { useRef, useState, type FormEvent } from "react";
import { recordLead } from "@/lib/actions";
import { services } from "@/lib/content";
import { site } from "@/lib/site";
import { TurnstileCheck } from "@/components/turnstile-check";

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

export function LeadForm({ city = "Casablanca", country = "Maroc" }: { city?: string; country?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const draftRef = useRef<Draft | null>(null);
  const tokenRef = useRef("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"choice" | "saving" | "saved" | "error">("choice");

  function setToken(token: string) {
    tokenRef.current = token;
    setTurnstileToken(token);
  }

  function closeChoice() {
    dialogRef.current?.close();
    setStatus("choice");
  }

  function openChoice(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const next = readDraft(form);
    if (next.company_website) return;
    if (!tokenRef.current) return;
    draftRef.current = next;
    setStatus("choice");
    dialogRef.current?.showModal();
  }

  async function choose(channel: "email" | "whatsapp") {
    const draft = draftRef.current;
    const turnstile = tokenRef.current;
    if (!draft || !turnstile || status === "saving") return;
    const lead = { ...draft, city, country, pageUrl: window.location.href, turnstile };
    if (channel === "whatsapp") {
      void recordLead(lead);
      window.open(whatsappUrl(projectText(draft)), "_blank", "noopener,noreferrer");
      closeChoice();
      return;
    }
    setStatus("saving");
    try {
      const result = await recordLead(lead);
      setStatus(result?.ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <form method="post" onSubmit={openChoice} className="grid gap-8">
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
        <TurnstileCheck onToken={setToken} />
        <button type="submit" disabled={!turnstileToken} className="justify-self-start border-b border-ink pb-1 text-left disabled:opacity-40">
          Envoyer la demande
        </button>
      </form>
      <dialog
        ref={dialogRef}
        aria-labelledby="send-choice-title"
        className="m-auto w-[min(28rem,calc(100%-2rem))] border border-line bg-paper p-8 text-ink backdrop:bg-ink/40"
        onClose={() => setStatus("choice")}
      >
        <h2 id="send-choice-title" className="text-2xl">
          {status === "saved" ? "Demande enregistrée." : "Comment envoyer la demande ?"}
        </h2>
        <p className="mt-3 text-sm text-mute">
          {status === "saved"
            ? "Elle est dans le CRM. On revient vers vous."
            : status === "error"
              ? "L'enregistrement dans le CRM a échoué. Réessayez."
              : "Email enregistre la demande dans le CRM. WhatsApp ouvre le message déjà rédigé."}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {status === "saved" ? (
            <button type="button" className="border border-ink px-4 py-3 text-sm" onClick={closeChoice}>
              Fermer
            </button>
          ) : (
            <>
              <button
                type="button"
                className="border border-ink px-4 py-3 text-sm disabled:opacity-50"
                disabled={status === "saving"}
                onClick={() => choose("email")}
              >
                {status === "saving" ? "Enregistrement…" : "Email"}
              </button>
              <button
                type="button"
                className="bg-ink px-4 py-3 text-sm text-paper disabled:opacity-50"
                disabled={status === "saving"}
                onClick={() => choose("whatsapp")}
              >
                WhatsApp
              </button>
              <button type="button" className="px-4 py-3 text-sm text-mute" onClick={closeChoice}>
                Annuler
              </button>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
