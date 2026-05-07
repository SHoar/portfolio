import React from 'react';

const HowIWork: React.FC = () => {
  return (
    <section id="how-i-work" className="py-20 bg-white dark:bg-secondary-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading text-secondary-900 dark:text-white">How We Work</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mt-4">
            Your path to less busywork — 3 steps, no jargon
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">1</span>
                <div>
                  <strong className="text-secondary-900 dark:text-white text-lg">Map</strong>
                  <p className="text-secondary-700 dark:text-secondary-300 mt-1">Together we map your current workflow and quantify where time and money are leaking.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">2</span>
                <div>
                  <strong className="text-secondary-900 dark:text-white text-lg">Design</strong>
                  <p className="text-secondary-700 dark:text-secondary-300 mt-1">You approve a small, focused pilot that plugs AI into one part of your process.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">3</span>
                <div>
                  <strong className="text-secondary-900 dark:text-white text-lg">Deploy & Train</strong>
                  <p className="text-secondary-700 dark:text-secondary-300 mt-1">We implement, train your team, and track results in plain numbers.</p>
                </div>
              </li>
            </ul>
            <p className="mt-8 pt-6 border-t border-secondary-200 dark:border-secondary-700 text-secondary-700 dark:text-secondary-300">
              There are no new logins unless they’re clearly justified—and we document everything in language your staff can understand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
