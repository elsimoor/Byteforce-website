"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnswerMark, ChatGptLogo, ClaudeLogo } from "@/components/ou-en-est-marks";
import {
  OU_EN_EST_KEY,
  aiBrief,
  checklistFor,
  contactHref,
  emptyAnswers,
  holdChoices,
  linkUrl,
  placeSentence,
  readStored,
  reading,
  resultNotes,
  stepReady,
  toggleHold,
  toggleResult,
  type Answers,
  type Author,
  type Help,
  type Kind,
  type NextStep,
  type Where,
  type Access,
} from "@/lib/ou-en-est";

const steps = ["Le point de départ", "Ce qui tient", "La suite", "La tâche", "La liste"];

function Choice({
  name,
  value,
  checked,
  label,
  mark,
  onChange,
}: {
  name: string;
  value: string;
  checked: boolean;
  label: string;
  mark: string;
  onChange: () => void;
}) {
  return (
    <label
      className={
        checked
          ? "flex min-h-16 cursor-pointer items-center gap-4 border-b border-primary bg-primary-fixed px-3 text-primary"
          : "flex min-h-16 cursor-pointer items-center gap-4 border-b border-outline-variant px-3 text-on-surface"
      }
    >
      <input className="sr-only" type={name === "holds" ? "checkbox" : "radio"} name={name} value={value} checked={checked} onChange={onChange} />
      <AnswerMark id={mark} />
      <span className={checked ? "h-3 w-3 shrink-0 bg-primary" : "h-3 w-3 shrink-0 border border-outline"} />
      <span className="text-base">{label}</span>
    </label>
  );
}

export function OuEnEst() {
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [step, setStep] = useState(1);
  const [ready, setReady] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const stored = readStored(window.localStorage.getItem(OU_EN_EST_KEY));
    if (stored) {
      setAnswers(stored.answers);
      setStep(stored.step);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(OU_EN_EST_KEY, JSON.stringify({ answers, step }));
    setSaved(true);
  }, [answers, step, ready]);

  useEffect(() => {
    if (!ready) return;
    window.scrollTo(0, 0);
  }, [step, ready]);

  function patch(partial: Partial<Answers>) {
    setAnswers((current) => ({ ...current, ...partial }));
  }

  const readyStep = stepReady(step, answers);
  const items = checklistFor(answers);
  const notes = resultNotes(answers);
  const facts = reading(answers);
  const openCount = items.filter((item) => !item.done).length;

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(aiBrief(answers));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (!ready) return <div className="min-h-[50vh]" />;

  return (
    <article>
      <div className="sticky top-20 z-40 border-b border-outline-variant/40 bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3 md:px-12">
          <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-primary uppercase">{steps[step - 1]}</p>
          <p className="font-mono text-[11px] text-outline">
            {step} / {steps.length}
            {saved ? <span className="hidden sm:inline"> · enregistré ici</span> : null}
          </p>
        </div>
        <div
          className="h-1 bg-outline-variant/50"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-valuenow={step}
          aria-label="Avancement"
        >
          <div className="h-full bg-primary motion-safe:transition-[width]" style={{ width: `${(step / steps.length) * 100}%` }} />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-16">
        {step === 1 ? (
          <>
            <h1 className="display max-w-[14ch] text-[clamp(2.6rem,6vw,4.6rem)]">Où en est le travail.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              Cinq écrans. Les réponses restent sur cet appareil. À la fin, la liste dit ce qu&apos;il reste, et le message de contact est déjà écrit.
            </p>
            <fieldset className="mt-12 max-w-xl" disabled={!ready}>
              <legend className="font-headline text-2xl font-bold tracking-tight">Qu&apos;est-ce qui existe aujourd&apos;hui ?</legend>
              <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-outline uppercase">Un seul choix</p>
              <div className="mt-4">
                {(
                  [
                    ["rien", "Rien n'est construit"],
                    ["ecran", "Un écran tourne chez moi"],
                    ["en-ligne", "C'est en ligne, quelque chose bloque"],
                    ["suivi", "C'est en ligne, il faut le garder"],
                  ] as [Where, string][]
                ).map(([value, label]) => (
                  <Choice key={value} name="where" value={value} mark={`where-${value}`} label={label} checked={answers.where === value} onChange={() => patch({ where: value })} />
                ))}
              </div>
            </fieldset>
            <fieldset className="mt-12 max-w-xl">
              <legend className="font-headline text-2xl font-bold tracking-tight">C&apos;est plutôt quoi ?</legend>
              <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-outline uppercase">Un seul choix</p>
              <div className="mt-4">
                {(
                  [
                    ["site", "Un site"],
                    ["mobile", "Une application mobile"],
                    ["logiciel", "Un logiciel pour l'entreprise"],
                    ["inconnu", "Je ne sais pas encore"],
                  ] as [Kind, string][]
                ).map(([value, label]) => (
                  <Choice key={value} name="kind" value={value} mark={`kind-${value}`} label={label} checked={answers.kind === value} onChange={() => patch({ kind: value })} />
                ))}
              </div>
            </fieldset>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <h1 className="display max-w-[16ch] text-[clamp(2.6rem,6vw,4.6rem)]">Ce qui tient déjà.</h1>
            <fieldset className="mt-12 max-w-xl">
              <legend className="font-headline text-2xl font-bold tracking-tight">Quels points sont déjà vrais ?</legend>
              <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-outline uppercase">Plusieurs choix</p>
              <div className="mt-4">
                {holdChoices.map((choice) => (
                  <Choice
                    key={choice.id}
                    name="holds"
                    value={choice.id}
                    mark={choice.id}
                    label={choice.label}
                    checked={answers.holds.includes(choice.id)}
                    onChange={() => patch({ holds: toggleHold(answers.holds, choice.id) })}
                  />
                ))}
              </div>
            </fieldset>
            <fieldset className="mt-12 max-w-xl">
              <legend className="font-headline text-2xl font-bold tracking-tight">Qui a écrit le code ?</legend>
              <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-outline uppercase">Un seul choix</p>
              <div className="mt-4">
                {(
                  [
                    ["moi", "Moi, au feeling"],
                    ["ia", "Une intelligence artificielle (Claude, ChatGPT, Gemini)"],
                    ["autre", "Une autre équipe"],
                    ["byteforce", "Byte Force"],
                    ["inconnu", "Je ne sais pas"],
                  ] as [Author, string][]
                ).map(([value, label]) => (
                  <Choice key={value} name="author" value={value} mark={`author-${value}`} label={label} checked={answers.author === value} onChange={() => patch({ author: value })} />
                ))}
              </div>
            </fieldset>
          </>
        ) : null}

        {step === 3 ? (
          <>
            <h1 className="display max-w-[14ch] text-[clamp(2.6rem,6vw,4.6rem)]">Ce qui doit avancer.</h1>
            <fieldset className="mt-12 max-w-xl">
              <legend className="font-headline text-2xl font-bold tracking-tight">Quelle est la suite ?</legend>
              <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-outline uppercase">Un seul choix</p>
              <div className="mt-4">
                {(
                  [
                    ["finir", "Finir ce qui tourne déjà"],
                    ["corriger", "Corriger ce qui est en ligne"],
                    ["garder", "Garder et surveiller"],
                    ["ecrire", "Écrire le premier geste"],
                    ["inconnu", "Je ne sais pas par où continuer"],
                  ] as [NextStep, string][]
                ).map(([value, label]) => (
                  <Choice key={value} name="next" value={value} mark={`next-${value}`} label={label} checked={answers.next === value} onChange={() => patch({ next: value })} />
                ))}
              </div>
            </fieldset>
            <fieldset className="mt-12 max-w-xl">
              <legend className="font-headline text-2xl font-bold tracking-tight">Avez-vous de quoi montrer le travail ?</legend>
              <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-outline uppercase">Un seul choix</p>
              <div className="mt-4">
                {(
                  [
                    ["lien", "J'ai un lien"],
                    ["depot", "J'ai le dépôt"],
                    ["aucun", "Je n'ai ni lien ni dépôt"],
                  ] as [Access, string][]
                ).map(([value, label]) => (
                  <Choice key={value} name="access" value={value} mark={`access-${value}`} label={label} checked={answers.access === value} onChange={() => patch({ access: value })} />
                ))}
              </div>
              {answers.access === "lien" ? (
                <label className="mt-6 block">
                  <span className="text-sm text-on-surface-variant">Adresse du lien</span>
                  <input
                    type="url"
                    inputMode="url"
                    autoComplete="url"
                    autoFocus
                    value={answers.link}
                    placeholder="https://"
                    onChange={(event) => patch({ link: event.target.value })}
                    className="field mt-2"
                  />
                </label>
              ) : null}
            </fieldset>
          </>
        ) : null}

        {step === 4 ? (
          <>
            <h1 className="display max-w-[14ch] text-[clamp(2.6rem,6vw,4.6rem)]">La tâche, en une phrase.</h1>
            <label className="mt-12 block max-w-xl">
              <span className="font-headline text-2xl font-bold tracking-tight">Qu&apos;est-ce qui doit changer ?</span>
              <textarea
                value={answers.task}
                onChange={(event) => patch({ task: event.target.value })}
                rows={4}
                placeholder="Le formulaire n'envoie rien"
                className="field mt-4"
              />
            </label>
            <fieldset className="mt-12 max-w-xl">
              <legend className="font-headline text-2xl font-bold tracking-tight">Si un point n&apos;est pas clair, le bureau le prend ?</legend>
              <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-outline uppercase">Un seul choix</p>
              <div className="mt-4">
                {(
                  [
                    ["oui", "Oui, prenez les points flous"],
                    ["inconnu", "Je ne sais pas quoi faire"],
                    ["non", "Non, je continue seul pour l'instant"],
                  ] as [Help, string][]
                ).map(([value, label]) => (
                  <Choice key={value} name="help" value={value} mark={`help-${value}`} label={label} checked={answers.help === value} onChange={() => patch({ help: value })} />
                ))}
              </div>
            </fieldset>
          </>
        ) : null}

        {step === 5 ? (
          <>
            <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-primary uppercase">Où vous en êtes</p>
            <h1 className="display mt-3 max-w-[12ch] text-[clamp(2.6rem,6vw,4.6rem)]">Ce qu&apos;il reste.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">{placeSentence(answers)}</p>
            <p className="mt-4 max-w-xl leading-relaxed">
              {openCount === 0
                ? "Les cases cochées couvrent la liste. Le bureau peut quand même relire le dépôt."
                : `${openCount} case${openCount > 1 ? "s" : ""} restent ouvertes. Cochez un point quand il devient vrai. Le brief copié suit les cases.`}
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {facts.map((fact) => (
                <li key={fact.id} className="border border-line p-4">
                  <AnswerMark id={fact.id} />
                  <p className="mt-3 font-mono text-[11px] tracking-[0.14em] text-outline uppercase">{fact.kicker}</p>
                  <p className="mt-2 text-lg leading-snug">{fact.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{fact.why}</p>
                </li>
              ))}
            </ul>
            {notes.length > 0 ? (
              <div className="mt-8 max-w-xl space-y-3 text-sm leading-relaxed text-on-surface-variant">
                {notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            ) : null}
            <h2 className="mt-12 font-headline text-2xl font-bold tracking-tight">La liste</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-on-surface-variant">
              Chaque ligne dit ce que le point change. Une case cochée est déjà vraie. Une case vide est encore à faire.
            </p>
            <ul className="mt-6">
              {items.map((item) => (
                <li key={item.id} className="border-t border-outline-variant">
                  <label className="grid cursor-pointer grid-cols-[2.5rem_1.75rem_1fr] items-start gap-4 py-5">
                    <AnswerMark id={item.id} />
                    <input className="sr-only" type="checkbox" checked={item.done} onChange={() => patch(toggleResult(item.id, answers))} />
                    <span
                      className={
                        item.done
                          ? "mt-2 flex h-6 w-6 items-center justify-center border border-ink bg-ink text-paper"
                          : "mt-2 flex h-6 w-6 border border-line"
                      }
                      aria-hidden="true"
                    >
                      {item.done ? (
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 8.5 6.2 12 13 4" />
                        </svg>
                      ) : null}
                    </span>
                    <span>
                      <span className="font-mono text-[11px] tracking-[0.14em] text-outline uppercase">{item.done ? "Déjà vrai" : "Encore ouvert"}</span>
                      <span className={item.done ? "mt-1 block text-lg text-on-surface-variant" : "mt-1 block text-lg"}>{item.label}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-on-surface-variant">{item.detail}</span>
                    </span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="mt-10 border border-line p-5">
              <p className="font-headline text-xl font-bold tracking-tight">Copier pour l&apos;IA</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-on-surface-variant">
                Un clic met le brief dans le presse-papiers. Collez-le dans ChatGPT ou Claude. Le texte reprend les faits et les cases, sans prix et sans chiffre inventé.
              </p>
              <button type="button" className="mt-5 inline-flex min-h-12 items-center gap-4 border border-ink px-4 py-2 text-sm" onClick={copyBrief}>
                <span className="inline-flex items-center gap-2">
                  <ChatGptLogo />
                  ChatGPT
                </span>
                <span className="inline-flex items-center gap-2">
                  <ClaudeLogo />
                  Claude
                </span>
                <span className="font-semibold">{copied ? "Copié" : "Copier"}</span>
              </button>
              <p className="mt-3 text-sm" role="status">
                {copied ? "Le brief est copié. Collez-le dans ChatGPT ou Claude." : ""}
              </p>
            </div>
            <div className="mt-10 flex flex-col items-start gap-4">
              <Link href={contactHref(answers)} className="btn">
                {answers.help === "non" ? "Écrire quand même" : "Confier la suite"}
              </Link>
              <p className="max-w-md text-sm leading-relaxed text-on-surface-variant">
                Le formulaire de contact reprend l&apos;offre, le type de besoin, et cette liste. Réponse sous un jour ouvré. Pas de prix sur le site.
              </p>
            </div>
          </>
        ) : null}

        <div className="mt-12 flex items-center justify-between gap-4">
          {step > 1 ? (
            <button type="button" className="inline-flex min-h-11 items-center px-1 text-sm text-on-surface" onClick={() => setStep((current) => current - 1)}>
              Retour
            </button>
          ) : (
            <span />
          )}
          {step < 5 ? (
            <button type="button" className="btn" disabled={!readyStep} onClick={() => setStep((current) => current + 1)}>
              Continuer
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
