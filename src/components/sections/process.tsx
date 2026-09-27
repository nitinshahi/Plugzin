import Image from "next/image";

import { AngledButton } from "@/components/ui/angled-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/process";

/**
 * The steps alternate above and below the track at irregular intervals, so
 * they are placed absolutely. Coordinates come from the Figma frame, measured
 * from the top-left of the 1064-wide timeline box and snapped to the 4px grid.
 */
const STEP_POSITIONS = [
  "top-1 left-0",
  "top-39 left-70",
  "top-0 left-157",
  "top-40 left-226",
];

/** The dashed elbows between consecutive steps, exported from Figma. */
const CONNECTORS = [
  {
    src: "/images/process-connector-1.svg",
    width: 101,
    height: 122,
    position: "top-46 left-66 h-29 w-25",
  },
  {
    src: "/images/process-connector-2.svg",
    width: 176,
    height: 209,
    position: "top-6 left-110 h-51 w-43",
  },
  {
    src: "/images/process-connector-3.svg",
    width: 104,
    height: 122,
    position: "top-46 left-221 h-29 w-25",
  },
];

export function Process() {
  return (
    <section id="how-it-works" className="py-23">
      <div className="mx-auto w-full max-w-276 px-5">
        <SectionHeading
          className="mx-auto max-w-140"
          title="From discovery to activation."
          description="Four steps, and none of them involve waiting for an email."
        />

        <div className="mt-8 flex justify-center">
          <AngledButton href="/plugins/ztracker">
            Download Z-Tracker Now
          </AngledButton>
        </div>

        <div className="relative mt-19 h-76 w-full">
          {CONNECTORS.map((connector) => (
            <Image
              key={connector.src}
              src={connector.src}
              alt=""
              aria-hidden
              width={connector.width}
              height={connector.height}
              unoptimized
              className={`absolute ${connector.position}`}
            />
          ))}

          <Image
            src="/images/process-track.svg"
            alt=""
            aria-hidden
            width={1064}
            height={20}
            unoptimized
            className="absolute top-28 left-0 w-full"
          />

          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`absolute w-40 ${STEP_POSITIONS[index]}`}
            >
              <p className="font-display text-lg leading-none text-white">
                {step.number}
              </p>
              <p className="font-display mt-2 text-sm leading-none text-white uppercase">
                {step.title}
              </p>
              <p className="text-ash-300 mt-2 text-2xs leading-snug">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
