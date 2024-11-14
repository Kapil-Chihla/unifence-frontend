import React, { useEffect,useState, useRef } from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import clean from '../Assets/clean max.png'
import draipl from '../Assets/draipl.png';
import enerture from '../Assets/enerture.png';
import Gail from '../Assets/Gail.png';
import hg from '../Assets/hg infra.png';
import kalp from '../Assets/KALPATru.png';
import MES from '../Assets/MES.jpg';
import nhai from '../Assets/nhai.jpg';
import ntpc from '../Assets/ntpc.png';
import pnc from '../Assets/pnc.png';
import shrike from '../Assets/shirke.png';
import stel from '../Assets/stel.png';
import vrc from '../Assets/vrc.jpg';
import renew from '../Assets/renew.png';

const OurApprovals = () => {

  const approvals = [
    { id: 1, alt: 'Approval Logo 1' , src : clean },
    { id: 2, alt: 'Approval Logo 2', src : draipl },
    { id: 3, alt: 'Approval Logo 3', src : enerture},
    { id: 4, alt: 'Approval Logo 4', src : Gail },
    { id: 5, alt: 'Approval Logo 5', src : hg },
    { id: 6, alt: 'Approval Logo 6', src : kalp },
    { id: 7, alt: 'Approval Logo 7' , src : MES},
    { id: 8, alt: 'Approval Logo 8', src : nhai },
    { id: 9, alt: 'Approval Logo 9' , src : ntpc },
    { id: 10, alt: 'Approval Logo 10', src : pnc },
    { id: 11, alt: 'Approval Logo 11', src : shrike },
    { id: 12, alt: 'Approval Logo 12' , src : stel },
    { id: 13, alt: 'Approval Logo 13' , src : vrc },
    { id: 14, alt: 'Approval Logo 14', src : renew },
  ];

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', '-translate-y-4');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Added rootMargin to start animation slightly before element comes into view
      }
    );

    document.querySelectorAll('.logo-item').forEach((item) => {
      observerRef.current.observe(item);
    });
 // You can adjust this time as needed
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);


  const mainApprovals = approvals.slice(0, 12);
  const lastRowApprovals = approvals.slice(12);

  return (
    <div className="min-h-screen flex flex-col">
      <StickyHeader />
      
      <main className="flex-grow">
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          {/* Main grid for first 12 items */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {mainApprovals.map((approval, index) => (
              <div
                key={approval.id}
                className="logo-item opacity-0 -translate-y-4 transition-all duration-1000 ease-in-out"
                style={{ 
                  transitionDelay: `${index * 100}ms` // Added staggered delay
                }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 h-48 flex items-center justify-center hover:shadow-lg transition-shadow duration-500">
                  <img
                    src={approval.src}
                    alt={approval.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Centered container for last 2 items */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {lastRowApprovals.map((approval, index) => (
              <div
                key={approval.id}
                className="logo-item opacity-0 -translate-y-4 transition-all duration-1000 ease-in-out"
                style={{ 
                  transitionDelay: `${(mainApprovals.length + index) * 100}ms` // Continue staggered delay
                }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 h-40 flex items-center justify-center hover:shadow-lg transition-shadow duration-500">
                  <img
                    src={approval.src}
                    alt={approval.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurApprovals;