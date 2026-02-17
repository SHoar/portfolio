export interface SideProject {
  id: number;
  title: string;
  status: 'Live' | 'In Progress' | 'Coming Soon';
  tagline: string;
  description: string;
  technologies: string[];
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
  demoVideo?: string;
  highlights: string[];
}

const sideProjects: SideProject[] = [
  {
    id: 1,
    title: "RVNUG Website",
    status: "Live",
    tagline: "Modern community platform for Roanoke Valley .NET User Group",
    description: "Complete rewrite of the RVNUG community website using modern web technologies, replacing legacy WordPress with a fast, maintainable React-based solution.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Pages"],
    impact: "Delivered a modern, performant community hub with improved UX, faster load times, and easier content management for 200+ local developers.",
    liveUrl: "https://rvnug.org",
    githubUrl: "https://github.com/RVNUG/project-oolong", // Update with actual repo URL
    highlights: [
      "Migrated from C# ASP.NET to modern React Single Page Application",
      "Implemented responsive design with Tailwind CSS",
      "Cultivated a welcoming space and helpful resources for the community to connect and grow",
      "Set up automated CI/CD and DevSecOps pipeline with GitHub Actions",
      "Improved page load performance by 60%"
    ]
  },
  {
    id: 2,
    title: "Financial Analysis Platform",
    status: "Live",
    tagline: "Personal finance tracking and analytics dashboard",
    description: "Full-stack financial analysis platform with data visualization, account aggregation, and automated insights. Built with modern React frontend and Python backend.",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Docker", "TradingView", "Celery", "Redis", "DigitalOcean"],
    impact: "Building comprehensive financial tracking with real-time analytics, automated categorization, and trend analysis to provide actionable insights into spending patterns.",
    liveUrl: "https://fa.seanhoar.com",
    githubUrl: undefined, // Private for now
    highlights: [
      "Real-time financial data visualization",
      "Automated transaction categorization",
      "RESTful API with FastAPI",
      "Containerized development with Docker Compose",
      "Integrated TradingView for real-time financial data visualization",
      "Implemented Celery for asynchronous task processing",
      "Used Redis for caching and session management",
      "Deployed to DigitalOcean App Platform",
      "Improved page load performance by 60%"
    ]
  },
  {
    id: 3,
    title: "RVNUG Discord Digest Bot",
    status: "Live",
    tagline: "AI-powered weekly digest for developer community",
    description: "Discord bot that uses Exa AI to search, score, and curate relevant articles, tutorials, and job postings for the RVNUG developer community. Automatically posts weekly digests with the most valuable content.",
    technologies: ["Python", "Discord.py", "Exa AI API", "Natural Language Processing", "Cron Jobs"],
    impact: "Delivers weekly curated content to 150+ community members, saving hours of manual research while surfacing high-quality technical articles and local job opportunities with 85%+ relevance scores.",
    liveUrl: undefined, // Discord bot, no public URL
    githubUrl: undefined, // Update if you make it public
    highlights: [
      "Integrated Exa AI for intelligent content discovery",
      "Automated scoring algorithm for relevance",
      "Weekly digest generation and posting",
      "Curates tech articles and job postings for local community"
    ]
  },
  {
    id: 4,
    title: "AI-Enabled Resume and Job Seeker Portal",
    status: "Coming Soon",
    tagline: "AI-powered resume and job seeker portal",
    description: "AI-powered resume and job seeker portal that uses OpenAI GPT-5-nano to review, score, and rewrite resumes for matching jobs.",
    technologies: ["Python", "FastAPI", "DigitalOcean", "OpenAI", "Natural Language Processing", "Search Engine Design", "Cloud database management"],
    impact: "Helps job seekers and recruiters find the best matches with AI-powered resume review and job matching, intentionally saving hours to weeks of manual work.",
    liveUrl: undefined, // Resume and job seeker portal, no public URL
    githubUrl: "private", // Update if you make it public
    highlights: [
      "End-to-end AI resume pipeline: review --> guided/automatic rewrite", "Multi-source job aggregation with resilience and deduplication", "Production-oriented LLM integration", "Search and data architecture: filter-first retrieval, FTS, Security"
    ]
  }
];

export default sideProjects;

