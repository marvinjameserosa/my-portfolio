"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Server, Cpu, Cog, Globe, Cloud } from "lucide-react"; // Updated icons

type Skill = {
  name: string;
  proficiency: number;
};

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};

export default function Skills() {
  // Re-architected skill categories to reflect end-to-end capabilities
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "React & Next.js", proficiency: 90 },
        { name: "TypeScript", proficiency: 85 },
        { name: "HTML & CSS", proficiency: 95 },
        { name: "Tailwind CSS", proficiency: 85 },
      ],
    },
    {
      name: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Python (Flask, Pandas)", proficiency: 90 },
        { name: "Node.js (Express, Next.js API)", proficiency: 80 },
        { name: "REST APIs & GraphQL", proficiency: 85 },
        { name: "Authentication & Authorization", proficiency: 85 },
      ],
    },
    {
      name: "Cloud & Infrastructure",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "AWS, Azure, & Google Cloud", proficiency: 90 },
        { name: "Proxmox VE & Self-Hosting", proficiency: 85 },
        { name: "Linux & Windows Server", proficiency: 80 },
        { name: "Networking (LAN/WAN, DNS, Cloudflare)", proficiency: 85 },
      ],
    },
    {
      name: "DevOps & Automation",
      icon: <Cog className="h-6 w-6" />,
      skills: [
        { name: "CI/CD (GitHub Actions, Vercel)", proficiency: 85 },
        { name: "Bash & PowerShell Scripting", proficiency: 80 },
        { name: "Microsoft Power Platform", proficiency: 85 },
        { name: "Security (IAM, Okta, Firewalls)", proficiency: 90 },
      ],
    },
    {
      name: "Data & Databases",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Relational (Azure SQL, Cloud SQL)", proficiency: 85 },
        { name: "NoSQL (MongoDB, Firebase)", proficiency: 80 },
        { name: "ETL & Data Transformation", proficiency: 85 },
        { name: "Data Visualization (Power BI)", proficiency: 90 },
      ],
    },
    {
      name: "Hardware & Embedded Systems",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: "Robotics & Control Systems", proficiency: 85 },
        { name: "IoT System Architecture & Deployment", proficiency: 90 },
        { name: "Embedded Systems & Microcontrollers", proficiency: 85 },
        { name: "PCB Design & Prototyping", proficiency: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-6 lg:px-8 bg-muted/50 scroll-mt-16"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technical Toolkit
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            It&apos;s not a list of technologies. It&apos;s the right set of
            tools to architect and build insanely great products, from end to
            end.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full relative overflow-hidden">
                  {/* Animated background on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 pointer-events-none"
                  ></motion.div>

                  <CardContent className="p-6 relative">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 mb-6"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="p-2 rounded-full bg-primary/10 text-primary"
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                    </motion.div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + skillIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                            <motion.span
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.1 + skillIndex * 0.05 + 0.2,
                                type: "spring",
                                stiffness: 200,
                              }}
                              viewport={{ once: true }}
                              className="text-xs text-muted-foreground font-semibold"
                            >
                              {skill.proficiency}%
                            </motion.span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              transition={{
                                duration: 1,
                                delay: index * 0.1 + skillIndex * 0.05,
                                ease: "easeOut",
                              }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.02 }}
                              className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full relative overflow-hidden"
                            >
                              {/* Shimmer effect */}
                              <motion.div
                                animate={{
                                  x: ["-100%", "200%"],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  ease: "easeInOut",
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              ></motion.div>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
