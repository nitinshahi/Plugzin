"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/plugins", label: "Plugins", match: "/plugins" },
  { href: "/tools", label: "Tools", note: "(coming soon)", match: "/tools" },
  { href: "/#how-it-works", label: "How It Works?" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6 px-1 py-3">
      {NAV_LINKS.map((link) => {
        const active = link.match ? pathname.startsWith(link.match) : false;

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "font-display text-base capitalize transition-colors",
              active ? "text-brand underline" : "hover:text-brand text-white",
            )}
          >
            {link.label}
            {link.note ? (
              <span className="text-2xs ml-1 font-sans font-normal text-white/20">
                {link.note}
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
