export type Platform = "premiere-pro" | "after-effects" | "illustrator";

export type Plugin = {
  /** URL segment: /plugins/[slug] */
  slug: string;
  name: string;
  /** One-line hook printed on the card under the name. */
  tagline: string;
  platform: Platform;
  version: string;
  /** Host-app version this build targets, e.g. "Premiere Pro 2026". */
  compatibility: string;
  /** Headline used on the detail page, which names the host app. */
  headline: string;
  /** Bulleted support claims shown beside the demo on the detail page. */
  highlights: string[];
  lastUpdate: string;
  downloadSize: string;
  /** Price in the smallest currency unit, so we never do float math. */
  priceCents: number;
  currency: "USD";
  thumbnail: string;
  /** Filled in once a payment provider is wired up. */
  checkoutUrl: string | null;
  featured: boolean;
};

export type PlatformSummary = {
  id: Platform;
  name: string;
  pluginCount: number;
  status: "available" | "soon";
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string | null;
  verifiedPurchase: boolean;
};
