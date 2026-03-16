import React from 'react';
import insights from '../../data/insights';

const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-20 bg-white dark:bg-secondary-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading text-secondary-900 dark:text-white">Insights & Playbooks</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mt-4">
            Short, practical writeups to help you think through automation — and when to book a call
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {insights.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              className="glass-card p-6 md:p-8 block text-left hover:border-primary-400 dark:hover:border-primary-500 transition-colors duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-secondary-700 dark:text-secondary-300 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold inline-flex items-center gap-1">
                Read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        <p className="text-center text-secondary-500 dark:text-secondary-500 text-sm mt-8 max-w-xl mx-auto">
          More playbooks coming soon. In the meantime, link these ideas to your situation in a{' '}
          <a href="#contact" className="text-primary-600 dark:text-primary-400 hover:underline">Discovery Call</a>.
        </p>
      </div>
    </section>
  );
};

export default Insights;
