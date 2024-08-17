
import { NextPage } from 'next'
import Navbar1 from './Navbar'
import Footer from './Footer'

interface Props { }


const HeroSection: NextPage<Props> = ({ }) => {

    return <div className='bg-gradient-to-r from-orange-500 to-yellow-500'>


        <Navbar1 />
        <section className="py-10">

        </section>

        <main className="relative">
            {/* Hero Section */}
            <section className="relative">
                <video
                    autoPlay
                    loop
                    muted
                    className="object-cover h-[500px] w-full"
                >
                    <source
                        src="https://tecdn.b-cdn.net/img/video/Lines.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
                    <div className="max-w-4xl text-center space-y-6">
                        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                            Build Smart Contracts with Ease
                        </h1>
                        <p className="text-white text-lg sm:text-xl md:text-2xl font-medium">
                            Kanari Network empowers developers to create secure,
                            transparent, and efficient blockchain applications.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="#"
                                className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Start Building
                            </a>
                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-gray-100 to-gray-200">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">
                        Kanari Network: Empowering the Future of Finance
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Kanari Network is a decentralized blockchain platform designed to
                        revolutionize the way we interact with financial services. Our
                        cutting-edge technology empowers developers to build secure,
                        transparent, and efficient applications that benefit everyone.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4 mx-auto">
                                {/* Icon can be added here */}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Decentralized Finance
                            </h3>
                            <p className="text-gray-600">
                                Experience the power of DeFi with Kanari Network. Access a
                                wide range of financial services without intermediaries,
                                giving you full control over your assets.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4 mx-auto">
                                {/* Icon can be added here */}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Smart Contracts
                            </h3>
                            <p className="text-gray-600">
                                Build and deploy secure and automated smart contracts on Kanari
                                Network. Our robust infrastructure ensures the integrity and
                                reliability of your applications.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4 mx-auto">
                                {/* Icon can be added here */}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Community Driven
                            </h3>
                            <p className="text-gray-600">
                                Join our vibrant community of developers, entrepreneurs, and
                                enthusiasts. Collaborate, innovate, and shape the future of
                                Kanari Network together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Investors Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-white to-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">
                        Kanari Network: Empowering Investors
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Kanari Network provides unique opportunities for investors to be
                        part of the decentralized future.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 rounded-lg shadow-lg p-8 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4 mx-auto">
                                {/* Icon can be added here */}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Early Adoption
                            </h3>
                            <p className="text-gray-600">
                                Be an early investor in a rapidly growing ecosystem. Kanari
                                Network is at the forefront of blockchain innovation,
                                offering substantial growth potential.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-lg shadow-lg p-8 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4 mx-auto">
                                {/* Icon can be added here */}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Tokenization
                            </h3>
                            <p className="text-gray-600">
                                Explore new investment avenues with tokenized assets. Kanari
                                Network facilitates fractional ownership and liquidity,
                                opening doors to previously inaccessible markets.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-lg shadow-lg p-8 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4 mx-auto">
                                {/* Icon can be added here */}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Decentralized Governance
                            </h3>
                            <p className="text-gray-600">
                                Participate in the governance of Kanari Network. As a token
                                holder, you have a voice in shaping the future direction of
                                the platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="px-4 py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
                <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-6 sm:p-8 bg-white/10 backdrop-blur-md">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
                        Subscribe to Kanari Network Newsletter
                    </h2>
                    <p className="text-base sm:text-lg text-white text-center mb-6">
                        Get the latest news, updates, and insights delivered straight to your
                        inbox.
                    </p>
                    <form className="flex flex-col items-center space-y-4 w-full">
                        <input
                            type="email"
                            id="Email"
                            className="w-full px-4 py-2 sm:py-3 text-sm text-gray-900 bg-white/20 border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-blue-50"
                            placeholder="Enter your email"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Subscribe
                        </button>
                    </form>
                    <div className="flex items-center justify-center mt-4 text-white">
                        <input
                            id="link-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-500 border-gray-400 rounded focus:ring-blue-500"
                        />
                        <label
                            htmlFor="link-checkbox"
                            className="ml-2 text-xs sm:text-sm"
                        >
                            I agree with the
                            <a
                                href="#"
                                className="text-blue-300 hover:underline"
                            >
                            terms and conditions
                            </a>
                            .
                        </label>
                    </div>
                </div>
            </section>

        </main>

        <Footer />

    </div>
}

export default HeroSection