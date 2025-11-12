import React from 'react';
import aboutMeText from '../../assets/texts/about_me.md?raw';

const About: React.FC = () => {
  // Parse markdown content into paragraphs
  const paragraphs = aboutMeText
    .split('\n\n')
    .map(p => p.trim())
    .filter(p => p.length > 0);

  return (
    <section id="about" className="py-16 bg-primary text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading">About</h2>
          <div className="section-divider bg-white"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="#contact" 
            className="btn btn-outline"
          >
            Contact me
          </a>
          <p className="mt-4">
            if you'd like to setup an interview for the next magic project you want created for mobile and desktop web!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 