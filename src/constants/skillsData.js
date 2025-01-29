import { Command, Cloud, Database } from "lucide-react";

export const skillCategories = [
  {
    title: "Backend & APIs",
    icon: Command,
    skills: ["Node.js", "Express", "REST", "GraphQL", "Prisma", "Go"],
    description: "Building scalable APIs and services",
  },
  {
    title: "Frontend & Cloud",
    icon: Cloud,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Next.js",
      "AWS",
    ],
    description: "Creating responsive UIs and cloud solutions",
  },
  {
    title: "Database & DevOps",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Docker", "Kubernetes"],
    description: "Managing data and infrastructure",
  },
];
