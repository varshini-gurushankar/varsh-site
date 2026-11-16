"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import useSound from "use-sound";
import { Volume2, VolumeX } from "lucide-react";

interface SoundContextValue {
  soundEnabled: boolean;
  toggleSound: () => void;
  playClick: () => void;
  playClose: () => void;
  playBubble: () => void;
  playSparkle: () => void;
}

const SoundContext = createContext<SoundContextValue | null>(null);

export function SoundProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

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
  const [playSparkle] = useSound("/sounds/sparkle-day.wav", {
    volume: 0.35,
    soundEnabled,
  });

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

  // One global listener so every link/button clicks without each
  // component needing to be a client component.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button") && !target.closest("[data-no-sound]")) {
        playClick();
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [playClick]);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("sound", next ? "on" : "off");
      } catch {
        // localStorage unavailable (private mode) — choice just won't persist
      }
      // audible confirmation when unmuting
      if (next) playSparkle({ forceSoundEnabled: true });
      return next;
    });
  }, [playSparkle]);

  return (
    <SoundContext.Provider
      value={{
        soundEnabled,
        toggleSound,
        playClick,
        playClose,
        playBubble,
        playSparkle,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSiteSound(): SoundContextValue {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSiteSound must be used within SoundProvider");
  return ctx;
}

export function SoundToggle() {
  const { soundEnabled, toggleSound } = useSiteSound();
  return (
    <button
      type="button"
      onClick={toggleSound}
      data-no-sound
      aria-label={soundEnabled ? "mute sounds" : "unmute sounds"}
      title={soundEnabled ? "mute sounds" : "unmute sounds"}
      className="sketchy-blob flex h-9 w-9 items-center justify-center border-2 border-ink transition-colors hover:bg-accent-soft"
    >
      {soundEnabled ? (
        <Volume2 className="h-4 w-4" strokeWidth={2.25} />
      ) : (
        <VolumeX className="h-4 w-4" strokeWidth={2.25} />
      )}
    </button>
  );
}
