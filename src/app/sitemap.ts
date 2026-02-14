import { MetadataRoute } from "next";
import { getAllJobs, getCategories } from "@/lib/jobs";

/**
 * Dynamic sitemap generated at build time.
 * Helps search engines discover and index all pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://job-board-one-chi.vercel.app/";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = getCategories().map((type) => ({
    url: `${baseUrl}/category/${type}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  // Individual job pages
  const jobPages: MetadataRoute.Sitemap = getAllJobs().map((job) => ({
    url: `${baseUrl}/jobs/${job.slug}`,
    lastModified: new Date(job.postedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...jobPages];
}
