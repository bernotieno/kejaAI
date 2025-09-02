import React, { useState } from 'react';
import { MessageCircle, HelpCircle } from 'lucide-react';

const SupportHelpComponent: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Email submitted:', email);
    // You can add your form submission logic here
  };

  const handleChatSupport = () => {
    // Handle chat support click
    console.log('Chat support clicked');
    // You can add your chat support logic here
  };

  const handleBrowseFAQ = () => {
    // Handle browse FAQ click
    console.log('Browse FAQ clicked');
    // You can add your FAQ navigation logic here
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-2">
          Do You Have Any Questions?
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-amber-700 mb-8">
          Get Help From Us
        </h3>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
          <button
            onClick={handleChatSupport}
            className="flex items-center gap-2 text-gray-700 hover:text-amber-700 transition-colors duration-200"
          >
            <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
              <MessageCircle className="w-3 h-3" />
            </div>
            <span className="font-medium">Chat live with our support team</span>
          </button>

          <button
            onClick={handleBrowseFAQ}
            className="flex items-center gap-2 text-gray-700 hover:text-amber-700 transition-colors duration-200"
          >
            <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
              <HelpCircle className="w-3 h-3" />
            </div>
            <span className="font-medium">Browse our FAQ</span>
          </button>
        </div>

        {/* Email Form */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full px-4 py-3 rounded-lg bg-amber-200 placeholder-amber-800 text-amber-900 border-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-amber-100 transition-colors duration-200"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportHelpComponent;