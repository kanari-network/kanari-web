"use client";

import { useState } from 'react';

export function NewsletterSection() {

    return (
        <>
            <section className="px-4 py-20 bg-gradient-to-br from-orange-500 via-yellow-500 to-orange-400 
            dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
                <div className="max-w-4xl mx-auto rounded-2xl shadow-2xl p-8 sm:p-10 backdrop-blur-md 
                bg-white/20 dark:bg-gray-800/30 border border-white/30 dark:border-gray-700/30 
                hover:bg-white/30 dark:hover:bg-gray-800/40 transition-all duration-300">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-6 
                    drop-shadow-md">
                        Subscribe to Kanari Network Newsletter
                    </h2>
                    
                    <p className="text-lg sm:text-xl text-white/90 text-center mb-8">
                        Get the latest news, updates, and insights delivered straight to your inbox.
                    </p>
                    
                    <form className="flex flex-col items-center space-y-6 w-full max-w-2xl mx-auto">
                        <input
                            type="email"
                            id="Email"
                            className="w-full px-6 py-4 text-base bg-white/30 dark:bg-gray-900/30 
                            border border-white/50 dark:border-gray-600/50 rounded-xl focus:ring-4 
                            ring-white/30 dark:ring-gray-500/30 text-white placeholder:text-white/70 
                            backdrop-blur-sm transition-all duration-300"
                            placeholder="Enter your email"
                            required
                        />
                        
                        <button
                            type="submit"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white 
                            font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl 
                            transition-all duration-300 hover:-translate-y-1 border border-white/50"
                        >
                            Subscribe
                        </button>
                        
                        <div className="flex items-center justify-center mt-2 text-white space-x-2">
                            <input
                                id="link-checkbox"
                                type="checkbox"
                                required
                                className="w-5 h-5 rounded border-white/50 bg-white/20 
                                checked:bg-white/40 focus:ring-white/30 transition-all duration-300"
                            />
                            <label htmlFor="link-checkbox" className="text-sm">
                                I agree with the{' '}
                                <a href="#" className="underline hover:text-white/80 
                                transition-colors duration-300">
                                    terms and conditions
                                </a>
                            </label>
                        </div>
                    </form>
                </div>
                
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 
                to-yellow-500/20 dark:from-blue-900/10 dark:to-purple-900/10 -z-10"></div>
            </section>

        </>
    );
}



