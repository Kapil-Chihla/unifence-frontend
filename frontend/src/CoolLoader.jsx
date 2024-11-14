import React from 'react';

const CoolLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="relative animate-[bounce_2s_ease-in-out_infinite]">
        {/* Outer ring with brand colors */}
        <div className="absolute inset-0 w-24 h-24 border-4 border-t-[#006B5E] border-r-[#00AB8E] border-b-[#92D050] border-l-[#006B5E] rounded-full animate-[spin_3s_linear_infinite]" />
        
        {/* Inner rotating ring */}
        <div className="absolute inset-0 w-24 h-24 border-4 border-t-transparent border-r-transparent border-b-[#092C4C] border-l-[#092C4C] rounded-full animate-[spin_2s_linear_infinite_reverse]" />
        
        {/* Center circle */}
        <div className="absolute inset-0 m-auto w-12 h-12 bg-white rounded-full" />
      </div>

      {/* Company name */}
      <div className="absolute mt-32 text-[#092C4C] font-medium text-lg tracking-wide">
        <div className="flex items-center gap-1">
          <span className="animate-[blink_1.5s_ease-in-out_infinite]">UNIFENCE</span>
          <span className="inline-flex">
            <span className="animate-pulse [animation-delay:-0.3s]">.</span>
            <span className="animate-pulse [animation-delay:-0.15s]">.</span>
            <span className="animate-pulse">.</span>
          </span>
        </div>
      </div>

      {/* Add required keyframes for the blink animation */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default CoolLoader;