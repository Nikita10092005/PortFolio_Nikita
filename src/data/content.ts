import { SkillCategory, ExperienceItem, ProjectItem, EducationItem } from "@/types";

export const profile = {
  name: "Nikita Kalal",
  role: "Full Stack Developer",
  roles: ["Full Stack Developer", "Problem Solver", "Creative Engineer"],
  location: "Vapi, Gujarat, IN",
  email: "nkalal733@gmail.com",
  phone: "+91 91040 12487",
  phoneRaw: "+919104012487",
  github: "https://github.com/Nikita10092005",
  githubUser: "Nikita10092005",
  lede:
    "A Web Development student building real, working software — from e-commerce platforms to translator apps — with React, PHP and MySQL as my instruments of choice.",
  about: [
    "Motivated and endlessly curious, I'm a Web Development student who learns by building. Every project on this page — the translators, the storefronts, the quizzes — started as an unfamiliar problem I decided to solve anyway.",
    "I work across the stack: React and JavaScript on the front, PHP and MySQL underneath, MongoDB when the data gets less structured. I care more about whether the thing actually works than whether it looks impressive in a slide deck.",
    "What sets me apart isn't years of experience — it's the rate I close the gap. Two internships, five shipped projects, and a habit of finishing what I start.",
  ],
  languages: ["English", "Hindi", "Marathi"],
};

export const stats = [
  { label: "Years Learning", value: 3 },
  { label: "Projects Shipped", value: 5 },
];

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    index: "01",
    items: [
      { name: "HTML & CSS", level: "Advanced", percent: 92 },
      { name: "JavaScript", level: "Advanced", percent: 85 },
      { name: "React.js", level: "Proficient", percent: 80 },
      { name: "Angular", level: "Working", percent: 55 },
    ],
  },
  {
    title: "Backend",
    index: "02",
    items: [
      { name: "PHP", level: "Advanced", percent: 85 },
      { name: "ASP.NET", level: "Working", percent: 50 },
      { name: "VB.NET", level: "Working", percent: 48 },
      { name: "REST APIs", level: "Proficient", percent: 75 },
    ],
  },
  {
    title: "Database",
    index: "03",
    items: [
      { name: "MySQL", level: "Advanced", percent: 85 },
      { name: "MongoDB", level: "Working", percent: 55 },
    ],
  },
  {
    title: "Languages",
    index: "04",
    items: [
      { name: "JavaScript", level: "Advanced", percent: 85 },
      { name: "PHP", level: "Advanced", percent: 85 },
      { name: "HTML/CSS", level: "Advanced", percent: 92 },
    ],
  },
  {
    title: "Tools",
    index: "05",
    items: [
      { name: "Git & GitHub", level: "Proficient", percent: 78 },
      { name: "VS Code", level: "Advanced", percent: 90 },
    ],
  },
  {
    title: "Deploy",
    index: "06",
    items: [
      { name: "Netlify", level: "Proficient", percent: 80 },
      { name: "GitHub Pages", level: "Proficient", percent: 75 },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Web Development Intern",
    company: "Tech Fellow's — Vapi",
    duration: "3 Months · Certified",
    points: [
      "Developed full-stack web applications using React.js, JavaScript, HTML, CSS, and GitHub.",
      "Built an E-commerce Website, a Food Delivery App, a Movie App, and a Quiz Application.",
    ],
    tags: ["React.js", "JavaScript", "HTML/CSS", "GitHub"],
  },
  {
    role: "Web Development Intern",
    company: "Enjay IT Solutions — Bhilad",
    duration: "3 Months · Certified",
    points: [
      "Developed responsive web applications using PHP, React.js, and MySQL.",
      "Built real-world projects, including a Google Translator App and a Blood Connect Portal.",
    ],
    tags: ["PHP", "React.js", "MySQL"],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "onecart",
    title: "OneCart.com",
    category: "fullstack",
    featured: true,
    description:
      "A full-stack e-commerce website with product listing, user interaction, and dynamic backend integration.",
    tags: ["React.js", "Full Stack"],
    links: [
      { label: "GitHub", href: "https://github.com/Nikita10092005/OneCart.com-frontend" },
      { label: "Live Demo", href: "https://onecart-com.onrender.com" },
    ],
  },
  {
    id: "cravehub",
    title: "CraveHub",
    category: "fullstack",
    description: "A food delivery website with a responsive UI, deployed and hosted via GitHub / Netlify.",
    tags: ["HTML/CSS", "JavaScript"],
    links: [{ label: "Live Demo", href: "https://yourcravehub.netlify.app" }],
  },
  {
    id: "movie",
    title: "Movie Navigator",
    category: "react",
    description: "A React application for dynamic movie search, built with reusable components and props.",
    tags: ["React.js"],
    links: [{ label: "Live Demo", href: "https://cinehub-react.netlify.app" }],
  },
  {
    id: "quiz",
    title: "Quiz Application",
    category: "frontend",
    description: "An interactive quiz app with real-time score tracking, built in vanilla JavaScript and the DOM.",
    tags: ["JavaScript", "DOM"],
    links: [{ label: "Live Demo", href: "https://innteractivequizapp.netlify.app" }],
  },
  {
    id: "nk",
    title: "NK Creation",
    category: "frontend",
    description: "A fully responsive static website designed and built with hand-crafted HTML and CSS.",
    tags: ["HTML", "CSS"],
    links: [{ label: "Live Demo", href: "https://nkcreations.netlify.app" }],
  },
];

export const education: EducationItem[] = [
  {
    year: "2023 — 2026",
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Veer Narmad South Gujarat University (VNSGU)",
    description:
      "Coursework: Data Structures, Database Management Systems, Web Development, Fullstack Development. Final year project: full e-commerce website development.",
  },
  {
    year: "2023",
    degree: "Higher Secondary Certificate (HSC)",
    school: "Maharashtra State Board of Secondary & Higher Secondary Education",
    description:
      "Specialization in Information Technology and Commerce, with foundations in Accounting, Economics, and Business Studies.",
  },
  {
    year: "2021",
    degree: "Secondary School Certificate (SSC)",
    school: "Maharashtra State Board of Secondary & Higher Secondary Education",
    description: "Completed secondary education under the Maharashtra State Board.",
  },
];

export const achievements = {
  stats: [
    { value: 1, label: "Advanced Excel Gold Medal" },
    { value: 5, label: "Live Projects" },
    { value: 2, label: "Certified Internships" },
  ],
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];
