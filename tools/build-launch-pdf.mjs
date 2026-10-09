import { mkdirSync, writeFileSync } from "node:fs";
import { PDFDocument, PDFName, PDFString, rgb, StandardFonts } from "pdf-lib";

const ink = rgb(0.047, 0.047, 0.043);
const paper = rgb(0.949, 0.945, 0.925);
const mute = rgb(0.42, 0.416, 0.392);
const line = rgb(0.871, 0.863, 0.831);

const sections = [
  {
    title: "Parcours convenu",
    items: [
      "Le geste principal se fait de bout en bout sans l'équipe à côté.",
      "Chaque rôle nommé au dessin a un compte, ou n'entre pas.",
      "Ce qui reste hors du premier jour est écrit, pas oublié.",
      "Une personne du métier a fait l'essai, pas seulement l'auteur.",
    ],
  },
  {
    title: "Essai",
    items: [
      "Le résultat de l'essai est noté, y compris ce qui a cassé.",
      "Le correctif de cet essai est fait, ou reporté par écrit.",
      "Le formulaire de demande part vers une boîte lue.",
      "La page qui confirme l'envoi s'affiche.",
    ],
  },
  {
    title: "Offre et demande",
    items: [
      "La page d'offre dit ce que l'entreprise fait aujourd'hui.",
      "Le titre et la description de la page sont ceux du vrai service.",
      "Un visiteur sait comment écrire, sans chercher.",
      "Aucun prix inventé n'est affiché.",
    ],
  },
  {
    title: "Soutien",
    items: [
      "Une personne est nommée pour le premier jour.",
      "Cette personne sait où lire la demande.",
      "Le correctif d'un blocage est écrit quelque part, pas seulement dit.",
      "Le numéro et l'email du studio sont ceux du site.",
    ],
  },
  {
    title: "Jour J",
    items: [
      "Le domaine pointe vers le logiciel, avec un certificat.",
      "Les comptes d'hébergement sont au nom du client.",
      "Une copie du dépôt est remise.",
      "La phrase à dire si le site ne répond plus est écrite.",
    ],
  },
];

function link(doc, page, x, y, w, h, url) {
  const annot = doc.context.obj({
    Type: "Annot",
    Subtype: "Link",
    Rect: [x, y, x + w, y + h],
    Border: [0, 0, 0],
    A: { Type: "Action", S: "URI", URI: PDFString.of(url) },
  });
  page.node.addAnnot(doc.context.register(annot));
}

function destLink(doc, page, x, y, w, h, target) {
  const annot = doc.context.obj({
    Type: "Annot",
    Subtype: "Link",
    Rect: [x, y, x + w, y + h],
    Border: [0, 0, 0],
    Dest: [target.ref, "XYZ", null, 800, null],
  });
  page.node.addAnnot(doc.context.register(annot));
}

function paint(page) {
  page.drawRectangle({ x: 0, y: 0, width: 595, height: 842, color: paper });
}

const doc = await PDFDocument.create();
doc.setTitle("Liste de lancement d'un produit — Byte Force");
doc.setAuthor("Walid Moultamiss, Byte Force");
doc.setSubject("Liste à cocher avant la mise en ligne. Encre sur papier.");
const font = await doc.embedFont(StandardFonts.Helvetica);
const bold = await doc.embedFont(StandardFonts.HelveticaBold);
const form = doc.getForm();

const cover = doc.addPage([595, 842]);
paint(cover);
cover.drawText("BYTE FORCE  ·  CASABLANCA", { x: 48, y: 780, size: 10, font, color: mute });
cover.drawText("Liste de lancement", { x: 48, y: 700, size: 36, font: bold, color: ink });
cover.drawText("d'un produit", { x: 48, y: 656, size: 36, font: bold, color: ink });
cover.drawText("Encre sur papier. Cases à cocher. Onglets à gauche de cette page.", {
  x: 48,
  y: 610,
  size: 12,
  font,
  color: ink,
});
const intro = [
  "Cocher seulement ce qui est vrai.",
  "Noter ce qui manque à côté de la case.",
  "Les comptes remis reviennent au client.",
  "Aucun prix n'est dans cette liste.",
];
intro.forEach((line, i) => cover.drawText(line, { x: 48, y: 540 - i * 22, size: 12, font, color: ink }));
cover.drawText("Onglets", { x: 48, y: 400, size: 14, font: bold, color: ink });

const sectionPages = sections.map(() => {
  const page = doc.addPage([595, 842]);
  paint(page);
  return page;
});

sections.forEach((section, index) => {
  const y = 360 - index * 36;
  cover.drawRectangle({ x: 48, y: y - 8, width: 220, height: 28, borderColor: ink, borderWidth: 1, color: paper });
  cover.drawText(`${String(index + 1).padStart(2, "0")}  ${section.title}`, { x: 58, y: y, size: 12, font, color: ink });
  destLink(doc, cover, 48, y - 8, 220, 28, sectionPages[index]);
});

cover.drawText("byteforce.ma/contact", { x: 48, y: 72, size: 12, font, color: ink });
link(doc, cover, 48, 66, 180, 16, "https://byteforce.ma/contact");
cover.drawText("byteforce.ma/checklists/lancer-le-produit", { x: 48, y: 48, size: 12, font, color: ink });
link(doc, cover, 48, 42, 320, 16, "https://byteforce.ma/checklists/lancer-le-produit");

sectionPages.forEach((page, index) => {
  const section = sections[index];
  page.drawText("BYTE FORCE", { x: 48, y: 790, size: 10, font, color: mute });
  page.drawText(section.title, { x: 48, y: 740, size: 26, font: bold, color: ink });
  page.drawLine({ start: { x: 48, y: 724 }, end: { x: 547, y: 724 }, thickness: 1, color: line });
  section.items.forEach((item, itemIndex) => {
    const y = 660 - itemIndex * 72;
    const box = form.createCheckBox(`s${index + 1}.${itemIndex + 1}`);
    box.addToPage(page, {
      x: 48,
      y: y - 2,
      width: 14,
      height: 14,
      borderWidth: 1,
      borderColor: ink,
      backgroundColor: paper,
    });
    page.drawText(item, { x: 76, y, size: 12, font, color: ink, maxWidth: 450 });
    page.drawText("Note", { x: 76, y: y - 28, size: 10, font, color: mute });
    page.drawLine({ start: { x: 110, y: y - 30 }, end: { x: 520, y: y - 30 }, thickness: 0.6, color: line });
  });
  page.drawText("Retour aux onglets : page 1", { x: 48, y: 72, size: 11, font, color: ink });
  destLink(doc, page, 48, 66, 180, 16, cover);
  page.drawText("Écrire à Casablanca", { x: 48, y: 48, size: 11, font, color: ink });
  link(doc, page, 48, 42, 160, 16, "https://byteforce.ma/contact");
  page.drawText(String(index + 2), { x: 540, y: 36, size: 10, font, color: mute });
});

const outline = doc.context.obj({ Type: "Outlines", First: null, Last: null, Count: 0 });
const outlineRef = doc.context.register(outline);
const items = sectionPages.map((page, index) => {
  const item = doc.context.obj({
    Title: PDFString.of(sections[index].title),
    Parent: outlineRef,
    Dest: [page.ref, "XYZ", null, 800, null],
  });
  return doc.context.register(item);
});
items.forEach((ref, index) => {
  const item = doc.context.lookup(ref);
  if (index > 0) item.set(PDFName.of("Prev"), items[index - 1]);
  if (index < items.length - 1) item.set(PDFName.of("Next"), items[index + 1]);
});
outline.set(PDFName.of("First"), items[0]);
outline.set(PDFName.of("Last"), items[items.length - 1]);
outline.set(PDFName.of("Count"), doc.context.obj(items.length));
doc.catalog.set(PDFName.of("Outlines"), outlineRef);
doc.catalog.set(PDFName.of("PageMode"), PDFName.of("UseOutlines"));

const bytes = await doc.save();
mkdirSync("public/checklists", { recursive: true });
writeFileSync("public/checklists/lancement-produit.pdf", bytes);
console.log("wrote", bytes.length);
