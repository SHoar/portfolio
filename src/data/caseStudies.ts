export interface CaseStudy {
  id: string;
  title: string;
  context: string;
  intervention: string;
  results: string[];
}

const caseStudies: CaseStudy[] = [
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
  },
];

export default caseStudies;
