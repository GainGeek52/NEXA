import { useState } from 'react';
import LogoAnimation from './LogoAnimation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-indigo-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <div className="flex-shrink-0 flex items-center">
            <span className="text-black text-2xl font-bold tracking-tight mr-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              NEXA
            </span>
            <div className="w-10 h-10">
              <LogoAnimation style={{ width: '100%', height: '100%' }} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a
                href="#"
                className="text-black hover:text-black px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              >
                AboutUs
              </a>
              <a
                href="#"
                className="text-black hover:text-black px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              >
                ContactUs
              </a>
              <a
                href="#"
                className="text-black hover:text-black px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-black hover:text-black px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              >
                EmbedGuide
              </a>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <button className="text-black hover:text-black px-3 py-2 rounded-md text-sm font-medium transition duration-150">
                Login
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-black px-4 py-2 rounded-md text-sm font-medium transition duration-150">
                Sign Up for Free
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              AboutUs
            </a>
            <a
              href="#"
              className="text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              ContactUs
            </a>
            <a
              href="#"
              className="text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              EmbedGuide
            </a>
            <div className="pt-4 pb-3 border-t border-indigo-700">
              <button className="w-full text-left text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                Login
              </button>
              <button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 text-black block px-3 py-2 rounded-md text-base font-medium">
                Sign Up for Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;