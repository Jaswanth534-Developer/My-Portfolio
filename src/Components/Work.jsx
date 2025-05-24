import React from 'react';

const projects = [
  {
     src: '/Images/expense-tracker.png',
     label: 'Expense Tracker', 
     link:  [
      { type: 'Live', url: 'https://your-live-site.com' },
      { type: 'Code', url: 'https://github.com/your-repo' }
    ] 
   },
  { 
    src: '/Images/hangman.png', 
    label: 'Hangman Game', 
    link: '/' },
  {
     src: '/Images/tasty-food.png',
     label: 'Tasty Food', 
     link:  [
      { type: 'Live', url: 'https://your-live-site.com' },
      { type: 'Code', url: 'https://github.com/your-repo' }
    ] 
  },
  { 
    src: '/Images/speed-typer.png', 
    label: 'Speed Typer',
    link: '/' },
  { 
    src: '/Images/footcap.png',
    label: 'Footcap', 
    link: '/' },
];

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
      <div className='pb-8'>
       <h2 className="text-4xl mb-3 font-bold">
  <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
    Work
  </span>
</h2>

      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                       shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center 
                       mx-auto content-div h-[200px] bg-cover relative'
            style={{ backgroundImage: `url(${project.src})` }}
          >
            <div className='opacity-0 group-hover:opacity-90 bg-gray-900/70 absolute inset-0 flex flex-col justify-center items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>{project.label}</span>
             
              <div className='pt-8 text-center'>
                <a href={project.link} target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm hover:bg-gray-200'>
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
