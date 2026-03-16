export interface SprintWeek {
  week: number;
  title: string;
  description: string;
}

export const fourWeekSprint: SprintWeek[] = [
  { week: 1, title: 'Discovery & scoping', description: 'Workflow inventory, pain-point mapping, and prioritization. We define one high-impact use case and success metrics.' },
  { week: 2, title: 'Design & architecture', description: 'Architecture options (agents, RAG, integrations), data and API requirements, and a clear build plan.' },
  { week: 3, title: 'Build & integrate', description: 'Implement the pilot workflow, connect to your stack, and add basic observability.' },
  { week: 4, title: 'Deploy & review', description: 'Ship to production, document runbooks and training, and agree on next steps or scale plan.' },
];

export const smbScorecardItems: string[] = [
  'You have at least one workflow that takes 5+ hours/week of manual, repeatable work.',
  'You use tools like Slack, email, or a CRM that could be integrated with automation.',
  'You have (or can get) API or data access for the workflows you want to automate.',
  'You can dedicate a stakeholder for 2–4 hours/week during a pilot.',
  'You prefer a fixed-scope pilot over open-ended exploration.',
  'You’re open to agents, RAG, or LLMs as building blocks — not magic.',
  'You care about measurable outcomes (time saved, accuracy, throughput), not just “AI”.',
  'You’d consider a 4–8 week engagement before committing to a longer retainer.',
];
