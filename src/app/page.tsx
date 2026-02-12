import { getAllJobs } from "@/lib/jobs";
import JobCard from "@/components/JobCard";
import Link from "next/link";

/** Home page — lists the latest job postings */
export default function HomePage() {
  const jobs = getAllJobs();

  return (
    <>
      {/* Hero section */}
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Find Your Next Job Opportunity
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Browse curated job listings in frontend development, internships, remote positions,
          and roles perfect for freshers.
        </p>

        {/* Quick category links */}
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link
            href="/category/frontend"
            className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-200"
          >
            Frontend Jobs
          </Link>
          <Link
            href="/category/internship"
            className="rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700 hover:bg-orange-200"
          >
            Internship Jobs
          </Link>
          <Link
            href="/category/remote"
            className="rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700 hover:bg-green-200"
          >
            Remote Jobs
          </Link>
          <Link
            href="/category/fresher"
            className="rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700 hover:bg-purple-200"
          >
            Fresher Jobs
          </Link>
        </div>
      </section>

      {/* Job listings */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Latest Job Postings
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </section>
    </>
  );
}
