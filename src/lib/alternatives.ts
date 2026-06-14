import { z } from "zod";

export const categoryIdSchema = z.enum([
  "ai",
  "cloud",
  "auth",
  "analytics",
  "email",
  "payments",
  "devtools",
  "search",
]);

export type CategoryId = z.infer<typeof categoryIdSchema>;

export type Alternative = {
  name: string;
  hq: string;
  replaces: string;
  summary: string;
  url: string;
  tags: string[];
  euHosted: boolean;
  openSource: boolean;
};

export type Category = {
  id: CategoryId;
  label: string;
  description: string;
  usDefault: string;
  alternatives: Alternative[];
};

export const categories: Category[] = [
  {
    id: "ai",
    label: "AI & LLMs",
    description:
      "Foundation models, inference APIs, and agent tooling built or headquartered in Europe.",
    usDefault: "OpenAI · Anthropic · Google AI",
    alternatives: [
      {
        name: "Mistral AI",
        hq: "Paris, France",
        replaces: "OpenAI GPT / Anthropic Claude",
        summary:
          "Frontier open and commercial models with EU data residency options and strong multilingual performance.",
        url: "https://mistral.ai",
        tags: ["LLM", "API", "Open weights"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Aleph Alpha",
        hq: "Heidelberg, Germany",
        replaces: "Enterprise LLM APIs",
        summary:
          "Sovereign AI platform for regulated industries — on-prem, private cloud, and EU-hosted SaaS.",
        url: "https://aleph-alpha.com",
        tags: ["Enterprise", "Sovereign", "RAG"],
        euHosted: true,
        openSource: false,
      },
      {
        name: "Hugging Face",
        hq: "Paris, France",
        replaces: "Closed model hubs",
        summary:
          "Open model registry, inference endpoints, and Spaces — the commons layer for European AI builders.",
        url: "https://huggingface.co",
        tags: ["Hub", "Inference", "Community"],
        euHosted: true,
        openSource: true,
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & hosting",
    description:
      "Compute, storage, and edge infrastructure operated from European jurisdictions.",
    usDefault: "AWS · GCP · Azure (US-controlled)",
    alternatives: [
      {
        name: "Scaleway",
        hq: "Paris, France",
        replaces: "AWS / GCP core services",
        summary:
          "Full cloud stack — Kubernetes, object storage, GPU instances — under French law and EU data protection.",
        url: "https://www.scaleway.com",
        tags: ["IaaS", "K8s", "GPU"],
        euHosted: true,
        openSource: false,
      },
      {
        name: "Hetzner",
        hq: "Nuremberg, Germany",
        replaces: "US VPS providers",
        summary:
          "High-value dedicated and cloud servers with data centres in Germany and Finland.",
        url: "https://www.hetzner.com",
        tags: ["VPS", "Dedicated", "Object storage"],
        euHosted: true,
        openSource: false,
      },
      {
        name: "OVHcloud",
        hq: "Roubaix, France",
        replaces: "Hyperscaler bare metal",
        summary:
          "European hyperscaler with bare metal, managed databases, and a global footprint anchored in the EU.",
        url: "https://www.ovhcloud.com",
        tags: ["Bare metal", "Managed DB", "CDN"],
        euHosted: true,
        openSource: false,
      },
    ],
  },
  {
    id: "auth",
    label: "Auth & identity",
    description:
      "Authentication, SSO, and identity providers you can run or host in Europe.",
    usDefault: "Auth0 · Okta · Clerk",
    alternatives: [
      {
        name: "Keycloak",
        hq: "Red Hat / EU deployments",
        replaces: "Auth0 / Okta",
        summary:
          "Open-source IAM with OIDC, SAML, and social login — self-host on any EU cloud for full control.",
        url: "https://www.keycloak.org",
        tags: ["OIDC", "SAML", "Self-hosted"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Zitadel",
        hq: "Winterthur, Switzerland",
        replaces: "Auth0",
        summary:
          "Cloud-native identity with passkeys, machine-to-machine auth, and Swiss/EU hosting options.",
        url: "https://zitadel.com",
        tags: ["Passkeys", "B2B", "SaaS or self-host"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Supabase Auth",
        hq: "EU regions available",
        replaces: "Firebase Auth",
        summary:
          "Postgres-backed auth with RLS — deploy projects in Frankfurt or other EU regions via Supabase.",
        url: "https://supabase.com",
        tags: ["Postgres", "RLS", "EU region"],
        euHosted: true,
        openSource: true,
      },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    description:
      "Privacy-first measurement without shipping visitor data to US ad-tech pipelines.",
    usDefault: "Google Analytics · Mixpanel",
    alternatives: [
      {
        name: "Plausible",
        hq: "Tallinn, Estonia",
        replaces: "Google Analytics",
        summary:
          "Lightweight, GDPR-compliant web analytics — no cookies, no personal data collection.",
        url: "https://plausible.io",
        tags: ["Privacy", "Cookieless", "SaaS"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Matomo",
        hq: "New Zealand / EU cloud",
        replaces: "Google Analytics 360",
        summary:
          "Full-featured analytics you can self-host in the EU — GDPR and ePrivacy built in.",
        url: "https://matomo.org",
        tags: ["Self-host", "GDPR", "Enterprise"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Umami",
        hq: "Open source",
        replaces: "Mixpanel / Amplitude",
        summary:
          "Simple, self-hosted analytics with a clean dashboard — ideal for indie SaaS and docs sites.",
        url: "https://umami.is",
        tags: ["Self-host", "Minimal", "Open source"],
        euHosted: true,
        openSource: true,
      },
    ],
  },
  {
    id: "email",
    label: "Email",
    description:
      "Transactional and marketing email from European providers.",
    usDefault: "SendGrid · Mailchimp · Postmark",
    alternatives: [
      {
        name: "Brevo",
        hq: "Paris, France",
        replaces: "SendGrid / Mailchimp",
        summary:
          "Transactional and marketing email with EU data processing and strong deliverability tooling.",
        url: "https://www.brevo.com",
        tags: ["Transactional", "Marketing", "CRM"],
        euHosted: true,
        openSource: false,
      },
      {
        name: "Mailjet",
        hq: "Paris, France",
        replaces: "SendGrid",
        summary:
          "Sinch-owned EU email API with template builder and event webhooks for product teams.",
        url: "https://www.mailjet.com",
        tags: ["API", "Templates", "Webhooks"],
        euHosted: true,
        openSource: false,
      },
      {
        name: "Resend",
        hq: "EU region available",
        replaces: "Postmark",
        summary:
          "Developer-first email API — use EU infrastructure where available for transactional mail.",
        url: "https://resend.com",
        tags: ["DX", "React Email", "API"],
        euHosted: true,
        openSource: false,
      },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    description:
      "Payment rails and merchant services headquartered in the EU.",
    usDefault: "Stripe (US entity) · PayPal",
    alternatives: [
      {
        name: "Mollie",
        hq: "Amsterdam, Netherlands",
        replaces: "Stripe Checkout",
        summary:
          "European payment service provider with iDEAL, SEPA, Bancontact, and card acquiring across the EU.",
        url: "https://www.mollie.com",
        tags: ["SEPA", "iDEAL", "Subscriptions"],
        euHosted: true,
        openSource: false,
      },
      {
        name: "Adyen",
        hq: "Amsterdam, Netherlands",
        replaces: "Stripe / Braintree at scale",
        summary:
          "Global acquiring platform with EU legal entity — favoured by large merchants needing unified reporting.",
        url: "https://www.adyen.com",
        tags: ["Enterprise", "Unified commerce", "POS"],
        euHosted: true,
        openSource: false,
      },
      {
        name: "Vipps MobilePay",
        hq: "Oslo, Norway",
        replaces: "US wallet apps",
        summary:
          "Dominant Nordic mobile wallet — essential for Norwegian and Danish consumer checkout flows.",
        url: "https://vippsmobilepay.com",
        tags: ["Nordics", "Wallet", "Checkout"],
        euHosted: true,
        openSource: false,
      },
    ],
  },
  {
    id: "devtools",
    label: "Dev tools & CI",
    description:
      "Source control, CI/CD, and collaboration tools with European roots or hosting.",
    usDefault: "GitHub (Microsoft) · CircleCI",
    alternatives: [
      {
        name: "GitLab",
        hq: "Amsterdam, Netherlands",
        replaces: "GitHub + Actions",
        summary:
          "All-in-one DevSecOps platform — EU SaaS or self-managed on your own EU infrastructure.",
        url: "https://about.gitlab.com",
        tags: ["Git", "CI/CD", "Self-managed"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Codeberg",
        hq: "Berlin, Germany",
        replaces: "GitHub for open source",
        summary:
          "Non-profit Git forge running Gitea — European home for FOSS projects without US legal exposure.",
        url: "https://codeberg.org",
        tags: ["FOSS", "Gitea", "Non-profit"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Woodpecker CI",
        hq: "Open source / EU self-host",
        replaces: "GitHub Actions / CircleCI",
        summary:
          "Lightweight CI engine compatible with GitHub, GitLab, and Gitea — run pipelines on EU runners.",
        url: "https://woodpecker-ci.org",
        tags: ["CI", "Self-host", "Containers"],
        euHosted: true,
        openSource: true,
      },
    ],
  },
  {
    id: "search",
    label: "Search",
    description:
      "Full-text and vector search you can operate inside European borders.",
    usDefault: "Algolia · Elasticsearch (Elastic Cloud US)",
    alternatives: [
      {
        name: "Meilisearch",
        hq: "Paris, France",
        replaces: "Algolia",
        summary:
          "Typo-tolerant instant search — open core with cloud or self-host on EU infrastructure.",
        url: "https://www.meilisearch.com",
        tags: ["Instant search", "Typo-tolerant", "SDKs"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Typesense",
        hq: "Open source / EU deploy",
        replaces: "Algolia",
        summary:
          "Fast, batteries-included search engine — single binary, easy to run on Hetzner or Scaleway.",
        url: "https://typesense.org",
        tags: ["Self-host", "Fast", "Simple ops"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Qdrant",
        hq: "Berlin, Germany",
        replaces: "Pinecone / Weaviate Cloud US",
        summary:
          "Vector database for RAG and semantic search — cloud or self-hosted with EU data residency.",
        url: "https://qdrant.tech",
        tags: ["Vectors", "RAG", "Rust"],
        euHosted: true,
        openSource: true,
      },
    ],
  },
];

export const principles = [
  {
    title: "Data stays in jurisdiction",
    body: "Choose providers with EU legal entities, EU data centres, and contracts that name a European supervisory authority.",
  },
  {
    title: "Open source where it matters",
    body: "Self-hostable tools reduce vendor lock-in and CLOUD Act exposure — you control the runtime and the backups.",
  },
  {
    title: "Pragmatic, not purist",
    body: "A US CDN edge node is not the same as a US primary database. Map your actual data flows before swapping vendors.",
  },
  {
    title: "Build for portability",
    body: "Standard APIs (OIDC, S3-compatible storage, Postgres) make it easier to migrate between European providers later.",
  },
] as const;

export function getCategoryById(id: CategoryId): Category | undefined {
  return categories.find((c) => c.id === id);
}
