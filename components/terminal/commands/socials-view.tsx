"use client";

import { SOCIALS } from "../data";
import { ExternalLink } from "lucide-react";

export default function SocialsView() {
  return (
    <div className="space-y-4 font-mono text-sm w-full max-w-4xl">
      <div className="text-[#D46238] font-bold tracking-wide">
        ┌── Connect &amp; Social Links ───────────────────────────────────────────┐
      </div>

      <div className="space-y-3 pl-2">
        {SOCIALS.map((social) => (
          <div
            key={social.label}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-1 border-b border-[#2A2928]"
          >
            <span className="text-[#D46238] font-semibold w-28 shrink-0">
              {social.label}
            </span>
            <div className="flex-1 flex flex-col">
              <a
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[#60A5FA] hover:text-[#93C5FD] hover:underline flex items-center gap-1.5 w-fit"
              >
                <span>{social.handle}</span>
                {social.url.startsWith("http") && (
                  <ExternalLink className="w-3 h-3 opacity-70" />
                )}
              </a>
              <span className="text-xs text-[#878683] mt-0.5">
                {social.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
