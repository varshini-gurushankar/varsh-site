"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useSite, type SectionId } from "@/context/SiteContext";

interface IconButtonProps {
  section: SectionId;
  icon: LucideIcon;
}

export default function IconButton({ section, icon: Icon }: IconButtonProps) {
  const { openWindow, playClick } = useSite();

  return (
    <motion.button
      type="button"
      aria-label={`Open ${section} window`}
      onClick={() => {
        playClick();
        openWindow(section);
      }}
      whileHover={{ scale: 1.08, rotate: -3 }}
      whileTap={{ scale: 0.92 }}
      className="group flex flex-col items-center gap-2"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-line bg-window text-ink transition-colors group-hover:border-accent group-hover:bg-accent-soft group-hover:text-accent">
        <Icon size={26} strokeWidth={2} />
      </span>
      <span className="font-mono text-xs lowercase tracking-wide text-muted transition-colors group-hover:text-accent">
        {section}
      </span>
    </motion.button>
  );
}
