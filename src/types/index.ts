export type ProjectCategory = "All" | "Frontend" | "CLI" | "Dashboard";

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  category: Exclude<ProjectCategory, "All">[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}
