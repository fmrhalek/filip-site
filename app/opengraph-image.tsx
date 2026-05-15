import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Filip Mrhálek — Platform engineer for hire";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B0D0F",
          color: "#E6E2D8",
          padding: "72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* top: identity strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(230, 226, 216, 0.5)",
          }}
        >
          <span>Filip Mrhálek — Independent contractor</span>
          <span style={{ color: "#7FE3CB" }}>Open for engagements</span>
        </div>

        {/* middle: name + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#7FE3CB",
              marginBottom: 24,
              letterSpacing: "-0.01em",
            }}
          >
            $ whoami
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 168,
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-0.05em",
              color: "#E6E2D8",
            }}
          >
            <span>Filip Mrhálek</span>
            <span style={{ color: "#7FE3CB" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 44,
              fontWeight: 700,
              marginTop: 28,
              letterSpacing: "-0.02em",
              color: "rgba(230, 226, 216, 0.85)",
            }}
          >
            <span>Platform engineer&nbsp;</span>
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "rgba(230,226,216,0.55)",
              }}
            >
              for hire
            </span>
            <span style={{ color: "#7FE3CB" }}>.</span>
          </div>
        </div>

        {/* bottom: meta strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(230, 226, 216, 0.5)",
          }}
        >
          <span>Azure · Terraform · GitLab CI</span>
          <span>Prague — 50.0755°N</span>
        </div>
      </div>
    ),
    size,
  );
}
