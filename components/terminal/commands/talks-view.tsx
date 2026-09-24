"use client";

import { TALKS } from "../data";
import type { TalkItem, LightboxImage } from "../types";
import { Maximize2, ExternalLink } from "lucide-react";

interface TalksViewProps {
  onSelectImage?: (img: LightboxImage) => void;
}

export default function TalksView({ onSelectImage }: TalksViewProps) {
  return (
    <div className="space-y-8 font-mono text-sm">
      <div className="text-[#D46238] font-bold tracking-wide">
        ┌── Talks &amp; Speaking Engagements ───────────────────────────────────────┐
      </div>

      <div className="space-y-10 pl-2 w-full">
        {TALKS.map((talk: TalkItem) => (
          <div key={talk.id} className="space-y-3 w-full">
            <div className="flex items-center gap-2">
              <span className="text-[#D46238] font-bold text-base">
                {`{ ${talk.index} }`}
              </span>
              <h3 className="text-[#EDEDEC] font-semibold text-base">
                {talk.title}
              </h3>
            </div>

            <div
              onClick={() =>
                onSelectImage?.({
                  src: talk.image,
                  alt: talk.imageAlt,
                  title: talk.event,
                  subtitle: talk.topic,
                })
              }
              className="relative w-full aspect-video sm:max-w-3xl lg:max-w-4xl rounded-lg overflow-hidden border border-[#D46238]/30 bg-[#201F1E] cursor-pointer group shadow-md"
              title="Click to view full-screen"
            >
              <img
                src={talk.image}
                alt={talk.imageAlt}
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
                  Event
                </span>
                <span className="text-[#EDEDEC]">{talk.event}</span>
              </div>
              {talk.date && (
                <div>
                  <span className="text-[#D46238]/80 font-semibold w-16 inline-block">
                    Date
                  </span>
                  <span className="text-[#EDEDEC]">{talk.date}</span>
                </div>
              )}
              {talk.venue && (
                <div>
                  <span className="text-[#D46238]/80 font-semibold w-16 inline-block">
                    Venue
                  </span>
                  <span className="text-[#EDEDEC]">{talk.venue}</span>
                </div>
              )}
              <div className="flex gap-1 items-start">
                <span className="text-[#D46238]/80 font-semibold w-16 inline-block shrink-0">
                  About
                </span>
                <span className="text-[#EDEDEC]">
                  {[talk.topic, talk.impact].filter(Boolean).join(" ")}
                </span>
              </div>
              {talk.links && talk.links.length > 0 && (
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1">
                  <span className="text-[#D46238]/80 font-semibold w-16 inline-block">
                    Links
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {talk.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#D46238] hover:text-[#e87f58] hover:underline inline-flex items-center gap-1 transition-colors"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="text-[#3A231C] text-xs pt-2">
              ─────────────────────────────────────────────────────────────────
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
