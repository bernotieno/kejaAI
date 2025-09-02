import React from 'react';
import { User, Users, FileText, Headphones } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-orange-200 rounded-2xl p-6 text-center">
    <div className="flex justify-center mb-4">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-3">
      {title}
    </h3>
    <p className="text-sm text-gray-700 leading-relaxed">
      {description}
    </p>
  </div>
);

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: <User className="w-6 h-6 text-gray-700" />,
      title: "Expert Guidance",
      description: "Benefit from our team's seasoned expertise for a smooth buying experience"
    },
    {
      icon: <Users className="w-6 h-6 text-gray-700" />,
      title: "Personalized Service",
      description: "Our services adapt to your unique needs, making your journey stress-free"
    },
    {
      icon: <FileText className="w-6 h-6 text-gray-700" />,
      title: "Transparent Process",
      description: "Stay informed with our clear and honest approach to buying your home"
    },
    {
      icon: <Headphones className="w-6 h-6 text-gray-700" />,
      title: "Exceptional Support",
      description: "Providing peace of mind with our responsive and attentive customer service"
    }
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elevating Your Home Buying Experience with Expertise, Integrity, 
            and Unmatched Personalized Service
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;