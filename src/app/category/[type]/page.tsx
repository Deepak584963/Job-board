import type { Metadata } from "next";
import Link from "next/link";
import { getJobsByCategory, getCategories } from "@/lib/jobs";
import JobCard from "@/components/JobCard";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ type: string }>;
}

const categoryMeta: Record<string, { icon: string; description: string; gradient: string }> = {
  frontend: {
    icon: "🖥️",
    description: "Explore frontend developer roles including React, Angular, Vue.js, and more. Perfect for UI/UX-focused engineers.",
    gradient: "from-blue-600 to-indigo-600",
  },
  internship: {
    icon: "🎓",
    description: "Kickstart your career with hands-on internships at leading companies. Ideal for students and fresh graduates.",
    gradient: "from-amber-500 to-orange-500",
  },
  remote: {
    icon: "🌍",
    description: "Work from anywhere with flexible remote positions. Find companies that embrace distributed teams.",
    gradient: "from-emerald-500 to-teal-600",
  },
  fresher: {
    icon: "🚀",
    description: "Entry-level positions designed for freshers. No extensive experience required — just passion and willingness to learn.",
    gradient: "from-violet-500 to-purple-600",
  },
};

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
  const meta = categoryMeta[type];

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

      {/* Category Hero Banner */}
      {meta && (
        <div className={`mb-8 overflow-hidden rounded-2xl bg-gradient-to-r ${meta.gradient} p-6 text-white shadow-lg sm:p-8`}>
          <div className="flex items-center gap-4">
            <span className="text-4xl">{meta.icon}</span>
            <div>
              <h1 className="text-2xl font-extrabold sm:text-3xl">{label} Jobs</h1>
              <p className="mt-1 max-w-lg text-sm leading-relaxed text-white/80">{meta.description}</p>
            </div>
          </div>
          <div className="mt-4 inline-flex rounded-full bg-white/20 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
            {jobs.length} {jobs.length === 1 ? "job" : "jobs"} available
          </div>
        </div>
      )}

      {!meta && (
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            {label} Jobs
          </h1>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
            {jobs.length} {jobs.length === 1 ? "job" : "jobs"}
          </span>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.slug} job={job} />
        ))}
      </div>

      {/* Back to all jobs */}
      <div className="mt-10 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
        >
          ← Browse All Jobs
        </Link>
      </div>
    </>
  );
}
