import React from "react";
const ApplicationsBlock = ({ title, description }) => (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );

export default ApplicationsBlock;