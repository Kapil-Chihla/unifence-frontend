import React, { useEffect, useState } from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import s1 from '../Assets/s1.jpg';
import s3 from '../Assets/s3.jpg';
import CoolLoader from '../CoolLoader';

const AboutUs = () => {
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
    <div className="w-full min-h-screen flex flex-col">
      <StickyHeader />
      
      {/* Header with Background Image */}
      <div className="relative w-full">
        {/* Progressive height increase based on screen size */}
        <div className="h-[300px] sm:h-[350px] md:h-[500px] lg:h-[700px] w-full">
          <img 
            src={s1}
            alt="Industrial machinery" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
            ABOUT US
          </h1>
          <div className="h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 lg:w-32 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mt-2 sm:mt-3 md:mt-4"></div>
        </div>
      </div>

      {/* First Text Section */}
      <div className="w-full px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-navy-800 leading-relaxed">
          Deepak Industries was established in 2006 and is a technology firm accredited by ISO 9001:2015 and ISO 45001:2008. The company provides a wide range of goods and services in the areas of telecommunication, solar solutions, and security and surveillance, under the direction of visionary director Mr. Deepak Goyal.
          </p>
        </div>
      </div>

      {/* Gradient Background Section */}
      <div className="relative">
  {/* Gradient Background */}
  {/* Adjusted height to be smaller on mobile screens */}
  <div className="absolute w-full h-[calc(100%-100px)] sm:h-[calc(100%-150px)] md:h-[calc(100%-175px)] lg:h-[calc(100%-200px)] bottom-0 bg-gradient-to-br from-green-600 via-cyan-500 to-green-500 overflow-hidden">
    {/* SVG Pattern Background - Adjusted scale for different screens */}
    <svg 
      className="absolute w-full h-full opacity-10 scale-50 sm:scale-75 md:scale-90 lg:scale-100" 
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
    
    {/* Decorative curve - Adjusted for responsiveness */}
    <svg 
      className="absolute right-0 top-0 h-full opacity-20 scale-75 sm:scale-90 lg:scale-100" 
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
    
    {/* Circuit pattern - Adjusted size and position */}
    <svg 
      className="absolute left-0 bottom-0 w-full h-32 sm:h-40 md:h-52 lg:h-64 opacity-10" 
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
  
  {/* Content Container - Adjusted padding for better spacing */}
  <div className="relative w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 lg:py-12">
    <div className="max-w-5xl mx-auto">
      {/* Image - Adjusted height for better proportions on small screens */}
      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto">
  <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] shadow-xl">
    <img 
      src={s3} 
      alt="Industrial worker" 
      className="w-full h-full object-cover rounded-sm"
    />
  </div>
</div>

      {/* Text Section - Adjusted padding and spacing */}
      <div className="py-4 sm:py-6 md:py-8 lg:py-12 text-white">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-2 sm:mb-3 md:mb-4 lg:mb-6">
        With a strong network of offices and trustworthy partners, Deepak Industries, which has its headquarters in delhi, works all throughout the country. 
            By providing superior, intelligent, and integrated communication solutions that are customized to meet the demands of each individual client, the company hopes to surpass consumer expectations. 
            Deepak Industries aspires to be an industry leader known for providing exceptional service and reliability.

        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-2 sm:mb-3 md:mb-4 lg:mb-6">
        The business's motto, "No Compromise," highlights its steadfast dedication to morality and excellence. This tenet drives Deepak's ongoing creativity and commitment to human growth, which produces excellent goods and services. 
            Because of its innovative approach and effective customer service, Deepak Industries has gained the faith and trust of its clients, securing its place as the industry's leading supplier of technology solutions.

        </p>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
};

export default AboutUs;