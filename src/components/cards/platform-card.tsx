import { PlatformBadge } from "@/components/ui/platform-badge";
import { StatusPill } from "@/components/ui/status-pill";
import type { PlatformSummary } from "@/types/plugin";

export function PlatformCard({ platform }: { platform: PlatformSummary }) {
  return (
    <article className="flex items-center gap-4 rounded-md border border-ash-300/28 bg-surface-raised/20 px-4 py-6">
      <PlatformBadge platform={platform.id} size={50} />
      <div className="flex flex-col gap-4">
        <h3 className="font-display text-2xl leading-display whitespace-nowrap text-white uppercase">
          {platform.name}
        </h3>
        <div className="flex w-55 items-center justify-between">
          <p className="font-helvetica flex items-center gap-1 text-base text-ash-300">
            <span className="tabular-nums">
              [{String(platform.pluginCount).padStart(2, "0")}]
            </span>
            <span>Plugins</span>
          </p>
          <StatusPill
            tone={platform.status === "available" ? "available" : "soon"}
            className="px-2 py-0.5 text-2xs"
          >
            {platform.status === "available" ? "Available" : "Coming Soon"}
          </StatusPill>
        </div>
      </div>
    </article>
  );
}
