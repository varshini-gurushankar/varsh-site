"use client";

import { MotionConfig } from "framer-motion";
import { useRef } from "react";
import { SiteProvider } from "@/context/SiteContext";
import SoundToggle from "@/components/Controls/SoundToggle";
import ThemeToggle from "@/components/Controls/ThemeToggle";
import Footer from "@/components/Footer";
import DesktopBackground from "./DesktopBackground";
import HomeWindow from "./HomeWindow";
import WindowManager from "./WindowManager";

export default function Desktop() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <SiteProvider>
      <MotionConfig reducedMotion="user">
        <div
          ref={constraintsRef}
          className="relative h-dvh w-full overflow-hidden"
        >
          <DesktopBackground />
          <SoundToggle />
          <ThemeToggle />
          <main className="relative flex h-full items-center justify-center px-4 pb-14 pt-16">
            <HomeWindow />
          </main>
          <WindowManager constraintsRef={constraintsRef} />
          <Footer />
        </div>
      </MotionConfig>
    </SiteProvider>
  );
}
