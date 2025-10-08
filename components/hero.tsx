"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Hide Spline logo
    const style = document.createElement("style");
    style.innerHTML = `
      #spline-logo {
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  if (!mounted) return null;

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // MODIFICATION HERE: Removed min-h-screen and used padding instead
    <section className="relative flex flex-col items-center justify-center pt-24 pb-16 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-100 dark:opacity-100" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto gap-8">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="text-left w-full md:w-1/2 space-y-4"
        >
          <div>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold tracking-tight"
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
                "Dream Engineer.",
                2000,
                "Community Architect.",
                2000,
                "AI Engineer.",
                2000,
                "Digital Guardian.",
                2000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              className="text-lg md:text-xl text-muted-foreground"
            />
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base text-muted-foreground leading-relaxed"
          >
            I believe the most powerful ideas are the ones that bring people
            together. My work is about engineering those dreams into reality by
            building intelligent, secure platforms where communities can thrive
            and create what's next.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-row gap-4 pt-4"
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
              onClick={() => window.open("/path-to-your/cv.pdf", "_blank")}
            >
              View Résumé
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:block w-full md:w-1/2 h-[400px] relative"
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
        className="mt-16"
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
