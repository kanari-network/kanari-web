'use client';
import React, { useState } from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import { InvestorCard } from '../Section/body/InvestorCard';


const MediaKit = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (

        <div className={darkMode ? 'dark' : 'bg-gradient-to-r from-gray-100 to-gray-200'}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="relative">


                {/* Features Section */}
                <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">

                    {/* Enhanced Cosmic Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Base gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-purple-900/30 to-black/50"></div>

                        {/* Star layers */}
                        <div className="stars-container">
                            <div className="parallax-stars stars-small"></div>
                            <div className="parallax-stars stars-medium"></div>
                            <div className="parallax-stars stars-large"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <section className="pt-24 py-2 px-2 "></section>

                        <section className="py-20 px-4"> {/* Added dark mode gradient */}
                            <div className="max-w-7xl mx-auto text-center">
                                <div className="text-center space-y-6">
                                    <h2 className="text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-200 bg-clip-text text-transparent group">
                                        Kanari Network:
                                        <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                                            Media Kit
                                        </span>
                                        <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                    </h2>

                                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                        The Kanari Media Kit is a collection of resources for journalists, content creators, and community members to use when writing about the Kanari Network. The kit includes logos, brand guidelines, and other assets that can be used to create content that is consistent with the Kanari brand.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                                </div>
                            </div>


                        </section>

                        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                </section>

            </main>
        </div>
    );
};

export default MediaKit;