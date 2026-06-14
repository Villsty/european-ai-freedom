import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/GuideLayout";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("start-ai-company");

export const metadata: Metadata = {
  title: guide?.title ?? "Start an AI company",
  description: guide?.description,
};

export default function StartAiCompanyGuidePage() {
  return (
    <GuideLayout
      eyebrow={guide?.eyebrow ?? "Founder's guide"}
      title={guide?.title ?? ""}
      description={guide?.description ?? ""}
      readTime={guide?.readTime ?? "12 min"}
    >
      <p>
        Anthropic did not appear overnight. It took ex-OpenAI researchers, years
        of safety research, billions in compute, and a clear bet on
        constitutional AI. A European lab cannot copy that trajectory — but it
        can copy the <em>structure</em>: research credibility, safety as product,
        sovereign infrastructure, and customers who pay for control.
      </p>

      <h2>What Anthropic actually is</h2>
      <p>
        Strip away the branding and Anthropic is four things stacked together:
      </p>
      <ol>
        <li>
          <strong>Foundation models</strong> — Claude family trained at frontier
          scale
        </li>
        <li>
          <strong>Safety research</strong> — RLHF, constitutional AI, red-teaming
          as core competency
        </li>
        <li>
          <strong>Enterprise API</strong> — predictable SLAs, usage billing, SOC2
        </li>
        <li>
          <strong>Trust positioning</strong> — “helpful, harmless, honest” as
          procurement language for regulated buyers
        </li>
      </ol>
      <p>
        A European entrant should decide which layers to own on day one. Almost
        nobody should try to own all four at seed stage.
      </p>

      <h2>Realistic European entry paths</h2>
      <table>
        <thead>
          <tr>
            <th>Path</th>
            <th>What you build</th>
            <th>Examples in Europe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frontier lab</td>
            <td>Train or co-train foundation models</td>
            <td>Mistral, kyutai, OpenEuroLLM consortium</td>
          </tr>
          <tr>
            <td>Sovereign platform</td>
            <td>Orchestrate models + on-prem + compliance</td>
            <td>Aleph Alpha / Cohere, LightOn</td>
          </tr>
          <tr>
            <td>Vertical product</td>
            <td>One industry, one workflow, one moat</td>
            <td>Legal RAG, public-sector assistants, industrial copilots</td>
          </tr>
          <tr>
            <td>Infrastructure layer</td>
            <td>GPU cloud, inference, eval tooling</td>
            <td>Scaleway, Nebius, OVHcloud AI Endpoints</td>
          </tr>
        </tbody>
      </table>

      <div className="callout">
        <p>
          <strong>Pragmatic default:</strong> Start as a vertical sovereign
          platform on top of Mistral or open weights. Train your own foundation
          model only when revenue and compute contracts justify it.
        </p>
      </div>

      <h2>Stage 0 — Incorporate for sovereignty story</h2>
      <p>
        Your legal entity is part of the product for EU public-sector and
        enterprise buyers. Common choices:
      </p>
      <ul>
        <li>
          <strong>France</strong> — strong AI policy support, Mistral ecosystem,
          Bpifrance and national compute programmes
        </li>
        <li>
          <strong>Germany</strong> — industrial and defence buyers, GAIA-X
          framing, strong research universities
        </li>
        <li>
          <strong>Estonia / Netherlands</strong> — fast incorporation, EU market
          access, developer-friendly ops
        </li>
        <li>
          <strong>Norway</strong> — EEA access, high trust for Nordic public
          procurement (note EEA not EU for AI Act scope — verify with counsel)
        </li>
      </ul>
      <p>
        Publish a one-page data sovereignty statement early: where data is
        processed, which subprocessors you use, and which jurisdiction governs
        your contracts.
      </p>

      <h2>Stage 1 — Team composition</h2>
      <p>Anthropic-scale labs need researchers. Seed-stage European labs need:</p>
      <ul>
        <li>
          <strong>1–2 ML engineers</strong> who have shipped inference or
          fine-tuning in production
        </li>
        <li>
          <strong>1 product engineer</strong> who can ship a credible API and
          dashboard in weeks
        </li>
        <li>
          <strong>1 domain expert</strong> from your target vertical (law, health,
          manufacturing, government)
        </li>
        <li>
          <strong>Part-time safety/compliance</strong> — AI Act documentation,
          DPIA templates, red-team cadence
        </li>
      </ul>
      <p>
        Hire from European research networks: INRIA, MPI, ETH, Aalto, Edinburgh,
        and alumni of Mistral, DeepMind London, Meta FAIR Paris.
      </p>

      <h2>Stage 2 — Funding without Silicon Valley theatre</h2>
      <ul>
        <li>
          <strong>EIC Accelerator / Horizon Europe</strong> — non-dilutive or
          co-investment for sovereign AI narratives
        </li>
        <li>
          <strong>National funds</strong> — Bpifrance (FR), High-Tech Gründerfonds
          (DE), Innovation Norway, EIFO (DK)
        </li>
        <li>
          <strong>Strategic corporates</strong> — telcos, insurers, and industrial
          giants who need EU-hosted AI and will pilot early
        </li>
        <li>
          <strong>EU VCs</strong> — Atomico, Balderton, Creandum, Northzone, and
          sector specialists in defence and health
        </li>
      </ul>
      <p>
        Lead with a paid pilot in a regulated customer, not a demo video. European
        procurement moves on references and audit trails.
      </p>

      <h2>Stage 3 — Compute strategy</h2>
      <p>
        You will not out-spend OpenAI on training. European strategy is about{" "}
        <em>access</em> and <em>efficiency</em>:
      </p>
      <ul>
        <li>
          Rent GPUs on{" "}
          <a href="https://www.scaleway.com/en/inference/">Scaleway</a>,{" "}
          <a href="https://www.ovhcloud.com">OVHcloud</a>, or{" "}
          <a href="https://www.hetzner.com">Hetzner</a> for fine-tuning and
          inference
        </li>
        <li>
          Use EU AI Factory / national compute programmes where available
        </li>
        <li>
          Fine-tune open weights (Mistral, Llama EU builds) before attempting
          pre-training
        </li>
        <li>
          Partner with Mistral or Hugging Face for model access instead of
          rebuilding the stack
        </li>
      </ul>

      <h2>Stage 4 — Safety and compliance as product</h2>
      <p>
        Anthropic sells trust. In Europe, trust is contractual and auditable:
      </p>
      <ul>
        <li>Map your system under the EU AI Act risk tiers before launch</li>
        <li>Publish model cards and evaluation summaries</li>
        <li>Run documented red-team exercises on jailbreaks and data leakage</li>
        <li>Offer on-prem or VPC deployment for customers who cannot use SaaS</li>
        <li>Log prompts and outputs with retention policies customers control</li>
      </ul>
      <p>
        Explainability (tracing which sources influenced an answer) is a
        differentiator Aleph Alpha used successfully in German public sector —
        copy that pattern for your vertical.
      </p>

      <h2>Stage 5 — Go-to-market sequence</h2>
      <ol>
        <li>
          <strong>Design partner</strong> — one paying customer in a regulated
          vertical, 8–12 week pilot
        </li>
        <li>
          <strong>Sovereign deployment option</strong> — same product, EU-only
          VPC or on-prem Helm chart
        </li>
        <li>
          <strong>API + dashboard</strong> — usage metering, keys, audit export
        </li>
        <li>
          <strong>Reference case study</strong> — procurement teams need proof
        </li>
        <li>
          <strong>Model upgrade path</strong> — ship better base models without
          breaking customer integrations
        </li>
      </ol>

      <h2>What not to do</h2>
      <ul>
        <li>Claim “EU GPT” without evaluation benchmarks in your target languages</li>
        <li>Depend on a single US API for your core inference path</li>
        <li>Ignore subprocessors in your DPA — EU buyers will ask</li>
        <li>Build a general chatbot for consumers as your first product</li>
        <li>Wait for perfect models before shipping a narrow, valuable workflow</li>
      </ul>

      <h2>12-month milestone checklist</h2>
      <ul>
        <li>EU legal entity + published sovereignty page</li>
        <li>One production deployment on European infrastructure</li>
        <li>One paying customer outside your founder network</li>
        <li>Documented eval suite (accuracy, safety, latency) in target language</li>
        <li>AI Act conformity documentation for your risk class</li>
        <li>Open-source SDK or integration that reduces switching cost</li>
      </ul>

      <p>
        Ready to build the product layer? Continue with{" "}
        <Link href="/guides/european-claude">
          How to build a European Claude on Mistral
        </Link>
        .
      </p>
    </GuideLayout>
  );
}
