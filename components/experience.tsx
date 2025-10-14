"use client";

import { motion } from "framer-motion";
import ExperienceCarousel from "@/components/experience-carousel";

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
      company: "Tomeku (Freelance)",
      position: "Principal Software Engineer",
      period: "Jun. 2025 – Present",
      description:
        "Architecting and deploying end-to-end technical ecosystems for B2B clients, from core infrastructure to the application layer.",
      technologies: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Okta",
        "Python",
        "Proxmox VE",
        "Network Architecture",
      ],
      responsibilities: [
        "Architected and deployed scalable, end-to-end technical ecosystems for B2B clients.",
        "Engineered and provisioned complete IT infrastructures from the ground up, including identity management and collaboration suites.",
        "Designed and maintained resilient network infrastructures to support high-throughput, real-time data ingestion.",
      ],
    },
    {
      company: "Accenture",
      position: "Package App Development Associate Intern",
      period: "Jul. 2024 – Sep. 2024",
      description:
        "Building automated workflow solutions and data pipelines to streamline enterprise-level operations.",
      technologies: [
        "Microsoft Power Platform",
        "Power BI",
        "Power Automate",
        "Azure SQL",
        "Office 365",
      ],
      responsibilities: [
        "Developed automated solutions on the Microsoft Power Platform to streamline critical project workflows.",
        "Engineered and executed comprehensive security and integration testing strategies across the Office 365 environment.",
        "Implemented robust backend data pipelines to Azure SQL, enforcing high data integrity through automated validation rules.",
      ],
    },
    {
      company: "Rhenus Logistics",
      position: "IT Infrastructure Specialist Intern",
      period: "Aug. 2023 – Dec. 2023",
      description:
        "Managing and securing the core network infrastructure and identity systems for a global logistics leader.",
      technologies: [
        "Active Directory",
        "Okta",
        "LAN/WAN Architecture",
        "Network Security",
        "IT Asset Management",
      ],
      responsibilities: [
        "Maintained the reliability and performance of mission-critical LAN/WAN infrastructure to support continuous logistics operations.",
        "Administered user lifecycle and system access controls using Active Directory and Okta to enforce security and data governance.",
        "Oversaw the complete IT asset lifecycle, ensuring operational readiness and supporting strategic capacity planning.",
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
            Connecting the dots of my professional journey.
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
