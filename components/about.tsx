"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-lg mb-4"
                  >
                    I believe the most powerful things in the world happen at
                    the intersection of technology and humanity. It&apos;s not
                    about building systems; it’s about architecting ecosystems.
                    It&apos;s about connecting the dots between beautiful
                    engineering and the human experience. My entire journey has
                    been about finding that intersection.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-lg mb-4"
                  >
                    Technology, however, is just a tool. Its true power is in
                    empowering people. That’s why I build communities and mentor
                    the next generation of creators to invent the future. I’m
                    here to build the tools that will help others put their own
                    dent in the universe.
                  </motion.p>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 mt-6"
                  >
                    <motion.div
                      variants={badgeVariants}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                        variant="outline"
                        className="text-sm cursor-default"
                      >
                        Open Source Advocate
                      </Badge>
                    </motion.div>
                    <motion.div
                      variants={badgeVariants}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                        variant="outline"
                        className="text-sm cursor-default"
                      >
                        Full-Stack Innovator
                      </Badge>
                    </motion.div>
                    <motion.div
                      variants={badgeVariants}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                        variant="outline"
                        className="text-sm cursor-default"
                      >
                        Community Builder
                      </Badge>
                    </motion.div>
                    <motion.div
                      variants={badgeVariants}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                        variant="outline"
                        className="text-sm cursor-default"
                      >
                        Environmental Researcher
                      </Badge>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[400px]"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-full"
            >
              <Card className="h-full relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(135deg, hsl(var(--primary) / 0.3) 0%, hsl(var(--primary) / 0.1) 100%)",
                      "linear-gradient(135deg, hsl(var(--primary) / 0.4) 0%, hsl(var(--primary) / 0.15) 100%)",
                      "linear-gradient(135deg, hsl(var(--primary) / 0.3) 0%, hsl(var(--primary) / 0.1) 100%)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                ></motion.div>

                {/* Animated decorative circles */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-2xl"
                ></motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/20 blur-2xl"
                ></motion.div>

                <CardContent className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                  {/* Animated icon or decorative element */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.6,
                    }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-8 h-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </motion.svg>
                    </div>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
                  >
                    My Mission
                  </motion.h3>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="w-12 h-0.5 bg-primary mb-6"
                  ></motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="text-base md:text-lg leading-relaxed max-w-md"
                  >
                    To engineer{" "}
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                      viewport={{ once: true }}
                      className="font-semibold text-primary"
                    >
                      insanely great tools
                    </motion.span>{" "}
                    that empower creators, innovators, and builders to design
                    the future. My work is dedicated to building the platforms
                    and communities that enable other talented people to push
                    humanity forward.
                  </motion.p>

                  {/* Animated quote marks or decorative elements */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.1 }}
                    transition={{ delay: 1.2 }}
                    viewport={{ once: true }}
                    className="absolute top-4 left-4 text-6xl font-serif text-primary"
                  >
                    &quot;
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.1 }}
                    transition={{ delay: 1.2 }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 right-4 text-6xl font-serif text-primary"
                  >
                    &quot;
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
