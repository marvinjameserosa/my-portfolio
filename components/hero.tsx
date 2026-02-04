"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-100 dark:opacity-100" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto gap-6 md:gap-8">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="text-center md:text-left w-full md:w-1/2 space-y-3 md:space-y-4 order-2 md:order-1"
        >
          <div>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground"
            >
              Hi, I&apos;m
            </motion.p>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Marvin James Erosa
            </motion.h1>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                "Technical Leader",
                2000,
                "Community Builder",
                2000,
                "Hardware Engineer",
                2000,
                "Security Strategist",
                2000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              className="text-base sm:text-lg md:text-xl text-muted-foreground"
            />
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0"
          >
            I believe the most powerful ideas are the ones that bring people
            together. My work is about engineering those dreams into reality by
            building intelligent, secure platforms where communities can thrive
            and create what&apos;s next.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center md:justify-start"
          >
            <Button
              className="rounded-full px-6"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See the Proof
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6"
              onClick={() => window.open("cv.pdf", "_blank")}
            >
              View Curicullum Vitae
            </Button>
          </motion.div>
        </motion.div>

        {/* Spline Robot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-[200px] sm:h-[280px] md:h-[400px] relative order-1 md:order-2"
        >
          <Spline
            scene="https://prod.spline.design/aaprX7evb-X9qAEU/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-8 md:mt-16"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={scrollToAbout}
        >
          <p className="text-sm text-muted-foreground">Learn More</p>
          <Button variant="ghost" size="icon" className="pointer-events-none">
            <div className="sr-only">Scroll Down</div>
            <ArrowDown className="h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
