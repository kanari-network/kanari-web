"use client";

import { useEffect, useRef, useState } from 'react';

export function VCSection() {
    // Sample VC and Investor data (replace with your actual data)
    const vcs = [
        {
            name: "jamesatomc",
            logo: "/jamesatomc.png",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "jamesatomc",
            logo: "/jamesatomc.png",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "jamesatomc",
            logo: "/jamesatomc.png",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "jamesatomc",
            logo: "/jamesatomc.png",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "jamesatomc",
            logo: "/jamesatomc.png",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "jamesatomc",
            logo: "/jamesatomc.png",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        // ... add more VCs with investment details
    ];

    const [selectedVC, setSelectedVC] = useState<number | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Auto scroll effect
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                if (scrollContainerRef.current) {
                    const isAtEnd = scrollContainerRef.current.scrollLeft + scrollContainerRef.current.offsetWidth >=
                        scrollContainerRef.current.scrollWidth;

                    if (isAtEnd) {
                        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        scrollContainerRef.current.scrollBy({ left: 1, behavior: 'smooth' });
                    }
                }
            }, 30); // Adjust speed here

            return () => clearInterval(interval);
        }
    }, [isPaused]);

    // Duplicate VCs array for infinite scroll effect
    const duplicatedVcs = [...vcs, ...vcs];

    return (
        <>
            {/* VC Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-gray-100 to-white 
            dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r 
                    from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 
                    dark:to-purple-200 bg-clip-text text-transparent">
                        Backed by Leading Investors
                    </h2>
                    
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 text-center 
                    max-w-3xl mx-auto leading-relaxed">
                        Kanari Network is supported by a strong network of investors who believe in our vision.
                    </p>

                    <div className="relative">
                        {/* Gradient Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10"></div>

                        <div className="relative overflow-hidden">
                            {/* Gradient Masks */}
                            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10"></div>

                            {/* Scrollable Container */}
                            <div
                                ref={scrollContainerRef}
                                className="flex overflow-x-auto scrollbar-hide gap-6 px-10 py-4"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                                style={{
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                    scrollBehavior: 'smooth'
                                }}
                            >
                                {duplicatedVcs.map((vc, index) => (
                                    <button
                                        key={`${index}-${vc.name}`}
                                        onClick={() => setSelectedVC(index % vcs.length)}
                                        className="flex-none w-[280px] h-[320px] rounded-xl overflow-hidden shadow-lg 
                                                 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                                    >
                                        <div className="relative w-full h-full bg-gray-100 dark:bg-gray-800">
                                            {/* Image with fallback */}
                                            <img
                                                src={vc.logo}
                                                alt={vc.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.src = '/placeholder.png';
                                                }}
                                            />
                                            
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                            
                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                                <h3 className="text-white font-bold text-xl mb-2">{vc.name}</h3>
                                                <p className="text-gray-200 text-sm truncate">
                                                    {vc.investmentDetails}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Modal/Popup for VC Details */}
            {selectedVC !== null && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
                    onClick={() => setSelectedVC(null)}
                >
                    <div
                        className="bg-white dark:bg-gray-800 w-11/12 md:w-2/3 lg:w-1/2 p-6 md:p-10 rounded-lg shadow-2xl relative transform transition-transform duration-300 ease-in-out"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedVC(null)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <div className="flex flex-col items-center">
                            <img
                                src={vcs[selectedVC].logo}
                                alt={vcs[selectedVC].name}
                                className="w-32 h-32 rounded-full mb-6"
                            />
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                {vcs[selectedVC].name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">
                                {vcs[selectedVC].investmentDetails}
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}