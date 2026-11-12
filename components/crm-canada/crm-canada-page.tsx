"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { TurnstileCheck } from "@/components/turnstile-check";
import { startCrmCanadaMotion } from "./motion";
import "./crm-canada.css";

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
              <span>CRM au Canada</span>
            </nav>
            <div className="eyebrow" data-build="box" data-by="Design">
              <span className="live" />
              CRM SUR MESURE · CANADA
            </div>
            <h1 data-build="text" data-by="Rédaction">
              CRM au
              <br />
              <span className="nosplit">Canada</span>
            </h1>
            <p className="lede" data-build="text" data-by="Contenu">
              Byte Force conçoit des CRM sur mesure pour des entreprises au Canada, depuis Casablanca. Il n&apos;y a pas de bureau au Canada : le studio est au Technopark. Les projets canadiens du catalogue sont à Montréal, Coco Inbox et Tourispeak depuis 2024, CRM Cocoinbox en ligne en 2026. Le cadre de l&apos;offre est{" "}
              <Link href="/developpement-logiciel-sur-mesure-maroc/crm">CRM sur mesure</Link>.
            </p>
            <div className="actions" data-build="box" data-by="Frontend">
              <a className="btn primary" href="#contact">
                Décrire le projet <span>↗</span>
              </a>
              <a className="btn" href="#livre">
                Voir ce qui est livré
              </a>
            </div>
            <div className="note" data-build="box">
              <span className="live" />
              <span>
                <b>Trente minutes, réponse sous un jour ouvré.</b>
                Devis en dollars canadiens, studio ouvert 9 h à 19 h, heure de Casablanca.
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
            <p className="label" data-build="box">Canada</p>
            <h2 data-build="text" data-by="Stratégie">Un studio à Casablanca, des clients au Canada.</h2>
          </div>
          <div>
            <div className="prose">
              <p data-build="text">
                <strong>Byte Force n&apos;a pas de bureau au Canada.</strong> Le studio est au Technopark, à Casablanca. Les projets canadiens du catalogue sont à Montréal : Coco Inbox et Tourispeak depuis 2024, CRM Cocoinbox en ligne en 2026. Ce n&apos;est pas une présence dans chaque province. Les pages de Calgary, Vancouver, Toronto, Ottawa ou Québec le redisent.
              </p>
            </div>
            <div className="facts">
              <div className="fact" data-build="box" data-by="Architecture">
                <span className="mono">Décalage</span>
                <h3>Plusieurs heures</h3>
                <p>Montréal, Québec, Ottawa et Toronto laissent une matinée canadienne face à l&apos;après-midi marocaine. Calgary et Vancouver laissent moins de temps commun. Les heures du studio restent 9 h à 19 h, du lundi au vendredi, heure de Casablanca. On ne promet pas de répondre à minuit.</p>
              </div>
              <div className="fact" data-build="box" data-by="Contenu">
                <span className="mono">Langue</span>
                <h3>En français</h3>
                <p>Ces pages sont en français. Un produit peut être en anglais si l&apos;équipe au Canada le demande.</p>
              </div>
              <div className="fact" data-build="box" data-by="Analytique">
                <span className="mono">Devis</span>
                <h3>En dollars canadiens</h3>
                <p>Les devis pour une société canadienne se discutent en dollars canadiens. Aucun montant n&apos;est affiché. Trente minutes pour voir le geste, réponse sous un jour ouvré.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s alt" id="crm">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">CRM</p>
            <h2 data-build="text" data-by="Logique CRM">Le suivi commercial de cette entreprise-là.</h2>
          </div>
          <div className="prose">
            <p data-build="text">
              Un CRM sur mesure suit les étapes réelles, les devis, les relances et les droits de l&apos;entreprise. Ce n&apos;est pas le nom d&apos;un abonnement. Il se justifie quand le pipeline tient dans la tête d&apos;une personne, ou dans un fichier que deux commerciaux ne peuvent pas ouvrir ensemble sans se marcher dessus. Byte Force écrit les étapes que l&apos;équipe utilise déjà, pas celles d&apos;un modèle téléchargé.
            </p>
            <div className="callout" data-build="box" data-by="Produit">
              <p>
                Le catalogue public a une page pour ce type d&apos;outil : <strong>CRM Cocoinbox</strong>, en ligne depuis Montréal en 2026. La capture montre la boîte, les fiches, et les colonnes Nouveau, Qualifié, Devis et Gagné.
              </p>
              <Link className="btn" href="/realisations/crm-cocoinbox">
                Voir la réalisation <span>↗</span>
              </Link>
            </div>
            <p data-build="text">
              Les montants dessinés sur cette capture ne sont pas un chiffre du studio. Il n&apos;y a pas, dans le catalogue, un second CRM présenté comme celui d&apos;une entreprise casablancaise. On ne comble pas ce manque avec un autre projet.
            </p>
          </div>
        </div>
      </section>

      <section className="s" id="livre">
        <div className="wrap">
          <p className="label" data-build="box">Ce qui est livré</p>
          <h2 data-build="text" data-by="Produit" style={{ maxWidth: 720, marginBottom: 40 }}>
            Six choses écrites avant le code.
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
            <h2 data-build="text" data-by="Stratégie">De la première question à la remise.</h2>
          </div>
          <ol className="steps">
            <li className="step" data-build="box" data-by="Stratégie"><span className="n">1</span><div className="b"><h3>Le geste</h3><p>On nomme le geste pour le Canada, et ce qui attend la première version.</p></div></li>
            <li className="step" data-build="box" data-by="Marketing"><span className="n">2</span><div className="b"><h3>Trente minutes</h3><p>Trente minutes pour dire si le sujet est bien cette offre. La réponse part sous un jour ouvré.</p></div></li>
            <li className="step" data-build="box" data-by="Architecture"><span className="n">3</span><div className="b"><h3>Le décalage</h3><p>Plusieurs heures de décalage : matin sur place, après-midi à Casablanca, dans les heures du studio. Le montant se discute en dollars canadiens, après le périmètre, pas avant.</p></div></li>
            <li className="step" data-build="box" data-by="Produit"><span className="n">4</span><div className="b"><h3>La remise</h3><p>À la remise, le dépôt et les comptes d&apos;hébergement livrés sont à l&apos;entreprise.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="s" id="montant">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Le montant</p>
            <h2 data-build="text" data-by="Analytique">Le prix suit le périmètre.</h2>
          </div>
          <div>
            <p className="big" data-build="text" data-by="Rédaction">Aucune fourchette en dollars canadiens n&apos;est publiée.</p>
            <div className="chips" data-build="box" data-by="Design">
              <span>Rôles</span>
              <span>Outils déjà en place</span>
              <span>Langues</span>
              <span>Reprise des données</span>
              <span>Déplacement, s&apos;il est écrit</span>
            </div>
            <div className="prose" style={{ marginTop: 26 }}>
              <p data-build="text">Le montant suit le périmètre. Le premier échange ne donne pas un prix public. Il dit si un chiffrage a un sens.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="s alt" id="cas">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Cas à écrire</p>
            <h2 data-build="text" data-by="Contenu">Pas encore de cas canadien.</h2>
          </div>
          <div className="slot" data-build="box" data-by="Tests">
            <span className="mono">Emplacement libre</span>
            <p>Aucun projet du catalogue n&apos;est étiqueté Canada pour CRM. Le témoignage et la fiche restent à fournir. On n&apos;invente pas un client pour remplir la page.</p>
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
            <details data-build="box"><summary>Y a-t-il un bureau au Canada ?</summary><p>Non. Le seul bureau est à Casablanca. Le travail au Canada se fait en visio. Un déplacement se décide seulement s&apos;il est écrit dans le périmètre.</p></details>
            <details data-build="box"><summary>Quel prix pour un CRM au Canada ?</summary><p>Aucune fourchette en dollars canadiens n&apos;est publiée. Le montant suit le périmètre : rôles, outils déjà en place, langues, reprise des données, déplacement s&apos;il est écrit.</p></details>
            <details data-build="box"><summary>Que comprend un CRM au Canada ?</summary><p>Les étapes réelles du suivi, nommées comme l&apos;équipe les nomme. Les droits : qui voit, qui exporte, qui efface. Les relances et les devis dans le même dossier.</p></details>
            <details data-build="box"><summary>Comment se passent les points au Canada ?</summary><p>Plusieurs heures de décalage : matin sur place, après-midi à Casablanca, dans les heures du studio. Le téléphone est le +212 666 650 696. La langue de cadrage est le français.</p></details>
            <details data-build="box"><summary>Quelle est la première étape ?</summary><p>Écrire avec le fichier, l&apos;URL, ou le geste qui bloque. Trente minutes suffisent souvent. Le périmètre écrit vient avant le code et avant le montant.</p></details>
          </div>
        </div>
      </section>

      <section className="s" id="contact">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Contact</p>
            <h2 data-build="text" data-by="Marketing">Décrire le projet.</h2>
            <p className="lede" data-build="text" style={{ marginTop: 18, fontSize: 15 }}>
              Réponse sous un jour ouvré, à <span className="addr">contact@byteforce.ma</span> ou au <span className="addr">+212 666 650 696</span>. Bureau au Technopark, Casablanca.
            </p>
            <div className="actions" data-build="box">
              <a className="btn" href={waHref} target="_blank" rel="noopener noreferrer">
                WhatsApp direct <span>↗</span>
              </a>
            </div>
          </div>
          <form id="f" data-build="box" data-by="UX" noValidate>
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
            <div className="f full"><button className="btn primary" type="submit" style={{ width: "100%" }}>Préparer la demande <span>↗</span></button></div>
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
