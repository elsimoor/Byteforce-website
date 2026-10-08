import type { AuditDimension, AuditImpact, AuditStep } from "@/lib/site-audit";

export const dimensions: AuditDimension[] = ["Technique", "Performance", "SEO", "Accessibilité", "GEO", "Conversion"];

const impactWeight: Record<AuditImpact, number> = { élevé: 3, moyen: 2, faible: 1, aucun: 0 };

export function dimensionScore(steps: AuditStep[], dimension: AuditDimension) {
  const items = steps.filter((step) => step.dimension === dimension && step.state !== "running" && step.impact !== "aucun");
  if (!items.length) return null;
  const points = items.reduce((sum, step) => sum + (step.state === "pass" ? 1 : step.state === "warn" ? 0.5 : 0), 0);
  return Math.round((points / items.length) * 100);
}

export function overallScore(steps: AuditStep[]) {
  const scores = dimensions.map((dimension) => dimensionScore(steps, dimension)).filter((score): score is number => score !== null);
  if (!scores.length) return 0;
  return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
}

export function scoreLabel(score: number) {
  if (score >= 80) return "Bon socle";
  if (score >= 60) return "Bon socle, potentiel à exploiter";
  if (score >= 40) return "Des bases, plusieurs freins";
  return "Le site freine la lecture et la demande";
}

export function priorities(steps: AuditStep[]) {
  return steps
    .filter((step) => step.state === "warn" || step.state === "fail")
    .sort((left, right) => {
      const impact = impactWeight[right.impact] - impactWeight[left.impact];
      if (impact) return impact;
      if (left.state !== right.state) return left.state === "fail" ? -1 : 1;
      return 0;
    })
    .slice(0, 5);
}

export const machineLayers = [
  { id: "discover", label: "Découverte", prefix: "machine-discover" },
  { id: "understand", label: "Compréhension", prefix: "machine-understand" },
  { id: "answer", label: "Réponse", prefix: "machine-answer" },
  { id: "recommend", label: "Recommandation", prefix: "machine-recommend" },
  { id: "act", label: "Action", prefix: "machine-act" },
] as const;

export function layerScore(steps: AuditStep[], prefix: string) {
  const items = steps.filter((step) => step.id.startsWith(prefix) && step.state !== "running" && step.impact !== "aucun");
  if (!items.length) return null;
  const points = items.reduce((sum, step) => sum + (step.state === "pass" ? 1 : step.state === "warn" ? 0.5 : 0), 0);
  return Math.round((points / items.length) * 100);
}

export function machineScore(steps: AuditStep[]) {
  const scores = machineLayers.map((layer) => layerScore(steps, layer.prefix)).filter((score): score is number => score !== null);
  if (!scores.length) return null;
  return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
}

export function machineNote(steps: AuditStep[]) {
  const ranked = machineLayers
    .map((layer) => ({ ...layer, score: layerScore(steps, layer.prefix) }))
    .filter((layer): layer is (typeof machineLayers)[number] & { score: number } => layer.score !== null)
    .sort((left, right) => left.score - right.score);
  const lowest = ranked[0];
  if (!lowest) return "La lecture machine n'a pas encore de point.";
  if (lowest.id === "discover") return "Le frein principal : une machine a du mal à découvrir le site.";
  if (lowest.id === "understand") return "Le frein principal : une machine trouve le site, mais identifie mal l'entreprise.";
  if (lowest.id === "answer") return "Le frein principal : les questions utiles n'ont pas de réponse autonome.";
  if (lowest.id === "recommend") return "Le frein principal : il manque des faits explicites pour recommander l'entreprise. Un avis inventé ne compte pas.";
  return "Le frein principal : une machine peut lire le site, mais elle a peu de moyen d'agir.";
}

export function takeaways(steps: AuditStep[]) {
  return dimensions
    .map((dimension) => ({ dimension, score: dimensionScore(steps, dimension) }))
    .filter((item): item is { dimension: AuditDimension; score: number } => item.score !== null)
    .sort((left, right) => left.score - right.score)
    .slice(0, 5)
    .map((item) => {
      const open = steps.find((step) => step.dimension === item.dimension && (step.state === "fail" || step.state === "warn"));
      return {
        dimension: item.dimension,
        score: item.score,
        text: open?.detail ?? "Rien de bloquant sur ce passage.",
      };
    });
}
