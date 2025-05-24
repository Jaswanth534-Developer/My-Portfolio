import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const menuItems = ['Home', 'About', 'Skills', 'Work', 'Contact'];

  const handleNav = () => {
    setNav(!nav);
  };

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = nav ? 'hidden' : 'auto';
  }, [nav]);

  const renderMenu = (isMobile = false) => (
    <ul className={`${isMobile ? 'p-8 text-2xl space-y-4' : 'hidden md:flex'}`}>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`${
            isMobile ? 'py-2 px-4' : 'p-5'
          } hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-orange-600 to-pink-600 transition duration-300 font-medium`}
        >
          <a href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center px-4'>
      {/* Gradient Name */}
      <h1 className='text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text'>
        Jaswanth Reddy
      </h1>

      {/* Desktop Menu */}
      {renderMenu()}

      {/* Mobile Menu Icon */}
      <div
        onClick={handleNav}
        className='cursor-pointer md:hidden'
        aria-label="Toggle menu"
      >
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed h-full top-0 left-0 w-[60%] bg-[#202121] shadow-lg z-50 transition-all duration-500 ${
          nav ? 'left-0' : 'left-[-100%]'
        }`}
      >
        <h1 className='text-3xl m-4 bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text'>
          Jaswanth Reddy
        </h1>
        {renderMenu(true)}
      </div>
    </div>
  );
};

export default Navbar;

