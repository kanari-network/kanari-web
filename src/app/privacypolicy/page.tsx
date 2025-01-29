'use client';
import React, { useState } from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';

const PrivacyPolicy = () => {
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


                        {/* Privacy Policy Content */}
                        <div className="pt-24 py-2 px-2 relative z-10 max-w-4xl mx-auto">
                            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>

                            <div className="space-y-8 text-gray-800 dark:text-gray-200">
                                <section>
                                    <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                                    <p className="mb-4">
                                        Welcome to Kanari's Privacy Policy. This document explains how we collect, use, and protect your personal information.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Personal identification information</li>
                                        <li>Usage data and analytics</li>
                                        <li>Communication preferences</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
                                    <p className="mb-4">
                                        We use your data to improve our services, personalize your experience, and maintain the security of our platform.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold mb-4">Security Measures</h2>
                                    <p className="mb-4">
                                        We implement industry-standard security measures to protect your personal information from unauthorized access or disclosure.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                                    <p className="mb-4">
                                        If you have any questions about our privacy policy, please contact us at privacy@kanari.com
                                    </p>
                                </section>
                            </div>

                            <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
                                Last updated: {new Date().toLocaleDateString()}
                            </div>
                        </div>

                        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PrivacyPolicy;