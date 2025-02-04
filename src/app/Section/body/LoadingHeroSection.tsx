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
        <div className="min-h-screen w-full bg-gradient-to-r from-gray-900 to-black relative overflow-hidden font-mono">
            {/* Cosmic Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-purple-900/30 to-black/50"></div>
                <div className="stars-container">
                    <div className="parallax-stars stars-small"></div>
                    <div className="parallax-stars stars-medium"></div>
                    <div className="parallax-stars stars-large"></div>
                </div>
            </div>

            {/* Terminal Window */}
            <div className="fixed top-4 left-0 w-full px-4 z-10">
                <div className="max-w-3xl mx-auto bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-blue-500/30">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="font-mono text-sm">
                        <span className="text-blue-400">$ </span>
                        <span className="text-purple-400">Initializing Kanari Network...</span>
                        <div className="h-1 bg-gray-800 mt-2 rounded">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 rounded"
                                 style={{ width: `${progress}%` }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen relative z-10">
                <div className="text-9xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    {Math.round(progress)}%
                </div>
                <div className="w-full max-w-lg space-y-2">
                    <div className="font-mono text-sm">
                        <span className="text-blue-400"> </span>
                        <span className="text-purple-400">
                            {`Initializing system components... ${progress < 30 ? '' : '[DONE]'}`}
                        </span>
                    </div>
                    {progress >= 30 && (
                        <div className="font-mono text-sm">
                            <span className="text-blue-400"> </span>
                            <span className="text-purple-400">
                                {`Loading Move VM components... ${progress < 60 ? '' : '[DONE]'}`}
                            </span>
                        </div>
                    )}
                    {progress >= 60 && (
                        <div className="font-mono text-sm">
                            <span className="text-blue-400"> </span>
                            <span className="text-purple-400">
                                {`Configuring blockchain environment... ${progress < 90 ? '' : '[DONE]'}`}
                            </span>
                        </div>
                    )}
                    {progress >= 90 && (
                        <div className="font-mono text-sm">
                            <span className="text-blue-400"> </span>
                            <span className="text-purple-400">Preparing Kanari Network interface...</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoadingHeroSection;