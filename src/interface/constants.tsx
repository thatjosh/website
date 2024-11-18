import { Project, WorkExperience } from "./Interface";
import GuruLab from "../assets/gurulab.svg?react";
import Google from "../assets/google.svg?react";
import Amazon from "../assets/amazon.svg?react";

export const WORK_EXPERIENCE_CONTENT: WorkExperience[] = [
  {
    id: 2,
    company: "Amazon",
    title: "Software Engineer Intern",
    location: "London, UK",
    date: "JUN - SEP 2024",
    description:
      "Built a multi-step frontend onboarding with TypeScript and React. This flow integrates with a service-oriented Java backend that executes automated code transformation using Java AST parser while the user is onboarding.",
    icon: <Amazon className="h-12 w-12" />,
  },
  {
    id: 1,
    company: "Google",
    title: "Software Engineer Intern",
    location: "Warsaw, Poland",
    date: "JUN - SEP 2023",
    description:
      "Built an automation tool, which includes a dashboard, data pipelines and Python scripts that modifies integration test configurations based on memory utilization.",
    icon: <Google className="h-12 w-12" />,
  },
  {
    id: 0,
    company: "GuruLab",
    title: "Software Engineer Intern",
    location: "Kuala Lumpur, Malaysia",
    date: "MAR - SEP 2022",
    description:
      "Worked on 3 web / mobile projects (student, tutor, and admin-panel applications).",
    icon: <GuruLab className="h-12 w-12" />,
  },
];

export const ON_LOAD_DELAY_FOR_CONTENT_SECTION = 2000;

export const DELAY_FOR_CONTENT_SECTION = 500;

export const PROJECT_CONTENT: Project[] = [
  {
    title: "Geolocation Security Web Client",
    description:
      "Hacked together a geolocation tracking frontend to manage security issues on a city-wide level over a weekend.",
    link: "https://geolocation-security-web-client.netlify.app",
    tags: ["React", "Typescript", "Google Maps API"],
  },
];
