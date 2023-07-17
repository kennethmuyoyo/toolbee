import { useState } from "react";
import React from 'react';
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const [activeNavItem, setActiveNavItem] = useState("");

  
  return (
<nav className="pt-6 mx-8 md:mx-16 pb-6 fixed w-full z-20 top-0 bg-custom-purple">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between">
    <div className="flex items-center">
      <a href="#homesection" className="flex">
        <Image src="/logob.svg" alt="tag" width="150" height="150" className="" loading="eager"/>
      </a>
          </div>
          <div className="flex md:order-2">
            <a href="#featuresection" className="font-poppins font-medium text-black bg-custom-yellow hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center ">Featured Tools</a>
            <button onClick={toggleOpen} type="button" className="mr-10 md:mr-16 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? '' : 'hidden'} md:block`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a 
                href="#homesection" 
                className={`font-poppins md:text-[18px] text-[14px] ${activeNavItem === "Home" ? "text-white" : "text-custom-yellow"}`} 
                onClick={() => setActiveNavItem("Home")}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#toolsection" 
                className={`font-poppins md:text-[18px] text-[14px] ${activeNavItem === "AIDirectory" ? "text-white" : "text-custom-yellow"}`} 
                onClick={() => setActiveNavItem("AIDirectory")}
              >
                AI Directory
              </a>
            </li>
              <li>
                <a 
                  href="#featuresection" 
                  className={`font-poppins md:text-[18px] text-[14px] ${activeNavItem === "FeaturedTools" ? "text-white" : "text-custom-yellow"}`} 
                  onClick={() => setActiveNavItem("FeaturedTools")}
                >
                  Featured Tools
                </a>
              </li>
              <li>
                <a 
                  href="#newssection" 
                  className={`font-poppins md:text-[18px] text-[14px] ${activeNavItem === "AINews" ? "text-white" : "text-custom-yellow"}`} 
                  onClick={() => setActiveNavItem("AINews")}
                >
                  AI News
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;
