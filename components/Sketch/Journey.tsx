"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { siteContent, type ExperienceItem } from "@/lib/content";
import { BadgeSticker, HexSticker, LaptopDoodle, StarSticker } from "./doodles";

/* Timeline runs oldest → newest; stickers stack in the same order,
   so the most recent role ends up on top. */
const byCompany = Object.fromEntries(
  siteContent.experience.map((item) => [item.company, item]),
) as Record<string, ExperienceItem>;

const entries = [
  { ...byCompany["TerraAI"], year: "2024" },
  { ...byCompany["UC Davis Center for Mind and Brain"], year: "2025" },
  { ...byCompany["Droisys"], year: "2025" },
  { ...byCompany["LifeStages Inc."], year: "2025" },
];

type Shape = "rect" | "circle" | "hex" | "badge" | "star";

interface StickerDef {
  id: string;
  /** Sticker sticks once this many timeline entries have scrolled past. */
  appearAt: number;
  shape: Shape;
  title: string;
  sub?: string;
  /** teal or mustard outline — alternated so it reads hand-collected */
  color: "ink" | "accent";
  left: string;
  top: string;
  width: string;
  rotate: number;
}

const stickers: StickerDef[] = [
  { id: "terra", appearAt: 1, shape: "rect", title: "TerraAI", sub: "full stack intern", color: "ink", left: "14%", top: "12%", width: "30%", rotate: -7 },
  { id: "cmb", appearAt: 2, shape: "circle", title: "UC Davis CMB", sub: "ml intern", color: "accent", left: "57%", top: "8%", width: "26%", rotate: 6 },
  { id: "beach", appearAt: 2, shape: "circle", title: "beach days", color: "accent", left: "16%", top: "54%", width: "15%", rotate: -10 },
  { id: "droisys", appearAt: 3, shape: "hex", title: "Droisys", sub: "swe intern", color: "ink", left: "33%", top: "25%", width: "27%", rotate: -4 },
  { id: "code", appearAt: 3, shape: "rect", title: "</>", sub: "swe + product", color: "ink", left: "66%", top: "50%", width: "19%", rotate: 8 },
  { id: "beli", appearAt: 4, shape: "star", title: "beli", sub: "5 stars", color: "ink", left: "13%", top: "27%", width: "20%", rotate: 12 },
  { id: "lifestages", appearAt: 4, shape: "badge", title: "LifeStages", sub: "swd intern", color: "accent", left: "37%", top: "42%", width: "30%", rotate: -8 },
];

function StickerShape({ shape, className }: { shape: Shape; className?: string }) {
  switch (shape) {
    case "hex":
      return <HexSticker className={className} />;
    case "badge":
      return <BadgeSticker className={className} />;
    case "star":
      return <StarSticker className={className} />;
    case "circle":
      return (
        <div
          className={`sketchy-blob h-full w-full border-[5px] border-current bg-paper-card ${className ?? ""}`}
        />
      );
    default:
      return (
        <div
          className={`sketchy h-full w-full border-[5px] border-current bg-paper-card ${className ?? ""}`}
        />
      );
  }
}

const shapeAspect: Record<Shape, string> = {
  rect: "aspect-[8/5]",
  circle: "aspect-square",
  hex: "aspect-[10/9]",
  badge: "aspect-square",
  star: "aspect-square",
};

/* Text padding so labels stay inside the die-cut edge. */
const shapePadding: Record<Shape, string> = {
  rect: "p-2",
  circle: "p-3",
  hex: "p-4",
  badge: "p-6",
  star: "p-8",
};

function Sticker({ def }: { def: StickerDef }) {
  const isStar = def.shape === "star";
  return (
    <motion.div
      className={`absolute ${shapeAspect[def.shape]}`}
      style={{
        left: def.left,
        top: def.top,
        width: def.width,
        filter: "drop-shadow(var(--shadow-sticker))",
      }}
      initial={{ opacity: 0, scale: 1.6, rotate: def.rotate + 16, y: -28 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: def.rotate,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 19 },
      }}
      exit={{
        opacity: 0,
        scale: 1.45,
        rotate: def.rotate + 14,
        y: -22,
        transition: { duration: 0.28 },
      }}
    >
      <div
        className={`h-full w-full ${def.color === "accent" ? "text-accent" : "text-ink"}`}
      >
        <StickerShape
          shape={def.shape}
          className="absolute inset-0 h-full w-full"
        />
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center text-ink ${shapePadding[def.shape]}`}
        >
          <span
            className={`font-hand font-bold leading-tight ${isStar ? "text-[0.7rem] sm:text-sm" : "text-base sm:text-xl"}`}
          >
            {def.title}
          </span>
          {def.sub && (
            <span className="font-hand text-[0.65rem] leading-tight text-muted sm:text-sm">
              {def.sub}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const listRef = useRef<HTMLOListElement>(null);
  const [stuckCount, setStuckCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.65", "end 0.6"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const n = entries.length;
    setStuckCount(p <= 0.001 ? 0 : Math.min(n, Math.floor(p * n) + 1));
  });

  return (
    <section id="journey" className="mx-auto max-w-6xl px-6 pt-32 sm:pt-40">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
        01 / where i&rsquo;ve been
      </p>
      <h2 className="mt-4 font-hand text-5xl font-bold sm:text-6xl">
        My journey, one sticker at a time.
      </h2>
      <p className="mt-4 text-lg text-muted">
        Scroll down &mdash; the laptop has receipts.
      </p>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        {/* the laptop, pinned while the timeline scrolls */}
        <div className="lg:sticky lg:top-24 self-start">
          <div className="relative">
            <LaptopDoodle className="w-full text-ink" />
            <AnimatePresence>
              {stickers
                .filter((s) => s.appearAt <= stuckCount)
                .map((s) => (
                  <Sticker key={s.id} def={s} />
                ))}
            </AnimatePresence>
          </div>
          <p className="mt-2 text-center font-hand text-xl text-muted">
            sticker collection, est. 2024
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          <div
            className="absolute bottom-0 top-0 w-[3px] bg-ink"
            style={{ left: "calc(3rem + 1rem - 1.5px)" }}
            aria-hidden="true"
          />
          <ol ref={listRef}>
            {entries.map((item, i) => (
              <li
                key={item.company}
                className="flex min-h-[70vh] items-center"
              >
                <div className="grid w-full grid-cols-[3rem_2rem_1fr] items-start">
                  <span className="pr-1 pt-0.5 text-right font-hand text-lg italic text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="sketchy-blob z-10 mt-1 h-4 w-4 justify-self-center border-[3px] border-ink bg-paper" />
                  <div className="pl-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                      {item.year}
                      <span className="ml-3 font-normal normal-case tracking-normal text-muted">
                        {item.period}
                      </span>
                    </p>
                    <h3 className="mt-5 font-hand text-4xl font-bold sm:text-5xl">
                      {item.company}
                    </h3>
                    <p className="mt-2 font-hand text-2xl italic">
                      {item.role.toLowerCase()}
                    </p>
                    <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                      {item.summary}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
