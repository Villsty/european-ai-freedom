import { AlternativeCard } from "@/components/AlternativeCard";
import { categories } from "@/lib/alternatives";

export function CategorySection() {
  return (
    <section
      id="categories"
      className="border-t border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-background)_92%,black)] px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-sovereign-light)]">
            Stack map
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-foreground)] sm:text-4xl">
            Eight layers where Europe has real options
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted-foreground)] sm:text-base">
            Each card names a US-default stack and the European tools that can
            replace it in production. Verify data residency and DPA terms for
            your specific workload before migrating.
          </p>
        </div>

        <div className="mt-14 space-y-20">
          {categories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-20">
              <div className="flex flex-col gap-4 border-b border-[var(--color-border)] pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-foreground)]">
                    {category.label}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-[var(--color-muted-foreground)]">
                    {category.description}
                  </p>
                </div>
                <div className="shrink-0 rounded-[var(--radius)] border border-[var(--color-us-dim)]/50 bg-[color-mix(in_srgb,var(--color-us-dim)_15%,transparent)] px-4 py-2">
                  <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[var(--color-muted-foreground)]">
                    US default
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--color-muted-foreground)] line-through">
                    {category.usDefault}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.alternatives.map((alternative) => (
                  <AlternativeCard
                    key={alternative.name}
                    alternative={alternative}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
