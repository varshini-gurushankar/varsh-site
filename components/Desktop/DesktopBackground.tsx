"use client";

import { motion } from "framer-motion";

function Cloud({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 120 44" fill="currentColor" className={className} aria-hidden>
      <ellipse cx="34" cy="30" rx="26" ry="14" />
      <ellipse cx="62" cy="22" rx="24" ry="16" />
      <ellipse cx="90" cy="31" rx="24" ry="12" />
    </svg>
  );
}

function Sparkle({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0c1 6.5 3.5 9 12 12-8.5 3-11 5.5-12 12-1-6.5-3.5-9-12-12 8.5-3 11-5.5 12-12z" />
    </svg>
  );
}

export default function DesktopBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--sky-top)_0%,var(--sky-bottom)_78%)]" />

      {/* star field, visible only at night via --stars-opacity */}
      <div className="absolute inset-x-0 top-0 h-2/3 opacity-[var(--stars-opacity)] [background-image:radial-gradient(#ffffff_1px,transparent_1.5px),radial-gradient(#ffffff_0.8px,transparent_1.2px)] [background-size:110px_90px,70px_60px] [background-position:0_0,35px_25px]" />

      <motion.div
        className="absolute left-[8%] top-[12%] w-40 text-window opacity-90"
        animate={{ x: [0, 36, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cloud className="w-full" />
      </motion.div>
      <motion.div
        className="absolute right-[10%] top-[7%] w-56 text-window opacity-75"
        animate={{ x: [0, -48, 0] }}
        transition={{ duration: 46, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cloud className="w-full" />
      </motion.div>
      <motion.div
        className="absolute left-[30%] top-[34%] w-28 text-window opacity-60"
        animate={{ x: [0, 24, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cloud className="w-full" />
      </motion.div>

      <motion.div
        className="absolute left-[16%] top-[52%] w-4 text-accent opacity-60"
        animate={{ opacity: [0.25, 0.7, 0.25], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkle className="w-full" />
      </motion.div>
      <motion.div
        className="absolute right-[18%] top-[42%] w-3 text-accent opacity-50"
        animate={{ opacity: [0.6, 0.2, 0.6], scale: [1.05, 0.85, 1.05] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkle className="w-full" />
      </motion.div>

      {/* water band */}
      <div className="absolute inset-x-0 bottom-0 h-[24%]">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="absolute -top-10 h-10 w-full text-water"
          fill="currentColor"
        >
          <path d="M0 60 L0 38 C120 18 240 18 360 32 C480 46 600 46 720 30 C840 14 960 14 1080 30 C1200 46 1320 46 1440 34 L1440 60 Z" />
        </svg>
        <div className="h-full w-full bg-water" />
      </div>
    </div>
  );
}
