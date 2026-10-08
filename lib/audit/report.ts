import { dimensionScore, dimensions, layerScore, machineLayers, machineScore, overallScore, priorities } from "@/lib/audit/score";
import type { AuditDimension, AuditStep } from "@/lib/site-audit";

const categoryKey: Record<Exclude<AuditDimension, "Machine">, string> = {
  Technique: "technical",
  Performance: "performance",
  SEO: "seo",
  Accessibilité: "accessibility",
  GEO: "geo",
  Conversion: "conversion",
};

function passed(steps: AuditStep[], id: string) {
  return steps.find((step) => step.id === id)?.state === "pass";
}

export function auditReport(url: string, steps: AuditStep[]) {
  const shown = steps.filter((step) => step.state !== "running" && step.id !== "suite");
  const categories: Record<string, number | null> = {};
  for (const dimension of dimensions) {
    if (dimension === "Machine") continue;
    categories[categoryKey[dimension]] = dimensionScore(shown, dimension);
  }
  const layers: Record<string, number | null> = {};
  for (const layer of machineLayers) layers[layer.id] = layerScore(shown, layer.prefix);

  return {
    url,
    score: overallScore(shown),
    categories,
    machine: {
      score: machineScore(shown),
      layers,
    },
    machine_understanding: {
      identity: passed(shown, "entity") || passed(shown, "machine-understand-org"),
      organization_schema: passed(shown, "machine-understand-org"),
      llms_txt: passed(shown, "llms"),
      ai_crawlers_allowed: passed(shown, "bots"),
      direct_answers: passed(shown, "answers") || passed(shown, "machine-answer-what"),
      contact_action: passed(shown, "machine-act-channel"),
    },
    priority_actions: priorities(shown).map((step) => ({
      id: step.id,
      label: step.label,
      state: step.state,
      evidence: step.detail,
      why: step.why,
      action: step.action,
      impact: step.impact,
      effort: step.effort,
    })),
  };
}
