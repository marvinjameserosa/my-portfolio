"use client";

import { Maximize2 } from "lucide-react";
import type { LightboxImage } from "../types";

interface AboutViewProps {
  onSelectImage?: (image: LightboxImage) => void;
  onSelectCommand?: (cmd: string) => void;
}

export default function AboutView({
  onSelectImage,
  onSelectCommand,
}: AboutViewProps) {
  return (
    <div className="space-y-4 font-mono text-sm w-full max-w-4xl text-[#EDEDEC]">
      <div className="text-[#D46238] font-bold tracking-wide">
        ┌── About Marvin James Erosa ──────────────────────────────────────────┐
      </div>

      <div className="flex flex-col sm:flex-row gap-5 items-start pl-2 pt-1">
        <div
          onClick={() =>
            onSelectImage?.({
              src: "/portrait.jpg",
              alt: "Marvin James A. Erosa Profile Portrait",
              title: "Marvin James A. Erosa",
              subtitle: "Software Engineer @ Accenture",
            })
          }
          className="relative w-32 h-40 sm:w-36 sm:h-44 rounded-lg overflow-hidden border border-[#D46238]/40 bg-[#201F1E] cursor-pointer group shadow-lg shrink-0"
          title="Click to view full-screen"
        >
          <img
            src="/portrait.jpg"
            alt="Marvin James A. Erosa"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[11px] backdrop-blur-[2px]">
            <div className="px-2 py-0.5 rounded bg-black/70 border border-[#D46238]/60 flex items-center gap-1">
              <Maximize2 className="w-3 h-3 text-[#D46238]" />
              <span>Enlarge</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-xs leading-relaxed text-[#CBD5E1] flex-1">
          <p>
            Hi, I&apos;m{" "}
            <span className="text-[#D46238] font-bold">
              Marvin James A. Erosa
            </span>
            . I am a software engineer focused on cloud infrastructure, backend APIs, and automation, primarily driven by a deep irritation with things that break or run slower than they need to. Because I care too much about my work to let them drown in chaos.
          </p>

          <p>
            I keep founding organizations and writing custom software to run them. My operational rule is lean: treat legacy habits as broken code, run the prototype, and keep only what survives load.
          </p>

          <div className="pt-2 text-xs text-[#878683] space-y-1.5 border-t border-[#D46238]/20">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-[#D46238] w-32 inline-block font-semibold shrink-0">
                Focus Areas
              </span>
              <span className="text-[#EDEDEC]">: Cloud Infrastructure, Backend APIs &amp; Automation</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-[#D46238] w-32 inline-block font-semibold shrink-0">
                Current Role
              </span>
              <span className="text-[#EDEDEC]">: Software Engineer @ Accenture</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-[#D46238] w-32 inline-block font-semibold shrink-0">
                Education
              </span>
              <span className="text-[#EDEDEC]">: Computer Engineering @ Polytechnic University of the Philippines</span>
            </div>
          </div>

          <div className="pt-2 text-xs text-[#878683]">
            Type or click{" "}
            <button
              type="button"
              onClick={() => onSelectCommand?.("/community")}
              className="text-[#D46238] font-semibold hover:underline"
            >
              /community
            </button>{" "}
            for leadership &amp; volunteer initiatives, or{" "}
            <button
              type="button"
              onClick={() => onSelectCommand?.("/talks")}
              className="text-[#D46238] font-semibold hover:underline"
            >
              /talks
            </button>{" "}
            for speaking sessions.
          </div>
        </div>
      </div>
    </div>
  );
}
