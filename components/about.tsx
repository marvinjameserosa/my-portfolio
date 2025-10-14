"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

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

        <div className="grid md:grid-cols-2 gap-8 items-start">
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

          <div className="space-y-8">
            {/* Portrait Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative h-[280px] md:h-[320px]"
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
                        "linear-gradient(135deg, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.05) 100%)",
                        "linear-gradient(135deg, hsl(var(--primary) / 0.3) 0%, hsl(var(--primary) / 0.1) 100%)",
                        "linear-gradient(135deg, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.05) 100%)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0"
                  ></motion.div>

                  {/* Portrait Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 flex items-center justify-center pb-12"
                  >
                    <div className="relative w-44 h-44 md:w-52 md:h-52">
                      {/* Animated ring around portrait */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border-2 border-primary/30 border-dashed"
                      ></motion.div>

                      {/* Inner glowing ring */}
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-2 rounded-full bg-primary/10 blur-xl"
                      ></motion.div>

                      {/* Portrait Image */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl"
                      >
                        <Image
                          src="/portrait.jpg"
                          alt="Portrait"
                          fill
                          className="object-cover"
                          priority
                        />
                      </motion.div>

                      {/* Decorative corner elements */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/40 blur-md"
                      ></motion.div>
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                        className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-primary/40 blur-md"
                      ></motion.div>
                    </div>
                  </motion.div>

                  {/* Quote at bottom */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 right-0 p-4 text-center backdrop-blur-sm bg-background/80"
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      viewport={{ once: true }}
                      className="text-sm md:text-base font-medium italic"
                    >
                      &quot;The future isn&apos;t something you wait for.
                      It&apos;s something you build.&quot;
                    </motion.p>
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>

            {/* My Mission Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="relative overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, hsl(var(--primary) / 0.02) 100%)",
                        "linear-gradient(135deg, hsl(var(--primary) / 0.08) 0%, hsl(var(--primary) / 0.04) 100%)",
                        "linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, hsl(var(--primary) / 0.02) 100%)",
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0"
                  ></motion.div>

                  <CardContent className="relative p-6 md:p-8 text-center">
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
                      className="mb-4 inline-block"
                    >
                      <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                        <motion.svg
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-6 h-6 text-primary"
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
                      className="text-xl md:text-2xl font-bold mb-3"
                    >
                      My Mission
                    </motion.h3>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="w-12 h-0.5 bg-primary mx-auto mb-4"
                    ></motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      viewport={{ once: true }}
                      className="text-base md:text-lg leading-relaxed"
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

                    {/* Decorative quote marks */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.05 }}
                      transition={{ delay: 1.2 }}
                      viewport={{ once: true }}
                      className="absolute top-2 left-2 text-5xl md:text-6xl font-serif text-primary pointer-events-none"
                    >
                      &quot;
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.05 }}
                      transition={{ delay: 1.2 }}
                      viewport={{ once: true }}
                      className="absolute bottom-2 right-2 text-5xl md:text-6xl font-serif text-primary pointer-events-none"
                    >
                      &quot;
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
