import { Inter } from "next/font/google";
import localFont from "next/font/local";

/**
 * The licensed Helvetica files in src/fonts are misnamed - every file holds
 * the face named by a different filename, and several "upright" names are
 * actually oblique cuts. The three below were picked by measuring stem
 * thickness and the 'n' advance width, not by filename, and converted to
 * subsetted woff2 in src/fonts/web. Re-run that check before swapping any of
 * them; see the handover notes for the full table.
 */

/** Headings, nav links and button labels. Stem 159, 'n' advance 500. */
export const fontDisplay = localFont({
  src: "../fonts/web/helvetica-black-condensed.woff2",
  weight: "900",
  style: "normal",
  variable: "--font-display",
  display: "swap",
});

/**
 * Hero copy, status pills and other running text the design sets in
 * Helvetica rather than Inter.
 *
 * Caveat: the set contains no true Helvetica Regular. The 400 here measures
 * stem 88 against an ideal of ~76, so body copy renders a little heavier
 * than the design; 700 measures 139 against an ideal of ~118.
 */
export const fontHelvetica = localFont({
  src: [
    { path: "../fonts/web/helvetica-regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/web/helvetica-bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

/** Plugin cards and testimonials - the design uses Inter for these. */
export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
