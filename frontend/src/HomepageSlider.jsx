import React, { useState, useEffect } from "react";
import s1 from './Assets/s1.jpg'
import s2 from './Assets/s2.jpg'
import s3 from './Assets/s3.jpg'

const slides = [
  {
    image: s2,
    heading1: "Secure Every Perimeter, Every Time",
    heading2: "Top-Quality Fencing Solutions"
  },
  {
    image: s1,
    heading1: "Trusted Infrastructure Experts",
    heading2: "Smart, Safe & Reliable"
  },
  {
    image: s3,
    heading1: "Innovation in Every Solution",
    heading2: "No Compromise in Quality"
  }
];

const ScrollIndicator = () => (
  <div className="absolute left-4 md:left-8 bottom-8 md:bottom-12 flex items-center gap-2 md:gap-4">
    <div className="text-white text-xs md:text-sm tracking-widest" style={{ writingMode: 'vertical-lr' }}>
      SCROLL
    </div>
    <div className="relative h-16 md:h-24 flex items-center">
      <div className="w-px h-full bg-white/30"></div>
      <div className="absolute top-0 w-px h-8 md:h-12 bg-white animate-line-scroll"></div>
    </div>
  </div>
);

const Slide = ({ image, heading1, heading2 }) => (
  <div 
    className="relative w-full h-full bg-cover bg-center"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="absolute inset-0 bg-black/40">
      <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 lg:mb-6 text-white animate-slide-in">
            {heading1}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 animate-slide-in-delay">
            {heading2}
          </h2>
        </div>
      </div>
    </div>
  </div>
);

export default function HomepageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[calc(100vh)] overflow-hidden"> {/* Adjusted height to account for potential header */}
      <style>
        {`
          @keyframes lineScroll {
            0% {
              transform: translateY(0);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              transform: translateY(100%);
              opacity: 0;
            }
          }
          .animate-line-scroll {
            animation: lineScroll 2s ease-in-out infinite;
          }
          @keyframes slideIn {
            from { 
              opacity: 0; 
              transform: translateX(-50px); 
            }
            to { 
              opacity: 1; 
              transform: translateX(0); 
            }
          }
          .animate-slide-in {
            animation: slideIn 0.8s ease-out forwards;
          }
          .animate-slide-in-delay {
            animation: slideIn 0.8s ease-out 0.2s forwards;
            opacity: 0;
          }
        `}
      </style>

      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <Slide
              image={slide.image}
              heading1={slide.heading1}
              heading2={slide.heading2}
            />
          </div>
        ))}
      </div>

      {<ScrollIndicator />}

      <div className="absolute bottom-1/2 right-0 md:right-1 mr-4 md:mr-8 transform -translate-x-1/2 flex flex-col space-y-1.5 md:space-y-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}