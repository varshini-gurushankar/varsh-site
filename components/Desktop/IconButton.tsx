"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useSite, type SectionId } from "@/context/SiteContext";

interface IconButtonProps {
  section: SectionId;
  icon: LucideIcon;
}

export default function IconButton({ section, icon: Icon }: IconButtonProps) {
  const { openWindow } = useSite();

  return (
    <motion.button
      type="button"
      aria-label={`Open ${section} window`}
      onClick={() => openWindow(section)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="group flex flex-col items-center gap-1.5"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-window text-ink transition-colors group-hover:border-accent group-hover:bg-accent-soft group-hover:text-accent">
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <span className="font-mono text-[11px] lowercase tracking-wide text-muted transition-colors group-hover:text-accent">
        {section}
      </span>
    </motion.button>
  );
}
