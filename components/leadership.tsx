"use client";

import { motion } from "framer-motion";
import LeadershipCarousel from "./leadership-carousel";

type Activity = {
  title: string;
  organization: string;
  period: string;
  type: "volunteer" | "leadership" | "award" | "community";
  description: string;
  impact?: string;
  location?: string;
  skills?: string[];
  icon: "award" | "users" | "heart" | "calendar";
  image?: string;
  imageAlt?: string;
};

export default function Leadership() {
  const activities: Activity[] = [
    {
      title: "Volunteer Software Developer",
      organization: "Code for Good Philippines",
      period: "2021 - Present",
      type: "volunteer",
      description:
        "Developing web applications for non-profit organizations to help them manage their operations and reach more beneficiaries.",
      impact:
        "Built platforms serving 500+ families in underserved communities",
      location: "Manila, Philippines",
      skills: ["React", "Node.js", "MongoDB", "Community Outreach"],
      icon: "heart",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop",
      imageAlt: "Team of volunteers working on computers",
    },
    {
      title: "Outstanding Young Developer Award",
      organization: "Philippine Software Industry Association",
      period: "2023",
      type: "award",
      description:
        "Recognized for innovative contributions to open-source projects and mentoring emerging developers in the tech community.",
      impact: "Mentored 20+ junior developers through bootcamp programs",
      skills: ["Mentorship", "Open Source", "Leadership"],
      icon: "award",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      imageAlt: "Award ceremony with developers",
    },
    {
      title: "Tech Lead - Digital Literacy Program",
      organization: "TechCorps Volunteers",
      period: "2022 - Present",
      type: "leadership",
      description:
        "Leading a team of volunteer developers to create educational platforms that teach basic computer skills to senior citizens.",
      impact: "Trained 200+ seniors in digital literacy across 5 communities",
      location: "Metro Manila",
      skills: ["Team Leadership", "Educational Technology", "UX Design"],
      icon: "users",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop",
      imageAlt: "Senior citizens learning to use computers",
    },
    {
      title: "Hackathon for Social Good Winner",
      organization: "DevCon Summit 2022",
      period: "Nov 2022",
      type: "award",
      description:
        "First place winner for developing a disaster preparedness mobile app that helps communities coordinate emergency response efforts.",
      impact: "App downloaded by 1,000+ users in disaster-prone areas",
      skills: ["React Native", "Real-time Systems", "Crisis Management"],
      icon: "award",
      image:
        "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=800&h=400&fit=crop",
      imageAlt: "Hackathon team presenting their project",
    },
    {
      title: "Open Source Maintainer",
      organization: "GitHub Community",
      period: "2020 - Present",
      type: "community",
      description:
        "Active maintainer of several open-source projects focused on developer tools and educational resources for Filipino developers.",
      impact: "Projects with 500+ stars and 50+ contributors globally",
      skills: ["Open Source", "Community Building", "Documentation"],
      icon: "users",
    },
    {
      title: "Youth Tech Ambassador",
      organization: "Department of Science and Technology",
      period: "2021 - 2023",
      type: "leadership",
      description:
        "Represented young Filipino developers in government initiatives promoting STEM education and digital transformation.",
      impact: "Spoke at 10+ events reaching 2,000+ students nationwide",
      location: "Philippines",
      skills: ["Public Speaking", "STEM Advocacy", "Policy Development"],
      icon: "calendar",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop",
      imageAlt: "Speaking at a tech conference to young developers",
    },
  ];

  return (
    <section
      id="leadership"
      className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leadership & Community
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond coding, I&apos;m passionate about giving back to the
            community and developing future tech leaders
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <LeadershipCarousel activities={activities} />
        </motion.div>
      </div>
    </section>
  );
}
