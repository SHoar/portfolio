import React from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  image,
  link
}) => {
  return (
    <div className="portfolio-item overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="relative overflow-hidden group">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-white text-center px-4">
              <h3 className="text-xl font-bold">{title}</h3>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-bold text-lg text-secondary mb-2">{title}</h3>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default PortfolioCard; 