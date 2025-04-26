import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

interface FloatingCallButtonProps {
  phoneNumber: string;
}

const FloatingCallButton: React.FC<FloatingCallButtonProps> = ({ phoneNumber }) => {
  const [isVisible, setIsVisible] = useState(false);
  const formattedPhone = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  return (
    <a 
      href={`tel:${phoneNumber}`}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center bg-red-700 text-white rounded-xl shadow-xl transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{
        boxShadow: '0 4px 20px rgba(220, 38, 38, 0.4)'
      }}
    >
      <div className="px-6 py-4 flex items-center space-x-3">
        <Phone size={24} className="animate-pulse" />
        <div className="flex flex-col">
          <span className="text-sm">Call For Emergency Service</span>
          <span className="font-bold text-lg">{formattedPhone}</span>
        </div>
      </div>
    </a>
  );
};

export default FloatingCallButton;