import { ImageResponse } from "next/og";
import { profile, siteMeta } from "@/content/profile";

/*
 * Social share card. Next serves this for both og:image and twitter:image,
 * which matters because twitter:card is "summary_large_image" — without an
 * image that card renders as an empty grey box.
 *
 * Palette is the site's own ochre on warm paper, kept deliberately plain:
 * the name is the only focal point.
 */
export const alt = siteMeta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#faf8f4";
const INK = "#1c1813";
const MUTED = "#665f51";
const ACCENT = "#a8530a";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "84px 96px",
          // A soft ochre bloom in the corner so the card reads as lit, not flat.
          backgroundImage: `radial-gradient(900px 520px at 100% 0%, rgba(168,83,10,0.13), rgba(168,83,10,0))`,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: ACCENT,
              fontWeight: 600,
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontSize: 104,
              lineHeight: 1.05,
              color: INK,
              fontWeight: 700,
              marginTop: 26,
              letterSpacing: -2,
            }}
          >
            {profile.name}
          </div>
          <div style={{ display: "flex", marginTop: 34 }}>
            <div style={{ width: 96, height: 6, background: ACCENT, borderRadius: 3 }} />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 40, color: INK, fontWeight: 500 }}>{profile.role}</div>
          <div style={{ fontSize: 29, color: MUTED, marginTop: 16 }}>
            {profile.location}
          </div>
          <div style={{ fontSize: 26, color: ACCENT, marginTop: 30, fontWeight: 600 }}>
            suh-blane.vercel.app
          </div>
        </div>
      </div>
    ),
    size,
  );
}
