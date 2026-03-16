export interface ServiceTier {
  id: string;
  title: string;
  duration: string;
  deliverables: string[];
  outcomeBullets?: string[];
  ctaText: string;
  ctaHref: string;
}

const services: ServiceTier[] = [
  {
    id: 'roadmap',
    title: 'AI Readiness & Roadmap',
    duration: '2–3 weeks, fixed fee',
    deliverables: [
      'Workflow inventory and pain-point mapping',
      'Prioritized backlog of automation opportunities',
      'Architecture options (agents, RAG, integrations)',
      '90-day implementation plan',
    ],
    ctaText: 'Request Roadmap Call',
    ctaHref: '#contact',
  },
  {
    id: 'pilot',
    title: 'Pilot Build & Deploy',
    duration: '4–6 weeks',
    deliverables: [
      'One shipped agent or RAG workflow in production',
      'Basic analytics and success metrics',
      'Staff training and documentation',
    ],
    outcomeBullets: [
      'Example outcome: Automate 15–25 hours/week of manual triage in support or recruiting.',
    ],
    ctaText: 'Book Pilot Discovery',
    ctaHref: '#contact',
  },
  {
    id: 'ops',
    title: 'Continuous AI Ops',
    duration: 'Monthly retainer',
    deliverables: [
      'Monitoring and reliability of deployed AI workflows',
      'Prompt and agent tuning based on usage',
      'New integrations and use-case expansion',
      'Quarterly strategy reviews',
    ],
    ctaText: 'Discuss Retainer',
    ctaHref: '#contact',
  },
];

export default services;
