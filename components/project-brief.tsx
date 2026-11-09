"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import { TurnstileCheck } from "@/components/turnstile-check";
import { recordLead } from "@/lib/actions";
import { writeLeadReceipt } from "@/lib/lead-receipt";
import { site } from "@/lib/site";

const needs = [
  { id: "Site web", line: "Une page que le visiteur comprend avant d'écrire." },
  { id: "Application mobile", line: "Un geste dans la poche, sur Android ou iOS." },
  { id: "Plateforme", line: "Plusieurs rôles, un même outil." },
  { id: "Application Windows", line: "Un logiciel installé sur le poste." },
  { id: "Boutique en ligne", line: "Un catalogue, un prix, une commande." },
  { id: "Logiciel sur mesure", line: "Le fichier ou l'outil actuel ne suffit plus." },
] as const;

type Need = (typeof needs)[number]["id"];

const steps = [
  { n: "01", label: "Le besoin" },
  { n: "02", label: "Le projet" },
  { n: "03", label: "Le contact" },
] as const;

const posthogEnabled = Boolean(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST);

function projectMessage(input: { need: string; understand: string; exists: string; place: string }) {
  const lines = [`Besoin: ${input.need}`, "", "Ce que le visiteur doit comprendre:", input.understand];
  if (input.exists) lines.push("", "Déjà en place:", input.exists);
  if (input.place) lines.push("", "Ville du projet:", input.place);
  return lines.join("\n");
}

function whatsappUrl(text: string) {
  const phone = site.phone.replace(/\D/g, "");
  const capped = text.length > 1200 ? `${text.slice(0, 1199)}…` : text;
  return `https://wa.me/${phone}?text=${encodeURIComponent(capped)}`;
}

export function ProjectBrief() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [need, setNeed] = useState<Need | "">("");
  const [understand, setUnderstand] = useState("");
  const [exists, setExists] = useState("");
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"choice" | "saving" | "failed">("choice");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const tokenRef = useRef("");

  function setToken(token: string) {
    tokenRef.current = token;
    setTurnstileToken(token);
  }

  function go(next: number) {
    setStep(next);
    document.getElementById("etapes")?.scrollIntoView({ block: "start" });
  }

  function openChoice(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity() || !need || !tokenRef.current) return;
    if (website.trim()) return;
    setStatus("choice");
    dialogRef.current?.showModal();
  }

  async function choose(channel: "email" | "whatsapp") {
    const turnstile = tokenRef.current;
    if (!need || !turnstile || status === "saving") return;
    const message = projectMessage({ need, understand, exists, place });
    const draft = { name, email, phone, company, service: need, budget: "", message, company_website: website };
    if (posthogEnabled) posthog.capture("lead_channel_selected", { channel, source: "votre-projet" });
    if (channel === "whatsapp") {
      void recordLead({ ...draft, country: "Maroc", city: "Casablanca", pageUrl: window.location.href, turnstile });
      window.open(whatsappUrl(`Bonjour, je souhaite un devis.\n\n${message}\n\n${name}\n${email}`), "_blank", "noopener,noreferrer");
      dialogRef.current?.close();
      return;
    }
    setStatus("saving");
    try {
      const result = await recordLead({ ...draft, country: "Maroc", city: "Casablanca", pageUrl: window.location.href, turnstile });
      if (!result?.ok) {
        setStatus("failed");
        return;
      }
    } catch {
      setStatus("failed");
      return;
    }
    if (posthogEnabled) posthog.capture("lead_submitted", { channel, source: "votre-projet", service: need });
    writeLeadReceipt(draft);
    router.push("/contact/merci");
  }

  return (
    <div id="etapes" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-[1264px] px-5 pt-10 sm:px-8 lg:px-12">
        <p className="sr-only" aria-live="polite">
          Étape {step + 1} sur 3, {steps[step].label}
        </p>
        <ol className="flex flex-col md:flex-row">
          {steps.map((item, index) => (
            <li key={item.n} className="flex min-w-0 flex-1 gap-4 md:flex-col md:gap-3">
              <span className="flex w-3.5 shrink-0 flex-col items-center md:w-auto md:flex-row">
                <span className={`mt-1.5 h-3.5 w-3.5 rounded-full md:mt-0 ${index === step ? "bg-primary" : index < step ? "bg-[#0A0D2E]" : "border-2 border-[#8E94BE] bg-transparent"}`} />
                <span className={`w-0.5 flex-1 bg-[#C9CEEF] md:h-0.5 md:w-auto md:flex-1 ${index === steps.length - 1 ? "hidden" : ""}`} />
              </span>
              <span className="min-w-0 pb-5 md:pb-0">
                <span className="block font-mono text-[11px] tracking-[0.08em] text-[#555B80] uppercase">{item.n}</span>
                <span className={`block text-lg font-bold ${index === step ? "text-primary" : ""}`}>{item.label}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      {step === 0 ? (
        <form
          className="mx-auto flex w-full max-w-[1264px] flex-col gap-8 px-5 py-8 sm:px-8 lg:px-12 lg:py-14"
          onSubmit={(event) => {
            event.preventDefault();
            const picked = String(new FormData(event.currentTarget).get("need") ?? "");
            if (!needs.some((item) => item.id === picked)) return;
            setNeed(picked as Need);
            go(1);
          }}
        >
          <div>
            <p className="font-mono text-xs tracking-[0.1em] text-[#555B80] uppercase">Étape 1</p>
            <h2 className="mt-3 font-headline text-[clamp(2.6rem,6vw,5.25rem)] leading-[0.92] font-extrabold tracking-[-0.05em]">Le besoin</h2>
          </div>
          <fieldset className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <legend className="sr-only">Quel est le besoin</legend>
            {needs.map((item) => {
              const on = need === item.id;
              return (
                <label
                  key={item.id}
                  className={`flex min-h-28 cursor-pointer flex-col justify-between gap-3 rounded-[22px] border-2 p-6 ${on ? "border-[#0A0D2E] bg-[#0A0D2E] text-white" : "border-[#DADFF5] bg-white text-[#0A0D2E]"}`}
                >
                  <input className="sr-only" type="radio" name="need" value={item.id} checked={on} onChange={() => setNeed(item.id)} required />
                  <span className="font-headline text-3xl leading-none font-extrabold tracking-[-0.04em]">{item.id}</span>
                  <span className={`text-base leading-snug ${on ? "text-[#D5D9FF]" : "text-[#2A2E55]"}`}>{item.line}</span>
                </label>
              );
            })}
          </fieldset>
          <button type="submit" className="inline-flex min-h-12 w-fit items-center rounded-md bg-[#0A0D2E] px-7 text-[17px] font-bold text-white">
            Le projet →
          </button>
        </form>
      ) : null}

      {step === 1 ? (
        <form
          className="mx-auto flex w-full max-w-[1264px] flex-col gap-8 px-5 py-8 sm:px-8 lg:px-12 lg:py-14"
          onSubmit={(event) => {
            event.preventDefault();
            if (!event.currentTarget.reportValidity()) return;
            go(2);
          }}
        >
          <div>
            <p className="font-mono text-xs tracking-[0.1em] text-[#555B80] uppercase">Étape 2 · {need}</p>
            <h2 className="mt-3 font-headline text-[clamp(2.6rem,6vw,5.25rem)] leading-[0.92] font-extrabold tracking-[-0.05em]">Le projet</h2>
          </div>
          <label className="grid max-w-3xl gap-2">
            <span className="font-mono text-[11px] tracking-[0.08em] text-[#555B80] uppercase">Ce que le visiteur doit comprendre</span>
            <textarea
              required
              minLength={12}
              rows={4}
              value={understand}
              onChange={(event) => setUnderstand(event.target.value)}
              className="field min-h-32 border-2 border-[#0A0D2E] text-base"
            />
          </label>
          <div className="grid max-w-3xl gap-6 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="font-mono text-[11px] tracking-[0.08em] text-[#555B80] uppercase">Déjà en place</span>
              <input value={exists} onChange={(event) => setExists(event.target.value)} placeholder="Un site, un fichier, rien" className="field border-2 border-[#0A0D2E] text-base" />
            </label>
            <label className="grid gap-2">
              <span className="font-mono text-[11px] tracking-[0.08em] text-[#555B80] uppercase">Ville</span>
              <input value={place} onChange={(event) => setPlace(event.target.value)} autoComplete="address-level2" className="field border-2 border-[#0A0D2E] text-base" />
            </label>
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="submit" className="inline-flex min-h-12 items-center rounded-md bg-[#0A0D2E] px-7 text-[17px] font-bold text-white">
              Le contact →
            </button>
            <button type="button" onClick={() => go(0)} className="inline-flex min-h-12 items-center px-3 text-[15px] font-semibold underline decoration-[#0A0D2E]/40 underline-offset-[5px]">
              Revenir au besoin
            </button>
          </div>
        </form>
      ) : null}

      {step === 2 && need ? (
        <form className="mx-auto flex w-full max-w-[1264px] flex-col gap-8 px-5 py-8 sm:px-8 lg:px-12 lg:py-14" onSubmit={openChoice}>
          <div>
            <p className="font-mono text-xs tracking-[0.1em] text-[#555B80] uppercase">Étape 3</p>
            <h2 className="mt-3 font-headline text-[clamp(2.6rem,6vw,5.25rem)] leading-[0.92] font-extrabold tracking-[-0.05em]">Le contact</h2>
            <p className="mt-4 max-w-[34em] text-lg text-[#2A2E55]">Le besoin et le projet sont déjà écrits. Il reste qui répond.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[20px] border border-[#DADFF5] bg-white p-7">
              <p className="font-mono text-xs tracking-[0.1em] text-primary uppercase">Déjà rempli</p>
              <dl className="mt-5 flex flex-col gap-4">
                <div>
                  <dt className="font-mono text-[11px] tracking-[0.08em] text-[#555B80] uppercase">Besoin</dt>
                  <dd className="text-xl font-semibold">{need}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] tracking-[0.08em] text-[#555B80] uppercase">Le visiteur doit comprendre</dt>
                  <dd className="text-base leading-relaxed text-[#2A2E55]">{understand}</dd>
                </div>
                {exists ? (
                  <div>
                    <dt className="font-mono text-[11px] tracking-[0.08em] text-[#555B80] uppercase">Déjà en place</dt>
                    <dd className="text-base">{exists}</dd>
                  </div>
                ) : null}
                {place ? (
                  <div>
                    <dt className="font-mono text-[11px] tracking-[0.08em] text-[#555B80] uppercase">Ville</dt>
                    <dd className="text-base">{place}</dd>
                  </div>
                ) : null}
              </dl>
              <button type="button" onClick={() => go(1)} className="mt-6 text-[15px] font-semibold text-primary underline decoration-primary/40 underline-offset-[5px]">
                Modifier le projet
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <label className="grid gap-2">
                <span className="font-mono text-[11px] tracking-[0.08em] text-[#555B80] uppercase">Nom</span>
                <input name="name" required autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} className="field border-2 border-[#0A0D2E] text-base" />
              </label>
              <label className="grid gap-2">
                <span className="font-mono text-[11px] tracking-[0.08em] text-[#555B80] uppercase">Email</span>
                <input name="email" type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} className="field border-2 border-[#0A0D2E] text-base" />
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-mono text-[11px] tracking-[0.08em] text-[#555B80] uppercase">Téléphone</span>
                  <input name="phone" autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} className="field border-2 border-[#0A0D2E] text-base" />
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-[11px] tracking-[0.08em] text-[#555B80] uppercase">Société</span>
                  <input name="company" autoComplete="organization" value={company} onChange={(event) => setCompany(event.target.value)} className="field border-2 border-[#0A0D2E] text-base" />
                </label>
              </div>
              <label className="absolute -left-[9999px]" aria-hidden="true">
                Site
                <input tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
              </label>
              <TurnstileCheck onToken={setToken} />
              <button type="submit" disabled={!turnstileToken} className="inline-flex min-h-12 w-fit items-center rounded-md bg-primary px-7 text-[17px] font-bold text-white disabled:opacity-40">
                Envoyer la demande
              </button>
            </div>
          </div>
        </form>
      ) : null}

      <dialog
        ref={dialogRef}
        aria-labelledby="brief-send-title"
        className="m-auto w-[min(32rem,calc(100%-2rem))] rounded-[20px] border border-[#DADFF5] bg-white p-8 text-[#0A0D2E] backdrop:bg-[#070A2B]/50"
        onCancel={(event) => {
          if (status === "saving") event.preventDefault();
        }}
        onClose={() => setStatus("choice")}
      >
        <h2 id="brief-send-title" className="font-headline text-3xl font-extrabold tracking-[-0.04em]">
          Comment envoyer ?
        </h2>
        <p className="mt-3 text-base text-[#2A2E55]">
          {status === "failed"
            ? "L'envoi n'a pas abouti. Réessayez, ou ouvrez WhatsApp."
            : status === "saving"
              ? "Envoi de la demande."
              : "L'email envoie la fiche. WhatsApp ouvre le même texte."}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {status === "saving" ? (
            <button type="button" className="inline-flex min-h-12 items-center rounded-md bg-[#0A0D2E] px-6 font-bold text-white" disabled>
              Envoi…
            </button>
          ) : (
            <>
              <button type="button" className="inline-flex min-h-12 items-center rounded-md bg-[#0A0D2E] px-6 font-bold text-white" onClick={() => choose("email")}>
                Email
              </button>
              <button type="button" className="inline-flex min-h-12 items-center rounded-md border-2 border-[#0A0D2E] px-6 font-semibold" onClick={() => choose("whatsapp")}>
                WhatsApp
              </button>
              <button type="button" className="inline-flex min-h-12 items-center px-3 text-[#555B80]" onClick={() => dialogRef.current?.close()}>
                Annuler
              </button>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
}
