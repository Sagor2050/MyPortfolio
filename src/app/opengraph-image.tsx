import { ImageResponse } from "next/og";
import { profile } from "@/content/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0d0f10",
          color: "#f7f3ea",
          fontFamily: "Arial, Helvetica, sans-serif"
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#5eead4", letterSpacing: 2 }}>
          {profile.displayName.toUpperCase()}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 56, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
          {profile.headline}
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "#a9a198" }}>{profile.location}</div>
      </div>
    ),
    { ...size }
  );
}
