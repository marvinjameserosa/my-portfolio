"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import WelcomeBanner from "./welcome-banner";
import CommandSuggestions from "./command-suggestions";
import ImageLightbox from "./image-lightbox";
import TalksView from "./commands/talks-view";
import CommunityView from "./commands/community-view";
import SocialsView from "./commands/socials-view";
import AboutView from "./commands/about-view";
import ContactView from "./commands/contact-view";
import HelpView from "./commands/help-view";
import ProjectsView from "./commands/projects-view";
import { COMMANDS } from "./data";
import type { HistoryItem, LightboxImage } from "./types";

export default function ClaudeTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);
  const [scrollToLatest, setScrollToLatest] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const latestItemRef = useRef<HTMLDivElement>(null);

  const handleContainerClick = () => {
    if (window.getSelection()?.toString().length === 0) {
      inputRef.current?.focus({ preventScroll: true });
    }
  };

  const renderCommandOutput = useCallback(
    (normalized: string, raw: string): React.ReactNode => {
      switch (normalized) {
        case "talks":
          return <TalksView onSelectImage={setLightboxImage} />;
        case "projects":
          return <ProjectsView onSelectImage={setLightboxImage} />;
        case "community":
          return <CommunityView onSelectImage={setLightboxImage} />;
        case "socials":
          return <SocialsView />;
        case "about":
          return (
            <AboutView
              onSelectImage={setLightboxImage}
              onSelectCommand={(cmd) => executeCommand(cmd, true)}
            />
          );
        case "contact":
        case "email":
          return <ContactView />;
        case "help":
          return (
            <HelpView onExecuteCommand={(cmd) => executeCommand(cmd, true)} />
          );
        default:
          return (
            <div className="font-mono text-xs text-[#E5534B] space-y-1">
              <div>command not found: {raw}</div>
              <div className="text-[#878683]">
                Type <span className="text-[#D46238]">/help</span> to view available commands.
              </div>
            </div>
          );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const executeCommand = useCallback(
    (rawCmd: string, clearPrevious: boolean = true) => {
      const trimmed = rawCmd.trim();
      if (!trimmed) return;

      const normalized = trimmed.startsWith("/")
        ? trimmed.slice(1).toLowerCase().trim()
        : trimmed.toLowerCase().trim();

      if (normalized === "clear") {
        setHistory([]);
        setInputVal("");
        return;
      }

      const outputNode = renderCommandOutput(normalized, trimmed);

      const newItem: HistoryItem = {
        id: `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        command: trimmed.startsWith("/") ? trimmed : `/${trimmed}`,
        output: outputNode,
      };

      if (clearPrevious) {
        setHistory([newItem]);
      } else {
        setHistory((prev) => [...prev, newItem]);
      }

      setCmdHistory((prev) => [trimmed, ...prev]);
      setInputVal("");
      setHistoryPointer(-1);
      setSuggestionIndex(0);
      setScrollToLatest(true);
    },
    [renderCommandOutput]
  );

  // After history updates, scroll so the latest item's command label is near the top
  useEffect(() => {
    if (scrollToLatest && latestItemRef.current) {
      const el = latestItemRef.current;
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
      setScrollToLatest(false);
    }
  }, [history, scrollToLatest]);

  const getSuggestions = () => {
    if (!inputVal.trim()) return [];
    const query = inputVal.startsWith("/")
      ? inputVal.slice(1).toLowerCase().trim()
      : inputVal.toLowerCase().trim();
    return COMMANDS.filter((c) => c.cmd.toLowerCase().includes(query));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const suggestions = getSuggestions();

    if (e.key === "Tab") {
      e.preventDefault();
      if (suggestions.length > 0) {
        const selected = suggestions[suggestionIndex % suggestions.length];
        setInputVal(`/${selected.cmd}`);
      } else if (!inputVal) {
        setInputVal("/");
      }
      return;
    }

    if (e.ctrlKey && e.key.toLowerCase() === "l") {
      e.preventDefault();
      setHistory([]);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (suggestions.length > 1 && inputVal) {
        setSuggestionIndex((prev) =>
          prev <= 0 ? suggestions.length - 1 : prev - 1
        );
      } else if (cmdHistory.length > 0) {
        const nextPointer = historyPointer + 1;
        if (nextPointer < cmdHistory.length) {
          setHistoryPointer(nextPointer);
          setInputVal(cmdHistory[nextPointer]);
        }
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (suggestions.length > 1 && inputVal) {
        setSuggestionIndex((prev) => (prev + 1) % suggestions.length);
      } else if (historyPointer > 0) {
        const nextPointer = historyPointer - 1;
        setHistoryPointer(nextPointer);
        setInputVal(cmdHistory[nextPointer]);
      } else if (historyPointer === 0) {
        setHistoryPointer(-1);
        setInputVal("");
      }
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (suggestions.length > 0) {
        const query = inputVal.startsWith("/")
          ? inputVal.slice(1).toLowerCase().trim()
          : inputVal.toLowerCase().trim();
        const exactMatch = suggestions.find((s) => s.cmd === query);
        if (!exactMatch) {
          // Autocomplete partial input to the top-ranked suggestion
          executeCommand(`/${suggestions[suggestionIndex % suggestions.length].cmd}`);
          return;
        }
      }
      executeCommand(inputVal);
    }
  };

  useEffect(() => {
    inputRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <div
      onClick={handleContainerClick}
      className="min-h-screen w-full bg-[#181817] text-[#EDEDEC] font-mono p-4 sm:p-6 md:p-8 flex flex-col justify-between selection:bg-[#D46238]/30 selection:text-white"
    >
      <div className="max-w-4xl w-full mx-auto space-y-6 flex-1">
        <WelcomeBanner onSelectCommand={executeCommand} />

        <div className="space-y-6 pt-2">
          {history.map((item, idx) => (
            <div
              key={item.id}
              ref={idx === history.length - 1 ? latestItemRef : undefined}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 text-sm text-[#D46238] font-bold">
                <span className="text-[#878683]">❯</span>
                <span className="text-[#EDEDEC]">{item.command}</span>
              </div>
              <div className="pl-4 sm:pl-6">{item.output}</div>
            </div>
          ))}
        </div>

        <div className="pt-4 space-y-2 relative">
          <CommandSuggestions
            inputValue={inputVal}
            selectedIndex={suggestionIndex}
            onSelectCommand={executeCommand}
          />

          <div className="flex items-center gap-2 border-b border-[#D46238]/30 pb-2 text-sm">
            <span className="text-[#D46238] font-bold text-base select-none">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
                setSuggestionIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type /talks, /community, or /help..."
              autoFocus
              spellCheck="false"
              autoComplete="off"
              autoCapitalize="off"
              className="w-full bg-transparent text-[#EDEDEC] focus:outline-none placeholder:text-[#878683]/50 text-sm font-mono"
            />
          </div>
        </div>

        <div ref={bottomRef} className="h-6" />
      </div>

      <footer className="max-w-4xl w-full mx-auto pt-6 border-t border-[#2A2928] flex flex-col sm:flex-row items-center justify-between text-xs text-[#878683] gap-2 select-none">
        <div className="flex items-center gap-2">
          <span className="text-[#D46238] font-bold">▶▶</span>
          <span className="text-[#EDEDEC]">marvin mode on</span>
          <span className="text-[#878683] hidden sm:inline">(shift+tab to cycle)</span>
        </div>
        <div className="text-[11px] text-[#878683]">
          &copy; 2026 Marvin James A. Erosa. All rights reserved.
        </div>
      </footer>

      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}
