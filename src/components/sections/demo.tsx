import { Check, Play } from "lucide-react";

import { AngledButton } from "@/components/ui/angled-button";
import { SectionHeading } from "@/components/ui/section-heading";

const COMPATIBILITY = [
  "Premiere Pro 2026",
  "Windows 10 / 11 and macOS 13+",
  "Works on existing timelines, no project conversion",
  "Runs locally, nothing is uploaded",
];

const SPECS = [
  { label: "Version", value: "v0.04" },
  { label: "Last update", value: "[Date]" },
  { label: "Download size", value: "[Size]" },
];

export function Demo() {
  return (
    <section className="py-23">
      <div className="mx-auto w-full max-w-276 px-5">
        <SectionHeading
          className="mx-auto max-w-140"
          title={
            <>
              See exactly what you&rsquo;re installing.
            </>
          }
          description="Screenshots, walkthroughs, requirements and a live demonstration — all of it before you pay, not after."
        />

        <div className="mt-14 flex gap-5">
          {/* Placeholder for the product demo. Swap in a <video> or an embed
              once the recording exists. */}
          <div className="bg-surface-sunken relative h-88 w-158 shrink-0 rounded-xl border border-white/70">
            <button
              type="button"
              aria-label="Play the ZTracker demo"
              className="bg-brand text-ink absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg"
            >
              <Play className="size-6 fill-current" strokeWidth={0} />
            </button>
          </div>

          <div className="bg-surface-2 flex h-88 flex-1 flex-col rounded-xl p-5">
            <h3 className="font-display text-sm text-ash-300 uppercase">
              Compatibility
            </h3>

            <ul className="mt-4 space-y-2">
              {COMPATIBILITY.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="text-brand mt-0.5 size-5 shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-base text-white">{item}</span>
                </li>
              ))}
            </ul>

            <dl className="mt-auto">
              {SPECS.map((spec) => (
                <div
                  key={spec.label}
                  className="text-ash-500 flex items-center justify-between border-t border-dashed border-white/10 py-2 text-2xs uppercase"
                >
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>

            <AngledButton href="/plugins" className="mt-4 w-full">
              Browse Plugins
            </AngledButton>
          </div>
        </div>
      </div>
    </section>
  );
}
