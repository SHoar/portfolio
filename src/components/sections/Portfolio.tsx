import React from 'react';
import PortfolioCard from '../ui/PortfolioCard';
import projects from '../../data/projects';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-secondary-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Professional Experience</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mt-4">
            Featured projects from leading government contractors and federal agencies, showcasing full-stack development and technical leadership
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PortfolioCard
                title={project.title}
                company={project.company}
                dateRange={project.dateRange}
                description={project.description}
                technologies={project.technologies}
                impact={project.impact}
                image={project.image}
                link={project.link}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-6 text-secondary-900 dark:text-white">
              Explore More of My Work
            </h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/SHoar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-2 p-4 rounded-xl
                           hover:bg-secondary-100 dark:hover:bg-secondary-800 
                           transition-all duration-300"
                aria-label="GitHub"
              >
                <i className="fa fa-github text-5xl text-secondary-700 dark:text-secondary-300 
                             group-hover:text-primary-600 dark:group-hover:text-primary-400 
                             transition-colors duration-300"></i>
                <span className="text-sm font-semibold text-secondary-600 dark:text-secondary-400">
                  GitHub
                </span>
              </a>
              <a 
                href="https://codepen.io/seanhoar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-2 p-4 rounded-xl
                           hover:bg-secondary-100 dark:hover:bg-secondary-800 
                           transition-all duration-300"
                aria-label="CodePen"
              >
                <i className="fa fa-codepen text-5xl text-secondary-700 dark:text-secondary-300 
                             group-hover:text-primary-600 dark:group-hover:text-primary-400 
                             transition-colors duration-300"></i>
                <span className="text-sm font-semibold text-secondary-600 dark:text-secondary-400">
                  CodePen
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 