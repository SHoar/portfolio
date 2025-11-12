import { images } from '../assets';

export interface Project {
  id: number;
  title: string;
  company: string;
  dateRange: string;
  description: string;
  technologies: string[];
  impact: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "PANGEA-FUSE Full-Stack Microservice",
    company: "Booz Allen Hamilton",
    dateRange: "June 2025 - Present",
    description: "Army Futures Command AI2C - Full-stack microservice architecture with React frontend and Python FastAPI backend",
    technologies: ["React", "Python", "FastAPI", "Kubernetes", "Helm", "AWS EKS", "Trino", "PostgreSQL", "Docker"],
    impact: "Architected and deployed a high-performance microservice enabling complex queries across diverse data sources including Trino, SeaweedFS, AWS S3, and Postgres-PostGIS in a Kubernetes/AWS environment.",
    image: images.portfolio.clientkeeper,
    link: "https://www.boozallen.com/"
  },
  {
    id: 2,
    title: "Benefits.gov Modernization",
    company: "Booz Allen Hamilton",
    dateRange: "Sept 2022 - March 2024",
    description: "Department of Labor - Legacy React/Drupal migration to Next.js framework",
    technologies: ["Next.js", "React 18", "JavaScript", "Node.js", "SEO", "Server-Side Rendering", "Redux"],
    impact: "Delivered a wholesale migration reducing average page load times from 6s to 1.5s while cutting costs by implementing SSR for SEO optimization, eliminating the need for 3rd party rendering tools.",
    image: images.portfolio.funFoodFriends,
    link: "https://www.benefits.gov/"
  },
  {
    id: 3,
    title: "Soldier Recruiting Analytics Platform",
    company: "Booz Allen Hamilton",
    dateRange: "Sept 2024 - June 2025",
    description: "Army Futures Command AI2C - React-based recruiting analytics dashboard",
    technologies: ["React", "TypeScript", "Material UI", "MUI X-Charts", "React Router", "Context API"],
    impact: "Led frontend architecture transformation with Reducer Context state management and migrated Power BI dashboard to modern React platform, improving interactivity and performance while mentoring junior developers.",
    image: images.portfolio.todolist,
    link: "https://www.boozallen.com/"
  },
  {
    id: 4,
    title: "Recreation.gov Platform Development",
    company: "Booz Allen Hamilton",
    dateRange: "July 2021 - July 2022",
    description: "Public-facing AWS microservice architecture for federal recreation booking",
    technologies: ["React", "Redux", "JavaScript", "AWS", "Jenkins", "SCSS", "GitHub Enterprise"],
    impact: "Delivered operational bug fixes and mobile-responsive features in a multi-team monolith repo with micro-frontend bundles, rapidly turning around accessibility patches for major 508 compliance audit.",
    image: images.portfolio.shoutbox,
    link: "https://www.recreation.gov/"
  },
  {
    id: 5,
    title: "F-35 DevSecOps Pipeline Automation",
    company: "Booz Allen Hamilton",
    dateRange: "Sept 2020 - July 2021",
    description: "Joint Program Office / Air Force - CI/CD automation and security integration",
    technologies: ["Jenkins", "JTE", "Groovy", "REST APIs", "Docker", "AWS", "DevSecOps"],
    impact: "Automated CI/CD pipelines with Jenkins Templating Engine, integrated security scanning for c-ATO compliance, and coordinated software licensing across 10+ applications in multi-tier DOD cloud environments.",
    image: images.portfolio.githubProfiles,
    link: "https://www.boozallen.com/"
  },
  {
    id: 6,
    title: "Navy/ACINT GIS Tracking System",
    company: "Lockheed Martin",
    dateRange: "Feb 2019 - Aug 2020",
    description: "DOD/Navy - React dashboard with GIS mapping and real-time tracking",
    technologies: ["React", "Redux", "Node.js", "Express", "GIS", "RESTful APIs", "Jenkins", "Bitbucket"],
    impact: "Deployed major legacy JavaScript frontend refactor to modern React, establishing client-side framework for modern development. Awarded Bravo recognition for technical leadership and innovation.",
    image: images.portfolio.clientkeeper,
    link: "https://www.lockheedmartin.com/"
  }
];

export default projects; 