import React, { useState, useEffect } from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import power from '../Assets/power.jpg';
import power2 from '../Assets/power2.jpg';
import CoolLoader from '../CoolLoader';

const PowerTransmission = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <CoolLoader />;
  }

  return (
    <div className="w-full">
      <StickyHeader />
      
      {/* Hero Section with Background Image - Improved container constraints */}
      <div className="relative h-[500px] lg:h-[700px] mt-10 md:mt-0">
        <img 
          src={power}
          alt="Contact us hero"
          className="w-full h-full object-cover brightness-50"
        />
        {/* Added max-height and overflow control for content container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 md:px-0 max-h-[calc(100%-2rem)] overflow-y-auto">
          {/* Constrained content width and added padding */}
          <div className="max-w-[90%] md:max-w-none mx-auto py-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Power Transmission and Distribution
            </h1>
            <div className="w-28 sm:w-32 md:w-40 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        </div>
            {/* Adjusted button container for better spacing */}
            <div className="mt-4 md:mt-6">
              <Link
                to="/contact"
                className="relative inline-flex items-center px-6 md:px-8 py-2 md:py-3 border-2 border-primary-turquoise text-primary-lightgreen font-bold text-base md:text-lg rounded-2xl transition-colors duration-300 group"
              >
                <span className="relative z-10">Enquire Now</span>
                <span className="absolute top-1/2 right-2 transform -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-[-8px] md:group-hover:right-[-12px]">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="long-arrow-alt-right"
                    className="w-4 h-4 md:w-6 md:h-6 text-primary-turquoise group-hover:text-primary-turquoise"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* First Text Section - Responsive padding and text size */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <p className="text-sm md:text-lg text-navy-800 leading-relaxed">
          Unifence, the specialized division of Deepak Industries, offers a comprehensive range of products essential for power transmission and distribution infrastructure. This includes ground-based towers, roof-top towers and poles, and fence posts designed to support efficient and reliable electricity delivery.
        </p>
      </div>

      {/* Gradient Background Section */}
      <div className="relative">
        <div className="absolute w-full h-[calc(100%-100px)] md:h-[calc(100%-200px)] bottom-0 bg-gradient-to-br from-green-600 via-cyan-500 to-green-500 overflow-hidden">
          {/* SVG patterns remain the same */}
          <svg 
            className="absolute w-full h-full opacity-10" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100"
          >
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path 
                d="M 10 0 L 0 0 0 10" 
                fill="none" 
                stroke="white" 
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
          
          <svg 
            className="absolute right-0 top-0 h-full opacity-20 hidden md:block" 
            viewBox="0 0 100 800" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0 0 Q 50 400 100 800" 
              stroke="white" 
              fill="none" 
              strokeWidth="2"
            />
            <path 
              d="M20 0 Q 70 400 120 800" 
              stroke="white" 
              fill="none" 
              strokeWidth="1"
            />
          </svg>
          
          <svg 
            className="absolute left-0 bottom-0 w-full h-32 md:h-64 opacity-10" 
            viewBox="0 0 200 100" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0 50 L 20 50 L 30 20 L 40 80 L 50 50 L 70 50" 
              stroke="white" 
              fill="none" 
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
            <path 
              d="M80 50 L 100 50 L 110 20 L 120 80 L 130 50 L 150 50" 
              stroke="white" 
              fill="none" 
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
          </svg>
        </div>
        
        {/* Content container with responsive spacing */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-6">
          {/* Second Image - Responsive height */}
          <div className="w-full h-[250px] md:h-[300px] lg:h-[400px] shadow-xl">
            <img 
              src={power2}
              alt="Power transmission tower"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Text Section - Responsive text size and spacing */}
          <div className="py-8 md:py-12 text-white relative z-10">
            <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6">
              Unifence's ground-based towers are engineered to withstand harsh conditions, providing a sturdy foundation for high-voltage lines. The roof-top solutions enable power distribution in dense urban areas. Unifence's fence posts ensure secure infrastructure, safeguarding against unauthorized access.
            </p>
            <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6">
              Unifence maintains a nationwide network to deliver timely service. Its ISO certifications demonstrate a commitment to quality and safety standards. This expertise and customer-centric approach have solidified Unifence's position as a trusted partner in the power sector.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PowerTransmission;