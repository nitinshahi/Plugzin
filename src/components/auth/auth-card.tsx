import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function AuthCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-5 py-15">
      <Link
        href="/"
        aria-label="Plugzin home"
        className="absolute top-8 left-20"
      >
        <Image
          src="/brand/plugzin-logo.svg"
          alt="Plugzin"
          width={125}
          height={36}
          priority
          unoptimized
        />
      </Link>

      <div className="bg-gradient-brand rounded-panel max-w-auth-card w-full p-px">
        <div className="bg-surface-2 rounded-panel flex flex-col items-center gap-5 px-12 py-8">
          <div className="flex flex-col items-center gap-1.5 text-center">
            <h1 className="font-display text-display-sm leading-display text-white uppercase">
              {title}
            </h1>
            {subtitle ? (
              <p className="font-helvetica leading-auto text-ash-300 text-xl">
                {subtitle}
              </p>
            ) : null}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
