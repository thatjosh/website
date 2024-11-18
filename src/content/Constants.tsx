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
      "Built a fullstack service that executes automated code transformations by manipulating the AST via Java Parser. This is executed while the user is onboarding via multi-step wizard on the frontend, written in TypeScript and React.",
    icon: <Amazon className="h-12 w-12" />,
  },
  {
    id: 1,
    company: "Google",
    title: "Software Engineer Intern",
    location: "Warsaw, Poland",
    date: "JUN - SEP 2023",
    description:
      "Built an automation tool, which includes a dashboard, data pipelines and Python scripts that modifies integration test configurations based on memory utilisation.",
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

export const DELAY_FOR_CONTENT_SECTION = 800;

export const DELAY_PER_ITEM = 400; // used for each item in the content section

export const PROJECT_CONTENT: Project[] = [
  {
    date: "JUN 2024",
    title: "Logistics Regression Coursework",
    description:
      "Fitted a logistic regression model to identify and interpret significant relationships between variables. This submission was awarded the highest mark (93).",
    attachments: [
      {
        title: "Report",
        link: "https://github.com/thatjosh/st211-individual-project/blob/main/22757_ST211_individual.pdf",
      },
      {
        title: "Code",
        link: "https://github.com/thatjosh/st211-individual-project/tree/main",
      },
    ],
    tags: ["Logistic Regression", "Machine Learning", "Statistics"],
  },
  {
    date: "SEP 2022",
    title: "Geolocation Security Web Client",
    description:
      "Hacked together a geolocation tracking frontend to manage security issues on a city-wide level over a weekend for a hackathon.",
    link: "https://geolocation-security-web-client.netlify.app",
    tags: ["React", "Typescript", "Google Maps API"],
  },
  {
    date: "AUG 2022",
    title: "Ecotect – Social Enterprise Landing Page",
    description:
      "Built an operational ecommerce site (home, store & product pages) with responsive UI for a social enterprise in 2 weeks.",
    link: "https://ecotect-web-client-archive.netlify.app/",
    tags: ["React", "Typescript", "Figma"],
  },
];
