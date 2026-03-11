import type { Project, NavLink, SkillCategory } from "../types/index";

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
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "Short description here",
    techStack: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/Cat-Div7",
  },
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
      { name: "Figma", icon: "PenTool" },
      { name: "npm", icon: "Package" },
      { name: "Vite", icon: "Zap" },
      { name: "GitHub", icon: "Github" },
    ],
  },
  {
    title: "Learning",
    skills: [
      { name: "Node.js", icon: "Server" },
      { name: "Jest", icon: "Container" },
      { name: "REST APIs", icon: "Webhook" },
    ],
  },
];
