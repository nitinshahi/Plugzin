import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Tone = "neutral" | "available" | "soon";

const TONES: Record<Tone, { wrapper: string; dot: string }> = {
  /* Hero trust markers: hairline outline, no fill. */
  neutral: { wrapper: "border-ash-100 text-ash-100", dot: "bg-ash-100" },
  available: {
    wrapper: "border-brand bg-brand/[0.13] text-white",
    dot: "bg-brand",
  },
  soon: {
    wrapper: "border-warn bg-warn/[0.13] text-white",
    dot: "bg-warn",
  },
};

/**
 * Dot-and-label pill. Used seven times across the homepage: four trust
 * markers under the hero and one availability badge per platform card.
 */
export function StatusPill({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  const { wrapper, dot } = TONES[tone];

  return (
    <span
      className={cn(
        "font-helvetica inline-flex items-center justify-center gap-1.5 rounded-full border px-2 py-1 text-xs whitespace-nowrap",
        wrapper,
        className,
      )}
    >
      <span aria-hidden className={cn("size-2 rounded-full", dot)} />
      {children}
    </span>
  );
}
