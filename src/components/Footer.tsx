import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  phoneNumber: string;
}

const Footer: React.FC<FooterProps> = ({ phoneNumber }) => {
  const formattedPhone = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Dumpster Rental Company</h3>
            <p className="mb-4">
              Providing reliable dumpster rental services for residential and commercial projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 flex-shrink-0" />
                <a href={`tel:${phoneNumber}`} className="hover:text-white transition-colors">
                  {formattedPhone}
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:info@dumpsterrentalcompany.com" className="hover:text-white transition-colors">
                  info@dumpsterrentalcompany.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>Serving the entire metropolitan area</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Residential Dumpster Rental</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Commercial Dumpster Rental</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Construction Waste Removal</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Roll-Off Dumpster Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Same-Day Delivery</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {currentYear} Dumpster Rental Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;