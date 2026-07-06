"use client";

import { Moon, Sun } from "lucide-react";
import { useSite } from "@/context/SiteContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useSite();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-window text-ink shadow-window transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
    </button>
  );
}
