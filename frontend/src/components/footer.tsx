import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const handleLinkClick = (section: string, item: string) => {
    console.log(`Clicked: ${section} - ${item}`);
    // Add your navigation logic here
  };

  const handleSocialClick = (platform: string) => {
    console.log(`Clicked: ${platform}`);
    // Add your social media navigation logic here
  };

  return (
    <footer className="bg-orange-300 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-orange-600 text-2xl font-bold">✱</div>
              <h2 className="text-xl font-bold text-gray-900">KejaAI</h2>
            </div>
            <p className="text-sm text-gray-800 max-w-xs">
              Bringing you closer to your dream home, one click at a time.
            </p>
          </div>

          {/* About Section */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-900 mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleLinkClick('About', 'Our Story')}
                  className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 text-left"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('About', 'Careers')}
                  className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('About', 'Our Team')}
                  className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 text-left"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('About', 'Resources')}
                  className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 text-left"
                >
                  Resources
                </button>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleLinkClick('Support', 'FAQ')}
                  className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('Support', 'Contact Us')}
                  className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('Support', 'Help Center')}
                  className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 text-left"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('Support', 'Terms of Service')}
                  className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Find Us Section */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-900 mb-4">Find Us</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleLinkClick('Find Us', 'Events')}
                  className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 text-left"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('Find Us', 'Locations')}
                  className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 text-left"
                >
                  Locations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('Find Us', 'Newsletter')}
                  className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 text-left"
                >
                  Newsletter
                </button>
              </li>
            </ul>
          </div>

          {/* Our Social Section */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-900 mb-4">Our Social</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleSocialClick('Instagram')}
                  className="flex items-center gap-2 text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSocialClick('Facebook')}
                  className="flex items-center gap-2 text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSocialClick('Twitter')}
                  className="flex items-center gap-2 text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Twitter (x)</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;