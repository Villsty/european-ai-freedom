import { categories } from "@/lib/alternatives";

export function HeroSection() {
  const totalAlternatives = categories.reduce(
    (sum, cat) => sum + cat.alternatives.length,
    0,
  );

  return (
    <section className="grain relative overflow-hidden px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <p className="animate-fade-up font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-copper)]">
          Sovereign developer guide
        </p>

        <h1 className="animate-fade-up-delay-1 mt-5 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.1] tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl">
          Build with European alternatives to US tech stacks
        </h1>

        <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted-foreground)] sm:text-lg">
          A practical catalog for developers who want GDPR-aligned infrastructure,
          EU-headquartered vendors, and open-source escape hatches — without
          pretending geography solves every compliance question.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#categories"
            className="inline-flex items-center rounded-[var(--radius)] bg-[var(--color-copper)] px-5 py-2.5 text-sm font-medium text-[var(--color-background)] transition-opacity hover:opacity-90"
          >
            Browse {categories.length} categories
          </a>
          <a
            href="#principles"
            className="inline-flex items-center rounded-[var(--radius)] border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:border-[var(--color-muted-foreground)]"
          >
            Read principles
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-[var(--color-border)] pt-8 sm:grid-cols-4">
          <div>
            <dt className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-muted-foreground)]">
              Categories
            </dt>
            <dd className="mt-1 font-[family-name:var(--font-display)] text-3xl text-[var(--color-foreground)]">
              {categories.length}
            </dd>
          </div>
          <div>
            <dt className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-muted-foreground)]">
              Alternatives
            </dt>
            <dd className="mt-1 font-[family-name:var(--font-display)] text-3xl text-[var(--color-foreground)]">
              {totalAlternatives}
            </dd>
          </div>
          <div>
            <dt className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-muted-foreground)]">
              Focus
            </dt>
            <dd className="mt-1 font-[family-name:var(--font-display)] text-3xl text-[var(--color-foreground)]">
              EU
            </dd>
          </div>
          <div>
            <dt className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-muted-foreground)]">
              Stance
            </dt>
            <dd className="mt-1 font-[family-name:var(--font-display)] text-3xl text-[var(--color-foreground)]">
              Pragmatic
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
