import { Globe, Box, BookOpen } from "lucide-react";

export const projects = [
  {
    title: "ChronoSpace",
    description: [
      "Developed a blogging platform with JWT and Google OAuth authentication",
      "Integrated AWS S3 for scalable image storage and RESTful APIs",
      "Created nested comments/replies with real-time notifications",
      "Enhanced API performance with pagination and MongoDB aggregation",
      "Built responsive UI with TailwindCSS and React",
    ],
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "JWT",
      "TailwindCSS",
      "Google OAuth",
    ],
    github: "https://github.com/yourusername/chronospace",
    demo: "https://chronospace.netlify.app",
    icon: Globe,
  },
  {
    title: "MediaFlow",
    description: [
      "Developed a YouTube-inspired backend using Node.js and Express.js",
      "Implemented authentication with JWT and bcrypt",
      "Integrated Cloudinary for media storage",
      "Utilized MongoDB with Mongoose for data persistence",
      "Designed comprehensive RESTful APIs",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Mongoose"],
    github: "https://github.com/Ashparshp/MediaFlow",
    icon: Box,
  },
  {
    title: "Library Management System",
    description: [
      "Built a full-stack library system with Golang (Gin, GORM) and React",
      "Designed RESTful APIs for seamless frontend-backend communication",
      "Integrated PostgreSQL and MongoDB Atlas for efficient data handling",
      "Implemented comprehensive library management features",
    ],
    tech: ["Go", "React", "PostgreSQL", "MongoDB", "Gin", "GORM"],
    github: "https://github.com/Ashparshp/LibraryReactGo",
    icon: BookOpen,
  },
];
