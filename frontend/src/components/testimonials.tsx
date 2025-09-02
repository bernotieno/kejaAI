import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  location, 
  rating, 
  review, 
  avatar 
}) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full">
    {/* Interior Image Placeholder */}
    <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-200 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-orange-600 text-center opacity-50">
          <div className="text-6xl mb-2">🏠</div>
          <div className="text-sm font-medium">Interior Image</div>
        </div>
      </div>
    </div>
    
    {/* Testimonial Content */}
    <div className="p-6">
      {/* User Info */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="text-gray-600 font-semibold text-lg">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
        <div className="ml-auto flex items-center bg-orange-100 px-3 py-1 rounded-full">
          <Star className="w-4 h-4 text-orange-600 mr-1" fill="currentColor" />
          <span className="text-orange-600 font-semibold text-sm">{rating}</span>
        </div>
      </div>
      
      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {review}
      </p>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Nguyen",
      location: "Nairobi",
      rating: 5.0,
      review: "Dwello truly cares about their clients. They listened to my needs and preferences, helping me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched."
    },
    {
      name: "Michael Rodriguez",
      location: "Nairobi",
      rating: 4.5,
      review: "I had a fantastic experience working with Dwello. Their expertise and guidance throughout the process exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!"
    },
    {
      name: "Emily Johnson",
      location: "Nairobi",
      rating: 5.0,
      review: "Dwello made my dream of owning a home a reality! Their team provided exceptional service and support through every step of the process. I couldn't be happier with my new home!"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600">
            What People Say
            <br />
            About Dwello
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <TestimonialCard
              key={`${currentIndex}-${index}`}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              review={testimonial.review}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg hover:shadow-xl"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg hover:shadow-xl"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;