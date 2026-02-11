import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about JobBoard — a modern job portal connecting talented professionals with the best companies worldwide.",
};

export default function AboutPage() {
  return (
    <article className="prose mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        About JobBoard
      </h1>

      <p className="mt-4 leading-relaxed text-gray-700">
        JobBoard is a modern job portal built to help professionals find their
        next career opportunity. We curate quality job listings across frontend
        development, remote work, and entry-level positions so you can focus on
        what matters — landing the right role.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-gray-800">Our Mission</h2>
      <p className="mt-2 leading-relaxed text-gray-700">
        We believe that finding a job should be simple, transparent, and
        accessible. Our goal is to connect talented individuals with companies
        that value their skills, regardless of location or experience level.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        Why Choose JobBoard?
      </h2>
      <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
        <li>Curated, high-quality job listings — no spam</li>
        <li>Clean, fast, and easy-to-navigate interface</li>
        <li>Categories tailored for frontend developers, remote workers, and freshers</li>
        <li>Free and open to all job seekers</li>
      </ul>
    </article>
  );
}
