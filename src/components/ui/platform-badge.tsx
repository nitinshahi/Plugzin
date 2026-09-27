import Image from "next/image";

import { cn } from "@/lib/utils";
import type { Platform } from "@/types/plugin";

const LOGOS: Record<Platform, { src: string; label: string }> = {
  "premiere-pro": {
    src: "/brand/platforms/premiere-pro.svg",
    label: "Adobe Premiere Pro",
  },
  "after-effects": {
    src: "/brand/platforms/after-effects.svg",
    label: "Adobe After Effects",
  },
  illustrator: {
    src: "/brand/platforms/illustrator.svg",
    label: "Adobe Illustrator",
  },
};

/**
 * Rounded app-icon badge. Rendered at 50px on the platform cards and at 14px
 * inline on the plugin card spec rows, so the size comes in as a prop rather
 * than being baked in.
 */
export function PlatformBadge({
  platform,
  size = 50,
  className,
}: {
  platform: Platform;
  size?: number;
  className?: string;
}) {
  const { src, label } = LOGOS[platform];

  return (
    <Image
      src={src}
      alt={label}
      width={size}
      height={size}
      className={cn("shrink-0", className)}
    />
  );
}
