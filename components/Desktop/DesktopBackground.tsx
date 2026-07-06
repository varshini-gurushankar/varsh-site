"use client";

import { motion } from "framer-motion";

export default function DesktopBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,var(--bg-primary),var(--bg-secondary))]" />
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px]" />
      <motion.div
        className="absolute -top-20 right-[10%] h-72 w-72 rounded-full bg-accent opacity-[0.07] blur-3xl"
        animate={{ x: [0, 48, 0], y: [0, -28, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[16%] left-[8%] h-24 w-24 rounded-2xl border border-accent/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
