import Image from "next/image";

import { AngledButton } from "@/components/ui/angled-button";
import { StatusPill } from "@/components/ui/status-pill";

const TRUST_MARKERS = [
  "Instant Download",
  "Secured checkout",
  "Verified plugins",
  "Regular updates",
];

export function Hero() {
  return (
    <section className="relative h-189 w-full overflow-hidden">
      <Image
        src="/images/hero-track.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto w-full max-w-360 px-20 pt-46">
        <div className="flex flex-col gap-8">
          <div className="flex max-w-138 flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="font-display text-display-xl leading-display text-white uppercase">
                {/* The lime plate in the Figma is a rectangle sitting behind
                    the first line; as an inline background it tracks the text
                    instead of being pinned to one headline length. */}
                <span className="bg-brand text-ink">&nbsp;Power Up&nbsp;</span>
                <br />
                your editing
              </h1>
              <p className="font-helvetica max-w-124 text-base text-white">
                Production-ready plugins for creators, developers and
                businesses. Install faster, automate the repetitive work, and
                get more out of the platforms you already pay for.
              </p>
            </div>

            <div className="flex items-center">
              <AngledButton
                href="/plugins"
                variant="outline"
                slant="right"
                className="-mr-4"
              >
                Explore Plugins
              </AngledButton>
              <AngledButton href="/plugins/ztracker">
                Get Z-Tracker
              </AngledButton>
            </div>
          </div>

          <ul className="flex w-max max-w-full flex-wrap items-center gap-4">
            {TRUST_MARKERS.map((marker) => (
              <li key={marker}>
                <StatusPill>{marker}</StatusPill>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
