"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Snip {
  code: string;
  language?: string;
}

interface Props {
  items: Snip[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
}

export default function CodeCarousel({
  items,
  initialIndex = 0,
  open,
  onClose,
}: Props) {
  const [index, setIndex] = useState(initialIndex);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")
        setIndex((i) =>
          items.length ? (i - 1 + items.length) % items.length : 0
        );
      if (e.key === "ArrowRight")
        setIndex((i) => (items.length ? (i + 1) % items.length : 0));
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length, onClose]);

  const prev = () =>
    setIndex((i) => (items.length ? (i - 1 + items.length) % items.length : 0));
  const next = () =>
    setIndex((i) => (items.length ? (i + 1) % items.length : 0));

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (!open) return null;

  const current = items[index];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 w-[min(90vw,900px)] bg-background rounded-lg shadow-xl">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-3">
            <div className="text-sm font-mono">
              {current?.language ?? "Code"}
            </div>
            <div className="text-sm text-muted-foreground">
              {index + 1} / {items.length}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copy(current?.code || "")}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                </>
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-4">
          <div className="relative">
            <pre className="max-h-[60vh] overflow-auto p-4 text-sm font-mono bg-muted/50 border border-muted-foreground/20 rounded">
              <code>{current?.code}</code>
            </pre>

            <button
              aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1 shadow"
              onClick={prev}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1 shadow"
              onClick={next}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-3">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to snippet ${i + 1}`}
                className={cn(
                  "h-2 w-8 rounded-full transition-colors",
                  i === index ? "bg-primary" : "bg-muted-foreground/30"
                )}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
