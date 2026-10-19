import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Abhishek Pawar",
    role: "Frontend Developer",
    oneLineIntro: "Frontend Developer with 2+ years of experience building high-performance, accessible single-page web applications with React.js and Angular.",
    email: "abhishekpawar131202@gmail.com",
    phone: "8291579474",
    location: "Mumbai, India",
    avatarUrl: "/profileImage.png?v=3",
    resumeFile: "/Abhishek_Pawar_Resume.pdf",
    socials: {
      github: "https://github.com/Abhipawar1312",
      linkedin: "https://www.linkedin.com/in/abhishek-pawar-49b07b287",
    },
    placeholders: {
      linkedinUrlMissing: false,
      githubUrlMissing: false,
      photoMissing: false,
    },
  },

  about: "Frontend Developer with 2+ years of experience building scalable, single-page web applications with React.js and Angular. Strong in component-based architecture, Redux and Zustand for state management, and REST API integration. Experienced writing automated unit and functional tests (Jest, Vitest, React Testing Library) and building cross-browser, responsive UIs across devices. Comfortable across the MERN stack, with backend exposure to Node.js and Express.js.",

  skills: [
    {
      category: "Frontend",
      skills: [
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Angular",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion",
        "Responsive & Cross-Browser Design",
        "Axios",
        "Zod",
      ],
    },
    {
      category: "State Management",
      skills: [
        "Redux",
        "Redux Toolkit",
        "Zustand",
        "React Router DOM",
        "React Hook Form",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "OAuth 2.0",
        "JWT Authentication",
        "Stripe",
        "MongoDB",
        "Redis",
        "SQL",
        "MySQL",
      ],
    },
    {
      category: "Testing",
      skills: [
        "Jest",
        "Vitest",
        "React Testing Library",
        "Unit Testing",
        "Functional Testing",
        "Test Coverage",
      ],
    },
    {
      category: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Vite",
        "Webpack",
        "Postman",
        "NPM",
      ],
    },
  ],

  experience: [
    {
      company: "DAPS Software",
      role: "Frontend Developer",
      period: "December 2024 - Present",
      location: "Mumbai, India",
      bullets: [
        "Built and maintained scalable single-page applications (SPAs) using React and Angular, participating in daily standups with the team to align on task priorities and deliver production-ready features on schedule.",
        "Implemented automated frontend testing (Jest, Vitest, React Testing Library) covering component rendering, user interactions, and validation flows.",
        "Ensured cross-browser and cross-platform compatibility through responsive design and manual testing across devices, while integrating REST APIs, handling form validation and error handling, and collaborating with backend teams on feature delivery.",
      ],
    },
    {
      company: "DAPS Software",
      role: "Frontend Developer Intern",
      period: "May 2024 - November 2024",
      location: "Mumbai, India",
      bullets: [
        "Built UI components in Angular and React, fixing UI bugs and improving performance and usability.",
        "Wrote unit tests using Jest and React Testing Library, and used Git for version control in a collaborative team workflow.",
      ],
    },
    {
      company: "Acuity Educare Pvt. Ltd",
      role: "Web Developer Intern",
      period: "June 2023 - December 2023",
      location: "Mumbai, India",
      bullets: [
        "Completed a 6-month training-based internship program focused on web development fundamentals. Attended training sessions, learned programming languages, and completed assigned project tasks.",
        "Participated in weekly follow-up meetings and gained practical experience in web development.",
      ],
    },
  ],

  projects: [
    {
      id: "quickbite",
      title: "QuickBite – Online Restaurant Platform",
      tagline: "Full-stack food ordering platform with real-time delivery tracking & automated payments",
      description: "Architected a full-stack restaurant and food delivery system featuring role-based access control, Stripe payment checkout, and live rider routing.",
      bullets: [
        "Architected a full-stack food delivery platform using React, TypeScript, Node.js, and MongoDB, integrating Google OAuth 2.0 / OpenID Connect SSO with a 4-tier RBAC system (User, Restaurant Owner, Rider, Admin) and Stripe Checkout webhooks with pricing snapshotting for idempotent order processing.",
        "Engineered live delivery tracking using Leaflet interactive maps, dynamic polyline routing, and Socket.IO for real-time rider-to-customer dispatch; optimized API response times via Redis caching & rate limiting, structured persistent state with Zustand, and implemented automated test suites using Jest & React Testing Library.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Zustand",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "Socket.IO",
        "Redis",
        "Tailwind CSS",
      ],
      liveUrl: "https://quickbite-ogw0.onrender.com/",
      githubUrl: "https://github.com/Abhipawar1312/QuickBite",
      isLivePlaceholder: false,
      isGithubPlaceholder: false,
    },
    {
      id: "jobhive",
      title: "JobHive – AI-Powered Job Portal Platform",
      tagline: "Recruitment suite with multimodal AI resume parsing, live chat & Kanban pipeline",
      description: "Engineered an AI-driven job portal incorporating Google Gemini AI ATS parsing, real-time candidate messaging, and rich application state tracking.",
      bullets: [
        "Engineered an AI-driven recruitment engine integrating Google Gemini AI & pdf-parse to automate multimodal PDF resume ATS parsing, candidate skill-gap scoring, and job description drafting, scaling throughput with Redis caching and hardening endpoints via IP rate limiting, Helmet, express-mongo-sanitize, & Zod.",
        "Developed real-time recruiter-candidate live chat and push alert feeds with Socket.io, integrating an interactive dual-mode Kanban applicant tracking board with interview scheduling, a visual 5-stage candidate application stepper, and Recharts analytics managed via Redux Toolkit & Redux Persist.",
      ],
      techStack: [
        "React.js",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Google Gemini AI",
        "Socket.io",
        "Redis",
        "Tailwind CSS",
      ],
      liveUrl: "https://jobhive-m79b.onrender.com/",
      githubUrl: "https://github.com/Abhipawar1312/JobHive",
      isLivePlaceholder: false,
      isGithubPlaceholder: false,
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Information Technology (BSC.IT)",
      institution: "Sheth N.K.T.T. College of Commerce & Sheth L.T.T. College of Arts",
      location: "Thane West, Mumbai",
      year: "2023",
      score: "CGPA: 8.97",
    },
    {
      degree: "Class XII (H.S.C)",
      institution: "New English School & Junior College",
      location: "Thane West, Mumbai",
      year: "2020",
      score: "72%",
    },
    {
      degree: "Class X (S.S.C)",
      institution: "SMT S.M.J English High School & Junior College",
      location: "Manorama Nagar, Thane West, Mumbai",
      year: "2018",
      score: "67.60%",
    },
  ],

  certificates: [
    {
      title: "Full Stack Developer",
      issuer: "More Academy",
      date: "Feb 2024",
    },
    {
      title: "Web Developer Internship Certificate",
      issuer: "Acuity Educare Pvt. Ltd",
      date: "Dec 2023",
    },
  ],

  languages: ["English", "Hindi", "Marathi"],
};
