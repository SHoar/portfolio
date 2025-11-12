const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-950 to-secondary-900 dark:from-secondary-950 dark:via-black dark:to-secondary-950 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Location</h3>
            <div className="space-y-3 text-secondary-300">
              <p className="text-lg font-semibold text-white">Outside Washington, D.C.</p>
              <p className="text-secondary-400">Roanoke, VA</p>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Connect With Me</h3>
            <div className="flex justify-center md:justify-start flex-wrap gap-3">
              <a 
                href="https://twitter.com/seanhoar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                         flex items-center justify-center 
                         hover:bg-primary-600 hover:border-primary-500 hover:scale-110
                         transition-all duration-300 group"
                aria-label="Twitter"
              >
                <i className="fa fa-twitter text-lg group-hover:scale-110 transition-transform"></i>
              </a>
              <a 
                href="https://linkedin.com/IN/seanhoar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                         flex items-center justify-center 
                         hover:bg-primary-600 hover:border-primary-500 hover:scale-110
                         transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin text-lg group-hover:scale-110 transition-transform"></i>
              </a>
              <a 
                href="https://github.com/SHoar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                         flex items-center justify-center 
                         hover:bg-primary-600 hover:border-primary-500 hover:scale-110
                         transition-all duration-300 group"
                aria-label="GitHub"
              >
                <i className="fa fa-github text-lg group-hover:scale-110 transition-transform"></i>
              </a>
              <a 
                href="https://codepen.io/seanhoar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                         flex items-center justify-center 
                         hover:bg-primary-600 hover:border-primary-500 hover:scale-110
                         transition-all duration-300 group"
                aria-label="CodePen"
              >
                <i className="fa fa-codepen text-lg group-hover:scale-110 transition-transform"></i>
              </a>
              <a 
                href="https://www.codeschool.com/users/SHoar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                         flex items-center justify-center 
                         hover:bg-primary-600 hover:border-primary-500 hover:scale-110
                         transition-all duration-300 group"
                aria-label="CodeSchool"
              >
                <i className="fa fa-code text-lg group-hover:scale-110 transition-transform"></i>
              </a>
              <a 
                href="https://freecodecamp.com/SHoar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                         flex items-center justify-center 
                         hover:bg-primary-600 hover:border-primary-500 hover:scale-110
                         transition-all duration-300 group"
                aria-label="FreeCodeCamp"
              >
                <i className="fa fa-free-code-camp text-lg group-hover:scale-110 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 bg-black/30 backdrop-blur-sm py-6">
        <div className="container">
          <p className="text-center text-sm text-secondary-400">
            Copyright &copy; Sean Hoar {currentYear} • Built with React & Tailwind CSS
          </p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="#page-top" 
          className="w-14 h-14 bg-gradient-primary text-white rounded-xl 
                   flex items-center justify-center shadow-glow 
                   hover:shadow-glow-lg hover:scale-110
                   transition-all duration-300 group backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-y-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer; 