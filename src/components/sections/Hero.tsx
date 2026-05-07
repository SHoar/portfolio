import React from 'react';
import {getImagePath, images} from '../../assets/index';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg-primary dark:gradient-bg-secondary text-white pt-32 pb-20 relative overflow-hidden">
      {/* Decorative background elements - Static for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-cyan/30 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-purple/30 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container relative z-10" id="maincontent" tabIndex={-1}>
        <div className="flex flex-col items-center text-center animate-fade-in">
          <img 
            id="profile-pic" 
            className="profile-image w-56 h-56 md:w-64 md:h-64 object-cover mb-8 animate-scale-in"
            src={getImagePath(images.profile)}
            alt="Sean Hoar profile" 
          />
          <div className="intro-text space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              SH Innovation LLC
            </h1>
            <div className="section-divider"></div>
            <p className="text-xl md:text-3xl font-light text-white/90 max-w-2xl mx-auto">
              Free Your Team from Repetitive Busywork—Without Changing the Tools You Already Use.
            </p>
            <p className="text-lg md:text-xl text-white/75 max-w-xl mx-auto mt-4">
              Local AI workflow consulting for small businesses that want modern efficiency without losing their personal touch.
            </p>
            <ul className="text-left max-w-lg mx-auto space-y-2 text-white/90 text-base md:text-lg mt-6">
              <li className="flex items-start gap-2">
                <span className="text-primary-300 mt-1">•</span>
                We plug AI into your existing email, calendar, and accounting tools.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-300 mt-1">•</span>
                Start with a 90-minute workflow assessment—no long-term contract.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-300 mt-1">•</span>
                Designed for owners who want to save time, not replace people.
              </li>
            </ul>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a 
              href="#contact" 
              className="btn bg-white text-primary-600 hover:bg-white/90 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              Book a Free Workflow Readiness Call
            </a>
            <a 
              href="#case-studies" 
              className="btn btn-outline animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              See Example Outcomes
            </a>
          </div>
          <p className="mt-6 text-white/70 text-sm">
            <a href="#insights" className="hover:text-white underline underline-offset-2">Explore Insights & Playbooks</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 