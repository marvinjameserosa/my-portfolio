"use client";

import { Mail } from "lucide-react";

export default function ContactView() {
  return (
    <div className="space-y-4 font-mono text-sm w-full max-w-4xl text-[#EDEDEC]">
      <div className="text-[#D46238] font-bold tracking-wide">
        ┌── Contact Information ───────────────────────────────────────────────┐
      </div>

      <div className="space-y-3 pl-2 text-xs text-[#CBD5E1]">
        <p>
          I am always open to speaking opportunities, panel discussions, mentorship sessions, and collaborative engineering projects.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2 text-xs">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#D46238]" />
            <a
              href="mailto:marvinjameserosa@gmail.com"
              className="text-[#60A5FA] hover:underline font-semibold"
            >
              marvinjameserosa@gmail.com
            </a>
          </div>
          <span className="hidden sm:inline text-[#4A4946]">•</span>
          <div>
            <a
              href="https://mj.erosa.page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#60A5FA] hover:underline"
            >
              mj.erosa.page
            </a>
          </div>
        </div>

        <div className="text-[#878683] text-xs pt-1">
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/marvinjameserosa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#60A5FA] hover:underline"
          >
            linkedin.com/in/marvinjameserosa
          </a>
        </div>
      </div>
    </div>
  );
}
