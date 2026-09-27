import type { Plugin } from "@/types/plugin";

/**
 * Placeholder catalogue. Pages read through the helpers below rather than
 * touching this array, so swapping in an API or a CMS later is a change to
 * this file alone.
 */
const plugins: Plugin[] = [
  {
    slug: "ztracker",
    name: "ZTracker",
    tagline:
      "Transfer and stabilize motion data in seconds, without leaving your timeline.",
    platform: "premiere-pro",
    version: "v0.04",
    compatibility: "Premiere Pro 2026",
    headline: "Z-Tracker for Premiere Pro",
    highlights: [
      "Premiere Pro 2026",
      "Windows 10 / 11 and macOS 13+",
      "Works on existing timelines, no project conversion",
      "Runs locally, nothing is uploaded",
    ],
    lastUpdate: "[Date]",
    downloadSize: "[Size]",
    priceCents: 2799,
    currency: "USD",
    thumbnail: "/images/plugins/ztracker.jpg",
    checkoutUrl: null,
    featured: true,
  },
];

/** The homepage shows a row of three; duplicated until the catalogue fills up. */
export function getFeaturedPlugins(count = 3): Plugin[] {
  const featured = plugins.filter((plugin) => plugin.featured);
  return Array.from(
    { length: count },
    (_, index) => featured[index % featured.length],
  );
}

export function getPlugins(): Plugin[] {
  return plugins;
}

export function getPluginBySlug(slug: string): Plugin | undefined {
  return plugins.find((plugin) => plugin.slug === slug);
}

export function formatPrice(plugin: Plugin): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: plugin.currency,
    minimumFractionDigits: 0,
  }).format(plugin.priceCents / 100);
}
