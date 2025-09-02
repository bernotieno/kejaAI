import React from 'react';
import { MapPin, Home, Maximize } from 'lucide-react';

interface PropertyCardProps {
  location: string;
  rooms: number;
  sqft: string;
  price: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ location, rooms, sqft, price }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    {/* Property Image Placeholder */}
    <div className="h-48 bg-gradient-to-br from-blue-200 to-purple-200 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-gray-600 text-center">
          <Home className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <div className="text-sm font-medium">Property Image</div>
        </div>
      </div>
    </div>
    
    {/* Property Details */}
    <div className="p-6">
      {/* Location */}
      <div className="flex items-center text-gray-700 mb-4">
        <MapPin className="w-4 h-4 mr-2" />
        <span className="font-medium">{location}</span>
      </div>
      
      {/* Property Features */}
      <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <Home className="w-4 h-4 mr-1" />
          <span>{rooms} Rooms</span>
        </div>
        <div className="flex items-center">
          <Maximize className="w-4 h-4 mr-1" />
          <span>{sqft}</span>
        </div>
      </div>
      
      {/* Price and Sign Up */}
      <div className="flex items-center justify-between">
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">{price}</div>
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200">
          Sign up
        </button>
      </div>
    </div>
  </div>
);

const PopularResidencesSection: React.FC = () => {
  const properties = [
    {
      location: "Umoja, Nairobi",
      rooms: 4,
      sqft: "3,500 sq ft",
      price: "Ksh 1.2M"
    },
    {
      location: "Westland, Nairobi",
      rooms: 3,
      sqft: "1,500 sq ft",
      price: "Ksh 3M"
    },
    {
      location: "Kileleshwa, Nairobi",
      rooms: 6,
      sqft: "4,000 sq ft",
      price: "Ksh 3.5M"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-8">
            Our Popular Residences
          </h2>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              location={property.location}
              rooms={property.rooms}
              sqft={property.sqft}
              price={property.price}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularResidencesSection;