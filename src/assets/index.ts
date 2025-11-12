// Define base path for GitHub Pages
const BASE_PATH = '/portfolio/';

// Function to get correct path with base
const getImagePath = (path: string): string => {
  // Use BASE_PATH if it's in production (GitHub pages deployment)
  const isProduction = window.location.hostname !== 'localhost';
  const basePath = isProduction ? BASE_PATH : '/';
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
  }
}; 