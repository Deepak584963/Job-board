import Link from "next/link";

/** Custom 404 page — keeps users on site with a helpful redirect */
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="relative">
        <h1 className="text-8xl font-extrabold text-gray-100 sm:text-9xl">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl">🔍</span>
        </div>
      </div>
      <h2 className="mt-6 text-xl font-bold text-gray-800 sm:text-2xl">
        Page Not Found
      </h2>
      <p className="mx-auto mt-3 max-w-md text-gray-500">
        The page you are looking for does not exist, has been moved, or the job listing may have expired.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
        >
          Browse All Jobs
        </Link>
        <Link
          href="/category/frontend"
          className="rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
        >
          Frontend Jobs
        </Link>
        <Link
          href="/category/internship"
          className="rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700"
        >
          Internships
        </Link>
      </div>
    </div>
  );
}
