"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import posthog from "posthog-js";
import { recordLead } from "@/lib/actions";
import { services } from "@/lib/content";
import { budgets, contactDraft, OU_EN_EST_KEY, readStored } from "@/lib/ou-en-est";
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

const posthogEnabled = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST,
);

function whatsappUrl(text: string) {
  const phone = site.phone.replace(/\D/g, "");
  const capped = text.length > 1200 ? `${text.slice(0, 1199)}…` : text;
  return `https://wa.me/${phone}?text=${encodeURIComponent(capped)}`;
}

export function LeadForm({
  city = "Casablanca",
  country = "Maroc",
  initial,
}: {
  city?: string;
  country?: string;
  initial?: { service?: string; budget?: string; message?: string };
}) {
  const knownServices = new Set(services.map((service) => service.title));
  const [service, setService] = useState(initial?.service && knownServices.has(initial.service) ? initial.service : "");
  const [budget, setBudget] = useState(initial?.budget && budgets.includes(initial.budget as (typeof budgets)[number]) ? initial.budget : "");
  const [message, setMessage] = useState(initial?.message ?? "");
  const [fromList, setFromList] = useState(Boolean(initial?.service || initial?.message));
  const dialogRef = useRef<HTMLDialogElement>(null);
  const draftRef = useRef<Draft | null>(null);
  const tokenRef = useRef("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"choice" | "saved">("choice");

  function setToken(token: string) {
    tokenRef.current = token;
    setTurnstileToken(token);
  }

  useEffect(() => {
    if (initial?.service || initial?.message) return;
    const stored = readStored(window.localStorage.getItem(OU_EN_EST_KEY));
    if (!stored || stored.step < 5) return;
    const draft = contactDraft(stored.answers);
    if (knownServices.has(draft.service)) setService(draft.service);
    if (budgets.includes(draft.budget)) setBudget(draft.budget);
    if (draft.message) setMessage(draft.message);
    setFromList(true);
  }, [initial?.service, initial?.message]);

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

  function choose(channel: "email" | "whatsapp") {
    const draft = draftRef.current;
    const turnstile = tokenRef.current;
    if (!draft || !turnstile || status === "saved") return;
    const lead = { ...draft, city, country, pageUrl: window.location.href, turnstile };
    if (posthogEnabled) posthog.capture("lead_channel_selected", { channel });
    void recordLead(lead);
    if (channel === "whatsapp") {
      window.open(whatsappUrl(projectText(draft)), "_blank", "noopener,noreferrer");
      closeChoice();
      return;
    }
    if (posthogEnabled) {
      posthog.capture("lead_submitted", {
        channel,
        has_service_selected: Boolean(draft.service),
        has_budget_selected: Boolean(draft.budget),
      });
    }
    setStatus("saved");
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
        {fromList ? <p className="text-sm text-on-surface-variant">Ces champs reprennent la liste du projet.</p> : null}
        <label className="grid gap-1 text-sm">
          Offre
          <select name="service" className="field" value={service} onChange={(event) => setService(event.target.value)}>
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
          <select name="budget" className="field" value={budget} onChange={(event) => setBudget(event.target.value)}>
            <option value="">Pas encore défini</option>
            {budgets.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          Projet
          <textarea name="message" required rows={message.length > 180 ? 8 : 4} className="field" value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
        <label className="absolute -left-[9999px]" aria-hidden="true">
          Site
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
        <TurnstileCheck onToken={setToken} />
        <button type="submit" disabled={!turnstileToken} className="btn justify-self-start">
          Envoyer la demande
        </button>
      </form>
      <dialog
        ref={dialogRef}
        aria-labelledby="send-choice-title"
        className="m-auto w-[min(28rem,calc(100%-2rem))] border border-outline-variant bg-surface-container-lowest p-8 text-on-surface backdrop:bg-inverse-surface/40"
        onClose={() => setStatus("choice")}
      >
        <h2 id="send-choice-title" className="font-headline text-2xl font-bold tracking-tight">
          {status === "saved" ? "On vous répond bientôt." : "Comment envoyer la demande ?"}
        </h2>
        <p className="mt-3 text-sm text-on-surface-variant">
          {status === "saved"
            ? "La réponse part sous un jour ouvré."
            : "L'email envoie la demande. WhatsApp ouvre le message déjà rédigé."}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {status === "saved" ? (
            <button type="button" className="btn" onClick={closeChoice}>
              Fermer
            </button>
          ) : (
            <>
              <button type="button" className="btn" onClick={() => choose("email")}>
                Email
              </button>
              <button type="button" className="border border-outline-variant bg-surface px-4 py-3 text-sm" onClick={() => choose("whatsapp")}>
                WhatsApp
              </button>
              <button type="button" className="px-4 py-3 text-sm text-on-surface-variant" onClick={closeChoice}>
                Annuler
              </button>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
