import Image from "next/image";
import Link from "next/link";

import { SiteNav } from "@/components/layout/site-nav";
import { UserMenu } from "@/components/layout/user-menu";
import { AngledButton } from "@/components/ui/angled-button";
import { getSession } from "@/lib/session";

export function SiteHeader() {
  const user = getSession();

  return (
    <header className="border-ash-600 relative z-50 border-b">
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

        <div className="flex items-center gap-8">
          <SiteNav />

          {user ? (
            <>
              <span aria-hidden className="bg-ash-500 h-6 w-px" />
              <UserMenu user={user} />
            </>
          ) : (
            <div className="flex items-center">
              <AngledButton
                href="/login"
                variant="outline"
                slant="right"
                className="-mr-4"
              >
                Sign In
              </AngledButton>
              <AngledButton href="/plugins/ztracker">Get Z-Tracker</AngledButton>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
