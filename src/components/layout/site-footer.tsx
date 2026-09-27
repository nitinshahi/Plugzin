import Image from "next/image";
import Link from "next/link";
import { Copyright } from "lucide-react";

const FOOTER_LINKS = [
  { href: "/plugins", label: "Plugins" },
  { href: "/support", label: "Support" },
  { href: "/policy", label: "Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto py-16">
      <div className="mx-auto flex w-full max-w-320 flex-col items-center px-5">
        <Image
          src="/brand/plugzin-logo.svg"
          alt="Plugzin"
          width={194}
          height={56}
          unoptimized
        />
        <p className="font-helvetica text-ash-500 mt-4 max-w-88 text-center text-base">
          Professional plugins that automate repetitive work and extend the
          tools you already run.
        </p>

        <nav className="mt-11 flex items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display hover:text-brand text-base text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <hr className="border-ash-600 mt-5 w-full max-w-113 border-t" />

        <div className="text-ash-500 mt-5 flex items-center gap-9 text-2xs">
          <span className="flex items-center gap-1">
            <Copyright className="size-3" />
            Copyright plugzin {new Date().getFullYear()}
          </span>
          <span className="flex items-center gap-1">
            <Image
              src="/brand/novaloop.svg"
              alt=""
              width={22}
              height={12}
              unoptimized
            />
            Developed By Novaloop.tech
          </span>
        </div>
      </div>
    </footer>
  );
}
