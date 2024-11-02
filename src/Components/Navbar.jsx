import React from 'react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <div>
      <div className='flex items-center justify-between bg-white m-12 h-14 rounded-full'>
        <img src={logo} alt="gigLab" className='h-10 rounded-full w-24 ml-10' />
        <ul className='flex gap-6 text-gray-500'>
          <li className='cursor-pointer  hover:text-gray-800 transition duration-300 ease-in-out hover:translate-y-0.5 '> Home</li>
          <li className='cursor-pointer  hover:text-gray-800 transition duration-300 ease-in-out hover:translate-y-0.5 '>Find work</li>
          <li className='cursor-pointer  hover:text-gray-800 transition duration-300 ease-in-out hover:translate-y-0.5 '>Find Freelancers</li>
          <li className='cursor-pointer  hover:text-gray-800 transition duration-300 ease-in-out hover:translate-y-0.5 '>Log in</li>
          <li className='cursor-pointer  hover:text-gray-800 transition duration-300 ease-in-out hover:translate-y-0.5 '>Sign up</li>
        </ul>
        <button className='bg-blue-500 text-white rounded-full h-8 w-36 mr-10 shadow-md'>
          Post A Project
        </button>
      </div>
    </div>
  );
};

export default Navbar;
