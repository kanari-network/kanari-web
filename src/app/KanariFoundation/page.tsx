'use client';
import React, { useState } from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import { InvestorCard } from '../Section/body/InvestorCard';


const KanariFoundation = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (

        <div className={darkMode ? 'dark dark:from-gray-800 dark:to-gray-900' : 'bg-gradient-to-r from-gray-100 to-gray-200'}>
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
                                            Kanari Foundation
                                        </span>
                                        <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                    </h2>

                                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                        The Kanari Foundation is a non-profit organization that supports the development and growth of the Kanari Network ecosystem. Our mission is to foster innovation, education, and collaboration within the community.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Feature Card 1 */}
                                    <InvestorCard
                                        icon={
                                            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        }
                                        title="Education"
                                        description="Supporting educational initiatives and digital literacy programs"
                                    />

                                    {/* Feature Card 2 - Repeat similar structure */}
                                    <InvestorCard
                                        icon={
                                            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                        }
                                        title="Community"
                                        description="Building stronger communities through technology access"
                                    />

                                    {/* Feature Card 3 - Repeat similar structure */}
                                    <InvestorCard
                                        icon={
                                            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        }
                                        title="Innovation"
                                        description="Fostering technological innovation and digital transformation."
                                    />
                                </div>
                            </div>

                            {/* Add Statistics Banner */}
                            <div className="mt-20 max-w-7xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {/* 50+ */}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-300 mt-2">
                                            Global Partners
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {/* 100K+ */}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-300 mt-2">
                                            Community Members
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {/* $10M+ */}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-300 mt-2">
                                            In Grants Awarded
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {/* 25+ */}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-300 mt-2">
                                            Countries Reached
                                        </div>
                                    </div>
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

export default KanariFoundation;