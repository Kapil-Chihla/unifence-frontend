import React, { useEffect, useRef } from 'react';

const Wave = () => (
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-16 -z-10">
    <div className="absolute bottom-0 left-0 right-0 transform">
      <div className="relative h-16 animate-wave">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 1000 200" className="w-full h-full">
            <path 
              d="M0,100 C150,0 350,200 500,100 C650,0 850,200 1000,100 L1000,200 L0,200 Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const SpeechCards = () => {
  const containerRef = useRef(null);
  
  const speeches = [
    {
      title: "CEO's Word",
      content: "Deepak Industries is built on a solid foundation of core values and service ethics, allowing us to enthusiastically exceed the expectations of our clients and remain the leading service provider of choice."
    },
    {
      title: "Director's Word",
      content: "Our goal is to earn customers' trust and confidence by delivering the best solutions in our strategic business portfolios. Our efficient customer service has established us as a pioneer and innovator in the industry."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.speech-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 200); // Stagger the animations
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
        rootMargin: '50px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full bg-transparent/15 py-36 mt-0" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 min-h-[400px]">
          {speeches.map((speech, index) => (
            <div 
              key={index} 
              className={`speech-card relative flex-1 p-8 rounded-xl shadow-lg 
                opacity-0 transition-all duration-1000 ease-out
                ${index === 0 ? 'bg-gradient-to-br from-slate-800 to-slate-900 -translate-x-full' : 
                'bg-gradient-to-bl from-indigo-900 to-slate-900 translate-x-full'}
                hover:shadow-2xl hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex flex-col justify-center items-center h-full text-center relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-white/90 tracking-wide">
                  {speech.title}
                </h2>
                <p className="text-gray-300 leading-relaxed max-w-prose">
                  {speech.content}
                </p>
              </div>
              <Wave />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wave {
          animation: wave 15s linear infinite;
        }
        .speech-card {
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .speech-card.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
};

export default SpeechCards;