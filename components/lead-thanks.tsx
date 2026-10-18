"use client";

import { MailLink } from "@/components/mail-link";
import { formatReceiptTime, givenName, LEAD_RECEIPT_KEY, parseLeadReceipt, type LeadReceipt } from "@/lib/lead-receipt";
import { site } from "@/lib/site";
import Link from "next/link";
import { useEffect, useState } from "react";

function receiptRows(receipt: LeadReceipt) {
  return [
    ["Nom", receipt.name],
    ["Email", receipt.email],
    ["Téléphone", receipt.phone],
    ["Société", receipt.company],
    ["Offre", receipt.service],
    ["Budget", receipt.budget || "Pas encore défini"],
  ].filter((row): row is [string, string] => Boolean(row[1]));
}

export function LeadThanks() {
  const [receipt, setReceipt] = useState<LeadReceipt | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReceipt(parseLeadReceipt(sessionStorage.getItem(LEAD_RECEIPT_KEY)));
    setReady(true);
  }, []);

  const named = receipt ? givenName(receipt.name) : "";
  const sent = receipt ? formatReceiptTime(receipt.sentAt) : "";

  return (
    <div className="grid gap-16 px-6 py-16 md:px-12 md:py-24">
      <header className="max-w-3xl">
        <p className="font-mono text-xs font-bold tracking-[0.16em] text-primary uppercase">
          {sent ? `Demande reçue · ${sent}` : "Demande reçue"}
        </p>
        <h1 className="mt-4 max-w-[11em] font-headline text-[clamp(3rem,8vw,5.75rem)] leading-[0.96] font-extrabold tracking-[-0.035em]">
          On vous contacte.
        </h1>
        <p className="mt-8 max-w-xl text-2xl tracking-tight">
          {named ? `${named}, la` : "La"} demande est arrivée à Casablanca. La réponse part sous un jour ouvré, par email.
        </p>
      </header>

      {receipt ? (
        <div className="grid items-start gap-16 md:grid-cols-12">
          <div className="min-w-0 border-l border-primary pl-6 md:col-span-7">
            <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-primary uppercase">Projet</p>
            <p className="mt-4 text-2xl leading-snug tracking-tight break-words whitespace-pre-wrap">{receipt.message}</p>
          </div>
          <div className="min-w-0 md:col-span-4 md:col-start-9">
            <dl className="border-t border-line">
              {receiptRows(receipt).map(([label, value]) => (
                <div key={label} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                  <dt className="font-mono text-[11px] font-bold tracking-[0.14em] text-on-surface-variant uppercase">{label}</dt>
                  <dd className="text-lg break-words">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-on-surface-variant">
              Si l&apos;email est faux, <Link href="/contact">renvoyez la demande</Link>.
            </p>
          </div>
        </div>
      ) : ready ? (
        <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
          Le détail du formulaire reste sur l&apos;appareil qui l&apos;a envoyé. Une demande déjà partie reçoit tout de même une réponse à
          l&apos;adresse indiquée.
        </p>
      ) : (
        <div className="min-h-16" />
      )}

      <section className="grid gap-12 border-t border-line pt-10 md:grid-cols-3" aria-label="Ce qui suit">
        <div>
          <h2 className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase">La réponse</h2>
          <p className="mt-3 text-lg leading-relaxed">
            Sous un jour ouvré, du lundi au vendredi, de 9h à 19h. Elle arrive par email, depuis <MailLink />.
          </p>
        </div>
        <div>
          <h2 className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase">Le bureau</h2>
          <p className="mt-3 text-lg leading-relaxed">
            {site.street}
            <br />
            {site.locality}, {site.postal} {site.city}
            <br />
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          </p>
        </div>
        <div>
          <h2 className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase">La lecture</h2>
          <p className="mt-3 text-lg leading-relaxed">
            On lit qui fait l&apos;action, où elle se passe, et ce qui bloque. Un prix n&apos;est pas dans cette première réponse.
          </p>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link href="/" className="btn">
          Retour à l&apos;accueil
        </Link>
        <Link href="/realisations" className="btn-line">
          Voir les travaux
        </Link>
        {ready && !receipt ? (
          <Link href="/contact" className="btn-line">
            Écrire à Casablanca
          </Link>
        ) : null}
      </div>
    </div>
  );
}
