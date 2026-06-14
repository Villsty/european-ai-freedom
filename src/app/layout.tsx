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
    default: "European AI Freedom — Sovereign dev stack guide",
    template: "%s · European AI Freedom",
  },
  description:
    "A curated guide to European alternatives for AI, cloud, auth, analytics, and developer tooling — built for teams who want data sovereignty without sacrificing DX.",
  metadataBase: new URL("https://european-ai-freedom.vercel.app"),
  openGraph: {
    title: "European AI Freedom",
    description:
      "European alternatives to US tech stacks — AI, cloud, auth, and more.",
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
