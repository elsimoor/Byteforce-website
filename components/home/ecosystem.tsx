"use client";

import { useState } from "react";
import {
  AgentPreview,
  BusinessPreview,
  MobileApp,
  PipelinePreview,
  PortalPreview,
  SaasPreview,
} from "@/components/home/screens";

const categories = [
  {
    title: "SaaS Platforms",
    text: "Complex multi-user applications designed to scale.",
    preview: <SaasPreview />,
  },
  {
    title: "Business Software",
    text: "Custom systems replacing fragmented tools and manual processes.",
    preview: <BusinessPreview />,
  },
  {
    title: "CRM & Operations",
    text: "Customer management, sales pipelines, internal operations and automation.",
    preview: <PipelinePreview />,
  },
  {
    title: "AI Products",
    text: "AI agents, intelligent workflows, copilots and AI-powered applications.",
    preview: <AgentPreview />,
  },
  {
    title: "Mobile Apps",
    text: "iOS and Android applications connected to powerful backend systems.",
    preview: (
      <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-white/10 bg-[#121211] py-8">
        <MobileApp />
      </div>
    ),
  },
  {
    title: "Digital Portals",
    text: "Customer portals, partner platforms, employee systems and marketplaces.",
    preview: <PortalPreview />,
  },
];

export function Ecosystem() {
  const [active, setActive] = useState(0);
  const current = categories[active];

  return (
    <div className="grid items-start gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5">
        {categories.map((category, index) => {
          const selected = index === active;
          return (
            <button
              key={category.title}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              className={`block w-full border-t border-line py-5 text-left ${selected ? "text-ink" : "text-mute"}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-lg font-medium tracking-tight md:text-xl">{category.title}</span>
                <span className="font-mono text-[11px]">0{index + 1}</span>
              </div>
              <p className={`mt-1 max-w-md text-sm ${selected ? "text-mute" : "text-mute/70"}`}>{category.text}</p>
            </button>
          );
        })}
      </div>
      <div className="lg:col-span-7 lg:sticky lg:top-20">{current.preview}</div>
    </div>
  );
}
