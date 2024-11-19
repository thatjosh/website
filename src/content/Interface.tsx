import { ReactNode } from "react";

// Different reveal speed for different text lengths
export enum RevealSpeed {
  VeryFast = 5, // For paragraphs
  Fast = 20, // For short descriptions
  Moderate = 50, // For heading or Subheading
  ModeratelySlow = 100,
  Slow = 150, // For Emphasis
}

export enum TabOption {
  WorkExperience = "workExperience",
  Projects = "projects",
}

export interface WorkExperience {
  id: number;
  company: string;
  title: string;
  location: string;
  date: string;
  description: string;
  icon: ReactNode;
}

export interface Project {
  date: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  attachments?: Attachments[];
}

export interface Attachments {
  link: string;
  title: string;
}
