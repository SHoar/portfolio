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
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-300 dark:bg-primary-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-cyan/30 rounded-full blur-3xl"></div>
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