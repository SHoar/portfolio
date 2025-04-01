import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-primary text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading">About</h2>
          <div className="section-divider bg-white"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              I am a versatile front-end/ full-stack developer who is very strong in client communications and eliciting requirements, as well as a team player who not only knows what the roles of a well-oiled team are, but is also committed to having that team play together and achieve greatness!
            </p>
            <p>
              What does this mean? Well, let me be candid. I am a JavaScript Developer ready to create interactive interfaces and UIs on the web. I think you'll find that I have a lot of transferrable skills that will also contribute to product development progress:
            </p>
          </div>
          
          <div>
            <p className="mb-4">
              Plenty of troubleshooting and operational experience, as well as client relations, and I'm a quick learner, willing to put in the time it takes, because not only do I love learning, but I care about making the customer happy and satisfied. It's all about repeat and referral business!
            </p>
            <p>
              I've done a bit with Node.js backends and ReactJS frontends, MySQL, MongoDB & NOSQL DBs, I am happy to work with other frameworks and languages. I've also done some PHP/MYSQL, Python/Django, and Ruby/Rails... but you'll probably find me most happy with JS and React.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="#contact" 
            className="btn btn-outline"
          >
            Contact me
          </a>
          <p className="mt-4">
            if you'd like to setup an interview for the next magic project you want created for mobile and desktop web!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 