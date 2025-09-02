import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100/50 flex items-center justify-center px-4 lg:px-6 pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Mobile: Single Column Layout, Desktop: Two Column */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-6">
          {/* Mobile: Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-900 leading-tight">
            Simplify your{' '}
            <span className="text-orange-700">Property Management</span>{' '}
            Now
          </h1>
          
          {/* Mobile: Hero Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm">
              <img 
                src="/hero-background.png" 
                alt="Property Management Hero" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Mobile: Description */}
          <p className="text-base text-gray-700 leading-relaxed max-w-sm">
            Whether a leaky tap needs to be fixed, rent needs to be paid or an electrician needs to find their new gig, just chat with Keja AI on WhatsApp.
          </p>

          {/* Mobile: CTA Buttons */}
          <div className="flex flex-col gap-3 max-w-sm w-full">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-lg text-sm">
              Login
            </button>
            <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm">
              Register
            </button>
          </div>
        </div>

        {/* Desktop: Left Content */}
        <div className="hidden lg:block space-y-8 text-left pl-4">
          <h1 className="text-6xl font-bold text-orange-900 leading-tight">
            Simplify your{' '}
            <span className="text-orange-700">Property Management</span>{' '}
            Now
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
            Whether a leaky tap needs to be fixed, rent needs to be paid or an electrician needs to find their new gig, just chat with Keja AI on WhatsApp.
          </p>

          {/* Desktop: CTA Buttons */}
          <div className="flex flex-row gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg">
              Login
            </button>
            <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200">
              Register
            </button>
          </div>
        </div>

        {/* Desktop: Right Content - Hero Image */}
        <div className="hidden lg:flex justify-end pr-4">
          <div className="w-full max-w-lg">
            <img 
              src="/hero-background.png" 
              alt="Property Management Hero" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 