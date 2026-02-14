import { ImageResponse } from "next/og";

// Image metadata
export const alt = "JobBoard — Find Your Next Opportunity";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

// Image generation - reuse Open Graph design
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              'url(\'data:image/svg+xml;utf8,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="1" fill="rgba(255,255,255,0.1)"/></svg>\')',
            opacity: 0.5,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "42px",
              fontWeight: 900,
              background: "linear-gradient(135deg, #2563eb, #4f46e5)",
              color: "white",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
          >
            J
          </div>
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "12px",
            letterSpacing: "-0.02em",
          }}
        >
          JobBoard
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          Find Your Next Opportunity
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
