import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CompatibilityList } from "@/components/plugins/compatibility-list";
import { SpecList } from "@/components/plugins/spec-list";
import { Newsletter } from "@/components/sections/newsletter";
import { Testimonials } from "@/components/sections/testimonials";
import { AngledButton } from "@/components/ui/angled-button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { formatPrice, getPluginBySlug, getPlugins } from "@/data/plugins";

export function generateStaticParams() {
  return getPlugins().map((plugin) => ({ slug: plugin.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/plugins/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const plugin = getPluginBySlug(slug);

  return plugin
    ? { title: plugin.headline, description: plugin.tagline }
    : { title: "Plugin not found" };
}

export default async function PluginDetailPage({
  params,
}: PageProps<"/plugins/[slug]">) {
  const { slug } = await params;
  const plugin = getPluginBySlug(slug);

  if (!plugin) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main>
        <section className="pt-21 pb-5">
          <div className="mx-auto w-full max-w-276 px-5">
            <div className="flex gap-10">
              <MediaPlaceholder
                label={`Play the ${plugin.name} demo`}
                className="h-85 w-152 shrink-0"
              />

              <div className="flex flex-1 flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <h1 className="font-display text-display-md leading-display text-white uppercase">
                    {plugin.headline}
                  </h1>
                  <p className="font-helvetica leading-auto text-ash-300 text-base">
                    {plugin.tagline}
                  </p>
                  <p className="font-display text-brand text-3xl leading-display uppercase">
                    {formatPrice(plugin)}
                  </p>
                </div>

                <CompatibilityList items={plugin.highlights} />

                <SpecList
                  specs={[
                    { label: "Version", value: plugin.version },
                    { label: "Last update", value: plugin.lastUpdate },
                    { label: "Download size", value: plugin.downloadSize },
                  ]}
                />

                <AngledButton
                  href={plugin.checkoutUrl ?? `/plugins/${plugin.slug}`}
                  className="w-92 font-sans text-sm font-semibold"
                >
                  Purchase Now
                </AngledButton>
              </div>
            </div>

            <hr className="border-ash-600 mt-21 border-t border-dashed" />
          </div>
        </section>

        <Testimonials />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
