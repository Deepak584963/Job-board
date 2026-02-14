import type { Metadata } from "next";
import Link from "next/link";
import { getJobsByCategory, getCategories } from "@/lib/jobs";
import JobCard from "@/components/JobCard";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ type: string }>;
}

/** Category-level metadata for SEO */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type } = await params;
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  return {
    title: `${label} Jobs`,
    description: `Browse the latest ${label.toLowerCase()} job openings. Find your next ${label.toLowerCase()} opportunity on JobBoard.`,
  };
}

/** Pre-render all category pages at build time */
export function generateStaticParams() {
  return getCategories().map((type) => ({ type }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { type } = await params;
  const jobs = getJobsByCategory(type);
  const label = type.charAt(0).toUpperCase() + type.slice(1);

  // Show 404 for categories with no jobs
  if (jobs.length === 0) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-400">
        <Link href="/" className="transition-colors hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{label} Jobs</span>
      </nav>

      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {label} Jobs
        </h1>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
          {jobs.length} {jobs.length === 1 ? "job" : "jobs"}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.slug} job={job} />
        ))}
      </div>
    </>
  );
}
