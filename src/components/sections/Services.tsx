import React from 'react';
import services from '../../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-300 dark:bg-primary-900 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-purple/30 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading text-secondary-900 dark:text-white">AI Consulting Services</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mt-4">
            Productized engagements with clear deliverables and outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((tier, index) => (
            <div
              key={tier.id}
              className="glass-card p-6 md:p-8 flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">{tier.title}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-6">{tier.duration}</p>
              <ul className="space-y-2 text-secondary-700 dark:text-secondary-300 text-sm flex-grow mb-6">
                {tier.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-500 mt-0.5">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              {tier.outcomeBullets && tier.outcomeBullets.length > 0 && (
                <div className="mb-6 p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
                  <p className="text-sm text-secondary-700 dark:text-secondary-300 italic">
                    {tier.outcomeBullets[0]}
                  </p>
                </div>
              )}
              <a
                href={tier.ctaHref}
                className="btn btn-primary mt-auto w-full text-center"
              >
                {tier.ctaText}
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-6 md:p-8 border-l-4 border-primary-500 dark:border-primary-400">
            <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-3">How I Build</h3>
            <p className="text-secondary-700 dark:text-secondary-300 text-sm leading-relaxed">
              I focus on outcomes and integration first. Tech choices (agents, RAG, LLMs, your stack) follow from the problem — with an emphasis on maintainability, security, and clear success metrics. No tech-stack theater; just shipping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
