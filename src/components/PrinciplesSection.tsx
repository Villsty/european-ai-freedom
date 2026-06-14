import { principles } from "@/lib/alternatives";

export function PrinciplesSection() {
  return (
    <section
      id="principles"
      className="bg-[var(--color-paper)] px-5 py-16 text-[var(--color-paper-foreground)] sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-copper)]">
            Operating principles
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
            Sovereignty without slogans
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-paper-foreground)_70%,transparent)] sm:text-base">
            European digital independence is an engineering problem, not a
            bumper sticker. These rules keep the guide useful for real product
            teams.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <li
              key={principle.title}
              className="rounded-[var(--radius)] border border-[color-mix(in_srgb,var(--color-paper-foreground)_12%,transparent)] bg-white/50 p-6"
            >
              <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-copper)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-medium">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-paper-foreground)_75%,transparent)]">
                {principle.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
