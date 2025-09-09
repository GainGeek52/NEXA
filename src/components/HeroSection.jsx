import React, { useState } from 'react';
import Chatbot from './chatbot';

const HeroSection = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');

  const handleTryNEXA = () => {
    if (websiteUrl.trim()) {
      console.log('Trying NEXA on:', websiteUrl);
      // Add your Noupe integration logic here
      // Add your NEXA integration logic here
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleTryNEXA();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2] p-8 font-sans">
      <div className="grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        
        {/* Left Content */}
        <div className="text-white">
          <p className="mb-4 text-xl font-semibold text-white/90">
            <strong className="text-2xl text-white">Got a Question? AskIt.</strong> 
          </p>
          
          <h1 className="mb-6 text-5xl font-extrabold leading-tight lg:text-6xl">
            AI Chatbot for your site
          </h1>
          
          <p className="mb-10 text-xl leading-relaxed text-white/90">
            NEXA AI chatbot instantly learns from your website and uses that knowledge to answer visitor questions — automatically.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="relative w-full">
              {/* Brutalist Input with peer for label interaction */}
              <input
                placeholder="www.yourwebsite.com"
                className="peer brutalist-input w-full rounded-none border-4 border-black bg-white p-4 text-lg font-bold text-black shadow-brutalist transition-all duration-300 placeholder:text-gray-500 focus:outline-none focus:placeholder:text-transparent"
                type="text"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <label
                className="absolute -left-1 -top-8 z-10 -rotate-1 bg-black px-2.5 py-1.5 text-sm font-bold text-white transition-all duration-300 peer-focus:rotate-0 peer-focus:scale-105 peer-focus:bg-[#4a90e2]"
              >
                YOUR WEBSITE
              </label>
            </div>
            
            <button
              onClick={handleTryNEXA}
              className="w-full border-4 border-black bg-[#4f46e5] p-5 font-mono text-lg font-semibold text-white shadow-brutalist transition-colors duration-200 hover:bg-[#4338ca]"
            >
              Try NEXA on your website
            </button>
          </div>
          
          <p className="mt-6 text-center text-base text-white/80">
            It's free. No credit card required.
          </p>
        </div>
        
        {/* Right Section - Chatbot Iframe */}
        <div className="flex items-center justify-center">
          <div className="h-[550px] w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
            <div className="h-full w-full overflow-hidden rounded-xl bg-white shadow-lg">
              <Chatbot />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;