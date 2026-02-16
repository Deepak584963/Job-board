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
  {
    title: "Associate Front End Developer",
    company: "HelpRush",
    location: "Kolkata, India",
    category: "frontend",
    slug: "associate-front-end-developer-helprush-kolkata",
    description:
      "HelpRush is hiring Associate Front End Developers in Kolkata with 0–3 years of experience. Join a dynamic team to build responsive and scalable web applications.",
    overview:
      "HelpRush is looking for a motivated Associate Front End Developer to join our team in Kolkata. In this role, you will be responsible for implementing visual elements that users see and interact with in a web application. You will work closely with UI/UX designers and backend developers to bridge the gap between graphical design and technical implementation. This position offers an excellent opportunity for early-career developers to work on diverse projects and enhance their skills in modern frontend technologies.",
    responsibilities: [
      "Develop and maintain user-facing features using modern JavaScript frameworks.",
      "Ensure the technical feasibility of UI/UX designs.",
      "Optimize applications for maximum speed and scalability.",
      "Collaborate with backend developers to integrate APIs.",
      "Write reusable code and libraries for future use.",
      "Troubleshoot and debug issues across different browsers and devices."
    ],
    requirements: [
      "0–3 years of experience in frontend development.",
      "Proficient understanding of web markup, including HTML5 and CSS3.",
      "Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS.",
      "Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery.",
      "Good understanding of asynchronous request handling, partial page updates, and AJAX.",
      "Familiarity with cross-browser compatibility issues and ways to work around them.",
      "Ideally, familiarity with React.js or similar modern frameworks."
    ],
    benefits: [
      "Competitive salary and performance-based incentives.",
      "Professional development and training opportunities.",
      "Collaborative and inclusive work environment.",
      "Health insurance and wellness programs.",
      "Flexible work arrangements."
    ],
    aboutCompany:
      "HelpRush is a technology services company dedicated to providing efficient and innovative solutions to its clients. We focus on delivering high-quality web and mobile applications that drive business growth.",
    salary: "Not Disclosed",
    experience: "0–3 Years",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
    applyLink:
      "https://www.naukri.com/job-listings-associate-front-end-developer-helprush-kolkata-0-to-3-years-120226501454",
    postedAt: "2025-02-12",
  },
  {
    title: "Associate Front End Developer",
    company: "HelpRush",
    location: "Bengaluru, India",
    category: "frontend",
    slug: "associate-front-end-developer-helprush-bengaluru",
    description:
      "HelpRush is expanding its team in Bengaluru and looking for Associate Front End Developers (0–3 years experience). Build cutting-edge web interfaces in a collaborative environment.",
    overview:
      "HelpRush is seeking a talented Associate Front End Developer for our Bengaluru office. As part of our engineering team, you will contribute to the development of high-performance web applications. You will be instrumental in translating design wireframes into code that produces visual elements of the application. This role requires a good understanding of frontend technologies and a passion for creating seamless user experiences. You will have the chance to work with experienced professionals and grow your career in a tech-forward city.",
    responsibilities: [
      "Implement responsive web designs using HTML, CSS, and JavaScript.",
      "Collaborate with the design team to ensure high-quality visual implementation.",
      "Develop and test new user-facing features.",
      "Build reusable code and components for future use.",
      "Optimize applications for speed and scalability.",
      "Participate in code reviews and team meetings."
    ],
    requirements: [
      "0–3 years of professional experience in web development.",
      "Strong proficiency in JavaScript, HTML5, and CSS3.",
      "Experience with modern frontend frameworks like React.js or Angular is a plus.",
      "Understanding of code versioning tools, such as Git.",
      "Ability to work independently as well as in a team environment.",
      "Good problem-solving skills and attention to detail."
    ],
    benefits: [
      "Opportunity to work on challenging projects.",
      "Mentorship from senior developers.",
      "Competitive compensation package.",
      "Dynamic and supportive team culture.",
      "Regular team outings and events."
    ],
    aboutCompany:
      "HelpRush acts as a strategic partner for businesses looking to leverage technology for growth. With a focus on agility and quality, our Bengaluru team drives innovation in web and mobile development.",
    salary: "Not Disclosed",
    experience: "0–3 Years",
    skills: ["JavaScript", "HTML5", "CSS3", "Git", "Web Development"],
    applyLink:
      "https://www.naukri.com/job-listings-associate-front-end-developer-helprush-bengaluru-0-to-3-years-120226501453",
    postedAt: "2025-02-12",
  },
  {
    title: "React.js Developer",
    company: "DigitKode Software Private Limited",
    location: "Nagercoil, India",
    category: "frontend",
    slug: "react-js-developer-digitkode-software-nagercoil",
    description:
      "DigitKode Software is hiring React.js Developers in Nagercoil with 0–2 years of experience. Candidates compliant with modern React workflows are encouraged to apply.",
    overview:
      "DigitKode Software Private Limited is looking for a skilled React.js Developer to join our team in Nagercoil. In this role, you will be responsible for developing and implementing user interface components using React.js workflows such as Redux or Flux. You will also be involved in profiling and improving front-end performance and documenting our front-end codebase. This is a great opportunity for developers with 0-2 years of experience who want to specialize in React and work on modern web architectures.",
    responsibilities: [
      "Developing new user-facing features using React.js.",
      "Building reusable components and front-end libraries for future use.",
      "Translating designs and wireframes into high-quality code.",
      "Optimizing components for maximum performance across a vast array of web-capable devices and browsers.",
      " collaborating with the backend team to integrate APIs.",
      "Reviewing application requirements and interface designs."
    ],
    requirements: [
      "0–2 years of experience in React.js development.",
      "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.",
      "Thorough understanding of React.js and its core principles.",
      "Experience with popular React.js workflows (such as Flux or Redux).",
      "Familiarity with newer specifications of EcmaScript.",
      "Knowledge of isomorphic React is a plus.",
      "Familiarity with RESTful APIs."
    ],
    benefits: [
      "Competitive salary based on skills and experience.",
      "Opportunity to work with a passionate team.",
      "Learning and development support.",
      "Work-life balance.",
      "Performance incentives."
    ],
    aboutCompany:
      "DigitKode Software Private Limited provides cutting-edge software solutions to clients worldwide. We are committed to fostering a culture of technical excellence and innovation.",
    salary: "Not Disclosed",
    experience: "0–2 Years",
    skills: ["React.js", "JavaScript", "Redux", "HTML5", "CSS3"],
    applyLink:
      "https://www.naukri.com/job-listings-react-js-developer-digitkode-software-private-limited-nagercoil-0-to-2-years-120226504225",
    postedAt: "2025-02-12",
  },
  {
    title: "React.js Developer",
    company: "Virtusa Consulting Services Pvt Ltd",
    location: "Chennai, India",
    category: "frontend",
    slug: "react-js-developer-virtusa-chennai",
    description:
      "Virtusa is hiring experienced React.js Developers (2–4 years) in Chennai. Join a global consulting firm and work on enterprise-grade applications.",
    overview:
      "Virtusa Consulting Services is seeking experienced React.js Developers to join our Chennai team. As a React.js Developer, you will be responsible for designing and implementing UI components for complex web applications. You will work in an agile environment, collaborating with cross-functional teams to deliver high-quality software solutions. This role is ideal for candidates with 2-4 years of experience who have a deep understanding of React ecosystem and best practices in frontend engineering.",
    responsibilities: [
      "Develop user interfaces for modern rich internet applications with the latest front-end technologies.",
      "Perform product analysis and development tasks of increasingly complex nature which may require extensive research and analysis.",
      "Writing tested and documented JavaScript, HTML and CSS.",
      "Make design and technical decisions for AngularJS/React projects.",
      "Develop application code and unit test in the AngularJS, Rest Web Services and Java technologies for the Application Development Center.",
      "Ensuring high performance on mobile and desktop."
    ],
    requirements: [
      "2–4 years of strong experience in React.js development.",
      "Proficient in JavaScript, HTML5, CSS3, and ES6+.",
      "Experience with state management libraries like Redux or Context API.",
      "Knowledge of modern frontend build pipelines and tools.",
      "Understanding of server-side proficiencies is a plus.",
      "Strong problem-solving and analytical skills.",
      "Excellent communication and teamwork skills."
    ],
    benefits: [
      "Comprehensive benefits package including health insurance.",
      "Opportunity to work with global clients.",
      "Structured career growth path.",
      "Access to continuous learning platforms.",
      "Global mobility opportunities."
    ],
    aboutCompany:
      "Virtusa Corporation is a global provider of digital business strategy, digital engineering, and information technology (IT) services and solutions that help clients change, disrupt, and unlock new value.",
    salary: "Not Disclosed",
    experience: "2–4 Years",
    skills: ["React.js", "JavaScript", "Redux", "Agile", "Web Development"],
    applyLink:
      "https://www.naukri.com/job-listings-react-js-developer-virtusa-consulting-services-pvt-ltd-chennai-2-to-4-years-120226914949",
    postedAt: "2025-02-12",
  },
  {
    title: "MERN Stack Developer",
    company: "Coddle Technologies Private Ltd",
    location: "Bengaluru, India",
    category: "frontend",
    slug: "mern-stack-developer-coddle-technologies-bengaluru",
    description:
      "Coddle Technologies is looking for MERN Stack Developers (0–2 years) in Bengaluru. Freshers and early professionals with full-stack skills can apply.",
    overview:
      "Coddle Technologies is hiring MERN Stack Developers to assist in building scalable web applications. Based in Bengaluru, this role is suitable for candidates with 0–2 years of experience who are proficient in MongoDB, Express.js, React.js, and Node.js. You will be working on end-to-end development tasks, from designing database schemas to implementing responsive frontend interfaces. This is an exciting opportunity to work on diverse projects and gain comprehensive full-stack development experience.",
    responsibilities: [
      "Building interactive consumer data from multiple systems and RESTfully abstract to the UI through a Node.js backend.",
      "Define code architecture decisions to support a high-performance and scalable product with a minimal footprint.",
      "Address and improve any technical issues.",
      "Collaborate well with engineers, researchers, and data implementation specialists to design and create advanced, elegant and efficient systems.",
      "Design and maintain large and complex databases.",
      "Develop and maintain the backend and frontend of the application."
    ],
    requirements: [
      "0–2 years of experience in MERN stack development.",
      "In-depth knowledge of NodeJS, ExpressJS or Restify.",
      "Experience creating front end applications using ReactJS.",
      "Experience with NoSQL databases such as MongoDB.",
      "Knowledge of code versioning tools such as Git.",
      "Strong analytical and problem-solving skills."
    ],
    benefits: [
      "Exposure to full-cycle product development.",
      "Competitive salary packages.",
      "Friendly and collaborative work environment.",
      "Opportunities for skill enhancement and training.",
      "Flexible work timings."
    ],
    aboutCompany:
      "Coddle Technologies is an IT solutions provider specializing in web and mobile app development. We focus on delivering innovative and cost-effective technology solutions to businesses of all sizes.",
    salary: "Not Disclosed",
    experience: "0–2 Years",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Full Stack Development"],
    applyLink:
      "https://www.naukri.com/job-listings-mern-stack-developer-coddle-technologies-private-ltd-bengaluru-0-to-2-years-120226500917",
    postedAt: "2025-02-12",
  },
  {
    title: "Software Developer",
    company: "Avixset Technologies",
    location: "Thiruvananthapuram, India",
    category: "frontend",
    slug: "software-developer-avixset-technologies-thiruvananthapuram",
    description:
      "Avixset Technologies is hiring Software Developers in Thiruvananthapuram. Open to candidates with 0–5 years of experience looking to build robust software solutions.",
    overview:
      "Avixset Technologies connects businesses with top-tier talent and technology. We are looking for Software Developers of varying experience levels (0-5 years) to join our team in Thiruvananthapuram. In this role, you will be involved in the full software development lifecycle, designing, testing, and maintaining software applications. Whether you are a fresher or an experienced developer, you will find opportunities to challenge yourself and contribute to meaningful projects.",
    responsibilities: [
      "Analyze user requirements and convert requirements to design documents.",
      "Write code for software programs and applications.",
      "Perform unit testing and debugging.",
      "Maintain and upgrade existing systems.",
      "Collaborate with other developers and stakeholders.",
      "Ensure software meets all requirements of quality, security, modifiability, extensibility etc."
    ],
    requirements: [
      "0–5 years of experience in software development.",
      "Proficiency in at least one modern programming language (Java, Python, JavaScript, etc.).",
      "Understanding of software development lifecycle (SDLC).",
      "Knowledge of databases (SQL/NoSQL).",
      "Ability to learn new technologies quickly.",
      "Good communication skills."
    ],
    benefits: [
      "Competitive salary and benefits.",
      "Professional growth opportunities.",
      "Work with the latest technologies.",
      "Supportive team environment.",
      "Work-life balance."
    ],
    aboutCompany:
      "Avixset Technologies is a technology company focused on delivering high-quality software solutions and services. We value innovation and are dedicated to helping our clients achieve their business goals.",
    salary: "Not Disclosed",
    experience: "0–5 Years",
    skills: ["Software Development", "Programming", "SDLC", "Database Management", "Problem Solving"],
    applyLink:
      "https://www.naukri.com/job-listings-software-developer-avixset-technologies-thiruvananthapuram-0-to-5-years-120226502827",
    postedAt: "2025-02-12",
  },
  {
    title: "React.js Developer",
    company: "InnovSense Technologies",
    location: "Ahmedabad, India",
    category: "frontend",
    slug: "react-js-developer-innovsense-technologies-ahmedabad",
    description:
      "InnovSense Technologies in Ahmedabad is looking for React.js Developers with 0–3 years of experience. Join a creative team building modern web apps.",
    overview:
      "InnovSense Technologies is seeking a dedicated React.js Developer to join our team in Ahmedabad. We are looking for candidates with 0–3 years of experience who demonstrate a strong understanding of Core JavaScript and React principles. As a React.js Developer, you will be responsible for developing user interface components and implementing them following well-known React.js workflows. You will coordinate with the rest of the team working on different layers of the infrastructure.",
    responsibilities: [
      "Developing new user-facing features using React.js.",
      "Building reusable components and front-end libraries.",
      "Translating designs and wireframes into high-quality code.",
      "Optimizing components for maximum performance.",
      "Collaborating with the design and backend teams.",
      "Staying up-to-date with recent developments in the React ecosystem."
    ],
    requirements: [
      "0–3 years of experience with React.js.",
      "Strong proficiency in JavaScript, including DOM manipulation.",
      "Experience with React.js workflows (Redux, Context API).",
      "Familiarity with RESTful APIs.",
      "Knowledge of modern authorization mechanisms.",
      "Ability to understand business requirements."
    ],
    benefits: [
      "Competitive compensation.",
      "Opportunity to work on diverse projects.",
      "Friendly work culture.",
      "Mentorship and training.",
      "Flexible leave policy."
    ],
    aboutCompany:
      "InnovSense Technologies is an IT company providing web and mobile app development services. We focus on delivering innovative solutions that add value to our clients' businesses.",
    salary: "Not Disclosed",
    experience: "0–3 Years",
    skills: ["React.js", "JavaScript", "Redux", "HTML5", "CSS3"],
    applyLink:
      "https://www.naukri.com/job-listings-react-js-developer-innovsense-technologies-ahmedabad-0-to-3-years-160226506333",
    postedAt: "2026-02-16",
  },
  {
    title: "Angular Developer",
    company: "Crescoworks Pvt Ltd",
    location: "Bengaluru, India",
    category: "frontend",
    slug: "angular-developer-crescoworks-bengaluru",
    description:
      "Crescoworks is hiring Angular Developers (0-2 years) in Bengaluru. Fresh graduates and junior developers with Angular skills are welcome.",
    overview:
      "Crescoworks Pvt Ltd is looking for a passionate Angular Developer to join our team in Bengaluru. We are looking for candidates with 0-2 years of experience who are eager to build dynamic single-page applications. As an Angular Developer, you will be responsible for the client-side of our service. Your primary focus will be to implement specific user interfaces in the form of a mobile and desktop web app, with a focus on performance. Your main duties will include creating modules and components and coupling them together into a functional app.",
    responsibilities: [
      "Delivering a complete front end application.",
      "Ensuring high performance on mobile and desktop.",
      "Writing tested, idiomatic, and documented JavaScript, HTML and CSS.",
      "Coordinating the workflow between the graphic designer, the HTML coder, and yourself.",
      "Cooperating with the back-end developer in the process of building the RESTful API.",
      "Communicating with external web services."
    ],
    requirements: [
      "0-2 years of experience in Angular development.",
      "Proficiency with JavaScript and HTML5.",
      "Deep knowledge of Angular practices and commonly used modules based on extensive work experience.",
      "Creating self-contained, reusable, and testable modules and components.",
      "Thorough understanding of the responsibilities of the platform, database, API, caching layer, proxies, and other web services used in the system.",
      "Validating user actions on the client side and providing responsive feedback."
    ],
    benefits: [
      "Competitive salary.",
      "Opportunity to work on diverse projects.",
      "Collaborative team environment.",
      "Career growth opportunities.",
      "Health insurance."
    ],
    aboutCompany:
      "Crescoworks is a technology consulting and services company. We help businesses leverage technology to drive growth and efficiency.",
    salary: "Not Disclosed",
    experience: "0–2 Years",
    skills: ["Angular", "JavaScript", "HTML5", "CSS3", "TypeScript"],
    applyLink:
      "https://www.naukri.com/job-listings-crescoworks-is-hiring-for-angular-developer-crescoworks-pvt-ltd-bengaluru-0-to-2-years-120226011403",
    postedAt: "2025-02-12",
  },
  {
    title: "Software Development Engineer",
    company: "Accenture",
    location: "Chennai, India",
    category: "frontend",
    slug: "software-development-engineer-accenture-chennai",
    description:
      "Accenture is hiring Software Development Engineers in Chennai with 1–4 years of experience. Work with a global leader in tech consulting and services.",
    overview:
      "Accenture is looking for Software Development Engineers to join our Chennai team. We are looking for candidates with 1–4 years of experience who are passionate about technology and innovation. In this role, you will be responsible for designing, building, and configuring applications to meet business process and application requirements. You will work in a highly collaborative environment, leveraging the latest technologies to deliver high-quality software solutions for global clients.",
    responsibilities: [
      "Design, build, and configure applications to meet business process and application requirements.",
      "Write clean, scalable, and efficient code.",
      "Participate in the full software development lifecycle.",
      "Collaborate with cross-functional teams to define, design, and ship new features.",
      "Troubleshoot and debug applications.",
      "Follow best practices in software engineering."
    ],
    requirements: [
      "1–4 years of experience in software development.",
      "Proficient in one or more programming languages (Java, .NET, JavaScript, etc.).",
      "Experience with modern software development methodologies like Agile/Scrum.",
      "Good understanding of databases and data structures.",
      "Strong problem-solving and analytical skills.",
      "Excellent communication skills."
    ],
    benefits: [
      "World-class training and development programs.",
      "Opportunity to work with Fortune 500 clients.",
      "Comprehensive health and wellness benefits.",
      "Inclusive and diverse work culture.",
      "Performance-based bonuses."
    ],
    aboutCompany:
      "Accenture is a global professional services company with leading capabilities in digital, cloud, and security. Combining unmatched experience and specialized skills across more than 40 industries, we offer Strategy and Consulting, Technology and Operations services and Accenture Song.",
    salary: "Not Disclosed",
    experience: "1–4 Years",
    skills: ["Software Engineering", "Agile", "Programming", "Problem Solving", "Consulting"],
    applyLink:
      "https://www.naukri.com/job-listings-software-development-engineer-accenture-solutions-pvt-ltd-chennai-1-to-4-years-100226934697",
    postedAt: "2025-02-10",
  },
  {
    title: "Frontend Developer Intern",
    company: "SourceEase",
    location: "New Delhi, India",
    category: "internship",
    slug: "frontend-developer-intern-sourceease-new-delhi",
    description:
      "SourceEase is hiring Frontend Developer Interns in New Delhi. This 0–1 year experience role is perfect for freshers looking to start their career.",
    overview:
      "SourceEase HR Services is looking for a motivated Frontend Developer Intern to join our team in New Delhi. This internship is designed for candidates with 0–1 year of experience or fresh graduates who have a strong interest in frontend technologies. During this internship, you will work on real-world projects, assist in developing user interfaces, and learn from experienced developers. It creates a pathway for you to understand professional development workflows and best practices.",
    responsibilities: [
      "Assist in developing and maintaining web applications.",
      "Collaborate with the design team to implement user interfaces.",
      "Write clean and manageable HTML, CSS, and JavaScript code.",
      "Test and debug applications across different browsers.",
      "Participate in team meetings and contribute ideas.",
      "Learn new technologies and frameworks as required."
    ],
    requirements: [
      "0–1 year of experience or relevant internship experience.",
      "Basic understanding of HTML, CSS, and JavaScript.",
      "Familiarity with frontend frameworks like React or Angular is a plus.",
      "Eagerness to learn and grow.",
      "Good communication skills.",
      "Ability to work in a team."
    ],
    benefits: [
      "Hands-on experience with live projects.",
      "Mentorship from industry professionals.",
      "Internship completion certificate.",
      "Potential for pre-placement offer based on performance.",
      "Positive and learning-oriented work environment."
    ],
    aboutCompany:
      "SourceEase HR Services provides recruitment and staffing solutions to various industries. We are committed to connecting talent with opportunity and supporting the growth of aspiring professionals.",
    salary: "Not Disclosed",
    experience: "0–1 Years",
    skills: ["HTML", "CSS", "JavaScript", "Frontend Development", "Internship"],
    applyLink:
      "https://www.naukri.com/job-listings-frontend-developer-intern-sourceease-hr-services-new-delhi-0-to-1-years-130226012169",
    postedAt: "2025-02-13",
  },
  {
    title: "Intern - Full Stack Development",
    company: "OnGrid",
    location: "Gurugram, India",
    category: "internship",
    slug: "intern-full-stack-development-ongrid-gurugram",
    description:
      "OnGrid in Gurugram is hiring an Intern for Full Stack Development. This role is ideal for candidates with 0–1 year of experience who want to work on end-to-end web applications using modern technologies.",
    overview:
      "OnGrid is looking for a passionate Full Stack Development Intern to join its Gurugram office. As an intern, you will get hands-on exposure to both frontend and backend development, working on live projects that impact real users. OnGrid builds technology solutions for background verification and identity management, giving you the chance to contribute to a meaningful product. You will collaborate with experienced engineers, participate in sprint planning, and gain a deep understanding of building scalable web applications from the ground up. This internship is designed to fast-track your career in full stack engineering.",
    responsibilities: [
      "Develop and maintain frontend interfaces using React or similar frameworks.",
      "Build and integrate RESTful APIs using Node.js or similar backend technologies.",
      "Participate in code reviews and follow best coding practices.",
      "Write unit and integration tests to ensure code reliability.",
      "Collaborate with product and design teams to translate requirements into technical solutions.",
      "Debug and resolve issues across the full technology stack."
    ],
    requirements: [
      "0–1 year of experience in web development or relevant internships.",
      "Familiarity with HTML, CSS, JavaScript, and at least one backend language.",
      "Basic understanding of databases such as MongoDB or PostgreSQL.",
      "Knowledge of version control systems like Git.",
      "Strong problem-solving skills and eagerness to learn.",
      "Good communication and teamwork abilities."
    ],
    benefits: [
      "Work on a real product used by enterprises across India.",
      "Mentorship from senior full stack engineers.",
      "Pre-placement offer opportunity based on performance.",
      "Exposure to agile development practices.",
      "Collaborative and growth-oriented work environment."
    ],
    aboutCompany:
      "OnGrid is a Gurugram-based technology company specializing in digital identity verification and background check solutions. Their platform is used by businesses to automate and streamline employee verification processes, leveraging advanced technology to ensure trust and compliance.",
    salary: "Not Disclosed",
    experience: "0–1 Years",
    skills: ["React", "Node.js", "JavaScript", "MongoDB", "REST APIs", "Git"],
    applyLink:
      "https://www.naukri.com/job-listings-intern-full-stack-development-ongrid-gurugram-0-to-1-years-160226501111",
    postedAt: "2026-02-16",
  },
  {
    title: "MERN Stack Developer",
    company: "Excellence Technologies",
    location: "Noida, India",
    category: "fresher",
    slug: "mern-stack-developer-excellence-technologies-noida",
    description:
      "Excellence Technologies in Noida is hiring a MERN Stack Developer with 0–1 year of experience. This is a great opportunity for freshers who have hands-on skills in MongoDB, Express.js, React, and Node.js.",
    overview:
      "Excellence Technologies is seeking a MERN Stack Developer to join their development team in Noida. This position welcomes freshers and candidates with up to 1 year of experience who are proficient in the MERN technology stack. You will work on building dynamic web applications, developing APIs, and creating responsive user interfaces. The role provides an opportunity to grow rapidly in a product-driven environment, working alongside experienced developers on projects that serve clients across multiple industries. Excellence Technologies values innovation and encourages developers to experiment with new tools and approaches.",
    responsibilities: [
      "Design and develop full stack web applications using MongoDB, Express.js, React, and Node.js.",
      "Create reusable, efficient, and scalable frontend components in React.",
      "Build RESTful APIs and integrate third-party services.",
      "Ensure application responsiveness and cross-browser compatibility.",
      "Write clean, documented, and maintainable code.",
      "Collaborate with the team on architecture decisions and project planning."
    ],
    requirements: [
      "0–1 year of experience with the MERN stack.",
      "Strong understanding of JavaScript and ES6+ features.",
      "Hands-on experience with React.js and state management libraries.",
      "Familiarity with Node.js and Express.js for server-side development.",
      "Basic knowledge of MongoDB and database design.",
      "Understanding of Git and collaborative development workflows."
    ],
    benefits: [
      "Opportunity to work on diverse client projects.",
      "Skill development through challenging assignments.",
      "Supportive team culture with regular knowledge sharing.",
      "Career growth opportunities within the organization.",
      "Exposure to modern development tools and practices."
    ],
    aboutCompany:
      "Excellence Technologies is a Noida-based IT services and software development company offering web and mobile application solutions to clients globally. They focus on delivering high-quality digital products using cutting-edge technologies and agile methodologies.",
    salary: "Not Disclosed",
    experience: "0–1 Years",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "REST APIs"],
    applyLink:
      "https://www.naukri.com/job-listings-mern-stack-developer-excellence-technologies-noida-0-to-1-years-061125029569",
    postedAt: "2026-02-16",
  },
  {
    title: "Full Stack Engineer",
    company: "Alter Domus",
    location: "Hyderabad, India",
    category: "frontend",
    slug: "full-stack-engineer-alter-domus-hyderabad",
    description:
      "Alter Domus is hiring a Full Stack Engineer in Hyderabad with 0–5 years of experience. Join a global financial services firm and work on building enterprise-grade web applications.",
    overview:
      "Alter Domus, a leading global provider of integrated solutions for the alternative investment industry, is looking for a Full Stack Engineer to join their Hyderabad technology center. This role is open to candidates ranging from freshers to those with up to 5 years of experience. You will contribute to building and maintaining applications that support fund administration, corporate services, and capital markets. The position offers the chance to work in a highly professional environment with international exposure, leveraging modern web technologies to deliver robust and scalable financial technology solutions. Alter Domus provides a structured career path and invests heavily in employee development.",
    responsibilities: [
      "Develop and maintain full stack web applications for financial platforms.",
      "Design scalable backend services and integrate them with frontend interfaces.",
      "Participate in system architecture discussions and technical planning.",
      "Write comprehensive unit and integration tests.",
      "Collaborate with global teams across different time zones.",
      "Optimize application performance and ensure security best practices."
    ],
    requirements: [
      "0–5 years of experience in full stack development.",
      "Proficiency in JavaScript/TypeScript with React or Angular on the frontend.",
      "Experience with backend technologies like Node.js, Java, or .NET.",
      "Understanding of relational and NoSQL databases.",
      "Familiarity with cloud platforms (AWS, Azure, or GCP).",
      "Strong analytical thinking and communication skills."
    ],
    benefits: [
      "Work with a globally recognized financial services company.",
      "International exposure and collaboration with global teams.",
      "Competitive compensation and comprehensive benefits package.",
      "Structured learning and career development programs.",
      "Modern office environment in Hyderabad."
    ],
    aboutCompany:
      "Alter Domus is a leading provider of integrated solutions for the alternative investment industry, serving private equity, real estate, infrastructure, and debt capital markets. With offices in over 20 countries, the company combines deep industry expertise with innovative technology to deliver best-in-class services to its clients worldwide.",
    salary: "Not Disclosed",
    experience: "0–5 Years",
    skills: ["React", "Node.js", "TypeScript", "JavaScript", "SQL", "Cloud Services"],
    applyLink:
      "https://www.naukri.com/job-listings-full-stack-engineer-at-alter-domus-alter-domus-hyderabad-0-to-5-years-160226508381",
    postedAt: "2026-02-16",
  },
  {
    title: "Frontend Intern",
    company: "Vidyayatan Technologies",
    location: "Bhopal, India",
    category: "internship",
    slug: "frontend-intern-vidyayatan-technologies-bhopal",
    description:
      "Vidyayatan Technologies in Bhopal is offering a Frontend Internship for candidates with 0–5 years of experience. Gain practical frontend development skills while working on real projects.",
    overview:
      "Vidyayatan Technologies is looking for a Frontend Intern to join their Bhopal office. This internship is designed for individuals who want to build a strong foundation in frontend web development. You will work on creating interactive web pages, implementing responsive layouts, and learning modern JavaScript frameworks. The company offers a mentorship-driven environment where interns receive guidance from senior developers while contributing to real client deliverables. Vidyayatan Technologies believes in nurturing talent and provides a clear pathway from internship to full-time employment for high-performing candidates.",
    responsibilities: [
      "Develop responsive web pages using HTML, CSS, and JavaScript.",
      "Assist in building interactive UI components using modern frameworks.",
      "Test and debug applications to ensure cross-browser compatibility.",
      "Collaborate with the design team to implement UI mockups.",
      "Write clean and well-documented code following team standards.",
      "Participate in daily standups and sprint reviews."
    ],
    requirements: [
      "0–5 years of experience (freshers encouraged to apply).",
      "Knowledge of HTML5, CSS3, and JavaScript fundamentals.",
      "Familiarity with any frontend framework like React, Angular, or Vue.js.",
      "Understanding of responsive design principles.",
      "Good problem-solving aptitude and willingness to learn.",
      "Ability to work independently and in a team."
    ],
    benefits: [
      "Hands-on experience with production-grade projects.",
      "Mentorship from experienced frontend developers.",
      "Internship certificate upon successful completion.",
      "Possibility of full-time conversion based on performance.",
      "Flexible and supportive learning environment."
    ],
    aboutCompany:
      "Vidyayatan Technologies is a Bhopal-based IT solutions company that offers software development, web design, and digital marketing services. The company emphasizes innovation and quality while providing a nurturing environment for budding developers to grow their careers.",
    salary: "Not Disclosed",
    experience: "0–5 Years",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "UI Development"],
    applyLink:
      "https://www.naukri.com/job-listings-frontend-intern-vidyayatan-technologies-bhopal-0-to-5-years-160226506388",
    postedAt: "2026-02-16",
  },
  {
    title: "Full Stack Web Development Intern",
    company: "Future Interns",
    location: "Kolkata, Mumbai, New Delhi, Hyderabad, Pune, Chennai, Bengaluru, India",
    category: "internship",
    slug: "full-stack-web-development-intern-future-interns-multiple-cities",
    description:
      "Future Interns is hiring Full Stack Web Development Interns across multiple cities including Kolkata, Mumbai, New Delhi, Hyderabad, Pune, Chennai, and Bengaluru. This fresher-level opportunity is perfect for aspiring developers.",
    overview:
      "Future Interns is seeking enthusiastic freshers for a Full Stack Web Development Internship available across seven major Indian cities. This internship provides a comprehensive learning experience covering both frontend and backend web development. As an intern, you will work on real-world projects, build dynamic websites, and gain practical knowledge of the complete software development lifecycle. The program is structured to help you transition from academic knowledge to industry-ready skills, with dedicated mentorship and project-based learning. Future Interns has helped thousands of aspiring developers kick-start their careers in technology.",
    responsibilities: [
      "Build full stack web applications using modern technologies.",
      "Develop frontend pages with HTML, CSS, JavaScript, and React.",
      "Create backend APIs using Node.js or Python-based frameworks.",
      "Work with databases to store and retrieve application data.",
      "Participate in project presentations and code walkthroughs.",
      "Follow coding best practices and maintain clean documentation."
    ],
    requirements: [
      "Fresher – no prior professional experience required.",
      "Basic understanding of HTML, CSS, and JavaScript.",
      "Interest in learning full stack web development.",
      "Familiarity with any programming language is a plus.",
      "Strong motivation to learn and complete assigned projects.",
      "Good written and verbal communication skills."
    ],
    benefits: [
      "Multi-city availability – work from your nearest location.",
      "Internship completion certificate.",
      "Project-based learning with real-world applications.",
      "Mentorship and guidance from industry professionals.",
      "Letter of recommendation for outstanding performers."
    ],
    aboutCompany:
      "Future Interns is an internship platform that connects aspiring professionals with hands-on learning opportunities across various technology domains. With presence in multiple Indian cities, they provide structured internship programs designed to bridge the gap between academic learning and industry requirements.",
    salary: "Not Disclosed",
    experience: "Fresher",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Full Stack Development"],
    applyLink:
      "https://www.naukri.com/job-listings-full-stack-web-development-intern-future-interns-kolkata-mumbai-new-delhi-hyderabad-pune-chennai-bengaluru-0-to-0-years-160226503065",
    postedAt: "2026-02-16",
  },
  {
    title: "Frontend Intern",
    company: "Gravity Engineering Services",
    location: "Raipur, India",
    category: "internship",
    slug: "frontend-intern-gravity-engineering-services-raipur",
    description:
      "Gravity Engineering Services in Raipur is hiring a Frontend Intern with 0–1 year of experience. This internship offers practical exposure to modern frontend technologies and real project work.",
    overview:
      "Gravity Engineering Services is looking for a Frontend Intern to join their team in Raipur. This opportunity is ideal for fresh graduates or individuals with up to 1 year of experience who are passionate about creating beautiful and functional web interfaces. During this internship, you will work alongside experienced developers, build responsive web pages, and learn industry-standard tools and workflows. Gravity Engineering Services provides a supportive and collaborative environment where interns are encouraged to ask questions, take initiative, and grow their technical capabilities. Successful interns may be considered for full-time positions within the company.",
    responsibilities: [
      "Develop responsive and visually appealing web pages using HTML, CSS, and JavaScript.",
      "Implement UI designs from wireframes and mockups.",
      "Assist in integrating frontend components with backend services.",
      "Test applications across different browsers and devices.",
      "Participate in code reviews and team discussions.",
      "Document code changes and contribute to technical documentation."
    ],
    requirements: [
      "0–1 year of experience or recent graduate in Computer Science or related field.",
      "Basic proficiency in HTML5, CSS3, and JavaScript.",
      "Awareness of responsive design and CSS frameworks like Bootstrap or Tailwind.",
      "Interest in learning modern JavaScript frameworks.",
      "Good analytical thinking and attention to detail.",
      "Willingness to learn and adapt to new technologies."
    ],
    benefits: [
      "Real-world project experience in frontend development.",
      "Mentorship from senior developers.",
      "Internship certificate upon completion.",
      "Potential for full-time employment after internship.",
      "Friendly and learning-focused workplace."
    ],
    aboutCompany:
      "Gravity Engineering Services is a Raipur-based company providing engineering and technology solutions. They work across multiple domains and are committed to fostering talent by offering meaningful internship experiences that prepare individuals for successful careers in technology.",
    salary: "Not Disclosed",
    experience: "0–1 Years",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design", "Frontend Development"],
    applyLink:
      "https://www.naukri.com/job-listings-frontend-intern-gravity-engineering-services-raipur-0-to-1-years-160226006715",
    postedAt: "2026-02-16",
  },
  {
    title: "React and Node.js Developer",
    company: "Mylapay",
    location: "Chennai, India",
    category: "frontend",
    slug: "react-and-node-js-developer-mylapay-chennai",
    description:
      "Mylapay in Chennai is looking for a React and Node.js Developer with 0–1 year of experience. Work on fintech applications and build scalable web solutions using React and Node.js.",
    overview:
      "Mylapay is seeking a React and Node.js Developer to join their Chennai-based engineering team. This role is well suited for candidates with 0–1 year of experience who have a strong grasp of both frontend and backend JavaScript technologies. As a developer at Mylapay, you will contribute to building and maintaining fintech applications that facilitate digital payments and financial services. The company operates at the intersection of finance and technology, offering a unique opportunity to work on products that handle real-world transactions. Mylapay encourages innovation, provides a collaborative work culture, and supports continuous technical growth.",
    responsibilities: [
      "Develop and maintain web applications using React.js and Node.js.",
      "Build RESTful APIs and integrate them with frontend interfaces.",
      "Implement responsive and accessible user interfaces.",
      "Write and maintain unit tests for frontend and backend code.",
      "Collaborate with cross-functional teams including product and QA.",
      "Optimize application performance and troubleshoot production issues."
    ],
    requirements: [
      "0–1 year of experience with React.js and Node.js.",
      "Strong understanding of JavaScript and modern ES6+ syntax.",
      "Experience with state management solutions in React.",
      "Familiarity with Express.js or similar Node.js frameworks.",
      "Basic knowledge of databases (SQL or NoSQL).",
      "Understanding of RESTful API design and integration."
    ],
    benefits: [
      "Work in the exciting fintech domain.",
      "Opportunity to build products handling real financial transactions.",
      "Collaborative and innovation-driven work culture.",
      "Career growth opportunities in a fast-growing company.",
      "Exposure to cutting-edge technology stack."
    ],
    aboutCompany:
      "Mylapay is a Chennai-based fintech company that provides digital payment solutions and financial technology services. The company is focused on building secure, scalable, and user-friendly platforms that simplify financial transactions for businesses and consumers alike.",
    salary: "Not Disclosed",
    experience: "0–1 Years",
    skills: ["React.js", "Node.js", "JavaScript", "Express.js", "REST APIs", "MongoDB"],
    applyLink:
      "https://www.naukri.com/job-listings-react-and-node-js-developer-mylapay-chennai-0-to-1-years-160226016530",
    postedAt: "2026-02-16",
  },
  {
    title: "Full Stack Developer",
    company: "GoDigi Infotech",
    location: "Pune, India",
    category: "fresher",
    slug: "full-stack-developer-godigi-infotech-pune",
    description:
      "GoDigi Infotech in Pune is hiring a Full Stack Developer with 0–1 year of experience. Build end-to-end web applications and grow your career in a dynamic development team.",
    overview:
      "GoDigi Infotech is looking for a Full Stack Developer to join their Pune office. This entry-level position is perfect for freshers and candidates with up to 1 year of experience who want to work across the entire web development stack. You will be involved in designing, developing, and deploying web applications that serve real business needs. GoDigi Infotech works with clients from various industries, providing a rich and varied learning experience. The company promotes a culture of continuous learning and provides its developers with the tools and mentorship needed to excel in their careers.",
    responsibilities: [
      "Design and develop full stack web applications from concept to deployment.",
      "Build responsive frontend interfaces using React or Angular.",
      "Develop server-side logic and database integrations using Node.js.",
      "Implement and consume RESTful APIs.",
      "Participate in agile ceremonies including sprint planning and retrospectives.",
      "Troubleshoot and debug issues across the application stack."
    ],
    requirements: [
      "0–1 year of experience in full stack web development.",
      "Proficiency in JavaScript with frameworks like React or Angular.",
      "Knowledge of backend development with Node.js or similar technologies.",
      "Understanding of database management with MongoDB or MySQL.",
      "Familiarity with Git and CI/CD practices.",
      "Strong problem-solving skills and a proactive attitude."
    ],
    benefits: [
      "Diverse project exposure across industries.",
      "Mentorship and learning opportunities from experienced developers.",
      "Comfortable and modern office in Pune.",
      "Performance-based career advancement.",
      "Team outings and a collaborative work culture."
    ],
    aboutCompany:
      "GoDigi Infotech is a Pune-based digital solutions company specializing in web development, mobile applications, and digital marketing. They help businesses establish their digital presence with high-quality, scalable technology solutions.",
    salary: "Not Disclosed",
    experience: "0–1 Years",
    skills: ["React", "Node.js", "JavaScript", "MongoDB", "REST APIs", "Git"],
    applyLink:
      "https://www.naukri.com/job-listings-full-stack-developer-godigi-infotech-pune-0-to-1-years-160226504360",
    postedAt: "2026-02-16",
  },
  {
    title: "Software Engineer Intern",
    company: "KRAN",
    location: "Thiruvananthapuram, India",
    category: "internship",
    slug: "software-engineer-intern-kran-thiruvananthapuram",
    description:
      "KRAN in Thiruvananthapuram is hiring a Software Engineer Intern. This fresher-level internship provides an excellent opportunity to gain practical software engineering experience in a professional environment.",
    overview:
      "KRAN is seeking a Software Engineer Intern to join their team in Thiruvananthapuram. This internship is tailored for fresh graduates who are eager to apply their academic knowledge in a real-world software development setting. You will work on various aspects of software engineering including coding, testing, debugging, and deployment. KRAN values fresh perspectives and encourages interns to contribute ideas while learning from seasoned professionals. The internship covers a broad range of technologies and methodologies, giving you a well-rounded foundation for a successful career in software engineering. Top-performing interns will be considered for full-time positions.",
    responsibilities: [
      "Assist in designing and developing software applications.",
      "Write clean and efficient code following team coding standards.",
      "Participate in testing and quality assurance activities.",
      "Help debug and resolve software defects.",
      "Collaborate with team members on feature development.",
      "Document technical specifications and project progress."
    ],
    requirements: [
      "Fresher – no prior professional experience required.",
      "Degree in Computer Science, IT, or a related field.",
      "Basic programming knowledge in languages like JavaScript, Python, or Java.",
      "Understanding of data structures and algorithms.",
      "Familiarity with web development technologies is a plus.",
      "Strong analytical mindset and eagerness to learn."
    ],
    benefits: [
      "Practical software engineering experience.",
      "Mentorship from experienced software engineers.",
      "Internship certificate and letter of recommendation.",
      "Opportunity for full-time conversion based on performance.",
      "Collaborative and innovation-friendly workplace."
    ],
    aboutCompany:
      "KRAN is a Thiruvananthapuram-based technology company focused on building innovative software solutions. The company works across multiple technology domains and is committed to developing the next generation of software engineers through structured internship programs.",
    salary: "Not Disclosed",
    experience: "Fresher",
    skills: ["JavaScript", "Python", "Software Development", "Problem Solving", "Git", "Web Development"],
    applyLink:
      "https://www.naukri.com/job-listings-software-engineer-intern-kran-thiruvananthapuram-0-to-0-years-160226501421",
    postedAt: "2026-02-16",
  }
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
