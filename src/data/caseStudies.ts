export interface CaseStudy {
  id: string;
  title: string;
  context: string;
  intervention: string;
  results: string[];
  category?: 'small-business' | 'technical';
}

const caseStudies: CaseStudy[] = [
  {
    id: 'plumbing-quotes',
    title: 'Local plumbing company — quote follow-up',
    context: 'A local plumbing company was losing leads because quote follow-ups were manual and slow. The owner and office manager spent hours each week chasing estimates and re-entering data between email, their scheduling tool, and QuickBooks.',
    intervention: 'We mapped the intake-to-quote-to-invoice workflow and automated follow-up reminders and status updates using their existing email and accounting tools. No new logins; staff got a simple checklist and 30 minutes of training.',
    results: [
      'Quote follow-up time cut by roughly 50%',
      'Fewer dropped leads and faster turnaround',
      'Roughly 6–8 hours per week reclaimed for the office manager',
    ],
    category: 'small-business',
  },
  {
    id: 'bookkeeper-triage',
    title: 'Small bookkeeping practice — client triage',
    context: 'A small bookkeeping practice was drowning in client emails and document requests. Repetitive questions and manual triage were eating into time that could go to higher-value work.',
    intervention: 'We added a lightweight AI assistant that works inside their existing email and document workflow: it drafts responses to common questions and flags items that need human review. Implementation stayed behind the scenes; clients only noticed faster, clearer replies.',
    results: [
      'Faster response time on routine client questions',
      'Fewer hours per week on repetitive triage',
      'Staff could focus on advisory work instead of inbox chaos',
    ],
    category: 'small-business',
  },
  {
    id: 'public-benefits',
    title: 'Public Benefits Platform Modernization',
    context: 'Enterprise public-sector client with a legacy platform: slow page loads, heavy reliance on third-party rendering, and manual content workflows. Users and admins were blocked by performance and cost.',
    intervention: 'Led full platform migration from legacy React/Drupal to Next.js with custom server-side rendering. Replaced external rendering services with an in-house solution and optimized data pipelines for reliability and speed.',
    results: [
      '75% load time reduction (6s → 1.5s)',
      '$50K+ annual cost eliminated by replacing third-party rendering',
      'Core Web Vitals exceeded Google benchmarks',
    ],
    category: 'technical',
  },
  {
    id: 'recruiting-analytics',
    title: 'Recruiting Analytics Platform',
    context: 'Technical teams and HR lacked fast, reliable insight into recruiting funnel performance. Manual data pulls and spreadsheets made it hard to act on bottlenecks.',
    intervention: 'Built a React-based recruiting analytics dashboard with complex filtering, aggregation, and real-time visualization. Architected state management and API integration so stakeholders could self-serve metrics.',
    results: [
      'Real-time filtering and aggregation across multiple data dimensions',
      'Faster insight into pipeline bottlenecks (hours saved per week on manual reporting)',
      'Scalable patterns for future AI/automation (e.g. candidate triage, forecasting)',
    ],
    category: 'technical',
  },
  {
    id: 'rvnug-digest',
    title: 'RVNUG Discord Digest Bot',
    context: 'Developer community (150+ members) needed curated technical content and job postings without someone manually searching and sharing every week.',
    intervention: 'Built an AI-powered Discord bot using Exa AI to search, score, and curate articles, tutorials, and job postings. Automated weekly digest generation and posting.',
    results: [
      '85%+ relevance scores on curated content',
      'Hours of manual research saved every week',
      'Consistent, high-quality technical and local job content delivered automatically',
    ],
    category: 'technical',
  },
];

export default caseStudies;
