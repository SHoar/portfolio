import React from 'react';
import { fourWeekSprint, smbScorecardItems } from '../../data/frameworks';

const FrameworksResources: React.FC = () => {
  return (
    <section id="frameworks" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-cyan/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary-300 dark:bg-primary-900 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading text-secondary-900 dark:text-white">Frameworks & Resources</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mt-4">
            Portable assets and inbound hooks to get started
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="glass-card p-8 md:p-12">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">4-Week AI Workflow Sprint</h3>
            <p className="text-secondary-700 dark:text-secondary-300 mb-8">
              A high-level outline for going from “we have a pain” to “we have a live pilot” in four weeks.
            </p>
            <ul className="space-y-6">
              {fourWeekSprint.map(({ week, title, description }) => (
                <li key={week} className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">
                    {week}
                  </span>
                  <div>
                    <strong className="text-secondary-900 dark:text-white">Week {week}: {title}</strong>
                    <p className="text-secondary-700 dark:text-secondary-300 mt-1 text-sm">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 md:p-12">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">SMB AI Readiness Scorecard</h3>
            <p className="text-secondary-700 dark:text-secondary-300 mb-6">
              A simple checklist. If most of these fit, you’re a strong candidate for a roadmap or pilot.
            </p>
            <ul className="space-y-3 mb-8">
              {smbScorecardItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary-600 dark:text-primary-400 mt-0.5">□</span>
                  <span className="text-secondary-700 dark:text-secondary-300">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary inline-flex items-center gap-2">
              Request Roadmap Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworksResources;
