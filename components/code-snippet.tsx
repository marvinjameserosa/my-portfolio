"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SingleSnippet {
  code: string;
  language?: string;
}

interface CodeSnippetProps {
  // Backwards-compatible: single snippet via `code`/`language`
  code?: string;
  language?: string;
  // New: multiple snippets
  snippets?: SingleSnippet[];
  // optional starting index
  startIndex?: number;
}

export default function CodeSnippet({
  code,
  language,
  snippets,
  startIndex = 0,
}: CodeSnippetProps) {
  const builtIn = code ? [{ code, language }] : [];
  const items = snippets && snippets.length ? snippets : builtIn;

  const [index, setIndex] = useState(() =>
    Math.min(Math.max(0, startIndex), Math.max(0, items.length - 1))
  );
  const [copied, setCopied] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // keep index in range if items change
    if (index > items.length - 1) setIndex(Math.max(0, items.length - 1));
  }, [items.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length]);

  const prev = () =>
    setIndex((i) => (items.length ? (i - 1 + items.length) % items.length : 0));
  const next = () =>
    setIndex((i) => (items.length ? (i + 1) % items.length : 0));

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!items.length) return null;

  return (
    <div className="relative rounded-lg overflow-hidden mb-8">
      <div className="flex items-center justify-between px-4 py-2 bg-muted">
        <div className="flex items-center gap-3">
          {items.length > 1 && (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prev}
                aria-label="Previous snippet"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={next}
                aria-label="Next snippet"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
          <div className="text-sm font-mono">
            {items[index].language ?? "Code"}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="sr-only" aria-live="polite">
            {copied ? "Copied to clipboard" : ""}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(items[index].code)}
            className="h-8 gap-1 text-xs"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className={cn(
            "flex transition-transform duration-300 ease-in-out",
            items.length > 1 ? "" : ""
          )}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((s, i) => (
            <pre
              key={i}
              className={cn(
                "w-full p-4 overflow-x-auto text-sm font-mono bg-muted/50",
                "border border-muted-foreground/20 rounded-b-lg m-0"
              )}
            >
              <code>{s.code}</code>
            </pre>
          ))}
        </div>
      </div>

      {items.length > 1 && (
        <div className="flex items-center justify-center gap-2 py-2">
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
      )}
    </div>
  );
}
