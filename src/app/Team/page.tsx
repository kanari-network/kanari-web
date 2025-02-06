'use client';
import React, { useState } from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import Image from 'next/image'

interface TeamMember {
    name: string;
    position: string;
    image: string;
    bio: string;
    social?: {
        linkedin?: string;
        twitter?: string;
    };
}

const Team = () => {
    const [darkMode, setDarkMode] = useState(false);

    const teamMembers: TeamMember[] = [
        {
            name: "james atomc",
            position: "Co-Founder",
            image: "/jamesatomc.png",
            bio: "James is a blockchain enthusiast and a seasoned software developer. He has a wealth of experience in building decentralized applications and is passionate about the potential of blockchain technology to revolutionize the financial industry.",
        },
    ];

    return (

        <div className={`transition-colors duration-300 ${darkMode
            ? 'dark bg-gray-900 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900'
            : 'bg-gradient-to-r from-gray-100 to-gray-200'
            }`}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="relative">


                {/* Features Section */}
                <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">

                    {/* Enhanced Cosmic Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Base gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-purple-900/30 to-black/50"></div>

                        {/* Star layers */}
                        <div className="stars-container">
                            <div className="parallax-stars stars-small"></div>
                            <div className="parallax-stars stars-medium"></div>
                            <div className="parallax-stars stars-large"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <section className="pt-24 py-2 px-2 "></section>

                        <section className="py-20 px-4"> {/* Added dark mode gradient */}

                            <div className="max-w-7xl mx-auto text-center">
                                <div className="text-center space-y-6">
                                    <h2 className="text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-200 bg-clip-text text-transparent group">
                                        Kanari Network:
                                        <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                                            Our Team
                                        </span>
                                        <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                    </h2>

                                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                        Our team is made up of a diverse group of individuals with a wide range of skills and experience. We are united by our passion for blockchain technology and our belief in the transformative power of decentralized finance.
                                    </p>
                                </div>

                                {/* Team Members Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                                    {teamMembers.map((member, index) => (
                                        <div key={index} className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border border-gray-200/50 
                                          dark:border-gray-700/50 rounded-xl p-8 hover:scale-105 hover:shadow-xl transition-all 
                                            duration-300 group relative overflow-hidden">
                                            <div className="relative z-10 flex flex-col items-start space-y-6">
                                                {/* Image container */}
                                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg mx-auto mb-6 
                                                    transform hover:rotate-6 transition-transform">
                                                    <Image
                                                        src={member.image}
                                                        alt={member.name}
                                                        fill
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                {/* Content */}
                                                <div className="space-y-4 w-full">
                                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 
                                                        to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-200 
                                                        bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                                                        {member.name}
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                                                        {member.position}
                                                    </p>
                                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                        {member.bio}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Background decoration */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 
                                                dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl -z-10"></div>
                                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-400/20 
                                                to-pink-400/20 dark:from-orange-600/20 dark:to-pink-600/20 blur-2xl rounded-full 
                                                group-hover:scale-150 group-hover:opacity-30 transition-all duration-500"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                </section>

            </main>
        </div>
    );
};

export default Team;