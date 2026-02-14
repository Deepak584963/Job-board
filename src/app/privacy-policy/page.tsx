import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the JobBoard privacy policy to understand how we handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="prose mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Privacy Policy
      </h1>

      <p className="mt-4 text-sm text-gray-500">
        Last updated: February 14, 2026
      </p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          1. Information We Collect
        </h2>
        <p className="mt-2 leading-relaxed text-gray-700">
          JobBoard does not require user registration. We may collect basic
          analytics data such as page views, browser type, and referring URLs to
          improve our service. No personally identifiable information is
          collected unless you contact us directly.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          2. Use of Cookies
        </h2>
        <p className="mt-2 leading-relaxed text-gray-700">
          We may use cookies and similar technologies for analytics and
          advertising purposes. Third-party services such as Google AdSense may
          use cookies to serve ads based on your browsing behavior.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          3. Third-Party Links
        </h2>
        <p className="mt-2 leading-relaxed text-gray-700">
          Job listings on this site may contain links to external websites. We
          are not responsible for the privacy practices or content of those
          third-party sites. We encourage you to review the privacy policy of
          any site you visit.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          4. Data Security
        </h2>
        <p className="mt-2 leading-relaxed text-gray-700">
          We take reasonable measures to protect any information collected
          through this website. However, no method of transmission over the
          internet is 100% secure.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          5. Changes to This Policy
        </h2>
        <p className="mt-2 leading-relaxed text-gray-700">
          We may update this privacy policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">6. Contact</h2>
        <p className="mt-2 leading-relaxed text-gray-700">
          If you have any questions about this privacy policy, please contact us
          at{" "}
          <a
            href="mailto:hello@jobboard.example.com"
            className="text-blue-600 hover:underline"
          >
            hello@jobboard.example.com
          </a>
          .
        </p>
      </section>
    </article>
  );
}
