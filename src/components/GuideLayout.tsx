import type { ReactNode } from "react";
import Link from "next/link";

type GuideLayoutProps = {
  title: string;
  description: string;
  eyebrow: string;
  readTime: string;
  children: ReactNode;
};

export function GuideLayout({
  title,
  description,
  eyebrow,
  readTime,
  children,
}: GuideLayoutProps) {
  return (
    <article className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/guides"
          className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-copper)] hover:underline"
        >
          ← All guides
        </Link>

        <p className="mt-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-sovereign-light)]">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-medium leading-tight text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-foreground)] sm:text-lg">
          {description}
        </p>
        <p className="mt-3 font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted-foreground)]">
          {readTime} read · Last updated June 2026
        </p>

        <div className="guide-prose mt-12">{children}</div>
      </div>
    </article>
  );
}
