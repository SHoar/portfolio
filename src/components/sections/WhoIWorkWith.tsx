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
            <p className="text-secondary-700 dark:text-secondary-300 text-lg leading-relaxed mb-6">
              Established local service businesses that feel operational pain—paperwork, email chaos, duplicate data entry—but lack internal tech staff. You repeat the same processes every week and want to save time and improve margins without a big overhaul.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 text-xl mt-0.5">•</span>
                <span className="text-secondary-700 dark:text-secondary-300 text-lg">
                  <strong className="text-secondary-900 dark:text-white">Home trades</strong> — plumbers, electricians, contractors
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 text-xl mt-0.5">•</span>
                <span className="text-secondary-700 dark:text-secondary-300 text-lg">
                  <strong className="text-secondary-900 dark:text-white">Professional services</strong> — accountants, bookkeepers, fractional advisors
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 text-xl mt-0.5">•</span>
                <span className="text-secondary-700 dark:text-secondary-300 text-lg">
                  <strong className="text-secondary-900 dark:text-white">Appointment-based shops</strong> — salons, clinics, local agencies
                </span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 md:p-12">
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">
              How I’m Different
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 text-xl mt-0.5">✓</span>
                <span className="text-secondary-700 dark:text-secondary-300 text-lg">
                  <strong className="text-secondary-900 dark:text-white">Workflow-first, tool-second</strong> — We start by mapping your process and finding the smallest, safest place to add automation, not by pushing a specific platform.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 text-xl mt-0.5">✓</span>
                <span className="text-secondary-700 dark:text-secondary-300 text-lg">
                  <strong className="text-secondary-900 dark:text-white">Minimal disruption</strong> — No new logins unless necessary. We integrate with the email, calendar, and accounting tools your team already uses.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 text-xl mt-0.5">✓</span>
                <span className="text-secondary-700 dark:text-secondary-300 text-lg">
                  <strong className="text-secondary-900 dark:text-white">Human support and training</strong> — Hands-on training, simple documentation, and office hours are core deliverables, not extras.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 text-xl mt-0.5">✓</span>
                <span className="text-secondary-700 dark:text-secondary-300 text-lg">
                  <strong className="text-secondary-900 dark:text-white">Measured outcomes</strong> — We track time saved, error rates, and processing time so you see the return on your investment in plain numbers.
                </span>
              </li>
            </ul>
            <div className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
              <p className="text-sm font-semibold text-secondary-900 dark:text-white mb-2">Peace of mind for tech-cautious owners:</p>
              <ul className="text-secondary-700 dark:text-secondary-300 text-sm space-y-1">
                <li>• AI should free your team from busywork so they can spend more time with customers—not replace them.</li>
                <li>• Everything is built around the tools your team already uses, with simple checklists and training included.</li>
                <li>• Pilots start behind the scenes in back-office workflows so your customers only notice faster, smoother service.</li>
                <li>• Plain-language explanations and clear before-and-after numbers. You stay in control of every decision.</li>
                <li>• Data stays within secure, mainstream platforms—never sprayed across random tools without your approval.</li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12">
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">
              Why 1099 / Project-Based
            </h3>
            <p className="text-secondary-700 dark:text-secondary-300 text-lg leading-relaxed">
              I operate as an LLC and work on a project basis—no payroll or benefits overhead for you. You get outcome-tied spend and a clear engagement scope; treat it as a business expense. No long-term commitment unless you want ongoing support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIWorkWith;
