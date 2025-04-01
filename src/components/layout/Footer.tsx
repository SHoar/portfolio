import React from 'react';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Locations</h3>
            <ul className="space-y-2">
              <li>
                <h5 className="font-bold">Outside Washington, D.C.</h5>
                <p>Fairfax Station, VA</p>
              </li>
              <li>
                <h5 className="font-bold">South Florida</h5>
                <p>Boynton Beach, FL</p>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Around the Web</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a 
                href="//twitter.com/seanhoar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors duration-300"
                aria-label="Twitter"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a 
                href="//linkedin.com/IN/seanhoar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a 
                href="//github.com/SHoar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors duration-300"
                aria-label="GitHub"
              >
                <i className="fa fa-github"></i>
              </a>
              <a 
                href="//codepen.io/seanhoar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors duration-300"
                aria-label="CodePen"
              >
                <i className="fa fa-codepen"></i>
              </a>
              <a 
                href="https://www.codeschool.com/users/SHoar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors duration-300"
                aria-label="CodeSchool"
              >
                <i className="fa fa-code"></i>
              </a>
              <a 
                href="//freecodecamp.com/SHoar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors duration-300"
                aria-label="FreeCodeCamp"
              >
                <i className="fa fa-free-code-camp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 py-4">
        <div className="container">
          <p className="text-center text-sm">
            Copyright &copy; Sean Hoar {currentYear}
          </p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <div className="fixed bottom-4 right-4 z-10">
        <a 
          href="#page-top" 
          className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer; 