'use client'; // In HeroSection.tsx
import { NextPage } from 'next'
import { VCSection } from './Section/VCSection'
import { NewsletterSection } from './Section/NewsletterSection'
import Navbar from './Section/body/Navbar'
import Footer from './Section/body/Footer'
import { useState } from 'react'
import { OfficialChannels } from './Section/OfficialChannels';
import LatestUpdates from './Section/LatestUpdates';


interface Props { }

const HeroSection: NextPage<Props> = ({ }) => {
    const [darkMode, setDarkMode] = useState(false);

    return (

        <div className={darkMode ? 'dark' : 'bg-gradient-to-r from-orange-500 to-yellow-500'}>

            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            <main className="relative">
                {/* Hero Section */}
                <section className="pt-24 py-2 px-2 relative overflow-hidden h-190 ">

                    {/* Parallax Background */}
                    <div className="parallax-bg rounded-[40px] overflow-hidden shadow-2xl border border-white/10 
                    relative group">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover h-[700px] w-full scale-105 group-hover:scale-100 
                            transition-transform duration-700"
                        >
                            <source src="/Lines.mp4" type="video/mp4" />
                        </video>
                    
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/95 via-yellow-500/90 
                        to-orange-600/95 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-gray-900/95 
                        backdrop-blur-sm">
                            <div className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center 
                            px-4 space-y-8">
                                <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold 
                                leading-tight tracking-tight animate-fade-in">
                                    Build Smart Contracts 
                                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r 
                                    from-white to-orange-200 dark:from-white dark:to-gray-400">
                                        with Ease
                                    </span>
                                </h1>
                    
                                <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium max-w-3xl 
                                leading-relaxed">
                                    Kanari Network empowers developers to create secure,
                                    transparent, and efficient blockchain applications.
                                </p>
                    
                                <div className="flex flex-wrap justify-center gap-4 mt-8">
                                    <a href="https://docs.kanari.network/"
                                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 
                                        hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold 
                                        transition-all duration-300 hover:-translate-y-1 hover:shadow-xl 
                                        active:translate-y-0"
                                    >
                                        Start Building
                                    </a>
                                    <a href="#"
                                        className="bg-white/10 backdrop-blur-sm border border-white/20 text-white 
                                        px-8 py-4 rounded-full font-semibold transition-all duration-300 
                                        hover:-translate-y-1 hover:shadow-xl hover:bg-white/20 active:translate-y-0"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Features Section */}
                <section className="py-20 px-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"> {/* Added dark mode gradient */}
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="text-center space-y-6">
                            <h2 className="text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r 
                            from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 
                            dark:to-purple-200 bg-clip-text text-transparent group">
                                Kanari Network: 
                                <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                                    Empowering the Future of Finance
                                </span>
                                <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 
                                rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                            </h2>
                            
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Kanari Network is a decentralized blockchain platform designed to
                                revolutionize the way we interact with financial services. Our
                                cutting-edge technology empowers developers to build secure,
                                transparent, and efficient applications that benefit everyone.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Feature Card 1 */}
                            <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border border-gray-200/50 
                            dark:border-gray-700/50 rounded-xl p-8 hover:transform hover:scale-105 transition-all 
                            duration-300 group relative overflow-hidden">
                                <div className="relative z-10">
                                    {/* Icon Container */}
                                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 
                                    dark:to-purple-700 p-3 rounded-2xl shadow-lg mx-auto mb-6 w-fit transform 
                                    hover:rotate-6 transition-transform">
                                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" 
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-2M9 7a2 2 0 012-2h2a2 2 0 012 2m-6 8a2 2 0 002 2h2a2 2 0 002-2" />
                                        </svg>
                                    </div>
                            
                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 
                                    to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                        Decentralized Finance
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                                        Experience the power of DeFi with Kanari Network. Access a
                                        wide range of financial services without intermediaries,
                                        giving you full control over your assets.
                                    </p>
                                </div>
                            
                                {/* Background Elements */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 
                                dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl -z-10"></div>
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-400/20 
                                to-pink-400/20 dark:from-orange-600/20 dark:to-pink-600/20 blur-2xl rounded-full 
                                group-hover:scale-150 transition-transform duration-500"></div>
                            </div>

                            {/* Feature Card 2 - Repeat similar structure */}
                            <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border border-gray-200/50 
                            dark:border-gray-700/50 rounded-xl p-8 hover:transform hover:scale-105 transition-all 
                            duration-300 group relative overflow-hidden">
                                <div className="relative z-10">
                                    {/* Icon Container */}
                                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 
                                    dark:to-purple-700 p-3 rounded-2xl shadow-lg mx-auto mb-6 w-fit transform 
                                    hover:rotate-6 transition-transform">
                                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" 
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                            
                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 
                                    to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                        Smart Contracts
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                                        Build and deploy secure and automated smart contracts on Kanari
                                        Network. Our robust infrastructure ensures the integrity and
                                        reliability of your applications.
                                    </p>
                                </div>
                            
                                {/* Background Elements */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 
                                dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl -z-10"></div>
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-400/20 
                                to-pink-400/20 dark:from-orange-600/20 dark:to-pink-600/20 blur-2xl rounded-full 
                                group-hover:scale-150 transition-transform duration-500"></div>
                            </div>

                            {/* Feature Card 3 - Repeat similar structure */}
                            <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border border-gray-200/50 
                            dark:border-gray-700/50 rounded-xl p-8 hover:transform hover:scale-105 transition-all 
                            duration-300 group relative overflow-hidden">
                                <div className="relative z-10">
                                    {/* Icon Container */}
                                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 
                                    dark:to-purple-700 p-3 rounded-2xl shadow-lg mx-auto mb-6 w-fit transform 
                                    hover:rotate-6 transition-transform">
                                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" 
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                            d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                            d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                                        </svg>
                                    </div>
                            
                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 
                                    to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                        Community Driven
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                                        Join our vibrant community of developers, entrepreneurs, and
                                        enthusiasts. Collaborate, innovate, and shape the future of
                                        Kanari Network together.
                                    </p>
                                </div>
                            
                                {/* Background Elements */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 
                                dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl -z-10"></div>
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-400/20 
                                to-pink-400/20 dark:from-orange-600/20 dark:to-pink-600/20 blur-2xl rounded-full 
                                group-hover:scale-150 transition-transform duration-500"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Investors Section */}
                <section className="py-20 px-4 bg-gradient-to-r from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"> {/* Added dark mode gradient */}
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="text-center space-y-6">
                            <h2 className="text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r 
                            from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 
                            dark:to-purple-200 bg-clip-text text-transparent group">
                                Kanari Network: 
                                <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                                    Empowering Investors
                                </span>
                                <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 
                                rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                            </h2>
                            
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                Kanari Network provides unique opportunities for investors to be
                                part of the decentralized future.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Investor Card 1 */}
                            <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border border-gray-200/50 
                            dark:border-gray-700/50 rounded-xl p-8 hover:transform hover:scale-105 transition-all 
                            duration-300 group relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 
                                    dark:to-purple-700 p-3 rounded-2xl shadow-lg mx-auto mb-6 w-fit transform hover:rotate-6 
                                    transition-transform">
                                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" 
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                            
                                    <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 
                                    to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                        Early Adoption
                                    </h3>
                            
                                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                                        Be an early investor in a rapidly growing ecosystem. Kanari
                                        Network is at the forefront of blockchain innovation,
                                        offering substantial growth potential.
                                    </p>
                                </div>
                            
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 
                                dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl -z-10"></div>
                                
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-400/20 
                                to-pink-400/20 dark:from-orange-600/20 dark:to-pink-600/20 blur-2xl rounded-full 
                                group-hover:scale-150 transition-transform duration-500"></div>
                            </div>

                            {/* Investor Card 2 - Repeat similar structure */}
                             <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border border-gray-200/50 
                            dark:border-gray-700/50 rounded-xl p-8 hover:scale-105 hover:shadow-xl transition-all 
                            duration-300 group relative overflow-hidden">
                                <div className="relative z-10 flex flex-col items-start space-y-6">
                                    {/* Icon container */}
                                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 
                                    dark:to-purple-700 p-3 rounded-2xl shadow-lg transform group-hover:rotate-6 
                                    transition-transform">
                                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" 
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                            d="M15 9a2 2 0 10-4 0v12M9 9a2 2 0 10-4 0v12" />
                                        </svg>
                                    </div>
                            
                                    {/* Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 
                                        to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-200 bg-clip-text 
                                        text-transparent group-hover:scale-105 transition-transform">
                                            Tokenization
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            Explore new investment avenues with tokenized assets. Kanari
                                            Network facilitates fractional ownership and liquidity,
                                            opening doors to previously inaccessible markets.
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

                            {/* Investor Card 3 - Repeat similar structure */}
                            <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border border-gray-200/50 
                            dark:border-gray-700/50 rounded-xl p-8 hover:scale-105 hover:shadow-xl transition-all 
                            duration-300 group relative overflow-hidden">
                                <div className="relative z-10 flex flex-col items-start space-y-6">
                                    {/* Icon container */}
                                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 
                                    dark:to-purple-700 p-3 rounded-2xl shadow-lg transform group-hover:rotate-6 
                                    transition-transform">
                                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" 
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                            d="M12 8c-1.658 0-3 .895-3 2s1.342 2 3 2 3-.895 3-2-1.342-2-3-2zM3 
                                            12c0 4.411 3.589 8 8 8s8-3.589 8-8-3.589-8-8-8-8 3.589-8 8z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                                        </svg>
                                    </div>
                            
                                    {/* Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 
                                        to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-200 bg-clip-text 
                                        text-transparent group-hover:scale-105 transition-transform">
                                            Decentralized Governance
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            Participate in the governance of Kanari Network. As a token
                                            holder, you have a voice in shaping the future direction of
                                            the platform.
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
                        </div>
                    </div>
                </section>


                {/* VC Section */}
                <VCSection />


                {/* Latest Updates  Section */}
                <LatestUpdates />


                {/* Official Channels */}
                <OfficialChannels />

                {/* Newsletter Section */}
                <NewsletterSection />


            </main>
            <Footer darkMode={darkMode} setDarkMode={setDarkMode} />

        </div>
    )
}

export default HeroSection
