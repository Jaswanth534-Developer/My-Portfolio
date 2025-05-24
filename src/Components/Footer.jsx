import React from 'react';
import { FaInstagramSquare, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto p-12 text-center text-gray-400 flex flex-col items-center space-y-8">
      {/* Name */}
      <div className="text-2xl font-semibold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
        Jaswanth Reddy
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-12 text-5xl">
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/jaswanth-kumar-reddy-k-6a45122a2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Jaswanth534-Developer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-600 text-xl">
        &copy; {new Date().getFullYear()} Jaswanth. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;


