// Function to get correct path with base
// Using Vite's BASE_URL which is set in vite.config.ts
const getImagePath = (path: string): string => {
  const basePath = import.meta.env.BASE_URL;
  return `${basePath}images/${path}`;
};

// Define image paths
export const images = {
  profile: getImagePath('IMG_3382.jpg'),
  portfolio: {
    clientkeeper: getImagePath('portfolio/clientkeeper.jpg'),
    todolist: getImagePath('portfolio/todolist.jpg'),
    funFoodFriends: getImagePath('portfolio/FunFoodFriends.jpg'),
    shoutbox: getImagePath('portfolio/shoutbox_hires2382x1534.jpg'),
    githubProfiles: getImagePath('portfolio/MyGHProfileSnapshot.jpg')
  },
  projectLogos: {
    aiMlMicroservice: getImagePath('ai-ml-microservice.svg'),
    publicBenefits: getImagePath('public-benefits.svg'),
    recruitingAnalytics: getImagePath('recruiting-analytics.svg'),
    recreationPlatform: getImagePath('recreation-platform.svg'),
    devsecops: getImagePath('devsecops-pipeline.svg'),
    gisTracking: getImagePath('gis-tracking.svg')
  }
}; 