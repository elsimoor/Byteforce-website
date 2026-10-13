import { services } from "@/lib/content";

export const OU_EN_EST_KEY = "bf-ou-en-est";

export const budgets = ["Un correctif ou un audit", "Un nouveau produit", "Un suivi après livraison"] as const;

export type Where = "rien" | "ecran" | "en-ligne" | "suivi";
export type Kind = "site" | "mobile" | "logiciel" | "inconnu";
export type Author = "moi" | "ia" | "autre" | "byteforce" | "inconnu";
export type NextStep = "finir" | "corriger" | "garder" | "ecrire" | "inconnu";
export type Access = "lien" | "depot" | "aucun";
export type Help = "oui" | "non" | "inconnu";

export type Answers = {
  where: Where | "";
  kind: Kind | "";
  holds: string[];
  author: Author | "";
  next: NextStep | "";
  access: Access | "";
  link: string;
  task: string;
  help: Help | "";
};

export const emptyAnswers: Answers = {
  where: "",
  kind: "",
  holds: [],
  author: "",
  next: "",
  access: "",
  link: "",
  task: "",
  help: "",
};

const whereLabel: Record<Where, string> = {
  rien: "Rien n'est construit",
  ecran: "Un écran tourne déjà",
  "en-ligne": "C'est en ligne, et quelque chose bloque",
  suivi: "C'est en ligne, et il faut le garder",
};

const kindLabel: Record<Kind, string> = {
  site: "Un site",
  mobile: "Une application mobile",
  logiciel: "Un logiciel pour l'entreprise",
  inconnu: "Je ne sais pas encore",
};

const authorLabel: Record<Author, string> = {
  moi: "Moi, au feeling",
  ia: "Une intelligence artificielle (Claude, ChatGPT, Gemini)",
  autre: "Une autre équipe",
  byteforce: "Byte Force",
  inconnu: "Je ne sais pas",
};

const nextLabel: Record<NextStep, string> = {
  finir: "Finir ce qui tourne déjà",
  corriger: "Corriger ce qui est en ligne",
  garder: "Garder et surveiller",
  ecrire: "Écrire le premier geste",
  inconnu: "Je ne sais pas par où continuer",
};

const accessLabel: Record<Access, string> = {
  lien: "J'ai un lien",
  depot: "J'ai le dépôt",
  aucun: "Je n'ai ni lien ni dépôt",
};

export const holdChoices = [
  { id: "comptes", label: "Les comptes et les droits sont clairs" },
  { id: "donnees", label: "Ce qui est saisi reste après fermeture" },
  { id: "cas", label: "Les cas qui cassent ont été essayés" },
  { id: "ligne", label: "Le nom et l'hébergement sont à l'entreprise" },
  { id: "page", label: "La page dit l'offre, et le formulaire part" },
  { id: "depot", label: "Le dépôt est à l'entreprise" },
  { id: "aucun", label: "Aucun de ces points" },
] as const;

const checklist = [
  { id: "geste", label: "Nommer le geste du premier jour" },
  { id: "comptes", label: "Clarifier qui entre, et qui voit quoi" },
  { id: "donnees", label: "Faire rester ce qui est saisi" },
  { id: "cas", label: "Essayer le champ vide, le double envoi, le mauvais rôle" },
  { id: "ligne", label: "Mettre le nom et l'hébergement au nom de l'entreprise" },
  { id: "page", label: "Faire dire l'offre, et faire partir le message" },
  { id: "depot", label: "Remettre le dépôt et les comptes livrés" },
  { id: "suivi", label: "Décider qui surveille après la mise en ligne" },
];

export function serviceTitle(slug: string) {
  return services.find((service) => service.slug === slug)?.title ?? "";
}

export function linkUrl(value: string) {
  const raw = value.trim();
  if (!raw || /\s/.test(raw)) return "";
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const url = new URL(withProtocol);
    if (!url.hostname.includes(".")) return "";
    return url.toString();
  } catch {
    return "";
  }
}

export function toggleHold(current: string[], id: string) {
  if (id === "aucun") return ["aucun"];
  const next = current.filter((item) => item !== "aucun");
  return next.includes(id) ? next.filter((item) => item !== id) : [...next, id];
}

export function stepReady(step: number, answers: Answers) {
  if (step === 1) return Boolean(answers.where && answers.kind);
  if (step === 2) return answers.holds.length > 0 && Boolean(answers.author);
  if (step === 3) return Boolean(answers.next && answers.access && (answers.access !== "lien" || linkUrl(answers.link)));
  if (step === 4) return Boolean(answers.help);
  return true;
}

export function placeSentence(answers: Answers) {
  if (answers.where === "rien") return "Rien n'est construit. La suite commence par nommer le geste.";
  if (answers.where === "ecran") return "Un écran tourne déjà. C'est la moitié. La liste qui suit est l'autre moitié.";
  if (answers.where === "en-ligne") return "C'est en ligne, et un point bloque. On lit avant de corriger.";
  if (answers.where === "suivi") return "C'est en ligne. La suite est de le garder, et de corriger ce qui casse.";
  return "Les réponses ne suffisent pas encore à situer le projet.";
}

export function checklistFor(answers: Answers) {
  const done = new Set(answers.holds.filter((id) => id !== "aucun"));
  if (answers.where && answers.where !== "rien") done.add("geste");
  if (answers.where === "en-ligne" || answers.where === "suivi") done.add("ligne");
  return checklist.map((item) => ({ ...item, done: done.has(item.id) }));
}

export function resultNotes(answers: Answers) {
  const notes: string[] = [];
  if (answers.author === "autre") notes.push("Le code vient d'une autre équipe. On le lit avant de le modifier.");
  if (answers.author === "moi") notes.push("L'écran a été construit au feeling. On ne le jette pas. On finit ce qui manque.");
  if (answers.author === "ia") notes.push("Le code vient d'une intelligence artificielle. On le lit, et on finit ce qui manque.");
  if (answers.access === "aucun") notes.push("Sans lien ni dépôt, une capture du formulaire ou de l'erreur suffit pour commencer.");
  if (answers.help !== "non") notes.push("Les points qui ne sont pas clairs, le bureau peut les prendre.");
  return notes;
}

function offerSlug(answers: Answers) {
  if (answers.next === "garder" || answers.where === "suivi") return "maintenance";
  if (answers.next === "corriger" || answers.where === "en-ligne") return "audit-correction";
  if (answers.kind === "mobile") return "applications-mobiles";
  if (answers.kind === "site") return "creation-site-web";
  return "logiciel-sur-mesure";
}

function budgetFor(answers: Answers) {
  if (answers.next === "garder" || answers.where === "suivi") return budgets[2];
  if (answers.next === "corriger" || answers.where === "en-ligne") return budgets[0];
  return budgets[1];
}

export function contactDraft(answers: Answers) {
  const items = checklistFor(answers);
  const open = items.filter((item) => !item.done).map((item) => item.label);
  const done = items.filter((item) => item.done).map((item) => item.label);
  const lines = [
    "Où en est le projet :",
    answers.where ? whereLabel[answers.where] : "non dit",
    answers.kind ? kindLabel[answers.kind] : "",
    "",
    "Ce qui tient déjà :",
    done.length ? done.map((item) => `- ${item}`).join("\n") : "- rien de coché",
    "",
    "À continuer :",
    open.length ? open.map((item) => `- ${item}`).join("\n") : "- la liste est couverte",
    "",
    answers.author ? `Code : ${authorLabel[answers.author]}.` : "",
    answers.next ? `Suite voulue : ${nextLabel[answers.next]}.` : "",
    answers.access ? `Accès : ${accessLabel[answers.access]}.` : "",
    answers.access === "lien" && linkUrl(answers.link) ? `Lien : ${linkUrl(answers.link)}` : "",
    answers.task.trim() ? `Tâche : ${answers.task.trim()}` : "",
    answers.help === "oui" ? "Je veux que le bureau prenne les points qui ne sont pas clairs." : "",
    answers.help === "inconnu" ? "Je ne sais pas quoi faire des points ouverts." : "",
  ].filter((line) => line !== "");
  return {
    service: serviceTitle(offerSlug(answers)),
    budget: budgetFor(answers),
    message: lines.join("\n"),
  };
}

export function contactHref(answers: Answers) {
  const draft = contactDraft(answers);
  const query = new URLSearchParams();
  if (draft.service) query.set("service", draft.service);
  if (draft.budget) query.set("budget", draft.budget);
  if (draft.message) query.set("message", draft.message);
  return `/contact?${query.toString()}`;
}

export function readStored(raw: string | null): { answers: Answers; step: number } | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as { answers?: Partial<Answers>; step?: number };
    if (!data.answers) return null;
    const answers: Answers = { ...emptyAnswers, ...data.answers, holds: Array.isArray(data.answers.holds) ? data.answers.holds : [] };
    const step = Math.min(5, Math.max(1, Number(data.step) || 1));
    return { answers, step };
  } catch {
    return null;
  }
}
