"use client";

import { motion, useDragControls } from "framer-motion";
import { X } from "lucide-react";
import type { ReactNode, RefObject } from "react";
import { useSite, type SectionId } from "@/context/SiteContext";
import { useIsMobile } from "@/lib/useIsMobile";

interface FloatingWindowProps {
  id: SectionId;
  x: number;
  y: number;
  zIndex: number;
  dragConstraints: RefObject<HTMLDivElement | null>;
  children: ReactNode;
}

export default function FloatingWindow({
  id,
  x,
  y,
  zIndex,
  dragConstraints,
  children,
}: FloatingWindowProps) {
  const { closeWindow, bringToFront } = useSite();
  const dragControls = useDragControls();
  const isMobile = useIsMobile();

  return (
    <motion.div
      role="dialog"
      aria-label={`${id} window`}
      className="absolute w-[min(640px,calc(100vw-24px))] overflow-hidden rounded-2xl border border-line bg-window shadow-window"
      style={{ left: x, top: y, zIndex }}
      drag={!isMobile}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={dragConstraints}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      onPointerDown={() => bringToFront(id)}
      onKeyDown={(e) => {
        if (e.key === "Escape") closeWindow(id);
      }}
    >
      <div
        className="flex touch-none select-none items-center justify-between bg-titlebar px-4 py-2.5 cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => {
          // don't start a drag from the close button, or its click won't fire
          if (isMobile || (e.target as HTMLElement).closest("button")) return;
          dragControls.start(e);
        }}
      >
        <span className="font-mono text-xs lowercase tracking-widest text-titlebar-text">
          {id}
        </span>
        <button
          type="button"
          aria-label={`Close ${id} window`}
          onClick={() => closeWindow(id)}
          className="flex h-6 w-6 items-center justify-center rounded-md text-titlebar-text transition-colors hover:bg-accent hover:text-titlebar"
        >
          <X size={14} strokeWidth={2.5} />
        </button>
      </div>
      <div className="max-h-[min(60vh,480px)] overflow-y-auto p-6">
        {children}
      </div>
    </motion.div>
  );
}
