"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Headset, Layers, LogOut } from "lucide-react";

import type { User } from "@/types/user";

const LINKS = [
  { href: "/account/plugins", label: "My Plugins", icon: Layers },
  { href: "/support", label: "Support", icon: Headset },
];

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function UserMenu({ user }: { user: User }) {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!container.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={container} className="relative">
      <button
        type="button"
        onClick={() => setOpen((shown) => !shown)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2.5"
      >
        <span className="bg-surface text-ash-100 flex size-8 shrink-0 items-center justify-center rounded-full text-2xs font-semibold">
          {initialsOf(user.name)}
        </span>
        <span className="flex flex-col items-start gap-1">
          <span className="font-display text-brand leading-auto text-sm">
            {user.name}
          </span>
          <span className="text-ash-500 leading-auto w-23 truncate text-left text-2xs">
            {user.email}
          </span>
        </span>
        <ChevronDown className="text-ash-500 size-4 shrink-0" />
      </button>

      {open ? (
        <div
          role="menu"
          className="border-ash-600 bg-ink absolute top-full right-0 mt-3 flex w-38 flex-col gap-0.5 rounded-lg border p-2"
        >
          {LINKS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="text-ash-500 hover:text-ash-100 flex h-8 items-center gap-1.5 rounded-md px-2 text-sm transition-colors"
            >
              <span className="bg-surface-2 flex size-5 shrink-0 items-center justify-center rounded-md">
                <Icon className="size-3" />
              </span>
              {label}
            </Link>
          ))}

          <hr className="border-ash-600 my-0.5 border-t border-dashed" />

          <button
            type="button"
            role="menuitem"
            className="text-ash-500 hover:text-ash-100 flex h-8 items-center gap-1.5 rounded-md px-2 text-sm transition-colors"
          >
            <span className="bg-surface-2 flex size-5 shrink-0 items-center justify-center rounded-md">
              <LogOut className="size-3" />
            </span>
            Logout
          </button>
        </div>
      ) : null}
    </div>
  );
}
