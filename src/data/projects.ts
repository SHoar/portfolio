import { images } from '../assets';

export interface Project {
  id: number;
  title: string;
  company: string;
  agency: string;
  dateRange: string;
  description: string;
  technologies: string[];
  impact: string;
  logoUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI/ML Microservice Platform",
    company: "Technology Consulting Firm",
    agency: "Enterprise Client",
    dateRange: "June 2025 - Present",
    description: "Full-stack microservice development with React frontend and Python FastAPI backend",
    technologies: ["React", "Python", "FastAPI", "Kubernetes", "Docker", "PostgreSQL", "AWS"],
    impact: "Architecting and implementing production-grade cloud-native microservices with 99.9% uptime targets. Designed RESTful API contracts, built complex database integrations with query optimization, and established containerized deployment patterns for AI/ML workflows processing 500K+ daily transactions.",
    logoUrl: images.projectLogos.aiMlMicroservice,
    link: ""
  },
  {
    id: 2,
    title: "Public Benefits Platform Modernization",
    company: "Technology Consulting Firm",
    agency: "Enterprise Client",
    dateRange: "Sept 2022 - March 2024",
    description: "Legacy React/Drupal migration to modern Next.js framework",
    technologies: ["Next.js", "React 18", "JavaScript", "Node.js", "SEO", "Server-Side Rendering", "Redux"],
    impact: "Independently executed wholesale platform migration, achieving 75% load time reduction (6s → 1.5s) through strategic SSR implementation. Eliminated $50K+ annual costs by replacing 3rd party rendering tools with custom Next.js solution. Resolved complex state hydration challenges and optimized Core Web Vitals to exceed Google benchmarks.",
    logoUrl: images.projectLogos.publicBenefits,
    link: ""
  },
  {
    id: 3,
    title: "Recruiting Analytics Platform",
    company: "Technology Consulting Firm",
    agency: "Enterprise Client",
    dateRange: "Sept 2024 - June 2025",
    description: "React-based recruiting analytics dashboard with complex data visualization",
    technologies: ["React", "TypeScript", "Material UI", "MUI X-Charts", "React Router", "Context API"],
    impact: "Architected advanced state management patterns using Reducer Context to handle complex analytics workflows, enabling real-time filtering and aggregation of recruitment metrics across multiple data dimensions while optimizing render performance.",
    logoUrl: images.projectLogos.recruitingAnalytics,
    link: ""
  },
  {
    id: 4,
    title: "Public Recreation Platform Development",
    company: "Technology Consulting Firm",
    agency: "Enterprise Client",
    dateRange: "July 2021 - July 2022",
    description: "Public-facing AWS microservice architecture for large-scale booking platform",
    technologies: ["React", "Redux", "JavaScript", "AWS", "Jenkins", "SCSS", "GitHub Enterprise"],
    impact: "Delivered 40+ production fixes and mobile-responsive features in complex monolith codebase serving 2M+ users. Independently debugged and resolved critical accessibility issues across micro-frontend architecture, achieving WCAG 2.1 AA compliance under aggressive audit timelines.",
    logoUrl: images.projectLogos.recreationPlatform,
    link: ""
  },
  {
    id: 5,
    title: "DevSecOps Pipeline Automation",
    company: "Technology Consulting Firm",
    agency: "Enterprise Client",
    dateRange: "Sept 2020 - July 2021",
    description: "CI/CD automation and security integration",
    technologies: ["Jenkins", "JTE", "Groovy", "REST APIs", "Docker", "AWS", "DevSecOps"],
    impact: "Built and maintained automated CI/CD pipelines using Jenkins Templating Engine (Groovy DSL), integrated security scanning tools (SonarQube, Fortify) for compliance workflows, and implemented REST API integrations for software license management across 10+ applications in multi-tier AWS environments.",
    logoUrl: images.projectLogos.devsecops,
    link: ""
  },
  {
    id: 6,
    title: "GIS Tracking Dashboard",
    company: "Technology Consulting Firm",
    agency: "Enterprise Client",
    dateRange: "Feb 2019 - Aug 2020",
    description: "React dashboard with GIS mapping and real-time tracking",
    technologies: ["React", "Redux", "Node.js", "Express", "GIS", "RESTful APIs", "Jenkins", "Bitbucket"],
    impact: "Executed complete frontend modernization from vanilla JavaScript to React/Redux architecture. Implemented real-time GIS mapping with Leaflet.js, optimized rendering for 1000+ simultaneous tracking points, and established patterns for state management and API integration that improved code maintainability by 60%.",
    logoUrl: images.projectLogos.gisTracking,
    link: ""
  }
];

export default projects; 