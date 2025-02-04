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
        <div className="min-h-screen w-full bg-[#0D1117] relative overflow-hidden font-mono">
            {/* Matrix-like Background */}
            <div className="absolute inset-0">
                <div className="absolute w-full h-full opacity-10">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} 
                             className="absolute text-green-500 text-opacity-50 animate-matrix-fall"
                             style={{
                                 left: `${i * 10}%`,
                                 animationDelay: `${i * 0.3}s`
                             }}>
                            {[...Array(20)].map((_, j) => (
                                <div key={j}>
                                    {Math.random().toString(36).charAt(2)}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Terminal-like Progress Bar */}
            <div className="fixed top-4 left-0 w-full px-4 z-10">
                <div className="max-w-3xl mx-auto bg-[#1F2937] p-4 rounded-lg shadow-lg border border-green-500/30">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="font-mono text-sm text-green-500">
                        $ Loading system components...
                        <div className="h-1 bg-[#2D3748] mt-2 rounded">
                            <div className="h-full bg-green-500 transition-all duration-300 rounded"
                                 style={{ width: `${progress}%` }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen relative z-10">
                <div className="text-9xl font-bold font-mono text-green-500 mb-8 glitch-text">
                    {Math.round(progress)}%
                </div>
                <div className="w-full max-w-lg space-y-2">
                    <div className="font-mono text-green-500 text-sm">
                        {`> Initializing system components... ${progress < 30 ? '' : '[DONE]'}`}
                    </div>
                    <div className="font-mono text-green-500 text-sm">
                        {progress >= 30 && `> Loading dependencies... ${progress < 60 ? '' : '[DONE]'}`}
                    </div>
                    <div className="font-mono text-green-500 text-sm">
                        {progress >= 60 && `> Configuring environment... ${progress < 90 ? '' : '[DONE]'}`}
                    </div>
                    <div className="font-mono text-green-500 text-sm">
                        {progress >= 90 && '> System ready for initialization...'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingHeroSection;