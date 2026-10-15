"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export interface EarthGlobeProps {
  /** URL of an equirectangular (2:1) Earth texture. */
  textureUrl?: string;
  /** Rotation speed in radians per second (0.096 ≈ one turn per 65s). */
  speed?: number;
  /** Longitude (°E) facing the viewer on load. */
  startLongitude?: number;
  /** Tilt of the north pole toward the viewer, in radians. */
  tiltNorth?: number;
  /** Roll of the rotation axis, in radians. */
  tiltRoll?: number;
  className?: string;
}

const ATMOSPHERE_VERTEX = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`;

const ATMOSPHERE_FRAGMENT = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    float f = 1.0 - max(dot(normalize(vNormal), normalize(vView)), 0.0);
    float a = pow(f, 3.2) * 0.9;
    gl_FragColor = vec4(0.30, 0.52, 1.0, 1.0) * a;
  }
`;

/**
 * A rotating 3D Earth rendered with three.js.
 * It fills its parent box (set width/height/border-radius via `className`).
 * Decorative only: it is hidden from assistive tech.
 */
export function EarthGlobe({
  textureUrl = "/textures/earth-blue-marble.jpg",
  speed = 0.096,
  startLongitude = 45,
  tiltNorth = 0.38,
  tiltRoll = 0.12,
  className,
}: EarthGlobeProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
      });
    } catch {
      return; // WebGL unavailable: the CSS fallback sphere stays visible
    }

    let disposed = false;
    let frameId = 0;
    let visible = true;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
    camera.position.set(0, 0, 3.9);

    const tilt = new THREE.Group();
    tilt.rotation.x = tiltNorth;
    tilt.rotation.z = tiltRoll;
    scene.add(tilt);

    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shininess: 8,
      specular: new THREE.Color(0x223355),
    });
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1, 96, 96),
      earthMaterial,
    );
    // three.js puts longitude 0 on +x; bring `startLongitude` to the camera.
    earth.rotation.y = -Math.PI / 2 - (startLongitude * Math.PI) / 180;
    tilt.add(earth);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 96, 96),
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexShader: ATMOSPHERE_VERTEX,
        fragmentShader: ATMOSPHERE_FRAGMENT,
      }),
    );
    scene.add(atmosphere);

    // Intensities are for three >= r155 (physically based light units).
    scene.add(new THREE.AmbientLight(0xffffff, 1.9));
    const sun = new THREE.DirectionalLight(0xffffff, 2.6);
    sun.position.set(3.5, 1.5, 4);
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0x6f8cff, 0.7);
    fill.position.set(-4, -1, 2);
    scene.add(fill);

    const render = () => renderer.render(scene, camera);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = host;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      render();
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = motionQuery.matches;
    const onMotionChange = (e: MediaQueryListEvent) => {
      reduceMotion = e.matches;
    };
    motionQuery.addEventListener("change", onMotionChange);

    const intersection = new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? true;
    });
    intersection.observe(host);

    const texture = new THREE.TextureLoader().load(
      textureUrl,
      (tex) => {
        if (disposed) return;
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        earthMaterial.map = tex;
        earthMaterial.needsUpdate = true;
        setReady(true);
        render();
      },
      undefined,
      () => {
        /* texture failed to load: keep the fallback sphere */
      },
    );

    let last = performance.now();
    const tick = (now: number) => {
      frameId = requestAnimationFrame(tick);
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (!visible || document.hidden || reduceMotion) return;
      earth.rotation.y += speed * dt; // west → east, like the real Earth
      render();
    };
    frameId = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersection.disconnect();
      motionQuery.removeEventListener("change", onMotionChange);
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const materials = Array.isArray(obj.material)
            ? obj.material
            : [obj.material];
          materials.forEach((m) => m.dispose());
        }
      });
      texture.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [textureUrl, speed, startLongitude, tiltNorth, tiltRoll]);

  return (
    <div
      ref={hostRef}
      className={className}
      data-ready={ready}
      aria-hidden="true"
    />
  );
}

export default EarthGlobe;
