"use client";

import { useState } from 'react';
import './NewsletterSection.css';

export function NewsletterSection() {

    // Add state near the top of component
    const [showTerms, setShowTerms] = useState(false);

    return (
        <>
            <section className="py-20 px-4 ">
                <div className="max-w-4xl mx-auto rounded-2xl shadow-2xl p-8 sm:p-10 backdrop-blur-sm 
                bg-white/30 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/50 
                hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 bg-gradient-to-r 
                    from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 
                    dark:to-purple-200 bg-clip-text text-transparent">
                        Subscribe to Kanari Network Newsletter
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl text-center mb-8">
                        Get the latest news, updates, and insights delivered straight to your inbox.
                    </p>

                    <form className="flex flex-col items-center space-y-6 w-full max-w-2xl mx-auto">
                        <input
                            type="email"
                            id="Email"
                            className="w-full px-6 py-4 text-base bg-white/30 dark:bg-gray-800/30 
                            border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-4 
                            ring-blue-500/30 text-gray-900 dark:text-white 
                            placeholder:text-gray-500 dark:placeholder:text-gray-400 
                            backdrop-blur-sm transition-all duration-300"
                            placeholder="Enter your email"
                            required
                        />

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold 
                            py-3 px-8 rounded-xl shadow-lg hover:shadow-xl 
                            transition-all duration-300 hover:-translate-y-1"
                        >
                            Subscribe
                        </button>

                        <div className="flex items-center justify-center mt-2 space-x-2">
                            <input
                                id="link-checkbox"
                                type="checkbox"
                                required
                                className="w-5 h-5 rounded border-gray-200/50 dark:border-gray-700/50 
                                bg-white/30 dark:bg-gray-800/30 checked:bg-blue-500"
                            />
                            <label htmlFor="link-checkbox" className="text-sm text-gray-600 dark:text-gray-300">
                                I agree with the{' '}
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowTerms(true);
                                    }}
                                    className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                                >
                                    terms and conditions
                                </a>
                            </label>


                        </div>
                    </form>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 
                dark:from-blue-900/10 dark:to-purple-900/10 -z-10"></div>
            </section>

            {showTerms && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999]">
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl max-w-3xl w-full mx-4 shadow-xl relative">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Terms and Conditions</h2>
                            <button
                                onClick={() => setShowTerms(false)}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="prose dark:prose-invert max-h-[60vh] overflow-y-auto mb-6 text-gray-600 dark:text-gray-300 custom-scrollbar">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. Introduction</h3>
                            <p className="mb-6">
                                These Website Terms and Conditions contained herein on this webpage, shall govern your use of this website, including all pages within it. These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. Intellectual Property Rights</h3>
                            <p className="mb-6">
                                Other than content you own, which you may have opted to include on this Website, under these Terms, Kanari Network and/or its licensors own all rights to the intellectual property and material contained in this Website.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. Your Rights and Responsibilities</h3>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Respect the intellectual property rights of others</li>
                                <li>Maintain the security of your account</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Report any security vulnerabilities or violations</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4. Privacy & Security</h3>
                            <p className="mb-6">
                                We prioritize the protection of your personal information. For detailed information about our data practices, please refer to our Privacy Policy.
                            </p>
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setShowTerms(false)}
                                className="px-6 py-2.5 bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => setShowTerms(false)}
                                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                            >
                                Accept Terms
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );



}



