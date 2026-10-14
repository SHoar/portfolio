import React from 'react';

interface ExpertiseArea {
  title: string;
  description: string;
  skills: string[];
}

const Expertise: React.FC = () => {
  const expertiseAreas: ExpertiseArea[] = [
    {
      title: "Platform & IDP Architecture",
      description: "GitOps control planes, contract-first BFFs, and developer golden paths",
      skills: ["Crossplane", "Argo CD", "OIDC/Keycloak", "BFF patterns", "Zod/OpenAPI contracts"]
    },
    {
      title: "Agentic AI Systems",
      description: "Human-in-the-loop agents with policy engines, evals, and fail-closed tool permissions",
      skills: ["HITL gates", "Permission matrices", "MCP/skills", "LangChain/PydanticAI", "Eval harnesses"]
    },
    {
      title: "Cloud-Native Delivery",
      description: "Containerized services, mesh-ready designs, and verifiable local-to-cluster paths",
      skills: ["Kubernetes", "Docker", "Helm", "Istio patterns", "CI/CD"]
    },
    {
      title: "Secure Full-Stack",
      description: "SPA + API systems that keep secrets out of the browser and defaults fail closed",
      skills: ["React/TypeScript", "FastAPI", "Go CLIs", "httpOnly sessions", "Threat models"]
    },
    {
      title: "Architecture Practice",
      description: "ADRs, RFCs, and docs that humans and coding agents can execute against",
      skills: ["ADRs", "RFCs", "AGENTS.md", "C4 diagrams", "Runbooks"]
    },
    {
      title: "Operational Excellence",
      description: "SLOs, failure domains, and cost-aware AI/platform operations",
      skills: ["SLIs/SLOs", "Error budgets", "Cost-per-task", "Observability", "Degrade paths"]
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-white dark:bg-secondary-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Technical Expertise</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mt-4">
            Platform, agentic, and cloud-native competencies for AI-enabled software architecture roles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-3 text-secondary-900 dark:text-white">
                {area.title}
              </h3>
              <p className="text-secondary-700 dark:text-secondary-300 mb-6 leading-relaxed">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-xl border border-primary-200 dark:border-primary-900/30">
            <h3 className="text-2xl font-bold mb-6 text-secondary-900 dark:text-white">
              Individual Contributor Philosophy
            </h3>
            <div className="space-y-4 text-secondary-700 dark:text-secondary-300 leading-relaxed">
              <p>
                I thrive on solving complex technical problems and driving systems that scale. My focus is on technical depth—building architectures that are robust, performant, and maintainable. I'm most productive spending the majority of my time on hands-on development, architectural decisions, and technical execution.
              </p>
              <p>
                I excel at bridging gaps between systems, owning solutions end-to-end, and making informed technical decisions that balance immediate needs with long-term sustainability. I'm passionate about modern tools, best practices, and continuous learning in an ever-evolving technical landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
