import Link from "next/link";
import { Job } from "@/lib/jobs";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  frontend: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" },
  internship: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-100" },
  remote: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" },
  fresher: { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-100" },
};

function isNew(postedAt: string) {
  const posted = new Date(postedAt);
  const now = new Date();
  const diff = now.getTime() - posted.getTime();
  return diff < 3 * 24 * 60 * 60 * 1000; // 3 days
}

export default function JobCard({ job }: { job: Job }) {
  const colors = categoryColors[job.category] ?? { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-100" };
  const fresh = isNew(job.postedAt);

  return (
    <article className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50">
      {/* New badge */}
      {fresh && (
        <span className="absolute -top-2 right-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
          New
        </span>
      )}

      <Link href={`/jobs/${job.slug}`} className="flex flex-1 flex-col">
        {/* Category badge */}
        <span className={`mb-3 inline-flex w-fit items-center rounded-full ${colors.bg} ${colors.border} border px-2.5 py-0.5 text-xs font-semibold capitalize ${colors.text}`}>
          {job.category}
        </span>

        {/* Title */}
        <h2 className="text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-600">
          {job.title}
        </h2>

        {/* Company & Location */}
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500">
          <span className="flex items-center gap-1 font-medium text-gray-700">
            <svg className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
            {job.company}
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
            {job.location.split(",")[0]}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-500">
          {job.description}
        </p>

        {/* Skills preview */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {job.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="rounded-md bg-gray-50 px-2 py-0.5 text-[11px] font-medium text-gray-500">
              {skill}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="rounded-md bg-gray-50 px-2 py-0.5 text-[11px] font-medium text-gray-400">
              +{job.skills.length - 3}
            </span>
          )}
        </div>

        {/* Bottom row */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-500">{job.experience}</span>
            {job.salary !== "Not Disclosed" && (
              <>
                <span className="text-gray-300">|</span>
                <span className="text-xs font-medium text-emerald-600">{job.salary}</span>
              </>
            )}
          </div>
          <time className="text-xs text-gray-400" dateTime={job.postedAt}>
            {new Date(job.postedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </time>
        </div>
      </Link>
    </article>
  );
}
