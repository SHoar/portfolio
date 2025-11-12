import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-accent-cyan/10 dark:from-secondary-900 dark:to-secondary-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary-300/30 dark:bg-primary-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-heading">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mt-6">
            Let's discuss how we can work together on your next project
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            <div className="mb-8">
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
                Email Me
              </h3>
              <a 
                href="mailto:sean.hoar@gmail.com" 
                className="text-2xl md:text-3xl font-bold text-gradient hover:opacity-80 transition-opacity duration-300"
              >
                Sean.Hoar@Gmail.com
              </a>
            </div>
            
            <div className="pt-8 border-t border-secondary-200 dark:border-secondary-700">
              <p className="text-secondary-700 dark:text-secondary-300 mb-6">
                Whether you need a full-stack developer for your team, a consultant for your project, 
                or just want to connect — I'd love to hear from you!
              </p>
              <a 
                href="mailto:sean.hoar@gmail.com" 
                className="btn btn-primary"
              >
                <svg 
                  className="w-5 h-5 mr-2 inline-block" 
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
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 