import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/category/frontend", label: "Frontend" },
  { href: "/category/internship", label: "Internships" },
  { href: "/category/remote", label: "Remote" },
  { href: "/category/fresher", label: "Freshers" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        {/* Site brand */}
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-gray-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-sm">
            J
          </span>
          <span>
            Job<span className="text-blue-600">Board</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <nav className="flex items-center gap-1 overflow-x-auto md:hidden">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
