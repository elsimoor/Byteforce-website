<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>Logiciel sur mesure à Casablanca</title>
<script src="./vendor/react.js"></script>
<script src="./vendor/react-dom.js"></script>
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=JetBrains+Mono:wght@500&amp;family=IBM+Plex+Sans:wght@400;500;600&amp;family=Space+Grotesk:wght@500;700&amp;family=Fraunces:wght@600;700&amp;family=DM+Sans:wght@500;700&amp;display=swap">
<style>
body{margin:0;background:#F5F6FF;color:#0E1030;font-family:'Inter',system-ui,sans-serif}
a{color:#1D2BD1}a:hover{color:#0E1670}
@keyframes bfIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes bfGrow{from{transform:scaleY(0)}to{transform:scaleY(1)}}
@keyframes bfLine{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:none}}
@keyframes bfFade{from{opacity:0}to{opacity:1}}
@keyframes bfDot{from{opacity:0.15;transform:scale(0.4)}to{opacity:1;transform:scale(1)}}
@keyframes bfTap{0%,100%{transform:scale(1)}45%{transform:scale(0.94)}}
@keyframes bfRipple{0%,50%{opacity:0;transform:scale(0)}55%{opacity:0.45;transform:scale(0.3)}100%{opacity:0;transform:scale(3)}}
@keyframes bfConfirm{0%,55%{background:#FF7A29}72%,100%{background:#22C55E}}
@keyframes bfOut{0%,55%{opacity:1}68%,100%{opacity:0}}
@keyframes bfInLbl{0%,55%{opacity:0}72%,100%{opacity:1}}
@keyframes bfRoute{0%{transform:translate(0,0)}40%{transform:translate(70px,-30px)}100%{transform:translate(172px,-62px)}}
@keyframes bfTypeL{from{transform:translateY(0)}to{transform:translateY(-7px)}}
@keyframes bfTypeR{from{transform:translateY(-7px)}to{transform:translateY(0)}}
@keyframes bfThumb{0%,30%{transform:translate(0,0)}55%{transform:translate(32px,-48px)}75%,100%{transform:translate(0,0)}}
@keyframes bfThumbL{0%,30%{transform:translate(0,0)}55%{transform:translate(16px,-12px)}75%,100%{transform:translate(0,0)}}
@keyframes bfThumbR{0%,30%{transform:translate(0,0)}55%{transform:translate(-16px,-12px)}75%,100%{transform:translate(0,0)}}
@keyframes bfPress{0%,30%{transform:translate(0,0)}55%{transform:translate(-14px,-58px)}78%,100%{transform:translate(0,0)}}
@keyframes bfKey{0%,50%{background:#4A5B7A}60%,100%{background:#E3B341}}
@keyframes bfPrint{0%,60%{transform:translateY(46px)}100%{transform:translateY(0)}}
@keyframes bfFing{from{transform:translateY(0)}to{transform:translateY(-7px)}}
@keyframes bfSway{from{transform:translateY(0)}to{transform:translateY(-3px)}}
@keyframes bfThumbT{from{transform:rotate(0)}to{transform:rotate(-5deg)}}
@keyframes bfGrip{0%,30%{transform:translateX(0)}55%{transform:translateX(3px)}100%{transform:translateX(0)}}
@keyframes bfHold{from{transform:translateY(0)}to{transform:translateY(-4px)}}
@keyframes bfThumbP{0%,28%{transform:translate(0,0)}52%{transform:translate(30px,-44px) scale(0.97)}72%,100%{transform:translate(0,0)}}
@keyframes bfTouch{0%,48%{opacity:0;transform:scale(0.3)}56%{opacity:0.55;transform:scale(0.6)}90%,100%{opacity:0;transform:scale(1.8)}}
@keyframes bfThumbT2{0%,25%{transform:translate(0,0)}45%{transform:translate(18px,-14px)}60%{transform:translate(36px,-14px)}80%,100%{transform:translate(0,0)}}
@keyframes bfPress2{0%,28%{transform:translate(0,0)}55%{transform:translate(0,-28px)}78%,100%{transform:translate(0,0)}}
@keyframes bfExtend{0%,28%{transform:scaleY(1)}55%{transform:scaleY(1.04)}78%,100%{transform:scaleY(1)}}
@media (prefers-reduced-motion: reduce){*{transition:none!important;animation:none!important}}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid #1D2BD1;outline-offset:2px}
</style>
</helmet>

<div style="background: #F5F6FF; color: #0E1030; font-family: 'Inter', system-ui, sans-serif; line-height: 1.5">

<!-- HEADER -->
<header style="max-width: 1200px; margin: 0 auto; padding: 20px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px 32px">
  <a href="https://byteforce.ma/" style="display: flex; align-items: center; gap: 10px; text-decoration: none; color: #0E1030; font-weight: 700; font-size: 18px; letter-spacing: -0.01em">
    <span style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; background: {{accent}}; color: #FFFFFF; font-size: 13px; font-weight: 700">BF</span>
    Byte Force
  </a>
  <nav aria-label="Navigation principale" style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px 28px; font-size: 14px; font-weight: 500">
    <a href="https://byteforce.ma/services" style="color: #2B2E52; text-decoration: none">Services</a>
    <a href="https://byteforce.ma/solutions" style="color: #2B2E52; text-decoration: none">Solutions</a>
    <a href="https://byteforce.ma/realisations" style="color: #2B2E52; text-decoration: none">Réalisations</a>
    <a href="https://byteforce.ma/insights" style="color: #2B2E52; text-decoration: none">Insights</a>
    <a href="https://byteforce.ma/outils" style="color: #2B2E52; text-decoration: none">Outils</a>
    <a href="https://byteforce.ma/studio" style="color: #2B2E52; text-decoration: none">Studio</a>
    <a href="https://byteforce.ma/contact" style="color: #2B2E52; text-decoration: none">Contact</a>
    <a href="#contact" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 20px; border-radius: 10px; background: {{accent}}; color: #FFFFFF; text-decoration: none; font-weight: 600">Devis gratuit</a>
  </nav>
</header>

<!-- HERO -->
<section style="max-width: 1200px; margin: 0 auto; padding: 40px 24px 96px; display: flex; flex-wrap: wrap; align-items: center; gap: 56px 48px">
  <div style="flex: 1 1 460px; min-width: 0">
    <nav aria-label="Fil d'Ariane" style="display: flex; flex-wrap: wrap; gap: 4px 8px; font-size: 13px; color: #4A4D6A; margin-bottom: 28px">
      <a href="https://byteforce.ma/" style="color: #4A4D6A">Accueil</a><span aria-hidden="true">/</span>
      <a href="https://byteforce.ma/geo-location" style="color: #4A4D6A">Lieux</a><span aria-hidden="true">/</span>
      <a href="https://byteforce.ma/developpement-logiciel-sur-mesure-maroc" style="color: #4A4D6A">Logiciel sur mesure au Maroc</a><span aria-hidden="true">/</span>
      <span style="color: #0E1030">Casablanca</span>
    </nav>
    <p style="display: inline-flex; align-items: center; gap: 10px; margin: 0 0 20px; padding: 6px 12px; border-radius: 999px; background: #E6E8FF; color: #1A24A8; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase">
      <span style="width: 8px; height: 8px; border-radius: 99px; background: #1D2BD1"></span>Logiciel sur mesure · Casablanca
    </p>
    <h1 style="margin: 0 0 24px; font-size: clamp(40px, 5.2vw, 68px); line-height: 1.04; letter-spacing: -0.035em; font-weight: 700">Développement logiciel sur mesure à Casablanca</h1>
    <p style="margin: 0 0 32px; max-width: 560px; font-size: 18px; line-height: 1.6; color: #3A3D60">Byte Force conçoit votre logiciel sur mesure depuis Casablanca. Le bureau est au Technopark, boulevard Dammam, Aïn Chock. Une entreprise de la ville peut se voir en semaine, de 9 h à 19 h, autour du fichier ou de l'écran, pas seulement en partage d'écran.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 12px">
      <a href="#contact" style="display: inline-flex; align-items: center; gap: 8px; min-height: 48px; padding: 0 24px; border-radius: 10px; background: {{accent}}; color: #FFFFFF; text-decoration: none; font-weight: 600">Décrire le projet
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg>
      </a>
      <a href="https://byteforce.ma/developpement-logiciel-sur-mesure-maroc" style="display: inline-flex; align-items: center; min-height: 48px; padding: 0 24px; border-radius: 10px; background: #FFFFFF; border: 1px solid #C5C9EA; color: #0E1030; text-decoration: none; font-weight: 600">Voir l'offre Maroc</a>
    </div>
    <p style="display: flex; align-items: center; gap: 10px; margin: 28px 0 0; font-size: 14px; color: #4A4D6A">
      <span style="width: 8px; height: 8px; border-radius: 99px; background: {{accent}}"></span>
      <span><strong style="color: #0E1030; font-weight: 600">Trente minutes pour cadrer.</strong> Réponse sous un jour ouvré.</span>
    </p>
  </div>

  <!-- hero: animated hand scenes -->
  <div style="flex: 1 1 420px; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 14px">
    <div style="position: relative; width: 100%; max-width: 520px; height: 440px; border-radius: 28px; background: {{ sceneBg }}; border: 1px solid #D5D9F2; box-shadow: 0 24px 60px rgba(29, 43, 209, 0.14); overflow: hidden; transition: background 0.5s ease">
<svg width="0" height="0" style="position: absolute" aria-hidden="true"><defs><linearGradient id="skV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6CBA9"></stop><stop offset="1" stop-color="#DFA177"></stop></linearGradient><linearGradient id="skH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#F6CBA9"></stop><stop offset="1" stop-color="#DFA177"></stop></linearGradient><linearGradient id="slv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B418A"></stop><stop offset="1" stop-color="#23264A"></stop></linearGradient></defs></svg><sc-if value="{{ d0 }}" hint-placeholder-val="{{ true }}">
<div style="position: absolute; inset: 0; animation: bfIn 0.5s ease both">
<div style="position: absolute; left: 0; right: 0; bottom: 0; height: 70px; background: #C89A6B; border-top: 5px solid #B4835A"></div>
<div style="position: absolute; left: 70px; top: 70px; width: 380px; height: 244px; box-sizing: border-box; padding: 10px; border-radius: 14px 14px 0 0; background: #1B1F2A">
<div style="width: 360px; height: 220px; overflow: hidden; position: relative"><div style="width: 720px; height: 440px; transform: scale(0.5); transform-origin: 0 0"><div style="position: relative; display: flex; width: 720px; height: 440px; background: #F3F8F6; color: #0B2B26; font-family: 'IBM Plex Sans', system-ui, sans-serif; overflow: hidden">
<div style="width: 170px; flex: none; padding: 22px 14px; background: #0B3B33; color: #CFE8E1; display: flex; flex-direction: column; gap: 6px; font-size: 14px">
<div style="margin-bottom: 18px; font-size: 16px; font-weight: 600; color: #FFFFFF">Entrepôt</div>
<div style="padding: 10px 12px; border-radius: 8px; background: #14584C; color: #FFFFFF; font-weight: 500">Tableau de bord</div>
<div style="padding: 10px 12px">Articles</div><div style="padding: 10px 12px">Commandes</div><div style="padding: 10px 12px">Fournisseurs</div><div style="padding: 10px 12px">Alertes</div>
</div>
<div style="flex: 1; min-width: 0; padding: 24px; display: flex; flex-direction: column; gap: 16px">
<div style="display: flex; align-items: center; justify-content: space-between"><span style="font-size: 22px; font-weight: 600">Stock</span><span style="padding: 8px 14px; border-radius: 8px; background: #0F8F78; color: #FFFFFF; font-size: 13px; font-weight: 500">+ Commande</span></div>
<div style="padding: 16px; border-radius: 12px; background: #FFFFFF; border: 1px solid #E1ECE8">
<div style="margin-bottom: 12px; font-size: 13px; color: #4E6F68">Mouvements de la semaine</div>
<div style="display: flex; align-items: flex-end; gap: 14px; height: 104px"><div style="flex: 1; height: 40px; border-radius: 6px 6px 0 0; background: #0F8F78; transform-origin: bottom; animation: bfGrow 0.6s ease both; animation-delay: 0.1s"></div><div style="flex: 1; height: 64px; border-radius: 6px 6px 0 0; background: #0F8F78; transform-origin: bottom; animation: bfGrow 0.6s ease both; animation-delay: 0.2s"></div><div style="flex: 1; height: 48px; border-radius: 6px 6px 0 0; background: #0F8F78; transform-origin: bottom; animation: bfGrow 0.6s ease both; animation-delay: 0.3s"></div><div style="flex: 1; height: 90px; border-radius: 6px 6px 0 0; background: #0F8F78; transform-origin: bottom; animation: bfGrow 0.6s ease both; animation-delay: 0.4s"></div><div style="flex: 1; height: 72px; border-radius: 6px 6px 0 0; background: #0F8F78; transform-origin: bottom; animation: bfGrow 0.6s ease both; animation-delay: 0.5s"></div><div style="flex: 1; height: 104px; border-radius: 6px 6px 0 0; background: #0F8F78; transform-origin: bottom; animation: bfGrow 0.6s ease both; animation-delay: 0.6s"></div><div style="flex: 1; height: 80px; border-radius: 6px 6px 0 0; background: #F2B134; transform-origin: bottom; animation: bfGrow 0.6s ease both; animation-delay: 0.7s"></div></div></div>
<div style="border-radius: 12px; background: #FFFFFF; border: 1px solid #E1ECE8; overflow: hidden"><div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 16px; border-top: 1px solid #E1ECE8; font-size: 13px; animation: bfLine 0.5s ease both; animation-delay: 0.8s"><span style="width: 120px; font-weight: 500">Article A</span><span style="flex: 1; color: #4E6F68">Entrepôt 1</span><span style="padding: 3px 10px; border-radius: 99px; background: #D5F2E7; color: #0B6B4F; font-size: 12px; font-weight: 500">En stock</span></div><div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 16px; border-top: 1px solid #E1ECE8; font-size: 13px; animation: bfLine 0.5s ease both; animation-delay: 1.0s"><span style="width: 120px; font-weight: 500">Article B</span><span style="flex: 1; color: #4E6F68">Entrepôt 1</span><span style="padding: 3px 10px; border-radius: 99px; background: #FFEFC7; color: #8A5A00; font-size: 12px; font-weight: 500">À réappro</span></div><div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 16px; border-top: 1px solid #E1ECE8; font-size: 13px; animation: bfLine 0.5s ease both; animation-delay: 1.2s"><span style="width: 120px; font-weight: 500">Article C</span><span style="flex: 1; color: #4E6F68">Entrepôt 2</span><span style="padding: 3px 10px; border-radius: 99px; background: #DCE8FF; color: #1E40AF; font-size: 12px; font-weight: 500">Commandé</span></div></div>
</div></div></div></div>
</div>
<svg width="520" height="440" viewBox="0 0 520 440" style="position: absolute; inset: 0" aria-hidden="true">
<defs><pattern id="bfKeys" width="22" height="11" patternUnits="userSpaceOnUse"><rect x="2" y="2" width="18" height="7" rx="2" fill="#B2BAD1"></rect></pattern></defs>
<rect x="58" y="312" width="404" height="8" rx="3" fill="#8E96AE"></rect>
<polygon points="60,320 460,320 500,376 20,376" fill="#CBD0E0"></polygon>
<polygon points="76,328 444,328 474,368 46,368" fill="url(#bfKeys)"></polygon>
<polygon points="214,366 306,366 310,374 210,374" fill="#B1B8CE"></polygon>
<ellipse cx="260" cy="378" rx="240" ry="8" fill="#000000" opacity="0.12"></ellipse>
<rect x="436" y="372" width="34" height="38" rx="5" fill="#FFFFFF" stroke="#D5D9F2"></rect><path d="M470 382c12 0 12 20 0 20" fill="none" stroke="#D5D9F2" stroke-width="4"></path>
<g transform="translate(188 446)"><g style="animation: bfSway 0.9s ease-in-out 0.1s infinite alternate"><rect x="-30" y="0" width="60" height="120" fill="url(#skV)"></rect><path d="M-38 60 L38 60 L44 130 L-44 130 Z" fill="url(#slv)"></path><g style="transform-box: fill-box; transform-origin: 100% 100%; animation: bfThumbT 0.5s ease-in-out 0.07s infinite alternate"><g transform="rotate(-42 -34 6)"><rect x="-44" y="-46" width="20" height="56" rx="10" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect><rect x="-41" y="-42" width="14" height="14" rx="6" fill="#F7D8CA" stroke="#E5B7A4" stroke-width="0.8"></rect></g></g><path d="M-37 24 C-44 -6 -42 -30 -36 -52 L36 -52 C42 -30 44 -6 37 24 C20 32 -20 32 -37 24 Z" fill="url(#skV)" stroke="#C98558" stroke-width="1"></path><path d="M-18 22 L-20 -46M0 22 L0 -48M18 22 L20 -46" stroke="#C98558" stroke-width="1.2" opacity="0.4" fill="none"></path><circle cx="-27" cy="-46" r="5" fill="#FFFFFF" opacity="0.16"></circle><circle cx="-9" cy="-48" r="5" fill="#FFFFFF" opacity="0.16"></circle><circle cx="9" cy="-48" r="5" fill="#FFFFFF" opacity="0.16"></circle><circle cx="27" cy="-46" r="5" fill="#FFFFFF" opacity="0.16"></circle><g style="transform-box: fill-box; transform-origin: 50% 100%; animation: bfFing 0.4s ease-in-out 0.03s infinite alternate"><rect x="-35" y="-102" width="16" height="58" rx="8" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect><rect x="-32" y="-98" width="10" height="12" rx="5" fill="#F7D8CA" stroke="#E5B7A4" stroke-width="0.8"></rect><path d="M-32 -72 h10M-32 -88 h10" stroke="#C98558" stroke-width="1" opacity="0.45" fill="none"></path></g><g style="transform-box: fill-box; transform-origin: 50% 100%; animation: bfFing 0.46s ease-in-out 0.13999999999999999s infinite alternate"><rect x="-17" y="-108" width="16" height="64" rx="8" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect><rect x="-14" y="-104" width="10" height="12" rx="5" fill="#F7D8CA" stroke="#E5B7A4" stroke-width="0.8"></rect><path d="M-14 -74 h10M-14 -92 h10" stroke="#C98558" stroke-width="1" opacity="0.45" fill="none"></path></g><g style="transform-box: fill-box; transform-origin: 50% 100%; animation: bfFing 0.42s ease-in-out 0.11000000000000001s infinite alternate"><rect x="1" y="-102" width="16" height="58" rx="8" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect><rect x="4" y="-98" width="10" height="12" rx="5" fill="#F7D8CA" stroke="#E5B7A4" stroke-width="0.8"></rect><path d="M4 -72 h10M4 -88 h10" stroke="#C98558" stroke-width="1" opacity="0.45" fill="none"></path></g><g style="transform-box: fill-box; transform-origin: 50% 100%; animation: bfFing 0.38s ease-in-out 0.21000000000000002s infinite alternate"><rect x="19" y="-92" width="16" height="48" rx="8" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect><rect x="22" y="-88" width="10" height="12" rx="5" fill="#F7D8CA" stroke="#E5B7A4" stroke-width="0.8"></rect><path d="M22 -68 h10M22 -80 h10" stroke="#C98558" stroke-width="1" opacity="0.45" fill="none"></path></g></g></g><g transform="translate(332 446) scale(-1 1)"><g style="animation: bfSway 0.9s ease-in-out 0.30000000000000004s infinite alternate"><rect x="-30" y="0" width="60" height="120" fill="url(#skV)"></rect><path d="M-38 60 L38 60 L44 130 L-44 130 Z" fill="url(#slv)"></path><g style="transform-box: fill-box; transform-origin: 100% 100%; animation: bfThumbT 0.5s ease-in-out 0.21000000000000002s infinite alternate"><g transform="rotate(-42 -34 6)"><rect x="-44" y="-46" width="20" height="56" rx="10" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect><rect x="-41" y="-42" width="14" height="14" rx="6" fill="#F7D8CA" stroke="#E5B7A4" stroke-width="0.8"></rect></g></g><path d="M-37 24 C-44 -6 -42 -30 -36 -52 L36 -52 C42 -30 44 -6 37 24 C20 32 -20 32 -37 24 Z" fill="url(#skV)" stroke="#C98558" stroke-width="1"></path><path d="M-18 22 L-20 -46M0 22 L0 -48M18 22 L20 -46" stroke="#C98558" stroke-width="1.2" opacity="0.4" fill="none"></path><circle cx="-27" cy="-46" r="5" fill="#FFFFFF" opacity="0.16"></circle><circle cx="-9" cy="-48" r="5" fill="#FFFFFF" opacity="0.16"></circle><circle cx="9" cy="-48" r="5" fill="#FFFFFF" opacity="0.16"></circle><circle cx="27" cy="-46" r="5" fill="#FFFFFF" opacity="0.16"></circle><g style="transform-box: fill-box; transform-origin: 50% 100%; animation: bfFing 0.4s ease-in-out 0.09s infinite alternate"><rect x="-35" y="-102" width="16" height="58" rx="8" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect><rect x="-32" y="-98" width="10" height="12" rx="5" fill="#F7D8CA" stroke="#E5B7A4" stroke-width="0.8"></rect><path d="M-32 -72 h10M-32 -88 h10" stroke="#C98558" stroke-width="1" opacity="0.45" fill="none"></path></g><g style="transform-box: fill-box; transform-origin: 50% 100%; animation: bfFing 0.46s ease-in-out 0.18s infinite alternate"><rect x="-17" y="-108" width="16" height="64" rx="8" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect><rect x="-14" y="-104" width="10" height="12" rx="5" fill="#F7D8CA" stroke="#E5B7A4" stroke-width="0.8"></rect><path d="M-14 -74 h10M-14 -92 h10" stroke="#C98558" stroke-width="1" opacity="0.45" fill="none"></path></g><g style="transform-box: fill-box; transform-origin: 50% 100%; animation: bfFing 0.42s ease-in-out 0.19s infinite alternate"><rect x="1" y="-102" width="16" height="58" rx="8" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect><rect x="4" y="-98" width="10" height="12" rx="5" fill="#F7D8CA" stroke="#E5B7A4" stroke-width="0.8"></rect><path d="M4 -72 h10M4 -88 h10" stroke="#C98558" stroke-width="1" opacity="0.45" fill="none"></path></g><g style="transform-box: fill-box; transform-origin: 50% 100%; animation: bfFing 0.38s ease-in-out 0.23s infinite alternate"><rect x="19" y="-92" width="16" height="48" rx="8" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect><rect x="22" y="-88" width="10" height="12" rx="5" fill="#F7D8CA" stroke="#E5B7A4" stroke-width="0.8"></rect><path d="M22 -68 h10M22 -80 h10" stroke="#C98558" stroke-width="1" opacity="0.45" fill="none"></path></g></g></g></svg>
</div>
</sc-if><sc-if value="{{ d1 }}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; inset: 0; animation: bfIn 0.5s ease both">
<div style="position: absolute; inset: 0; animation: bfHold 1.8s ease-in-out infinite alternate">
<svg width="520" height="440" viewBox="0 0 520 440" style="position: absolute; inset: 0" aria-hidden="true"><path d="M152 270C140 330 146 420 190 470L388 470C410 420 412 340 392 270Z" fill="url(#skV)" stroke="#C98558" stroke-width="1"></path><path d="M360 470L420 470L430 440L372 430Z" fill="url(#slv)"></path></svg>
<div style="position: absolute; left: 166px; top: 28px; width: 188px; height: 372px; box-sizing: border-box; padding: 8px; border-radius: 30px; background: #0B0C12; box-shadow: 0 18px 40px rgba(14, 16, 48, 0.25)">
<div style="border-radius: 22px; overflow: hidden"><div style="width: 171px; height: 355px; overflow: hidden; position: relative"><div style="width: 232px; height: 480px; transform: scale(0.74); transform-origin: 0 0"><div style="position: relative; width: 232px; height: 480px; padding: 20px 14px 16px; box-sizing: border-box; background: #14151C; color: #FFFFFF; font-family: 'Space Grotesk', system-ui, sans-serif; display: flex; flex-direction: column; gap: 10px; overflow: hidden">
<div><div style="font-size: 20px; font-weight: 700; letter-spacing: -0.02em">Tournée du jour</div><div style="margin-top: 2px; font-size: 12px; color: #A3A8BD">Casablanca · 5 arrêts</div></div>
<div style="align-self: flex-start; padding: 4px 10px; border-radius: 99px; background: #2A2D3B; color: #FFB784; font-size: 11px; font-weight: 500">Hors ligne · synchro auto</div>
<div style="position: relative; height: 100px; flex: none; border-radius: 16px; background: #1F212C; overflow: hidden">
<svg width="204" height="100" viewBox="0 0 204 100" style="position: absolute; inset: 0" aria-hidden="true"><path d="M0 34H204M0 68H204M68 0V100M136 0V100" stroke="#2A2D3B" stroke-width="1.5"></path><path d="M16 82C60 82 70 30 110 40S170 20 188 22" fill="none" stroke="#FF7A29" stroke-width="3" stroke-dasharray="5 5" stroke-linecap="round"></path><circle cx="188" cy="22" r="7" fill="#FF7A29"></circle><circle cx="188" cy="22" r="3" fill="#14151C"></circle></svg>
<div style="position: absolute; left: 10px; top: 76px; width: 12px; height: 12px; border-radius: 99px; background: #FFFFFF; border: 3px solid #FF7A29; box-sizing: border-box; animation: bfRoute 1.8s ease-in-out both"></div>
</div>
<div style="display: flex; align-items: center; gap: 10px; height: 44px; padding: 0 12px; border-radius: 12px; background: #1F212C; font-size: 13px; animation: bfLine 0.4s ease both; animation-delay: 0.1s"><span style="display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 99px; background: #22C55E"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#14151C" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Arrêt 1</div><div style="display: flex; align-items: center; gap: 10px; height: 44px; padding: 0 12px; border-radius: 12px; background: #1F212C; font-size: 13px; animation: bfLine 0.4s ease both; animation-delay: 0.3s"><span style="display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 99px; background: #22C55E"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#14151C" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Arrêt 2</div><div style="display: flex; align-items: center; justify-content: space-between; height: 44px; padding: 0 12px; border-radius: 12px; background: #2A2D3B; border: 1px solid #FF7A29; font-size: 13px; animation: bfLine 0.4s ease both; animation-delay: 0.5s"><span style="display: flex; align-items: center; gap: 10px"><span style="width: 20px; height: 20px; border-radius: 99px; border: 2px solid #FF7A29; box-sizing: border-box"></span>Arrêt 3</span><span style="color: #FFB784; font-size: 12px">En cours</span></div>
<div style="position: relative; flex: none; height: 52px; margin-top: auto; border-radius: 16px; background: #FF7A29; overflow: hidden; animation: bfConfirm 1.8s ease both">
<span style="position: absolute; left: 50%; top: 50%; width: 60px; height: 60px; margin: -30px 0 0 -30px; border-radius: 99px; background: #FFFFFF; animation: bfRipple 1.8s ease-out both"></span>
<span style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #14151C; font-size: 15px; font-weight: 700; animation: bfOut 1.8s ease both">Confirmer la livraison</span>
<span style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #14151C; font-size: 15px; font-weight: 700; animation: bfInLbl 1.8s ease both">Livré</span>
</div>
</div></div></div></div>
</div>
<svg width="520" height="440" viewBox="0 0 520 440" style="position: absolute; inset: 0" aria-hidden="true">
<g style="animation: bfGrip 1.8s ease-in-out 0s both"><rect x="334" y="148" width="70" height="32" rx="16" fill="url(#skH)" stroke="#C98558" stroke-width="1"></rect><path d="M342 157 H368" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.28"></path><path d="M372 156 V172" stroke="#C98558" stroke-width="1.2" opacity="0.4"></path></g><g style="animation: bfGrip 1.8s ease-in-out 0.05s both"><rect x="334" y="188" width="72" height="32" rx="16" fill="url(#skH)" stroke="#C98558" stroke-width="1"></rect><path d="M342 197 H368" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.28"></path><path d="M372 196 V212" stroke="#C98558" stroke-width="1.2" opacity="0.4"></path></g><g style="animation: bfGrip 1.8s ease-in-out 0.1s both"><rect x="334" y="228" width="70" height="32" rx="16" fill="url(#skH)" stroke="#C98558" stroke-width="1"></rect><path d="M342 237 H368" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.28"></path><path d="M372 236 V252" stroke="#C98558" stroke-width="1.2" opacity="0.4"></path></g><g style="animation: bfGrip 1.8s ease-in-out 0.15s both"><rect x="334" y="268" width="62" height="32" rx="16" fill="url(#skH)" stroke="#C98558" stroke-width="1"></rect><path d="M342 277 H368" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.28"></path><path d="M372 276 V292" stroke="#C98558" stroke-width="1.2" opacity="0.4"></path></g>
<circle cx="258" cy="352" r="16" fill="#FFFFFF" opacity="0" style="animation: bfTouch 1.8s ease-out both"></circle>
<g style="animation: bfThumbP 1.8s ease-in-out both">
<path d="M146 480L190 436" stroke="#C98558" stroke-width="48" stroke-linecap="round" fill="none"></path><path d="M190 436L228 398" stroke="#C98558" stroke-width="36" stroke-linecap="round" fill="none"></path>
<path d="M146 480L190 436" stroke="url(#skV)" stroke-width="45" stroke-linecap="round" fill="none"></path><path d="M190 436L228 398" stroke="url(#skV)" stroke-width="33" stroke-linecap="round" fill="none"></path>
<path d="M156 462L196 424" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity="0.22" fill="none"></path>
<path d="M186 440q10 -4 16 6" stroke="#C98558" stroke-width="1.4" opacity="0.5" fill="none"></path>
<g transform="translate(228 398) rotate(-45)"><rect x="-16" y="-10" width="22" height="20" rx="8" fill="#F7D8CA" stroke="#E5B7A4" stroke-width="1"></rect><path d="M-12 -5h8" stroke="#FFFFFF" stroke-width="2" opacity="0.7" stroke-linecap="round"></path></g>
</g>
</svg>
</div>
</div>
</sc-if><sc-if value="{{ d2 }}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; inset: 0; animation: bfIn 0.5s ease both">
<div style="position: absolute; inset: 0; animation: bfHold 1.8s ease-in-out infinite alternate">
<svg width="520" height="440" viewBox="0 0 520 440" style="position: absolute; inset: 0" aria-hidden="true"><g transform="translate(0 0)"><path d="M14 450C20 390 52 340 92 316L140 346C116 380 108 416 112 450Z" fill="url(#skV)" stroke="#C98558" stroke-width="1"></path><path d="M-10 452L8 396L118 430L112 452Z" fill="url(#slv)"></path></g><g transform="translate(520 0) scale(-1 1)"><path d="M14 450C20 390 52 340 92 316L140 346C116 380 108 416 112 450Z" fill="url(#skV)" stroke="#C98558" stroke-width="1"></path><path d="M-10 452L8 396L118 430L112 452Z" fill="url(#slv)"></path></g></svg>
<div style="position: absolute; left: 62px; top: 36px; width: 396px; height: 290px; box-sizing: border-box; padding: 12px; border-radius: 28px; background: #0B0C12; box-shadow: 0 18px 40px rgba(14, 16, 48, 0.25)">
<div style="border-radius: 14px; overflow: hidden; background: #FFF6E8; height: 266px"><div style="width: 352px; height: 242px; overflow: hidden; position: relative"><div style="width: 640px; height: 440px; transform: scale(0.55); transform-origin: 0 0"><div style="position: relative; display: flex; gap: 16px; width: 640px; height: 440px; padding: 20px; box-sizing: border-box; background: #FFF6E8; color: #4A2312; font-family: 'Inter', system-ui, sans-serif; overflow: hidden">
<div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 14px">
<div style="font-family: 'Fraunces', Georgia, serif; font-size: 28px; font-weight: 700; color: #7C2D12">Carte</div>
<div style="display: flex; flex-wrap: wrap; gap: 8px"><span style="padding: 6px 14px; border-radius: 99px; background: #FFFFFF; border: 1px solid #F0DFC4; color: #4A2312; font-size: 13px; font-weight: 500">Entrées</span><span style="padding: 6px 14px; border-radius: 99px; background: #C2410C; color: #FFFFFF; font-size: 13px; font-weight: 600">Plats</span><span style="padding: 6px 14px; border-radius: 99px; background: #FFFFFF; border: 1px solid #F0DFC4; color: #4A2312; font-size: 13px; font-weight: 500">Desserts</span><span style="padding: 6px 14px; border-radius: 99px; background: #FFFFFF; border: 1px solid #F0DFC4; color: #4A2312; font-size: 13px; font-weight: 500">Boissons</span></div>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px"><div style="padding: 12px; border-radius: 16px; background: #FFFFFF; border: 1px solid #F0DFC4; display: flex; flex-direction: column; gap: 10px; animation: bfLine 0.4s ease both; animation-delay: 0.1s"><span style="width: 44px; height: 44px; border-radius: 99px; background: #7C9A3C"></span><span style="font-size: 14px; font-weight: 600; color: #4A2312">Salade</span></div><div style="padding: 12px; border-radius: 16px; background: #FFFFFF; border: 1px solid #F0DFC4; display: flex; flex-direction: column; gap: 10px; animation: bfLine 0.4s ease both; animation-delay: 0.2s"><span style="width: 44px; height: 44px; border-radius: 99px; background: #C2410C"></span><span style="font-size: 14px; font-weight: 600; color: #4A2312">Harira</span></div><div style="animation: bfTap 0.5s ease 0.7s both"><div style="padding: 12px; border-radius: 16px; background: #FFFFFF; border: 1px solid #F0DFC4; display: flex; flex-direction: column; gap: 10px; animation: bfLine 0.4s ease both; animation-delay: 0.3s"><span style="width: 44px; height: 44px; border-radius: 99px; background: #E9A23B"></span><span style="font-size: 14px; font-weight: 600; color: #4A2312">Tajine</span></div></div><div style="padding: 12px; border-radius: 16px; background: #FFFFFF; border: 1px solid #F0DFC4; display: flex; flex-direction: column; gap: 10px; animation: bfLine 0.4s ease both; animation-delay: 0.4s"><span style="width: 44px; height: 44px; border-radius: 99px; background: #B5543A"></span><span style="font-size: 14px; font-weight: 600; color: #4A2312">Pastilla</span></div><div style="padding: 12px; border-radius: 16px; background: #FFFFFF; border: 1px solid #F0DFC4; display: flex; flex-direction: column; gap: 10px; animation: bfLine 0.4s ease both; animation-delay: 0.5s"><span style="width: 44px; height: 44px; border-radius: 99px; background: #F2C879"></span><span style="font-size: 14px; font-weight: 600; color: #4A2312">Couscous</span></div><div style="padding: 12px; border-radius: 16px; background: #FFFFFF; border: 1px solid #F0DFC4; display: flex; flex-direction: column; gap: 10px; animation: bfLine 0.4s ease both; animation-delay: 0.6s"><span style="width: 44px; height: 44px; border-radius: 99px; background: #5E8F5A"></span><span style="font-size: 14px; font-weight: 600; color: #4A2312">Thé</span></div></div>
</div>
<div style="width: 220px; flex: none; padding: 16px; border-radius: 20px; background: #FFFFFF; border: 1px solid #F0DFC4; display: flex; flex-direction: column">
<div style="font-family: 'Fraunces', Georgia, serif; font-size: 22px; font-weight: 700; color: #7C2D12">Table 4</div>
<div style="margin-bottom: 8px; font-size: 12px; color: #8A5A3C">Commande en cours</div>
<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed #E8D4B4; font-size: 14px; animation: bfLine 0.5s ease both; animation-delay: 0.4s"><span>1 × Harira</span></div><div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed #E8D4B4; font-size: 14px; animation: bfLine 0.5s ease both; animation-delay: 0.9s"><span>1 × Tajine</span></div><div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed #E8D4B4; font-size: 14px; animation: bfLine 0.5s ease both; animation-delay: 1.2s"><span>2 × Thé à la menthe</span></div>
<div style="margin-top: auto; padding: 14px 0; border-radius: 14px; background: #C2410C; color: #FFFFFF; font-size: 14px; font-weight: 600; text-align: center; animation: bfTap 0.5s ease 1.5s both">Envoyer en cuisine</div>
</div></div></div></div></div>
</div>
<svg width="520" height="440" viewBox="0 0 520 440" style="position: absolute; inset: 0" aria-hidden="true"><g transform="translate(0 0)"><rect x="34" y="236" width="42" height="24" rx="12" fill="url(#skH)" stroke="#C98558" stroke-width="1"></rect><path d="M46 243 H60" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.28"></path><rect x="34" y="266" width="42" height="24" rx="12" fill="url(#skH)" stroke="#C98558" stroke-width="1"></rect><path d="M46 273 H60" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.28"></path><rect x="34" y="296" width="42" height="24" rx="12" fill="url(#skH)" stroke="#C98558" stroke-width="1"></rect><path d="M46 303 H60" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.28"></path><g style="animation: bfThumbT2 1.8s ease-in-out both"><path d="M88 318L124 264" stroke="#C98558" stroke-width="34" stroke-linecap="round" fill="none"></path><path d="M88 318L124 264" stroke="url(#skV)" stroke-width="31" stroke-linecap="round" fill="none"></path><path d="M86 316L124 262" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" opacity="0.2" fill="none"></path><g transform="translate(124 262) rotate(-55)"><rect x="-16" y="-10" width="22" height="20" rx="8" fill="#F7D8CA" stroke="#E5B7A4" stroke-width="1"></rect><path d="M-12 -5h8" stroke="#FFFFFF" stroke-width="2" opacity="0.7" stroke-linecap="round"></path></g></g></g><g transform="translate(520 0) scale(-1 1)"><rect x="34" y="236" width="42" height="24" rx="12" fill="url(#skH)" stroke="#C98558" stroke-width="1"></rect><path d="M46 243 H60" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.28"></path><rect x="34" y="266" width="42" height="24" rx="12" fill="url(#skH)" stroke="#C98558" stroke-width="1"></rect><path d="M46 273 H60" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.28"></path><rect x="34" y="296" width="42" height="24" rx="12" fill="url(#skH)" stroke="#C98558" stroke-width="1"></rect><path d="M46 303 H60" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.28"></path><g style="animation: bfThumbT2 1.8s ease-in-out both"><path d="M88 318L124 264" stroke="#C98558" stroke-width="34" stroke-linecap="round" fill="none"></path><path d="M88 318L124 264" stroke="url(#skV)" stroke-width="31" stroke-linecap="round" fill="none"></path><path d="M86 316L124 262" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" opacity="0.2" fill="none"></path><g transform="translate(124 262) rotate(-55)"><rect x="-16" y="-10" width="22" height="20" rx="8" fill="#F7D8CA" stroke="#E5B7A4" stroke-width="1"></rect><path d="M-12 -5h8" stroke="#FFFFFF" stroke-width="2" opacity="0.7" stroke-linecap="round"></path></g></g></g></svg>
</div>
</div>
</sc-if><sc-if value="{{ d3 }}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; inset: 0; animation: bfIn 0.5s ease both">
<div style="position: absolute; left: 0; top: 0; width: 34px; height: 380px; background: #CBD5EA"></div>
<div style="position: absolute; right: 0; top: 0; width: 34px; height: 380px; background: #CBD5EA"></div>
<div style="position: absolute; left: 50%; top: 14px; transform: translateX(-50%); padding: 6px 18px; border-radius: 6px; background: #0A2540; color: #E3B341; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.3em">BANQUE</div>
<div style="position: absolute; left: 0; right: 0; bottom: 0; height: 60px; background: #D3DBEB; border-top: 4px solid #B9C4DC"></div>
<div style="position: absolute; left: 130px; top: 54px; width: 260px; height: 340px; border-radius: 18px; background: #2B3A55; box-shadow: 0 18px 40px rgba(14, 16, 48, 0.25)"></div>
<div style="position: absolute; left: 150px; top: 74px; width: 220px; height: 144px; box-sizing: border-box; border: 5px solid #0A1626; border-radius: 8px; background: #0A2540; overflow: hidden"><div style="width: 218px; height: 132px; overflow: hidden; position: relative"><div style="width: 560px; height: 340px; transform: scale(0.39); transform-origin: 0 0"><div style="position: relative; width: 560px; height: 340px; padding: 24px 40px; box-sizing: border-box; background: #0A2540; color: #FFFFFF; font-family: 'DM Sans', system-ui, sans-serif; display: flex; flex-direction: column; align-items: center; gap: 16px; overflow: hidden">
<div style="width: 100%; display: flex; justify-content: space-between; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #E3B341"><span>Borne bancaire</span><span>Français</span></div>
<div style="font-size: 26px; font-weight: 700; letter-spacing: -0.02em">Saisissez votre code</div>
<div style="display: flex; gap: 16px"><span style="width: 22px; height: 22px; border-radius: 99px; background: #E3B341; border: 2px solid #E3B341; box-sizing: border-box; animation: bfDot 0.3s ease both; animation-delay: 0.2s"></span><span style="width: 22px; height: 22px; border-radius: 99px; background: #E3B341; border: 2px solid #E3B341; box-sizing: border-box; animation: bfDot 0.3s ease both; animation-delay: 0.55s"></span><span style="width: 22px; height: 22px; border-radius: 99px; background: #E3B341; border: 2px solid #E3B341; box-sizing: border-box; animation: bfDot 0.3s ease both; animation-delay: 0.9s"></span><span style="width: 22px; height: 22px; border-radius: 99px; background: #E3B341; border: 2px solid #E3B341; box-sizing: border-box; animation: bfDot 0.3s ease both; animation-delay: 1.25s"></span></div>
<div style="display: flex; align-items: center; gap: 8px; color: #34D399; font-size: 15px; font-weight: 600; animation: bfFade 0.4s ease both; animation-delay: 1.5s"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg>Code accepté</div>
<div style="width: 100%; display: flex; gap: 12px; margin-top: auto"><div style="flex: 1; padding: 16px 0; border-radius: 12px; background: #123A63; border: 1px solid #1F4F80; color: #FFFFFF; font-size: 15px; font-weight: 600; text-align: center; animation: bfLine 0.5s ease both; animation-delay: 1.6s">Retrait</div><div style="flex: 1; padding: 16px 0; border-radius: 12px; background: #123A63; border: 1px solid #1F4F80; color: #FFFFFF; font-size: 15px; font-weight: 600; text-align: center; animation: bfLine 0.5s ease both; animation-delay: 1.7s">Virement</div><div style="flex: 1; padding: 16px 0; border-radius: 12px; background: #123A63; border: 1px solid #1F4F80; color: #FFFFFF; font-size: 15px; font-weight: 600; text-align: center; animation: bfLine 0.5s ease both; animation-delay: 1.8s">Solde</div></div>
</div></div></div></div>
<span style="position: absolute; left: 160px; top: 238px; width: 34px; height: 20px; border-radius: 4px; background: #4A5B7A;"></span><span style="position: absolute; left: 200px; top: 238px; width: 34px; height: 20px; border-radius: 4px; background: #4A5B7A;"></span><span style="position: absolute; left: 240px; top: 238px; width: 34px; height: 20px; border-radius: 4px; background: #4A5B7A;"></span><span style="position: absolute; left: 160px; top: 264px; width: 34px; height: 20px; border-radius: 4px; background: #4A5B7A;"></span><span style="position: absolute; left: 200px; top: 264px; width: 34px; height: 20px; border-radius: 4px; background: #E3B341; animation: bfKey 1.8s ease both;"></span><span style="position: absolute; left: 240px; top: 264px; width: 34px; height: 20px; border-radius: 4px; background: #4A5B7A;"></span><span style="position: absolute; left: 160px; top: 290px; width: 34px; height: 20px; border-radius: 4px; background: #4A5B7A;"></span><span style="position: absolute; left: 200px; top: 290px; width: 34px; height: 20px; border-radius: 4px; background: #4A5B7A;"></span><span style="position: absolute; left: 240px; top: 290px; width: 34px; height: 20px; border-radius: 4px; background: #4A5B7A;"></span><span style="position: absolute; left: 160px; top: 316px; width: 34px; height: 20px; border-radius: 4px; background: #4A5B7A;"></span><span style="position: absolute; left: 200px; top: 316px; width: 34px; height: 20px; border-radius: 4px; background: #4A5B7A;"></span><span style="position: absolute; left: 240px; top: 316px; width: 34px; height: 20px; border-radius: 4px; background: #4A5B7A;"></span>
<div style="position: absolute; left: 300px; top: 244px; width: 70px; height: 10px; border-radius: 3px; background: #E3B341"></div>
<div style="position: absolute; left: 300px; top: 270px; width: 70px; height: 26px; border-radius: 4px; background: #0A1626"></div>
<div style="position: absolute; left: 306px; top: 306px; width: 58px; height: 62px; overflow: hidden; border-radius: 4px; background: #0A1626">
<div style="position: absolute; left: 4px; right: 4px; bottom: 0; height: 44px; border-radius: 3px 3px 0 0; background: #FFFFFF; animation: bfPrint 1.8s ease both"></div></div>
<svg width="520" height="440" viewBox="0 0 520 440" style="position: absolute; inset: 0" aria-hidden="true"><g transform="translate(262 470) rotate(-8)"><g style="animation: bfPress2 1.8s ease-in-out both">
<rect x="-34" y="30" width="68" height="160" fill="url(#skV)"></rect><path d="M-42 84L42 84L50 190L-50 190Z" fill="url(#slv)"></path>
<g transform="rotate(-24 -42 20)"><rect x="-56" y="-22" width="20" height="50" rx="10" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect></g>
<ellipse cx="0" cy="12" rx="46" ry="42" fill="url(#skV)" stroke="#C98558" stroke-width="1"></ellipse>
<rect x="-10" y="-34" width="18" height="52" rx="9" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect><rect x="8" y="-30" width="18" height="48" rx="9" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect><rect x="26" y="-22" width="16" height="42" rx="8" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect>
<path d="M-4 -12h6M13 -10h6M30 -6h6" stroke="#C98558" stroke-width="1.2" opacity="0.5"></path>
<g style="transform-box: fill-box; transform-origin: 50% 100%; animation: bfExtend 1.8s ease-in-out both"><rect x="-30" y="-170" width="18" height="150" rx="9" fill="url(#skV)" stroke="#C98558" stroke-width="1"></rect><rect x="-27" y="-166" width="12" height="16" rx="6" fill="#F7D8CA" stroke="#E5B7A4" stroke-width="0.8"></rect><path d="M-26 -104h10M-26 -64h10" stroke="#C98558" stroke-width="1.2" opacity="0.5"></path></g>
</g></g></svg>
</div>
</sc-if>
    </div>
    <p style="margin: 0; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #4A4D6A">{{ capNow }} · exemple fictif</p>
  </div>
</section>

<!-- SHOWCASE -->
<section style="background: #FFFFFF; border-top: 1px solid #E3E6F8; padding: 96px 0">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px">
    <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">Un logiciel, quatre cas d'usage</p>
    <h2 style="margin: 0 0 16px; max-width: 760px; font-size: clamp(30px, 3.4vw, 44px); line-height: 1.1; letter-spacing: -0.03em; font-weight: 700">Quatre appareils, quatre métiers.</h2>
    <p style="margin: 0 0 32px; max-width: 640px; font-size: 17px; line-height: 1.6; color: #3A3D60">Exemples fictifs : chaque écran a sa propre interface, ses couleurs et sa typographie.</p>
    <div role="group" aria-label="Appareils" style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 32px">
      <sc-for list="{{ devs }}" as="dv" hint-placeholder-count="4">
        <button type="button" onClick="{{ dv.go }}" aria-pressed="{{ dv.on }}" style="min-height: 44px; padding: 0 18px; border: 1px solid #C5C9EA; border-radius: 99px; background: {{ dv.bg }}; color: {{ dv.fg }}; font-family: inherit; font-size: 14px; font-weight: 600; cursor: pointer; transition: background 0.3s ease">{{ dv.text }}</button>
      </sc-for>
      <button type="button" onClick="{{ toggle }}" style="min-height: 44px; padding: 0 18px; border: 0; border-radius: 99px; background: #0E1030; color: #FFFFFF; font-family: inherit; font-size: 14px; font-weight: 600; cursor: pointer">{{ toggleLabel }}</button>
    </div>
    <div style="display: flex; flex-wrap: wrap; align-items: stretch; gap: 32px">
      <div style="flex: 1 1 300px; max-width: 380px; display: flex; flex-direction: column; gap: 20px; justify-content: center">
        <p style="margin: 0; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #4A4D6A">{{ ucTag }}</p>
        <h3 style="margin: 0; font-family: '{{ ucFont }}', system-ui, sans-serif; font-size: 34px; line-height: 1.1; letter-spacing: -0.02em; font-weight: 700">{{ ucTitle }}</h3>
        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #3A3D60">{{ ucText }}</p>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 15px">
          <span style="display: flex; align-items: center; gap: 10px"><span style="width: 10px; height: 10px; border-radius: 3px; background: {{ ucAccent }}"></span>{{ ucB1 }}</span>
          <span style="display: flex; align-items: center; gap: 10px"><span style="width: 10px; height: 10px; border-radius: 3px; background: {{ ucAccent }}"></span>{{ ucB2 }}</span>
          <span style="display: flex; align-items: center; gap: 10px"><span style="width: 10px; height: 10px; border-radius: 3px; background: {{ ucAccent }}"></span>{{ ucB3 }}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px; padding-top: 4px">
          <span style="width: 28px; height: 28px; border-radius: 99px; border: 1px solid #C5C9EA; background: {{ ucC1 }}"></span>
          <span style="width: 28px; height: 28px; border-radius: 99px; border: 1px solid #C5C9EA; background: {{ ucC2 }}"></span>
          <span style="width: 28px; height: 28px; border-radius: 99px; border: 1px solid #C5C9EA; background: {{ ucC3 }}"></span>
          <span style="margin-left: 8px; font-size: 13px; color: #4A4D6A">Police : {{ ucFont }}</span>
        </div>
      </div>
      <div style="flex: 2 1 480px; min-width: 0; min-height: 600px; display: flex; align-items: center; justify-content: center; padding: 32px 16px; border-radius: 24px; background: {{ sceneBg }}; border: 1px solid #E3E6F8; overflow-x: auto; transition: background 0.5s ease">

        <sc-if value="{{ d0 }}" hint-placeholder-val="{{ true }}">
        <div style="animation: bfIn 0.5s ease both; display: flex; flex-direction: column; align-items: center">
          <div style="padding: 10px; border-radius: 16px 16px 0 0; background: #1B1F2A; box-shadow: 0 18px 40px rgba(14, 16, 48, 0.18)"><div style="width: 604px; height: 369px; overflow: hidden; position: relative"><div style="width: 720px; height: 440px; transform: scale(0.84); transform-origin: 0 0"><div style="position: relative; display: flex; width: 720px; height: 440px; background: #F3F8F6; color: #0B2B26; font-family: 'IBM Plex Sans', system-ui, sans-serif; overflow: hidden">
<div style="width: 170px; flex: none; padding: 22px 14px; background: #0B3B33; color: #CFE8E1; display: flex; flex-direction: column; gap: 6px; font-size: 14px">
<div style="margin-bottom: 18px; font-size: 16px; font-weight: 600; color: #FFFFFF">Entrepôt</div>
<div style="padding: 10px 12px; border-radius: 8px; background: #14584C; color: #FFFFFF; font-weight: 500">Tableau de bord</div>
<div style="padding: 10px 12px">Articles</div><div style="padding: 10px 12px">Commandes</div><div style="padding: 10px 12px">Fournisseurs</div><div style="padding: 10px 12px">Alertes</div>
</div>
<div style="flex: 1; min-width: 0; padding: 24px; display: flex; flex-direction: column; gap: 16px">
<div style="display: flex; align-items: center; justify-content: space-between"><span style="font-size: 22px; font-weight: 600">Stock</span><span style="padding: 8px 14px; border-radius: 8px; background: #0F8F78; color: #FFFFFF; font-size: 13px; font-weight: 500">+ Commande</span></div>
<div style="padding: 16px; border-radius: 12px; background: #FFFFFF; border: 1px solid #E1ECE8">
<div style="margin-bottom: 12px; font-size: 13px; color: #4E6F68">Mouvements de la semaine</div>
<div style="display: flex; align-items: flex-end; gap: 14px; height: 104px"><div style="flex: 1; height: 40px; border-radius: 6px 6px 0 0; background: #0F8F78; transform-origin: bottom; animation: bfGrow 0.6s ease both; animation-delay: 0.1s"></div><div style="flex: 1; height: 64px; border-radius: 6px 6px 0 0; background: #0F8F78; transform-origin: bottom; animation: bfGrow 0.6s ease both; animation-delay: 0.2s"></div><div style="flex: 1; height: 48px; border-radius: 6px 6px 0 0; background: #0F8F78; transform-origin: bottom; animation: bfGrow 0.6s ease both; animation-delay: 0.3s"></div><div style="flex: 1; height: 90px; border-radius: 6px 6px 0 0; background: #0F8F78; transform-origin: bottom; animation: bfGrow 0.6s ease both; animation-delay: 0.4s"></div><div style="flex: 1; height: 72px; border-radius: 6px 6px 0 0; background: #0F8F78; transform-origin: bottom; animation: bfGrow 0.6s ease both; animation-delay: 0.5s"></div><div style="flex: 1; height: 104px; border-radius: 6px 6px 0 0; background: #0F8F78; transform-origin: bottom; animation: bfGrow 0.6s ease both; animation-delay: 0.6s"></div><div style="flex: 1; height: 80px; border-radius: 6px 6px 0 0; background: #F2B134; transform-origin: bottom; animation: bfGrow 0.6s ease both; animation-delay: 0.7s"></div></div></div>
<div style="border-radius: 12px; background: #FFFFFF; border: 1px solid #E1ECE8; overflow: hidden"><div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 16px; border-top: 1px solid #E1ECE8; font-size: 13px; animation: bfLine 0.5s ease both; animation-delay: 0.8s"><span style="width: 120px; font-weight: 500">Article A</span><span style="flex: 1; color: #4E6F68">Entrepôt 1</span><span style="padding: 3px 10px; border-radius: 99px; background: #D5F2E7; color: #0B6B4F; font-size: 12px; font-weight: 500">En stock</span></div><div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 16px; border-top: 1px solid #E1ECE8; font-size: 13px; animation: bfLine 0.5s ease both; animation-delay: 1.0s"><span style="width: 120px; font-weight: 500">Article B</span><span style="flex: 1; color: #4E6F68">Entrepôt 1</span><span style="padding: 3px 10px; border-radius: 99px; background: #FFEFC7; color: #8A5A00; font-size: 12px; font-weight: 500">À réappro</span></div><div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 16px; border-top: 1px solid #E1ECE8; font-size: 13px; animation: bfLine 0.5s ease both; animation-delay: 1.2s"><span style="width: 120px; font-weight: 500">Article C</span><span style="flex: 1; color: #4E6F68">Entrepôt 2</span><span style="padding: 3px 10px; border-radius: 99px; background: #DCE8FF; color: #1E40AF; font-size: 12px; font-weight: 500">Commandé</span></div></div>
</div></div></div></div></div>
          <div style="width: 680px; max-width: 100%; height: 14px; border-radius: 0 0 16px 16px; background: #AEB4C8"></div>
        </div>
        </sc-if>
        <sc-if value="{{ d1 }}" hint-placeholder-val="{{ false }}">
        <div style="animation: bfIn 0.5s ease both; padding: 10px; border-radius: 40px; background: #0B0C12; box-shadow: 0 18px 40px rgba(14, 16, 48, 0.25)"><div style="border-radius: 32px; overflow: hidden"><div style="position: relative; width: 232px; height: 480px; padding: 20px 14px 16px; box-sizing: border-box; background: #14151C; color: #FFFFFF; font-family: 'Space Grotesk', system-ui, sans-serif; display: flex; flex-direction: column; gap: 10px; overflow: hidden">
<div><div style="font-size: 20px; font-weight: 700; letter-spacing: -0.02em">Tournée du jour</div><div style="margin-top: 2px; font-size: 12px; color: #A3A8BD">Casablanca · 5 arrêts</div></div>
<div style="align-self: flex-start; padding: 4px 10px; border-radius: 99px; background: #2A2D3B; color: #FFB784; font-size: 11px; font-weight: 500">Hors ligne · synchro auto</div>
<div style="position: relative; height: 100px; flex: none; border-radius: 16px; background: #1F212C; overflow: hidden">
<svg width="204" height="100" viewBox="0 0 204 100" style="position: absolute; inset: 0" aria-hidden="true"><path d="M0 34H204M0 68H204M68 0V100M136 0V100" stroke="#2A2D3B" stroke-width="1.5"></path><path d="M16 82C60 82 70 30 110 40S170 20 188 22" fill="none" stroke="#FF7A29" stroke-width="3" stroke-dasharray="5 5" stroke-linecap="round"></path><circle cx="188" cy="22" r="7" fill="#FF7A29"></circle><circle cx="188" cy="22" r="3" fill="#14151C"></circle></svg>
<div style="position: absolute; left: 10px; top: 76px; width: 12px; height: 12px; border-radius: 99px; background: #FFFFFF; border: 3px solid #FF7A29; box-sizing: border-box; animation: bfRoute 1.8s ease-in-out both"></div>
</div>
<div style="display: flex; align-items: center; gap: 10px; height: 44px; padding: 0 12px; border-radius: 12px; background: #1F212C; font-size: 13px; animation: bfLine 0.4s ease both; animation-delay: 0.1s"><span style="display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 99px; background: #22C55E"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#14151C" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Arrêt 1</div><div style="display: flex; align-items: center; gap: 10px; height: 44px; padding: 0 12px; border-radius: 12px; background: #1F212C; font-size: 13px; animation: bfLine 0.4s ease both; animation-delay: 0.3s"><span style="display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 99px; background: #22C55E"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#14151C" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Arrêt 2</div><div style="display: flex; align-items: center; justify-content: space-between; height: 44px; padding: 0 12px; border-radius: 12px; background: #2A2D3B; border: 1px solid #FF7A29; font-size: 13px; animation: bfLine 0.4s ease both; animation-delay: 0.5s"><span style="display: flex; align-items: center; gap: 10px"><span style="width: 20px; height: 20px; border-radius: 99px; border: 2px solid #FF7A29; box-sizing: border-box"></span>Arrêt 3</span><span style="color: #FFB784; font-size: 12px">En cours</span></div>
<div style="position: relative; flex: none; height: 52px; margin-top: auto; border-radius: 16px; background: #FF7A29; overflow: hidden; animation: bfConfirm 1.8s ease both">
<span style="position: absolute; left: 50%; top: 50%; width: 60px; height: 60px; margin: -30px 0 0 -30px; border-radius: 99px; background: #FFFFFF; animation: bfRipple 1.8s ease-out both"></span>
<span style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #14151C; font-size: 15px; font-weight: 700; animation: bfOut 1.8s ease both">Confirmer la livraison</span>
<span style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #14151C; font-size: 15px; font-weight: 700; animation: bfInLbl 1.8s ease both">Livré</span>
</div>
</div></div></div>
        </sc-if>
        <sc-if value="{{ d2 }}" hint-placeholder-val="{{ false }}">
        <div style="animation: bfIn 0.5s ease both; padding: 14px; border-radius: 32px; background: #0B0C12; box-shadow: 0 18px 40px rgba(14, 16, 48, 0.25)"><div style="border-radius: 16px; overflow: hidden"><div style="width: 608px; height: 418px; overflow: hidden; position: relative"><div style="width: 640px; height: 440px; transform: scale(0.95); transform-origin: 0 0"><div style="position: relative; display: flex; gap: 16px; width: 640px; height: 440px; padding: 20px; box-sizing: border-box; background: #FFF6E8; color: #4A2312; font-family: 'Inter', system-ui, sans-serif; overflow: hidden">
<div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 14px">
<div style="font-family: 'Fraunces', Georgia, serif; font-size: 28px; font-weight: 700; color: #7C2D12">Carte</div>
<div style="display: flex; flex-wrap: wrap; gap: 8px"><span style="padding: 6px 14px; border-radius: 99px; background: #FFFFFF; border: 1px solid #F0DFC4; color: #4A2312; font-size: 13px; font-weight: 500">Entrées</span><span style="padding: 6px 14px; border-radius: 99px; background: #C2410C; color: #FFFFFF; font-size: 13px; font-weight: 600">Plats</span><span style="padding: 6px 14px; border-radius: 99px; background: #FFFFFF; border: 1px solid #F0DFC4; color: #4A2312; font-size: 13px; font-weight: 500">Desserts</span><span style="padding: 6px 14px; border-radius: 99px; background: #FFFFFF; border: 1px solid #F0DFC4; color: #4A2312; font-size: 13px; font-weight: 500">Boissons</span></div>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px"><div style="padding: 12px; border-radius: 16px; background: #FFFFFF; border: 1px solid #F0DFC4; display: flex; flex-direction: column; gap: 10px; animation: bfLine 0.4s ease both; animation-delay: 0.1s"><span style="width: 44px; height: 44px; border-radius: 99px; background: #7C9A3C"></span><span style="font-size: 14px; font-weight: 600; color: #4A2312">Salade</span></div><div style="padding: 12px; border-radius: 16px; background: #FFFFFF; border: 1px solid #F0DFC4; display: flex; flex-direction: column; gap: 10px; animation: bfLine 0.4s ease both; animation-delay: 0.2s"><span style="width: 44px; height: 44px; border-radius: 99px; background: #C2410C"></span><span style="font-size: 14px; font-weight: 600; color: #4A2312">Harira</span></div><div style="animation: bfTap 0.5s ease 0.7s both"><div style="padding: 12px; border-radius: 16px; background: #FFFFFF; border: 1px solid #F0DFC4; display: flex; flex-direction: column; gap: 10px; animation: bfLine 0.4s ease both; animation-delay: 0.3s"><span style="width: 44px; height: 44px; border-radius: 99px; background: #E9A23B"></span><span style="font-size: 14px; font-weight: 600; color: #4A2312">Tajine</span></div></div><div style="padding: 12px; border-radius: 16px; background: #FFFFFF; border: 1px solid #F0DFC4; display: flex; flex-direction: column; gap: 10px; animation: bfLine 0.4s ease both; animation-delay: 0.4s"><span style="width: 44px; height: 44px; border-radius: 99px; background: #B5543A"></span><span style="font-size: 14px; font-weight: 600; color: #4A2312">Pastilla</span></div><div style="padding: 12px; border-radius: 16px; background: #FFFFFF; border: 1px solid #F0DFC4; display: flex; flex-direction: column; gap: 10px; animation: bfLine 0.4s ease both; animation-delay: 0.5s"><span style="width: 44px; height: 44px; border-radius: 99px; background: #F2C879"></span><span style="font-size: 14px; font-weight: 600; color: #4A2312">Couscous</span></div><div style="padding: 12px; border-radius: 16px; background: #FFFFFF; border: 1px solid #F0DFC4; display: flex; flex-direction: column; gap: 10px; animation: bfLine 0.4s ease both; animation-delay: 0.6s"><span style="width: 44px; height: 44px; border-radius: 99px; background: #5E8F5A"></span><span style="font-size: 14px; font-weight: 600; color: #4A2312">Thé</span></div></div>
</div>
<div style="width: 220px; flex: none; padding: 16px; border-radius: 20px; background: #FFFFFF; border: 1px solid #F0DFC4; display: flex; flex-direction: column">
<div style="font-family: 'Fraunces', Georgia, serif; font-size: 22px; font-weight: 700; color: #7C2D12">Table 4</div>
<div style="margin-bottom: 8px; font-size: 12px; color: #8A5A3C">Commande en cours</div>
<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed #E8D4B4; font-size: 14px; animation: bfLine 0.5s ease both; animation-delay: 0.4s"><span>1 × Harira</span></div><div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed #E8D4B4; font-size: 14px; animation: bfLine 0.5s ease both; animation-delay: 0.9s"><span>1 × Tajine</span></div><div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed #E8D4B4; font-size: 14px; animation: bfLine 0.5s ease both; animation-delay: 1.2s"><span>2 × Thé à la menthe</span></div>
<div style="margin-top: auto; padding: 14px 0; border-radius: 14px; background: #C2410C; color: #FFFFFF; font-size: 14px; font-weight: 600; text-align: center; animation: bfTap 0.5s ease 1.5s both">Envoyer en cuisine</div>
</div></div></div></div></div></div>
        </sc-if>
        <sc-if value="{{ d3 }}" hint-placeholder-val="{{ false }}">
        <div style="animation: bfIn 0.5s ease both; padding: 22px; border-radius: 24px; background: #2B3A55; box-shadow: 0 18px 40px rgba(14, 16, 48, 0.25)"><div style="border: 6px solid #0A1626; border-radius: 10px; overflow: hidden"><div style="width: 532px; height: 323px; overflow: hidden; position: relative"><div style="width: 560px; height: 340px; transform: scale(0.95); transform-origin: 0 0"><div style="position: relative; width: 560px; height: 340px; padding: 24px 40px; box-sizing: border-box; background: #0A2540; color: #FFFFFF; font-family: 'DM Sans', system-ui, sans-serif; display: flex; flex-direction: column; align-items: center; gap: 16px; overflow: hidden">
<div style="width: 100%; display: flex; justify-content: space-between; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #E3B341"><span>Borne bancaire</span><span>Français</span></div>
<div style="font-size: 26px; font-weight: 700; letter-spacing: -0.02em">Saisissez votre code</div>
<div style="display: flex; gap: 16px"><span style="width: 22px; height: 22px; border-radius: 99px; background: #E3B341; border: 2px solid #E3B341; box-sizing: border-box; animation: bfDot 0.3s ease both; animation-delay: 0.2s"></span><span style="width: 22px; height: 22px; border-radius: 99px; background: #E3B341; border: 2px solid #E3B341; box-sizing: border-box; animation: bfDot 0.3s ease both; animation-delay: 0.55s"></span><span style="width: 22px; height: 22px; border-radius: 99px; background: #E3B341; border: 2px solid #E3B341; box-sizing: border-box; animation: bfDot 0.3s ease both; animation-delay: 0.9s"></span><span style="width: 22px; height: 22px; border-radius: 99px; background: #E3B341; border: 2px solid #E3B341; box-sizing: border-box; animation: bfDot 0.3s ease both; animation-delay: 1.25s"></span></div>
<div style="display: flex; align-items: center; gap: 8px; color: #34D399; font-size: 15px; font-weight: 600; animation: bfFade 0.4s ease both; animation-delay: 1.5s"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg>Code accepté</div>
<div style="width: 100%; display: flex; gap: 12px; margin-top: auto"><div style="flex: 1; padding: 16px 0; border-radius: 12px; background: #123A63; border: 1px solid #1F4F80; color: #FFFFFF; font-size: 15px; font-weight: 600; text-align: center; animation: bfLine 0.5s ease both; animation-delay: 1.6s">Retrait</div><div style="flex: 1; padding: 16px 0; border-radius: 12px; background: #123A63; border: 1px solid #1F4F80; color: #FFFFFF; font-size: 15px; font-weight: 600; text-align: center; animation: bfLine 0.5s ease both; animation-delay: 1.7s">Virement</div><div style="flex: 1; padding: 16px 0; border-radius: 12px; background: #123A63; border: 1px solid #1F4F80; color: #FFFFFF; font-size: 15px; font-weight: 600; text-align: center; animation: bfLine 0.5s ease both; animation-delay: 1.8s">Solde</div></div>
</div></div></div></div>
          <div aria-hidden="true" style="display: flex; justify-content: space-between; gap: 12px; margin-top: 16px"><span style="width: 120px; height: 12px; border-radius: 4px; background: #E3B341"></span><span style="width: 160px; height: 28px; border-radius: 6px; background: #0A1626"></span></div>
        </div>
        </sc-if>

      </div>
    </div>
  </div>
</section>

<!-- CASABLANCA -->
<section style="background: #FFFFFF; border-top: 1px solid #E3E6F8; padding: 96px 0">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; flex-wrap: wrap; gap: 40px 64px">
    <div style="flex: 1 1 300px; max-width: 400px">
      <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">Casablanca</p>
      <h2 style="margin: 0; font-size: clamp(30px, 3.4vw, 44px); line-height: 1.1; letter-spacing: -0.03em; font-weight: 700">Un seul bureau, au Technopark.</h2>
    </div>
    <div style="flex: 999 1 560px; min-width: 0">
      <p style="margin: 0 0 32px; max-width: 640px; font-size: 18px; line-height: 1.6; color: #3A3D60">Il n'y a pas de second bureau dans un autre quartier. Le déplacement dans la ville se décide quand le geste ne se comprend pas autrement.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 16px">
        <div style="flex: 1 1 240px; padding: 24px; border-radius: 16px; background: #F5F6FF; border: 1px solid #E3E6F8">
          <p style="margin: 0 0 12px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">Bureau</p>
          <h3 style="margin: 0 0 8px; font-size: 18px; letter-spacing: -0.01em">Technopark</h3>
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #3A3D60">Boulevard Dammam, Aïn Chock, 20001 Casablanca. Sur rendez-vous, en semaine, de 9 h à 19 h.</p>
        </div>
        <div style="flex: 1 1 240px; padding: 24px; border-radius: 16px; background: #F5F6FF; border: 1px solid #E3E6F8">
          <p style="margin: 0 0 12px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">Catalogue</p>
          <h3 style="margin: 0 0 8px; font-size: 18px; letter-spacing: -0.01em">Des mises en ligne casablancaises</h3>
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #3A3D60">Dealkhir (2024), UAS pour l'aéronautique, YourSmile (2025). Ces fiches ne couvrent pas tous les métiers de la ville.</p>
        </div>
        <div style="flex: 1 1 240px; padding: 24px; border-radius: 16px; background: #F5F6FF; border: 1px solid #E3E6F8">
          <p style="margin: 0 0 12px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">Premier échange</p>
          <h3 style="margin: 0 0 8px; font-size: 18px; letter-spacing: -0.01em">Sans décalage horaire</h3>
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #3A3D60">Trente minutes au Technopark sur rendez-vous, ou en visio. Téléphone : +212 666 650 696. Devis en dirhams.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- OFFRE -->
<section style="border-top: 1px solid #E3E6F8; padding: 96px 0">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; flex-wrap: wrap; gap: 40px 64px">
    <div style="flex: 1 1 300px; max-width: 400px">
      <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">Offre</p>
      <h2 style="margin: 0; font-size: clamp(30px, 3.4vw, 44px); line-height: 1.1; letter-spacing: -0.03em; font-weight: 700">Ce qu'est un logiciel sur mesure.</h2>
    </div>
    <div style="flex: 999 1 560px; min-width: 0">
      <p style="margin: 0 0 20px; max-width: 680px; font-size: 18px; line-height: 1.6; color: #3A3D60">Un programme écrit pour le fonctionnement d'une entreprise précise. Il ne cherche pas à ressembler à un abonnement du marché.</p>
      <p style="margin: 0 0 32px; max-width: 680px; font-size: 18px; line-height: 1.6; color: #3A3D60">Il se justifie quand les colonnes du modèle obligent l'équipe à travailler à côté de l'outil, dans un second fichier, ou au téléphone. Le dépôt, le code et l'hébergement livré reviennent au client.</p>
      <div style="padding: 28px; border-radius: 16px; background: #E6E8FF">
        <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.6; color: #1A1F6B">Cette page locale ne recrée pas les offres déjà publiées. Elle dit comment la même offre se discute à Casablanca.</p>
        <div style="display: flex; flex-wrap: wrap; gap: 10px">
          <a href="https://byteforce.ma/developpement-logiciel-sur-mesure-maroc/crm" style="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 10px; background: #FFFFFF; color: #0E1030; text-decoration: none; font-size: 14px; font-weight: 600">CRM
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
          <a href="https://byteforce.ma/developpement-logiciel-sur-mesure-maroc/erp" style="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 10px; background: #FFFFFF; color: #0E1030; text-decoration: none; font-size: 14px; font-weight: 600">ERP
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
          <a href="https://byteforce.ma/developpement-logiciel-sur-mesure-maroc/logiciel-metier" style="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 10px; background: #FFFFFF; color: #0E1030; text-decoration: none; font-size: 14px; font-weight: 600">Logiciel métier
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
          <a href="https://byteforce.ma/developpement-logiciel-sur-mesure-maroc/automatisation" style="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 10px; background: #FFFFFF; color: #0E1030; text-decoration: none; font-size: 14px; font-weight: 600">Automatisation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- LIVRÉ -->
<section style="background: #FFFFFF; border-top: 1px solid #E3E6F8; padding: 96px 0">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px">
    <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">Ce qui est livré</p>
    <h2 style="margin: 0 0 48px; max-width: 760px; font-size: clamp(30px, 3.4vw, 44px); line-height: 1.1; letter-spacing: -0.03em; font-weight: 700">Six livrables, écrits avant le code.</h2>
    <div style="display: flex; flex-wrap: wrap; gap: 16px">
      <div style="flex: 1 1 320px; padding: 28px; border-radius: 16px; background: #F5F6FF; border: 1px solid #E3E6F8">
        <p style="margin: 0 0 14px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">01 · Processus</p>
        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #2B2E52">Le processus réel, écrit avec les rôles.</p>
      </div>
      <div style="flex: 1 1 320px; padding: 28px; border-radius: 16px; background: #F5F6FF; border: 1px solid #E3E6F8">
        <p style="margin: 0 0 14px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">02 · Version 1</p>
        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #2B2E52">La première version, et ce qui attend.</p>
      </div>
      <div style="flex: 1 1 320px; padding: 28px; border-radius: 16px; background: #F5F6FF; border: 1px solid #E3E6F8">
        <p style="margin: 0 0 14px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">03 · Données</p>
        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #2B2E52">L'inventaire des données à reprendre, sans import promis à l'aveugle.</p>
      </div>
      <div style="flex: 1 1 320px; padding: 28px; border-radius: 16px; background: #F5F6FF; border: 1px solid #E3E6F8">
        <p style="margin: 0 0 14px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">04 · Dépôt</p>
        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #2B2E52">Le dépôt et l'hébergement livré au nom de l'entreprise.</p>
      </div>
      <div style="flex: 1 1 320px; padding: 28px; border-radius: 16px; background: #F5F6FF; border: 1px solid #E3E6F8">
        <p style="margin: 0 0 14px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">05 · Liens</p>
        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #2B2E52">Le lien vers le CRM, l'ERP ou l'automatisation si c'est le vrai sujet.</p>
      </div>
      <div style="flex: 1 1 320px; padding: 28px; border-radius: 16px; background: #F5F6FF; border: 1px solid #E3E6F8">
        <p style="margin: 0 0 14px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">06 · Contact</p>
        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #2B2E52">Une voie de contact pour cadrer, pas un forfait affiché.</p>
      </div>
    </div>
  </div>
</section>

<!-- PASSAGE -->
<section style="border-top: 1px solid #E3E6F8; padding: 96px 0">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; flex-wrap: wrap; gap: 40px 64px">
    <div style="flex: 1 1 300px; max-width: 400px">
      <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">Le passage</p>
      <h2 style="margin: 0; font-size: clamp(30px, 3.4vw, 44px); line-height: 1.1; letter-spacing: -0.03em; font-weight: 700">Du geste à la remise, en 4 étapes.</h2>
    </div>
    <div style="flex: 999 1 560px; min-width: 0; display: flex; flex-direction: column; gap: 14px">
      <div style="display: flex; gap: 20px; padding: 24px; border-radius: 16px; background: #FFFFFF; border: 1px solid #E3E6F8">
        <span style="flex: none; display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 99px; background: {{accent}}; color: #FFFFFF; font-size: 14px; font-weight: 700">1</span>
        <div><h3 style="margin: 0 0 4px; font-size: 18px; letter-spacing: -0.01em">Le geste</h3><p style="margin: 0; font-size: 15px; line-height: 1.6; color: #3A3D60">On nomme le geste pour Casablanca, et ce qui attend la première version.</p></div>
      </div>
      <div style="display: flex; gap: 20px; padding: 24px; border-radius: 16px; background: #FFFFFF; border: 1px solid #E3E6F8">
        <span style="flex: none; display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 99px; background: {{accent}}; color: #FFFFFF; font-size: 14px; font-weight: 700">2</span>
        <div><h3 style="margin: 0 0 4px; font-size: 18px; letter-spacing: -0.01em">Trente minutes</h3><p style="margin: 0; font-size: 15px; line-height: 1.6; color: #3A3D60">Pour dire si le sujet est bien cette offre. La réponse part sous un jour ouvré.</p></div>
      </div>
      <div style="display: flex; gap: 20px; padding: 24px; border-radius: 16px; background: #FFFFFF; border: 1px solid #E3E6F8">
        <span style="flex: none; display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 99px; background: {{accent}}; color: #FFFFFF; font-size: 14px; font-weight: 700">3</span>
        <div><h3 style="margin: 0 0 4px; font-size: 18px; letter-spacing: -0.01em">Le montant</h3><p style="margin: 0; font-size: 15px; line-height: 1.6; color: #3A3D60">Même heure que le bureau, 9 h–19 h à Casablanca. Le montant se discute en dirhams, après le périmètre, pas avant.</p></div>
      </div>
      <div style="display: flex; gap: 20px; padding: 24px; border-radius: 16px; background: #FFFFFF; border: 1px solid #E3E6F8">
        <span style="flex: none; display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 99px; background: {{accent}}; color: #FFFFFF; font-size: 14px; font-weight: 700">4</span>
        <div><h3 style="margin: 0 0 4px; font-size: 18px; letter-spacing: -0.01em">La remise</h3><p style="margin: 0; font-size: 15px; line-height: 1.6; color: #3A3D60">À la remise, le dépôt et les comptes d'hébergement livrés sont à l'entreprise.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- MONTANT -->
<section style="background: #0E1030; color: #FFFFFF; padding: 96px 0">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; flex-wrap: wrap; gap: 40px 64px">
    <div style="flex: 1 1 300px; max-width: 400px">
      <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #AEB4FF">Le montant</p>
      <h2 style="margin: 0; font-size: clamp(30px, 3.4vw, 44px); line-height: 1.1; letter-spacing: -0.03em; font-weight: 700">Aucune fourchette en dirhams n'est publiée.</h2>
    </div>
    <div style="flex: 999 1 560px; min-width: 0">
      <p style="margin: 0 0 20px; max-width: 640px; font-size: 18px; line-height: 1.6; color: #D5D8F5">Le montant suit le périmètre : rôles, outils déjà en place, langues, reprise des données, déplacement s'il est écrit.</p>
      <p style="margin: 0 0 32px; max-width: 640px; font-size: 18px; line-height: 1.6; color: #D5D8F5">Le premier échange ne donne pas un prix public. Il dit si un chiffrage a un sens.</p>
      <a href="#contact" style="display: inline-flex; align-items: center; gap: 8px; min-height: 48px; padding: 0 24px; border-radius: 10px; background: #FFFFFF; color: #0E1030; text-decoration: none; font-weight: 600">Demander un cadrage
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg>
      </a>
    </div>
  </div>
</section>

<!-- CATALOGUE -->
<section style="padding: 96px 0">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px">
    <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">Dans le catalogue</p>
    <h2 style="margin: 0 0 12px; max-width: 760px; font-size: clamp(30px, 3.4vw, 44px); line-height: 1.1; letter-spacing: -0.03em; font-weight: 700">Projets publiés à Casablanca.</h2>
    <p style="margin: 0 0 40px; font-size: 16px; color: #4A4D6A">La ville est écrite sur la fiche. Ce n'est pas un bureau local.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 16px">
      <a href="https://byteforce.ma/realisations/dealkhir" style="flex: 1 1 320px; display: flex; flex-direction: column; justify-content: space-between; gap: 40px; min-height: 220px; padding: 28px; border-radius: 16px; background: #FFFFFF; border: 1px solid #D5D9F2; color: #0E1030; text-decoration: none">
        <div>
          <p style="margin: 0 0 14px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">Plateforme · 2024</p>
          <h3 style="margin: 0 0 8px; font-size: 24px; letter-spacing: -0.02em">Dealkhir</h3>
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #3A3D60">Plateforme pour les organisations et les dons.</p>
        </div>
        <span style="display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: {{accent}}">Voir la fiche
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></span>
      </a>
      <div style="flex: 1 1 320px; display: flex; flex-direction: column; justify-content: space-between; gap: 40px; min-height: 220px; padding: 28px; border-radius: 16px; background: #FFFFFF; border: 1px solid #D5D9F2">
        <div>
          <p style="margin: 0 0 14px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">E-commerce</p>
          <h3 style="margin: 0 0 8px; font-size: 24px; letter-spacing: -0.02em">UAS</h3>
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #3A3D60">Site e-commerce pour l'aéronautique.</p>
        </div>
      </div>
      <div style="flex: 1 1 320px; display: flex; flex-direction: column; justify-content: space-between; gap: 40px; min-height: 220px; padding: 28px; border-radius: 16px; background: #FFFFFF; border: 1px solid #D5D9F2">
        <div>
          <p style="margin: 0 0 14px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">Site public · 2025</p>
          <h3 style="margin: 0 0 8px; font-size: 24px; letter-spacing: -0.02em">YourSmile</h3>
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #3A3D60">Site public qui cite Casablanca, en ligne depuis 2025.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- VILLES -->
<section style="background: #FFFFFF; border-top: 1px solid #E3E6F8; padding: 96px 0">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; flex-wrap: wrap; gap: 40px 64px">
    <div style="flex: 1 1 300px; max-width: 400px">
      <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">Villes</p>
      <h2 style="margin: 0; font-size: clamp(30px, 3.4vw, 44px); line-height: 1.1; letter-spacing: -0.03em; font-weight: 700">La même offre, dans une autre ville du Maroc.</h2>
    </div>
    <div style="flex: 999 1 560px; min-width: 0; display: flex; flex-wrap: wrap; gap: 12px; align-content: flex-start">
      <a href="https://byteforce.ma/geo-location/developpement-logiciel-sur-mesure/ma/rabat" style="flex: 1 1 200px; display: flex; align-items: center; justify-content: space-between; min-height: 64px; padding: 0 22px; border-radius: 14px; background: #F5F6FF; border: 1px solid #E3E6F8; color: #0E1030; text-decoration: none; font-weight: 600">Rabat
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
      <a href="https://byteforce.ma/geo-location/developpement-logiciel-sur-mesure/ma/marrakech" style="flex: 1 1 200px; display: flex; align-items: center; justify-content: space-between; min-height: 64px; padding: 0 22px; border-radius: 14px; background: #F5F6FF; border: 1px solid #E3E6F8; color: #0E1030; text-decoration: none; font-weight: 600">Marrakech
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
      <a href="https://byteforce.ma/geo-location/developpement-logiciel-sur-mesure/ma/tanger" style="flex: 1 1 200px; display: flex; align-items: center; justify-content: space-between; min-height: 64px; padding: 0 22px; border-radius: 14px; background: #F5F6FF; border: 1px solid #E3E6F8; color: #0E1030; text-decoration: none; font-weight: 600">Tanger
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
      <a href="https://byteforce.ma/geo-location/developpement-logiciel-sur-mesure/ma/fes" style="flex: 1 1 200px; display: flex; align-items: center; justify-content: space-between; min-height: 64px; padding: 0 22px; border-radius: 14px; background: #F5F6FF; border: 1px solid #E3E6F8; color: #0E1030; text-decoration: none; font-weight: 600">Fès
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
      <a href="https://byteforce.ma/geo-location/developpement-logiciel-sur-mesure/ma/agadir" style="flex: 1 1 200px; display: flex; align-items: center; justify-content: space-between; min-height: 64px; padding: 0 22px; border-radius: 14px; background: #F5F6FF; border: 1px solid #E3E6F8; color: #0E1030; text-decoration: none; font-weight: 600">Agadir
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
    </div>
  </div>
</section>

<!-- FAQ -->
<section style="border-top: 1px solid #E3E6F8; padding: 96px 0">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; flex-wrap: wrap; gap: 40px 64px">
    <div style="flex: 1 1 300px; max-width: 400px">
      <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">Questions</p>
      <h2 style="margin: 0; font-size: clamp(30px, 3.4vw, 44px); line-height: 1.1; letter-spacing: -0.03em; font-weight: 700">Ce qu'on nous demande le plus.</h2>
    </div>
    <div style="flex: 999 1 560px; min-width: 0; border-top: 1px solid #C5C9EA">
      <div style="border-bottom: 1px solid #C5C9EA">
        <button type="button" onClick="{{ t1 }}" aria-expanded="{{ o1 }}" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; min-height: 64px; padding: 20px 0; border: 0; background: none; text-align: left; font-family: inherit; font-size: 18px; font-weight: 600; color: #0E1030; cursor: pointer">Y a-t-il un bureau à Casablanca ?<span aria-hidden="true" style="font-size: 24px; color: {{accent}}">{{ g1 }}</span></button>
        <sc-if value="{{ o1 }}" hint-placeholder-val="{{ true }}"><p style="margin: 0 0 24px; max-width: 640px; font-size: 16px; line-height: 1.6; color: #3A3D60">Oui, un seul : Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Sur rendez-vous, en semaine, de 9 h à 19 h.</p></sc-if>
      </div>
      <div style="border-bottom: 1px solid #C5C9EA">
        <button type="button" onClick="{{ t2 }}" aria-expanded="{{ o2 }}" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; min-height: 64px; padding: 20px 0; border: 0; background: none; text-align: left; font-family: inherit; font-size: 18px; font-weight: 600; color: #0E1030; cursor: pointer">Quel est le prix d'un logiciel sur mesure à Casablanca ?<span aria-hidden="true" style="font-size: 24px; color: {{accent}}">{{ g2 }}</span></button>
        <sc-if value="{{ o2 }}" hint-placeholder-val="{{ false }}"><p style="margin: 0 0 24px; max-width: 640px; font-size: 16px; line-height: 1.6; color: #3A3D60">Aucune fourchette en dirhams n'est publiée. Le montant suit le périmètre : rôles, outils déjà en place, langues, reprise des données, déplacement s'il est écrit.</p></sc-if>
      </div>
      <div style="border-bottom: 1px solid #C5C9EA">
        <button type="button" onClick="{{ t3 }}" aria-expanded="{{ o3 }}" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; min-height: 64px; padding: 20px 0; border: 0; background: none; text-align: left; font-family: inherit; font-size: 18px; font-weight: 600; color: #0E1030; cursor: pointer">Que comprend un logiciel sur mesure ?<span aria-hidden="true" style="font-size: 24px; color: {{accent}}">{{ g3 }}</span></button>
        <sc-if value="{{ o3 }}" hint-placeholder-val="{{ false }}"><p style="margin: 0 0 24px; max-width: 640px; font-size: 16px; line-height: 1.6; color: #3A3D60">Le processus réel, écrit avec les rôles. La première version, et ce qui attend. L'inventaire des données à reprendre, sans import promis à l'aveugle.</p></sc-if>
      </div>
      <div style="border-bottom: 1px solid #C5C9EA">
        <button type="button" onClick="{{ t4 }}" aria-expanded="{{ o4 }}" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; min-height: 64px; padding: 20px 0; border: 0; background: none; text-align: left; font-family: inherit; font-size: 18px; font-weight: 600; color: #0E1030; cursor: pointer">Comment se passent les points à Casablanca ?<span aria-hidden="true" style="font-size: 24px; color: {{accent}}">{{ g4 }}</span></button>
        <sc-if value="{{ o4 }}" hint-placeholder-val="{{ false }}"><p style="margin: 0 0 24px; max-width: 640px; font-size: 16px; line-height: 1.6; color: #3A3D60">Même heure que le bureau, 9 h–19 h à Casablanca. Le contact se fait par le formulaire du site. La langue de cadrage est le français.</p></sc-if>
      </div>
      <div style="border-bottom: 1px solid #C5C9EA">
        <button type="button" onClick="{{ t5 }}" aria-expanded="{{ o5 }}" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; min-height: 64px; padding: 20px 0; border: 0; background: none; text-align: left; font-family: inherit; font-size: 18px; font-weight: 600; color: #0E1030; cursor: pointer">Quelle est la première étape ?<span aria-hidden="true" style="font-size: 24px; color: {{accent}}">{{ g5 }}</span></button>
        <sc-if value="{{ o5 }}" hint-placeholder-val="{{ false }}"><p style="margin: 0 0 24px; max-width: 640px; font-size: 16px; line-height: 1.6; color: #3A3D60">Écrire avec le fichier, l'URL, ou le geste qui bloque. Trente minutes suffisent souvent. Le périmètre écrit vient avant le code et avant le montant.</p></sc-if>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" style="background: #FFFFFF; border-top: 1px solid #E3E6F8; padding: 96px 0">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; flex-wrap: wrap; gap: 40px 64px">
    <div style="flex: 1 1 300px; max-width: 400px">
      <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: {{accent}}">Contact</p>
      <h2 style="margin: 0 0 20px; font-size: clamp(30px, 3.4vw, 44px); line-height: 1.1; letter-spacing: -0.03em; font-weight: 700">Décrire le projet.</h2>
      <p style="margin: 0 0 28px; font-size: 16px; line-height: 1.6; color: #3A3D60">Réponse sous un jour ouvré, à contact@byteforce.ma. Bureau au Technopark, Casablanca.</p>
      <a href="https://wa.me/212666650696" style="display: inline-flex; align-items: center; gap: 8px; min-height: 48px; padding: 0 20px; border-radius: 10px; background: #F5F6FF; border: 1px solid #C5C9EA; color: #0E1030; text-decoration: none; font-weight: 600">Écrire sur WhatsApp
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
    </div>
    <div style="flex: 999 1 560px; min-width: 0; padding: 32px; border-radius: 20px; background: #F5F6FF; border: 1px solid #E3E6F8; display: flex; flex-direction: column; gap: 20px">
      <div style="display: flex; flex-wrap: wrap; gap: 20px">
        <div style="flex: 1 1 240px; display: flex; flex-direction: column; gap: 8px"><label for="f-nom" style="font-size: 14px; font-weight: 600">Nom *</label><input id="f-nom" type="text" style="height: 48px; padding: 0 14px; border: 1px solid #8A8FC2; border-radius: 10px; background: #FFFFFF; font-family: inherit; font-size: 16px; color: #0E1030"></div>
        <div style="flex: 1 1 240px; display: flex; flex-direction: column; gap: 8px"><label for="f-email" style="font-size: 14px; font-weight: 600">Email *</label><input id="f-email" type="email" style="height: 48px; padding: 0 14px; border: 1px solid #8A8FC2; border-radius: 10px; background: #FFFFFF; font-family: inherit; font-size: 16px; color: #0E1030"></div>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 20px">
        <div style="flex: 1 1 240px; display: flex; flex-direction: column; gap: 8px"><label for="f-tel" style="font-size: 14px; font-weight: 600">Téléphone</label><input id="f-tel" type="tel" style="height: 48px; padding: 0 14px; border: 1px solid #8A8FC2; border-radius: 10px; background: #FFFFFF; font-family: inherit; font-size: 16px; color: #0E1030"></div>
        <div style="flex: 1 1 240px; display: flex; flex-direction: column; gap: 8px"><label for="f-soc" style="font-size: 14px; font-weight: 600">Société</label><input id="f-soc" type="text" style="height: 48px; padding: 0 14px; border: 1px solid #8A8FC2; border-radius: 10px; background: #FFFFFF; font-family: inherit; font-size: 16px; color: #0E1030"></div>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 20px">
        <div style="flex: 1 1 240px; display: flex; flex-direction: column; gap: 8px"><label for="f-offre" style="font-size: 14px; font-weight: 600">Offre *</label>
          <select id="f-offre" style="height: 48px; padding: 0 14px; border: 1px solid #8A8FC2; border-radius: 10px; background: #FFFFFF; font-family: inherit; font-size: 16px; color: #0E1030">
            <option>Logiciel sur mesure</option>
            <option>Création de site web à Casablanca</option>
            <option>Applications mobiles</option>
            <option>Agence SEO à Casablanca</option>
            <option>Développement API sur mesure</option>
            <option>Audit et correction d'un site</option>
          </select></div>
        <div style="flex: 1 1 240px; display: flex; flex-direction: column; gap: 8px"><label for="f-type" style="font-size: 14px; font-weight: 600">Type de demande</label>
          <select id="f-type" style="height: 48px; padding: 0 14px; border: 1px solid #8A8FC2; border-radius: 10px; background: #FFFFFF; font-family: inherit; font-size: 16px; color: #0E1030">
            <option>Un nouveau produit</option>
            <option>Un correctif ou un audit</option>
            <option>Un suivi après livraison</option>
            <option>Pas encore défini</option>
          </select></div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px"><label for="f-projet" style="font-size: 14px; font-weight: 600">Projet *</label>
        <textarea id="f-projet" rows="5" placeholder="Le geste qui bloque, le fichier ou l'écran concerné, ce qui doit marcher sans réseau." style="padding: 14px; border: 1px solid #8A8FC2; border-radius: 10px; background: #FFFFFF; font-family: inherit; font-size: 16px; line-height: 1.5; color: #0E1030; resize: vertical"></textarea></div>
      <button type="button" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; padding: 0 28px; border: 0; border-radius: 10px; background: {{accent}}; color: #FFFFFF; font-family: inherit; font-size: 16px; font-weight: 600; cursor: pointer">Envoyer la demande
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg>
      </button>
      <p style="margin: 0; font-size: 13px; color: #4A4D6A">L'email envoie la demande. WhatsApp ouvre le message déjà rédigé.</p>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer style="background: #0E1030; color: #D5D8F5; padding: 72px 0 32px">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px">
    <div style="display: flex; flex-wrap: wrap; gap: 48px 40px; padding-bottom: 48px; border-bottom: 1px solid #2B2E5C">
      <div style="flex: 2 1 280px; min-width: 0">
        <p style="display: flex; align-items: center; gap: 10px; margin: 0 0 16px; font-size: 18px; font-weight: 700; color: #FFFFFF">
          <span style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; background: #FFFFFF; color: #0E1030; font-size: 13px">BF</span>Byte Force</p>
        <p style="margin: 0 0 16px; max-width: 320px; font-size: 15px; line-height: 1.6">Studio logiciel à Casablanca. Sites, applications et logiciels sur mesure.</p>
        <p style="margin: 0; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; line-height: 1.7; color: #AEB4FF">Technopark, Bd Dammam, Aïn Chock<br>20001 Casablanca, Maroc</p>
      </div>
      <div style="flex: 1 1 160px; min-width: 0">
        <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #AEB4FF">Studio</p>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 14px">
          <a href="https://byteforce.ma/realisations" style="color: #FFFFFF; text-decoration: none">Travaux</a>
          <a href="https://byteforce.ma/services" style="color: #FFFFFF; text-decoration: none">Services</a>
          <a href="https://byteforce.ma/solutions" style="color: #FFFFFF; text-decoration: none">Solutions</a>
          <a href="https://byteforce.ma/insights" style="color: #FFFFFF; text-decoration: none">Décisions</a>
          <a href="https://byteforce.ma/outils" style="color: #FFFFFF; text-decoration: none">Outils gratuits</a>
          <a href="https://byteforce.ma/audit" style="color: #FFFFFF; text-decoration: none">Audit gratuit</a>
        </div>
      </div>
      <div style="flex: 1 1 160px; min-width: 0">
        <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #AEB4FF">Écrire</p>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 14px">
          <a href="https://byteforce.ma/contact" style="color: #FFFFFF; text-decoration: none">Parler d'un projet</a>
          <a href="mailto:contact@byteforce.ma" style="color: #FFFFFF; text-decoration: none">contact@byteforce.ma</a>
          <a href="https://wa.me/212666650696" style="color: #FFFFFF; text-decoration: none">WhatsApp</a>
          <a href="https://www.instagram.com/byteforce.ma/" style="color: #FFFFFF; text-decoration: none">Instagram</a>
          <a href="https://www.linkedin.com/company/byte-force-maroc" style="color: #FFFFFF; text-decoration: none">LinkedIn</a>
        </div>
      </div>
      <div style="flex: 1 1 160px; min-width: 0">
        <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #AEB4FF">Maroc</p>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 14px">
          <a href="https://byteforce.ma/villes/casablanca" style="color: #FFFFFF; text-decoration: none">Casablanca</a>
          <a href="https://byteforce.ma/villes/rabat" style="color: #FFFFFF; text-decoration: none">Rabat</a>
          <a href="https://byteforce.ma/villes/marrakech" style="color: #FFFFFF; text-decoration: none">Marrakech</a>
          <a href="https://byteforce.ma/villes/tanger" style="color: #FFFFFF; text-decoration: none">Tanger</a>
          <a href="https://byteforce.ma/villes/fes" style="color: #FFFFFF; text-decoration: none">Fès</a>
          <a href="https://byteforce.ma/villes" style="color: #AEB4FF; text-decoration: none">Toutes les villes</a>
        </div>
      </div>
      <div style="flex: 1 1 160px; min-width: 0">
        <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #AEB4FF">Hors Maroc</p>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 14px">
          <a href="https://byteforce.ma/villes/paris" style="color: #FFFFFF; text-decoration: none">Paris</a>
          <a href="https://byteforce.ma/villes/lille" style="color: #FFFFFF; text-decoration: none">Lille</a>
          <a href="https://byteforce.ma/villes/roubaix" style="color: #FFFFFF; text-decoration: none">Roubaix</a>
          <a href="https://byteforce.ma/villes/montreal" style="color: #FFFFFF; text-decoration: none">Montréal</a>
          <a href="https://byteforce.ma/developpement-logiciel-france" style="color: #AEB4FF; text-decoration: none">Voir la France</a>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: space-between; gap: 20px 40px; padding-top: 28px; font-size: 13px; line-height: 1.6">
      <p style="margin: 0; max-width: 560px"><a href="https://byteforce.ma/walid-moultamiss" style="color: #FFFFFF">Walid Moultamiss</a>, fondateur de Byte Force à Casablanca. Ingénieur logiciel full-stack, plus de 4 ans d'expérience. Aucun prix public n'est publié sur ce site.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 8px 24px">
        <span>Mis à jour le 9 octobre 2026</span>
        <a href="https://byteforce.ma/mentions-legales" style="color: #D5D8F5">Mentions légales</a>
        <a href="https://byteforce.ma/confidentialite" style="color: #D5D8F5">Confidentialité</a>
        <a href="https://byteforce.ma/conditions" style="color: #D5D8F5">Conditions</a>
        <span>© 2026 Byte Force</span>
      </div>
    </div>
  </div>
</footer>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"accent":{"editor":"color","default":"#1D2BD1","options":["#1D2BD1","#0B6B5A","#B4350F","#0E1030"]},"$preview":{"width":1440,"height":6600}}'>
class Component extends DCLogic {
  componentDidMount() { this._start(); }
  componentWillUnmount() { this._stop(); }
  _stop() { if (this._t) { clearInterval(this._t); this._t = null; } }
  _start() {
    this._stop();
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { this.setState({ playing: false }); return; }
    this._t = setInterval(() => {
      const dv = (this.state && this.state.dev) || 0;
      this.setState({ dev: (dv + 1) % 4 });
    }, 2000);
    this.setState({ playing: true });
  }
  renderVals() {
    const dev = (this.state && this.state.dev) || 0;
    const playing = this.state && this.state.playing !== undefined ? this.state.playing : true;
    const accent = this.props.accent ?? '#1D2BD1';
    const faqOpen = (this.state && this.state.faq !== undefined) ? this.state.faq : 1;
    const mkFaq = (n) => () => this.setState({ faq: faqOpen === n ? 0 : n });
    const gl = (n) => (faqOpen === n ? '−' : '+');
    const cases = [
      { name: 'Ordinateur', title: 'Gestion de stock', font: 'IBM Plex Sans', acc: '#0F8F78', cols: ['#0B3B33', '#0F8F78', '#F2B134'], bg: '#EAF4F1',
        text: "Un tableau de bord pour suivre les articles, les commandes et les réapprovisionnements, sans second fichier.",
        b: ['Stock par entrepôt', 'Commandes fournisseurs', 'Alertes de réapprovisionnement'] },
      { name: 'Mobile', title: 'Tournée de livraison', font: 'Space Grotesk', acc: '#FF7A29', cols: ['#14151C', '#FF7A29', '#22C55E'], bg: '#FFE9DB',
        text: "Une application de terrain : l'itinéraire du jour, la confirmation d'arrêt en un geste, et un fonctionnement même sans réseau.",
        b: ["Itinéraire du jour", 'Confirmation en un geste', 'Mode hors ligne'] },
      { name: 'Tablette', title: 'Caisse de restaurant', font: 'Fraunces', acc: '#C2410C', cols: ['#FFF6E8', '#C2410C', '#7C2D12'], bg: '#FFF1DC',
        text: "La prise de commande à la table, envoyée en cuisine en un geste.",
        b: ['Carte par catégories', 'Ticket par table', 'Envoi en cuisine'] },
      { name: 'Distributeur', title: 'Borne bancaire', font: 'DM Sans', acc: '#E3B341', cols: ['#0A2540', '#E3B341', '#123A63'], bg: '#E3E9F5',
        text: "Une interface de borne sobre : saisie du code, choix de l'opération, confirmation et reçu.",
        b: ['Saisie du code', 'Opérations guidées', 'Reçu'] }
    ];
    const c = cases[dev];
    const devs = cases.map((x, i) => {
      const on = dev === i;
      return {
        text: (i + 1) + ' · ' + x.name, on: on,
        bg: on ? accent : '#FFFFFF', fg: on ? '#FFFFFF' : '#0E1030',
        go: () => { this._stop(); this.setState({ dev: i, playing: false }); }
      };
    });
    return {
      accent: accent, devs: devs,
      d0: dev === 0, d1: dev === 1, d2: dev === 2, d3: dev === 3,
      sceneBg: c.bg, capNow: c.name + ' · ' + c.title,
      ucTag: "Cas d'usage " + (dev + 1) + '/4 · ' + c.name,
      ucTitle: c.title, ucText: c.text, ucFont: c.font, ucAccent: c.acc,
      ucB1: c.b[0], ucB2: c.b[1], ucB3: c.b[2],
      ucC1: c.cols[0], ucC2: c.cols[1], ucC3: c.cols[2],
      toggleLabel: playing ? 'Pause' : 'Lecture',
      toggle: () => { if (this._t) { this._stop(); this.setState({ playing: false }); } else { this._start(); } },
      t1: mkFaq(1), t2: mkFaq(2), t3: mkFaq(3), t4: mkFaq(4), t5: mkFaq(5),
      o1: faqOpen === 1, o2: faqOpen === 2, o3: faqOpen === 3, o4: faqOpen === 4, o5: faqOpen === 5,
      g1: gl(1), g2: gl(2), g3: gl(3), g4: gl(4), g5: gl(5)
    };
  }
}
</script>
</body>
</html>
