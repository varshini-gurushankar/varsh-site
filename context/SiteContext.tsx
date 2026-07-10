"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import useSound from "use-sound";

export type SectionId =
  | "about"
  | "experience"
  | "links"
  | "contact"
  | "extras"
  | "books";

export const SECTIONS: SectionId[] = [
  "about",
  "experience",
  "links",
  "contact",
  "extras",
];

export interface OpenWindow {
  id: SectionId;
  x: number;
  y: number;
  zIndex: number;
}

type Theme = "light" | "dark";

interface SiteContextValue {
  theme: Theme;
  toggleTheme: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  playClick: () => void;
  playClose: () => void;
  playBubble: () => void;
  playSparkleDay: () => void;
  playSparkleNight: () => void;
  openWindows: OpenWindow[];
  openWindow: (id: SectionId) => void;
  closeWindow: (id: SectionId) => void;
  bringToFront: (id: SectionId) => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

const WINDOW_WIDTH = 640;

function spawnPosition(spawnIndex: number): { x: number; y: number } {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const offset = (spawnIndex % 6) * 28;
  if (vw < 768) {
    return { x: 12, y: Math.min(84 + offset, vh * 0.4) };
  }
  const width = Math.min(WINDOW_WIDTH, vw - 32);
  const x = Math.min(
    Math.max(16, Math.round(vw / 2 - width / 2) + 48 + offset),
    vw - width - 16
  );
  const y = Math.max(72, Math.round(vh * 0.14) + offset);
  return { x, y };
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const zCounter = useRef(10);
  const spawnCounter = useRef(0);

  const [playClick] = useSound("/sounds/ui-click.wav", {
    volume: 0.4,
    soundEnabled,
  });
  const [playClose] = useSound("/sounds/ui-close.wav", {
    volume: 0.4,
    soundEnabled,
  });
  const [playBubble] = useSound("/sounds/bubble.mp3", {
    volume: 0.45,
    soundEnabled,
  });
  const [playSparkleDay] = useSound("/sounds/sparkle-day.wav", {
    volume: 0.35,
    soundEnabled,
  });
  const [playSparkleNight] = useSound("/sounds/sparkle-night.wav", {
    volume: 0.35,
    soundEnabled,
  });

  // Sync with the theme the no-flash script set on <html> before hydration.
  useEffect(() => {
    if (document.documentElement.dataset.theme === "dark") {
      setTheme("dark");
    }
  }, []);

  // Restore the saved mute preference after hydration.
  useEffect(() => {
    try {
      if (localStorage.getItem("sound") === "off") {
        setSoundEnabled(false);
      }
    } catch {
      // localStorage unavailable — default to sound on
    }
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("sound", next ? "on" : "off");
      } catch {
        // localStorage unavailable (private mode) — choice just won't persist
      }
      // audible confirmation when unmuting (playClick is muted while prev=true → next=false)
      if (next) playClick({ forceSoundEnabled: true });
      return next;
    });
  }, [playClick]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        // localStorage unavailable (private mode) — theme just won't persist
      }
      return next;
    });
  }, []);

  const bringToFront = useCallback((id: SectionId) => {
    setOpenWindows((windows) => {
      const target = windows.find((w) => w.id === id);
      if (!target) return windows;
      const maxZ = Math.max(...windows.map((w) => w.zIndex));
      if (target.zIndex === maxZ) return windows;
      zCounter.current = maxZ + 1;
      return windows.map((w) =>
        w.id === id ? { ...w, zIndex: zCounter.current } : w
      );
    });
  }, []);

  const openWindow = useCallback(
    (id: SectionId) => {
      setOpenWindows((windows) => {
        if (windows.some((w) => w.id === id)) {
          return windows;
        }
        const { x, y } = spawnPosition(spawnCounter.current++);
        return [...windows, { id, x, y, zIndex: ++zCounter.current }];
      });
      bringToFront(id);
    },
    [bringToFront]
  );

  const closeWindow = useCallback((id: SectionId) => {
    setOpenWindows((windows) => windows.filter((w) => w.id !== id));
  }, []);

  return (
    <SiteContext.Provider
      value={{
        theme,
        toggleTheme,
        soundEnabled,
        toggleSound,
        playClick,
        playClose,
        playBubble,
        playSparkleDay,
        playSparkleNight,
        openWindows,
        openWindow,
        closeWindow,
        bringToFront,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSite(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
