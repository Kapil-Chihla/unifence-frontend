import React from "react";
const ApplicationsCard = ({ title, image, description }) => {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="h-[350px]"> {/* Taller on mobile, original height on larger screens */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl text-white font-extrabold mb-2">{title}</h3>
          <p className="text-white font-light">{description}</p>
        </div>
      </div>
    );
};

export default ApplicationsCard;