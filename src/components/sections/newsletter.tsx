import { AngledButton } from "@/components/ui/angled-button";

export function Newsletter() {
  return (
    <section className="pt-23 pb-43">
      <div className="mx-auto w-full max-w-276 px-5">
        <div className="bg-surface-2 flex flex-col items-center rounded-2xl px-20 py-12">
          <h2 className="font-display max-w-188 text-center text-display-md leading-display text-balance text-white uppercase">
            Get your hands on the upcoming tools before anyone
          </h2>
          <p className="font-display mt-4 text-2xl text-white uppercase">
            Subscribe to our Newsletter
          </p>

          {/* No handler yet - this is the frontend pass. Wire it to a provider
              (or a route handler) when the backend work starts. */}
          <form className="mt-8 flex flex-col items-center gap-5">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter email here"
              className="border-ash-600 focus:border-brand h-12 w-104 rounded-lg border bg-transparent px-4 text-base text-white transition-colors outline-none placeholder:text-white/30"
            />
            <AngledButton type="submit" className="w-53 uppercase">
              Subscribe
            </AngledButton>
          </form>
        </div>
      </div>
    </section>
  );
}
