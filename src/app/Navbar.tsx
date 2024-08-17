'use client'

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <nav className="backdrop-blur-3xl flex justify-between items-center top-0 left-0 w-full z-10 h-20 px-4 text-white fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <Link
            className="link-underline link-underline-black"
            href="/"
          >
            Kanari
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-orange-200 hover:scale-105 hover:text-white duration-200 link-underline">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-orange-200 hover:scale-105 hover:text-white duration-200 link-underline">
          <Link href="/learn">Learn</Link>
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-orange-200 hover:scale-105 hover:text-white duration-200 link-underline">
          <Link href="/build">Build</Link>
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-orange-200 hover:scale-105 hover:text-white duration-200 link-underline">
          <Link href="/connect">Connect</Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-orange-200 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-orange-500 to-yellow-500 text-orange-200">
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
        </ul>
      )}
    </nav>
  );
}