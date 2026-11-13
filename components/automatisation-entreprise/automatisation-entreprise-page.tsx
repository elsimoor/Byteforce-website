"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import { TurnstileCheck } from "@/components/turnstile-check";
import { startCrmCanadaMotion } from "@/components/crm-canada/motion";
import { automatisationFaqs } from "./copy";
import "@/components/crm-canada/crm-canada.css";

const posthogEnabled = Boolean(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST);
const pagePath = "/solutions/automatisation-entreprise";
const waHref =
  "https://wa.me/212666650696?text=" +
  encodeURIComponent("Bonjour Byte Force, je souhaite raconter un circuit à automatiser.");

function trackCta(position: "hero" | "price" | "form") {
  if (posthogEnabled) posthog.capture("automatisation_entreprise_cta", { position, page: pagePath });
}

export function AutomatisationEntreprisePage() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    return startCrmCanadaMotion(node, {
      intro: "Bonjour Byte Force, je souhaite décrire un projet (automatisation d'entreprise au Maroc).",
      subject: "Projet automatisation d'entreprise",
      country: "Maroc",
      city: "Casablanca",
      pageUrl: `https://byteforce.ma${pagePath}`,
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
              <Link href="/solutions">Solutions</Link>
              <span aria-hidden="true"> · </span>
              <span>Automatisation d’entreprise</span>
            </nav>
            <div className="eyebrow" data-build="box" data-by="Design">
              <span className="live" />
              AUTOMATISATION DE PROCESSUS · CASABLANCA
            </div>
            <h1 data-build="text" data-by="Rédaction">
              Automatisation d’entreprise au Maroc : fini la ressaisie entre vos outils
            </h1>
            <p className="lede" data-build="text" data-by="Contenu">
              Une demande arrive, quelqu’un la recopie, quelqu’un d’autre la relance, le client redemande où ça en est. Nous supprimons ces tâches manuelles en connectant les logiciels que vous gardez.
            </p>
            <div className="actions" data-build="box" data-by="Frontend">
              <a className="btn primary" href="#contact" onClick={() => trackCta("hero")}>
                Recevoir un devis gratuit en 24h <span>↗</span>
              </a>
              <a className="btn" href={waHref} target="_blank" rel="noopener noreferrer">
                Écrire sur WhatsApp
              </a>
            </div>
            <div className="note" data-build="box">
              <span className="live" />
              <span>
                <b>Réponse sous un jour ouvré.</b> Bureau au Technopark, Casablanca.
              </span>
            </div>
          </div>
          <div>
            <div className="mock" data-build="box" data-by="Automatisation">
              <div className="mock-top">
                <div className="tabs">
                  <span>Avant</span>
                  <span className="on">Après</span>
                </div>
                <span className="chip">EXEMPLE</span>
              </div>
              <div className="board">
                <div className="col">
                  <h4>
                    <i style={{ background: "#DC2626" }} />
                    Avant
                  </h4>
                  <div className="lead" style={{ ["--n" as string]: 0 }}>
                    <b>Dossier A</b>
                    <small>Le client écrit sur WhatsApp</small>
                  </div>
                  <div className="lead" style={{ ["--n" as string]: 1 }}>
                    <b>Dossier B</b>
                    <small>Quelqu’un recopie dans Excel</small>
                  </div>
                  <div className="lead" style={{ ["--n" as string]: 2 }}>
                    <b>Dossier C</b>
                    <small>Le devis part par email</small>
                  </div>
                  <div className="lead" style={{ ["--n" as string]: 3 }}>
                    <b>Dossier D</b>
                    <small>Le statut vit dans une tête</small>
                  </div>
                </div>
                <div className="col">
                  <h4>
                    <i style={{ background: "#0D9488" }} />
                    Après
                  </h4>
                  <div className="lead" style={{ ["--n" as string]: 4 }}>
                    <b>Dossier A</b>
                    <small>La demande WhatsApp est reçue</small>
                  </div>
                  <div className="lead" style={{ ["--n" as string]: 5 }}>
                    <b>Dossier B</b>
                    <small>Un dossier a un statut partagé</small>
                  </div>
                  <div className="lead" style={{ ["--n" as string]: 6 }}>
                    <b>Dossier C</b>
                    <small>Le devis est préparé et envoyé</small>
                  </div>
                  <div className="lead" style={{ ["--n" as string]: 7 }}>
                    <b>Dossier D</b>
                    <small>Le client est prévenu à chaque étape</small>
                  </div>
                </div>
              </div>
              <div className="mock-foot">
                <span>Pas l’absence d’un robot</span>
                <strong>L’absence d’un état partagé</strong>
              </div>
            </div>
            <p className="cap" data-build="box">
              ÉCRAN D’EXEMPLE · DONNÉES FICTIVES
            </p>
          </div>
        </div>
      </section>

      <section className="s" id="casablanca">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Casablanca</p>
            <h2 data-build="text" data-by="Stratégie">Les circuits d’information d’une PME, pas une usine.</h2>
          </div>
          <div>
            <div className="prose">
              <p data-build="text">
                Ça marche à trois. À huit, les oublis sont le produit. Chaque circuit part de votre façon de travailler : WhatsApp, Excel, email, votre ERP. Nous ne remplaçons pas vos outils. Nous arrêtons la ressaisie entre eux.
              </p>
            </div>
            <div className="facts">
              <div className="fact" data-build="box" data-by="Architecture">
                <span className="mono">Bureau</span>
                <h3>Technopark</h3>
                <p>Boulevard Dammam, Aïn Chock, 20001 Casablanca. Du lundi au vendredi, de 9 h à 19 h.</p>
              </div>
              <div className="fact" data-build="box" data-by="Automatisation">
                <span className="mono">Ce que nous faisons</span>
                <h3>Les circuits</h3>
                <p>Demandes, devis, factures et suivi client. L’information passe d’un outil à l’autre sans être recopiée.</p>
              </div>
              <div className="fact" data-build="box" data-by="Tests">
                <span className="mono">Ce que nous ne faisons pas</span>
                <h3>Pas l’usine</h3>
                <p>Ni automates, ni machines, ni lignes de production. L’automatisation industrielle est un autre métier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s alt" id="offre">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Offre</p>
            <h2 data-build="text" data-by="Produit">Un workflow, ce sont des états, et qui peut les changer.</h2>
          </div>
          <div className="prose">
            <p data-build="text">
              Le client écrit sur WhatsApp. Quelqu’un note dans Excel. Un devis part par email. Le statut vit dans la tête de la personne qui a répondu. Le workflow, ce sont les états d’un dossier et qui a le droit de les changer, y compris pour revenir en arrière. Connecter les outils, c’est arrêter la ressaisie entre des logiciels que l’on garde. La construction est sur l’<Link href="/developpement-logiciel-sur-mesure-maroc/automatisation">automatisation logicielle</Link>.
            </p>
            <div className="callout" data-build="box" data-by="UX">
              <p>
                <strong>L’erreur qui coûte cher : automatiser cinq outils le même mois.</strong> Le premier circuit livré et utilisé apprend plus que cinq maquettes. On choisit celui dont l’oubli se voit chez le client.
              </p>
              <Link className="btn" href="/services/api-backend">
                API sur mesure <span>↗</span>
              </Link>
            </div>
            <p data-build="text">Les dossiers de l’écran d’exemple sont fictifs. Ils ne sont pas un client, ni des heures gagnées.</p>
          </div>
        </div>
      </section>

      <section className="s" id="livre">
        <div className="wrap">
          <p className="label" data-build="box">Ce qui est livré</p>
          <h2 data-build="text" data-by="Produit" style={{ maxWidth: 760, marginBottom: 40 }}>
            Six engagements avant de coder.
          </h2>
          <div className="grid6">
            <div className="cell" data-build="box" data-by="Marketing"><span className="mono">Demandes</span><p>Une demande arrive par WhatsApp, email ou formulaire : le dossier est créé, le devis préparé, le suivi planifié.</p></div>
            <div className="cell" data-build="box" data-by="Analytique"><span className="mono">Factures</span><p>Les factures sortent du dossier, les relances partent à temps, avant que l’oubli ne pèse sur la trésorerie.</p></div>
            <div className="cell" data-build="box" data-by="Architecture"><span className="mono">Commandes</span><p>La boutique, les fichiers Excel et l’ERP échangent : fini les écarts de stock et les doubles saisies.</p></div>
            <div className="cell" data-build="box" data-by="UX"><span className="mono">Suivi</span><p>Le client sait où en est sa demande, et l’équipe voit le même statut que lui.</p></div>
            <div className="cell" data-build="box" data-by="Contenu"><span className="mono">Reporting</span><p>Les chiffres de la semaine arrivent calculés à partir des mêmes données que celles de l’équipe.</p></div>
            <div className="cell" data-build="box" data-by="Automatisation"><span className="mono">Documents</span><p>Les fichiers Excel, PDF et emails entrants sont lus puis rangés dans le bon dossier, sans recopie.</p></div>
          </div>
        </div>
      </section>

      <section className="s alt" id="passage">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Le passage</p>
            <h2 data-build="text" data-by="Stratégie">Pas de cahier des charges de 40 pages.</h2>
          </div>
          <ol className="steps">
            <li className="step" data-build="box" data-by="Stratégie"><span className="n">1</span><div className="b"><h3>Vous racontez un circuit</h3><p>Un appel ou un message : une journée type, de la demande du client jusqu’à la facture.</p></div></li>
            <li className="step" data-build="box" data-by="Design"><span className="n">2</span><div className="b"><h3>Nous cartographions les états</h3><p>Les étapes d’un dossier, qui peut les changer et selon quelles règles. Une page, validée avec vous.</p></div></li>
            <li className="step" data-build="box" data-by="Produit"><span className="n">3</span><div className="b"><h3>Le premier circuit est utilisé</h3><p>Mis en service avec votre équipe, pas seulement montré en maquette.</p></div></li>
            <li className="step" data-build="box" data-by="Analytique"><span className="n">4</span><div className="b"><h3>Nous mesurons, puis étendons</h3><p>On regarde ce que le circuit a changé, puis on choisit le suivant avec vous.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="s" id="montant">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Le montant</p>
            <h2 data-build="text" data-by="Analytique">Aucune fourchette n’est publiée.</h2>
          </div>
          <div className="prose">
            <p data-build="text" data-by="Rédaction">
              Le prix dépend du nombre d’états, des outils à connecter et du nombre d’utilisateurs. Le devis est gratuit. Si un logiciel n’a pas de connexion prête, une <Link href="/services/api-backend">API sur mesure</Link> se discute dans le même périmètre.
            </p>
            <div className="chips" data-build="box" data-by="Design">
              <span>WhatsApp Business</span>
              <span>Excel et Google Sheets</span>
              <span>Email</span>
              <span>Odoo</span>
              <span>n8n et Make</span>
              <span>API sur mesure</span>
            </div>
            <p data-build="text" style={{ marginTop: 26 }}>
              Pas sûr du circuit ? <a href="#contact" onClick={() => trackCta("price")}>Racontez-le</a>. Quelques lignes suffisent : qui fait quoi, avec quels outils, et où ça coince.
            </p>
          </div>
        </div>
      </section>

      <section className="s alt" id="liens">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Offres</p>
            <h2 data-build="text" data-by="Produit">La construction, puis les villes.</h2>
          </div>
          <div>
            <div className="cities">
              <Link className="city" data-build="box" data-by="Automatisation" href="/developpement-logiciel-sur-mesure-maroc/automatisation">Côté construction <span>↗</span></Link>
              <Link className="city" data-build="box" data-by="Architecture" href="/services/api-backend">API et backend <span>↗</span></Link>
              <Link className="city" data-build="box" data-by="Contenu" href="/insights/automatisation-entreprise-avec-ia">Avec ou sans IA <span>↗</span></Link>
              <Link className="city" data-build="box" data-by="SEO" href="/realisations">Réalisations <span>↗</span></Link>
            </div>
            <div className="cities" style={{ marginTop: 12 }}>
              <Link className="city" data-build="box" data-by="SEO" href="/geo-location/automatisation-des-processus/ma/casablanca">Casablanca <span>↗</span></Link>
              <Link className="city" data-build="box" data-by="SEO" href="/geo-location/automatisation-des-processus/ma/rabat">Rabat <span>↗</span></Link>
              <Link className="city" data-build="box" data-by="SEO" href="/geo-location/automatisation-des-processus/ma/marrakech">Marrakech <span>↗</span></Link>
              <Link className="city" data-build="box" data-by="SEO" href="/geo-location/automatisation-des-processus/ma/tanger">Tanger <span>↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="s" id="faq">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Questions</p>
            <h2 data-build="text" data-by="Rédaction">Ce qu’on demande le plus.</h2>
          </div>
          <div>
            {automatisationFaqs.map((item) => (
              <details key={item.q} data-build="box">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="s alt" id="contact">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Contact</p>
            <h2 data-build="text" data-by="Marketing">Racontez un circuit, nous répondons sous un jour ouvré.</h2>
            <p className="lede" data-build="text" style={{ marginTop: 18, fontSize: 15 }}>
              contact@byteforce.ma · +212 666 650 696 · Technopark, Bd Dammam, Aïn Chock. Article de <Link href="/walid-moultamiss">Walid Moultamiss</Link>.
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
              <select id="offre" name="offre" defaultValue="Automatisation d'entreprise">
                <option>Automatisation d'entreprise</option>
                <option>Logiciel sur mesure</option>
                <option>Développement API sur mesure</option>
                <option>Création de site web à Casablanca</option>
                <option>Applications mobiles</option>
                <option>Agence SEO à Casablanca</option>
                <option>Hébergement web au Maroc</option>
                <option>Design graphique à Casablanca</option>
                <option>Maintenance de site à Casablanca</option>
                <option>Audit et correction d’un site</option>
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
            <div className="f full"><label htmlFor="projet">Votre circuit <i>*</i></label><textarea id="projet" name="projet" placeholder="Qui fait quoi, avec quels outils, et où ça coince." required /></div>
            <div className="f full"><label htmlFor="site">Site</label><input id="site" name="site" inputMode="url" placeholder="https://" /></div>
            <div className="f full">
              <TurnstileCheck onToken={(token) => root.current?.querySelector("#f")?.setAttribute("data-turnstile", token)} />
            </div>
            <div className="f full"><button className="btn primary" type="submit" style={{ width: "100%" }}>Envoyer la demande <span>↗</span></button></div>
            <p className="f full" style={{ margin: 0, color: "var(--muted)", fontSize: 13 }}>Vous choisirez ensuite d’envoyer par email ou d’ouvrir WhatsApp avec le message déjà rédigé.</p>
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
