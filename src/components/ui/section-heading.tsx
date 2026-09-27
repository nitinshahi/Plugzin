import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Title plus supporting line. Appears five times on the homepage — centred
 * for the full-width sections, left-aligned where a button or a statistic
 * sits beside it.
 */
export function SectionHeading({
  title,
  description,
  align = "center",
  className,
  descriptionClassName,
}: {
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  descriptionClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <h2 className="font-display text-5xl leading-display text-balance uppercase">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "font-helvetica leading-auto text-ash-500 max-w-124 text-base",
            align === "center" && "text-center",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
