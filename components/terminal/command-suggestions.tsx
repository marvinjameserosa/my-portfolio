"use client";

import { COMMANDS } from "./data";
import type { CommandDefinition } from "./types";

interface CommandSuggestionsProps {
  inputValue: string;
  selectedIndex: number;
  onSelectCommand: (cmd: string) => void;
}

export default function CommandSuggestions({
  inputValue,
  selectedIndex,
  onSelectCommand,
}: CommandSuggestionsProps) {
  if (!inputValue.trim()) return null;

  const normalized = inputValue.startsWith("/")
    ? inputValue.slice(1).toLowerCase().trim()
    : inputValue.toLowerCase().trim();

  const filtered = COMMANDS.filter((c) =>
    c.cmd.toLowerCase().includes(normalized)
  );

  if (filtered.length === 0) return null;

  const renderHighlightedCommand = (cmd: string) => {
    if (!normalized) return `/${cmd}`;

    const matchIndex = cmd.toLowerCase().indexOf(normalized);
    if (matchIndex === -1) return `/${cmd}`;

    const before = cmd.slice(0, matchIndex);
    const match = cmd.slice(matchIndex, matchIndex + normalized.length);
    const after = cmd.slice(matchIndex + normalized.length);

    return (
      <>
        <span>/</span>
        <span>{before}</span>
        <span className="text-[#60A5FA] font-bold underline underline-offset-2">
          {match}
        </span>
        <span>{after}</span>
      </>
    );
  };

  return (
    <div className="w-full max-w-4xl bg-[#1C1B1A] border border-[#D46238]/40 rounded-lg p-2 shadow-2xl font-mono text-xs mb-2">
      <div className="text-[10px] text-[#878683] px-2 py-1 uppercase tracking-wider border-b border-[#2A2928] mb-1 flex justify-between">
        <span>Suggested Commands</span>
        <span>Tab to complete • Enter to run</span>
      </div>

      <div className="space-y-1">
        {filtered.map((item: CommandDefinition, idx: number) => {
          const isSelected = idx === selectedIndex % filtered.length;

          return (
            <div
              key={item.cmd}
              onClick={() => onSelectCommand(`/${item.cmd}`)}
              className={`flex items-center justify-between px-2.5 py-1.5 rounded cursor-pointer transition-colors ${
                isSelected
                  ? "bg-[#2D2A28] border-l-2 border-[#D46238]"
                  : "hover:bg-[#232221]"
              }`}
            >
              <div className="text-[#D46238] font-bold text-sm w-36 shrink-0">
                {renderHighlightedCommand(item.cmd)}
              </div>
              <div className="text-[#878683] text-xs truncate flex-1 pl-2">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
