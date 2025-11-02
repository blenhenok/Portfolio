export interface Project {
  title: string;
  image: string;
  link: string;
  github: string;
  description: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "Chat App",
    image: "/api/placeholder/400/250",
    link: "#",
    github: "https://github.com/blenhenok/Chat-App",
    description: "Real-time messaging application with instant notifications",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    title: "3D Virtual Gallery",
    image: "/api/placeholder/400/250",
    link: "#",
    github: "https://github.com/blenhenok/AURA---Virtual-Gallery",
    description:
      "Immersive 3D virtual art gallery with interactive exhibitions",
    techStack: ["Three.js", "React", "WebGL", "Blender"],
  },
  {
    title: "Note App",
    image: "/api/placeholder/400/250",
    link: "#",
    github: "#",
    description: "Feature-rich note-taking application",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    title: "Restaurant Website",
    image: "/api/placeholder/400/250",
    link: "#",
    github: "https://github.com/blenhenok/Chercher",
    description: "Modern restaurant website",
    techStack: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Movie Website",
    image: "/api/placeholder/400/250",
    link: "#",
    github: "https://github.com/blenhenok/Movie-Website",
    description: "Movie database with reviews, ratings, and recommendations",
    techStack: ["React", "TMDB API", "Firebase", "Tailwind CSS"],
  },
  {
    title: "ERP System",
    image: "/api/placeholder/400/250",
    link: "#",
    github: "#",
    description: "Enterprise Resource Planning system for business management",
    techStack: ["Java", "Spring Boot", "React", "MySQL"],
  },
];
