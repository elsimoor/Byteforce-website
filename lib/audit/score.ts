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
