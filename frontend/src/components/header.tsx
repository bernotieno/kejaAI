import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigationItems = ['Home', 'Features', 'Pricing', 'About', 'Contact'];

  return (
    <header className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full shadow-lg border border-orange-100/50 w-[95%] sm:w-auto sm:min-w-[600px] md:min-w-[800px] lg:min-w-[1000px] max-w-[1200px]">
      <div className="flex items-center justify-between w-full">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <span className="text-lg sm:text-xl font-semibold text-gray-800">KejaAI</span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 text-xs lg:text-sm"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Login Button */}
        <div className="hidden md:flex items-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors duration-200">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center w-8 h-8 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-orange-100/50 p-4">
          <nav className="flex flex-col space-y-3">
            {navigationItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-4 py-2 rounded-full text-sm transition-colors duration-200 mt-2">
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;