import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Byte Force handles messages sent through the contact form.",
  alternates: { canonical: "/confidentialite" },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-2xl px-6 py-16 md:px-12 md:py-24">
      <h1 className="font-headline text-5xl font-black tracking-tight">Privacy</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-on-surface-variant">
        <p>
          Byte Force, {site.street}, {site.locality}, {site.postal} {site.city}, {site.countryLabel}. Contact:{" "}
          {site.email}, {site.phoneDisplay}.
        </p>
        <p>
          The contact form stores the name, email, phone, company, offer, budget range and message so we can reply.
          Those messages are not published. The budget field is only used to prepare the reply.
        </p>
        <p>We reply within one business day, Monday to Friday, {site.hoursLabel}.</p>
        <p>
          To ask what we hold about a message you sent, write to {site.email}.
        </p>
      </div>
    </main>
  );
}
