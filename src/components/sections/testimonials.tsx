import { TestimonialCard } from "@/components/cards/testimonial-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-23">
      <div className="mx-auto w-full max-w-276 px-5">
        <div className="flex items-start justify-between gap-8">
          <SectionHeading
            align="left"
            title="Used by people who build for a living."
            description="Every review below is tied to a purchase, no invited testimonials."
            className="max-w-128"
          />
          <div className="shrink-0 text-right">
            <p className="font-display text-brand text-display-lg leading-none">
              102+
            </p>
            <p className="font-display mt-3 text-sm text-white uppercase">
              Total Downloads
            </p>
          </div>
        </div>

        <div className="mt-11 grid grid-cols-3 gap-4">
          {testimonials.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
