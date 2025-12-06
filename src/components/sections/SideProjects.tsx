import React from 'react';
import sideProjects from '../../data/sideProjects';
import SideProjectCard from '../ui/SideProjectCard';

const SideProjects: React.FC = () => {
  return (
    <section 
      id="side-projects" 
      className="py-20 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 dark:from-secondary-900 dark:to-secondary-950 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-cyan/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-purple/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-secondary-900 dark:text-white">
            Side Projects & Open Source
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto mt-6">
            Personal projects that showcase autonomous technical execution, from concept to deployment. 
            Building tools for real communities and exploring new technologies hands-on.
          </p>
        </div>

        {/* IC Value Proposition Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass-card p-6 bg-primary-50/50 dark:bg-primary-900/10 border-l-4 border-primary-600 dark:border-primary-400">
            <div className="flex items-start gap-4">
              <div className="text-primary-600 dark:text-primary-400 text-3xl mt-1">
                <i className="fa-solid fa-code"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                  Why Side Projects Matter for IC Engineers
                </h3>
                <p className="text-sm text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  These projects demonstrate my preference for hands-on building over coordination. 
                  Each one was independently architected, developed, and deployed — showcasing the 
                  autonomous technical execution that makes me most productive as an individual contributor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sideProjects.map((project) => (
            <SideProjectCard
              key={project.id}
              title={project.title}
              status={project.status}
              tagline={project.tagline}
              description={project.description}
              technologies={project.technologies}
              impact={project.impact}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              highlights={project.highlights}
            />
          ))}
          
          {/* Add More Coming Soon Card */}
          <div className="glass-card overflow-hidden h-full flex flex-col justify-center items-center p-8 border-2 border-dashed border-secondary-300 dark:border-secondary-700 hover:border-primary-400 dark:hover:border-primary-600 transition-colors duration-300">
            <div className="text-center">
              <div className="text-6xl text-secondary-400 dark:text-secondary-600 mb-4">
                <i className="fa-solid fa-plus-circle"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                More Coming Soon
              </h3>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">
                Always building, always learning. Check back for new projects exploring the latest technologies.
              </p>
              <p className="text-xs text-secondary-500 dark:text-secondary-500 italic">
                Current focus: Advanced AI integrations & real-time data platforms
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-secondary-700 dark:text-secondary-300 mb-6">
              Interested in collaborating on open source or discussing technical approaches? 
              I'm always open to connecting with fellow IC engineers who love hands-on building.
            </p>
            <a 
              href="#contact" 
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <i className="fa-solid fa-envelope"></i>
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideProjects;

