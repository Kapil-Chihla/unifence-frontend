import React, { useState, useEffect } from 'react';
import logo from './Assets/logo .png'
const LogoLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white">
      <img
        src={logo}// Replace with your logo path
        alt="Logo"
        className="opacity-0 animate-fadeIn transition-opacity duration-3000 w-24 md:w-36 lg:w-48"
      />
    </div>
  );
};

export default LogoLoader;
