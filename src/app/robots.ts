import { MetadataRoute } from "next";

/** Tells crawlers which pages to index */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jobboard.example.com/sitemap.xml",
  };
}
