import React from 'react';
import { Phone } from 'lucide-react';

interface HeroProps {
  phoneNumber: string;
}

const Hero: React.FC<HeroProps> = ({ phoneNumber }) => {
  const formattedPhone = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  
  return (
    <div className="relative">
      {/* Reviews Banner */}
      <div className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            {/* Logo Section */}
            <div className="flex justify-center md:justify-start">
              <div className="w-48">
                <img 
                  src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Company Logo"
                  className="w-full object-contain"
                />
              </div>
            </div>

            {/* Reviews Section */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">1100+ 5-STAR REVIEWS!</h2>
              <div className="flex items-center justify-center gap-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google Reviews"
                  className="h-8"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
                  alt="Facebook"
                  className="h-8"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg"
                  alt="Yelp"
                  className="h-8"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/United_States_Better_Business_Bureau_logo.svg"
                  alt="BBB"
                  className="h-8"
                />
              </div>
              <p className="text-lg text-gray-600 mt-2">Recommended All Over Your Area</p>
            </div>

            {/* Phone Button */}
            <div className="flex justify-center md:justify-end">
              <a href={`tel:${phoneNumber}`}>
                <div className="bg-red-700 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-red-800 transition-colors duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{formattedPhone}</div>
                    <div className="text-sm">Proudly Serving Your Area</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/4590392/pexels-photo-4590392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Dumpster rental service" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Text Content */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block">YOUR LOCAL</span>
                <span className="block text-orange-500">DUMPSTER RENTAL</span>
                <span className="block">EXPERTS</span>
              </h1>
              <a 
                href={`tel:${phoneNumber}`} 
                className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 transition-colors duration-300 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg"
              >
                <Phone size={24} />
                <span>{formattedPhone}</span>
              </a>
            </div>

            {/* Compact Quote Form */}
            <div className="lg:w-[400px] bg-blue-800 bg-opacity-90 p-6 rounded-lg shadow-xl">
              <h2 className="text-xl font-bold mb-4 text-center">GET A FREE QUOTE NOW</h2>
              <form className="grid grid-cols-2 gap-4">
                <input 
                  type="text"
                  placeholder="Name"
                  className="col-span-2 px-4 py-2 rounded text-gray-900 text-sm"
                />
                <input 
                  type="tel"
                  placeholder="Phone"
                  className="px-4 py-2 rounded text-gray-900 text-sm"
                />
                <input 
                  type="text"
                  placeholder="Zip Code"
                  className="px-4 py-2 rounded text-gray-900 text-sm"
                />
                <select className="col-span-2 px-4 py-2 rounded text-gray-900 text-sm">
                  <option value="">Select Urgency</option>
                  <option value="urgent">Urgent - Same Day</option>
                  <option value="soon">Within 24 Hours</option>
                  <option value="scheduled">Schedule Later</option>
                </select>
                <button 
                  type="submit"
                  className="col-span-2 bg-red-700 hover:bg-red-800 text-white font-bold py-3 rounded text-lg transition-colors duration-300"
                >
                  GET FREE QUOTE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <span className="text-xl font-bold">TODAY'S OFFER - $50 OFF YOUR FIRST RENTAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;