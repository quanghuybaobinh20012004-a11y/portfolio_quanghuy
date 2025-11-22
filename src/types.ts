import { LucideIcon } from 'lucide-react';

export enum Category {
  ALL = 'All',
  WEB = 'Web',
  MOBILE = 'Mobile',
  DESIGN = 'Design',
  AI = 'AI',
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  category: Category;
  description: string;
  techStack: string[];
  imageUrl: string;
  fullDescription: string; // For the modal
  githubUrl?: string;
  demoUrl?: string;
  goal?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Programming Languages' | 'Frameworks & Libraries' | 'Tools & Platform' | 'Design' | 'Soft Skills';
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'experience';
  title: string; // Degree or Position
  organization: string; // School or Company
  period: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: string;
  content: string;
  imageUrl?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}