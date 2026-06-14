import Link from "next/link";

const homeSections = [
  { href: "/#build", label: "Build" },
  { href: "/#categories", label: "Categories" },
  { href: "/#principles", label: "Principles" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-background)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-baseline gap-2 no-underline">
          <span
            className="font-[family-name:var(--font-display)] text-lg tracking-tight text-[var(--color-foreground)]"
            aria-hidden
          >
            ◈
          </span>
          <span className="font-[family-name:var(--font-display)] text-base font-medium tracking-tight text-[var(--color-foreground)] sm:text-lg">
            European AI Freedom
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 sm:flex">
          {homeSections.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/guides"
            className="text-sm text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)]"
          >
            Guides
          </Link>
          <Link
            href="/#contribute"
            className="text-sm text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)]"
          >
            Contribute
          </Link>
        </nav>

        <Link
          href="/guides"
          className="rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-muted)] px-3 py-1.5 text-xs font-medium text-[var(--color-foreground)] transition-colors hover:border-[var(--color-copper)] sm:text-sm"
        >
          Read guides
        </Link>
      </div>
    </header>
  );
}
