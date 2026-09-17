import type { MetadataRoute } from "next";
import { getAllContentPaths } from "@/lib/content";
import { CONTENT_TYPES } from "@/config/navigation";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://averagedayinamerica.top";

  // Static paths that always exist
  const contentTypePaths = CONTENT_TYPES.map((ct) => `/${ct}`);
  const legalPaths = ["/privacy-policy", "/terms-of-service", "/copyright", "/about"];
  const staticPaths = ["/", ...contentTypePaths, ...legalPaths];

  // Dynamic paths: scan actual MDX content files
  const contentPaths = await getAllContentPaths("en");
  const dynamicPaths = contentPaths.map((item) => `/${[item.contentType, ...item.slug].join("/")}`);

  const paths = [...staticPaths, ...dynamicPaths];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => {
      let priority = 0.6;
      if (path === "/") {
        priority = 1.0;
      } else if (contentTypePaths.includes(path)) {
        priority = 0.8;
      } else if (legalPaths.includes(path)) {
        priority = 0.3;
      }

      return {
        url: `${siteUrl}/${locale}${path === "/" ? "" : path}`,
        lastModified: new Date(),
        changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
        priority,
      };
    }),
  );
}
