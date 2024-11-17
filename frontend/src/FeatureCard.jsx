import React from "react";

const FeatureCard = ({ title, image, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Responsive image container */}
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-[320px] overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>
      {/* Content area with responsive text */}
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-xl text-white font-extrabold mb-1 sm:mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-white font-light">{description}</p>
      </div>
    </div>
  );
};
export default FeatureCard;