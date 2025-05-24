import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20" id="about">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      
      <div className="md:w-1/2 text-center md:text-left">
       <h2 className="text-4xl mb-8 font-bold">
  <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
    About Me
  </span>
</h2>

        
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a passionate <span className="text-purple-400 font-semibold">Frontend Developer</span> skilled in building responsive web interfaces using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React.js</strong>. I also have working knowledge of <strong>Bootstrap</strong> and <strong>Tailwind CSS</strong> for creating modern, mobile-friendly UIs.
        </p>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          I enjoy turning ideas into real projects and constantly learning new tools to improve my craft. I’m confident in my ability to take on challenges and contribute meaningfully to a team, while continuously growing as a developer.
        </p>

      </div>
  
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="/Images/jashu.jpg" 
          alt="About Me" 
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
  
    </div>
  </section>
  
  );
};

export default About;

