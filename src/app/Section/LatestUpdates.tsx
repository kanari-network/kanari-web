import React, { useRef, useState, useEffect } from 'react';


function LatestUpdates() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

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
            return () => ref.removeEventListener('scroll', handleScroll);
        }
    }, []);


    const blogupdates = [
        {
            title: 'Ika\'s Launch on Sui: A New Era for Blockchain Interoperability and Digital Asset Security',
            image: '/jamesatomc.jpg',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'Ika\'s Launch on Sui: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2022'
        },
        {
            title: 'Ika\'s Launch on Sui: A New Era for Blockchain Interoperability and Digital Asset Security',
            image: '/jamesatomc.jpg',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'Ika\'s Launch on Sui: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2022'
        },
        {
            title: 'Ika\'s Launch on Sui: A New Era for Blockchain Interoperability and Digital Asset Security',
            image: '/jamesatomc.jpg',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'Ika\'s Launch on Sui: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2022'
        },
        {
            title: 'Ika\'s Launch on Sui: A New Era for Blockchain Interoperability and Digital Asset Security',
            image: '/jamesatomc.jpg',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'Ika\'s Launch on Sui: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2022'
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative">
            <div className="container mx-auto px-4">
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
                            <a key={index} href={blog.Url} target="_blank" rel="noopener noreferrer"
                                className="flex-none w-[300px] backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 
                                border border-gray-200/50 dark:border-gray-700/50 rounded-xl overflow-hidden 
                                hover:scale-105 transition-all duration-300 group"
                            >
                                <div className="aspect-w-16 aspect-h-9">
                                    <img src={blog.image} alt={blog.title}
                                        className="w-full h-48 object-cover transform group-hover:scale-105 
                                        transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 line-clamp-2 bg-gradient-to-r 
                                    from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text 
                                    text-transparent">{blog.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                        {blog.description}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{blog.data}</p>
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