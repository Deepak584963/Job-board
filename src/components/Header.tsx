import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/category/frontend", label: "Frontend Jobs" },
  { href: "/category/internship", label: "Internship Jobs" },
  { href: "/category/remote", label: "Remote Jobs" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Site brand */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          JobBoard
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu — kept simple; expand with client component if needed */}
        <nav className="flex gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-gray-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
