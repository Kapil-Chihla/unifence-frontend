import React from "react";

const FeatureCard = ({ title, image, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Increased height for the image container */}
      <div className="w-full h-[320px] overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-fill"
        />
      </div>
      {/* Content area */}
      <div className="p-6">
        <h3 className="text-xl text-white font-extrabold mb-2">{title}</h3>
        <p className="text-white font-light">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;