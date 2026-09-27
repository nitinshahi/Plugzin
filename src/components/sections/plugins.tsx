import { PluginCard } from "@/components/cards/plugin-card";
import { SignupCtaCard } from "@/components/cards/signup-cta-card";
import { AngledButton } from "@/components/ui/angled-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedPlugins } from "@/data/plugins";

export function Plugins() {
  const featured = getFeaturedPlugins(2);

  return (
    <section className="py-23">
      <div className="mx-auto w-full max-w-276 px-5">
        <div className="flex items-start justify-between gap-8">
          <SectionHeading
            align="left"
            title="Tools & Plugins"
            description="Tested tools with clear documentation, regular updates and practical support."
            className="max-w-88"
          />
          <AngledButton href="/plugins" className="mt-6">
            Browse Plugins
          </AngledButton>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {featured.map((plugin, index) => (
            <PluginCard
              key={`${plugin.slug}-${index}`}
              plugin={plugin}
              index={index + 1}
            />
          ))}
          <SignupCtaCard />
        </div>
      </div>
    </section>
  );
}
