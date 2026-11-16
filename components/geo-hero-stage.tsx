"use client";

import { useEffect, useState } from "react";
import scenes from "./geo-hero-scenes.json";

const CASES = [
  { name: "Ordinateur", title: "Gestion de stock", bg: "#EAF4F1" },
  { name: "Mobile", title: "Tournée de livraison", bg: "#FFE9DB" },
  { name: "Tablette", title: "Caisse de restaurant", bg: "#FFF1DC" },
  { name: "Distributeur", title: "Borne bancaire", bg: "#E3E9F5" },
];

const MOTION = `
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
@keyframes bfKey{0%,50%{background:#4A5B7A}60%,100%{background:#E3B341}}
@keyframes bfPrint{0%,60%{transform:translateY(46px)}100%{transform:translateY(0)}}
@media (prefers-reduced-motion: reduce){*{transition:none!important;animation:none!important}}
`;

export function GeoHeroStage() {
  const [dev, setDev] = useState(0);

  useEffect(() => {
    const id = "bf-scene-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&family=Fraunces:wght@600;700&family=IBM+Plex+Sans:wght@400;500;600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&family=Space+Grotesk:wght@500;700&display=swap";
      document.head.appendChild(link);
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setDev((value) => (value + 1) % CASES.length), 2000);
    return () => window.clearInterval(timer);
  }, []);

  const current = CASES[dev];

  return (
    <div style={{ flex: "1 1 420px", minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 14, width: "100%" }}>
      <div
        id="bf-hero"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 520,
          height: 440,
          borderRadius: 28,
          background: current.bg,
          border: "1px solid #D5D9F2",
          boxShadow: "0 24px 60px rgba(29, 43, 209, 0.14)",
          overflow: "hidden",
          transition: "background 0.5s ease",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: scenes.defs }} />
        <div key={dev} dangerouslySetInnerHTML={{ __html: scenes.scenes[dev] }} />
      </div>
      <p style={{ margin: 0, fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A4D6A" }}>
        {current.name} · {current.title} · exemple fictif
      </p>
      <style>{MOTION}</style>
    </div>
  );
}
