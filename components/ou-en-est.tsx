"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  OU_EN_EST_KEY,
  checklistFor,
  contactHref,
  emptyAnswers,
  holdChoices,
  linkUrl,
  placeSentence,
  readStored,
  resultNotes,
  stepReady,
  toggleHold,
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
  onChange,
}: {
  name: string;
  value: string;
  checked: boolean;
  label: string;
  onChange: () => void;
}) {
  return (
    <label
      className={
        checked
          ? "flex min-h-14 cursor-pointer items-center gap-4 border-b border-primary bg-primary-fixed px-3 text-primary"
          : "flex min-h-14 cursor-pointer items-center gap-4 border-b border-outline-variant px-3 text-on-surface"
      }
    >
      <input className="sr-only" type={name === "holds" ? "checkbox" : "radio"} name={name} value={value} checked={checked} onChange={onChange} />
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
  const openCount = items.filter((item) => !item.done).length;

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
                  <Choice key={value} name="where" value={value} label={label} checked={answers.where === value} onChange={() => patch({ where: value })} />
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
                  <Choice key={value} name="kind" value={value} label={label} checked={answers.kind === value} onChange={() => patch({ kind: value })} />
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
                  <Choice key={value} name="author" value={value} label={label} checked={answers.author === value} onChange={() => patch({ author: value })} />
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
                  <Choice key={value} name="next" value={value} label={label} checked={answers.next === value} onChange={() => patch({ next: value })} />
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
                  <Choice key={value} name="access" value={value} label={label} checked={answers.access === value} onChange={() => patch({ access: value })} />
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
                  <Choice key={value} name="help" value={value} label={label} checked={answers.help === value} onChange={() => patch({ help: value })} />
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
                ? "Les points cochés couvrent la liste. Le bureau peut quand même relire le dépôt."
                : `${openCount} point${openCount > 1 ? "s" : ""} restent ouverts. Ce sont eux qu'il faut continuer.`}
            </p>
            {notes.length > 0 ? (
              <div className="mt-8 max-w-xl space-y-3 text-sm leading-relaxed text-on-surface-variant">
                {notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            ) : null}
            <ol className="mt-10 max-w-xl">
              {items.map((item, index) => (
                <li key={item.id} className="grid grid-cols-[4.5rem_1fr] gap-4 border-t border-outline-variant py-4">
                  <span className={item.done ? "font-mono text-[11px] tracking-[0.14em] text-outline uppercase" : "font-mono text-[11px] font-bold tracking-[0.14em] text-primary uppercase"}>
                    {item.done ? "Fait" : "À faire"}
                  </span>
                  <span className={item.done ? "text-on-surface-variant" : "text-on-surface"}>
                    <span className="mr-3 font-mono text-xs text-outline">{String(index + 1).padStart(2, "0")}</span>
                    {item.label}
                  </span>
                </li>
              ))}
            </ol>
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
