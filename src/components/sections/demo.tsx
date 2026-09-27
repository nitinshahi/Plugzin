import { CompatibilityList } from "@/components/plugins/compatibility-list";
import { SpecList } from "@/components/plugins/spec-list";
import { AngledButton } from "@/components/ui/angled-button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPluginBySlug } from "@/data/plugins";

export function Demo() {
  const plugin = getPluginBySlug("ztracker");

  if (!plugin) {
    return null;
  }

  return (
    <section className="py-23">
      <div className="mx-auto w-full max-w-276 px-5">
        <SectionHeading
          className="mx-auto max-w-140"
          title={<>See exactly what you&rsquo;re installing.</>}
          description="Screenshots, walkthroughs, requirements and a live demonstration — all of it before you pay, not after."
        />

        <div className="mt-14 flex gap-5">
          <MediaPlaceholder
            label={`Play the ${plugin.name} demo`}
            className="h-88 w-158 shrink-0"
          />

          <div className="bg-surface-2 flex h-88 flex-1 flex-col rounded-xl p-5">
            <h3 className="font-display text-ash-300 text-sm uppercase">
              Compatibility
            </h3>

            <div className="mt-4">
              <CompatibilityList items={plugin.highlights} />
            </div>

            <div className="mt-auto">
              <SpecList
                specs={[
                  { label: "Version", value: plugin.version },
                  { label: "Last update", value: plugin.lastUpdate },
                  { label: "Download size", value: plugin.downloadSize },
                ]}
              />
            </div>

            <AngledButton href="/plugins" className="mt-4 w-full">
              Browse Plugins
            </AngledButton>
          </div>
        </div>
      </div>
    </section>
  );
}
