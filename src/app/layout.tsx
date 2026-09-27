import type { Metadata } from "next";
import { fontDisplay, fontHelvetica, fontSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Plugzin — Power up your editing",
    template: "%s | Plugzin",
  },
  description:
    "Production-ready plugins for creators, developers and businesses. Install faster, automate the repetitive work, and get more out of the platforms you already pay for.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHelvetica.variable} ${fontDisplay.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
