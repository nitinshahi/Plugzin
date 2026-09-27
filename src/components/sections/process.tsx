import Image from "next/image";

import { AngledButton } from "@/components/ui/angled-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/process";

/**
 * Step positions are absolute because the Figma alternates them above and
 * below the track at irregular intervals - a grid would not reproduce it.
 * Coordinates are relative to the 1064px-wide timeline box.
 */
const STEP_POSITIONS = [
  "top-8 left-0",
  "top-46 left-70",
  "top-7 left-157",
  "top-46 left-226",
];

/**
 * Dashed elbows linking consecutive steps. These are approximated with
 * dashed borders rather than the exact vector from Figma - worth a look
 * against the design before sign-off.
 */
const CONNECTORS = [
  "top-25 left-40 h-20 w-30 border-t border-r",
  "top-25 left-109 h-35 w-47 border-b border-r",
  "top-25 left-196 h-21 w-30 border-t border-r",
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

        <div className="relative mt-16 h-72 w-full">
          {CONNECTORS.map((connector) => (
            <span
              key={connector}
              aria-hidden
              className={`absolute border-dashed border-white/15 ${connector}`}
            />
          ))}

          <Image
            src="/images/process-track.svg"
            alt=""
            aria-hidden
            width={1064}
            height={20}
            unoptimized
            className="absolute top-35 left-0 w-full"
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
              <p className="mt-2 text-2xs leading-snug text-ash-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
