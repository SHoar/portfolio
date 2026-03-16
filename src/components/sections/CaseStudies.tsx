import React from 'react';
import caseStudies from '../../data/caseStudies';

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-white dark:bg-secondary-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading text-secondary-900 dark:text-white">Selected AI & Automation Projects</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mt-4">
            Outcome-focused work that bridges technical depth and consulting delivery
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className="glass-card p-6 md:p-10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">{study.title}</h3>
              <div className="space-y-6 text-secondary-700 dark:text-secondary-300">
                <div>
                  <h4 className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-2">Context</h4>
                  <p className="text-lg leading-relaxed">{study.context}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-2">Intervention</h4>
                  <p className="text-lg leading-relaxed">{study.intervention}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-2">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">✓</span>
                        <span className="text-lg">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary-600 dark:text-secondary-400 mb-4">Full chronological experience below.</p>
          <a href="#portfolio" className="btn btn-outline">
            See Technical Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
