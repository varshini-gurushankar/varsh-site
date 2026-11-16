/* Hand-drawn SVG doodles shared across the site. All strokes inherit
   `currentColor` so the teal/mustard palette is applied by the parent. */

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M16 3 C17 10 18.5 12.5 25 14.5 C18.5 16.5 17 19 16 26 C15 19 13.5 16.5 7 14.5 C13.5 12.5 15 10 16 3 Z"
        fill="currentColor"
      />
      <path
        d="M25.5 4.5 C25.9 6.8 26.4 7.6 28.5 8.3 C26.4 9 25.9 9.8 25.5 12 C25.1 9.8 24.6 9 22.5 8.3 C24.6 7.6 25.1 6.8 25.5 4.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Wobbly hand-drawn underline. */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 14"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M4 9 C 60 3, 120 11, 170 7 C 220 3, 270 10, 316 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small curved arrow, pointing down-right (used for "that's me!"). */
export function CurvyArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 44" className={className} aria-hidden="true">
      <path
        d="M6 6 C 26 10, 44 18, 50 34"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M41 30 L 50 35 L 52 25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Hand-drawn self-portrait doodle (face, headband, wavy hair, shoulders). */
export function PortraitDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 300"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {/* flying hair strands */}
      <path d="M58 92 C 44 70, 46 50, 62 34" />
      <path d="M262 120 C 278 112, 288 98, 288 82" />
      <path d="M248 210 C 262 214, 272 224, 276 238" />
      <path d="M44 170 C 32 164, 24 152, 22 138" strokeWidth="6" />
      {/* face */}
      <path d="M106 98 C 100 150, 118 192, 160 196 C 204 192, 222 150, 216 96" />
      {/* hair + headband */}
      <path d="M100 118 C 88 74, 118 36, 162 34 C 208 36, 236 76, 224 120" />
      <path d="M112 84 C 134 62, 190 60, 212 82" strokeWidth="6" />
      <path d="M218 90 C 234 72, 238 54, 228 40" />
      {/* happy closed eyes */}
      <path d="M128 136 C 134 128, 144 128, 150 136" strokeWidth="6" />
      <path d="M172 136 C 178 128, 188 128, 194 136" strokeWidth="6" />
      {/* smile */}
      <path d="M142 166 C 152 176, 170 176, 180 166" strokeWidth="6" />
      {/* shoulders */}
      <path d="M78 286 C 92 234, 122 212, 160 212 C 198 212, 228 234, 242 286" />
    </svg>
  );
}

/**
 * Open laptop seen from behind — the lid is the sticker canvas.
 * Stickers are positioned by the parent over the lid area.
 */
export function LaptopDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 400"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* lid (back of the screen) */}
      <path
        d="M84 26 C 74 25, 68 31, 67 41 L 59 300 C 58.5 312, 65 318, 76 318.5 L 442 324 C 453 324.5, 460 318, 460 307 L 455 42 C 454.8 31, 448 25.5, 438 26 Z"
        strokeWidth="7"
        fill="var(--paper-card)"
      />
      {/* subtle inner line for depth */}
      <path
        d="M92 40 L 85 304 M 447 52 L 450 306"
        strokeWidth="3"
        opacity="0.25"
      />
      {/* keyboard base peeking out behind the lid */}
      <path
        d="M59 318.5 L 36 352 C 32 358, 35 364, 43 364 L 477 364 C 485 364, 488 358, 484 352 L 460 318.5"
        strokeWidth="7"
        fill="var(--paper-card)"
      />
      <path d="M59 319 L 460 319" strokeWidth="5" />
      {/* little rubber feet */}
      <path d="M92 364 L 92 372 M 428 364 L 428 372" strokeWidth="6" />
    </svg>
  );
}

/* ---------- sticker shape helpers (deterministic, SSR-safe) ---------- */

/** Fixed jitter so shapes look hand-cut but render identically on server/client. */
const JITTER = [1.8, -1.2, 0.6, -2.0, 1.1, -0.4, 2.0, -1.6, 0.9, -0.8, 1.4, -1.9];

function polarPoints(
  cx: number,
  cy: number,
  radii: number[],
  startAngle = -90,
): string {
  const n = radii.length;
  return radii
    .map((r, i) => {
      const a = ((startAngle + (360 / n) * i) * Math.PI) / 180;
      const j = JITTER[i % JITTER.length];
      const x = cx + (r + j) * Math.cos(a);
      const y = cy + (r + j) * Math.sin(a);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

/** Slightly irregular hexagon. */
export function HexSticker({ className }: { className?: string }) {
  const pts = polarPoints(100, 90, [84, 84, 84, 84, 84, 84]);
  return (
    <svg viewBox="0 0 200 180" className={className} aria-hidden="true">
      <polygon
        points={pts}
        fill="var(--paper-card)"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Scalloped seal / badge (die-cut star sticker). */
export function BadgeSticker({ className }: { className?: string }) {
  const radii: number[] = [];
  for (let i = 0; i < 24; i++) radii.push(i % 2 === 0 ? 96 : 80);
  const pts = polarPoints(100, 100, radii);
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <polygon
        points={pts}
        fill="var(--paper-card)"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Classic five-point star sticker. */
export function StarSticker({ className }: { className?: string }) {
  const radii: number[] = [];
  for (let i = 0; i < 10; i++) radii.push(i % 2 === 0 ? 96 : 46);
  const pts = polarPoints(100, 104, radii);
  return (
    <svg viewBox="0 0 200 208" className={className} aria-hidden="true">
      <polygon
        points={pts}
        fill="var(--paper-card)"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
