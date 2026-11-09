import type { Project } from "@/lib/content";

export type WorkGroup = "sites" | "apps" | "logiciels";

const countWord = ["", "Une", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit", "Neuf", "Dix"];

const landShapes: number[][][] = [
  [[-80, 64.1], [-65, 64.1], [-62.5, 60.5], [-64.5, 58.5], [-61, 56], [-57, 53], [-57, 50.3], [-66, 50], [-70, 47.4], [-64.5, 49.1], [-64.3, 48.8], [-65, 47.8], [-64, 46.5], [-61, 45.8], [-60, 45.5], [-61.5, 45], [-65.8, 43.5], [-66.2, 44.6], [-67, 44.8], [-70, 43.6], [-70, 41.7], [-72, 41], [-74, 40.5], [-75.5, 38.3], [-75.9, 36.9], [-75.5, 35.2], [-77.5, 34.5], [-79, 33.2], [-80, 32.6]],
  [[-59.3, 47.6], [-56, 51.6], [-55.4, 51.6], [-52.8, 48.5], [-52.9, 47], [-55.5, 46.9]],
  [[-53, 64.1], [-50, 62], [-47.5, 60.6], [-43.5, 60], [-41.5, 62.8], [-40.5, 64.1]],
  [[-24, 65.5], [-22, 66.4], [-16, 66.5], [-13.5, 65], [-15, 63.5], [-19, 63.4], [-22.5, 64]],
  [[22, 64.1], [10.5, 64.1], [5, 62], [5.5, 58.5], [8, 58], [10, 57], [8.5, 54], [5, 53.2], [3, 51.2], [1.5, 50.9], [-1.9, 49.7], [-4.5, 48.4], [-2.2, 47.3], [-1.2, 46], [-1.8, 43.4], [-8.8, 43.3], [-9.3, 39], [-8.9, 37], [-6.3, 36.8], [-5.4, 36], [-2, 36.8], [0, 38.8], [3.1, 42.3], [4, 43.5], [7, 43.6], [9, 44.4], [12.2, 41.9], [15.7, 38], [18, 40], [22, 40]],
  [[-5.7, 50], [1.5, 51], [1.7, 52.8], [-0.3, 54.5], [-2, 56], [-2, 57.6], [-3.3, 58.6], [-5, 58.6], [-6, 56.5], [-4.8, 55], [-3, 54], [-4.5, 52.5], [-5, 51.7]],
  [[-10, 52], [-6.2, 52.2], [-6, 54.5], [-8, 55.3], [-10, 54]],
  [[-5.9, 35.8], [-2.9, 35.2], [1, 36.5], [3, 36.8], [8, 37], [10, 37.3], [11, 33], [22, 32.5], [22, 30.3], [-9.7, 30.3], [-9.2, 32.3], [-7.6, 33.6], [-6.8, 34]],
];

function plot(point: number[]) {
  return `${((point[0] + 80) * 10).toFixed(1)},${((64.1 - point[1]) * 10).toFixed(1)}`;
}

export const landPath = landShapes.map((shape) => `M${shape.map(plot).join("L")}Z`).join(" ");

export function workGroup(project: Project): WorkGroup {
  if (project.serviceSlug === "applications-mobiles" || (project.screens?.length ?? 0) > 0) return "apps";
  if (project.category === "Plate-forme" || project.serviceSlug === "logiciel-sur-mesure" || project.serviceSlug === "api-backend") {
    return "logiciels";
  }
  return "sites";
}

export function workKind(project: Project) {
  if (workGroup(project) === "apps") return "Application et site";
  if (project.category === "E-Commerce") return "Boutique";
  if (project.category === "Vitrine") return "Site vitrine";
  return "Logiciel sur mesure";
}

export function hostOf(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function titleParts(title: string) {
  const words = title.trim().split(/\s+/);
  if (words.length >= 2 && title.length > 12) {
    return { lines: [words[0], words.slice(1).join(" ")], single: false };
  }
  return { lines: [title], single: true };
}

export function issueLine(count: number) {
  if (count <= 1) return "Une page, une seule issue";
  const word = countWord[count];
  return word ? `${word} pages, une seule issue` : `${count} pages, une seule issue`;
}
