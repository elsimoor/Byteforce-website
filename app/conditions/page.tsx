import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "How a Byte Force engagement starts, how scope changes, and who owns the code.",
  alternates: { canonical: "/conditions" },
};

export default function TermsPage() {
  return (
    <main className="max-w-2xl px-6 py-16 md:px-12 md:py-24">
      <h1 className="font-headline text-5xl font-black tracking-tight">Terms</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-on-surface-variant">
        <p>
          The pages on this site describe offers. They are not a quote. A project starts after a written scope.
        </p>
        <p>A deposit starts the work. The rest follows milestones tied to what has been delivered.</p>
        <p>If the scope changes, the change is written down and agreed before it is built.</p>
        <p>
          Bugs that belong to the agreed scope are fixed with the delivery. After handover, fixes are either a quoted
          one-off or one of the monthly support plans.
        </p>
        <p>At handover, the client owns the code, the repository and the hosting accounts that were delivered.</p>
        <p>
          An NDA is available on request before the brief is shared. Questions: {site.email}.
        </p>
      </div>
    </main>
  );
}
