'use client';
import React, { useState } from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import Image from 'next/image';

const PrivacyPolicy = () => {
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


                        {/* privacy policy Section */}
                        <section className="px-4">
                            <div className="max-w-7xl mx-auto text-center">
                                <div className="text-center space-y-6">
                                    <h2 className="text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r 
                                        from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 
                                        dark:to-purple-200 bg-clip-text text-transparent group">
                                        Kanari Network:
                                        <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                                            Privacy Policy
                                        </span>
                                        <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 
                                            rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                    </h2>
                                </div>
                                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                    Your privacy is important to us. It is Kanari Network&apos;s policy to respect your privacy regarding any information we may collect from you across our website, <a href="#" className="text-blue-600 dark:text-blue-400">https://kanari.network</a>, and other sites we own and operate.
                                </p>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">Last updated: March 14, 2024</p>
                            </div>
                        </section>

                        {/* Policy Content */}
                        <section className="px-4 md:px-6 lg:px-8">
                            <div className="mt-16 max-w-4xl mx-auto space-y-12">

                                {/* Security Measures Section */}
                                <div className="p-8 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                                    <h3 className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                        <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        Security Measures
                                    </h3>
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Data Protection</h4>
                                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    Advanced encryption protocols (AES-256) for all stored data and communications
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    Regular automated backup systems with geographical redundancy
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Infrastructure Security</h4>
                                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    24/7 infrastructure monitoring and intrusion detection systems
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    Regular penetration testing and vulnerability assessments
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Compliance & Auditing</h4>
                                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    Compliance with international security standards (ISO 27001, SOC 2)
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    Regular third-party security audits and certifications
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Data Sharing Section */}
                                <div className="p-8 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                                    <h3 className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                        <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                        Data Sharing
                                    </h3>
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Service Providers</h4>
                                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    Carefully selected third-party service providers who assist in operating our services
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    All service providers are bound by strict confidentiality agreements
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Legal Requirements</h4>
                                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    Data may be shared when required by law or government authorities
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    We will notify users of any legal requests unless prohibited by law
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Data Protection</h4>
                                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    Your personal information is never sold to third parties for marketing purposes
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    International data transfers comply with applicable data protection laws
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* User Rights Section */}
                                <div className="p-8 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                                    <h3 className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                        <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        Your Rights
                                    </h3>
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Account Rights</h4>
                                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    Right to access and manage your account information
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    Right to request data export in a machine-readable format
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Privacy Controls</h4>
                                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    Right to control your privacy settings and preferences
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    Right to opt-out of data collection and processing
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Legal Rights</h4>
                                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    Right to file complaints with regulatory authorities
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </span>
                                                    Right to request deletion of personal information
                                                </li>
                                            </ul>
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

export default PrivacyPolicy;