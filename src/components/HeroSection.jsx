import React, { useState } from 'react';
import Chatbot from './Chatbot';

const HeroSection = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [currentPhase, setCurrentPhase] = useState('input'); // 'input', 'loading', 'learning', 'chatbot', 'embedded-details'
  const [selectedOption, setSelectedOption] = useState('');
  const [learningProgress, setLearningProgress] = useState(0);

  const handleTryNexa = () => {
    if (websiteUrl.trim()) {
      console.log('Trying Nexa on:', websiteUrl);
      setCurrentPhase('loading');
      
      // Initial loading phase
      setTimeout(() => {
        setCurrentPhase('learning');
        // Simulate learning progress
        const progressInterval = setInterval(() => {
          setLearningProgress(prev => {
            if (prev >= 100) {
              clearInterval(progressInterval);
              setTimeout(() => {
                setCurrentPhase('chatbot');
              }, 500);
              return 100;
            }
            return prev + 10;
          });
        }, 200);
      }, 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleTryNexa();
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log('Selected option:', option);
    
    if (option === 'embedded-chatbot') {
      setCurrentPhase('embedded-details');
    } else if (option === 'cashflow-management') {
      // Handle cashflow management option - you can add logic here later
      console.log('Cashflow management selected');
    }
  };

  const resetToInput = () => {
    setCurrentPhase('input');
    setWebsiteUrl('');
    setSelectedOption('');
    setLearningProgress(0);
  };

  // Render different content based on current phase
  const renderContent = () => {
    switch (currentPhase) {
      case 'input':
        return (
          <>
            {/* Left Content */}
            <div className="text-white">
              <p className="mb-4 text-xl font-semibold text-white/90">
                <strong className="text-2xl text-white">Got a Question? AskIt.</strong> 
              </p>
              
              <h1 className="mb-6 text-5xl font-extrabold leading-tight lg:text-6xl">
                AI Chatbot for your site
              </h1>
              
              <p className="mb-10 text-xl leading-relaxed text-white/90">
                AskIt chatbot instantly learns from your website and uses that knowledge to answer visitor questions — automatically.
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
                  onClick={handleTryNexa}
                  className="w-full border-4 border-black bg-[#4f46e5] p-5 font-mono text-lg font-semibold text-white shadow-brutalist transition-colors duration-200 hover:bg-[#4338ca]"
                >
                  Try Nexa on your website
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
          </>
        );

      case 'loading':
        return (
          <div className="col-span-2 flex flex-col items-center justify-center min-h-[400px] text-center bg-white">
            {/* Purple chatbot icon */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-purple rounded-lg flex items-center justify-center text-white text-2xl">
                😊
              </div>
            </div>
            <h2 className="text-2xl font-bold text-black">
              Nexa is loading...
            </h2>
          </div>
        );

      case 'learning':
        return (
          <div className="col-span-2 flex flex-col items-center justify-center min-h-[400px] text-center bg-white">
            {/* Purple chatbot icon */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-purple rounded-lg flex items-center justify-center text-white text-2xl">
                😊
              </div>
            </div>
            {/* Progress indicator */}
            <div className="mb-4">
              <div className="text-lg font-bold text-black">{learningProgress}%</div>
            </div>
            <h2 className="text-xl font-bold text-black mb-4">
              Nexa is learning from <span className="underline">{websiteUrl}</span>...
            </h2>
          </div>
        );

      case 'chatbot':
        return (
          <div className="col-span-2 flex items-center justify-center min-h-[600px] bg-white">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-blue-500 text-lg">👋</span>
                  </div>
                  <div>
                    <div className="font-semibold">AskIt</div>
                    <div className="text-sm text-blue-100">Online</div>
                  </div>
                </div>
                <button 
                  onClick={resetToInput}
                  className="text-white hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
              
              {/* Chat content */}
              <div className="p-4 h-80 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-gray-800 text-sm">
                      Hi there! 👋 I'm AskIt. I can provide you with information on a wide range of topics. How can I assist you today?
                    </p>
                  </div>
                </div>
                
                {/* Input area */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-2">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="flex-1 outline-none text-sm"
                      disabled
                    />
                    <button className="bg-blue-500 text-white p-2 rounded-lg">
                      <span className="text-sm">→</span>
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 text-center">
                    By chatting, you agree to our <span className="text-blue-500">Terms of Use</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'embedded-details':
        return (
          <div className="col-span-2 flex items-center justify-center min-h-[600px] bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] p-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 max-w-md w-full text-center shadow-2xl">
              {/* Robot Icon */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  {/* Robot head */}
                  <div className="w-20 h-20 bg-gradient-to-b from-orange-200 to-orange-300 rounded-2xl flex items-center justify-center border-4 border-red-400 relative">
                    {/* Eyes */}
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    {/* Mouth */}
                    <div className="absolute bottom-2 w-4 h-1 bg-gray-600 rounded"></div>
                  </div>
                  {/* Antennas */}
                  <div className="absolute -top-2 left-2 w-1 h-6 bg-red-400 rounded"></div>
                  <div className="absolute -top-2 right-2 w-1 h-6 bg-red-400 rounded"></div>
                  {/* Antenna tops */}
                  <div className="absolute -top-4 left-1.5 w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="absolute -top-4 right-1.5 w-2 h-2 bg-orange-400 rounded-full"></div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Embedded Chatbot</h2>
              
              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Add an intelligent chatbot directly to your website. Instantly answer visitor questions using your site's content.
              </p>
              
              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-start text-gray-700">
                  <span className="text-green-500 mr-3 text-lg">✓</span>
                  <span>Easy one-line integration</span>
                </div>
                <div className="flex items-center justify-start text-gray-700">
                  <span className="text-green-500 mr-3 text-lg">✓</span>
                  <span>Learns from your website</span>
                </div>
                <div className="flex items-center justify-start text-gray-700">
                  <span className="text-green-500 mr-3 text-lg">✓</span>
                  <span>24/7 customer support</span>
                </div>
                <div className="flex items-center justify-start text-gray-700">
                  <span className="text-green-500 mr-3 text-lg">✓</span>
                  <span>No training required</span>
                </div>
              </div>

              {/* Back button */}
              <button
                onClick={resetToInput}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2] p-8 font-sans">
      <div className="grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        {renderContent()}
      </div>
    </div>
  );
};

export default HeroSection;