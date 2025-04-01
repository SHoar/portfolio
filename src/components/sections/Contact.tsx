import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading text-secondary">PLEASE EMAIL ME AT:</h2>
          <div className="section-divider bg-secondary"></div>
          <h3 className="text-xl md:text-2xl mt-6">
            <a 
              href="mailto:sean.hoar@gmail.com" 
              className="text-primary hover:text-secondary transition-colors duration-300"
            >
              Sean.Hoar@Gmail.com
            </a>
          </h3>
        </div>
        
        {/* Commented out form section
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Email Address"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Phone Number"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Message"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="btn btn-primary px-8 py-3"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        */}
      </div>
    </section>
  );
};

export default Contact; 