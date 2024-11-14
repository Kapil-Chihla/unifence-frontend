import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import whoweare from "./Assets/whoweare.png";

import Carousel from "./Carousel";
const AnimatedStat = ({ value }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const duration = 2000;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * value));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, isVisible]);

  return <span ref={countRef}>{count}</span>;
};

export default function WhoWeAre() {

  const stats = [
    { value: 19, label: "Years of Experience" },
    { value: 100, label: "Happy Clients" },
    { value: 12000, label: "MT Annual Fencing Solutions Production" },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-cap">
      {/* Top Section with padding */}
      <div className="w-full px-4 md:px-8 lg:px-16">
        {/* Who We Are Image */}
        <div className="flex justify-center items-center w-full mb-2">
          <img
            src={whoweare}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg animate-slideDown"
            alt="Who We Are"
          />
        </div>

        {/* Description */}
        <div className="flex items-center justify-center w-full px-4 mb-4 mt-5">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-extralight text-primary-gray max-w-4xl text-center leading-relaxed animate-fadeIn">
            Deepak Industries is a technology-driven company specializing in
            Telecommunication, Solar Solutions, and Security & Surveillance.
            Founded in 2006, we are ISO-certified and committed to delivering
            innovative, reliable solutions nationwide.
          </p>
        </div>

        {/* Know More Button */}
        <div className="flex justify-center mb-20 mt-2">
          <Link to="/about" className="relative px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-2xl hover:text-primary-navy hover:border-primary-navy transition-colors duration-300 group overflow-visible">
            Know More
            <span className="absolute top-1/2 right-[-12px] transform opacity-0 -translate-y-1/2 transition-all duration-300 group-hover:opacity-100 group-hover:right-[-20px]">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="long-arrow-alt-right"
                className="w-6 h-6 text-blue-600 group-hover:text-primary-navy"
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

      {/* Background wrapper for stats and carousel */}
      <div className="relative w-full space-y-20">
        {/* Background div that spans from middle of stats to middle of carousel */}
        <div className="absolute inset-x-0 top-[20%] bottom-[30%] bg-primary-navy/90 z-0"></div>

        {/* Stats Section */}
        <div className="relative w-[90%] md:w-[80%] mx-auto bg-white rounded-xl shadow-lg py-12 px-8 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-navy">
                  <AnimatedStat value={stat.value} />+
                </p>
                <p className="text-lg sm:text-xl text-orange-600 mt-2 text-center">
                  {stat.label}
                </p>
                
                {index < 2 && (
                  <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center text-2xl font-bold text-white pt-8 drop-shadow-md">
            OUR PRODUCTS
          </div>
        <Carousel/>
       </div>
    </div>
  );
}