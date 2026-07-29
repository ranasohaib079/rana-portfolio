import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0b1120",
          padding: "80px",
          color: "#f8fafc",
        }}
      >
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 38, color: "#93c5fd" }}>
          {profile.headline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 28,
            color: "#94a3b8",
            maxWidth: 900,
          }}
        >
          {profile.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 24,
            color: "#64748b",
          }}
        >
          {profile.links.github.replace("https://", "")}
        </div>
      </div>
    ),
    size
  );
}
