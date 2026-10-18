"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const rows = [
  {
    href: "/insights/react-pour-l-interface",
    label: "Interface du produit",
    icon: "M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16",
  },
  {
    href: "/insights/postgresql-pour-les-enregistrements",
    label: "Application et données",
    icon: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  },
  {
    href: "/insights/vercel-pour-publier",
    label: "Livraison",
    icon: "M7 18a4.5 4.5 0 01-.5-8.97A6 6 0 0118 10.5 3.75 3.75 0 0117.5 18H7z",
  },
  {
    href: "/insights/ovhcloud-pour-l-hebergement",
    label: "Où ça tourne",
    icon: "M12 3l8 3v6c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V6l8-3zM8.5 12l2.5 2.5 4.5-5",
  },
  {
    href: "/insights/posthog-pour-les-evenements",
    label: "Mesure et courrier",
    icon: "M3.5 18a9 9 0 1117 0M12 18l4-6M6.5 12.5h.01M9 8.5h.01M15 8.5h.01M17.5 12.5h.01",
  },
] as const;

export function TechCard() {
  return (
    <div className="relative min-h-[640px] overflow-hidden rounded-[30px] border border-[#e4e9f4] bg-[linear-gradient(180deg,#fdfdff_0%,#fafbff_100%)] pb-[280px] lg:h-[650px] lg:min-h-0 lg:pb-0">
      <div className="relative z-[2] px-7 pt-10 sm:px-12 lg:absolute lg:left-[54px] lg:top-[46px] lg:w-[min(700px,calc(100%-108px))] lg:px-0 lg:pt-0">
        <p className="flex items-center gap-4 text-base font-semibold uppercase tracking-[0.06em] text-[#2f6bf0]">
          Technologie
          <span className="h-0.5 w-[38px] rounded-full bg-[#2f6bf0]" aria-hidden="true" />
        </p>
        <h2 className="mt-[18px] font-headline text-[2rem] font-semibold leading-[1.15] tracking-[-0.015em] text-[#0f1535] lg:text-[42px]">
          La technologie <span className="bg-[linear-gradient(90deg,#2f6bf0,#4338ee)] bg-clip-text text-transparent">derrière le produit.</span>
        </h2>
        <p className="mt-[18px] max-w-[700px] text-lg leading-[1.42] text-[#6b7fa8] lg:text-[21px]">
          On choisit l&apos;outil selon le produit : tenue en charge, performance, sécurité et maintenance d&apos;abord.
        </p>
        <ul className="mt-[38px] w-full max-w-[560px]">
          {rows.map((row) => (
            <li key={row.href} className="mb-[18px] last:mb-0">
              <Link href={row.href} className="group flex items-center gap-7 text-[19px] font-medium text-[#0f1535]">
                <span className="grid h-[57px] w-[57px] shrink-0 place-items-center rounded-[17px] bg-[#eef1fc] text-[#4338ee]">
                  <svg viewBox="0 0 24 24" className="h-[26px] w-[26px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={row.icon} />
                  </svg>
                </span>
                <span className="flex-1">{row.label}</span>
                <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12h16M14 6l6 6-6 6" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pointer-events-none absolute -bottom-[220px] -right-[90px] h-[520px] w-[520px] lg:bottom-auto lg:right-[-298px] lg:top-3 lg:h-[1070px] lg:w-[1070px]" aria-hidden="true">
        <SpinningGlobe />
      </div>
    </div>
  );
}

function SpinningGlobe() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const canvas = document.createElement("canvas");
    canvas.className = "absolute inset-0 h-full w-full";
    el.appendChild(canvas);
    const gl = canvas.getContext("webgl", { antialias: true, alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    const vert = `
      attribute vec3 aPos;
      attribute vec2 aUv;
      uniform float uSpin;
      uniform float uAspect;
      varying vec2 vUv;
      varying vec3 vN;
      void main() {
        float c = cos(uSpin);
        float s = sin(uSpin);
        vec3 p = vec3(c * aPos.x + s * aPos.z, aPos.y, -s * aPos.x + c * aPos.z);
        float cx = cos(0.38);
        float sx = sin(0.38);
        p = vec3(p.x, cx * p.y - sx * p.z, sx * p.y + cx * p.z);
        float cz = cos(0.12);
        float sz = sin(0.12);
        p = vec3(cz * p.x - sz * p.y, sz * p.x + cz * p.y, p.z);
        vN = p;
        vUv = aUv;
        vec3 view = p + vec3(0.0, 0.0, -3.9);
        float f = 3.732;
        gl_Position = vec4(view.x * f / (-view.z * uAspect), view.y * f / -view.z, 0.0, 1.0);
      }
    `;
    const frag = `
      precision mediump float;
      uniform sampler2D uMap;
      varying vec2 vUv;
      varying vec3 vN;
      void main() {
        vec3 n = normalize(vN);
        float light = 0.42 + 0.7 * max(dot(n, normalize(vec3(0.55, 0.28, 0.78))), 0.0);
        vec3 tex = texture2D(uMap, vUv).rgb;
        float fres = pow(1.0 - max(dot(n, normalize(vec3(0.0, 0.12, 1.0))), 0.0), 5.0);
        vec3 col = tex * light + vec3(0.45, 0.66, 1.0) * fres * 0.28;
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compile(type: number, source: string) {
      const shader = gl!.createShader(type)!;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      return shader;
    }
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vert));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, frag));
    gl.linkProgram(program);
    gl.useProgram(program);

    const segments = 64;
    const positions: number[] = [];
    const uvs: number[] = [];
    const indices: number[] = [];
    for (let y = 0; y <= segments; y += 1) {
      const v = y / segments;
      const theta = v * Math.PI;
      for (let x = 0; x <= segments; x += 1) {
        const u = x / segments;
        const phi = u * Math.PI * 2;
        positions.push(Math.sin(theta) * Math.cos(phi), Math.cos(theta), Math.sin(theta) * Math.sin(phi));
        uvs.push(u, 1 - v);
      }
    }
    const stride = segments + 1;
    for (let y = 0; y < segments; y += 1) {
      for (let x = 0; x < segments; x += 1) {
        const i = y * stride + x;
        indices.push(i, i + 1, i + stride, i + 1, i + stride + 1, i + stride);
      }
    }

    function buffer(target: number, data: ArrayBufferView) {
      const buf = gl!.createBuffer()!;
      gl!.bindBuffer(target, buf);
      gl!.bufferData(target, data, gl!.STATIC_DRAW);
    }
    buffer(gl.ARRAY_BUFFER, new Float32Array(positions));
    const posLoc = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);
    buffer(gl.ARRAY_BUFFER, new Float32Array(uvs));
    const uvLoc = gl.getAttribLocation(program, "aUv");
    gl.enableVertexAttribArray(uvLoc);
    gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0);
    buffer(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices));

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([22, 70, 150, 255]));
    const map = new Image();
    map.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, map);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    };
    map.src = "/tech/earth.jpg";
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const spinLoc = gl.getUniformLocation(program, "uSpin");
    const aspectLoc = gl.getUniformLocation(program, "uAspect");
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.clearColor(0, 0, 0, 0);

    const resize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (!w || !h) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(aspectLoc, canvas.width / canvas.height);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(el);

    let visible = true;
    const seen = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    seen.observe(el);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let spin = -Math.PI / 2 - (45 * Math.PI) / 180;
    let last = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      if (!visible) {
        last = now;
        return;
      }
      const dt = Math.min((now - last) / 16.667, 3);
      last = now;
      if (!reduce) spin += 0.0016 * dt;
      gl.uniform1f(spinLoc, spin);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      seen.disconnect();
      canvas.remove();
    };
  }, []);

  return <div ref={host} className="relative h-full w-full overflow-hidden rounded-full bg-[radial-gradient(circle_at_40%_40%,#1b3a8a,#0a1a4a_70%)]" />;
}
