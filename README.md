# European AI Freedom

A curated developer guide to **European alternatives** for AI, cloud, auth, analytics, email, payments, dev tools, and search — built for teams who want data sovereignty without sacrificing developer experience.

**License:** [MIT](LICENSE) · **Security:** see [SECURITY.md](SECURITY.md)

Live site: [european-ai-freedom.vercel.app](https://european-ai-freedom.vercel.app)

## Stack

| Layer | Choice |
|-------|--------|
| Runtime | Node 22 LTS |
| Package manager | pnpm 10.28.2 |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 |
| Hosting | Vercel |
| Validation | Zod 4 |

## Guides

| Guide | Path |
|-------|------|
| Start a European AI company | `/guides/start-ai-company` |
| Build a European Claude on Mistral | `/guides/european-claude` |

## Local development

```bash
corepack enable
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript check |

## Contributing

Alternatives live in `src/lib/alternatives.ts`. Open a PR to:

- Add a European vendor with HQ, replacement mapping, and tags
- Correct outdated hosting or open-source claims
- Add a new category when the ecosystem matures

## Deploy to Vercel

1. Import `Villsty/european-ai-freedom` in the Vercel dashboard
2. Framework preset: **Next.js**
3. Install command: `corepack enable && pnpm install --frozen-lockfile`
4. Build command: `pnpm build`
5. Node version: **22.x**

No environment variables required for the static catalog site.

## Disclaimer

This site is **informational only — not legal advice**. Vendor HQ, hosting regions,
acquisition status, and legal exposure change. Always verify DPAs, subprocessors,
and data flows for your workload before choosing or building on any listed tool.
