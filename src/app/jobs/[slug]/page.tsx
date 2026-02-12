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

  // Fetch related jobs
  const relatedJobs = getJobsByCategory(job.category)
    .filter((j) => j.slug !== job.slug)
    .slice(0, 3);

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

  return (
    <article className="mx-auto max-w-6xl px-4 py-8">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
        <span className="text-gray-900 font-medium">{job.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* LEFT COLUMN: Main Content */}
        <div className="flex-1">
          {/* Job Header */}
          <header className="mb-8 border-b border-gray-100 pb-8">
            <div className="mb-4">
               <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold capitalize text-blue-700">
                {job.category}
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {job.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="font-semibold text-gray-900 flex items-center gap-2">
                 🏢 {job.company}
              </span>
              <span>&middot;</span>
              <span className="flex items-center gap-2">📍 {job.location}</span>
              <span>&middot;</span>
              <time dateTime={job.postedAt} className="text-gray-500">
                Posted {new Date(job.postedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>
          </header>

          {/* Key Highlights Grid */}
          <div className="mb-8 grid grid-cols-2 gap-4 rounded-xl bg-gray-50 p-6 sm:grid-cols-2 border border-blue-50">
            <div>
              <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Experience</span>
              <span className="mt-1 block text-base font-semibold text-gray-900">{job.experience}</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Salary</span>
              <span className="mt-1 block text-base font-semibold text-gray-900">{job.salary}</span>
            </div>
          </div>

          {/* Ad Slot 1 (Top of Content) */}
          <div className="my-8 flex h-[90px] w-full items-center justify-center bg-gray-100 text-xs text-gray-400 rounded-lg">
            Advertisement
          </div>

          {/* Rich Content Sections */}
          <div className="prose prose-blue max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900">Job Overview</h2>
            <p className="leading-relaxed text-lg">{job.overview}</p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">Key Responsibilities</h3>
            <ul className="mt-4 space-y-2">
              {job.responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start">
                   <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                   <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-xl font-bold text-gray-900">Requirements & Qualifications</h3>
            <ul className="mt-4 space-y-2">
              {job.requirements.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

             {/* Ad Slot 2 (Middle of Content) */}
            <div className="my-10 flex h-[250px] w-full items-center justify-center bg-gray-100 text-xs text-gray-400 rounded-lg">
               Advertisement
            </div>

            <h3 className="mt-8 text-xl font-bold text-gray-900">Benefits & Perks</h3>
            <p className="mb-3">Why you should join {job.company}:</p>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {job.benefits.map((item, idx) => (
                <li key={idx} className="flex items-center rounded-lg bg-blue-50 p-3 text-sm font-medium text-blue-900">
                  ✨ {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-xl font-bold text-gray-900">About {job.company}</h3>
            <p className="leading-relaxed">{job.aboutCompany}</p>
          </div>

          {/* Actions */}
          <div className="mt-10 border-t border-gray-200 pt-8">
             <div className="flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white shadow-lg">
                <h3 className="text-2xl font-bold">Ready to apply?</h3>
                <p className="max-w-md text-blue-100">
                  Don't miss this opportunity to join {job.company} as a {job.title}.
                </p>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-bold text-blue-700 shadow-xl transition-transform hover:scale-105"
                >
                  Apply Now on Official Site
                </a>
             </div>
          </div>

          {/* FAQ Section for SEO */}
          <section className="mt-16 border-t border-gray-200 pt-10">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900">Is this a remote role?</h3>
                <p className="mt-2 text-gray-600">
                  This role is listed as {job.category === 'remote' ? 'Fully Remote' : job.location}. Please check the official application link for specific remote working policies.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">What is the experience required?</h3>
                <p className="mt-2 text-gray-600">
                  {job.company} is looking for candidates with {job.experience}. Freshers with strong portfolios are also encouraged to apply if they meet the skills.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">How do I apply?</h3>
                <p className="mt-2 text-gray-600">
                  Click on the "Apply Now" button above to be redirected to the official career page or job listing where you can submit your application directly.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Sidebar (AdSense & Related) */}
        <aside className="mt-10 lg:mt-0 lg:w-80 lg:shrink-0">
          <div className="sticky top-4 space-y-8">
            
            {/* Sidebar Ad Node */}
            <div className="flex h-[300px] w-full items-center justify-center rounded-xl bg-gray-100 text-xs text-gray-400">
              Sidebar Ad Slot
            </div>

            {/* Related Jobs */}
            {relatedJobs.length > 0 && (
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-gray-900">Similar Jobs</h3>
                <div className="space-y-4">
                  {relatedJobs.map((related) => (
                    <Link 
                      key={related.slug} 
                      href={`/jobs/${related.slug}`}
                      className="group block rounded-lg border border-gray-100 p-3 transition-colors hover:bg-gray-50"
                    >
                      <h4 className="font-medium text-blue-600 group-hover:underline">
                        {related.title}
                      </h4>
                      <p className="mt-1 text-xs text-gray-500">{related.company}</p>
                      <p className="text-xs text-gray-400">{related.location}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Tech Stack Tags */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
               <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">Tech Stack</h3>
               <div className="flex flex-wrap gap-2">
                 {job.skills.map((skill) => (
                   <span key={skill} className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                     {skill}
                   </span>
                 ))}
               </div>
            </div>

          </div>
        </aside>
      </div>
    </article>
  );
}
