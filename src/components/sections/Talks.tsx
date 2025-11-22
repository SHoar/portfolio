import React from 'react';

const Talks: React.FC = () => {
  return (
    <section id="talks" className="py-20 bg-gradient-to-br from-secondary-50 to-accent-cyan/10 dark:from-secondary-950 dark:to-secondary-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Talks & Presentations</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mt-4">
            Sharing insights and experiences with the developer community
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-6 md:p-8 lg:p-10">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-secondary-900 dark:text-white">
                Evolutions of Vibe Coding
              </h3>
              <p className="text-secondary-700 dark:text-secondary-300 mb-2">
                <span className="font-semibold">RVNUG (Roanoke Valley .NET User Group)</span>
              </p>
              <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-4">
                A deep dive into the evolution of AI-assisted development and how it's transforming the way we write code
              </p>
            </div>

            {/* Responsive iframe container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://shoar.github.io/Tech_Talks/index.html"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg border-2 border-secondary-200 dark:border-secondary-700"
                title="Evolutions of Vibe Coding - RVNUG Tech Talk"
                allow="fullscreen"
                loading="lazy"
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://shoar.github.io/Tech_Talks/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center space-x-2"
              >
                <i className="fa-solid fa-external-link-alt"></i>
                <span>View Full Presentation</span>
              </a>
              <p className="text-sm text-secondary-600 dark:text-secondary-400">Or view the YouTube recorded talk <a href="https://www.youtube.com/watch?v=kC2fL2Co9pU" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400">here</a>.</p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400">
                <i className="fa-solid fa-info-circle mr-2"></i>
                Use arrow keys or click to navigate slides
              </p>
            </div>
          </div>
        </div>

        {/* Additional talks section placeholder */}
        <div className="text-center mt-12">
          <p className="text-secondary-600 dark:text-secondary-400 italic">
            More presentations coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Talks;


