"use client";

import { useState } from 'react';

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

    return (
        <>
            {/* VC Section */}
            <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800 relative">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
                        Backed by Leading Venture Capitalists
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                        Kanari Network is supported by a strong network of investors who
                        believe in our vision.
                    </p>
                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
                            {vcs.map((vc, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedVC(index)}
                                    className="flex flex-col items-center transform transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105"
                                >
                                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 shadow-lg">
                                        <img
                                            src={vc.logo}
                                            alt={vc.name}
                                            className="object-cover w-full h-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition duration-300"></div>
                                    </div>
                                    <span className="text-gray-800 dark:text-white font-medium">
                                        {vc.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-100 dark:from-gray-800 to-transparent"></div>
            </section>

            {/* Modal/Popup for VC Details */}
            {selectedVC !== null && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-20 bg-black/50" 
                    onClick={() => setSelectedVC(null)}
                >
                    <div
                        className="bg-white dark:bg-gray-700 w-96 p-6 rounded-lg shadow-xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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
                                className="w-24 h-24 rounded-full mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
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



