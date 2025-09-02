import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
      {number}
    </div>
    <div className="text-sm text-gray-600 font-medium">
      {label}
    </div>
  </div>
);

const RealEstateSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/statisctic.png" 
                alt="Real Estate Statistics" 
                className="w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                We Help You To Find
                <br />
                <span className="text-orange-600">Your Dream Home</span>
              </h2>
              
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <StatItem number="8K+" label="Houses Available" />
              <StatItem number="6K+" label="Houses Sold" />
              <StatItem number="2K+" label="Trusted Agents" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;