import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type TextFieldProps = ComponentPropsWithoutRef<"input"> & {
  trailing?: ReactNode;
};

export function TextField({ className, trailing, ...props }: TextFieldProps) {
  return (
    <div className="border-ash-100 shadow-xs focus-within:border-brand flex h-12 w-full items-center gap-2 rounded-lg border px-3.5 py-2.5 transition-colors">
      <input
        className={cn(
          "placeholder:text-ash-400 min-w-0 flex-1 bg-transparent text-base leading-6 text-white outline-none",
          className,
        )}
        {...props}
      />
      {trailing}
    </div>
  );
}
