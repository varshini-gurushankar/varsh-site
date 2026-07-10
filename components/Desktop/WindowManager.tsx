"use client";

import { AnimatePresence } from "framer-motion";
import type { ReactNode, RefObject } from "react";
import { useSite, type SectionId } from "@/context/SiteContext";
import AboutPanel from "@/components/Panels/AboutPanel";
import BooksPanel from "@/components/Panels/BooksPanel";
import ContactPanel from "@/components/Panels/ContactPanel";
import ExperiencePanel from "@/components/Panels/ExperiencePanel";
import ExtrasPanel from "@/components/Panels/ExtrasPanel";
import LinksPanel from "@/components/Panels/LinksPanel";
import FloatingWindow from "./FloatingWindow";

const PANELS: Record<SectionId, ReactNode> = {
  about: <AboutPanel />,
  experience: <ExperiencePanel />,
  links: <LinksPanel />,
  contact: <ContactPanel />,
  extras: <ExtrasPanel />,
  books: <BooksPanel />,
};

export default function WindowManager({
  constraintsRef,
}: {
  constraintsRef: RefObject<HTMLDivElement | null>;
}) {
  const { openWindows } = useSite();

  return (
    <AnimatePresence>
      {openWindows.map((w) => (
        <FloatingWindow
          key={w.id}
          id={w.id}
          x={w.x}
          y={w.y}
          zIndex={w.zIndex}
          dragConstraints={constraintsRef}
          tall={w.id === "about" || w.id === "books"}
        >
          {PANELS[w.id]}
        </FloatingWindow>
      ))}
    </AnimatePresence>
  );
}
