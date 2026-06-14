import type { Alternative } from "@/lib/alternatives";

type AlternativeCardProps = {
  alternative: Alternative;
};

function Badge({
  children,
  variant,
}: {
  children: string;
  variant: "eu" | "oss" | "tag";
}) {
  const styles: Record<typeof variant, string> = {
    eu: "border-[var(--color-sage)]/40 bg-[color-mix(in_srgb,var(--color-sage)_18%,transparent)] text-[var(--color-sage)]",
    oss: "border-[var(--color-sovereign-light)]/40 bg-[color-mix(in_srgb,var(--color-sovereign)_22%,transparent)] text-[var(--color-sovereign-light)]",
    tag: "border-[var(--color-border)] bg-[var(--color-muted)] text-[var(--color-muted-foreground)]",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wide ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

export function AlternativeCard({ alternative }: AlternativeCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[var(--radius)] border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-muted)_40%,transparent)] p-5 transition-colors hover:border-[var(--color-copper)]/50">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h4 className="font-[family-name:var(--font-display)] text-xl font-medium text-[var(--color-paper)]">
            {alternative.name}
          </h4>
          <p className="mt-0.5 font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted-foreground)]">
            {alternative.hq}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {alternative.euHosted ? <Badge variant="eu">EU hosted</Badge> : null}
          {alternative.openSource ? <Badge variant="oss">Open source</Badge> : null}
        </div>
      </div>

      <div className="mt-4 rounded-[var(--radius)] border border-dashed border-[var(--color-us-dim)]/60 bg-[color-mix(in_srgb,var(--color-us-dim)_12%,transparent)] px-3 py-2">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[var(--color-muted-foreground)]">
          Replaces
        </p>
        <p className="mt-0.5 text-sm text-[var(--color-muted-foreground)] line-through decoration-[var(--color-us-dim)]">
          {alternative.replaces}
        </p>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-foreground)]/85">
        {alternative.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {alternative.tags.map((tag) => (
          <Badge key={tag} variant="tag">
            {tag}
          </Badge>
        ))}
      </div>

      <a
        href={alternative.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-medium text-[var(--color-copper)] transition-colors hover:text-[var(--color-foreground)]"
      >
        Visit site
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </a>
    </article>
  );
}
