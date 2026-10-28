import { site } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";

export function constructMetadata({
  locale,
  title,
  description,
  path = "",
}: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const currentUrl = `${site.url}/${locale}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: currentUrl,
      languages: {
        en: `${site.url}/en${path}`,
        es: `${site.url}/es${path}`,
        "x-default": `${site.url}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: site.name,
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
