"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Code,
  Server,
  Cloud,
  MapPin,
  Calendar,
} from "lucide-react";

type Experience = {
  company: string;
  position: string;
  period: string;
  type: "full-time" | "internship" | "freelance" | "contract";
  description: string;
  technologies: string[];
  responsibilities: string[];
  location?: string;
  icon: "briefcase" | "code" | "server" | "cloud";
};

interface ExperienceCarouselProps {
  experiences: Experience[];
}

export default function ExperienceCarousel({
  experiences,
}: ExperienceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || experiences.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiences.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, experiences.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  }, [experiences.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  }, [experiences.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  if (experiences.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No work experience available</p>
      </div>
    );
  }

  const currentExp = experiences[currentIndex];

  const getIcon = (iconType: Experience["icon"]) => {
    switch (iconType) {
      case "briefcase":
        return <Briefcase className="h-5 w-5" />;
      case "code":
        return <Code className="h-5 w-5" />;
      case "server":
        return <Server className="h-5 w-5" />;
      case "cloud":
        return <Cloud className="h-5 w-5" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: Experience["type"]) => {
    switch (type) {
      case "full-time":
        return "bg-green-500/10 text-green-600 border-green-500/30";
      case "internship":
        return "bg-blue-500/10 text-blue-600 border-blue-500/30";
      case "freelance":
        return "bg-amber-500/10 text-amber-600 border-amber-500/30";
      case "contract":
        return "bg-purple-500/10 text-purple-600 border-purple-500/30";
      default:
        return "bg-primary/10 text-primary border-primary/30";
    }
  };

  const getTypeLabel = (type: Experience["type"]) => {
    switch (type) {
      case "full-time":
        return "Full-Time";
      case "internship":
        return "Internship";
      case "freelance":
        return "Freelance";
      case "contract":
        return "Contract";
      default:
        return "Experience";
    }
  };

  return (
    <div
      className="relative w-full group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Navigation buttons - positioned outside content area */}
      {experiences.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden lg:flex"
            onClick={prevSlide}
            aria-label="Previous experience"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden lg:flex"
            onClick={nextSlide}
            aria-label="Next experience"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Main content */}
      <div className="overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card className="border border-border bg-card shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex flex-col gap-4">
                  {/* Top row: Icon, Type Badge, and Period */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                        {getIcon(currentExp.icon)}
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs font-medium ${getTypeColor(currentExp.type)}`}
                      >
                        {getTypeLabel(currentExp.type)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{currentExp.period}</span>
                    </div>
                  </div>
                  
                  {/* Position and Company */}
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      {currentExp.position}
                    </CardTitle>
                    <div className="text-lg font-semibold text-primary">
                      {currentExp.company}
                    </div>
                    {currentExp.location && (
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {currentExp.location}
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {currentExp.description}
                </p>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Key Achievements & Responsibilities
                  </h4>
                  <div className="grid gap-2">
                    {currentExp.responsibilities.map((resp, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {resp}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentExp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-muted/50 text-foreground hover:bg-primary/20 transition-colors duration-200 text-xs px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Navigation & Enhanced Indicators */}
      {experiences.length > 1 && (
        <div className="mt-8 space-y-4">
          {/* Mobile navigation buttons */}
          <div className="flex justify-center gap-4 lg:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center gap-4">
            <div className="flex space-x-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 h-2 bg-primary"
                      : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to experience ${index + 1}`}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6 }}
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              {currentIndex + 1} / {experiences.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
