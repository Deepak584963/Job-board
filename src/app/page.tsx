import { getAllJobs } from "@/lib/jobs";
import JobCard from "@/components/JobCard";
import Link from "next/link";

const categories = [
  { href: "/category/frontend", label: "Frontend", icon: "🖥️", color: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100" },
  { href: "/category/internship", label: "Internships", icon: "🎓", color: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100" },
  { href: "/category/remote", label: "Remote", icon: "🌍", color: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100" },
  { href: "/category/fresher", label: "Freshers", icon: "🚀", color: "bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100" },
];

/** Home page — lists the latest job postings */
export default function HomePage() {
  const jobs = getAllJobs();

  return (
    <>
      {/* Hero section */}
      <section className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-6 py-16 text-center text-white shadow-xl sm:px-12 sm:py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="relative">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Find Your Next
            <br />
            <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
              Dream Job
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Browse curated job listings in frontend development, internships,
            remote positions, and roles perfect for freshers.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="mb-12">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-200 sm:p-5 ${cat.color}`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-sm font-semibold">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Job listings */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Latest Openings
          </h2>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
            {jobs.length} jobs
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </section>
    </>
  );
}
