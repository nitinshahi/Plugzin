import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

export function MediaPlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-surface-sunken relative rounded-xl border border-white/70",
        className,
      )}
    >
      <button
        type="button"
        aria-label={label}
        className="bg-brand text-ink absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg"
      >
        <Play className="size-6 fill-current" strokeWidth={0} />
      </button>
    </div>
  );
}
