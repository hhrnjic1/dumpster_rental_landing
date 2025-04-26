import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactCTAProps {
  phoneNumber: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ phoneNumber }) => {
  const formattedPhone = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  
  return (
    <section className="py-16 lg:py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Contact us today for a free quote or to schedule your dumpster delivery. 
              We're ready to handle your waste management needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="mr-4 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Call Us</h3>
                  <a href={`tel:${phoneNumber}`} className="text-blue-100 hover:text-white transition-colors">
                    {formattedPhone}
                  </a>
                  <p className="text-blue-200 mt-1">Available 7 days a week, 6am-8pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-4 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Email Us</h3>
                  <a href="mailto:info@dumpsterrentalcompany.com" className="text-blue-100 hover:text-white transition-colors">
                    info@dumpsterrentalcompany.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-4 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Service Area</h3>
                  <p className="text-blue-100">
                    Serving the entire metropolitan area and surrounding counties
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Request a Quote</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="project" className="block text-gray-700 mb-2">Project Details</label>
                <textarea 
                  id="project" 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project and needs"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;