/** Job data type — ready to map to a MongoDB schema later */
export interface Job {
  title: string;
  company: string;
  location: string;
  category: string;
  slug: string;
  description: string;
  // Deep Content Fields for SEO (600+ words total support)
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  aboutCompany: string;
  salary: string;
  experience: string;
  skills: string[];
  applyLink: string;
  postedAt: string;
}

/** Temporary in-memory job data. Replace with MongoDB queries later. */
export const jobs: Job[] = [
  {
    title: "PG Tech Intern – Frontend",
    company: "One97 Communications Limited (Paytm)",
    location: "Noida, India",
    category: "internship",
    slug: "pg-tech-intern-frontend-paytm",
    description:
      "One97 Communications Limited (Paytm) is hiring PG Tech Interns – Frontend for its Noida office. Freshers and candidates with up to 1 year of experience can apply.",
    overview:
      "One97 Communications Limited, popularly known as Paytm, is inviting applications for the position of PG Tech Intern – Frontend for its Noida campus. This internship is a premier opportunity for fresh graduates and post-graduates to dive deep into the world of fintech and large-scale web application development. As a Frontend Intern, you will be an integral part of the engineering team, working on products that touch millions of lives daily. This role is designed to bridge the gap between academic learning and professional software engineering, providing hands-on experience with cutting-edge technologies like React.js, Redux, and modern CSS frameworks. You will participate in the complete software development lifecycle, from concept to deployment, ensuring that the user interface is intuitive, responsive, and performant.",
    responsibilities: [
      "Collaborate with product managers and designers to understand requirements and translate wireframes into high-quality, responsive code.",
      "Develop user-facing features using React.js and ensure the technical feasibility of UI/UX designs.",
      "Optimize applications for maximum speed and scalability across a variety of web-capable devices and browsers.",
      "Write reusable code and libraries for future use, maintaining high standards of code quality and documentation.",
      "Debug and troubleshoot issues across different browsers and devices to ensure a seamless user experience.",
      "Participate in code reviews and gain feedback from senior engineers to improve your coding standards.",
      "Stay up-to-date with emerging frontend technologies and best practices to advocate for their adoption where appropriate."
    ],
    requirements: [
      "Strong understanding of JavaScript, including DOM manipulation and the JavaScript object model.",
      "Thorough understanding of React.js and its core principles (Components, State, Props, Hooks).",
      "Familiarity with newer specifications of EcmaScript (ES6+).",
      "Experience with data structure libraries (e.g., Immutable.js) is a plus.",
      "Knowledge of isomorphic React is a plus.",
      "Familiarity with RESTful APIs and modern authorization mechanisms, such as JSON Web Token.",
      "Modern authorization mechanisms, such as JSON Web Token.",
      "Experience with common front-end development tools such as Babel, Webpack, NPM, etc.",
      "Ability to understand business requirements and translate them into technical requirements."
    ],
    benefits: [
      "Competitive stipend and potential for full-time conversion based on performance.",
      "Mentorship from industry leaders and experienced engineers in the Fintech space.",
      "Opportunity to work on products used by millions of users across India.",
      "Flexible working hours and a collaborative, inclusive work culture.",
      "Access to internal learning resources, workshops, and tech talks.",
      "Health and wellness benefits tailored for interns."
    ],
    aboutCompany:
      "Paytm is India's leading financial services company that offers full-stack payments & financial solutions to consumers, offline merchants, and online platforms. The company is on a mission to bring half a billion Indians into the mainstream economy through payments, commerce, banking, investments, and financial services. With a culture of innovation and detailed execution, Paytm provides an environment where you can grow, learn, and make a significant impact.",
    salary: "Not Disclosed",
    experience: "0 - 1 Years",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Redux", "Webpack"],
    applyLink:
      "https://www.naukri.com/job-listings-pg-tech-intern-frontend-one97-communications-limited-noida-0-to-1-years-110226915500",
    postedAt: "2025-02-11",
  },
  {
    title: "React Software Engineer (0–1 Years)",
    company: "Easy Refer",
    location: "Chennai, India",
    category: "frontend",
    slug: "react-software-engineer-easy-refer",
    description:
      "Easy Refer is hiring React Software Engineers with 0–1 years of experience. This role is ideal for fresh graduates or early-career developers.",
    overview:
      "Easy Refer is searching for a talented and enthusiastic React Software Engineer to join our growing development team in Chennai. This entry-level position is perfect for individuals with 0 to 1 year of experience who are passionate about building dynamic, user-centric web applications. In this role, you will be responsible for developing client-side logic, creating reusable components, and integrating frontend interfaces with backend APIs. We value creativity, problem-solving skills, and a willingness to learn. You will be working in an agile environment where your contributions will directly impact the product roadmap and user satisfaction. If you are looking for a place to launch your career in frontend engineering with strong mentorship, Easy Refer is the place for you.",
    responsibilities: [
      "Design and implement user interface components using React.js concepts and workflows (Redux or Context API).",
      "Collaborate with cross-functional teams including designers and backend developers to deliver high-quality web applications.",
      "Troubleshoot, debug, and upgrade existing software to ensure robust performance.",
      "Write clean, maintainable, and well-documented code adhering to industry best practices.",
      "Conduct performance tests and optimize frontend components for maximum speed.",
      "Participate in daily stand-ups and sprint planning meetings to align on project goals.",
      "Continuously research new tools and technologies to improve the development process."
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Information Technology, or a related field.",
      "Solid understanding of core JavaScript concepts, HTML5, and CSS3.",
      "Basic hands-on experience with React.js (projects, internships, or work experience).",
      "Familiarity with Git version control and code collaboration tools like GitHub or GitLab.",
      "Understanding of REST APIs and how to consume them in frontend applications.",
      "Strong problem-solving skills and attention to detail.",
      "Good communication skills and the ability to work effectively in a team environment."
    ],
    benefits: [
      "Competitive entry-level salary significantly above market standards.",
      "Health insurance coverage for employees and their immediate families.",
      "Annual learning allowance to enroll in courses and certifications.",
      "Regular team-building activities and outings.",
      "A supportive environment that encourages experimentation and innovation.",
      "Paid time off and flexible leave policies."
    ],
    aboutCompany:
      "Easy Refer is a dynamic HR-tech startup focused on simplifying the recruitment process through intelligent referral solutions. We leverage technology to connect great talent with great companies, making hiring faster, cheaper, and more effective. Our team consists of passionate individuals dedicated to disrupting the traditional recruitment industry.",
    salary: "₹ 3,00,000 - 6,00,000 P.A.",
    experience: "0 - 1 Years",
    skills: ["React.js", "JavaScript", "REST APIs", "Git", "Material UI"],
    applyLink:
      "https://www.naukri.com/job-listings-react-software-engineer-easy-refer-chennai-0-to-1-years-090226503427",
    postedAt: "2025-02-09",
  },
  {
    title: "Software Engineer – ASP (Freshers)",
    company: "OL Media",
    location: "Nagpur, India",
    category: "fresher",
    slug: "software-engineer-asp-ol-media",
    description:
      "OL Media is hiring Software Engineer – ASP for fresh graduates. Candidates will work on web application development, assist senior engineers, and gain hands-on experience.",
    overview:
      "OL Media is excited to announce openings for the role of Software Engineer specializing in ASP.NET for our Nagpur office. This opportunity is tailored for fresh graduates (0–1 years) who have a strong foundation in .NET technologies and are eager to start their career in enterprise software development. As a Software Engineer, you will be involved in the full software development life cycle, from requirement analysis to testing and deployment. You will work alongside experienced architects and developers to build scalable, secure, and high-performance web applications. This role offers a unique blend of learning and execution, allowing you to master backend technologies like C#, SQL Server, and ASP.NET MVC while also gaining exposure to frontend integration.",
    responsibilities: [
      "Assist in the design, development, and maintenance of ASP.NET web applications.",
      "Write clean, scalable, and efficient code using .NET programming languages (C#).",
      "Collaborate with the frontend team to integrate user-facing elements with server-side logic.",
      "Test and debug applications to ensure they meet quality standards.",
      "Participate in requirement analysis and solution design discussions.",
      "Design and optimize database schemas and queries in SQL Server.",
      "Provide technical support for existing applications and resolve reported issues."
    ],
    requirements: [
      "Degree in Computer Science, Engineering, or relevant field.",
      "Strong knowledge of the .NET framework, ASP.NET, and C#.",
      "Familiarity with SQL Server and writing T-SQL queries.",
      "Understanding of HTML, CSS, and basic JavaScript/jQuery.",
      "Knowledge of Object-Oriented Programming (OOP) concepts.",
      "Ability to learn new technologies quickly and adapt to changing requirements.",
      "Strong analytical and problem-solving capabilities."
    ],
    benefits: [
      "Comprehensive training program for freshers.",
      "Opportunity to work on international client projects.",
      "Performance-based bonuses and increments.",
      "Collaborative and open workspace.",
      "Regular recreational activities and events."
    ],
    aboutCompany:
      "OL Media is a established media and technology services firm providing software solutions to global clients. We specialize in building robust content management systems, e-commerce platforms, and custom enterprise applications. Our commitment to quality and innovation has made us a trusted partner for businesses worldwide.",
    salary: "Not Disclosed",
    experience: "0 Years (Fresher)",
    skills: ["ASP.NET", "C#", "SQL Server", "HTML/CSS", "MVC Framework"],
    applyLink:
      "https://www.naukri.com/job-listings-software-engineer-asp-ol-media-nagpur-0-to-0-years-100226018868",
    postedAt: "2025-02-10",
  },
  {
    title: "React Developer (0–2 Years)",
    company: "Dextero",
    location: "Thane / Navi Mumbai, India",
    category: "frontend",
    slug: "react-developer-dextero",
    description:
      "Dextero is looking for a React Developer with 0–2 years of experience. The role involves building responsive user interfaces, integrating APIs, and working closely with backend teams.",
    overview:
      "Dextero is seeking a highly skilled and motivated React Developer to join our engineering team in Thane/Navi Mumbai. With 0–2 years of experience, you will play a pivotal role in developing modern, reactive user interfaces that delight our customers. We are looking for someone who understands the intricacies of the React ecosystem, including state management, component lifecycle, and performance optimization. You will work in a fast-paced environment where code quality and speed of delivery are equally important. This position offers the chance to work on challenging projects, use the latest tech stack (Next.js, Tailwind, TypeScript), and grow your career as a full-fledged frontend engineer.",
    responsibilities: [
      "Develop and maintain high-quality web applications using React.js and TypeScript.",
      "Convert UI/UX designs into pixel-perfect, responsive frontend code.",
      "Implement state management solutions using Redux, Context API, or similar libraries.",
      "Integrate RESTful and GraphQL APIs efficiently.",
      "Ensure cross-browser compatibility and mobile responsiveness.",
      "Write unit and integration tests to ensure code reliability.",
      "Participate in code reviews to maintain code quality and share knowledge."
    ],
    requirements: [
      "Proven experience as a React Developer or similar role (0-2 years).",
      "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.",
      "Experience with TypeScript is highly preferred.",
      "Familiarity with modern CSS frameworks like Tailwind CSS or Material UI.",
      "Knowledge of frontend build pipelines and tools (Webpack, Vite, etc.).",
      "Experience with testing libraries (Jest, React Testing Library) is a plus.",
      "Excellent time-management and organizational skills."
    ],
    benefits: [
      "Competitive salary package with regular appraisals.",
      "Hybrid work model (Work from home options available).",
      "Health and wellness programs.",
      "Sponsorship for technical conferences and workshops.",
      "Friendly and inclusive work environment.",
      "Stock options for high-performing early employees."
    ],
    aboutCompany:
      "Dextero is a digital transformation agency that helps businesses navigate the modern digital landscape. We build custom software solutions, mobile apps, and enterprise platforms that drive growth and efficiency. Our team is a mix of creative thinkers and technical experts dedicated to excellence.",
    salary: "Competitive",
    experience: "0 - 2 Years",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "Context API", "Jest"],
    applyLink:
      "https://www.naukri.com/job-listings-react-developer-dextero-thane-navi-mumbai-0-to-2-years-110226000392",
    postedAt: "2025-02-11",
  },
  {
    title: "Front End Developer Internship",
    company: "Sojaru Corp",
    location: "Remote (India)",
    category: "internship",
    slug: "front-end-developer-internship-sojaru-corp",
    description:
      "Sojaru Corp is offering a Front End Developer Internship for students and freshers. Interns will work on responsive UI components and learn modern frontend frameworks.",
    overview:
      "Sojaru Corp is thrilled to open applications for our Remote Front End Developer Internship program. This 3-6 month internship is designed for students and fresh graduates who are eager to apply their academic knowledge in a real-world setting. As an intern, you will work directly with our lead developers to build and maintain the client-side of our web applications. You will face real challenges, learn how to collaborate in a distributed team, and gain proficiency in the standard tools of the trade. This is a fully remote position, allowing you to work from the comfort of your home while staying connected with a vibrant team.",
    responsibilities: [
      "Update and maintain existing website content and layout.",
      "Assist in the development of new user-facing features.",
      "Ensure the technical feasibility of UI/UX designs.",
      "Build reusable code and libraries for future use.",
      "Participate in team meetings and contribute ideas for improvement.",
      "Learn and apply best practices in HTML5, CSS3, and JavaScript.",
      "Fix bugs and improve application performance."
    ],
    requirements: [
      "Current enrollment in a relevant degree program or a recent graduate.",
      "Basic understanding of web markup, including HTML5 and CSS3.",
      "Basic understanding of client-side scripting and JavaScript frameworks.",
      "Good understanding of asynchronous request handling and partial page updates.",
      "Self-motivated with the ability to work independently in a remote setting.",
      "Eagerness to learn and adapt to new technologies.",
      "Access to a reliable computer and internet connection."
    ],
    benefits: [
      "Monthly stipend and internet allowance.",
      "Certificate of Internship upon successful completion.",
      "Letter of Recommendation for outstanding performers.",
      "Flexible working hours to accommodate academic schedules.",
      "Pre-placement offer (PPO) opportunities for top candidates.",
      "Hands-on mentorship and code reviews."
    ],
    aboutCompany:
      "Sojaru Corp is an innovative tech startup focusing on building sustainable and scalable web solutions for small to medium-sized businesses. We pride ourselves on our agile methodology and our ability to deliver value quickly. We are a remote-first company with a diverse team spread across India.",
    salary: "Stipend: ₹ 5,000 - 10,000 / month",
    experience: "Student / Fresher",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
    applyLink:
      "https://unstop.com/internships/front-end-developer-internship-sojaru-corp-1640156",
    postedAt: "2025-02-12",
  },
  {
    title: "Frontend Developer Intern (React.js)",
    company: "Idea Usher",
    location: "Remote (India)",
    category: "internship",
    slug: "frontend-developer-intern-idea-usher",
    description:
      "Idea Usher is hiring Frontend Developer Interns who are passionate about React.js. Interns will build UI components, collaborate with designers, and learn modern practices.",
    overview:
      "Idea Usher is looking for creative and technically minded Frontend Developer Interns to spot and solve problems using React.js. This remote internship is an excellent launchpad for your career, offering you the chance to work on high-impact projects from day one. You will be responsible for translating creative software design concepts and ideas into reality using frontend technology. You should be comfortable working in a fast-paced environment and willing to take ownership of your tasks. We are looking for individuals who are obsessed with pixel-perfection and have a keen eye for detail.",
    responsibilities: [
      "Developing new user-facing features using React.js.",
      "Building reusable components and frontend libraries for future use.",
      "Translating designs and wireframes into high-quality code.",
      "Optimizing components for maximum performance across a vast array of web-capable devices and browsers.",
      "Collaborating with the design team to ensure specific design guidelines are met.",
      "Participating in code reviews to maintain high-quality code standards."
    ],
    requirements: [
      "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.",
      "Thorough understanding of React.js and its core principles.",
      "Experience with popular React.js workflows (such as Flux or Redux).",
      "Familiarity with newer specifications of EcmaScript.",
      "Knowledge of modern authorization mechanisms, such as JSON Web Token.",
      "Familiarity with modern front-end build pipelines and tools.",
      "Ability to work independently and manage time effectively."
    ],
    benefits: [
      "Paid internship with performance incentives.",
      "Exposure to live projects for international clients.",
      "Certificate of Experience.",
      "Weekly workshops and tech grooming sessions.",
      "Potential for a full-time job offer post-internship.",
      "Work from anywhere culture."
    ],
    aboutCompany:
      "Idea Usher is a leading web and mobile app development company that provides end-to-end IT solutions. We work with startups and enterprises to build products that scale. Our expertise spans across blockchain, AI, IoT, and cloud computing.",
    salary: "Stipend Available",
    experience: "Internship",
    skills: ["React.js", "Next.js", "Figma", "Redux", "SCSS"],
    applyLink: "https://www.linkedin.com/jobs/view/4369388680",
    postedAt: "2025-02-12",
  },
  {
    title: "Frontend Developer (React / Next.js)",
    company: "GoodSpace AI",
    location: "Remote (India)",
    category: "remote",
    slug: "frontend-developer-goodspace-ai",
    description:
      "GoodSpace AI is hiring Frontend Developers with 0–3 years of experience. You will build scalable and high-performance user interfaces using React.js and Next.js.",
    overview:
      "GoodSpace AI is revolutionizing the recruitment industry, and we are looking for a Frontend Developer to join our remote team. In this role, you will be responsible for building the client-side of our AI-powered hiring platform. We use Next.js and React to deliver lightning-fast experiences to our users. You will work closely with AI engineers and backend developers to visualize data, create intuitive workflows, and build a seamless user journey. If you are passionate about web performance, SEO, and modern JavaScript, we want to hear from you. This is a rare opportunity to work at the intersection of AI and Frontend Engineering.",
    responsibilities: [
      "Architecture and development of the frontend using Next.js and React.",
      "Implementing server-side rendering (SSR) and static site generation (SSG) for optimal SEO and performance.",
      "Integrating GraphQL APIs to fetch and manage data efficiently.",
      "Building responsive and accessible UI components using Tailwind CSS.",
      "Monitoring and improving frontend performance using Core Web Vitals metrics.",
      "Collaborating with product and design teams to iterate on features quickly.",
      "Writing automated tests to ensure reliability."
    ],
    requirements: [
      "0-3 years of experience in frontend development.",
      "Strong expertise in React.js, Next.js, and TypeScript.",
      "Proficiency in CSS frameworks like Tailwind CSS or Styled Components.",
      "Experience with GraphQL (Apollo Client) is a strong plus.",
      "Understanding of web performance, SEO, and accessibility best practices.",
      "Experience with Git and CI/CD workflows.",
      "Strong communication skills and the ability to work in a remote-first culture."
    ],
    benefits: [
      "Above-market salary and equity options.",
      "Fully remote work with flexible hours.",
      "Unlimited leave policy.",
      "Home office setup allowance.",
      "Annual retreat to exotic locations.",
      "Premium health insurance."
    ],
    aboutCompany:
      "GoodSpace AI is a Silicon Valley-backed startup building the future of work. Our platform uses advanced AI to match candidates with companies based on skills, culture, and values, eliminating bias and improving retention. We are a team of dreamers and doers who believe in the power of technology to do good.",
    salary: "₹ 5,00,000 - 12,00,000 P.A.",
    experience: "0 - 3 Years",
    skills: ["Next.js", "React.js", "Tailwind CSS", "GraphQL", "Web Performance"],
    applyLink: "https://www.linkedin.com/jobs/view/4369388680",
    postedAt: "2025-02-12",
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
