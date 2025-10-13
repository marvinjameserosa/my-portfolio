"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  Heart,
  Calendar,
  MapPin,
} from "lucide-react";
import Image from "next/image";

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

interface LeadershipCarouselProps {
  activities: Activity[];
}

export default function LeadershipCarousel({
  activities,
}: LeadershipCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || activities.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, activities.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % activities.length);
  }, [activities.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + activities.length) % activities.length
    );
  }, [activities.length]);

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

  if (activities.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No activities available</p>
      </div>
    );
  }

  const currentActivity = activities[currentIndex];

  const getIcon = (iconType: Activity["icon"]) => {
    switch (iconType) {
      case "award":
        return <Award className="h-5 w-5" />;
      case "users":
        return <Users className="h-5 w-5" />;
      case "heart":
        return <Heart className="h-5 w-5" />;
      case "calendar":
        return <Calendar className="h-5 w-5" />;
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: Activity["type"]) => {
    switch (type) {
      case "volunteer":
        return "bg-green-500/10 text-green-600 border-green-500/30";
      case "leadership":
        return "bg-blue-500/10 text-blue-600 border-blue-500/30";
      case "award":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/30";
      case "community":
        return "bg-purple-500/10 text-purple-600 border-purple-500/30";
      default:
        return "bg-primary/10 text-primary border-primary/30";
    }
  };

  const getTypeLabel = (type: Activity["type"]) => {
    switch (type) {
      case "volunteer":
        return "Volunteer Work";
      case "leadership":
        return "Leadership";
      case "award":
        return "Recognition";
      case "community":
        return "Community";
      default:
        return "Activity";
    }
  };

  return (
    <div
      className="relative w-full group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Navigation buttons - positioned outside content area */}
      {activities.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden lg:flex"
            onClick={prevSlide}
            aria-label="Previous activity"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden lg:flex"
            onClick={nextSlide}
            aria-label="Next activity"
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
              {/* Image Section */}
              {currentActivity.image && (
                <div className="relative h-48 md:h-56 overflow-hidden rounded-t-lg">
                  <Image
                    src={currentActivity.image}
                    alt={currentActivity.imageAlt || currentActivity.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90">
                      {getIcon(currentActivity.icon)}
                      <Badge
                        variant="outline"
                        className="bg-white/20 text-white border-white/30 backdrop-blur-sm"
                      >
                        {getTypeLabel(currentActivity.type)}
                      </Badge>
                    </div>
                  </div>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      {!currentActivity.image && (
                        <div className="flex items-center gap-2 text-primary">
                          {getIcon(currentActivity.icon)}
                          <Badge
                            variant="outline"
                            className={`text-xs font-medium ${getTypeColor(
                              currentActivity.type
                            )}`}
                          >
                            {getTypeLabel(currentActivity.type)}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {currentActivity.title}
                    </CardTitle>
                    <div className="text-xl font-semibold text-primary mb-1">
                      {currentActivity.organization}
                    </div>
                    {currentActivity.location && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {currentActivity.location}
                      </div>
                    )}
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/30 font-medium"
                  >
                    {currentActivity.period}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {currentActivity.description}
                </p>

                {currentActivity.impact && (
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Impact & Results
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {currentActivity.impact}
                    </p>
                  </div>
                )}

                {currentActivity.skills &&
                  currentActivity.skills.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-foreground">
                        Key Skills & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentActivity.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-muted/50 text-foreground hover:bg-primary/20 transition-colors duration-200 text-xs px-3 py-1"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Navigation & Enhanced Indicators */}
      {activities.length > 1 && (
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
              {activities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 h-2 bg-primary"
                      : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to activity ${index + 1}`}
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
              {currentIndex + 1} / {activities.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
