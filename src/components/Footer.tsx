import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} JobBoard. All rights reserved.
          </p>

          <nav className="flex gap-4">
            <Link
              href="/about"
              className="text-sm text-gray-500 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:text-blue-600"
            >
              Contact
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-500 hover:text-blue-600"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-blue-600"
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-4 text-center">
            <p className="text-xs text-gray-400 max-w-2xl mx-auto">
              Disclaimer: JobBoard is an independent job aggregation platform and is not affiliated with any of the companies listed on this site. All logos and trademarks belong to their respective owners. Job information is collected from publicly available sources. We do not charge any fees for job applications. Users are advised to verify job details on the official employer website before applying.
            </p>
        </div>
      </div>
    </footer>
  );
}
