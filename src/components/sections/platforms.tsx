import { PlatformCard } from "@/components/cards/platform-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { platforms } from "@/data/platforms";

export function Platforms() {
  return (
    <section className="pt-27 pb-23">
      <div className="mx-auto flex w-full max-w-262 flex-col items-center px-5">
        <SectionHeading
          title="Built for ur softwares"
          description="Filter the catalogue down to the application already open on your machine."
        />
        <div className="mt-10 grid w-full grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
