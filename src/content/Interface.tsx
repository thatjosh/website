import { ReactNode } from "react";

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
  title: string;
  description: string;
  tags: string[];
  link?: string;
}
