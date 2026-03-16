import React from 'react';

const WhoIWorkWith: React.FC = () => {
  return (
    <section id="who-i-work-with" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-300 dark:bg-primary-900 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-cyan/30 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading text-secondary-900 dark:text-white">Who I Work With</h2>
          <div className="section-divider"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="glass-card p-8 md:p-12">
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">
              Who I Work With
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 text-xl mt-0.5">•</span>
                <span className="text-secondary-700 dark:text-secondary-300 text-lg">
                  <strong className="text-secondary-900 dark:text-white">SMBs with messy internal ops</strong> — teams drowning in manual workflows and ready to automate
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 text-xl mt-0.5">•</span>
                <span className="text-secondary-700 dark:text-secondary-300 text-lg">
                  <strong className="text-secondary-900 dark:text-white">Technical teams lacking dedicated AI engineers</strong> — you have the domain; I bring the AI implementation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 text-xl mt-0.5">•</span>
                <span className="text-secondary-700 dark:text-secondary-300 text-lg">
                  <strong className="text-secondary-900 dark:text-white">Consultancies needing an AI implementation specialist</strong> — to deliver on client AI projects without adding full-time headcount
                </span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 md:p-12">
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">
              Why an AI-Native Consultant Instead of a W-2 Hire
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 text-xl mt-0.5">✓</span>
                <span className="text-secondary-700 dark:text-secondary-300 text-lg">
                  No payroll tax or benefits overhead
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 text-xl mt-0.5">✓</span>
                <span className="text-secondary-700 dark:text-secondary-300 text-lg">
                  Project-based, outcome-tied spend instead of headcount
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 text-xl mt-0.5">✓</span>
                <span className="text-secondary-700 dark:text-secondary-300 text-lg">
                  Fast implementation without long-term commitment
                </span>
              </li>
            </ul>
            <p className="text-secondary-700 dark:text-secondary-300 text-lg leading-relaxed border-l-4 border-primary-500 dark:border-primary-400 pl-6 py-2">
              Instead of hiring a $150k+ W-2 AI engineer, you get a focused 6–12 week engagement that delivers a production pilot and a clear roadmap for scale — with no ongoing commitment unless you're thrilled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIWorkWith;
