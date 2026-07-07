"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useSite } from "@/context/SiteContext";

export default function SoundToggle() {
  const { soundEnabled, toggleSound } = useSite();

  return (
    <button
      type="button"
      onClick={toggleSound}
      aria-label={soundEnabled ? "Mute sounds" : "Unmute sounds"}
      className="absolute right-[4.25rem] top-4 z-50 flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-line bg-window text-accent shadow-window transition-colors hover:border-accent"
    >
      {soundEnabled ? (
        <Volume2 size={20} strokeWidth={2} />
      ) : (
        <VolumeX size={20} strokeWidth={2} />
      )}
    </button>
  );
}
