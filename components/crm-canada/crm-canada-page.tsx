"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import { TurnstileCheck } from "@/components/turnstile-check";
import { crmCanadaFaqs } from "./copy";
import { startCrmCanadaMotion } from "./motion";
import "./crm-canada.css";

const posthogEnabled = Boolean(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST);

function trackCta(position: "hero" | "price" | "form") {
  if (posthogEnabled) posthog.capture("crm_canada_cta", { position, page: "/geo-location/crm/ca" });
}

const waHref =
  "https://wa.me/212666650696?text=" +
  encodeURIComponent("Bonjour Byte Force, je souhaite obtenir un devis gratuit pour mon projet.");

export function CrmCanadaPage() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    return startCrmCanadaMotion(node);
  }, []);

  return (
    <main ref={root} className="crm-canada" data-landing>
      <section className="hero">
        <div className="wrap">
          <div>
            <nav className="crumbs" data-build="box" data-by="Design" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span aria-hidden="true"> · </span>
              <Link href="/geo-location">Lieux</Link>
              <span aria-hidden="true"> · </span>
              <Link href="/developpement-logiciel-sur-mesure-maroc/crm">CRM sur mesure</Link>
              <span aria-hidden="true"> · </span>
              <span>Consultant CRM Québec</span>
            </nav>
            <div className="eyebrow" data-build="box" data-by="Design">
              <span className="live" />
              CONSULTANT CRM · QUÉBEC
            </div>
            <h1 data-build="text" data-by="Rédaction">
              Combien coûte un consultant CRM au Québec?
            </h1>
            <p className="lede" data-build="text" data-by="Contenu">
              Un consultant CRM québécois facture souvent à l’heure, avec des factures qui grimpent. Byte Force construit votre CRM sur mesure à Casablanca, avec un devis fixe en dollars canadiens, sans abonnement par utilisateur. Vous savez le prix avant que le travail commence.
            </p>
            <div className="actions" data-build="box" data-by="Frontend">
              <a className="btn primary" href="#contact" onClick={() => trackCta("hero")}>
                Recevoir mon devis en $ CA <span>↗</span>
              </a>
              <Link className="btn" href="/realisations/crm-cocoinbox">
                Voir un CRM livré (Cocoinbox)
              </Link>
            </div>
            <div className="note" data-build="box">
              <span className="live" />
              <span>
                <b>Réponse en 30 minutes, devis sous 1 jour ouvré.</b>
              </span>
            </div>
          </div>
          <div>
            <div className="mock" data-build="box" data-by="Produit">
              <div className="mock-top">
                <div className="tabs">
                  <span>Boîte</span>
                  <span className="on">Fiches</span>
                  <span>Relances</span>
                  <span>Devis</span>
                </div>
                <span className="chip">EXEMPLE</span>
              </div>
              <div className="board">
                <div className="col">
                  <h4>
                    <i style={{ background: "#8B5CF6" }} />
                    Nouveau<span>2</span>
                  </h4>
                  <div className="lead" style={{ ["--n" as string]: 0 }}>
                    <b>Entreprise A</b>
                    <small>Demande reçue</small>
                  </div>
                  <div className="lead" style={{ ["--n" as string]: 1 }}>
                    <b>Entreprise B</b>
                    <small>À rappeler</small>
                    <span className="tag">Relance</span>
                  </div>
                </div>
                <div className="col">
                  <h4>
                    <i style={{ background: "#3B82F6" }} />
                    Qualifié<span>1</span>
                  </h4>
                  <div className="lead" style={{ ["--n" as string]: 2 }}>
                    <b>Entreprise C</b>
                    <small>Besoin confirmé</small>
                  </div>
                </div>
                <div className="col">
                  <h4>
                    <i style={{ background: "#F59E0B" }} />
                    Devis<span>2</span>
                  </h4>
                  <div className="lead" style={{ ["--n" as string]: 3 }}>
                    <b>Entreprise D</b>
                    <small>Devis envoyé</small>
                  </div>
                  <div className="lead" style={{ ["--n" as string]: 4 }}>
                    <b>Entreprise E</b>
                    <small>Relance mardi</small>
                    <span className="tag">Relance</span>
                  </div>
                </div>
                <div className="col">
                  <h4>
                    <i style={{ background: "#10B981" }} />
                    Gagné<span>1</span>
                  </h4>
                  <div className="lead" style={{ ["--n" as string]: 5 }}>
                    <b>Entreprise F</b>
                    <small>Signé</small>
                  </div>
                </div>
              </div>
              <div className="mock-foot">
                <span>Droits : qui voit, qui exporte, qui efface</span>
                <strong>Étapes nommées par l&apos;équipe</strong>
              </div>
            </div>
            <p className="cap" data-build="box">
              ÉCRAN D&apos;EXEMPLE · DONNÉES FICTIVES
            </p>
          </div>
        </div>
      </section>

      <section className="s" id="canada">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Québec</p>
            <h2 data-build="text" data-by="Stratégie">Une équipe à Casablanca, un prix en dollars canadiens.</h2>
          </div>
          <div>
            <div className="prose">
              <p data-build="text">
                Pas de bureau au Québec, et c’est ce qui rend le tarif plus bas. Vous ne payez ni loyer à Montréal ni marge de cabinet. Vous gardez un interlocuteur francophone et un devis dans votre devise.
              </p>
            </div>
            <div className="facts">
              <div className="fact" data-build="box" data-by="Architecture">
                <span className="mono">Décalage</span>
                <h3>Vos matinées</h3>
                <p>Vos matinées sont nos après-midis. Le studio est joignable de 9 h à 19 h, heure de Casablanca, ce qui couvre votre matinée au Québec. Vous écrivez le soir, la réponse vous attend au réveil.</p>
              </div>
              <div className="fact" data-build="box" data-by="Contenu">
                <span className="mono">Langue</span>
                <h3>En français</h3>
                <p>Tout se fait en français. Devis, documents et formation, y compris pour votre équipe.</p>
              </div>
              <div className="fact" data-build="box" data-by="Analytique">
                <span className="mono">Devis</span>
                <h3>Montant fixe</h3>
                <p>Montant en dollars canadiens, valable 30 jours, sans frais cachés.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s alt" id="crm">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">CRM</p>
            <h2 data-build="text" data-by="Logique CRM">Un CRM qui suit vos ventes, pas un abonnement de plus.</h2>
          </div>
          <div className="prose">
            <p data-build="text">
              Un logiciel prêt à l’emploi vous facture chaque utilisateur, chaque mois. Un CRM sur mesure se paie une fois et vous appartient. Nous écrivons vos étapes, vos devis et vos relances, et vous gardez le code et les données.
            </p>
            <div className="callout" data-build="box" data-by="Produit">
              <p>
                <strong>Preuve : Cocoinbox</strong>, notre propre CRM, en ligne depuis 2026. Boîte, fiches, relances, colonnes Nouveau / Qualifié / Devis / Gagné.
              </p>
              <Link className="btn" href="/realisations/crm-cocoinbox">
                Voir le CRM en action <span>↗</span>
              </Link>
            </div>
            <p data-build="text">
              Les montants affichés sont un exemple. Votre devis part de vos étapes réelles.
            </p>
          </div>
        </div>
      </section>

      <section className="s" id="livre">
        <div className="wrap">
          <p className="label" data-build="box">Ce qui est livré</p>
          <h2 data-build="text" data-by="Produit" style={{ maxWidth: 720, marginBottom: 40 }}>
            Six engagements avant de coder.
          </h2>
          <div className="grid6">
            <div className="cell" data-build="box" data-by="UX"><span className="mono">Étapes</span><p>Les étapes réelles du suivi, nommées comme l&apos;équipe les nomme.</p></div>
            <div className="cell" data-build="box" data-by="Architecture"><span className="mono">Droits</span><p>Qui voit, qui exporte, qui efface.</p></div>
            <div className="cell" data-build="box" data-by="Automatisation"><span className="mono">Relances et devis</span><p>Les relances et les devis dans le même dossier.</p></div>
            <div className="cell" data-build="box" data-by="Analytique"><span className="mono">Import</span><p>L&apos;import du fichier actuel, avec les colonnes gardées et celles jetées.</p></div>
            <div className="cell" data-build="box" data-by="Tests"><span className="mono">Hors périmètre</span><p>Ce qui n&apos;est pas un CRM et ne sera pas glissé dans le même écran.</p></div>
            <div className="cell" data-build="box" data-by="Frontend"><span className="mono">Remise</span><p>Le dépôt et l&apos;administration remis à l&apos;entreprise.</p></div>
          </div>
        </div>
      </section>

      <section className="s alt" id="passage">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Le passage</p>
            <h2 data-build="text" data-by="Stratégie">De votre demande au CRM livré, en 4 étapes.</h2>
          </div>
          <ol className="steps">
            <li className="step" data-build="box" data-by="Stratégie"><span className="n">1</span><div className="b"><h3>Votre demande</h3><p>2 minutes, sans engagement.</p></div></li>
            <li className="step" data-build="box" data-by="Marketing"><span className="n">2</span><div className="b"><h3>Réponse en 30 minutes</h3><p>Nous confirmons que c’est faisable.</p></div></li>
            <li className="step" data-build="box" data-by="Architecture"><span className="n">3</span><div className="b"><h3>Devis fixe en $ CA</h3><p>Sous 1 jour ouvré.</p></div></li>
            <li className="step" data-build="box" data-by="Produit"><span className="n">4</span><div className="b"><h3>Livraison</h3><p>Code, accès et hébergement à votre nom.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="s" id="montant">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Le montant</p>
            <h2 data-build="text" data-by="Analytique">Ce qui fait varier le prix d’un CRM.</h2>
          </div>
          <div>
            <div className="prose">
              <p data-build="text" data-by="Rédaction">Un consultant CRM au Québec facture souvent à l’heure. Notre devis fixe dépend de quatre choses : le nombre de rôles, les outils à connecter, les langues, la reprise de vos données.</p>
            </div>
            <div className="chips" data-build="box" data-by="Design">
              <span>Rôles</span>
              <span>Outils déjà en place</span>
              <span>Langues</span>
              <span>Reprise des données</span>
            </div>
            <div className="prose" style={{ marginTop: 26 }}>
              <p data-build="text">
                Pas sûr du budget? <a href="#contact" onClick={() => trackCta("price")}>Décrivez votre cas</a>, vous recevez une fourchette ferme, pas un appel commercial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="s alt" id="cas">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Preuve</p>
            <h2 data-build="text" data-by="Contenu">La preuve : un CRM livré, et le vôtre peut être le prochain.</h2>
          </div>
          <div className="slot" data-build="box" data-by="Tests">
            <span className="mono">Cocoinbox</span>
            <p>Cocoinbox est notre CRM en production. Nos clients au Canada bénéficient de la même méthode.</p>
          </div>
        </div>
      </section>

      <section className="s" id="villes">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Villes</p>
            <h2 data-build="text" data-by="SEO">Pages par ville.</h2>
          </div>
          <div className="cities">
            <Link className="city" data-build="box" data-by="SEO" href="/geo-location/crm/ca/montreal">Montréal <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="SEO" href="/geo-location/crm/ca/toronto">Toronto <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="s alt" id="faq">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Questions</p>
            <h2 data-build="text" data-by="Rédaction">Ce qu&apos;on demande le plus.</h2>
          </div>
          <div>
            {crmCanadaFaqs.map((item) => (
              <details key={item.q} data-build="box">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="s" id="contact">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Contact</p>
            <h2 data-build="text" data-by="Marketing">Recevez votre devis CRM en dollars canadiens.</h2>
            <p className="lede" data-build="text" style={{ marginTop: 18, fontSize: 15 }}>
              Réponse en 30 minutes. Devis fixe sous 1 jour ouvré. Aucun engagement.
            </p>
            <div className="actions" data-build="box">
              <a className="btn" href={waHref} target="_blank" rel="noopener noreferrer">
                WhatsApp direct <span>↗</span>
              </a>
            </div>
          </div>
          <form id="f" data-build="box" data-by="UX" noValidate onSubmit={() => trackCta("form")}>
            <div className="hp" aria-hidden="true">
              <label htmlFor="company_website">Site web</label>
              <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="f"><label htmlFor="nom">Nom <i>*</i></label><input id="nom" name="nom" autoComplete="name" required /></div>
            <div className="f"><label htmlFor="email">Email <i>*</i></label><input id="email" name="email" type="email" autoComplete="email" required /></div>
            <div className="f"><label htmlFor="tel">Téléphone</label><input id="tel" name="tel" type="tel" autoComplete="tel" /></div>
            <div className="f"><label htmlFor="soc">Société</label><input id="soc" name="soc" autoComplete="organization" /></div>
            <div className="f">
              <label htmlFor="offre">Offre <i>*</i></label>
              <select id="offre" name="offre" defaultValue="Logiciel sur mesure">
                <option>Logiciel sur mesure</option>
                <option>Création de site web à Casablanca</option>
                <option>Applications mobiles</option>
                <option>Agence SEO à Casablanca</option>
                <option>Hébergement web au Maroc</option>
                <option>Design graphique à Casablanca</option>
                <option>Développement API sur mesure</option>
                <option>Maintenance de site à Casablanca</option>
                <option>Audit et correction d&apos;un site</option>
                <option>Développement de plugin WordPress au Maroc</option>
              </select>
            </div>
            <div className="f">
              <label htmlFor="type">Type de demande</label>
              <select id="type" name="type" defaultValue="Pas encore défini">
                <option>Pas encore défini</option>
                <option>Un correctif ou un audit</option>
                <option>Un nouveau produit</option>
                <option>Un suivi après livraison</option>
              </select>
            </div>
            <div className="f full"><label htmlFor="projet">Projet <i>*</i></label><textarea id="projet" name="projet" placeholder="Le fichier actuel, l'étape qui bloque, le nombre de personnes qui s'en servent." required /></div>
            <div className="f full"><label htmlFor="site">Site</label><input id="site" name="site" inputMode="url" placeholder="https://" /></div>
            <div className="f full">
              <TurnstileCheck onToken={(token) => root.current?.querySelector("#f")?.setAttribute("data-turnstile", token)} />
            </div>
            <div className="f full"><button className="btn primary" type="submit" style={{ width: "100%" }}>Recevoir mon devis <span>↗</span></button></div>
            <div className="result f full" id="res" hidden>
              <p><strong>Votre message est prêt.</strong> Rien n&apos;est envoyé tant que vous ne l&apos;envoyez pas vous-même, par WhatsApp ou par email.</p>
              <textarea id="msg" readOnly aria-label="Message préparé" />
              <div className="row">
                <a className="btn primary sm" id="wa" href={waHref} target="_blank" rel="noopener noreferrer">Ouvrir WhatsApp <span>↗</span></a>
                <button className="btn sm" type="button" id="cp">Copier le message</button>
                <span className="addr">contact@byteforce.ma</span>
                <a className="btn sm" id="ml" href="mailto:contact@byteforce.ma">Ouvrir ma messagerie</a>
              </div>
            </div>
          </form>
        </div>
      </section>

      <a className="wa" href={waHref} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" /></svg>
        WhatsApp direct
        <span className="dslot" id="wslot" aria-hidden="true" />
      </a>
      <a className="dock" id="dock" href="#contact">
        Nous contacter
        <span className="dslot" id="dslot" aria-hidden="true" />
      </a>
      <div className="layer" id="layer" aria-hidden="true" />
    </main>
  );
}
