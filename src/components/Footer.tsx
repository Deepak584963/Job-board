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
          </nav>
        </div>
      </div>
    </footer>
  );
}
