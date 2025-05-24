import React from 'react';

const skills = [
  { src: '/Images/html5.png', label: 'HTML' },
  { src: '/Images/css.png', label: 'CSS' },
  { src: '/Images/javascript.png', label: 'JavaScript' },
  { src: '/Images/bootstrap.png', label: 'Bootstrap' },
  { src: '/Images/tailwind.png', label: 'Tailwind' },
  { src: '/Images/react.png', label: 'React' },
];

const Skills = () => {
  return (
    <div className="bg-black text-white py-12 px-4 max-w-[1200px] mx-auto">
  <h2 className="mt-12 text-3xl md:text-5xl font-extrabold text-center mb-12">
  <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
    My Tech Stack
  </span>
</h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-900 p-4 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={skill.src}
              alt={skill.label}
              className="w-[60px] md:w-[100px] rounded-xl"
            />
            <p className="mt-3 text-sm md:text-base font-medium text-purple-200">
              {skill.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;




