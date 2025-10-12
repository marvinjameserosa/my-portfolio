"use client";

import { motion } from "framer-motion";
import ExperienceCarousel from "./experience-carousel";

type Experience = {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
};

export default function Experience() {
  const experiences: Experience[] = [
    {
      company: "TechInnovate Solutions",
      position: "Senior Full-Stack Developer",
      period: "Jan 2022 - Present",
      description:
        "Leading development of enterprise SaaS platforms for financial services clients.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "AWS",
      ],
      responsibilities: [
        "Architected and implemented scalable microservices architecture",
        "Led a team of 5 developers using Agile methodologies",
        "Optimized application performance, reducing load times by 40%",
        "Implemented CI/CD pipelines with GitHub Actions and AWS",
        "Collaborated with UX designers to create intuitive user interfaces",
      ],
    },
    {
      company: "DataFlow Systems",
      position: "Full-Stack Developer",
      period: "Mar 2020 - Dec 2021",
      description:
        "Developed data visualization and analytics platforms for business intelligence.",
      technologies: [
        "React",
        "Express.js",
        "MongoDB",
        "D3.js",
        "GraphQL",
        "Docker",
      ],
      responsibilities: [
        "Built responsive dashboards with real-time data visualization",
        "Developed RESTful and GraphQL APIs for data retrieval and manipulation",
        "Implemented authentication and authorization systems",
        "Optimized database queries for large datasets",
        "Participated in code reviews and mentored junior developers",
      ],
    },
    {
      company: "WebSphere Innovations",
      position: "Frontend Developer",
      period: "Jun 2018 - Feb 2020",
      description:
        "Created interactive web applications for e-commerce and media clients.",
      technologies: ["React", "Redux", "JavaScript", "SASS", "Webpack", "Jest"],
      responsibilities: [
        "Developed responsive and accessible user interfaces",
        "Implemented state management with Redux and Context API",
        "Created reusable component libraries",
        "Wrote unit and integration tests with Jest and React Testing Library",
        "Collaborated with backend developers to integrate APIs",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 md:px-6 lg:px-8 bg-muted/50 scroll-mt-16"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey building real-world applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ExperienceCarousel experiences={experiences} />
        </motion.div>
      </div>
    </section>
  );
}
