'use client';
import React, { useState } from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';

const Learn = () => {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className='bg-gradient-to-r from-orange-500 to-yellow-500'>


      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="py-10" />
      gsagas
      <section className="py-10" />
      <Footer />

    </div>
  );
};

export default Learn;