export type GuideEntry = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  readTime: string;
};

export const guides: GuideEntry[] = [
  {
    slug: "start-ai-company",
    title: "How to start a European AI company like Anthropic",
    description:
      "A practical playbook for founding, funding, and shipping a frontier AI lab in Europe — without pretending you can clone a $60B US company on a seed round.",
    eyebrow: "Founder's guide",
    readTime: "12 min",
  },
  {
    slug: "european-claude",
    title: "How to build a European Claude on Mistral and open models",
    description:
      "Architecture, stack choices, and deployment steps for a sovereign chat assistant — from inference to RAG, safety, and product polish.",
    eyebrow: "Technical guide",
    readTime: "15 min",
  },
];

export function getGuideBySlug(slug: string): GuideEntry | undefined {
  return guides.find((g) => g.slug === slug);
}
