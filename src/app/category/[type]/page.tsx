import type { Metadata } from "next";
import Link from "next/link";
import { getJobsByCategory, getCategories } from "@/lib/jobs";
import JobCard from "@/components/JobCard";
import { notFound } from "next/navigation";

interface PageProps {
  params: { type: string };
}

/** Category-level metadata for SEO */
export function generateMetadata({ params }: PageProps): Metadata {
  const label = params.type.charAt(0).toUpperCase() + params.type.slice(1);
  return {
    title: `${label} Jobs`,
    description: `Browse the latest ${label.toLowerCase()} job openings. Find your next ${label.toLowerCase()} opportunity on JobBoard.`,
  };
}

/** Pre-render all category pages at build time */
export function generateStaticParams() {
  return getCategories().map((type) => ({ type }));
}

export default function CategoryPage({ params }: PageProps) {
  const jobs = getJobsByCategory(params.type);
  const label = params.type.charAt(0).toUpperCase() + params.type.slice(1);

  // Show 404 for categories with no jobs
  if (jobs.length === 0) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{label} Jobs</span>
      </nav>

      <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
        {label} Jobs
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.slug} job={job} />
        ))}
      </div>
    </>
  );
}
