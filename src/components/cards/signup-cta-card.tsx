import { ArrowUpRight } from "lucide-react";

import { AngledButton } from "@/components/ui/angled-button";

export function SignupCtaCard() {
  return (
    <article className="rounded-card bg-surface relative h-70 w-full p-1">
      <div className="rounded-card bg-surface-2 relative h-full w-full">
        <div className="absolute inset-x-5 top-25 flex flex-col">
          <h3 className="font-display text-display-sm leading-display text-white uppercase">
            Sign up for early updates
          </h3>
          <p className="font-helvetica leading-auto text-ash-500 mt-1.5 text-xs">
            Transfer and stabilize motion data in seconds, without leaving your
            timeline.
          </p>
          <AngledButton
            href="/signup"
            variant="outlineBrand"
            className="mt-3.5 w-full"
          >
            Sign up Now
            <ArrowUpRight className="ml-1 size-5" strokeWidth={1.25} />
          </AngledButton>
        </div>
      </div>
    </article>
  );
}
