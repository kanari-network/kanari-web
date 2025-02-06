"use client";
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import './VCSection.css';

export function VCSection() {
    // Sample VC and Investor data (replace with your actual data)
    const vcs = [
        {
            name: "1",
            logo: "https://raw.githubusercontent.com/kanari-network/about/main/kari1.png",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "1",
            logo: "https://raw.githubusercontent.com/kanari-network/about/main/kari1.png",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "1",
            logo: "https://raw.githubusercontent.com/kanari-network/about/main/kari1.png",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "1",
            logo: "https://raw.githubusercontent.com/kanari-network/about/main/kari1.png",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "1",
            logo: "https://raw.githubusercontent.com/kanari-network/about/main/kari1.png",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "1",
            logo: "https://raw.githubusercontent.com/kanari-network/about/main/kari1.png",
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

    return (
        <>
            {/* VC Section */}
            <section className="py-20">
                <div className="w-full mx-auto">
                    <div className="text-center space-y-6">
                        <h2 className="text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-200 bg-clip-text text-transparent group">
                            Kanari Network:
                            <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                                Backed by Leading Investors
                            </span>
                            <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                        </h2>

                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Kanari Network is supported by a strong network of investors who believe in our vision.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Gradient Masks */}
                        <div className="absolute left-0 top-0 bottom-0"></div>
                        <div className="absolute right-0 top-0 bottom-0"></div>

                        <div className="relative overflow-hidden">
                            {/* Gradient Masks */}
                            <div className="absolute left-0 top-0 bottom-0 w-8"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-8"></div>

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
                                {vcs.concat(vcs).map((vc, index) => (
                                    <button
                                        key={`${index}-${vc.name}`}
                                        onClick={() => setSelectedVC(index % vcs.length)}
                                        className="flex-none w-[200px] h-[200px] rounded-full overflow-hidden shadow-lg 
                                                 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                                    >
                                        <div className="relative w-full h-full bg-gray-100 dark:bg-gray-800 rounded-full">
                                            {/* Image with fallback */}
                                            <Image
                                                src={vc.logo}
                                                alt={vc.name}
                                                width={100}
                                                height={100}
                                                className="w-full h-full object-cover rounded-full"
                                                onError={(e) => {
                                                    e.currentTarget.src = '/placeholder.png';
                                                }}
                                            />
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
                            <Image
                                src={vcs[selectedVC].logo}
                                alt={vcs[selectedVC].name}
                                width={128}
                                height={128}
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