import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the JobBoard team. We are happy to hear from job seekers and employers alike.",
};

export default function ContactPage() {
  return (
    <article className="prose mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Contact Us
      </h1>

      <p className="mt-4 leading-relaxed text-gray-700">
        Have a question, suggestion, or want to list a job on JobBoard? We would
        love to hear from you.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        Get in Touch
      </h2>
      <ul className="mt-2 space-y-2 text-gray-700">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:hello@jobboard.example.com"
            className="text-blue-600 hover:underline"
          >
            hello@jobboard.example.com
          </a>
        </li>
        <li>
          <strong>Response time:</strong> We typically respond within 24 hours.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        For Employers
      </h2>
      <p className="mt-2 leading-relaxed text-gray-700">
        Interested in posting a job? Reach out via email and we will get your
        listing published as soon as possible.
      </p>
    </article>
  );
}
