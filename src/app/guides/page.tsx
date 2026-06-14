import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Practical guides for founding European AI companies and building sovereign assistants on Mistral and open models.",
};

export default function GuidesIndexPage() {
  return (
    <section className="px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-copper)]">
          Guides
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-foreground)] sm:text-4xl">
          From idea to sovereign product
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-foreground)]">
          Long-form playbooks for founders and engineers building European
          alternatives to US AI labs and APIs.
        </p>

        <ul className="mt-12 space-y-4">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/guides/${guide.slug}`}
                className="group block rounded-[var(--radius)] border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-muted)_30%,transparent)] p-6 transition-colors hover:border-[var(--color-copper)]/50"
              >
                <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-sovereign-light)]">
                  {guide.eyebrow} · {guide.readTime}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-copper)]">
                  {guide.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                  {guide.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
