import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg"
import down from "../assets/down.svg"

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-black font-bold text-xl">
            <img src={logo} alt="Logo" />
          </Link>
          
          <div className="ml-4 relative">
            <button className="bg-[#1A73E8] text-white flex items-center p-2 rounded-[8px] px-4 hover:text-gray-300 focus:outline-none">
              Courses <img className="pt-1 pl-1" src={down} alt="Dropdown" />
            </button>
            <div className="absolute hidden bg-gray-800 text-white p-2 mt-2 w-48 shadow-lg rounded">
              <Link to="/courses" className="block px-4 py-2 hover:bg-gray-700">Course 1</Link>
              <Link to="/courses" className="block px-4 py-2 hover:bg-gray-700">Course 2</Link>
              <Link to="/courses" className="block px-4 py-2 hover:bg-gray-700">Course 3</Link>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="hidden md:block">
            <Link to="/refer" className="text-black hover:text-gray-300 ml-4">Refer & Earn</Link>
            <Link to="/rewards" className="text-black hover:text-gray-300 ml-4">Rewards</Link>
            <Link to="/about" className="text-black hover:text-gray-300 ml-4">About</Link>
            <Link to="/login" className="bg-[#94A3B833] text-black hover:text-gray-300 focus:outline-none bg-white px-4 py-2 ml-4 rounded">Login</Link>
            <Link to="/signup" className="bg-[#1A73E8] text-white px-4 py-2 rounded ml-4">Try for Free</Link>
          </div>
          
          <div className="md:hidden ml-4">
            <button className="text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
