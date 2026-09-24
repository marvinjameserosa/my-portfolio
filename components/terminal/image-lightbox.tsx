"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { LightboxImage } from "./types";

interface ImageLightboxProps {
  image: LightboxImage | null;
  onClose: () => void;
}

export default function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-4xl w-full flex flex-col bg-[#191918] border border-[#D46238]/40 rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#201F1E] border-b border-[#D46238]/30 font-mono text-xs text-[#EDEDEC]">
          <span className="text-[#D46238] font-semibold truncate max-w-[80%]">
            {`{ ${image.title} }`}
          </span>
          <button
            onClick={onClose}
            className="flex items-center gap-1 text-[#878683] hover:text-[#EDEDEC] transition-colors px-1.5 py-0.5 rounded border border-transparent hover:border-[#D46238]/40"
            title="Press Escape or click to close"
          >
            <span className="hidden sm:inline text-[10px]">esc</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="relative flex items-center justify-center p-3 bg-black/40">
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[75vh] w-auto max-w-full rounded object-contain select-none"
          />
        </div>

        {image.subtitle && (
          <div className="px-4 py-2 bg-[#201F1E]/80 border-t border-[#D46238]/20 font-mono text-xs text-[#878683]">
            {image.subtitle}
          </div>
        )}
      </div>
    </div>
  );
}
