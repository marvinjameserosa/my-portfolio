"use client";

import { COMMUNITY } from "../data";
import type { CommunityItem, LightboxImage } from "../types";
import { Maximize2 } from "lucide-react";

interface CommunityViewProps {
  onSelectImage?: (img: LightboxImage) => void;
}

export default function CommunityView({ onSelectImage }: CommunityViewProps) {
  return (
    <div className="space-y-8 font-mono text-sm">
      <div className="text-[#D46238] font-bold tracking-wide">
        ┌── Community &amp; Leadership Initiatives ───────────────────────────────┐
      </div>

      <div className="space-y-10 pl-2 w-full">
        {COMMUNITY.map((item: CommunityItem) => (
          <div key={item.id} className="space-y-3 w-full">
            <div className="flex items-center gap-2">
              <span className="text-[#D46238] font-bold text-base">
                {`{ ${item.index} }`}
              </span>
              <h3 className="text-[#EDEDEC] font-semibold text-base">
                {item.title}
              </h3>
            </div>

            <div
              onClick={() =>
                onSelectImage?.({
                  src: item.image,
                  alt: item.imageAlt,
                  title: item.title,
                  subtitle: item.role,
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
                  Role
                </span>
                <span className="text-[#EDEDEC]">{item.role}</span>
              </div>
              <div>
                <span className="text-[#D46238]/80 font-semibold w-16 inline-block">
                  Mission
                </span>
                <span className="text-[#EDEDEC]">{item.description}</span>
              </div>
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
