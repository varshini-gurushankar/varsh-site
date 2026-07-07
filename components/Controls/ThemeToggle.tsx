"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useSite } from "@/context/SiteContext";

// Fixed spread of sparkle particles: angle (deg), distance (px), size (px), delay (s)
const PARTICLES = [
  { angle: -80, dist: 30, size: 12, delay: 0 },
  { angle: -30, dist: 34, size: 9, delay: 0.04 },
  { angle: 20, dist: 28, size: 11, delay: 0.08 },
  { angle: 70, dist: 34, size: 8, delay: 0.02 },
  { angle: 130, dist: 30, size: 10, delay: 0.06 },
  { angle: 180, dist: 34, size: 9, delay: 0.1 },
  { angle: 230, dist: 28, size: 12, delay: 0.03 },
  { angle: 285, dist: 33, size: 8, delay: 0.07 },
];

export default function ThemeToggle() {
  const { theme, toggleTheme, playSparkleDay, playSparkleNight } = useSite();
  const isDark = theme === "dark";
  const [burst, setBurst] = useState(0);

  return (
    <button
      type="button"
      onClick={() => {
        // isDark means we're switching TO day
        if (isDark) playSparkleDay();
        else playSparkleNight();
        setBurst((b) => b + 1);
        toggleTheme();
      }}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-line bg-window text-accent shadow-window transition-colors hover:border-accent"
    >
      {isDark ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
      {burst > 0 && (
        <span
          key={burst}
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          {PARTICLES.map((p, i) => {
            const rad = (p.angle * Math.PI) / 180;
            return (
              <motion.span
                key={i}
                className="absolute left-1/2 top-1/2 text-accent"
                style={{ fontSize: p.size, lineHeight: 1 }}
                initial={{ x: "-50%", y: "-50%", scale: 0, opacity: 0 }}
                animate={{
                  x: `calc(-50% + ${Math.cos(rad) * p.dist}px)`,
                  y: `calc(-50% + ${Math.sin(rad) * p.dist}px)`,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: 90,
                }}
                transition={{
                  duration: 0.6,
                  delay: p.delay,
                  ease: "easeOut",
                }}
              >
                ✦
              </motion.span>
            );
          })}
        </span>
      )}
    </button>
  );
}
