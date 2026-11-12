"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import { TurnstileCheck } from "@/components/turnstile-check";
import { startCrmCanadaMotion } from "@/components/crm-canada/motion";
import { logicielMarocFaqs } from "./copy";
import "@/components/crm-canada/crm-canada.css";

const posthogEnabled = Boolean(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST);
const waHref =
  "https://wa.me/212666650696?text=" +
  encodeURIComponent("Bonjour Byte Force, je souhaite un devis pour un logiciel sur mesure au Maroc.");

function trackCta(position: "hero" | "price" | "form") {
  if (posthogEnabled) posthog.capture("logiciel_maroc_cta", { position, page: "/developpement-logiciel-sur-mesure-maroc" });
}

export function LogicielMarocPage() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    return startCrmCanadaMotion(node, {
      intro: "Bonjour Byte Force, je souhaite décrire un projet (développement logiciel sur mesure au Maroc).",
      subject: "Projet logiciel sur mesure au Maroc",
      country: "Maroc",
      city: "Casablanca",
      pageUrl: "https://byteforce.ma/developpement-logiciel-sur-mesure-maroc",
    });
  }, []);

  return (
    <main ref={root} className="cursor-page" data-landing>
      <section className="hero">
        <div className="wrap">
          <div>
            <nav className="crumbs" data-build="box" data-by="Design" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span aria-hidden="true"> · </span>
              <span>Développement logiciel sur mesure Maroc</span>
            </nav>
            <div className="eyebrow" data-build="box" data-by="Design">
              <span className="live" />
              DÉVELOPPEMENT LOGICIEL · MAROC
            </div>
            <h1 data-build="text" data-by="Rédaction">
              Combien coûte un développement logiciel sur mesure au Maroc?
            </h1>
            <p className="lede" data-build="text" data-by="Contenu">
              Un outil métier ciblé démarre à 25 000 MAD. Un CRM ou un ERP pour une PME se situe entre 45 000 et 95 000 MAD. Byte Force le construit à Casablanca, avec un devis fixe en dirhams, sans abonnement par utilisateur. Vous savez le prix avant que le travail commence.
            </p>
            <div className="actions" data-build="box" data-by="Frontend">
              <a className="btn primary" href="#contact" onClick={() => trackCta("hero")}>
                Recevoir mon devis en MAD <span>↗</span>
              </a>
              <Link className="btn" href="/realisations/dealkhir">
                Voir un logiciel livré (Dealkhir)
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
                  <span>Flux</span>
                  <span className="on">Dossiers</span>
                  <span>Rôles</span>
                  <span>Documents</span>
                </div>
                <span className="chip">EXEMPLE</span>
              </div>
              <div className="board">
                <div className="col">
                  <h4>
                    <i style={{ background: "#8B5CF6" }} />
                    À traiter<span>2</span>
                  </h4>
                  <div className="lead" style={{ ["--n" as string]: 0 }}>
                    <b>Dossier A</b>
                    <small>Demande reçue</small>
                  </div>
                  <div className="lead" style={{ ["--n" as string]: 1 }}>
                    <b>Dossier B</b>
                    <small>Pièce manquante</small>
                    <span className="tag">Relance</span>
                  </div>
                </div>
                <div className="col">
                  <h4>
                    <i style={{ background: "#3B82F6" }} />
                    En cours<span>1</span>
                  </h4>
                  <div className="lead" style={{ ["--n" as string]: 2 }}>
                    <b>Dossier C</b>
                    <small>Saisi par l’équipe</small>
                  </div>
                </div>
                <div className="col">
                  <h4>
                    <i style={{ background: "#F59E0B" }} />
                    À valider<span>2</span>
                  </h4>
                  <div className="lead" style={{ ["--n" as string]: 3 }}>
                    <b>Dossier D</b>
                    <small>En attente</small>
                  </div>
                  <div className="lead" style={{ ["--n" as string]: 4 }}>
                    <b>Dossier E</b>
                    <small>Relance mardi</small>
                    <span className="tag">Relance</span>
                  </div>
                </div>
                <div className="col">
                  <h4>
                    <i style={{ background: "#10B981" }} />
                    Livré<span>1</span>
                  </h4>
                  <div className="lead" style={{ ["--n" as string]: 5 }}>
                    <b>Dossier F</b>
                    <small>Clôturé</small>
                  </div>
                </div>
              </div>
              <div className="mock-foot">
                <span>Droits : qui voit, qui valide, qui exporte</span>
                <strong>Étapes nommées par l’équipe</strong>
              </div>
            </div>
            <p className="cap" data-build="box">
              ÉCRAN D’EXEMPLE · DONNÉES FICTIVES
            </p>
          </div>
        </div>
      </section>

      <section className="s" id="maroc">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Maroc</p>
            <h2 data-build="text" data-by="Stratégie">Une équipe à Casablanca, un devis en dirhams.</h2>
          </div>
          <div>
            <div className="prose">
              <p data-build="text">
                Le studio est au Technopark, à Casablanca. Le développement logiciel sur mesure au Maroc se cadre au bureau ou en visio, en français. Vous payez un montant fixe, pas une licence par utilisateur.
              </p>
            </div>
            <div className="facts">
              <div className="fact" data-build="box" data-by="Architecture">
                <span className="mono">Lieu</span>
                <h3>Technopark</h3>
                <p>Bureau à Casablanca, joignable de 9 h à 19 h, du lundi au vendredi. Un déplacement se décide seulement s’il est écrit dans le périmètre.</p>
              </div>
              <div className="fact" data-build="box" data-by="Contenu">
                <span className="mono">Langue</span>
                <h3>En français</h3>
                <p>Devis, documents et formation se font en français, y compris pour l’équipe qui utilisera le logiciel.</p>
              </div>
              <div className="fact" data-build="box" data-by="Analytique">
                <span className="mono">Devis</span>
                <h3>En dirhams</h3>
                <p>Montant fixe en dirhams, sans abonnement par utilisateur. Vous connaissez le prix avant que le travail commence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s alt" id="logiciel">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Logiciel</p>
            <h2 data-build="text" data-by="Produit">Un logiciel qui suit votre métier, pas un abonnement de plus.</h2>
          </div>
          <div className="prose">
            <p data-build="text">
              Un logiciel standard vous facture chaque utilisateur, chaque mois, et vous force à changer vos étapes. Un logiciel sur mesure se paie une fois et vous appartient. Nous écrivons vos flux, vos rôles et vos documents, et vous gardez le code et les données.
            </p>
            <div className="callout" data-build="box" data-by="Produit">
              <p>
                <strong>Preuve : Dealkhir</strong>, plateforme en ligne à Casablanca depuis 2024. Le même studio, le même type de livraison : un outil écrit pour un usage réel, pas un modèle téléchargé.
              </p>
              <Link className="btn" href="/realisations/dealkhir">
                Voir le logiciel en action <span>↗</span>
              </Link>
            </div>
            <p data-build="text">
              Les dossiers affichés sur l’écran d’exemple sont fictifs. Votre devis part de vos flux réels. Le détail des fourchettes est sur le{" "}
              <Link href="/insights/prix-logiciel-sur-mesure-maroc">guide des prix d’un logiciel sur mesure</Link>.
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
            <div className="cell" data-build="box" data-by="UX"><span className="mono">Flux</span><p>Les étapes réelles du travail, nommées comme l’équipe les nomme.</p></div>
            <div className="cell" data-build="box" data-by="Architecture"><span className="mono">Droits</span><p>Qui voit, qui valide, qui exporte.</p></div>
            <div className="cell" data-build="box" data-by="Automatisation"><span className="mono">Documents</span><p>Devis, bons et factures dans le même dossier.</p></div>
            <div className="cell" data-build="box" data-by="Analytique"><span className="mono">Import</span><p>La reprise d’Excel, avec les colonnes gardées et celles jetées.</p></div>
            <div className="cell" data-build="box" data-by="Tests"><span className="mono">Hors périmètre</span><p>Ce qui n’est pas ce logiciel et ne sera pas glissé dans le même écran.</p></div>
            <div className="cell" data-build="box" data-by="Frontend"><span className="mono">Remise</span><p>Le dépôt, les accès et l’hébergement remis à l’entreprise.</p></div>
          </div>
        </div>
      </section>

      <section className="s alt" id="passage">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Le passage</p>
            <h2 data-build="text" data-by="Stratégie">De votre demande au logiciel livré, en 4 étapes.</h2>
          </div>
          <ol className="steps">
            <li className="step" data-build="box" data-by="Stratégie"><span className="n">1</span><div className="b"><h3>Votre demande</h3><p>2 minutes, sans engagement. Le fichier, l’URL, ou le flux qui bloque.</p></div></li>
            <li className="step" data-build="box" data-by="Marketing"><span className="n">2</span><div className="b"><h3>Réponse en 30 minutes</h3><p>Nous confirmons que le sujet est bien un logiciel sur mesure.</p></div></li>
            <li className="step" data-build="box" data-by="Architecture"><span className="n">3</span><div className="b"><h3>Devis fixe en MAD</h3><p>Sous 1 jour ouvré, avant le code.</p></div></li>
            <li className="step" data-build="box" data-by="Produit"><span className="n">4</span><div className="b"><h3>Livraison</h3><p>Code, accès et hébergement à votre nom. Première version en 4 à 6 semaines.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="s" id="montant">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Le montant</p>
            <h2 data-build="text" data-by="Analytique">Ce qui fait varier le prix d’un logiciel sur mesure.</h2>
          </div>
          <div>
            <div className="prose">
              <p data-build="text" data-by="Rédaction">
                Un développement logiciel sur mesure au Maroc démarre à 25 000 MAD pour un outil métier ciblé. Un CRM ou un ERP pour PME se situe entre 45 000 MAD et 95 000 MAD. Le devis fixe dépend de quatre choses : le nombre de rôles, les outils à connecter, les langues, la reprise de vos données.
              </p>
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

      <section className="s alt" id="offres">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Offres</p>
            <h2 data-build="text" data-by="SEO">Le logiciel, puis le cas précis.</h2>
          </div>
          <div className="cities">
            <Link className="city" data-build="box" data-by="Produit" href="/crm-sur-mesure-maroc">CRM sur mesure <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="Architecture" href="/developpement-erp-maroc">ERP sur mesure <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="Frontend" href="/developpement-saas-maroc">SaaS <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="UX" href="/developpement-application-mobile-maroc">Application mobile <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="Automatisation" href="/solutions/remplacer-excel">Remplacer Excel <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="Analytique" href="/insights/prix-logiciel-sur-mesure-maroc">Guide des prix <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="s" id="villes">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Villes</p>
            <h2 data-build="text" data-by="SEO">Le même logiciel, selon la ville.</h2>
          </div>
          <div className="cities">
            <Link className="city" data-build="box" data-by="SEO" href="/developpement-logiciel-casablanca">Casablanca <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="SEO" href="/villes/rabat">Rabat <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="SEO" href="/villes/marrakech">Marrakech <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="SEO" href="/villes/tanger">Tanger <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="SEO" href="/villes/fes">Fès <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="SEO" href="/villes/agadir">Agadir <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="s alt" id="faq">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Questions</p>
            <h2 data-build="text" data-by="Rédaction">Ce qu’on demande le plus.</h2>
          </div>
          <div>
            {logicielMarocFaqs.map((item) => (
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
            <h2 data-build="text" data-by="Marketing">Recevez votre devis logiciel en dirhams.</h2>
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
                <option>CRM sur mesure</option>
                <option>ERP sur mesure</option>
                <option>Remplacement d’Excel</option>
                <option>Application mobile</option>
                <option>SaaS</option>
              </select>
            </div>
            <div className="f">
              <label htmlFor="type">Type de demande</label>
              <select id="type" name="type" defaultValue="Un nouveau produit">
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
              <p><strong>Votre message est prêt.</strong> Rien n’est envoyé tant que vous ne l’envoyez pas vous-même, par WhatsApp ou par email.</p>
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
