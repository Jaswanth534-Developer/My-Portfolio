import React from 'react'
import Navbar from './Navbar'

import{ TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
<div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[40vh] mx-auto py-8 bg-black text-white'>

<div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
  <img 
    src="/Images/Jashu-hero.jpg" 
    alt="Hero" 
    className="w-[200px] h-[200px] object-cover rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
  />
</div>

<div className='col-span-2 flex flex-col justify-center px-5'>
<h1 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold">
  <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text text-3xl font-semibold">
    I'm a <br />
    <TypeAnimation
      sequence={[
        "Frontend Developer",
        1000,
        "UI Developer",
        1000,
        "React.js Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </span>
</h1>
  <p className="mt-4 text-gray-400 text-lg max-w-[600px]">
 I am a frontend developer with a strong understanding of building responsive and interactive websites. I have a good knowledge of HTML, CSS, JavaScript, and React.js. I enjoy turning ideas into real projects and constantly improving my skills by working on new challenges.</p>

<div className='my-8'>
  <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 
              bg-gradient-to-br from-orange-500 to-pink-500 text-whitw'>
                Download CV
              </a>
  <a href="/" className='px-6 py-3 w-full rounded-xl mr-4
              border border-gray-400 hover:bg-gradient-to-br-from-orange-500 to-pink-500
              text-white hover:border-none'>
                Contact
              </a>            
</div>


</div>

</div>

  )
}

export default Hero