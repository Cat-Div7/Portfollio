import type { Project, NavLink, SkillCategory, Stat, ProjectCategory } from "../types/index";

export const navItems: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const typewriterWords: string[] = [
  "Frontend Developer",
  "Building for the web",
  "CLI Tool Builder",
  "Open Source Enthusiast",
];

export const stats: Stat[] = [
  { label: "Projects Built", value: "5", suffix: "+" },
  { label: "Years Learning", value: "1", suffix: "+" },
  { label: "Coffee", value: "∞", suffix: "" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "Code2" },
      { name: "TypeScript", icon: "FileCode" },
      { name: "JavaScript", icon: "Braces" },
      { name: "Tailwind CSS", icon: "Paintbrush" },
      { name: "HTML5", icon: "FileText" },
      { name: "CSS3", icon: "Palette" },
      { name: "Framer Motion", icon: "Sparkles" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "GitBranch" },
      { name: "VS Code", icon: "Terminal" },
      { name: "Vim/Neovim", icon: "SquareTerminal" },
      { name: "npm", icon: "Package" },
      { name: "Vite", icon: "Zap" },
      { name: "GitHub", icon: "Github" },
    ],
  },
  {
    title: "Learning",
    skills: [
      { name: "Node.js", icon: "Server" },
      { name: "Jest", icon: "FlaskConical" },
      { name: "REST APIs", icon: "Webhook" },
    ],
  },
];

export const filterCategories: ProjectCategory[] = [
  "All",
  "Frontend",
  "CLI",
  "Dashboard",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "muscle-config",
    description: "CLI tool that scaffolds React projects with configurable styling and architecture options.",
    techStack: ["TypeScript", "Node.js", "CLI"],
    githubUrl: "https://github.com/Cat-Div7/muscle-config",
    category: "CLI",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "This site — built from scratch with React, TypeScript and Framer Motion.",
    techStack: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    githubUrl: "https://github.com/Cat-Div7",
    liveUrl: "#",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description: "A responsive admin dashboard with data visualization, dark mode and modern UI components.",
    techStack: ["React", "JavaScript", "Pure CSS"],
    githubUrl: "https://github.com/Cat-Div7/Admin-Dashboard",
    liveUrl: "https://admin-dashboard-zeta-taupe.vercel.app/",
    category: "Dashboard",
  },
];

export const socialLinks = {
  github: "https://github.com/Cat-Div7",
  linkedin: "https://www.linkedin.com/in/omar-ashraf-132193356",
  email: "omarashraf11234@gmail.com",
};

export const terminalLines: string[] = [
  "$ cat about.txt",
  "",
  "Name: Omar",
  "Role: Frontend Developer → Full-Stack",
  "Location: Egypt 🌍 — Remote / On-site",
  "",
  "I build clean, accessible, and performant",
  "web applications with modern tools.",
  "",
  "Currently deepening my backend skills",
  "with Node.js, PostgreSQL, and APIs.",
  "",
  "$ _",
];
