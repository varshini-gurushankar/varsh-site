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
      className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-line bg-window text-accent shadow-window transition-colors hover:border-accent"
    >
      {isDark ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
    </button>
  );
}
