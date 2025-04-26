import React from 'react';
import { CheckCircle, Truck, Clock, Shield } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="text-green-500" size={24} />,
      text: "Daily Discount Coupons"
    },
    {
      icon: <Truck className="text-green-500" size={24} />,
      text: "Same Day Service Available"
    },
    {
      icon: <Shield className="text-green-500" size={24} />,
      text: "Licensed & Insured"
    },
    {
      icon: <Clock className="text-green-500" size={24} />,
      text: "24/7 Customer Support"
    }
  ];

  return (
    <>
      {/* Features List */}
      <div className="bg-white py-8 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                {feature.icon}
                <span className="text-gray-700 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
            CUSTOMER SERVICE IS OUR #1 PRIORITY
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our daily mission is to deliver outstanding customer service for all of our dumpster rental customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">FAMILY OWNED & OPERATED</h3>
              <p className="text-gray-600">
                Trust is something built over time with persistence and grit. Integrity, respect, and honor are values at the heart of our work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">TRAINED, COURTEOUS STAFF</h3>
              <p className="text-gray-600">
                Our staff is professionally trained to ensure each technician is fully capable of handling all your dumpster rental needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">YOUR NEIGHBORS LOVE US</h3>
              <p className="text-gray-600">
                We're dedicated to delivering service you'll be happy with & tell your friends about. BBB A+ certified with five-star ratings!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;