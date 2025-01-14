"use client";

import { useState } from 'react';

export function NewsletterSection() {

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
                                <a href="#" className="text-blue-500 hover:text-blue-600 
                                transition-colors duration-300">
                                    terms and conditions
                                </a>
                            </label>
                        </div>
                    </form>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 
                dark:from-blue-900/10 dark:to-purple-900/10 -z-10"></div>
            </section>

        </>
    );
}



