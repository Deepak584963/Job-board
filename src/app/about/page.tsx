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
        JobBoard is a dedicated career platform designed to bridge the gap between talented professionals and forward-thinking companies. 
        Founded with a vision to simplify the job search process, we focus on curating high-quality opportunities in the tech sector, 
        specifically targeting Frontend Development, Full Stack Engineering, and remote-friendly roles. 
        Whether you are a fresh graduate looking for your first break or an experienced developer seeking a new challenge, 
        JobBoard provides a streamlined, spam-free environment to help you advance your career.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-gray-800">Our Mission</h2>
      <p className="mt-2 leading-relaxed text-gray-700">
        Our mission is to empower job seekers by providing them with accurate, detailed, and up-to-date job listings. 
        We believe that transparency is key to a successful recruitment process. That's why every listing on our platform 
        is vetted to ensure it meets our quality standards, providing you with all the essential details—from salary expectations 
        to skill requirements—right upfront. We strive to create an ecosystem where talent meets opportunity seamlessly.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        Why Choose JobBoard?
      </h2>
      <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
        <li><strong>Curated Listings:</strong> We hand-pick jobs to ensure relevance and quality.</li>
        <li><strong>Detailed Insights:</strong> clear view of responsibilities, benefits, and company culture.</li>
        <li><strong>User-Centric Design:</strong> A clean, fast, and mobile-responsive interface without intrusive ads.</li>
        <li><strong>Specialized Focus:</strong> Tailored categories for developers and remote workers.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold text-gray-800">Contact Us</h2>
      <p className="mt-2 leading-relaxed text-gray-700">
        We value your feedback. If you have questions or suggestions, please visit our <a href="/contact" className="text-blue-600 hover:underline">Contact page</a>.
      </p>
    </article>
  );
}
