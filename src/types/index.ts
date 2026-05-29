// Profile Types
export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  summary: string;
  resumeUrl?: string;
  avatarUrl?: string;
}

// Skill Types
export interface Skill {
  name: string;
  icon?: string;
  level?: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

// Experience Types
export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

// Project Types
export interface Project {
  id: string;
  title: string;
  client: string;
  role: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  featured: boolean;
  duration: string;
}

// Education Types
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  year: string;
  location?: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
}
