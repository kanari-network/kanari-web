import React, { useState, useEffect } from 'react';
import "./LoadingHeroSection.css";
const LoadingHeroSection = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                const increment = Math.max(1, (100 - prevProgress) / 10);
                return Math.min(prevProgress + increment, 100);
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-gray-100 to-gray-200 
        dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full 
                blur-3xl -top-20 -left-20 animate-float-slow"></div>
                <div className="absolute w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full 
                blur-3xl -bottom-20 -right-20 animate-float-delay"></div>
                <div className="absolute w-72 h-72 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full 
                blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            </div>

            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-2 bg-gray-200/50 dark:bg-gray-700/50 z-10">
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 
                transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }} />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-20 flex flex-col items-center 
            justify-center min-h-screen relative z-10">
                <div className="text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 
                bg-clip-text text-transparent mb-8 animate-pulse">
                    {Math.round(progress)}%
                </div>
                <div className="w-full max-w-md h-4 bg-gray-200/50 dark:bg-gray-700/50 
                rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 
                    transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }} />
                </div>
            </div>
        </div>
    );
};

export default LoadingHeroSection;