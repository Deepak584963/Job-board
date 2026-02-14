import Link from "next/link";
import { Job } from "@/lib/jobs";

const categoryColors: Record<string, { bg: string; text: string }> = {
  frontend: { bg: "bg-blue-50", text: "text-blue-700" },
  internship: { bg: "bg-amber-50", text: "text-amber-700" },
  remote: { bg: "bg-emerald-50", text: "text-emerald-700" },
  fresher: { bg: "bg-violet-50", text: "text-violet-700" },
};

export default function JobCard({ job }: { job: Job }) {
  const colors = categoryColors[job.category] ?? { bg: "bg-gray-50", text: "text-gray-700" };

  return (
    <article className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50">
      <Link href={`/jobs/${job.slug}`} className="flex flex-1 flex-col">
        {/* Category badge */}
        <span className={`mb-3 inline-flex w-fit items-center rounded-full ${colors.bg} px-2.5 py-0.5 text-xs font-semibold capitalize ${colors.text}`}>
          {job.category}
        </span>

        {/* Title */}
        <h2 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {job.title}
        </h2>

        {/* Company & Location */}
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <span className="font-medium text-gray-700">{job.company}</span>
          <span className="text-gray-300">|</span>
          <span>{job.location}</span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-500">
          {job.description}
        </p>

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
