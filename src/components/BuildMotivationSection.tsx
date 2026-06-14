import {
  buildOpportunities,
  buildReasons,
  manifestoLines,
  starterPaths,
} from "@/lib/build-motivation";

export function BuildMotivationSection() {
  return (
    <section
      id="build"
      className="border-t border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-sovereign)_18%,var(--color-background))] px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-copper)]">
            Build the alternative
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-medium leading-tight text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
            Someone has to build what does not exist yet. That someone can be you.
          </h2>
          {manifestoLines.map((line) => (
            <p
              key={line}
              className="mt-4 text-base leading-relaxed text-[var(--color-foreground)]/90 sm:text-lg"
            >
              {line}
            </p>
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {buildReasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-[var(--radius)] border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-muted)_35%,transparent)] p-6"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[var(--color-foreground)]">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                {reason.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <div className="max-w-2xl">
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-sovereign-light)]">
              Open gaps
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-foreground)] sm:text-3xl">
              Six places US AI still owns the field
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-foreground)] sm:text-base">
              These are not wish lists — they are product opportunities where
              European teams can ship this year and get paid by customers who
              cannot use US APIs.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {buildOpportunities.map((item) => (
              <li
                key={item.title}
                className="grid gap-3 rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-background)] p-5 sm:grid-cols-[1fr_1.2fr_1.4fr]"
              >
                <div>
                  <p className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-foreground)]">
                    {item.title}
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[var(--color-muted-foreground)]">
                    Gap
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                    {item.gap}
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[var(--color-copper)]">
                    Your angle
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-foreground)]/90">
                    {item.angle}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 rounded-[var(--radius)] border border-[var(--color-copper)]/40 bg-[color-mix(in_srgb,var(--color-copper)_10%,var(--color-background))] p-6 sm:p-10">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-copper)]">
            Start this week
          </p>
          <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-foreground)] sm:text-3xl">
            Four steps from idea to listed alternative
          </h3>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {starterPaths.map((path) => (
              <li
                key={path.step}
                className="rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 p-5"
              >
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-copper)]">
                  {path.step}
                </span>
                <h4 className="mt-2 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-foreground)]">
                  {path.action}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                  {path.detail}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#categories"
              className="inline-flex items-center rounded-[var(--radius)] bg-[var(--color-copper)] px-5 py-2.5 text-sm font-medium text-[var(--color-background)] transition-opacity hover:opacity-90"
            >
              See what others already built
            </a>
            <a
              href="#contribute"
              className="inline-flex items-center rounded-[var(--radius)] border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:border-[var(--color-copper)]"
            >
              Add your project when it ships
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
