import { ImageResponse } from "next/og";

export const alt = "Byte Force, Casablanca";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f2f1ec",
          color: "#0c0c0b",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28 }}>CASABLANCA</div>
        <div style={{ fontSize: 76, lineHeight: 1.05, maxWidth: 900 }}>
          Des sites et des logiciels qui ramènent des clients.
        </div>
        <div style={{ fontSize: 32 }}>Byte Force</div>
      </div>
    ),
    size,
  );
}
