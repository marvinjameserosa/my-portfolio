"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Sparkles,
  UserCircle,
  Zap,
  FolderOpen,
  Trophy,
  Heart,
  MessageCircle,
  Sun,
  Moon,
  MoreHorizontal,
} from "lucide-react";

export default function TouchBarSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "leadership",
        "contact",
      ];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Handle case when at the bottom of the page
      if (scrollPosition + windowHeight >= document.body.offsetHeight - 10) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "hero";
      for (const sectionId of sections) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          if (scrollPosition >= sectionTop - windowHeight / 2) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsExpanded(false);
  };

  const navItems = [
    {
      id: "hero",
      icon: <Sparkles className="h-5 w-5" />,
      label: "Home",
      onClick: () => scrollToSection("hero"),
    },
    {
      id: "about",
      icon: <UserCircle className="h-5 w-5" />,
      label: "About",
      onClick: () => scrollToSection("about"),
    },
    {
      id: "skills",
      icon: <Zap className="h-5 w-5" />,
      label: "Skills",
      onClick: () => scrollToSection("skills"),
    },
    {
      id: "projects",
      icon: <FolderOpen className="h-5 w-5" />,
      label: "Projects",
      onClick: () => scrollToSection("projects"),
    },
    {
      id: "experience",
      icon: <Trophy className="h-5 w-5" />,
      label: "Experience",
      onClick: () => scrollToSection("experience"),
    },
    {
      id: "leadership",
      icon: <Heart className="h-5 w-5" />,
      label: "Leadership",
      onClick: () => scrollToSection("leadership"),
    },
    {
      id: "contact",
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Contact",
      onClick: () => scrollToSection("contact"),
    },
  ];

  return (
    <>
      {/* MacBook Touch Bar Style Left Sidebar - Desktop Only */}
      <div className="hidden lg:fixed lg:left-0 lg:top-0 lg:w-0 lg:h-screen lg:flex lg:items-center z-50 pointer-events-none">
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="ml-6 pointer-events-auto"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div className="bg-black/30 dark:bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/10 dark:border-white/15 shadow-2xl overflow-hidden">
            <div className="flex flex-col">
              {/* Navigation Items */}
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={item.onClick}
                  className={`relative flex items-center p-4 transition-all duration-300 group ${
                    activeSection === item.id
                      ? "bg-white/20 dark:bg-white/15"
                      : "hover:bg-white/10 dark:hover:bg-white/8"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Icon Container */}
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-white/80 dark:text-white/70 group-hover:bg-white/15 group-hover:text-white/95"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Label - appears on hover or expansion */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.span
                        initial={{ opacity: 0, x: -10, width: 0 }}
                        animate={{ opacity: 1, x: 0, width: "auto" }}
                        exit={{ opacity: 0, x: -10, width: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="ml-3 text-white/90 dark:text-white/80 font-medium text-sm whitespace-nowrap"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Active Indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-l-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}

              {/* Separator */}
              <div className="mx-4 my-2 h-px bg-white/20 dark:bg-white/30" />

              {/* Theme Toggle */}
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center p-4 hover:bg-white/10 dark:hover:bg-white/8 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl text-white/80 dark:text-white/70 group-hover:bg-white/15 group-hover:text-white/95 transition-all duration-300">
                  {mounted && theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, x: -10, width: 0 }}
                      animate={{ opacity: 1, x: 0, width: "auto" }}
                      exit={{ opacity: 0, x: -10, width: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="ml-3 text-white/90 dark:text-white/80 font-medium text-sm whitespace-nowrap"
                    >
                      {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.aside>
      </div>

      {/* Mobile Navigation - Bottom Fixed */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-auto">
        <div className="relative">
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute bottom-full right-0 mb-2 w-max"
              >
                <div className="bg-black/30 dark:bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/10 dark:border-white/15 shadow-2xl overflow-hidden p-2 flex flex-col items-center">
                  {/* Rest of the nav items */}
                  {navItems.slice(5).map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => {
                        item.onClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full relative flex items-center justify-center p-3 my-1 transition-all duration-300 rounded-xl ${
                        activeSection === item.id
                          ? "bg-white/20 dark:bg-white/15"
                          : "hover:bg-white/10 dark:hover:bg-white/8"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${
                          activeSection === item.id
                            ? "bg-primary text-primary-foreground shadow-lg"
                            : "text-white/80 dark:text-white/70"
                        }`}
                      >
                        {item.icon}
                      </div>
                    </motion.button>
                  ))}
                  {/* Separator */}
                  <div className="my-1 w-full h-px bg-white/20 dark:bg-white/30" />
                  {/* Theme toggle in menu */}
                  <motion.button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="w-full flex items-center justify-center p-3 my-1 hover:bg-white/10 dark:hover:bg-white/8 transition-all duration-300 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg text-white/80 dark:text-white/70 transition-all duration-300">
                      {mounted && theme === "dark" ? (
                        <Sun className="h-5 w-5" />
                      ) : (
                        <Moon className="h-5 w-5" />
                      )}
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="bg-black/30 dark:bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/10 dark:border-white/15 shadow-2xl overflow-hidden">
            <div className="flex items-center px-2 py-2">
              {navItems.slice(0, 5).map((item) => (
                <motion.button
                  key={item.id}
                  onClick={item.onClick}
                  className={`relative flex items-center justify-center p-3 mx-1 transition-all duration-300 rounded-xl ${
                    activeSection === item.id
                      ? "bg-white/20 dark:bg-white/15"
                      : "hover:bg-white/10 dark:hover:bg-white/8"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-white/80 dark:text-white/70"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Active Indicator for Mobile */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="mobileActiveIndicator"
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}

              {/* More button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`relative flex items-center justify-center p-3 mx-1 transition-all duration-300 rounded-xl ${
                  isMobileMenuOpen
                    ? "bg-white/20 dark:bg-white/15"
                    : "hover:bg-white/10 dark:hover:bg-white/8"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 text-white/80 dark:text-white/70`}
                >
                  <MoreHorizontal className="h-5 w-5" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
