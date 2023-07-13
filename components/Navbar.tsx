import { useState } from "react";
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  
  return (
      <nav className="mx-7 md:mx-16 pt-7 fixed w-full z-20 top-0 left-0 bg-custom-purple">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
          <a href="#herosection">
          <div className="">
              <div className="mt-7 md:w-[148.44px] md:h-[77.62px] md:top-[11.38px] w-[118.63px] h-[74.13px] left-0 top-[8.87px] absolute text-custom-yellow md:text-[34px] text-[28px] font-bold font-league-spartan">TOOL</div>
              <div className="mt-7 md:w-[148.44px] md:h-[77.62px] md:left-[80.56px] absolute w-[118.63px] h-[74.13px] left-[69px] top-0 text-gray-100 md:text-[34px] text-[28px] font-bold font-league-spartan">BEE</div>
            </div>
            </a>
          </div>
          <div className="flex md:order-2">
            <a href="#featuresection" className="font-poppins font-semibold text-black bg-custom-yellow hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center mr-7 md:mr-10">Featured Tools</a>
            <button onClick={toggleOpen} type="button" className="mr-10 md:mr-16 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? '' : 'hidden'} md:block`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a href="#herosection" className="text-gray-100 font-league-spartan md:text-[20px] text-[16px]">Home</a>
              </li>
              <li>
                <a href="#toolsection" className="text-gray-100 font-league-spartan md:text-[20px] text-[16px]">AI Directory</a>
              </li>
              <li>
                <a href="#featuresection" className="text-gray-100 font-league-spartan md:text-[20px] text-[16px]">Featured Tools</a>
              </li>
              <li>
                <a href="#newssection" className="text-gray-100 font-league-spartan md:text-[20px] text-[16px]">AI News</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;
