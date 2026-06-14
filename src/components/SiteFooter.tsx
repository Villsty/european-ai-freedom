import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contribute"
      className="border-t border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-background)_95%,black)]"
    >
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-foreground)]">
              Help this list stay current
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-muted-foreground)]">
              European sovereignty in software is a moving target. Ship something
              new — then open a pull request to list it here. Or fix HQ details
              and hosting claims for tools already on the page.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 md:items-end">
            <Link
              href="https://github.com/Villsty/european-ai-freedom"
              className="inline-flex w-fit items-center gap-2 rounded-[var(--radius)] bg-[var(--color-sovereign)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-sovereign-light)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute on GitHub
              <span aria-hidden>→</span>
            </Link>
            <p className="text-xs text-[var(--color-muted-foreground)] md:text-right">
              Built with Next.js 16 · TypeScript · Tailwind 4 · Vercel
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-muted-foreground)] sm:flex sm:items-center sm:justify-between">
          <p>© {year} European AI Freedom. Informational — not legal advice.</p>
          <p className="mt-2 sm:mt-0">
            <Link href="/guides" className="text-[var(--color-copper)] hover:underline">
              Guides
            </Link>
            {" · "}
            <Link href="/#contribute" className="hover:underline">
              Contribute
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
