import { images } from '../assets';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ClientKeeper Mobile Rolodex",
    description: "A simple prototype built with MongoDB, ExpressJS, Angular, and NodeJS.",
    image: images.portfolio.clientkeeper,
    link: "https://github.com/SHoar/clientkeeper"
  },
  {
    id: 2,
    title: "TodoList",
    description: "A vanilla javascript app with bootstrap styling, using MongoDB for data storage.",
    image: images.portfolio.todolist,
    link: "https://github.com/SHoar/todolist"
  },
  {
    id: 3,
    title: "Fun Food Friends",
    description: "A Reactjs app using Firebase for realtime storage to keep track of who is bringing what with react and bootstrap cards.",
    image: images.portfolio.funFoodFriends,
    link: "http://fun-food-friends-kqxdmwbmti.now.sh/"
  },
  {
    id: 4,
    title: "ShoutBox",
    description: "A simple chat app built with linux, apache, MySQL, and PHP.",
    image: images.portfolio.shoutbox,
    link: "https://github.com/SHoar/shoutbox/"
  },
  {
    id: 5,
    title: "GithubProfiles",
    description: "Using the GitHub API, a GitHub Profile Page built using React.js listing user repos and search to find other GitHub users.",
    image: images.portfolio.githubProfiles,
    link: "https://github.com/SHoar/githubprofiles/"
  }
];

export default projects; 