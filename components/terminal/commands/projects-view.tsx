"use client";

import { PROJECTS } from "../data";
import type { ProjectItem, LightboxImage } from "../types";
import { Maximize2, ExternalLink } from "lucide-react";

interface ProjectsViewProps {
  onSelectImage?: (img: LightboxImage) => void;
}

export default function ProjectsView({ onSelectImage }: ProjectsViewProps) {
  return (
    <div className="space-y-8 font-mono text-sm">
      <div className="text-[#D46238] font-bold tracking-wide">
        ┌── Projects &amp; Shipped Work ──────────────────────────────────────┐
      </div>

      <div className="space-y-10 pl-2 w-full">
        {PROJECTS.map((item: ProjectItem) => (
          <div key={item.id} className="space-y-3 w-full">
            <div className="flex items-center gap-2">
              <span className="text-[#D46238] font-bold text-base">
                {`{ ${item.index} }`}
              </span>
              <h3 className="text-[#EDEDEC] font-semibold text-base">
                {item.title}
              </h3>
              <span
                className={`ml-auto text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded border ${
                  item.status === "Live"
                    ? "text-emerald-400 border-emerald-400/40 bg-emerald-400/10"
                    : "text-[#D46238]/80 border-[#D46238]/30 bg-[#D46238]/10"
                }`}
              >
                {item.status}
              </span>
            </div>

            <div
              onClick={() =>
                onSelectImage?.({
                  src: item.image,
                  alt: item.imageAlt,
                  title: item.title,
                  subtitle: item.stack.join(" · "),
                })
              }
              className="relative w-full aspect-video sm:max-w-3xl lg:max-w-4xl rounded-lg overflow-hidden border border-[#D46238]/30 bg-[#201F1E] cursor-pointer group shadow-md"
              title="Click to view full-screen"
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="px-2.5 py-1 rounded bg-black/60 border border-[#D46238]/60 flex items-center gap-1.5 backdrop-blur-sm">
                  <Maximize2 className="w-3.5 h-3.5 text-[#D46238]" />
                  <span>Click to enlarge</span>
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-[#878683] pl-1">
              <div>
                <span className="text-[#D46238]/80 font-semibold w-16 inline-block">
                  Stack
                </span>
                <span className="text-[#EDEDEC]">{item.stack.join(" · ")}</span>
              </div>
              <div className="flex gap-1 items-start">
                <span className="text-[#D46238]/80 font-semibold w-16 inline-block shrink-0">
                  About
                </span>
                <span className="text-[#EDEDEC]">{item.description}</span>
              </div>
            </div>

            {item.links && item.links.length > 0 && (
              <div className="flex flex-wrap gap-2 pl-1 pt-1">
                {item.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide px-3 py-1 rounded border border-[#D46238]/40 text-[#D46238] bg-[#D46238]/5 hover:bg-[#D46238]/15 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            <div className="text-[#3A231C] text-xs pt-2">
              ─────────────────────────────────────────────────────────────────
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
