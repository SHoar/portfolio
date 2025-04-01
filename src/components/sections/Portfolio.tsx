import React from 'react';
import PortfolioCard from '../ui/PortfolioCard';
import projects from '../../data/projects';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading text-secondary">Portfolio</h2>
          <div className="section-divider bg-secondary"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold mb-4">Find More Content at My GitHub and CodePen Pages:</h3>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://github.com/SHoar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-4xl text-secondary hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <i className="fa fa-github"></i>
            </a>
            <a 
              href="https://codepen.io/seanhoar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-4xl text-secondary hover:text-primary transition-colors duration-300"
              aria-label="CodePen"
            >
              <i className="fa fa-codepen"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 