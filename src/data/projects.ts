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
    impact: "Developing cloud-native microservices in a containerized environment, implementing RESTful APIs and database integrations to support AI/ML workflows and data analytics capabilities.",
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
    impact: "Delivered a wholesale migration reducing average page load times from 6s to 1.5s while cutting costs by implementing SSR for SEO optimization, eliminating the need for 3rd party rendering tools.",
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
    impact: "Solved critical technical challenges in complex multi-team monolith with micro-frontend architecture, implementing responsive component strategies and accessibility patterns that resolved compliance audits while maintaining system stability across distributed bundles.",
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
    impact: "Automated CI/CD pipelines with Jenkins Templating Engine, integrated security scanning for compliance requirements, and coordinated software licensing across 10+ applications in multi-tier cloud environments.",
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
    impact: "Deployed major legacy JavaScript frontend refactor to modern React, establishing client-side framework for modern development and improving maintainability.",
    logoUrl: images.projectLogos.gisTracking,
    link: ""
  }
];

export default projects; 