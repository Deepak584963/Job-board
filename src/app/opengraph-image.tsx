import { ImageResponse } from "next/og";

// Image metadata
export const alt = "JobBoard — Find Your Next Opportunity";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
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
        {/* Pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              'url(\'data:image/svg+xml;utf8,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="1" fill="rgba(255,255,255,0.1)"/></svg>\')',
            opacity: 0.5,
          }}
        />

        {/* Logo */}
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
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              fontWeight: 900,
              background: "linear-gradient(135deg, #2563eb, #4f46e5)",
              color: "white",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
          >
            J
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          JobBoard
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "32px",
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Find Your Next Opportunity
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "20px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Browse curated job listings in frontend, remote, and fresher categories
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
