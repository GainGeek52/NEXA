import React, { useState } from 'react';
import Chatbot from './Chatbot';

const HeroSection = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [currentPhase, setCurrentPhase] = useState('input'); // 'input', 'loading', 'options'
  const [selectedOption, setSelectedOption] = useState('');

  const handleTryNEXA = () => {
    if (websiteUrl.trim()) {
      console.log('Trying NEXA on:', websiteUrl);
      setCurrentPhase('loading');
      
      // Simulate processing time - you can replace this with actual loading logic
      setTimeout(() => {
        setCurrentPhase('options');
      }, 2000); // 2 seconds loading time
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleTryNEXA();
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log('Selected option:', option);
    // Add logic for handling the selected option
  };

  const resetToInput = () => {
    setCurrentPhase('input');
    setWebsiteUrl('');
    setSelectedOption('');
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
          </>
        );

      case 'loading':
        return (
          <div className="col-span-2 text-center text-white">
            <h2 className="mb-8 text-4xl font-bold">Analyzing your website...</h2>
            <div className="mb-6 text-xl text-white/80">
              Processing: {websiteUrl}
            </div>
            {/* Placeholder for loading animation - you can add your animation here */}
            <div className="flex items-center justify-center">
              <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
            </div>
            <p className="mt-6 text-lg text-white/70">
              This may take a few moments while we analyze your content...
            </p>
          </div>
        );

      case 'options':
        return (
          <div className="col-span-2 text-center text-white">
            <h2 className="mb-4 text-4xl font-bold">Choose Your Solution</h2>
            <p className="mb-8 text-xl text-white/80">
              Website analyzed successfully! Select the option that best fits your needs:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Embedded Chatbot Option */}
              <div 
                onClick={() => handleOptionSelect('embedded-chatbot')}
                className="cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full shadow-2xl hover:bg-white/20">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold mb-4">Embedded Chatbot</h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Add an intelligent chatbot directly to your website. Instantly answer visitor questions using your site's content.
                  </p>
                  <div className="text-sm text-white/60 space-y-2">
                    <div>✓ Easy one-line integration</div>
                    <div>✓ Learns from your website</div>
                    <div>✓ 24/7 customer support</div>
                    <div>✓ No training required</div>
                  </div>
                </div>
              </div>

              {/* Cashflow/Supply Chain Management Option */}
              <div 
                onClick={() => handleOptionSelect('cashflow-management')}
                className="cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full shadow-2xl hover:bg-white/20">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold mb-4">Cashflow / Supply Chain</h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Advanced business intelligence for managing your cashflow and supply chain operations with AI insights.
                  </p>
                  <div className="text-sm text-white/60 space-y-2">
                    <div>✓ Real-time analytics</div>
                    <div>✓ Predictive insights</div>
                    <div>✓ Automated reporting</div>
                    <div>✓ Risk management</div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={resetToInput}
              className="mt-8 border-2 border-white/50 bg-transparent px-6 py-3 text-white hover:bg-white/10 transition-colors duration-200"
            >
              ← Back to URL Input
            </button>
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