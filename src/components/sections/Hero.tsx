import React from 'react';
import profileImage from '../../assets/images/IMG_3382.jpg';

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
            src={profileImage}
            alt="Sean Hoar profile" 
          />
          <div className="intro-text space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Sean Hoar
            </h1>
            <div className="section-divider"></div>
            <p className="text-xl md:text-3xl font-light text-white/90 max-w-2xl mx-auto">
              Full-stack Engineer & AI-Powered Developer
            </p>
            <p className="text-lg md:text-xl text-white/75 max-w-xl mx-auto mt-4">
              Building maintainable systems with Python, React, Docker & Kubernetes
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a 
              href="#portfolio" 
              className="btn btn-outline animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn bg-white text-primary-600 hover:bg-white/90 animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 