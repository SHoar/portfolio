import React from 'react';

interface PortfolioCardProps {
  title: string;
  company: string;
  agency: string;
  dateRange: string;
  description: string;
  technologies: string[];
  impact: string;
  logoUrl: string;
  link: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  company,
  agency,
  dateRange,
  description,
  technologies,
  impact,
  logoUrl,
  link
}) => {
  const [imageError, setImageError] = React.useState(false);
  const showFallback = !logoUrl || imageError;

  return (
    <div className="portfolio-item h-full">
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full group"
      >
        <div className="glass-card overflow-hidden h-full flex flex-col">
          <div className="relative overflow-hidden bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-800 dark:to-secondary-900 p-8 flex items-center justify-center aspect-video">
            {!showFallback ? (
              <img 
                src={logoUrl} 
                alt={`${agency} logo`} 
                className="w-auto h-48 object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                crossOrigin="anonymous"
                onError={() => {
                  console.log(`Failed to load logo for ${agency}`);
                  setImageError(true);
                }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-32 h-32 rounded-full bg-primary-200 dark:bg-primary-800 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-600 dark:text-primary-300">
                    {(() => {
                      // If agency is 2-4 characters and all caps, use as-is
                      if (agency.length <= 4 && agency === agency.toUpperCase()) {
                        return agency;
                      }
                      // Otherwise generate initials from words
                      return agency.split(' ').map(word => word[0].toUpperCase()).join('').slice(0, 4);
                    })()}
                  </span>
                </div>
                <span className="text-xs text-secondary-600 dark:text-secondary-400 text-center max-w-xs">
                  {agency}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 via-transparent to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                          flex items-end justify-center pb-6">
              <div className="text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-sm font-semibold px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full inline-block">
                  View Details →
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <div className="mb-3">
              <div className="flex flex-col gap-1 mb-3">
                <span className="text-sm font-bold text-secondary-900 dark:text-white">
                  {agency}
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                    via {company}
                  </span>
                  <span className="text-xs text-secondary-500 dark:text-secondary-400">
                    {dateRange}
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-xl text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 italic mb-3">
                {description}
              </p>
            </div>
            
            <p className="text-secondary-700 dark:text-secondary-300 text-sm leading-relaxed mb-4 flex-grow">
              {impact}
            </p>
            
            <div className="mt-auto">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {technologies.slice(0, 5).map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs font-medium rounded-md
                             bg-primary-100 dark:bg-primary-900/30 
                             text-primary-700 dark:text-primary-300
                             border border-primary-200 dark:border-primary-800"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 5 && (
                  <span className="px-2 py-1 text-xs font-medium text-secondary-500 dark:text-secondary-400">
                    +{technologies.length - 5} more
                  </span>
                )}
              </div>
              
              <div className="pt-4 border-t border-secondary-200 dark:border-secondary-700">
                <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold 
                               group-hover:translate-x-2 inline-block transition-transform duration-300">
                  Learn More →
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PortfolioCard; 