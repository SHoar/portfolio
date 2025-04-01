import React from 'react';
import { images } from '../../assets';

const Hero: React.FC = () => {
  return (
    <section className="bg-primary text-white pt-24 pb-16">
      <div className="container" id="maincontent" tabIndex={-1}>
        <div className="flex flex-col items-center text-center">
          <img 
            id="profile-pic" 
            className="w-56 h-56 rounded-full object-cover mb-6 border-4 border-white"
            src={images.profile} 
            alt="Sean Hoar profile" 
          />
          <div className="intro-text">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sean Hoar</h1>
            <div className="w-24 h-1 bg-white mx-auto my-5"></div>
            <p className="text-xl md:text-2xl">
              Fullstack and Frontend JavaScript Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 