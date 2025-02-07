'use client';
import React, { useState } from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import Image from 'next/image'


export default function DeveloperPortal() {
    const [darkMode, setDarkMode] = useState(false);

    return (

        <div className={`transition-colors duration-300 ${darkMode
            ? 'dark bg-gray-900 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900'
            : 'bg-gradient-to-r from-gray-100 to-gray-200'
            }`}>
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

                                            Developer Portal
                                        </span>
                                        <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                    </h2>

                                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                        Welcome to the Kanari Network Developer Portal. Here you will find all the resources you need to get started building on the Kanari Network.
                                    </p>
                                </div>


                                {/* Feature Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-4">
                                    {/* Quick Start Guide */}
                                    <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:transform hover:scale-105 transition-all">
                                        <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quick Start Guide</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Get up and running with Kanari Network in minutes with our comprehensive quick start guide.</p>
                                    </div>

                                    {/* API Documentation */}
                                    <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:transform hover:scale-105 transition-all">
                                        <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">API Documentation</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Explore our detailed API documentation with examples and use cases.</p>
                                    </div>

                                    {/* SDKs & Tools */}
                                    <div className="p-8 rounded-xl bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:transform hover:scale-105 transition-all shadow-lg">
                                        <div className="h-16 w-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-all shadow-lg">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">SDKs & Tools</h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">Access our developer tools and SDKs for multiple programming languages.</p>
                                    </div>
                                </div>

                                {/* Documentation Links */}
                                <div className="mt-20">
                                    <div className="max-w-4xl mx-auto">
                                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                                            Popular Resources
                                            <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {[
                                                {
                                                    title: 'Installation Guide',
                                                    description: 'Step-by-step guide to install and configure Kanari Network',
                                                    icon: (
                                                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                        </svg>
                                                    )
                                                },
                                                {
                                                    title: 'API Reference',
                                                    description: 'Complete API documentation with examples and endpoints',
                                                    icon: (
                                                        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    )
                                                },
                                                {
                                                    title: 'Best Practices',
                                                    description: 'Learn about recommended practices and optimization tips',
                                                    icon: (
                                                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    )
                                                },
                                            ].map((item, index) => (
                                                <div key={index} className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:bg-white/10 transition-all duration-300 hover:shadow-xl group">
                                                    <div className="flex items-center mb-4">
                                                        <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition-transform">
                                                            {item.icon}
                                                        </div>
                                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white ml-4">{item.title}</h4>
                                                    </div>
                                                    <p className="text-gray-600 dark:text-gray-300 text-lg">{item.description}</p>
                                                </div>
                                            ))}
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