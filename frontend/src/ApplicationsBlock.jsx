import React from "react";
const ApplicationsBlock = ({ title, description }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
  <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-white mb-3">
    {title}
  </h3>
  <p className="text-sm md:text-base lg:text-lg text-white">
    {description}
  </p>
</div>
);

export default ApplicationsBlock;