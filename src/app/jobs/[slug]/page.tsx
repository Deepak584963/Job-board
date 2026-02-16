import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getJobBySlug, getAllJobs, getJobsByCategory } from "@/lib/jobs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Generate unique metadata for each job — critical for SEO */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return { title: "Job Not Found" };

  return {
    title: `${job.title} at ${job.company} | Apply Now`,
    description: job.overview.slice(0, 160),
    openGraph: {
      title: `${job.title} at ${job.company}`,
      description: job.overview.slice(0, 160),
      type: "article",
    },
  };
}

/** Pre-render all known job slugs at build time for fast loading */
export function generateStaticParams() {
  return getAllJobs().map((job) => ({ slug: job.slug }));
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  // Fetch related jobs — show more
  const relatedJobs = getJobsByCategory(job.category)
    .filter((j) => j.slug !== job.slug)
    .slice(0, 4);

  // JSON-LD Structured Data for Google Jobs
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    description: `
      <p>${job.overview}</p>
      <h3>Responsibilities:</h3>
      <ul>${job.responsibilities.map((r) => `<li>${r}</li>`).join("")}</ul>
      <h3>Requirements:</h3>
      <ul>${job.requirements.map((r) => `<li>${r}</li>`).join("")}</ul>
    `,
    identifier: {
      "@type": "PropertyValue",
      name: job.company,
      value: job.slug,
    },
    datePosted: job.postedAt,
    validThrough: new Date(new Date(job.postedAt).setMonth(new Date(job.postedAt).getMonth() + 3)).toISOString(),
    employmentType: job.category === "internship" ? "INTERN" : "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
      sameAs: "https://example.com",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unknown",
        addressLocality: job.location.split(",")[0].trim(),
        addressRegion: "IN",
        addressCountry: "IN",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        value: 0,
        unitText: "YEAR",
      },
    },
  };

  // Breadcrumb JSON-LD
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://job-board-one-chi.vercel.app/" },
      { "@type": "ListItem", position: 2, name: `${job.category.charAt(0).toUpperCase() + job.category.slice(1)} Jobs`, item: `https://job-board-one-chi.vercel.app/category/${job.category}` },
      { "@type": "ListItem", position: 3, name: job.title },
    ],
  };

  // Check if job is recent (within 3 days)
  const isRecent = (new Date().getTime() - new Date(job.postedAt).getTime()) < 3 * 24 * 60 * 60 * 1000;

  return (
    <article className="mx-auto max-w-6xl px-4 py-8">
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-400">
        <Link href="/" className="transition-colors hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/category/${job.category}`}
          className="capitalize transition-colors hover:text-blue-600"
        >
          {job.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{job.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* LEFT COLUMN: Main Content */}
        <div className="flex-1 min-w-0">
          {/* Job Header */}
          <header className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                {job.category}
              </span>
              {isRecent && (
                <span className="inline-block rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  New
                </span>
              )}
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
              {job.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5 font-semibold text-gray-800">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                {job.company}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                {job.location}
              </span>
              <time dateTime={job.postedAt} className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                {new Date(job.postedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </time>
            </div>

            {/* Key Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl bg-gray-50 p-3 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Experience</span>
                <span className="mt-1 block text-sm font-bold text-gray-800">{job.experience}</span>
              </div>
              <div className="rounded-xl bg-gray-50 p-3 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Salary</span>
                <span className="mt-1 block text-sm font-bold text-gray-800">{job.salary}</span>
              </div>
              <div className="rounded-xl bg-gray-50 p-3 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Type</span>
                <span className="mt-1 block text-sm font-bold capitalize text-gray-800">{job.category === "internship" ? "Internship" : "Full-Time"}</span>
              </div>
              <div className="rounded-xl bg-gray-50 p-3 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Location</span>
                <span className="mt-1 block text-sm font-bold text-gray-800">{job.location.split(",")[0]}</span>
              </div>
            </div>
          </header>

          {/* Rich Content Sections */}
          <div className="space-y-8">
            {/* Overview */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                </span>
                Job Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">{job.overview}</p>
            </section>

            {/* Responsibilities */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
                Key Responsibilities
              </h2>
              <ul className="mt-4 space-y-3">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>
                </span>
                Requirements & Qualifications
              </h2>
              <ul className="mt-4 space-y-3">
                {job.requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Benefits */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
                </span>
                Benefits & Perks
              </h2>
              <p className="mt-3 text-sm text-gray-500">Why you should join {job.company}:</p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {job.benefits.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-3.5 text-sm font-medium text-amber-900">
                    <svg className="h-4 w-4 flex-shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* About Company */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
                </span>
                About {job.company}
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">{job.aboutCompany}</p>
            </section>
          </div>

          {/* Apply CTA */}
          <div className="mt-10">
            <div className="flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-center text-white shadow-lg sm:p-10">
              <h3 className="text-2xl font-extrabold">Ready to apply?</h3>
              <p className="max-w-md text-blue-100">
                Don&apos;t miss this opportunity to join {job.company} as a {job.title}.
              </p>
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-indigo-700 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                Apply Now
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
              </a>
            </div>
          </div>

          {/* FAQ Section for SEO */}
          <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="divide-y divide-gray-100">
              <div className="py-4">
                <h3 className="font-semibold text-gray-900">Is this a remote role?</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  This role is listed as {job.category === "remote" ? "Fully Remote" : job.location}. Please check the official application link for specific remote working policies.
                </p>
              </div>
              <div className="py-4">
                <h3 className="font-semibold text-gray-900">What is the experience required?</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {job.company} is looking for candidates with {job.experience}. Freshers with strong portfolios are also encouraged to apply if they meet the skills.
                </p>
              </div>
              <div className="py-4">
                <h3 className="font-semibold text-gray-900">How do I apply?</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Click on the &quot;Apply Now&quot; button above to be redirected to the official career page where you can submit your application directly.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Sidebar */}
        <aside className="mt-10 lg:mt-0 lg:w-80 lg:shrink-0">
          <div className="sticky top-20 space-y-6">

            {/* Quick Apply Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Quick Apply</h3>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Company</span>
                  <span className="font-semibold text-gray-800">{job.company}</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience</span>
                  <span className="font-semibold text-gray-800">{job.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span>Salary</span>
                  <span className="font-semibold text-gray-800">{job.salary}</span>
                </div>
              </div>
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-700"
              >
                Apply Now
              </a>
            </div>

            {/* Tech Stack Tags */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Required Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Jobs */}
            {relatedJobs.length > 0 && (
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Similar Jobs</h3>
                <div className="mt-3 space-y-3">
                  {relatedJobs.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/jobs/${related.slug}`}
                      className="group block rounded-xl border border-gray-100 p-3 transition-all hover:border-blue-200 hover:bg-blue-50/50"
                    >
                      <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                        {related.title}
                      </h4>
                      <p className="mt-1 text-xs text-gray-500">{related.company} &middot; {related.location.split(",")[0]}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Share This Job */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Share This Job</h3>
              <div className="mt-3 flex gap-2">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${job.title} at ${job.company} - https://job-board-one-chi.vercel.app/jobs/${job.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg bg-green-50 py-2.5 text-center text-xs font-semibold text-green-700 transition-colors hover:bg-green-100"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://job-board-one-chi.vercel.app/jobs/${job.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg bg-blue-50 py-2.5 text-center text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-100"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${job.title} at ${job.company}`)}&url=${encodeURIComponent(`https://job-board-one-chi.vercel.app/jobs/${job.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg bg-sky-50 py-2.5 text-center text-xs font-semibold text-sky-700 transition-colors hover:bg-sky-100"
                >
                  Twitter
                </a>
              </div>
            </div>

            {/* Browse all jobs link */}
            <Link
              href="/"
              className="block rounded-2xl border border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 p-5 text-center text-sm font-semibold text-gray-700 transition-colors hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700"
            >
              ← Browse All Jobs
            </Link>

          </div>
        </aside>
      </div>
    </article>
  );
}
