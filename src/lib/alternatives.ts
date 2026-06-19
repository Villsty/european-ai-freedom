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
  /** Public source-code or open-weights repository, when the project is open. */
  repoUrl?: string;
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
        repoUrl: "https://github.com/mistralai",
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
        repoUrl: "https://github.com/huggingface",
        tags: ["Hub", "Inference", "Community"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "LightOn",
        hq: "Paris, France",
        replaces: "Closed enterprise LLM APIs",
        summary:
          "Private LLM platform for sensitive data — on-prem or dedicated EU cloud with strict data isolation.",
        url: "https://lighton.ai",
        tags: ["Enterprise", "On-prem", "Confidential"],
        euHosted: true,
        openSource: false,
      },
      {
        name: "Cohere × Aleph Alpha",
        hq: "Toronto / Heidelberg",
        replaces: "Anthropic enterprise / OpenAI API",
        summary:
          "Merged entity positioning as sovereign enterprise AI — Pharia orchestration plus Cohere models for EU regulated buyers.",
        url: "https://aleph-alpha.com",
        tags: ["Enterprise", "Sovereign", "Orchestration"],
        euHosted: true,
        openSource: false,
      },
      {
        name: "Black Forest Labs",
        hq: "Freiburg, Germany",
        replaces: "Midjourney / DALL·E",
        summary:
          "FLUX image and video generation models — European HQ for generative media with open-weight options.",
        url: "https://blackforestlabs.ai",
        repoUrl: "https://github.com/black-forest-labs/flux",
        tags: ["Image", "Video", "Generative"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "DeepL",
        hq: "Cologne, Germany",
        replaces: "Google Translate / GPT translation",
        summary:
          "Industry-leading European language translation and writing assistance with strong privacy defaults.",
        url: "https://www.deepl.com",
        tags: ["Translation", "Writing", "Multilingual"],
        euHosted: true,
        openSource: false,
      },
      {
        name: "kyutai",
        hq: "Paris, France",
        replaces: "Closed research labs",
        summary:
          "Non-profit AI lab behind Moshi (real-time voice) and open research — European alternative to closed audio models.",
        url: "https://kyutai.org",
        repoUrl: "https://github.com/kyutai-labs/moshi",
        tags: ["Research", "Voice", "Open science"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Pleias",
        hq: "Paris, France",
        replaces: "Proprietary training data stacks",
        summary:
          "Fully open models trained on public-domain and open data — strict transparency for EU public-sector procurement.",
        url: "https://pleias.fr",
        repoUrl: "https://huggingface.co/PleIAs",
        tags: ["Open data", "Public domain", "LLM"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Silo AI (AMD)",
        hq: "Helsinki, Finland",
        replaces: "US AI consultancies",
        summary:
          "European AI lab and OpenEuroLLM contributor — multilingual sovereign models and enterprise AI engineering.",
        url: "https://www.silo.ai",
        repoUrl: "https://huggingface.co/LumiOpen",
        tags: ["Consulting", "OpenEuroLLM", "Multilingual"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Langdock",
        hq: "Berlin, Germany",
        replaces: "ChatGPT Enterprise",
        summary:
          "GDPR-compliant AI workspace — orchestrate multiple models including European options behind one EU-hosted interface.",
        url: "https://www.langdock.com",
        tags: ["Workspace", "GDPR", "Multi-model"],
        euHosted: true,
        openSource: false,
      },
      {
        name: "Stability AI",
        hq: "London, UK",
        replaces: "Closed image/video APIs",
        summary:
          "Open-weight image, video, and 3D models — deploy on EU infrastructure for creative and media pipelines.",
        url: "https://stability.ai",
        repoUrl: "https://github.com/Stability-AI",
        tags: ["Image", "Open weights", "Media"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "H Company",
        hq: "Paris, France",
        replaces: "US agent frameworks",
        summary:
          "Agentic AI startup from ex-DeepMind founders — European bet on autonomous software agents for enterprise.",
        url: "https://www.hcompany.ai",
        tags: ["Agents", "Enterprise", "Automation"],
        euHosted: true,
        openSource: false,
      },
      {
        name: "OpenEuroLLM",
        hq: "EU consortium (20+ orgs)",
        replaces: "English-first frontier models",
        summary:
          "Pan-European sovereign LLM initiative covering all EU languages — first models targeted from 2026.",
        url: "https://openeurollm.eu",
        repoUrl: "https://github.com/OpenEuroLLM",
        tags: ["Consortium", "Multilingual", "Sovereign"],
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
      {
        name: "Exoscale",
        hq: "Lausanne, Switzerland",
        replaces: "AWS EU regions",
        summary:
          "Swiss-European cloud with transparent data residency — popular for GDPR-sensitive SaaS and AI workloads.",
        url: "https://www.exoscale.com",
        tags: ["IaaS", "Swiss", "Kubernetes"],
        euHosted: true,
        openSource: false,
      },
      {
        name: "Nebius",
        hq: "Amsterdam, Netherlands",
        replaces: "CoreWeave / US GPU clouds",
        summary:
          "European GPU cloud built for AI training and inference — one of few EU providers at frontier inference scale.",
        url: "https://nebius.com",
        tags: ["GPU", "Training", "Inference"],
        euHosted: true,
        openSource: false,
      },
      {
        name: "OUTSCALE",
        hq: "Saint-Cloud, France",
        replaces: "AWS GovCloud-style workloads",
        summary:
          "French sovereign cloud (Dassault Systèmes) certified for sensitive government and defence workloads.",
        url: "https://www.outscale.com",
        tags: ["Sovereign", "SecNumCloud", "Government"],
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
        repoUrl: "https://github.com/keycloak/keycloak",
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
        repoUrl: "https://github.com/zitadel/zitadel",
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
        repoUrl: "https://github.com/supabase/auth",
        tags: ["Postgres", "RLS", "EU region"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Authentik",
        hq: "Open source / EU self-host",
        replaces: "Okta",
        summary:
          "Modern open-source identity provider with OIDC, SAML, and LDAP — popular self-hosted EU alternative.",
        url: "https://goauthentik.io",
        repoUrl: "https://github.com/goauthentik/authentik",
        tags: ["OIDC", "SAML", "Self-hosted"],
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
        repoUrl: "https://github.com/plausible/analytics",
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
        repoUrl: "https://github.com/matomo-org/matomo",
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
        repoUrl: "https://github.com/umami-software/umami",
        tags: ["Self-host", "Minimal", "Open source"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Pirsch",
        hq: "Kiel, Germany",
        replaces: "Google Analytics",
        summary:
          "Cookie-free, GDPR-native analytics hosted in Germany — built for privacy-conscious EU sites.",
        url: "https://pirsch.io",
        tags: ["Privacy", "Germany", "SaaS"],
        euHosted: true,
        openSource: false,
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
      {
        name: "Mailgun (EU)",
        hq: "EU region available",
        replaces: "SendGrid",
        summary:
          "Transactional email with EU infrastructure option — verify region and DPA for your deployment.",
        url: "https://www.mailgun.com",
        tags: ["Transactional", "API", "EU region"],
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
        repoUrl: "https://gitlab.com/gitlab-org/gitlab",
        tags: ["Git", "CI/CD", "Self-managed"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Codeberg",
        hq: "Berlin, Germany",
        replaces: "GitHub for open source",
        summary:
          "Non-profit Git forge running Forgejo — European home for FOSS projects without US legal exposure.",
        url: "https://codeberg.org",
        repoUrl: "https://codeberg.org/forgejo/forgejo",
        tags: ["FOSS", "Forgejo", "Non-profit"],
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
        repoUrl: "https://github.com/woodpecker-ci/woodpecker",
        tags: ["CI", "Self-host", "Containers"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Gitea",
        hq: "Open source / EU self-host",
        replaces: "GitHub Enterprise self-hosted",
        summary:
          "Lightweight Git forge — basis for Forgejo/Codeberg and many EU sovereign dev environments.",
        url: "https://about.gitea.com",
        repoUrl: "https://github.com/go-gitea/gitea",
        tags: ["Git", "Self-host", "Lightweight"],
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
        repoUrl: "https://github.com/meilisearch/meilisearch",
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
        repoUrl: "https://github.com/typesense/typesense",
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
        repoUrl: "https://github.com/qdrant/qdrant",
        tags: ["Vectors", "RAG", "Rust"],
        euHosted: true,
        openSource: true,
      },
      {
        name: "Weaviate",
        hq: "Amsterdam, Netherlands",
        replaces: "Pinecone",
        summary:
          "Open-source vector database with hybrid search — self-host in EU or use Weaviate Cloud EU regions.",
        url: "https://weaviate.io",
        repoUrl: "https://github.com/weaviate/weaviate",
        tags: ["Vectors", "Hybrid search", "GraphQL"],
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
