"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Globe,
  FileText,
  Instagram,
  Youtube,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const links = [
  {
    title: "Portfolio Website",
    url: "/",
    icon: Globe,
    description: "View my full portfolio",
  },
  {
    title: "GitHub",
    url: "https://github.com/marvinjameserosa",
    icon: Github,
    description: "Check out my code",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/marvinjameserosa",
    icon: Linkedin,
    description: "Connect professionally",
  },
  {
    title: "Email Me",
    url: "mailto:contact@example.com",
    icon: Mail,
    description: "Get in touch directly",
  },
  {
    title: "Twitter / X",
    url: "https://twitter.com/username",
    icon: Twitter,
    description: "Follow my thoughts",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/username",
    icon: Instagram,
    description: "See my visual content",
  },
  {
    title: "YouTube",
    url: "https://youtube.com/@username",
    icon: Youtube,
    description: "Watch my videos",
  },
  {
    title: "Resume / CV",
    url: "/cv.pdf",
    icon: FileText,
    description: "Download my resume",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start py-12 px-4">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-6 left-6"
      >
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
      </motion.div>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-8"
      >
        <Avatar className="h-24 w-24 mb-4 ring-4 ring-primary/20">
          <AvatarImage src="/avatar.jpg" alt="Marvin James Erosa" />
          <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
            MJ
          </AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold">Marvin James Erosa</h1>
        <p className="text-muted-foreground text-center max-w-xs mt-2">
          Technical Leader | Community Builder | Hardware Engineer
        </p>
      </motion.div>

      {/* Links Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-md space-y-3"
      >
        {links.map((link) => (
          <motion.div key={link.title} variants={item}>
            <a
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block"
            >
              <Button
                variant="outline"
                className="w-full h-auto py-4 px-6 justify-start gap-4 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <link.icon className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="font-medium">{link.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {link.description}
                  </p>
                </div>
              </Button>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 text-sm text-muted-foreground"
      >
        Built with Next.js
      </motion.p>
    </div>
  );
}
