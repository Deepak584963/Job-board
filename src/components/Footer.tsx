import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

const categoryLinks = [
  { href: "/category/frontend", label: "Frontend Jobs" },
  { href: "/category/internship", label: "Internship Jobs" },
  { href: "/category/remote", label: "Remote Jobs" },
  { href: "/category/fresher", label: "Fresher Jobs" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-extrabold text-gray-900">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-xs font-bold text-white">
                J
              </span>
              Job<span className="text-blue-600">Board</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Curated job listings for developers. Find your next opportunity in frontend, remote, and entry-level roles.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Categories</h3>
            <ul className="mt-3 space-y-2">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Company</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6">
          <p className="text-center text-xs leading-relaxed text-gray-400">
            &copy; {new Date().getFullYear()} JobBoard. All rights reserved. JobBoard is an independent job aggregation platform and is not affiliated with any listed companies. Job information is sourced from publicly available listings. We do not charge fees for applications.
          </p>
        </div>
      </div>
    </footer>
  );
}
