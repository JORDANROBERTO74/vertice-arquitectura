import { ImageResponse } from "next/og";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = isLocale(locale) ? (locale as Locale) : "en";
  const dict = getDictionary(currentLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0c0d0d",
          color: "#f5f5f5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "24px",
              height: "24px",
              border: "2px solid #ffffff",
              transform: "rotate(45deg)",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              fontWeight: 400,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            Vértice
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            {dict.hero.titleLine1} {dict.hero.titleLine2}
          </div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 300,
              color: "#a3a3a3",
              maxWidth: "750px",
            }}
          >
            {dict.meta.ogTagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #262626",
            paddingTop: "24px",
            fontSize: "14px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#737373",
          }}
        >
          <span>verticearquitectura.vercel.app</span>
          <span>41.3874° N, 2.1686° E</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
