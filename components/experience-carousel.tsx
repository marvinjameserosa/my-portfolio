"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Experience = {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
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
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, experiences.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  };

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
  }, []);

  if (experiences.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No work experience available</p>
      </div>
    );
  }

  const currentExp = experiences[currentIndex];

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
            <Card className="border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {currentExp.position}
                    </CardTitle>
                    <div className="text-xl font-semibold text-primary mb-1">
                      {currentExp.company}
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/30 font-medium"
                  >
                    {currentExp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {currentExp.description}
                </p>

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

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">
                    Key Achievements & Responsibilities
                  </h4>
                  <div className="grid gap-3">
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
                      transition={{ duration: 5 }}
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
