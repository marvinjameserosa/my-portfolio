import type React from "react";

export interface LightboxImage {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
}

export interface TalkLink {
  label: string;
  url: string;
}

export interface TalkItem {
  id: string;
  index: string;
  title: string;
  event: string;
  date: string;
  venue: string;
  topic: string;
  impact: string;
  image: string;
  imageAlt: string;
  links?: TalkLink[];
}

export interface CommunityItem {
  id: string;
  index: string;
  title: string;
  role: string;
  period: string;
  location: string;
  description: string;
  impact: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
  description: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  description: string;
  role?: string;
  stack: string[];
  status: string;
  image: string;
  imageAlt: string;
  links?: ProjectLink[];
}

export interface CommandDefinition {
  cmd: string;
  description: string;
  isQuickAction?: boolean;
}

export interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}
