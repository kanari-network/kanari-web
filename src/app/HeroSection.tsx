'use client'; // In HeroSection.tsx
import { NextPage } from 'next'
import { VCSection } from './Section/VCSection'
import { NewsletterSection } from './Section/NewsletterSection'
import Navbar from './Section/body/Navbar'
import Footer from './Section/body/Footer'
import { useEffect, useState } from 'react'
import { OfficialChannels } from './Section/OfficialChannels';
import LatestUpdates from './Section/LatestUpdates';
import { InvestorCard } from './Section/body/InvestorCard';
import LoadingHeroSection from './Section/body/LoadingHeroSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Highlight, themes } from 'prism-react-renderer'


interface Props { }

const HeroSection: NextPage<Props> = ({ }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 700,
            easing: 'ease-out-cubic',
        });
    }, []);

    useEffect(() => {
        // Add a fade transition
        const loadTimer = setTimeout(() => {
            setIsLoading(false);
            // Add additional delay for smooth transition
            setTimeout(() => {
                setIsTransitioning(false);
            }, 500);
        }, 2000);

        return () => clearTimeout(loadTimer);
    }, []);

    if (isLoading || isTransitioning) {
        return (
            <div className="transition-opacity duration-500 ease-in-out">
                <LoadingHeroSection />
            </div>
        );
    }

    const codeExample = `// Example of using Kanari Network
    module kanari::example {
        use std::vector;
        use kanari_framework::metadata::{Self, Metadata};
    
        fun store_file_metadata(
            content_hash: vector<u8>, 
            owner: address
        ): Metadata {
            let metadata = metadata::new();
            metadata::set_owner(&mut metadata, owner);
            metadata::set_hash(&mut metadata, content_hash); 
            metadata::store(metadata)
        }
    
        fun verify_file(
            metadata: &Metadata,
            content_hash: vector<u8>
        ): bool {
            metadata::verify_hash(metadata, content_hash)
        }
    
        #[test]
        fun test_metadata_flow() {
            let hash = vector::empty<u8>();
            let owner = @0x1;
            let metadata = store_file_metadata(hash, owner);
            assert!(verify_file(&metadata, hash), 0);
        }
    }`;

    return (

        <div className={`transition-colors duration-300 ${darkMode
                ? 'dark bg-gray-900 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900'
                : 'bg-gradient-to-r from-gray-100 to-gray-200'
            }`}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="relative bg-inherit">


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

                        <div className="opacity-0 translate-y-[100px] transition-all duration-1000 ease-out delay-200"
                            data-aos="fade-up"
                            data-aos-delay="200">
                            <section className="pt-24 py-2 px-2">
                                <div className="parallax-bg rounded-[40px] overflow-hidden shadow-2xl border border-gray-200/20 relative group">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="object-cover h-[700px] w-full scale-105 group-hover:scale-100 transition-transform duration-700"
                                    >
                                        <source src="/Lines.mp4" type="video/mp4" />
                                    </video>

                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/95 via-gray-700/90 to-gray-800/95 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-gray-900/95 backdrop-blur-sm">
                                        <div className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center px-4 space-y-8">
                                            <h1 className="text-white text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight animate-slide-up opacity-0 mx-auto">
                                                Secure Metadata
                                                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200 dark:from-white dark:to-gray-400 animate-slide-up opacity-0 [animation-delay:0.2s]">
                                                    on Move VM
                                                </span>
                                            </h1>

                                            <p className="text-white/90 text-center text-lg sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-0 [animation-delay:0.4s]">
                                                Build secure and transparent file metadata storage solutions powered by
                                                Move Virtual Machine for the Web3 ecosystem.
                                            </p>

                                            <div className="flex flex-wrap justify-center gap-4 mt-8">
                                                <a href="https://docs.kanari.network/"
                                                    className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 animate-slide-up"
                                                >
                                                    Explore Docs
                                                </a>
                                                <a href="#features"
                                                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white/20 active:translate-y-0 animate-slide-up"
                                                >
                                                    View Features
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Features Section */}

                        <section className="py-20 px-4">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center space-y-4 sm:space-y-6">
                                    <h2 className="text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-200 bg-clip-text text-transparent group">
                                        Kanari Network:
                                        <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                                            Use Cases and Features
                                        </span>
                                        <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                    </h2>

                                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                        Explore the capabilities of Kanari Network and Move VM for secure and transparent file metadata management in the Web3 ecosystem.
                                    </p>
                                </div>

                                <div className="mt-8 sm:mt-12">
                                    <div className="max-w-7xl mx-auto">
                                        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-start md:items-center">

                                            {/* Content Left */}
                                            <div
                                                className="w-full"
                                                data-aos="fade-right"
                                                data-aos-delay="100"
                                            >
                                                <div className="w-full space-y-4 sm:space-y-6 md:space-y-8 p-4 sm:p-6 md:p-8 bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl shadow-lg backdrop-blur-sm">
                                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                                        Secure Metadata Management
                                                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                                            Powered by Move VM
                                                        </span>
                                                    </h2>

                                                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                                        Store, track, and manage file metadata with enterprise-grade security.
                                                        Our Move VM implementation ensures tamper-proof records and verifiable
                                                        ownership across the Web3 ecosystem.
                                                    </p>

                                                    <div className="space-y-3 sm:space-y-4">
                                                        {[
                                                            'Cryptographic file validation',
                                                            'Immutable ownership records',
                                                            'Smart contract integration',
                                                            'Decentralized storage',
                                                        ].map((feature, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center gap-3 sm:gap-4 bg-white/50 dark:bg-gray-700/50 p-3 sm:p-4 rounded-lg hover:bg-white/70 dark:hover:bg-gray-700/70 transition-colors"
                                                            >
                                                                <svg
                                                                    className="h-5 w-5 flex-shrink-0 text-blue-500"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M5 13l4 4L19 7"
                                                                    />
                                                                </svg>
                                                                <span className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-200">
                                                                    {feature}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Right - Code Preview */}
                                            <div className="w-full relative mt-6 md:mt-0 transform hover:-rotate-1 transition-transform duration-300"
                                                data-aos="fade-left"
                                                data-aos-delay="300">
                                                <div className="w-full relative mt-6 md:mt-0 transform hover:-rotate-1 transition-transform duration-300">
                                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl blur opacity-30 group-hover:opacity-50"></div>
                                                    <pre className="relative p-3 sm:p-4 md:p-8 text-xs sm:text-sm bg-gray-900 text-gray-100 rounded-xl shadow-2xl overflow-x-auto">
                                                        <div className="flex items-center space-x-2 mb-4">
                                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                                                        </div>
                                                        <Highlight
                                                            code={codeExample}
                                                            language="rust" // adjust based on your code language
                                                        >
                                                            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                                                <code className={`font-mono text-xs sm:text-sm md:text-base ${className}`}>
                                                                    {tokens.map((line, i) => (
                                                                        <div key={i} {...getLineProps({ line })}>
                                                                            {line.map((token, key) => (
                                                                                <span key={key} {...getTokenProps({ token })} />
                                                                            ))}
                                                                        </div>
                                                                    ))}
                                                                </code>
                                                            )}
                                                        </Highlight>
                                                    </pre>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Features Section */}
                        <section className="py-20 px-4"> {/* Added dark mode gradient */}
                            <div className="max-w-7xl mx-auto text-center">
                                <div className="text-center space-y-6">
                                    {/* // Add will-change property for better animation performance */}
                                    <h2 className="text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-200 bg-clip-text text-transparent group will-change-transform">
                                        Kanari Network:
                                        <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                                            Secure File Metadata Platform
                                        </span>
                                        <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                    </h2>

                                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                        A decentralized platform leveraging Move VM to provide secure, transparent, and efficient file metadata management in the Web3 ecosystem.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

                                    <div data-aos="fade-right" data-aos-delay="100">
                                        {/* Feature Card 1 */}
                                        <InvestorCard
                                            icon={
                                                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    {/* Network nodes */}
                                                    <circle cx="12" cy="7" r="3" strokeWidth="2" />
                                                    <circle cx="7" cy="17" r="3" strokeWidth="2" />
                                                    <circle cx="17" cy="17" r="3" strokeWidth="2" />

                                                    {/* Connection lines */}
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M12 10L7 14M12 10L17 14" />
                                                </svg>
                                            }
                                            title="Smart Contract Security"
                                            description="Built on Move VM for robust file validation, hash verification, and secure access control mechanisms."
                                        />
                                    </div>


                                    <div data-aos="fade-up" data-aos-delay="200">
                                        {/* Feature Card 2 - Repeat similar structure */}
                                        <InvestorCard
                                            icon={
                                                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            }
                                            title="Metadata Management"
                                            description="Comprehensive file metadata tracking with ownership verification, version history, and immutable references."
                                        />
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="300">
                                        {/* Feature Card 3 - Repeat similar structure */}
                                        <InvestorCard
                                            icon={
                                                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                    <circle cx="9" cy="7" r="4" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                        d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                                                </svg>
                                            }
                                            title="Decentralized Infrastructure"
                                            description="Permissionless and trustless operation with transparent transaction trails and cryptographic proofs."
                                        />
                                    </div>

                                </div>
                            </div>
                        </section>

                        {/* Investors Section */}
                        <section className="py-20 px-4"> {/* Added dark mode gradient */}
                            <div className="max-w-7xl mx-auto text-center">
                                <div className="text-center space-y-6">
                                    <h2 className="text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r 
                            from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 
                            dark:to-purple-200 bg-clip-text text-transparent group">
                                        Kanari Network:
                                        <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                                            Web3 Metadata Solutions
                                        </span>
                                        <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 
                                rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                    </h2>

                                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                        Revolutionizing file metadata management with secure, transparent, and efficient blockchain solutions.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

                                    <div data-aos="fade-right" data-aos-delay="100">
                                        {/* Investor Card 1 */}
                                        <InvestorCard
                                            icon={
                                                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            }
                                            title="Secure File Tracking"
                                            description="Implement robust file validation and hash verification systems using Move VM's advanced security features."
                                        />
                                    </div>


                                    <div data-aos="fade-up" data-aos-delay="200">
                                        {/* Investor Card 2 - Repeat similar structure */}
                                        <InvestorCard
                                            icon={
                                                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                </svg>
                                            }
                                            title="Version Control"
                                            description="Track file history and maintain immutable records of metadata changes with transparent audit trails."
                                        />
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="300">
                                        {/* Investor Card 3 - Repeat similar structure */}
                                        <InvestorCard
                                            icon={
                                                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                        d="M12 8c-1.658 0-3 .895-3 2s1.342 2 3 2 3-.895 3-2-1.342-2-3-2zM3 
                                            12c0 4.411 3.589 8 8 8s8-3.589 8-8-3.589-8-8-8-8 3.589-8 8z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                                                </svg>
                                            }
                                            title="Access Control"
                                            description="Manage file permissions and ownership with granular control through smart contract integration."
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <VCSection /> */}
                        <LatestUpdates />
                        <OfficialChannels />


                        <div className="opacity-0 translate-x-[100px] transition-all duration-1000 ease-out delay-300"
                            data-aos="fade-left"
                            data-aos-delay="500">
                            <NewsletterSection />
                        </div>

                        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                </section>


            </main>


        </div>
    )
}

export default HeroSection
