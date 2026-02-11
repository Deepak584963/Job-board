/** Job data type — ready to map to a MongoDB schema later */
export interface Job {
  title: string;
  company: string;
  location: string;
  category: string;
  slug: string;
  description: string;
  applyLink: string;
  postedAt: string;
}

/** Temporary in-memory job data. Replace with MongoDB queries later. */
export const jobs: Job[] = [
  {
    title: "Frontend Developer",
    company: "ABC Tech",
    location: "Remote",
    category: "frontend",
    slug: "frontend-developer-abc-tech",
    description:
      "We are looking for a skilled Frontend Developer with strong React and TypeScript experience. You will build responsive, performant UIs for our SaaS platform. Requirements include 2+ years with React, proficiency in CSS/Tailwind, and familiarity with REST APIs.",
    applyLink: "https://abctech.example.com/apply",
    postedAt: "2025-01-15",
  },
  {
    title: "React Engineer",
    company: "StartupX",
    location: "New York, NY",
    category: "frontend",
    slug: "react-engineer-startupx",
    description:
      "Join StartupX as a React Engineer to lead the development of our next-generation dashboard. You will collaborate with designers and backend engineers to deliver pixel-perfect interfaces. Experience with Next.js and state management libraries is a plus.",
    applyLink: "https://startupx.example.com/careers",
    postedAt: "2025-01-10",
  },
  {
    title: "Remote Backend Developer",
    company: "CloudBase",
    location: "Remote",
    category: "remote",
    slug: "remote-backend-developer-cloudbase",
    description:
      "CloudBase is hiring a Remote Backend Developer to design and maintain scalable APIs using Node.js and PostgreSQL. You will work asynchronously with a distributed team. Strong problem-solving skills and experience with cloud services (AWS/GCP) are required.",
    applyLink: "https://cloudbase.example.com/jobs",
    postedAt: "2025-01-08",
  },
  {
    title: "Full Stack Developer (Remote)",
    company: "DevHub",
    location: "Remote",
    category: "remote",
    slug: "full-stack-developer-remote-devhub",
    description:
      "DevHub is looking for a Full Stack Developer comfortable working across the entire stack. You will ship features end-to-end using Next.js, Node.js, and MongoDB. This is a fully remote position with flexible hours.",
    applyLink: "https://devhub.example.com/apply",
    postedAt: "2025-01-05",
  },
  {
    title: "Junior Web Developer",
    company: "BrightPath",
    location: "Bangalore, India",
    category: "fresher",
    slug: "junior-web-developer-brightpath",
    description:
      "Great opportunity for freshers! BrightPath is hiring Junior Web Developers who are eager to learn. You should have basic knowledge of HTML, CSS, JavaScript, and React. We provide mentorship and a structured learning path.",
    applyLink: "https://brightpath.example.com/freshers",
    postedAt: "2025-01-12",
  },
  {
    title: "Graduate Software Trainee",
    company: "InnoSoft",
    location: "Hyderabad, India",
    category: "fresher",
    slug: "graduate-software-trainee-innosoft",
    description:
      "InnoSoft invites recent graduates to apply for our Software Trainee program. You will rotate through frontend, backend, and DevOps teams over 6 months. No prior professional experience required — just a passion for coding.",
    applyLink: "https://innosoft.example.com/trainee",
    postedAt: "2025-01-03",
  },
  {
    title: "UI/UX Designer",
    company: "DesignCo",
    location: "San Francisco, CA",
    category: "frontend",
    slug: "ui-ux-designer-designco",
    description:
      "DesignCo is seeking a UI/UX Designer to craft intuitive user experiences for our mobile and web products. You should be proficient in Figma, have a strong portfolio, and understand frontend implementation constraints.",
    applyLink: "https://designco.example.com/careers",
    postedAt: "2025-01-14",
  },
  {
    title: "Remote DevOps Engineer",
    company: "InfraScale",
    location: "Remote",
    category: "remote",
    slug: "remote-devops-engineer-infrascale",
    description:
      "InfraScale needs a DevOps Engineer to manage CI/CD pipelines, containerized deployments, and cloud infrastructure. Experience with Docker, Kubernetes, and Terraform is essential. Fully remote with competitive pay.",
    applyLink: "https://infrascale.example.com/apply",
    postedAt: "2025-01-11",
  },
];

/* ── Helper functions (swap these for DB queries when adding MongoDB) ── */

export function getAllJobs(): Job[] {
  return jobs;
}

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function getJobsByCategory(category: string): Job[] {
  return jobs.filter((job) => job.category === category);
}

/** All unique categories used for static generation */
export function getCategories(): string[] {
  return Array.from(new Set(jobs.map((job) => job.category)));
}
