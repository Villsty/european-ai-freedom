import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/GuideLayout";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("european-claude");

export const metadata: Metadata = {
  title: guide?.title ?? "European Claude",
  description: guide?.description,
};

export default function EuropeanClaudeGuidePage() {
  return (
    <GuideLayout
      eyebrow={guide?.eyebrow ?? "Technical guide"}
      title={guide?.title ?? ""}
      description={guide?.description ?? ""}
      readTime={guide?.readTime ?? "15 min"}
    >
      <p>
        Claude is not magic — it is a stack: a capable base model, long context,
        tool use, retrieval, safety filters, and a product layer that hides
        complexity. You can assemble an equivalent European assistant using{" "}
        <a href="https://mistral.ai">Mistral</a>,{" "}
        <a href="https://huggingface.co">Hugging Face</a> open weights, and EU
        infrastructure — without sending prompts to San Francisco.
      </p>

      <h2>Target architecture</h2>
      <pre>{`┌─────────────────────────────────────────────────────────┐
│  Web / mobile client (Next.js, etc.)                    │
└──────────────────────────┬──────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────┐
│  API gateway (auth, rate limits, audit logs)            │
└──────────────────────────┬──────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│ Orchestrator  │  │ RAG service   │  │ Safety layer  │
│ (agents/tools)│  │ (retrieval)   │  │ (filters/eval)│
└───────┬───────┘  └───────┬───────┘  └───────────────┘
        │                  │
        └────────┬─────────┘
                 ▼
┌─────────────────────────────────────────────────────────┐
│  Inference (Mistral API · vLLM · Scaleway · OVH)        │
│  Models: Mistral Large · Mixtral · Codestral · Pixtral  │
└─────────────────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│  Data plane (Postgres · Qdrant · object storage) — EU   │
└─────────────────────────────────────────────────────────┘`}</pre>

      <h2>Step 1 — Choose your model layer</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Best for</th>
            <th>Deployment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mistral Large</td>
            <td>General assistant, reasoning, multilingual</td>
            <td>Mistral API (EU) or self-host if weights available</td>
          </tr>
          <tr>
            <td>Mixtral 8x22B</td>
            <td>Cost-efficient MoE, high throughput</td>
            <td>vLLM on Hetzner / Scaleway GPUs</td>
          </tr>
          <tr>
            <td>Codestral</td>
            <td>Code generation and review</td>
            <td>API or dedicated inference endpoint</td>
          </tr>
          <tr>
            <td>Pixtral</td>
            <td>Multimodal (image + text)</td>
            <td>Mistral multimodal API</td>
          </tr>
          <tr>
            <td>Llama 3.x / Qwen EU builds</td>
            <td>Fully self-hosted fallback</td>
            <td>Hugging Face + vLLM / TGI</td>
          </tr>
        </tbody>
      </table>

      <div className="callout">
        <p>
          <strong>Recommendation:</strong> Start with Mistral&apos;s API for
          speed, abstract behind your own gateway, and add self-hosted Mixtral
          as a failover path on EU GPUs once you have traffic and compliance
          requirements.
        </p>
      </div>

      <h2>Step 2 — Inference on European infrastructure</h2>
      <p>Three deployment patterns, from fastest to most sovereign:</p>
      <ol>
        <li>
          <strong>Managed API</strong> — Mistral La Plateforme with EU data
          processing terms. Lowest ops burden.
        </li>
        <li>
          <strong>Managed inference</strong> —{" "}
          <a href="https://www.scaleway.com/en/inference/">Scaleway Managed
          Inference</a> or OVHcloud AI Endpoints with Mistral/Llama models on
          dedicated EU GPUs.
        </li>
        <li>
          <strong>Self-hosted vLLM</strong> — Full control on Hetzner GPU servers
          or bare metal. Use when contracts require no third-party API access.
        </li>
      </ol>
      <p>Minimal vLLM serve command (adjust model path):</p>
      <pre>{`pip install vllm
python -m vllm.entrypoints.openai.api_server \\
  --model mistralai/Mixtral-8x7B-Instruct-v0.1 \\
  --host 0.0.0.0 --port 8000`}</pre>
      <p>
        Point your app at <code>http://your-eu-server:8000/v1</code> with an
        OpenAI-compatible client — same interface many US SDKs already use.
      </p>

      <h2>Step 3 — RAG for domain knowledge</h2>
      <p>
        Claude&apos;s enterprise value is often retrieval over private docs. Build
        this with European components:
      </p>
      <ul>
        <li>
          <strong>Embeddings</strong> — Mistral embed models or open alternatives
          via Hugging Face
        </li>
        <li>
          <strong>Vector store</strong> —{" "}
          <a href="https://qdrant.tech">Qdrant</a> (Berlin) self-hosted or cloud
          EU region
        </li>
        <li>
          <strong>Document store</strong> — Postgres + pgvector on EU Supabase or
          self-hosted
        </li>
        <li>
          <strong>Ingestion</strong> — unstructured parsing in your VPC; never
          send raw PDFs to US OCR APIs in production
        </li>
      </ul>
      <p>RAG flow:</p>
      <ol>
        <li>Chunk documents (512–1024 tokens) with overlap</li>
        <li>Embed chunks, store in Qdrant with tenant isolation</li>
        <li>On query: embed question → retrieve top-k → inject into system prompt</li>
        <li>Require citations in the model output format (JSON schema)</li>
      </ol>

      <h2>Step 4 — Tool use and agents</h2>
      <p>
        Mistral models support function calling. Define tools for actions your
        assistant must take — search internal wiki, create ticket, run SQL on
        read-only replica:
      </p>
      <pre>{`const tools = [
  {
    type: "function",
    function: {
      name: "search_knowledge_base",
      description: "Search company documents",
      parameters: {
        type: "object",
        properties: { query: { type: "string" } },
        required: ["query"],
      },
    },
  },
];`}</pre>
      <p>
        Run an agent loop: model proposes tool call → your server executes in EU
        → result fed back → final answer. Keep execution server-side — never
        trust the model with credentials in the client.
      </p>

      <h2>Step 5 — Safety layer (constitutional patterns)</h2>
      <p>Anthropic&apos;s constitutional AI idea translates to engineering practice:</p>
      <ul>
        <li>
          <strong>System prompt contract</strong> — fixed rules for tone, refusals,
          and citation requirements
        </li>
        <li>
          <strong>Input filters</strong> — PII detection, prompt injection heuristics
        </li>
        <li>
          <strong>Output filters</strong> — block leaked secrets, validate JSON
          schema, check citation IDs exist
        </li>
        <li>
          <strong>Eval harness</strong> — nightly runs on jailbreak set + domain
          Q&A gold set in Norwegian, German, French as needed
        </li>
        <li>
          <strong>Human review queue</strong> — flag low-confidence answers in
          regulated workflows
        </li>
      </ul>

      <h2>Step 6 — API gateway and audit</h2>
      <p>Your gateway is the sovereignty boundary. It should:</p>
      <ul>
        <li>Authenticate users (Keycloak / Zitadel in EU)</li>
        <li>Enforce per-tenant rate limits and model routing</li>
        <li>Log prompts, outputs, retrieved chunks, and tool calls</li>
        <li>Expose export for compliance audits (CSV / JSON, EU storage only)</li>
        <li>Route to Mistral API or self-hosted vLLM based on policy flags</li>
      </ul>

      <h2>Step 7 — Product surface</h2>
      <p>A credible Claude-like product needs more than a chat box:</p>
      <ul>
        <li>Conversation history with workspace/project scoping</li>
        <li>File upload with explicit retention controls</li>
        <li>Model selector (fast vs capable vs code)</li>
        <li>Source citations rendered inline</li>
        <li>Admin dashboard for usage, policies, and API keys</li>
      </ul>
      <p>
        Build the UI in Next.js on Vercel for marketing, but keep inference and
        data plane on EU infrastructure — split frontend and AI backend
        deliberately.
      </p>

      <h2>Step 8 — Fine-tuning when API is not enough</h2>
      <p>When generic Mistral is close but not quite right for your domain:</p>
      <ol>
        <li>Collect 500–5,000 high-quality instruction examples (human-reviewed)</li>
        <li>LoRA fine-tune Mixtral or Mistral 7B on EU GPUs</li>
        <li>Evaluate against held-out set before any production traffic shift</li>
        <li>Version models — customers should pin model IDs in contracts</li>
      </ol>
      <p>
        Tools: Hugging Face PEFT, Axolotl, or managed fine-tuning on Scaleway
        BYOM (Bring Your Own Model).
      </p>

      <h2>Cost and latency expectations</h2>
      <table>
        <thead>
          <tr>
            <th>Setup</th>
            <th>Monthly infra (indicative)</th>
            <th>Latency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mistral API only</td>
            <td>Usage-based, low fixed cost</td>
            <td>Low — provider-optimised</td>
          </tr>
          <tr>
            <td>Scaleway dedicated inference</td>
            <td>€500–3,000+ depending on GPU</td>
            <td>Predictable, private VPC</td>
          </tr>
          <tr>
            <td>Self-hosted 1× A100 class</td>
            <td>€800–1,500 hardware rental</td>
            <td>You operate scaling</td>
          </tr>
        </tbody>
      </table>
      <p>
        Figures are order-of-magnitude for planning — verify current pricing with
        providers before budgeting.
      </p>

      <h2>Open-source building blocks</h2>
      <p>
        Every layer above can be assembled from open code and open weights you
        can read, fork, and self-host on European infrastructure. Start from
        these repositories rather than a closed SDK:
      </p>
      <table>
        <thead>
          <tr>
            <th>Layer</th>
            <th>Project</th>
            <th>Repository</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Models &amp; weights</td>
            <td>Mistral AI</td>
            <td>
              <a href="https://github.com/mistralai">github.com/mistralai</a>
            </td>
          </tr>
          <tr>
            <td>Model hub &amp; tooling</td>
            <td>Hugging Face</td>
            <td>
              <a href="https://github.com/huggingface">github.com/huggingface</a>
            </td>
          </tr>
          <tr>
            <td>Inference serving</td>
            <td>vLLM</td>
            <td>
              <a href="https://github.com/vllm-project/vllm">
                github.com/vllm-project/vllm
              </a>
            </td>
          </tr>
          <tr>
            <td>Fine-tuning</td>
            <td>PEFT · Axolotl</td>
            <td>
              <a href="https://github.com/huggingface/peft">huggingface/peft</a>
              {" · "}
              <a href="https://github.com/axolotl-ai-cloud/axolotl">
                axolotl-ai-cloud/axolotl
              </a>
            </td>
          </tr>
          <tr>
            <td>Vector store (RAG)</td>
            <td>Qdrant</td>
            <td>
              <a href="https://github.com/qdrant/qdrant">github.com/qdrant/qdrant</a>
            </td>
          </tr>
          <tr>
            <td>Auth &amp; gateway identity</td>
            <td>Keycloak · Zitadel</td>
            <td>
              <a href="https://github.com/keycloak/keycloak">keycloak/keycloak</a>
              {" · "}
              <a href="https://github.com/zitadel/zitadel">zitadel/zitadel</a>
            </td>
          </tr>
          <tr>
            <td>Real-time voice (optional)</td>
            <td>kyutai Moshi</td>
            <td>
              <a href="https://github.com/kyutai-labs/moshi">
                kyutai-labs/moshi
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Browse the full catalogue of European, mostly open-source providers on
        the <Link href="/#categories">stack map</Link> — each open project now
        links straight to its source.
      </p>

      <h2>Launch checklist</h2>
      <ul>
        <li>Gateway deployed in EU region with auth</li>
        <li>At least one Mistral or open model path tested end-to-end</li>
        <li>RAG index built with citation enforcement</li>
        <li>Safety eval suite passing on target languages</li>
        <li>DPA and subprocessor list published</li>
        <li>Failover tested (API down → self-hosted route)</li>
        <li>Customer data retention and deletion documented</li>
      </ul>

      <p>
        Building the company around this product? Read{" "}
        <Link href="/guides/start-ai-company">
          How to start a European AI company like Anthropic
        </Link>
        .
      </p>
    </GuideLayout>
  );
}
