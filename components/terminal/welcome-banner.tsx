"use client";

import { useState, useEffect } from "react";

interface WelcomeBannerProps {
  onSelectCommand: (cmd: string) => void;
}

export default function WelcomeBanner({ onSelectCommand }: WelcomeBannerProps) {
  const [ageVersion, setAgeVersion] = useState("v23.8.15");

  useEffect(() => {
    const birthDate = new Date(2003, 0, 9);
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAgeVersion(`v${years}.${months}.${days}`);
  }, []);

  return (
    <div className="w-full max-w-4xl border border-[#D46238] rounded-md overflow-hidden bg-[#181817] shadow-xl font-mono text-sm select-none">
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#201F1E] border-b border-[#D46238]/40 text-xs">
        <span className="text-[#D46238] font-bold">
          Marvin James A. Erosa{" "}
          <span className="text-[#878683] font-normal">
            {ageVersion}
          </span>
        </span>
        <span className="text-[11px] text-[#878683] hidden sm:inline">
          marvin-erosa@terminal:~
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#D46238]/40">
        <div className="md:col-span-7 p-5 sm:p-6 flex flex-col items-center justify-between text-center space-y-4">
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-bold text-[#EDEDEC]">
              Welcome to Marvin&apos;s Terminal!
            </h2>
            <p className="text-xs text-[#878683]">
              Software Engineer &amp; Community Builder
            </p>
          </div>

          <div className="py-1 flex flex-col items-center justify-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center hover:scale-105 transition-transform duration-200 select-none">
              <img
                src="/logo.svg"
                alt="Marvin James Erosa Mascot"
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>
          </div>

          <div className="text-[11px] text-[#878683]">
            Type <span className="text-[#D46238] font-semibold">/help</span> or press <span className="text-[#EDEDEC] font-semibold">Tab</span> to view commands
          </div>
        </div>

        <div className="md:col-span-5 p-5 sm:p-6 flex flex-col justify-between space-y-4 bg-[#1C1B1A]/40">
          <div>
            <span className="text-[#D46238] font-bold text-xs uppercase tracking-wider block mb-2">
              Quick start (Click to run)
            </span>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => onSelectCommand("/about")}
                className="w-full text-left px-2.5 py-1.5 rounded border border-[#D46238]/40 bg-[#232221] hover:bg-[#D46238]/20 hover:border-[#D46238] transition-all flex items-center justify-between group"
              >
                <span className="text-[#D46238] font-bold text-xs group-hover:underline">
                  /about
                </span>
                <span className="text-[11px] text-[#878683] group-hover:text-[#EDEDEC]">
                  Bio &amp; background →
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectCommand("/talks")}
                className="w-full text-left px-2.5 py-1.5 rounded border border-[#D46238]/40 bg-[#232221] hover:bg-[#D46238]/20 hover:border-[#D46238] transition-all flex items-center justify-between group"
              >
                <span className="text-[#D46238] font-bold text-xs group-hover:underline">
                  /talks
                </span>
                <span className="text-[11px] text-[#878683] group-hover:text-[#EDEDEC]">
                  Keynotes &amp; events →
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectCommand("/projects")}
                className="w-full text-left px-2.5 py-1.5 rounded border border-[#D46238]/40 bg-[#232221] hover:bg-[#D46238]/20 hover:border-[#D46238] transition-all flex items-center justify-between group"
              >
                <span className="text-[#D46238] font-bold text-xs group-hover:underline">
                  /projects
                </span>
                <span className="text-[11px] text-[#878683] group-hover:text-[#EDEDEC]">
                  Shipped work →
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectCommand("/community")}
                className="w-full text-left px-2.5 py-1.5 rounded border border-[#D46238]/40 bg-[#232221] hover:bg-[#D46238]/20 hover:border-[#D46238] transition-all flex items-center justify-between group"
              >
                <span className="text-[#D46238] font-bold text-xs group-hover:underline">
                  /community
                </span>
                <span className="text-[11px] text-[#878683] group-hover:text-[#EDEDEC]">
                  Leadership &amp; impact →
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectCommand("/socials")}
                className="w-full text-left px-2.5 py-1.5 rounded border border-[#D46238]/40 bg-[#232221] hover:bg-[#D46238]/20 hover:border-[#D46238] transition-all flex items-center justify-between group"
              >
                <span className="text-[#D46238] font-bold text-xs group-hover:underline">
                  /socials
                </span>
                <span className="text-[11px] text-[#878683] group-hover:text-[#EDEDEC]">
                  GitHub &amp; LinkedIn →
                </span>
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-[#D46238]/20">
            <span className="text-[#D46238] font-bold text-xs uppercase tracking-wider block mb-1">
              What&apos;s new
            </span>
            <ul className="text-[11px] text-[#878683] space-y-1">
              <li>• Dropping this entire terminal as a starter template soon!</li>
              <li>• Freshly certified: Google Professional Cloud Architect</li>
              <li>• Arduino Day &amp; CyberPH volunteer forms opening the second I finish coding them</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
