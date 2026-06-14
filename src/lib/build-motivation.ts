export type BuildReason = {
  title: string;
  body: string;
};

export type BuildOpportunity = {
  title: string;
  gap: string;
  angle: string;
};

export type StarterPath = {
  step: string;
  action: string;
  detail: string;
};

export const buildReasons: BuildReason[] = [
  {
    title: "Dependency is a product risk",
    body: "When your core AI layer lives under US jurisdiction, a policy change, outage, or pricing shift can break your roadmap overnight. European builders deserve a home-court option.",
  },
  {
    title: "Europe already has the talent",
    body: "Mistral, Aleph Alpha, Helsing, and hundreds of research labs prove the capability is here. What's missing is not brains — it's more founders shipping inference, tooling, and vertical products.",
  },
  {
    title: "Regulation is a market, not a wall",
    body: "GDPR, the AI Act, and sector rules create demand for auditable, EU-hosted, explainable systems. Builders who design for compliance from day one win regulated customers US vendors struggle to serve.",
  },
  {
    title: "Multilingual is a moat",
    body: "Norwegian, German, French, and Nordic language markets are underserved by English-first models. Fine-tuned European models for real domains — law, health, public sector — are still wide open.",
  },
];

export const buildOpportunities: BuildOpportunity[] = [
  {
    title: "Sovereign inference hosting",
    gap: "Teams want EU-only GPU routes with clear DPAs",
    angle: "Managed inference on Hetzner/Scaleway with per-tenant isolation and open-weight models",
  },
  {
    title: "Vertical RAG for regulated industries",
    gap: "Generic chatbots fail audit trails in finance, health, and government",
    angle: "Citation-first RAG with on-prem connectors and EU legal entity from day one",
  },
  {
    title: "Evaluation & safety tooling",
    gap: "Most eval stacks assume US cloud and closed models",
    angle: "Open benchmarks, red-team kits, and compliance reports built for EU procurement",
  },
  {
    title: "Edge & small models",
    gap: "Factory, defence, and offline deployments cannot phone home to Virginia",
    angle: "Quantised models that run on European hardware without external telemetry",
  },
  {
    title: "Developer experience layer",
    gap: "US SDKs are polished; EU alternatives are fragmented",
    angle: "One CLI, one dashboard, one billing surface across European model providers",
  },
  {
    title: "Open-weight commons",
    gap: "Weights exist but fine-tuning pipelines and hosting are still hard",
    angle: "Hugging Face Spaces + EU compute + reproducible training recipes for SMEs",
  },
];

export const starterPaths: StarterPath[] = [
  {
    step: "01",
    action: "Pick one narrow problem",
    detail:
      "Don't build 'the European OpenAI'. Build the best sovereign RAG for Norwegian municipalities, or the fastest EU-hosted Whisper API.",
  },
  {
    step: "02",
    action: "Ship on European metal",
    detail:
      "Rent a GPU on Hetzner or Scaleway, deploy an open model, and publish your DPA and subprocessors list before you publish your landing page.",
  },
  {
    step: "03",
    action: "Open what you can",
    detail:
      "Models, eval scripts, or client SDKs — open source builds trust faster than marketing in the European public sector.",
  },
  {
    step: "04",
    action: "List it here when it works",
    detail:
      "Send a pull request to this repo. Every alternative on this page started as someone else's side project that became infrastructure.",
  },
];

export const manifestoLines = [
  "The next great AI company does not have to be built in San Francisco.",
  "It can be built in Oslo, Paris, Berlin, or Tallinn — on European servers, for European customers, by European developers who refuse to wait for permission.",
] as const;
