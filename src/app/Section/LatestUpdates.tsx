import React, { useRef, useState, useEffect, useCallback } from 'react';
import './LatestUpdates.css';
import Image from 'next/image'

function LatestUpdates() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const handleScroll = useCallback(() => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener('scroll', handleScroll);
            handleScroll(); // ตรวจสอบการเลื่อนเมื่อโหลดหน้าเว็บ
            return () => ref.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    const blogupdates = [
        {
            title: '#01',
            image: 'https://raw.githubusercontent.com/kanari-network/about/main/kari1.png',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024'
        },
    ];

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 via-blue-800 
                to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-200 bg-clip-text text-transparent">
                    Latest Updates
                </h2>
                <div className="relative">
                    {showLeftButton && (
                        <button onClick={() => scroll('left')}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 
                            p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 
                            backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                        >
                            <svg className="h-6 w-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" 
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}
                    {showRightButton && (
                        <button onClick={() => scroll('right')}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 
                            p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 
                            backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                        >
                            <svg className="h-6 w-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" 
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                    <div ref={scrollRef}
                        className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide scroll-smooth"
                    >
                        {blogupdates.map((blog, index) => (
                            <a key={index} 
                               href={blog.Url} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="flex-none w-[300px] backdrop-blur-sm 
                                          bg-gradient-to-br from-white/40 to-white/10 
                                          dark:from-gray-800/40 dark:to-gray-800/10 
                                          border border-gray-200/50 dark:border-gray-700/50
                                          rounded-xl overflow-hidden 
                                          hover:scale-105 hover:shadow-xl
                                          transition-all duration-300 group"
                            >
                                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-600 to-purple-600 relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                    <Image 
                                        src={blog.image} 
                                        alt={blog.title}
                                        width={800}
                                        height={192} 
                                        className="w-full h-48 object-cover transform 
                                                   group-hover:scale-110 group-hover:rotate-1
                                                   transition-transform duration-700 ease-out
                                                   opacity-90 hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                                                   group-hover:opacity-0 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 
                                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <h3 className="text-xl font-bold mb-2 line-clamp-2 
                                                  bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 
                                                  dark:from-white dark:via-blue-300 dark:to-purple-200 
                                                  bg-clip-text text-transparent 
                                                  group-hover:scale-105 transition-transform duration-300">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 
                                                 group-hover:text-gray-800 dark:group-hover:text-gray-200 
                                                 transition-colors duration-300">
                                        {blog.description}
                                    </p>
                                    <p className="text-sm bg-gradient-to-r from-blue-500 to-purple-500 
                                                 bg-clip-text text-transparent font-medium">
                                        {blog.data}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LatestUpdates;