import { ReactNode } from "react";

// Different reveal speed for different text lengths
export enum RevealSpeed {
  VeryFast = 5, // Paragraphs
  Fast = 20, // Short descriptions
  Moderate = 50, // Title
  Slow = 150, // Emphasis
}

export enum TabOption {
  WorkExperience,
  Projects,
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
}
