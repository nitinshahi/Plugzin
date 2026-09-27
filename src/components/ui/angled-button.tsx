import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * A clip-path polygon was the obvious approach but gets two things wrong: it
 * cuts a sharp wedge where the real shape rounds off as the diagonal meets the
 * top and bottom edges, and it strips the outline variant's 1px stroke from
 * the cut edge. The shapes live in globals.css as border-image utilities.
 *
 * Trade-off: the fill lives inside the SVG, so changing --brand means editing
 * button-primary.svg as well.
 */
const SHAPES = {
  primary: "btn-shape-primary",
  outline: "btn-shape-outline",
  outlineBrand: "btn-shape-outline-brand",
} as const;

type Variant = keyof typeof SHAPES;
type Slant = "left" | "right";

type AngledButtonProps = {
  variant?: Variant;
  /** Which edge carries the cut. The artwork is cut on the left, so a
   *  right-slanted button is the same vector turned 180 degrees - which is
   *  exactly how the interlocking header pair is built in Figma. */
  slant?: Slant;
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;

export function AngledButton({
  variant = "primary",
  slant = "left",
  href,
  className,
  children,
  ...props
}: AngledButtonProps) {
  const inner = (
    <>
      <span
        aria-hidden
        className={cn(
          "transition-filter absolute inset-0 duration-150",
          SHAPES[variant],
          slant === "right" && "rotate-180",
          variant === "primary"
            ? "group-hover:brightness-90"
            : "group-hover:brightness-150",
        )}
      />
      <span className="relative">{children}</span>
    </>
  );

  const classes = cn(
    "group relative inline-flex h-11 items-center justify-center rounded-lg",
    "font-display text-base whitespace-nowrap",
    "focus-visible:ring-brand focus-visible:ring-offset-ink outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    /* Figma gives the cut side far more room, and pads the outline variant
       more generously than the primary. These match the measured values. */
    variant === "primary"
      ? slant === "left"
        ? "pr-3 pl-8"
        : "pr-8 pl-3"
      : slant === "left"
        ? "pr-4 pl-12"
        : "pr-12 pl-4",
    variant === "primary" ? "text-ink" : "text-white",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {inner}
    </button>
  );
}
