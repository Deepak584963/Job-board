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
  title: "UI / Front End Developer",
  company: "Resource One IT Solutions",
  location: "Hyderabad, India",
  category: "frontend",
  slug: "ui-front-end-developer-resource-one-it-solutions-hyderabad",
  description:
    "Resource One IT Solutions in Hyderabad is looking for a UI / Front End Developer (freshers). This role is perfect for candidates with basic frontend knowledge and a passion to learn modern web development.",
  overview:
    "Resource One IT Solutions is hiring a UI / Front End Developer to join their Hyderabad team. This entry-level role provides opportunities for freshers to work on real projects, help build interactive interfaces, and gain practical experience in frontend technologies. As a developer, you will collaborate with cross-functional teams, participate in feature development, and learn best practices in frontend engineering. This position is well suited for individuals who are eager to grow their skills in a professional software environment.",
  responsibilities: [
    "Develop responsive web interfaces using HTML, CSS, and JavaScript.",
    "Translate design mockups into clean and functional user interfaces.",
    "Collaborate with team members to implement UI enhancements.",
    "Perform debugging and troubleshooting to ensure cross-browser compatibility.",
    "Participate in team discussions on UI improvements and feature planning.",
    "Follow coding standards and best practices for front end development."
  ],
  requirements: [
    "0–0 years of experience (freshers are welcome to apply).",
    "Basic understanding of HTML5, CSS3, and JavaScript.",
    "Familiarity with frontend libraries or frameworks is an advantage.",
    "Eagerness to learn new technologies and grow in software development.",
    "Good communication and problem-solving skills.",
    "Ability to work in a collaborative team environment."
  ],
  benefits: [
    "Hands-on experience with real development projects.",
    "Opportunity to learn from experienced frontend developers.",
    "Supportive work environment focused on growth and learning.",
    "Practical exposure to industry standards and tooling.",
    "Career development opportunities with performance-based progression."
  ],
  aboutCompany:
    "Resource One IT Solutions is a Hyderabad-based technology company that delivers comprehensive software solutions to businesses. The organization emphasizes innovation, quality, and continual learning while supporting early-career professionals in skill building and career growth.",
  salary: "Not Disclosed",
  experience: "Fresher",
  skills: ["HTML5", "CSS3", "JavaScript", "UI Development", "Responsive Design"],
  applyLink:
    "https://www.naukri.com/job-listings-ui-developer-front-end-developer-resource-one-it-solutions-hyderabad-0-to-0-years-060126019990",
  postedAt: "2025-02-06",
}
,
  {
  title: "Web Developer Intern",
  company: "Avadhuta Technologies",
  location: "Bengaluru, India",
  category: "internship",
  slug: "web-developer-intern-avadhuta-technologies-bengaluru",
  description:
    "Avadhuta Technologies in Bengaluru is offering a Web Developer Internship for candidates with up to 1 year of experience. This internship focuses on real-world frontend and web development tasks.",
  overview:
    "Avadhuta Technologies is seeking a motivated Web Developer Intern to join its Bengaluru team. This internship provides hands-on experience working on genuine web projects, helping to build interactive user interfaces and improve coding skills. Interns will collaborate with other developers, participate in project planning, and gain meaningful insight into real software development environments. This role is ideal for students or early-career developers who want to strengthen their fundamentals and build a solid foundation in modern web technologies.",
  responsibilities: [
    "Assist in the development of responsive and interactive web pages using HTML, CSS, and JavaScript.",
    "Work with the development team to implement frontend features and UI components.",
    "Help with debugging and troubleshooting application issues to ensure smooth functionality.",
    "Participate in team meetings and contribute ideas for improving user experience.",
    "Collaborate with senior developers on integrating frontend logic with backend services."
  ],
  requirements: [
    "0–1 years of experience in web development or related internships.",
    "Basic understanding of HTML5, CSS3, and JavaScript fundamentals.",
    "Familiarity with frontend frameworks or libraries is a plus.",
    "Good problem-solving attitude and willingness to learn.",
    "Ability to work collaboratively in a team setup."
  ],
  benefits: [
    "Hands-on experience working on real web projects.",
    "Opportunity to learn modern development practices.",
    "Mentorship from experienced professionals.",
    "Exposure to practical software workflows and tools.",
    "Growth opportunities based on performance and learning."
  ],
  aboutCompany:
    "Avadhuta Technologies is a Bengaluru-based technology company that focuses on delivering innovative software solutions across industries. The company encourages collaborative learning and offers a supportive environment for skill development and professional growth.",
  salary: "Not Disclosed",
  experience: "0–1 Years",
  skills: ["HTML5", "CSS3", "JavaScript", "Web Development"],
  applyLink:
    "https://www.naukri.com/job-listings-web-developer-intern-avadhuta-technologies-bengaluru-0-to-1-years-300126008507",
  postedAt: "2025-02-13",
}
,
  {
  title: "Front End Developer",
  company: "Microgenesis Cadsoft",
  location: "JP Nagar, Bengaluru, India",
  category: "frontend",
  slug: "front-end-developer-microgenesis-cadsoft-bengaluru",
  description:
    "Microgenesis Cadsoft is urgently hiring Front End Developers for its JP Nagar office in Bengaluru. Candidates with 0–5 years of experience in frontend technologies are encouraged to apply.",
  overview:
    "Microgenesis Cadsoft is seeking Front End Developers to join its tech team in JP Nagar, Bengaluru. This role involves building intuitive user interfaces, collaborating with cross-functional teams, and enhancing the user experience across web applications. As part of a growing team, you will work on real commercial projects and learn modern frontend practices. This position is an excellent opportunity for both freshers and early-career developers to gain hands-on experience while contributing meaningfully to product development.",
  responsibilities: [
    "Develop responsive and interactive web pages using modern frontend technologies like JavaScript and frameworks.",
    "Collaborate with UI/UX designers to translate designs into functional user interfaces.",
    "Ensure cross-browser compatibility and responsiveness for all components.",
    "Work with backend developers to integrate APIs and services.",
    "Participate in code reviews and maintain code quality standards.",
    "Troubleshoot, debug, and optimize frontend performance and functionality."
  ],
  requirements: [
    "0–5 years of experience in frontend development.",
    "Strong understanding of JavaScript fundamentals.",
    "Familiarity with HTML5, CSS3, and modern frontend frameworks.",
    "Experience with state management approaches or libraries is a plus.",
    "Good problem-solving skills and attention to detail.",
    "Ability to work effectively in a team environment."
  ],
  benefits: [
    "Opportunity to work on real product features with a hands-on team.",
    "Collaborative work culture with support for learning and growth.",
    "Exposure to modern frontend tools and industry practices.",
    "Mentorship from experienced professionals.",
    "Potential career advancement based on performance."
  ],
  aboutCompany:
    "Microgenesis Cadsoft is a technology company based in Bengaluru that builds innovative software solutions for a range of business needs. They emphasize teamwork, technical excellence, and continuous learning to deliver reliable products that scale with user expectations.",
  salary: "Not Disclosed",
  experience: "0–5 Years",
  skills: ["JavaScript", "HTML5", "CSS3", "Frontend Development", "Responsive Design"],
  applyLink:
    "https://www.naukri.com/job-listings-urgent-openings-for-front-end-developer-in-jp-nagar-bangalore-location-microgenesis-cadsoft-bengaluru-0-to-5-years-310126015965",
  postedAt: "2025-02-12",
}
,
  {
  title: "React.js Developer Intern",
  company: "Dwaraka Starline",
  location: "Hyderabad, India",
  category: "internship",
  slug: "reactjs-developer-intern-dwaraka-starline-hyderabad",
  description:
    "Dwaraka Starline in Hyderabad is hiring React.js Developer Interns with up to 2 years of experience. This position is ideal for students or fresh graduates aiming to strengthen skills in React and frontend development.",
  overview:
    "Dwaraka Starline is offering a remote/office-based internship for aspiring React.js Developer Interns in Hyderabad. This internship provides hands-on experience building real frontend projects using React.js, modern JavaScript, and associated libraries. Interns will collaborate with experienced engineers, participate in web application development, and contribute to user interface enhancements. This role is well-suited for candidates who want to grow their skills in frontend frameworks and gain practical project exposure early in their careers.",
  responsibilities: [
    "Assist in developing responsive web components using React.js and modern JavaScript.",
    "Work alongside senior developers to implement new UI features.",
    "Convert design mockups into functional, interactive UI elements.",
    "Participate in debugging and testing to ensure application quality.",
    "Review and refactor code to maintain performance and consistency.",
    "Engage in team discussions and sprint planning activities."
  ],
  requirements: [
    "0–2 years of experience or internship projects involving React.js.",
    "Good understanding of JavaScript, HTML5, and CSS3.",
    "Familiarity with React.js concepts like hooks, state, and props.",
    "Ability to work collaboratively in a team and accept feedback.",
    "Willingness to learn and adapt to new frontend technologies.",
    "Basic understanding of REST APIs and client-server interaction."
  ],
  benefits: [
    "Real project experience in frontend development.",
    "Mentorship from experienced developers.",
    "Opportunity to work with modern frontend tools and practices.",
    "Hands-on exposure to real application codebases.",
    "Growth opportunities based on performance and learning."
  ],
  aboutCompany:
    "Dwaraka Starline is a technology services company that focuses on delivering innovative digital solutions. The organization supports collaborative learning and skill development, providing a platform for interns and early-stage developers to grow technically and professionally.",
  salary: "Not Disclosed",
  experience: "0–2 Years",
  skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Frontend Development"],
  applyLink:
    "https://www.naukri.com/job-listings-react-js-developer-interns-dwaraka-starline-hyderabad-0-to-2-years-070226004201",
  postedAt: "2025-02-07",
}
,
  {
  title: "Software Developer",
  company: "NextGenMedia",
  location: "Bengaluru, India",
  category: "frontend",
  slug: "software-developer-nextgenmedia-bengaluru",
  description:
    "NextGenMedia in Bengaluru is hiring a Software Developer (Fresher). This entry-level role suits candidates ready to work on real software products and improve development skills.",
  overview:
    "NextGenMedia is seeking a Fresher Software Developer to join its engineering team in Bengaluru. This role provides an excellent opportunity for individuals just starting their careers in software development. As part of the team, you will build and support web applications, learn industry workflows, and collaborate with experienced professionals. The company values innovation and practical learning, making this an ideal role for fresh graduates seeking hands-on experience with real projects and technologies.",
  responsibilities: [
    "Work with team members to develop and implement software features.",
    "Write clean, efficient, and maintainable code using modern JavaScript practices.",
    "Participate in frontend and backend development activities.",
    "Test and debug software to ensure optimal performance and quality.",
    "Assist in integrating APIs and frontend components.",
    "Collaborate with colleagues during planning, development, and delivery cycles."
  ],
  requirements: [
    "0–0 years of experience (fresh graduates welcome).",
    "Basic understanding of JavaScript and frontend fundamentals.",
    "Familiarity with HTML5 and CSS3.",
    "Eagerness to learn and grow in software development.",
    "Good problem-solving and logical thinking skills.",
    "Ability to work collaboratively in a team environment."
  ],
  benefits: [
    "Hands-on experience working with real software projects.",
    "Exposure to industry-standard development processes.",
    "Supportive team environment focused on learning.",
    "Opportunity to grow technical skills.",
    "Mentorship from experienced developers."
  ],
  aboutCompany:
    "NextGenMedia is a technology company in Bengaluru that focuses on building innovative software solutions. The organization encourages a culture of learning and experimentation where fresh talent can thrive and contribute to meaningful projects.",
  salary: "Not Disclosed",
  experience: "Fresher",
  skills: ["JavaScript", "HTML5", "CSS3", "Frontend Development"],
  applyLink:
    "https://www.naukri.com/job-listings-software-developer-nextgenmedia-bengaluru-0-to-0-years-130226013573",
  postedAt: "2025-02-13",
}
,
  {
  title: "Software Developer",
  company: "Smartronic Technical Solution",
  location: "Chennai, India",
  category: "frontend",
  slug: "software-developer-smartronic-technical-solution-chennai",
  description:
    "Smartronic Technical Solution in Chennai is seeking a Software Developer with 0–1 years of experience. This role focuses on building and supporting software solutions with core development skills.",
  overview:
    "Smartronic Technical Solution is looking for a passionate Software Developer to join their Chennai team. This entry-level position is ideal for early career developers who have foundational experience in JavaScript and web technologies. As a Software Developer, you will work on real applications, contribute to feature development, and gain practical experience in software engineering practices. The role provides a supportive environment where you can grow your technical skills and work alongside experienced professionals.",
  responsibilities: [
    "Collaborate with cross-functional team members to develop software features.",
    "Write clean, maintainable code following industry best practices.",
    "Assist in the development of responsive web pages and user interfaces.",
    "Participate in debugging and troubleshooting to improve application quality.",
    "Work with backend APIs and integrate frontend components.",
    "Contribute to project discussions and learn from senior developers."
  ],
  requirements: [
    "0–1 years of experience in software development or internships.",
    "Basic understanding of JavaScript and web fundamentals.",
    "Familiarity with HTML5, CSS3, or frontend frameworks is a plus.",
    "Strong desire to learn and improve technical skills.",
    "Good communication and team collaboration skills.",
    "Ability to adapt to new tools and technologies quickly."
  ],
  benefits: [
    "Opportunity to work on real software products and projects.",
    "Exposure to professional development practices and workflows.",
    "Mentorship from senior engineers and team leads.",
    "Collaborative environment with emphasis on learning.",
    "Hands-on experience with current development tools and methods."
  ],
  aboutCompany:
    "Smartronic Technical Solution is a technology services company based in Chennai that focuses on software development and technical consulting. The company supports clients with tailored solutions and fosters a culture of innovation, learning, and teamwork.",
  salary: "Not Disclosed",
  experience: "0–1 Years",
  skills: ["JavaScript", "HTML5", "CSS3", "Frontend Development"],
  applyLink:
    "https://www.naukri.com/job-listings-software-developer-smartronic-technical-solution-chennai-chennai-0-to-1-years-120226022074",
  postedAt: "2025-02-12",
}
,
  {
  title: "Software Developer",
  company: "Tele Infotech",
  location: "Pimpri Chinchwad / Pune, India",
  category: "frontend",
  slug: "software-developer-tele-infotech-pimpri-chinchwad-pune",
  description:
    "Tele Infotech is looking for Software Developers with up to 2 years of experience. This role focuses on building web applications and requires strong JavaScript and frontend fundamentals.",
  overview:
    "Tele Infotech, a technology services company based in Pimpri Chinchwad near Pune, is seeking enthusiastic Software Developers to join its growing team. This role is ideal for early-career developers who are familiar with JavaScript, frontend development, and modern web practices. You will be involved in building and testing web features, collaborating with cross-functional teams, and improving application quality. The position offers a supportive environment for learning and refining technical skills while contributing to real business applications.",
  responsibilities: [
    "Develop responsive web pages and user interfaces using JavaScript and related frontend technologies.",
    "Collaborate with designers and backend developers to deliver seamless functionality.",
    "Write clean, maintainable, and documented code following best practices.",
    "Participate in debugging and troubleshooting to fix application issues.",
    "Test and validate software to ensure consistency and performance across devices.",
    "Work with the team to continuously improve development workflows."
  ],
  requirements: [
    "0–2 years of experience in software or web development.",
    "Strong understanding of JavaScript fundamentals.",
    "Familiarity with HTML5 and CSS3.",
    "Exposure to frontend libraries or frameworks is a plus.",
    "Basic problem-solving and logical thinking skills.",
    "Good communication and ability to work in a team."
  ],
  benefits: [
    "Opportunity to work on real-world software development projects.",
    "Supportive team environment focused on learning and growth.",
    "Exposure to modern tools and development practices.",
    "Mentorship and guidance from experienced engineers.",
    "Potential for long-term career growth within the company."
  ],
  aboutCompany:
    "Tele Infotech is a software development company that delivers technology solutions for diverse business needs. The company emphasizes quality, innovation, and collaboration to build reliable web and mobile applications. Tele Infotech’s teams work together to solve real technical challenges and help clients achieve their business objectives.",
  salary: "Not Disclosed",
  experience: "0–2 Years",
  skills: ["JavaScript", "HTML5", "CSS3", "Frontend Development"],
  applyLink:
    "https://www.naukri.com/job-listings-software-developer-tele-infotech-pimpri-chinchwad-pune-0-to-2-years-110226041900",
  postedAt: "2025-02-12",
}
,
  {
  title: "Fresher Software Developer (JavaScript)",
  company: "Crescoworks LLP",
  location: "Coimbatore, India",
  category: "frontend",
  slug: "fresher-software-developer-javascript-crescoworks-llp",
  description:
    "Crescoworks LLP in Coimbatore is hiring Fresher Software Developers with a focus on JavaScript and modern frontend technologies. Candidates with up to 2 years of experience are welcome to apply.",
  overview:
    "Crescoworks LLP is seeking enthusiastic fresher Software Developers for its Coimbatore team. This role is designed for developers who want to grow their skills in JavaScript and full-stack web development. You will collaborate with experienced engineers on real products and gain hands-on experience writing code, debugging, and deploying features. As a fresher developer, you will be exposed to best practices in modern web development, and you’ll work in a team environment focused on delivering high-quality software.",
  responsibilities: [
    "Write clean, maintainable JavaScript code for web applications.",
    "Assist in building user interfaces with modern frontend frameworks.",
    "Collaborate with backend developers to integrate APIs.",
    "Debug code and troubleshoot issues across multiple environments.",
    "Participate in code reviews and contribute to team discussions.",
    "Work with senior developers to understand and implement technical requirements."
  ],
  requirements: [
    "0–2 years of experience in software development or internships.",
    "Good understanding of JavaScript fundamentals.",
    "Basic knowledge of HTML5 and CSS3.",
    "Exposure to frontend libraries or frameworks is a plus.",
    "Strong problem-solving skills and eagerness to learn.",
    "Ability to work collaboratively in a team environment."
  ],
  benefits: [
    "Opportunity to learn and grow with a product-focused team.",
    "Hands-on experience with real projects and software life cycle.",
    "Mentorship from experienced professionals.",
    "Collaborative and supportive work culture.",
    "Exposure to modern development tools and practices."
  ],
  aboutCompany:
    "Crescoworks LLP is a technology company based in Coimbatore that focuses on delivering innovative software solutions. The company fosters a collaborative environment where developers can work on meaningful projects and grow their technical skills while contributing to impactful products.",
  salary: "Not Disclosed",
  experience: "0–2 Years",
  skills: ["JavaScript", "HTML5", "CSS3", "Frontend Development"],
  applyLink:
    "https://www.naukri.com/job-listings-fresher-software-developer-javascript-coimbatore-crescoworks-llp-coimbatore-0-to-2-years-120226014165",
  postedAt: "2025-02-12",
}
,
  {
  title: "MERN Stack Intern (MongoDB, Express, React, Node.js)",
  company: "ArGo Intern",
  location: "Remote (India)",
  category: "internship",
  slug: "mern-stack-intern-remote-argo-intern",
  description:
    "ArGo Intern is hiring MERN Stack Developer Interns for a remote internship opportunity. Freshers and students with basic full-stack knowledge are welcome to apply.",
  overview:
    "ArGo Intern is offering a remote MERN Stack Developer Internship designed for students and freshers who want to gain hands-on experience in full-stack web development. This internship focuses on building real-world web applications using MongoDB, Express.js, React.js, and Node.js. Interns will work closely with the development team on practical projects, gaining exposure to both frontend and backend development workflows. The program emphasizes learning by doing, making it ideal for candidates looking to strengthen their fundamentals and prepare for professional software development roles.",
  responsibilities: [
    "Develop full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
    "Build and integrate RESTful APIs for frontend and backend communication.",
    "Work on both frontend user interfaces and backend server-side logic.",
    "Debug, test, and optimize application performance for better reliability.",
    "Collaborate with the development team on real-world projects and feature implementations.",
    "Follow best coding practices and contribute to clean, maintainable codebases."
  ],
  requirements: [
    "Freshers and students are eligible to apply.",
    "Basic knowledge of React.js, Node.js, Express.js, and MongoDB.",
    "Understanding of JavaScript fundamentals and web development concepts.",
    "Familiarity with frontend and backend workflows is a plus.",
    "Willingness to learn, adapt, and work collaboratively in a team environment.",
    "Basic understanding of REST APIs and client-server architecture."
  ],
  benefits: [
    "Hands-on experience working on real-world full-stack projects.",
    "Internship completion certificate.",
    "Exposure to end-to-end MERN stack development.",
    "Flexible remote internship structure.",
    "Opportunity for 100% placement support for top-performing interns.",
    "Practical learning environment focused on skill development."
  ],
  aboutCompany:
    "ArGo Intern is an internship-focused platform that provides students and fresh graduates with practical industry exposure. The organization aims to bridge the gap between academic learning and real-world application by offering hands-on projects, mentorship, and structured learning experiences in modern technologies.",
  salary: "Not Stipend Based",
  experience: "Fresher / Student",
  skills: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "JavaScript",
    "REST APIs",
    "Full-Stack Development"
  ],
  applyLink: "https://www.linkedin.com/jobs/view/4371549595",
  postedAt: "2025-02-13",
}
,
  {
  title: "Junior React Developer (Remote)",
  company: "Apexso Technologies",
  location: "Remote (India)",
  category: "remote",
  slug: "junior-react-developer-remote-apexso",
  description:
    "Apexso Technologies is hiring a Junior React Developer for a full-time remote position. Candidates with 1+ year of experience in React and modern frontend technologies are encouraged to apply.",
  overview:
    "Apexso Technologies is seeking a Junior React Developer to join its remote-first engineering team. Apexso acts as the technical backbone for global consultants and strategists, delivering production-ready systems for high-impact projects in Fintech, Retail, and Infrastructure domains. In this role, you will work on complex, scalable frontend applications where performance, stability, and maintainability are critical. This opportunity is ideal for developers who enjoy building real-world systems, writing clean code, and collaborating in an agile, international environment.",
  responsibilities: [
    "Develop and maintain high-quality, scalable user interfaces using React.js.",
    "Collaborate with designers, backend engineers, and product teams to implement functional and visually consistent features.",
    "Translate UI/UX designs into responsive, pixel-perfect frontend components.",
    "Integrate frontend applications with RESTful APIs and backend services.",
    "Write clean, modular, and reusable code following best engineering practices.",
    "Optimize frontend performance to ensure fast load times and smooth user experiences.",
    "Participate in code reviews and contribute to continuous improvement of the codebase."
  ],
  requirements: [
    "At least 1 year of hands-on experience with React.js.",
    "Strong proficiency in JavaScript (ES6+), HTML5, and CSS3.",
    "Experience with state management solutions such as Redux, Context API, or similar.",
    "Familiarity with modern styling approaches like Tailwind CSS, Material UI, or Styled Components.",
    "Experience connecting frontend applications with RESTful APIs.",
    "Good understanding of Git and GitHub for version control.",
    "Ability to work independently in a remote, agile environment with clear deadlines."
  ],
  benefits: [
    "Remote-first work culture with flexible working hours.",
    "Opportunity to work on complex, international projects beyond simple websites.",
    "Direct mentorship from senior architects and experienced consultants.",
    "High-impact work with large-scale global clients.",
    "Supportive and growth-oriented engineering environment."
  ],
  aboutCompany:
    "Apexso Technologies serves as the technical execution partner for global strategists and consultants. The company specializes in building stable, production-grade systems for high-stakes projects across Fintech, Retail, and Infrastructure sectors. Apexso focuses on engineering excellence, long-term maintainability, and delivering systems where reliability and performance are top priorities.",
  salary: "₹16,000 – ₹20,000 per month",
  experience: "1+ Years",
  skills: [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Redux",
    "Context API",
    "Tailwind CSS",
    "Git",
    "REST APIs"
  ],
  applyLink: "https://www.linkedin.com/jobs/view/4363038811",
  postedAt: "2025-02-12",
}

  ,
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
