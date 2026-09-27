import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Demo } from "@/components/sections/demo";
import { Hero } from "@/components/sections/hero";
import { Newsletter } from "@/components/sections/newsletter";
import { Platforms } from "@/components/sections/platforms";
import { Plugins } from "@/components/sections/plugins";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Platforms />
        <Plugins />
        <Demo />
        <Process />
        <Testimonials />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
