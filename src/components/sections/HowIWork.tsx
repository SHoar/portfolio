import React from 'react';

const HowIWork: React.FC = () => {
  return (
    <section id="how-i-work" className="py-20 bg-white dark:bg-secondary-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading text-secondary-900 dark:text-white">How I Work (AI-Native Delivery)</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mt-4">
            Judgment, scoping, and integration — not just tools
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">1</span>
                <div>
                  <strong className="text-secondary-900 dark:text-white text-lg">Spec-first scoping, then rapid prototyping with AI assistance.</strong>
                  <p className="text-secondary-700 dark:text-secondary-300 mt-1">We define outcomes and constraints before building, so we ship the right thing fast.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">2</span>
                <div>
                  <strong className="text-secondary-900 dark:text-white text-lg">Agents, RAG, and LLMs as building blocks — not magic.</strong>
                  <p className="text-secondary-700 dark:text-secondary-300 mt-1">I use them where they add measurable value and integrate cleanly with your systems.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">3</span>
                <div>
                  <strong className="text-secondary-900 dark:text-white text-lg">Integration with your existing stack.</strong>
                  <p className="text-secondary-700 dark:text-secondary-300 mt-1">Slack, email, CRMs, internal APIs — automation that fits where you already work.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
