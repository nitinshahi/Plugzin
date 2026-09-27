import { Check } from "lucide-react";

import type { Testimonial } from "@/types/plugin";

export function TestimonialCard({ review }: { review: Testimonial }) {
  return (
    <figure className="bg-surface-2 flex h-full min-h-59 flex-col rounded-lg p-4">
      <blockquote className="text-ash-500 text-base leading-6">
        {review.quote}
      </blockquote>

      <hr className="mt-auto mb-5 border-t border-white/10" />

      <figcaption className="flex items-end justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <span
            aria-hidden
            className="bg-surface size-11 shrink-0 rounded-full"
          />
          <div>
            <p className="font-display text-base text-white uppercase">
              {review.author}
            </p>
            <p className="text-ash-500 text-sm">{review.role}</p>
          </div>
        </div>
        {review.verifiedPurchase ? (
          <span className="text-ash-500 flex items-center gap-1.5 text-2xs whitespace-nowrap">
            <Check className="size-3" strokeWidth={2.5} />
            Verified Purchase
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
