import Image from "next/image";
import Link from "next/link";

import { AngledButton } from "@/components/ui/angled-button";

const NAV_LINKS = [
  { href: "/plugins", label: "Plugins" },
  { href: "/tools", label: "Tools", note: "(coming soon)" },
  { href: "/#how-it-works", label: "How It Works?" },
];

export function SiteHeader() {
  return (
    <header className="border-ash-600 border-b">
      <div className="mx-auto flex w-full max-w-360 items-center justify-between px-20 py-4">
        <Link href="/" aria-label="Plugzin home">
          <Image
            src="/brand/plugzin-logo.svg"
            alt="Plugzin"
            width={125}
            height={36}
            priority
            unoptimized
          />
        </Link>

        <div className="flex items-start gap-8">
          <nav className="flex items-center gap-6 px-1 py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display hover:text-brand text-base text-white capitalize transition-colors"
              >
                {link.label}
                {link.note ? (
                  <span className="ml-1 font-sans text-2xs font-normal text-white/20">
                    {link.note}
                  </span>
                ) : null}
              </Link>
            ))}
          </nav>

          {/* The cut edges interlock, so the pair overlaps rather than sitting
              in a gap. */}
          <div className="flex items-center">
            <AngledButton href="/sign-in" variant="outline" slant="right" className="-mr-4">
              Sign In
            </AngledButton>
            <AngledButton href="/plugins/ztracker">Get Z-Tracker</AngledButton>
          </div>
        </div>
      </div>
    </header>
  );
}
