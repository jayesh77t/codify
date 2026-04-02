"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="p-2 rounded-lg bg-gray-200/80 dark:bg-[#1e1e2e] ring-1 ring-gray-300/50 dark:ring-white/5 w-10 h-10" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-200/80 hover:bg-gray-300/90 dark:bg-[#1e1e2e] dark:hover:bg-[#262637] 
        ring-1 ring-gray-300/50 dark:ring-white/5 transition-all duration-200"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-500" />
      ) : (
        <Moon className="w-5 h-5 text-slate-600" />
      )}
    </button>
  );
}

export default ThemeToggle;
