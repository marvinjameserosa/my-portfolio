"use client";

import { COMMANDS } from "../data";

interface HelpViewProps {
  onExecuteCommand?: (cmd: string) => void;
}

export default function HelpView({ onExecuteCommand }: HelpViewProps) {
  return (
    <div className="space-y-4 font-mono text-sm w-full max-w-4xl">
      <div className="text-[#D46238] font-bold tracking-wide">
        ┌── Available Commands ────────────────────────────────────────────────┐
      </div>

      <div className="space-y-2 pl-2">
        {COMMANDS.map((item) => (
          <div
            key={item.cmd}
            className="flex items-baseline gap-4 group cursor-pointer"
            onClick={() => onExecuteCommand?.(`/${item.cmd}`)}
          >
            <span className="text-[#D46238] font-bold w-24 shrink-0 group-hover:underline">
              /{item.cmd}
            </span>
            <span className="text-xs text-[#878683] group-hover:text-[#EDEDEC] transition-colors">
              {item.description}
            </span>
          </div>
        ))}
      </div>

      <div className="pl-2 pt-2 text-xs text-[#878683]">
        Tip: Commands can be run with or without the leading slash (e.g., <span className="text-[#EDEDEC]">talks</span> or <span className="text-[#EDEDEC]">/talks</span>).
      </div>
    </div>
  );
}
