import React from 'react';
import aboutMeText from '../../assets/texts/about_me.md?raw';

const About: React.FC = () => {
  // Parse markdown content into paragraphs
  const paragraphs = aboutMeText
    .split('\n\n')
    .map(p => p.trim())
    .filter(p => p.length > 0);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-300 dark:bg-primary-900 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-cyan/30 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading text-secondary-900 dark:text-white">About Me</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="space-y-6 text-secondary-800 dark:text-secondary-100">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg md:text-xl leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Technical Strengths - IC Focus */}
            <div className="mt-12 pt-8 border-t border-secondary-200 dark:border-secondary-700">
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                Why I Excel as an Individual Contributor
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-primary-600 dark:text-primary-400 text-xl">✓</span>
                    <div>
                      <strong className="text-secondary-900 dark:text-white">Deep Technical Execution:</strong>
                      <span className="text-secondary-700 dark:text-secondary-300"> Most productive when 70%+ time is spent building and solving complex problems</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary-600 dark:text-primary-400 text-xl">✓</span>
                    <div>
                      <strong className="text-secondary-900 dark:text-white">Autonomous Problem Solver:</strong>
                      <span className="text-secondary-700 dark:text-secondary-300"> Proven track record of independently architecting and delivering production systems</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary-600 dark:text-primary-400 text-xl">✓</span>
                    <div>
                      <strong className="text-secondary-900 dark:text-white">Performance Optimization:</strong>
                      <span className="text-secondary-700 dark:text-secondary-300"> Expertise in profiling, debugging, and eliminating bottlenecks at scale</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-primary-600 dark:text-primary-400 text-xl">✓</span>
                    <div>
                      <strong className="text-secondary-900 dark:text-white">Full-Stack Depth:</strong>
                      <span className="text-secondary-700 dark:text-secondary-300"> React/TypeScript frontends + Python/FastAPI backends + Kubernetes deployments</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary-600 dark:text-primary-400 text-xl">✓</span>
                    <div>
                      <strong className="text-secondary-900 dark:text-white">Migration Specialist:</strong>
                      <span className="text-secondary-700 dark:text-secondary-300"> Successfully modernized legacy systems with measurable performance gains</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary-600 dark:text-primary-400 text-xl">✓</span>
                    <div>
                      <strong className="text-secondary-900 dark:text-white">Production-Ready Code:</strong>
                      <span className="text-secondary-700 dark:text-secondary-300"> Focus on maintainability, testing, and systems that scale without constant intervention</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="btn btn-primary"
          >
            Let's Connect
          </a>
          <p className="mt-6 text-secondary-700 dark:text-secondary-300 text-lg max-w-2xl mx-auto">
            Interested in collaborating on your next innovative project? I'd love to hear from you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 