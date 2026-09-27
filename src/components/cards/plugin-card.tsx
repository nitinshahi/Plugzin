import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PlatformBadge } from "@/components/ui/platform-badge";
import { formatPrice } from "@/data/plugins";
import type { Plugin } from "@/types/plugin";

/**
 * The artwork runs edge to edge and a folder-tab panel is laid over the lower
 * portion of it, with the plugin name sitting up in the raised tab. The tab
 * silhouette is the vector exported from Figma - its rounded corners and the
 * diagonal step can't be expressed as a clip-path.
 */
export function PluginCard({
  plugin,
  index,
}: {
  plugin: Plugin;
  index: number;
}) {
  return (
    <article className="rounded-card bg-surface relative h-70 w-full p-1">
      <div className="rounded-card bg-surface-2 relative h-full w-full overflow-hidden">
        <Image
          src={plugin.thumbnail}
          alt=""
          fill
          sizes="344px"
          className="object-cover"
        />

        <span className="absolute top-3 right-3 rounded bg-black/70 px-1.5 py-1 text-sm leading-none font-bold text-brand-dim tabular-nums">
          {String(index).padStart(2, "0")}
        </span>

        <Image
          src="/images/plugin-card-panel.svg"
          alt=""
          aria-hidden
          width={337}
          height={225}
          unoptimized
          className="absolute inset-x-0 top-12 h-56 w-full"
        />

        <div className="absolute inset-x-5 top-14 bottom-2.5 flex flex-col">
          <h3 className="text-base leading-tight font-bold text-white uppercase">
            {plugin.name}
          </h3>
          <p className="text-ash-500 mt-1.5 text-xs font-medium">
            {plugin.tagline}
          </p>

          <hr className="my-3 border-t border-dashed border-white/10" />

          <dl className="text-ash-500 space-y-2 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <dt>Platform:</dt>
              <dd className="flex items-center">
                <PlatformBadge platform={plugin.platform} size={14} />
              </dd>
            </div>
            <div className="flex items-center gap-1.5">
              <dt>Version:</dt>
              <dd>{plugin.version}</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <dt>Compatibility:</dt>
              <dd>{plugin.compatibility}</dd>
            </div>
          </dl>

          <hr className="mt-3 mb-2 border-t border-dashed border-white/10" />

          <div className="mt-auto flex items-center justify-between">
            <p className="text-brand text-3xl leading-none font-bold">
              {formatPrice(plugin)}
            </p>
            <Link
              href={`/plugins/${plugin.slug}`}
              className="font-helvetica hover:text-brand flex items-center gap-0.5 text-xs font-bold text-white uppercase transition-colors"
            >
              Get Now
              <ArrowUpRight className="size-5" strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
