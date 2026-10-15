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
  marked: string[];
  reopened: string[];
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
  marked: [],
  reopened: [],
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
  for (const id of answers.marked ?? []) done.add(id);
  for (const id of answers.reopened ?? []) done.delete(id);
  return checklist.map((item) => ({ ...item, detail: detailFor(item.id, answers), done: done.has(item.id) }));
}

export function toggleResult(id: string, answers: Answers): Pick<Answers, "marked" | "reopened"> {
  const done = checklistFor(answers).some((item) => item.id === id && item.done);
  const marked = answers.marked ?? [];
  const reopened = answers.reopened ?? [];
  if (done) {
    return {
      marked: marked.filter((item) => item !== id),
      reopened: reopened.includes(id) ? reopened : [...reopened, id],
    };
  }
  return {
    reopened: reopened.filter((item) => item !== id),
    marked: marked.includes(id) ? marked : [...marked, id],
  };
}

function detailFor(id: string, answers: Answers) {
  const task = answers.task.trim();
  if (id === "geste") {
    return task
      ? `La phrase déjà écrite est : « ${task} ». C'est le geste à garder. Le reste de la liste sert ce geste, pas un autre.`
      : "Le premier jour a besoin d'un geste nommé : qui s'en sert, et ce qui doit marcher. Une phrase suffit. Sans elle, on ouvre trop de chantiers.";
  }
  if (id === "comptes") {
    return "Qui entre, qui voit un dossier, et qui ne doit pas le voir. Sans ce point, deux personnes ouvrent la même chose, ou personne ne peut entrer.";
  }
  if (id === "donnees") {
    return "Ce qui est saisi doit rester après la fermeture de l'onglet, avec une copie. Un écran qui oublie au rechargement n'est pas encore un outil.";
  }
  if (id === "cas") {
    return "Trois essais suffisent à voir si ça casse : le champ vide, le double envoi, et un rôle sans le droit. Chacun doit s'arrêter clairement, sans écraser le reste.";
  }
  if (id === "ligne") {
    return answers.access === "lien" && linkUrl(answers.link)
      ? `Le lien indiqué est ${linkUrl(answers.link)}. Le nom de domaine et l'hébergement doivent être au nom de l'entreprise, pas au nom de celui qui a cliqué.`
      : "Le nom de domaine et l'hébergement sont au nom de l'entreprise. L'adresse répond. Ce n'est pas un aperçu sur la machine de quelqu'un.";
  }
  if (id === "page") {
    return answers.kind === "site"
      ? "La page dit l'offre, et le message part vraiment. Un site qui ne dit pas quoi demander, ou dont le formulaire n'envoie rien, ne sert pas encore."
      : "L'endroit où l'on comprend l'offre, et l'endroit où l'on écrit, doivent marcher. Un écran sans issue n'est pas une fin.";
  }
  if (id === "depot") {
    return answers.access === "depot"
      ? "Le dépôt est déjà entre les mains de l'entreprise. On vérifie que les comptes livrés avec lui le sont aussi."
      : answers.access === "aucun"
        ? "Il n'y a ni lien ni dépôt pour l'instant. Une capture du formulaire ou de l'erreur permet de commencer. Le dépôt viendra avec le travail."
        : "Le code et les comptes livrés reviennent à l'entreprise. Sans dépôt, la suite dépend de la personne qui a le fichier.";
  }
  if (answers.where === "suivi" || answers.next === "garder") {
    return "C'est déjà en ligne. Quelqu'un doit voir ce qui casse après la mise en ligne : le formulaire silencieux, le certificat, la page qui ne répond plus.";
  }
  return "Après la mise en ligne, quelqu'un surveille. Ce n'est pas le même travail que d'écrire le premier geste.";
}

export function reading(answers: Answers) {
  const rows: { id: string; kicker: string; value: string; why: string }[] = [];
  if (answers.where) {
    rows.push({
      id: `where-${answers.where}`,
      kicker: "Point de départ",
      value: whereLabel[answers.where],
      why: placeSentence(answers),
    });
  }
  if (answers.kind) {
    rows.push({
      id: `kind-${answers.kind}`,
      kicker: "Forme",
      value: kindLabel[answers.kind],
      why:
        answers.kind === "inconnu"
          ? "La forme n'est pas choisie. On la déduit du geste : un site si l'on doit être trouvé, une application si le geste est sur le téléphone, un logiciel si l'équipe s'en sert chaque jour."
          : answers.kind === "mobile"
            ? "Le geste est sur le téléphone. On ne choisit Android, iOS, ou les deux, qu'en sachant qui tient l'appareil."
            : answers.kind === "site"
              ? "Un site se juge à ce qu'on y comprend, et à ce que le message part. Le référencement vient après une page qui dit l'offre."
              : "Un logiciel reprend qui saisit, qui valide, qui relance. Ce n'est pas une page habillée.",
    });
  }
  if (answers.author) {
    rows.push({
      id: `author-${answers.author}`,
      kicker: "Qui a écrit",
      value: authorLabel[answers.author],
      why:
        answers.author === "ia"
          ? "ChatGPT, Claude ou un autre modèle a produit un départ. On le lit. On ne le jette pas. On finit les comptes, les données, et les cas qui cassent."
          : answers.author === "moi"
            ? "L'écran a été fait au feeling. On le garde comme base, et on écrit ce qui manque pour qu'une autre personne puisse le reprendre."
            : answers.author === "autre"
              ? "Une autre équipe a le contexte. On lit avant de modifier, pour ne pas casser ce qui tient déjà."
              : answers.author === "byteforce"
                ? "Byte Force a déjà le dépôt. La suite est une correction, une finition, ou une surveillance."
                : "On ne sait pas qui a le code. Le premier message doit dire où il est, même si c'est une capture.",
    });
  }
  if (answers.next) {
    rows.push({
      id: `next-${answers.next}`,
      kicker: "Suite voulue",
      value: nextLabel[answers.next],
      why:
        answers.next === "finir"
          ? "On ne recommence pas. On ferme les points ouverts de la liste, dans l'ordre où ils bloquent le geste."
          : answers.next === "corriger"
            ? "On lit le point qui bloque avant de le changer. Une correction sans le cas qui casse revient."
            : answers.next === "garder"
              ? "Le travail est de voir ce qui casse, et de le reprendre. Pas d'ajouter une fonction chaque semaine."
              : answers.next === "ecrire"
                ? "Le premier geste s'écrit petit. Les comptes et les données en font partie dès ce geste, pas après."
                : "Si la suite n'est pas claire, la liste ouverte dit par où continuer. Le bureau peut prendre les points flous.",
    });
  }
  if (answers.access) {
    rows.push({
      id: `access-${answers.access}`,
      kicker: "De quoi montrer",
      value: answers.access === "lien" && linkUrl(answers.link) ? linkUrl(answers.link) : accessLabel[answers.access],
      why:
        answers.access === "aucun"
          ? "Une capture de l'écran, du formulaire, ou du message d'erreur suffit pour le premier échange. Trente minutes, gratuites."
          : answers.access === "lien"
            ? "Le lien permet de lire la page avant l'échange. On ne promet pas un audit complet de tout le site."
            : "Le dépôt permet de voir ce qui est écrit. On ne le modifie pas avant d'avoir nommé le geste.",
    });
  }
  if (answers.task.trim()) {
    rows.push({
      id: "task",
      kicker: "La phrase",
      value: answers.task.trim(),
      why: "C'est la tâche à garder en tête. Le brief pour l'IA et le message au bureau reprennent cette phrase telle quelle.",
    });
  }
  return rows;
}

export function aiBrief(answers: Answers) {
  const items = checklistFor(answers);
  const lines = [
    "Tu aides à préparer un brief pour Byte Force, studio logiciel à Casablanca (Technopark, boulevard Dammam, Aïn Chock).",
    "Réponds en français.",
    "N'invente pas de prix, de client, de délai chiffré, ni de métrique.",
    "À partir des seuls faits ci-dessous, écris un brief : ce qui existe, ce qui manque, et la première tâche à faire.",
    "",
    "Faits",
    ...reading(answers).flatMap((row) => [`- ${row.kicker} : ${row.value}`, `  ${row.why}`]),
    "",
    "Liste",
    ...items.map((item) => `${item.done ? "[x]" : "[ ]"} ${item.label}. ${item.detail}`),
    "",
    answers.help === "oui" ? "La personne veut que le bureau prenne les points qui ne sont pas clairs." : "",
    answers.help === "non" ? "La personne continue seule pour l'instant. Le brief sert à ne rien oublier." : "",
    answers.help === "inconnu" ? "La personne ne sait pas quoi faire des points ouverts." : "",
  ];
  return lines.filter((line) => line !== "").join("\n");
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
    const answers: Answers = {
      ...emptyAnswers,
      ...data.answers,
      holds: Array.isArray(data.answers.holds) ? data.answers.holds : [],
      marked: Array.isArray(data.answers.marked) ? data.answers.marked : [],
      reopened: Array.isArray(data.answers.reopened) ? data.answers.reopened : [],
    };
    const step = Math.min(5, Math.max(1, Number(data.step) || 1));
    return { answers, step };
  } catch {
    return null;
  }
}
