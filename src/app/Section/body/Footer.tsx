'use client'; // Add this line

import { useState } from 'react';
import Image from 'next/image';

interface FooterProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ darkMode, setDarkMode }) => {
  const [discordHover, setDiscordHover] = useState(false);
  const [blueskyHover, setBlueskyHover] = useState(false);
  const [githubHover, setGithubHover] = useState(false);

  return (
    <div className="pt-4 px-4 pb-4">
      <footer className={`backdrop-blur-sm ${darkMode
          ? 'bg-gray-900/90 text-gray-100 border border-gray-700/50'
          : 'bg-white/90 text-gray-800 border border-gray-200/50'
        } rounded-2xl shadow-xl p-8 sm:p-10 transition-all duration-300`}>

        <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
          {/* Logo Section */}
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0 group">
              <a href="#" className="flex items-center">
                <Image
                  src="/kariicon1.png"
                  className="h-10 w-10 mr-3 transform group-hover:rotate-6 transition-transform"
                  alt="KanariLogo"
                  width={40}
                  height={40}
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-current to-current/70 
                    bg-clip-text hover:text-transparent transition-all duration-300">
                  Kanari Network
                </span>
              </a>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-12 sm:gap-16 sm:grid-cols-3">

              {/* Resources */}
              <div className="space-y-6">
                <h2 className="text-sm font-bold uppercase tracking-wider">
                  Resources
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="inline-block hover:translate-x-1 transition-transform hover:underline decoration-2 underline-offset-4">
                      Developer portal
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://docs.kanari.network/" className="inline-block hover:translate-x-1 transition-transform hover:underline decoration-2 underline-offset-4">
                      Docs
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://karimove.kanari.network/" className="inline-block hover:translate-x-1 transition-transform hover:underline decoration-2 underline-offset-4">
                      Kari Move
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://whitepaper.kanari.network/" className="inline-block hover:translate-x-1 transition-transform hover:underline decoration-2 underline-offset-4">
                      Whitepaper
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://kanarinet.slack.com/" className="inline-block hover:translate-x-1 transition-transform hover:underline decoration-2 underline-offset-4">
                      Developer forum
                    </a>
                  </li>
                </ul>
              </div>

              {/* Solutions */}
              <div className="space-y-6">
                <h2 className="text-sm font-bold uppercase tracking-wider">
                  Solutions
                </h2>
                <ul className="space-y-4">
                  <li className="mb-4">
                    <a href="https://github.com/jamesatomc/walletkari" className="inline-block hover:translate-x-1 transition-transform hover:underline decoration-2 underline-offset-4">
                      Kanari Pay soon
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="inline-block hover:translate-x-1 transition-transform hover:underline decoration-2 underline-offset-4">
                      AI soon
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://github.com/kanari-network/kanari-network" className="inline-block hover:translate-x-1 transition-transform hover:underline decoration-2 underline-offset-4">
                      Blockchain
                    </a>
                  </li>
                </ul>
              </div>

              {/* About */}
              <div className="space-y-6">
                <h2 className="text-sm font-bold uppercase tracking-wider">
                  About
                </h2>
                <ul className="space-y-4">
                  <li className="mb-4">
                    <a href="/kanarifoundation" className="inline-block hover:translate-x-1 transition-transform hover:underline decoration-2 underline-offset-4">
                      Kanari Foundation
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://drive.google.com/drive/folders/1cWm3pSEKFew0zhHU6OzTNzwSfnS5n4MR" className="inline-block hover:translate-x-1 transition-transform hover:underline decoration-2 underline-offset-4">
                      Media kit
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="inline-block hover:translate-x-1 transition-transform hover:underline decoration-2 underline-offset-4">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="https://blog.kanari.network/" className="inline-block hover:translate-x-1 transition-transform hover:underline decoration-2 underline-offset-4">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/privacypolicy" className="inline-block hover:translate-x-1 transition-transform hover:underline decoration-2 underline-offset-4">
                      PrivacyPolicy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className={`my-6 ${darkMode ? 'border-gray-700' : 'border-gray-200'} sm:mx-auto lg:my-8`} />

          {/* Copyright and Social */}
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className={`text-sm sm:text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024{' '}
              <a href="#" className="hover:underline">
                Kanari Network™
              </a>
              . community.
            </span>

            <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-6">

              {/* Bluesky */}
              <a
                href="https://bsky.app/profile/kanari.network"
                className="transform transition duration-300 ease-in-out"
                onMouseEnter={() => setBlueskyHover(true)}
                onMouseLeave={() => setBlueskyHover(false)}
              >
                <img
                  src="/Bluesky_Logo.svg"
                  alt="Bluesky Logo"
                  className={`w-5 h-5 ${blueskyHover ? 'transform scale-125' : ''}`}
                />
                <span className="sr-only">Bluesky profile</span>
              </a>

              {/* Discord */}
              <a
                href="https://discord.gg/QU6fTacXab"
                className="transform transition duration-300 ease-in-out"
                onMouseEnter={() => setDiscordHover(true)}
                onMouseLeave={() => setDiscordHover(false)}
              >
                <svg
                  className={`w-5 h-5 ${discordHover ? 'transform scale-125' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  {/* Discord icon path */}
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>

              {/* Github */}
              <a
                href="https://github.com/kanari-network"
                className="transform transition duration-300 ease-in-out"
                onMouseEnter={() => setGithubHover(true)}
                onMouseLeave={() => setGithubHover(false)}
              >
                <svg
                  className={`w-5 h-5 ${githubHover ? 'transform scale-125' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {/* Github icon path */}
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
