"use client";

import { useState, type MouseEvent } from "react";
import posthog from "posthog-js";
import { recordLead } from "@/lib/actions";
import { site } from "@/lib/site";
import { TurnstileCheck } from "@/components/turnstile-check";

const pdfHref = "/checklists/lancement-produit.pdf";
const posthogEnabled = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST,
);

export function ChecklistRequest() {
  const [state, setState] = useState<"idle" | "saving" | "sent" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState("");

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!turnstileToken) {
      event.preventDefault();
      return;
    }
    const form = event.currentTarget.closest("form");
    if (!form || !form.reportValidity()) {
      event.preventDefault();
      return;
    }
    const data = new FormData(form);
    if (String(data.get("company_website") ?? "").trim()) {
      event.preventDefault();
      setState("sent");
      return;
    }
    const email = String(data.get("email") ?? "").trim();
    const name = email.split("@")[0]?.replace(/[._-]+/g, " ").slice(0, 80) || "Liste PDF";
    setState("saving");
    void recordLead({
      name,
      email,
      phone: "",
      company: "",
      service: "Liste de lancement",
      budget: "",
      message:
        "Demande de la liste PDF : lancement d'un produit. Le fichier s'ouvre après l'email, et la demande reste dans le suivi.",
      company_website: "",
      country: "Maroc",
      city: "Casablanca",
      pageUrl: "https://byteforce.ma/checklists/lancer-le-produit",
      turnstile: turnstileToken,
    })
      .then((saved) => {
        if (saved?.ok && posthogEnabled) posthog.capture("checklist_requested");
        setState(saved?.ok ? "sent" : "error");
      })
      .catch(() => setState("error"));
  }

  return (
    <form
      method="post"
      className="max-w-md space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        event.currentTarget.querySelector<HTMLAnchorElement>("a[download], a[aria-disabled]")?.click();
      }}
    >
      <p className="text-lg leading-relaxed">
        Laissez un email. La liste PDF s&apos;ouvre, et la demande est ajoutée au suivi.
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
      <TurnstileCheck onToken={setTurnstileToken} />
      <a
        href={turnstileToken ? pdfHref : "#pdf"}
        download={turnstileToken ? "liste-lancement-produit.pdf" : undefined}
        onClick={onClick}
        aria-disabled={!turnstileToken}
        className={`inline-block border border-paper bg-paper px-5 py-3 text-sm text-ink ${turnstileToken ? "" : "opacity-40"}`}
      >
        {state === "saving" ? "Enregistrement…" : "Recevoir la liste PDF"}
      </a>
      {state === "sent" ? (
        <p className="text-sm" role="status">
          Email enregistré. La liste est dans le suivi.
        </p>
      ) : null}
      {state === "error" ? (
        <p className="text-sm" role="alert">
          La liste s&apos;ouvre. L&apos;email n&apos;a pas été enregistré : écrire à {site.email}.
        </p>
      ) : null}
    </form>
  );
}
