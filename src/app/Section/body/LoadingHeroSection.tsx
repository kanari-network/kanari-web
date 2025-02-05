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
            {/* Enhanced Cosmic Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-purple-900/30 to-black/50"></div>
                <div className="stars-container">
                    <div className="parallax-stars stars-small animate-float-slow"></div>
                    <div className="parallax-stars stars-medium animate-float-delay"></div>
                    <div className="parallax-stars stars-large animate-float-slow"></div>
                </div>
            </div>

            {/* Centered Content Container */}
            <div className="relative z-10 container mx-auto h-screen flex flex-col items-center justify-center px-4">
                {/* Loading Circle */}
                <div className="relative mb-12">
                    <div className="w-48 h-48 rounded-full border-4 border-blue-500/30 animate-spin-slow"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            {Math.round(progress)}%
                        </div>
                    </div>
                </div>

                {/* Terminal Window */}
                <div className="w-full max-w-2xl bg-gray-900/80 backdrop-blur-sm rounded-lg border border-blue-500/30 overflow-hidden">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border-b border-blue-500/20">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        <span className="ml-2 text-gray-400 text-sm">kanari-network-init</span>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-4 space-y-3">
                        <div className="space-y-2">
                            <ProgressLine 
                                text="Initializing system components..."
                                isDone={progress >= 30}
                            />
                            {progress >= 30 && (
                                <ProgressLine 
                                    text="Loading Move VM components..."
                                    isDone={progress >= 60}
                                />
                            )}
                            {progress >= 60 && (
                                <ProgressLine 
                                    text="Configuring blockchain environment..."
                                    isDone={progress >= 90}
                                />
                            )}
                            {progress >= 90 && (
                                <ProgressLine 
                                    text="Preparing Kanari Network interface..."
                                    isDone={progress >= 100}
                                />
                            )}
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-1 bg-gray-800 rounded-full mt-4">
                            <div 
                                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ProgressLineProps {
    text: string;
    isDone: boolean;
}

const ProgressLine: React.FC<ProgressLineProps> = ({ text, isDone }) => (
    <div className="font-mono text-sm flex items-center space-x-2">
        <span className="text-blue-400">$</span>
        <span className="text-purple-400">{text}</span>
        {isDone && <span className="text-green-400">[DONE]</span>}
    </div>
);

export default LoadingHeroSection;