import Link from "next/link";
import { Job } from "@/lib/jobs";

export default function JobCard({ job }: { job: Job }) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
      <Link href={`/jobs/${job.slug}`} className="block">
        <h2 className="text-lg font-semibold text-gray-900">{job.title}</h2>

        <p className="mt-1 text-sm text-gray-600">
          {job.company} &middot; {job.location}
        </p>

        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {job.description}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium text-blue-700">
            {job.category}
          </span>

          <time className="text-xs text-gray-400" dateTime={job.postedAt}>
            {new Date(job.postedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </div>
      </Link>
    </article>
  );
}
