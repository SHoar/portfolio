// Function to get correct path with base
// Using Vite's BASE_URL which is set in vite.config.ts
export const getImagePath = (path: string): string => {
  const basePath = import.meta.env.BASE_URL;
  return `${basePath}images/${path}`;
};

// Define image paths
export const images = {
  profile: 'IMG_3844_headshot.jpeg',
  projectLogos: {
    aiMlMicroservice: getImagePath('ai-ml-microservice.svg'),
    publicBenefits: getImagePath('public-benefits.svg'),
    recruitingAnalytics: getImagePath('recruiting-analytics.svg'),
    recreationPlatform: getImagePath('recreation-platform.svg'),
    devsecops: getImagePath('devsecops-pipeline.svg'),
    gisTracking: getImagePath('gis-tracking.svg')
  }
}; 