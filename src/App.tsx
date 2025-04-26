import React from 'react';
import Hero from './components/Hero';
import ServicesSection from './components/Services';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import './utils/animations.css';

function App() {
  // Replace with your actual phone number
  const phoneNumber = "5551234567";
  
  // Update document title
  React.useEffect(() => {
    document.title = "Dumpster Rental Services | Professional Waste Management";
    
    // Update the favicon to a more appropriate icon for a dumpster rental company
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231E3A8A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='4 14 10 14 10 20'%3E%3C/polyline%3E%3Cpolyline points='20 10 14 10 14 4'%3E%3C/polyline%3E%3Cline x1='14' y1='10' x2='21' y2='3'%3E%3C/line%3E%3Cline x1='3' y1='21' x2='10' y2='14'%3E%3C/line%3E%3C/svg%3E";
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero phoneNumber={phoneNumber} />
      <ServicesSection />
      <Testimonials />
      <ContactCTA phoneNumber={phoneNumber} />
      <Footer phoneNumber={phoneNumber} />
      <FloatingCallButton phoneNumber={phoneNumber} />
    </div>
  );
}

export default App;