import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for using JobBoard services.",
};

export default function TermsPage() {
  return (
    <article className="prose mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Terms and Conditions
      </h1>
      <p className="mt-4 text-sm text-gray-500">
        Last updated: February 14, 2026
      </p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          1. Introduction
        </h2>
        <p className="mt-2 leading-relaxed text-gray-700">
          Welcome to JobBoard. By accessing this website, you agree to comply with
          and be bound by the following terms and conditions of use. If you dispute
          any part of these terms, please do not use our website.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          2. Intellectual Property
        </h2>
        <p className="mt-2 leading-relaxed text-gray-700">
          The content, organization, graphics, design, and other matters related
          to the Site are protected under applicable copyrights and other
          proprietary laws. The copying, redistribution, use, or publication by
          you of any such matters or any part of the Site is strictly prohibited.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          3. Disclaimer of Liability
        </h2>
        <p className="mt-2 leading-relaxed text-gray-700">
          JobBoard serves as an information aggregator for job listings. We are not
          responsible for the accuracy, completeness, or reliability of any job
          posting. We do not guarantee employment or screen employers. Users are
          advised to verify all details directly with the hiring company before
          applying.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          4. External Links
        </h2>
        <p className="mt-2 leading-relaxed text-gray-700">
          Our website may contain links to external third-party websites. These
          links are provided for your convenience only. We have no control over
          the content of these sites and accept no responsibility for them.
        </p>
      </section>
    </article>
  );
}
