import React, { useState, useCallback } from 'react';

const CONTACT_EMAIL = 'sean.hoar@gmail.com';

const Contact: React.FC = () => {
  const [problemSummary, setProblemSummary] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [toolsUsed, setToolsUsed] = useState('');

  const buildMailtoUrl = useCallback(() => {
    const subject = encodeURIComponent('AI Implementation – Discovery Call Request');
    const bodyParts = [
      problemSummary && `Problem summary:\n${problemSummary}`,
      teamSize && `Team size: ${teamSize}`,
      toolsUsed && `Tools used:\n${toolsUsed}`,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyParts.join('\n\n'));
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }, [problemSummary, teamSize, toolsUsed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = buildMailtoUrl();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-accent-cyan/10 dark:from-secondary-900 dark:to-secondary-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary-300/30 dark:bg-primary-900/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-cyan/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-heading">Book a Discovery Call</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mt-6">
            Let's discuss how we can work together on AI automation and implementation for your organization
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6">
                <svg 
                  className="w-10 h-10 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-secondary-900 dark:text-white">
                Quick intake
              </h3>
              <p className="text-secondary-700 dark:text-secondary-300 mb-6">
                Share a bit about your situation and we'll open your email with everything pre-filled — just hit send.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label htmlFor="problem-summary" className="block text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                  Problem summary
                </label>
                <textarea
                  id="problem-summary"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="e.g. Manual triage in support, slow recruiting insights, repetitive data workflows..."
                  value={problemSummary}
                  onChange={(e) => setProblemSummary(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="team-size" className="block text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                  Team size
                </label>
                <select
                  id="team-size"
                  className="w-full px-4 py-3 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="1-10">1–10</option>
                  <option value="11-50">11–50</option>
                  <option value="51-200">51–200</option>
                  <option value="200+">200+</option>
                </select>
              </div>
              <div>
                <label htmlFor="tools-used" className="block text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                  Tools used
                </label>
                <textarea
                  id="tools-used"
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="e.g. Slack, Salesforce, internal APIs, email..."
                  value={toolsUsed}
                  onChange={(e) => setToolsUsed(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" className="btn btn-primary flex-1 inline-flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Open email to send
                </button>
                <a 
                  href={`mailto:${CONTACT_EMAIL}`} 
                  className="btn btn-outline flex-1 inline-flex items-center justify-center"
                >
                  Email directly
                </a>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-secondary-200 dark:border-secondary-700 text-center">
              <p className="text-secondary-700 dark:text-secondary-300 text-sm">
                Looking for an AI implementation partner for your organization? I'd love to hear from you.
              </p>
              <a 
                href={`mailto:${CONTACT_EMAIL}`} 
                className="text-primary-600 dark:text-primary-400 font-semibold hover:underline mt-2 inline-block"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
