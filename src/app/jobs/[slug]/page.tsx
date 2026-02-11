import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getJobBySlug, getAllJobs } from "@/lib/jobs";

interface PageProps {
  params: { slug: string };
}

/** Generate unique metadata for each job — critical for SEO */
export function generateMetadata({ params }: PageProps): Metadata {
  const job = getJobBySlug(params.slug);
  if (!job) return { title: "Job Not Found" };

  return {
    title: `${job.title} at ${job.company}`,
    description: job.description.slice(0, 160),
    openGraph: {
      title: `${job.title} at ${job.company}`,
      description: job.description.slice(0, 160),
      type: "article",
    },
  };
}

/** Pre-render all known job slugs at build time for fast loading */
export function generateStaticParams() {
  return getAllJobs().map((job) => ({ slug: job.slug }));
}

export default function JobDetailPage({ params }: PageProps) {
  const job = getJobBySlug(params.slug);
  if (!job) notFound();

  return (
    <article className="mx-auto max-w-3xl">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/category/${job.category}`}
          className="capitalize hover:text-blue-600"
        >
          {job.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{job.title}</span>
      </nav>

      {/* Job header */}
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        {job.title}
      </h1>

      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600">
        <span>{job.company}</span>
        <span>&middot;</span>
        <span>{job.location}</span>
        <span>&middot;</span>
        <time dateTime={job.postedAt}>
          Posted{" "}
          {new Date(job.postedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>

      <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium capitalize text-blue-700">
        {job.category}
      </span>

      {/* Job description */}
      <section className="prose mt-6 max-w-none text-gray-700">
        <h2 className="text-lg font-semibold text-gray-800">
          Job Description
        </h2>
        <p className="mt-2 leading-relaxed">{job.description}</p>
      </section>

      {/* Apply button */}
      <div className="mt-8">
        <a
          href={job.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Apply for this Job
        </a>
      </div>

      {/* Back link */}
      <div className="mt-6">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          &larr; Back to all jobs
        </Link>
      </div>
    </article>
  );
}
