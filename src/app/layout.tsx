import type { ReactNode } from "react";
import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Newsreader } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "European AI Freedom — Build sovereign alternatives",
    template: "%s · European AI Freedom",
  },
  description:
    "A motivational guide and catalog for European AI independence — discover EU alternatives, find open gaps, and start building what US tech has not shipped for you.",
  metadataBase: new URL("https://european-ai-freedom.vercel.app"),
  openGraph: {
    title: "European AI Freedom",
    description:
      "Use European AI. Build what is still missing. A guide for sovereign developers and founders.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
