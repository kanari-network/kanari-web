import React, { useState, useEffect } from 'react';

const LoadingHeroSection = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                // Slower progress as it gets closer to 100%
                const increment = Math.max(1, (100 - prevProgress) / 10);
                return Math.min(prevProgress + increment, 100);
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-gray-100 to-gray-200 
    dark:from-gray-800 dark:to-gray-900">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 dark:bg-gray-700">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
                <div className="absolute right-4 top-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                    {Math.round(progress)}%
                </div>
            </div>

            <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
                {/* Large Percentage Display */}
                <div className="text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 
      bg-clip-text text-transparent mb-8">
                    {Math.round(progress)}%
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-md h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Loading Text */}
                <div className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                    Loading Kanari Network...
                </div>

                {/* Animated Logo/Spinner */}
                <div className="mt-8 animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"/>
            </div>
        </div>
    );
};

export default LoadingHeroSection;