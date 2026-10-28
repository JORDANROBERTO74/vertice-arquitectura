import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    routes.push({
      url: `${site.url}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: locale === "en" ? 1.0 : 0.9,
      alternates: {
        languages: {
          en: `${site.url}/en`,
          es: `${site.url}/es`,
          "x-default": `${site.url}/en`,
        },
      },
    });
  }

  return routes;
}
