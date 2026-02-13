import { MetadataRoute } from "next";

/** Tells crawlers which pages to index */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://job-board-one-chi.vercel.app/sitemap.xml",
  };
}
