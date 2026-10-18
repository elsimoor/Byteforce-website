import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Byte Force, développement logiciel sur mesure à Casablanca";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [logo, shot] = await Promise.all([
    readFile(join(process.cwd(), "public/logo.png")),
    readFile(join(process.cwd(), "public/work/dealkhir.jpg")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f4f6ff",
          color: "#070b33",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 700,
            height: "100%",
            padding: "56px 52px",
          }}
        >
          <div style={{ display: "flex", fontSize: 18, letterSpacing: 3, color: "#000dbf", fontWeight: 700 }}>
            CASABLANCA
          </div>
          <div style={{ display: "flex", fontSize: 52, lineHeight: 1.05, fontWeight: 700, letterSpacing: -1 }}>
            Développement logiciel sur mesure, à Casablanca.
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`data:image/png;base64,${logo.toString("base64")}`} width={56} height={56} alt="" />
            <div style={{ display: "flex", marginLeft: 16, fontSize: 28, fontWeight: 700 }}>Byte Force</div>
          </div>
        </div>
        <div style={{ display: "flex", width: 500, height: 630, overflow: "hidden" }}>
          <img
            src={`data:image/jpeg;base64,${shot.toString("base64")}`}
            width={500}
            height={630}
            alt=""
            style={{ objectFit: "cover", objectPosition: "center bottom" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
