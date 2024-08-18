'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaSun, FaTimes } from "react-icons/fa";
import Image from "next/image"; // Import the Image component
import { FaMoon } from "react-icons/fa6";

export default function Navbar({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (darkMode: boolean) => void }) {
  const [nav, setNav] = useState(false);

    // Load dark mode preference from localStorage on component mount
    useEffect(() => {
      const storedDarkMode = localStorage.getItem('darkMode');
      if (storedDarkMode === 'true') {
        setDarkMode(true);
      }
    }, []); // Empty dependency array ensures this runs only once on mount
  
    // Save dark mode preference to localStorage whenever it changes
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);

  return (
    <nav className={`backdrop-blur-3xl flex justify-between items-center top-0 left-0 w-full z-10 h-20 px-4 fixed ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex items-center"> {/* Wrap logo and text in a flex container */}
        <Image 
          src="/kariicon1.png" // Replace with the path to your logo image
          alt="Kanari Logo" 
          width={50} // Adjust width as needed
          height={50} // Adjust height as needed
        />
        <h1 className="text-5xl font-signature ml-2">
          <Link
            className={`link-underline ${darkMode ? 'link-underline-white' : 'link-underline-black'}`}
            href="/"
          >
            Kanari
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        <li className={`nav-links px-4 cursor-pointer capitalize font-medium ${darkMode ? 'text-orange-200 hover:text-white' : 'text-orange-500 hover:text-black'} hover:scale-105 duration-200 link-underline`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`nav-links px-4 cursor-pointer capitalize font-medium ${darkMode ? 'text-orange-200 hover:text-white' : 'text-orange-500 hover:text-black'} hover:scale-105 duration-200 link-underline`}>
          <Link href="/learn">Learn</Link>
        </li>
        <li className={`nav-links px-4 cursor-pointer capitalize font-medium ${darkMode ? 'text-orange-200 hover:text-white' : 'text-orange-500 hover:text-black'} hover:scale-105 duration-200 link-underline`}>
          <Link href="/build">Build</Link>
        </li>
        <li className={`nav-links px-4 cursor-pointer capitalize font-medium ${darkMode ? 'text-orange-200 hover:text-white' : 'text-orange-500 hover:text-black'} hover:scale-105 duration-200 link-underline`}>
          <Link href="/connect">Connect</Link>
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize font-medium">
          {/* Dark Mode Toggle */}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className={`cursor-pointer pr-4 z-10 ${darkMode ? 'text-white' : 'text-black'} md:hidden`}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-orange-200'}`}>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(!nav)} href="/">
              Home
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(!nav)} href="/learn">
              Learn
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(!nav)} href="/build">
              Build
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(!nav)} href="/connect">
              Connect
            </Link>
          </li>
          <li className="nav-links px-4 cursor-pointer capitalize font-medium">
          {/* Dark Mode Toggle */}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </li>
        </ul>
      )}
    </nav>
  );
}