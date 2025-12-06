import React from 'react';

interface SideProjectCardProps {
  title: string;
  status: 'Live' | 'In Progress' | 'Coming Soon';
  tagline: string;
  description: string;
  technologies: string[];
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

const SideProjectCard: React.FC<SideProjectCardProps> = ({
  title,
  status,
  tagline,
  description,
  technologies,
  impact,
  liveUrl,
  githubUrl,
  highlights
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800';
      case 'In Progress':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800';
      case 'Coming Soon':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      default:
        return 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 border-secondary-200 dark:border-secondary-800';
    }
  };

  return (
    <div className="glass-card overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 group">
      {/* Header */}
      <div className="p-6 pb-4 border-b border-secondary-200 dark:border-secondary-700">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-2xl text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
            {title}
          </h3>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
        <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">
          {tagline}
        </p>
        <p className="text-secondary-700 dark:text-secondary-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Impact */}
      <div className="p-6 py-4 bg-secondary-50/50 dark:bg-secondary-900/30">
        <p className="text-sm text-secondary-800 dark:text-secondary-200 leading-relaxed">
          <span className="font-semibold text-primary-600 dark:text-primary-400">Impact:</span> {impact}
        </p>
      </div>

      {/* Highlights */}
      <div className="p-6 py-4 flex-grow">
        <h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-3">Technical Highlights</h4>
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-secondary-700 dark:text-secondary-300">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="p-6 pt-4">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-md
                       bg-accent-cyan/10 dark:bg-accent-cyan/20 
                       text-accent-cyan-dark dark:text-accent-cyan
                       border border-accent-cyan/30 dark:border-accent-cyan/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-secondary-200 dark:border-secondary-700">
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn btn-primary text-sm py-2 flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-external-link-alt"></i>
              <span>View Live</span>
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn btn-outline text-sm py-2 flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-github"></i>
              <span>View Code</span>
            </a>
          )}
          {!liveUrl && !githubUrl && (
            <div className="flex-1 text-center text-sm text-secondary-500 dark:text-secondary-400 italic py-2">
              Code available upon request
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideProjectCard;

