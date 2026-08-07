export interface SkillItem {
  name: string;
  level: string;
  percent: number;
}

export interface SkillCategory {
  title: string;
  index: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  points: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "react" | "fullstack" | "frontend";
  featured?: boolean;
  description: string;
  tags: string[];
  links: { label: string; href: string | null }[];
}

export interface EducationItem {
  year: string;
  degree: string;
  school: string;
  description: string;
}
