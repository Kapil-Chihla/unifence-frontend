import React, { useEffect, useState } from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import s1 from '../Assets/s1.jpg';
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
    <div className="w-full">
      <StickyHeader />
      
      {/* Header with Background Image */}
      <div className="relative h-[700px] w-full">
        <img 
          src={s1}
          alt="Industrial machinery" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl font-bold text-white">
            ABOUT US
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mt-4"></div>
        </div>
      </div>

      {/* First Text Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-navy-800 leading-relaxed">
          We are living in an age of remarkable progress, where invention and human 
          ingenuity are driving unprecedented advances in global development. 
          Technology has a critical role in this transformation, but so do the materials 
          that build our world. As the leading steel conglomerate, we have an inherent 
          stake in this and clear responsibility.
        </p>
        <p className="mt-6 text-navy-800 leading-relaxed">
          Steel is as relevant as ever to the future success of our world. As one of the 
          only materials to be completely reusable and recyclable, it will play a critical 
          role in building the circular economy of the future. Steel will continue to evolve, 
          becoming smarter and increasingly sustainable.
        </p>
      </div>

      {/* Gradient Background Section with SVG Pattern */}
      <div className="relative">
        {/* SVG Pattern Background */}
        <div className="absolute w-full h-[calc(100%-200px)] bottom-0 bg-gradient-to-br from-green-600 via-cyan-500 to-green-500 overflow-hidden">
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
          
          {/* Additional decorative SVG elements */}
          <svg 
            className="absolute right-0 top-0 h-full opacity-20" 
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
          
          {/* Circuit-like pattern */}
          <svg 
            className="absolute left-0 bottom-0 w-full h-64 opacity-10" 
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
        
        <div className="relative max-w-5xl mx-auto px-6">
          {/* Second Image */}
          <div className="w-full h-[400px] shadow-xl">
            <img 
              src={s1} 
              alt="Industrial worker" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Text Section */}
          <div className="py-12 text-white relative z-10">
            <p className="mb-6">
              At Unifence our goal is to help build a better world with smarter steels. 
              Steels made using innovative processes that are more efficient, use less 
              energy, and emit significantly less carbon. Our brand family includes cleaner, 
              stronger, and reusable products, ranging from raw materials to finished steel 
              products. Through our nationwide marketing network, these premium products 
              satisfy the market demand, and are extensively applied to industries such as 
              energy, transportation, and construction.
            </p>
            <p className="mb-6">
              We foster the culture of innovation by putting research and development at the 
              heart of our operations. We have some of the best and brightest people in the 
              business – engineers who work for us because they get to tackle the most 
              complex of problems.
            </p>
            <p>
              With more than 1,000 employees, we are more than just a company. We are a 
              community. We are driven by an entrepreneurial spirit and a passion for 
              excellence, never accepting that the limits of our material have been achieved.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;