import React from 'react';

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id='contact'>
      <div className='text-center mb-10'>
        <h2 className="text-4xl mb-3 font-bold">
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
            Contact Me
          </span>
        </h2>
        <p className="text-gray-400 mt-2">Let's work together or just say hi!</p>
      </div>

      <div className='max-w-[800px] mx-auto'>
        <form action="https://getform.io/f/ayvyvqnb" method="POST" className='bg-[#161616] rounded-xl p-10 flex flex-col gap-6'>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className='bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className='bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
          />

          {/* Mobile input field added here */}
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Number"
            pattern="[0-9]{10}"
            title="Please enter a 10-digit mobile number"
            required
            className='bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className='bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
          ></textarea>

          <button
            type="submit"
            className='bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-md font-semibold hover:opacity-90 transition duration-300'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

