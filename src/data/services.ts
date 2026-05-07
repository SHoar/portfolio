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
    id: 'readiness',
    title: 'AI Workflow Readiness Check',
    duration: 'Free or very low cost',
    deliverables: [
      'Light audit of your current workflows',
      'Identification of quick wins and leak points',
      'Clear picture of where time and money are going',
      'No obligation—just a 90-minute conversation',
    ],
    ctaText: 'Book a Free Workflow Readiness Call',
    ctaHref: '#contact',
  },
  {
    id: 'pilot',
    title: 'Inbox-to-Invoice Automation in 30 Days',
    duration: '2–4 weeks, fixed fee',
    deliverables: [
      'One focused pilot: automate intake to quote to invoice',
      'Integration with your existing email, calendar, and accounting tools',
      'Staff training and simple documentation',
      'Plain-number results: hours saved, faster quote turnaround',
    ],
    outcomeBullets: [
      'Example: Cut quote follow-up time in half, reduce unbilled work, reclaim 5–10+ hours per week.',
    ],
    ctaText: 'Get a Pilot Proposal',
    ctaHref: '#contact',
  },
  {
    id: 'ops',
    title: 'Ongoing AI Operations',
    duration: 'Monthly retainer',
    deliverables: [
      'Monitoring and tuning of deployed workflows',
      'New automations as you grow',
      'Quarterly reviews and strategy check-ins',
      'Ongoing training and support',
    ],
    ctaText: 'Discuss Retainer',
    ctaHref: '#contact',
  },
];

export default services;
