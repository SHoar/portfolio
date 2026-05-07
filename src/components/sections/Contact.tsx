import React, { useState, useCallback } from 'react';

const CONTACT_EMAIL = 'sean.hoar@gmail.com';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mostTime, setMostTime] = useState('');
  const [toolsUsed, setToolsUsed] = useState('');

  const buildMailtoUrl = useCallback(() => {
    const subject = encodeURIComponent('Workflow Readiness Call Request');
    const bodyParts = [
      name && `Name: ${name}`,
      businessName && `Business: ${businessName}`,
      email && `Email: ${email}`,
      phone && `Phone: ${phone}`,
      mostTime && `What takes your team the most time every week?\n${mostTime}`,
      toolsUsed && `Which tools do you use today?\n${toolsUsed}`,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyParts.join('\n\n'));
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }, [name, businessName, email, phone, mostTime, toolsUsed]);

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
          <h2 className="section-heading">Book a Free Workflow Readiness Call</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mt-6">
            Share a few details below. I'll respond within one business day to schedule your 30-minute workflow call—no obligation.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="business-name" className="block text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                    Business name
                  </label>
                  <input
                    id="business-name"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your business"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="you@yourbusiness.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Best number to reach you"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="most-time" className="block text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                  What takes your team the most time every week?
                </label>
                <textarea
                  id="most-time"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="e.g. Chasing quotes, re-entering data, answering the same client questions, scheduling..."
                  value={mostTime}
                  onChange={(e) => setMostTime(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="tools-used" className="block text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                  Which tools do you use today?
                </label>
                <textarea
                  id="tools-used"
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="e.g. QuickBooks, Gmail, Google Calendar, a scheduling app, spreadsheets..."
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
                After you send, I'll respond within one business day to schedule your 30-minute workflow call.
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
