import { Globe, Box, Cpu } from "lucide-react";

export const projects = [
  {
    title: "ChronoSpace",
    description: [
      "Built a blogging platform with JWT and Google OAuth authentication",
      "Integrated AWS S3 for scalable image storage",
      "Implemented nested comments and real-time notifications",
    ],
    tech: ["React", "Node.js", "MongoDB", "AWS S3", "JWT"],
    github: "https://github.com/yourusername/chronospace",
    demo: "https://chronospace.netlify.app",
    icon: Globe,
  },
  {
    title: "MediaFlow",
    description: [
      "Created a YouTube-inspired backend system",
      "Implemented authentication with JWT and bcrypt",
      "Utilized MongoDB with Mongoose for data management",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Ashparshp/MediaFlow",
    icon: Box,
  },
  {
    title: "Library Management",
    description: [
      "Built a full-stack library system with Golang and React",
      "Designed RESTful APIs with Gin framework",
      "Integrated PostgreSQL and MongoDB databases",
    ],
    tech: ["Go", "React", "PostgreSQL", "MongoDB"],
    github: "https://github.com/Ashparshp/LibraryReactGo",
    icon: Cpu,
  },
];