import React, { useState,useEffect } from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import s2 from '../Assets/s2.jpg';
import rmain from '../Assets/Gabions/rmain.webp'
import rf1 from '../Assets/Gabions/rf1.webp'
import rf2 from '../Assets/Gabions/rf2.webp'
import rf3 from '../Assets/Gabions/rf3.webp'
import { Link } from 'react-router-dom';
import CoolLoader from '../CoolLoader';
import ApplicationsBlock from '../ApplicationsBlock';
// Hero Section Component

const Hero = () => (
    <div className="relative h-[750px] w-full mt-10 md:mt-0">
    <img
      src={rmain}
      alt="Contact us hero"
      className="w-full h-full object-cover brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <h1 className="text-5xl mb-4 font-extrabold">Rapid Development Barrier</h1>
      <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
      <p className="text-2xl font-mon font-extralight mt-4">
          A strong welded mesh system having anti climb & anti cut features along with high visibility making it ideal for medium and high security.
      </p>
      <Link
        to="/contact"
        className="relative mt-10 px-8 py-3 border-2 border-primary-turquoise text-primary-lightgreen font-bold text-lg rounded-2xl transition-colors duration-300 group overflow-visible inline-block"
      >
        Enquire Now
        <span className="absolute top-1/2 right-[-12px] transform opacity-0 -translate-y-1/2 transition-all duration-300 group-hover:opacity-100 group-hover:right-[-20px]">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="long-arrow-alt-right"
            className="w-6 h-6 text-primary-turquoise group-hover:text-primary-turquoise"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
            />
          </svg>
        </span>
      </Link>
    </div>
  </div>
);
const FeatureCard = ({ title, image, description, profiles }) => {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="h-[350px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl text-white font-extrabold mb-2">{title}</h3>
          <p className="text-white font-light mb-4">{description}</p>
          {profiles && (
            <div className="mt-4 space-y-3">
              <div className="text-white font-semibold mb-2">Blade Profiles by Deterrence Level:</div>
              <div className="space-y-2">
                {Object.entries(profiles).map(([level, profile]) => (
                  <div 
                    key={level} 
                    className="flex items-center justify-between p-2 rounded-md"
                  >
                    <span className="text-white font-medium">{level}</span>
                    <span className="text-white">{profile}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const Features = () => {
    const features = [
      {
        title: "STRONG MESH STRUCTURE",
        image: rf1,
        description: "The loop sizes can be adjusted depending upon the space available and the level of security needed."
      },
      {
        title: "LONG LIFE",
        image: rf2,
        description: "The various blade profiles can be perfect to mitigate different types of intrusion threats."
      },
      {
        title: "MODULAR",
        image: rf3,
        description: "Coils are made of heavy galvanized Steel and optionally in Stainless steel which provides desired life."
      }
    ];
  
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 font-bold">FEATURES</h2>
          <div className="w-36 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto"></div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                image={feature.image}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const SpecificationsTable = () => {
    const specifications = [
      {
        label: "Panel Height (mm)",
        value: "750"
      },
      {
        label: "Panel Width (mm)",
        value: "750"
      },
      {
        label: "Mesh Size (mm)",
        value: "75x75"
      },
      {
        label: "Wire Diameter (mm)",
        value: "4"
      }
    ];
  
    return (
      <div className="relative w-full min-h-[400px] mb-24 flex items-center justify-center p-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{ 
            backgroundImage: `url(${s2})`, 
            backgroundAttachment: 'fixed', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            filter: 'brightness(0.5)', 
            zIndex: -1 
          }} 
        />
        
        <div className="w-full max-w-4xl z-10">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            SPECIFICATIONS
          </h2>
          <div className="w-36 h-1 bg-gradient-to-r mb-12 from-green-600 to-cyan-400 mx-auto"></div>
          {/* Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {specifications.map((spec) => (
                    <th 
                      key={spec.label}
                      className="bg-black/50 text-white p-4 border border-white/20 text-left font-semibold"
                    >
                      {spec.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {specifications.map((spec) => (
                    <td 
                      key={spec.label}
                      className="bg-black/30 text-white p-4 border border-white/20"
                    >
                      {spec.value}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Multiple Options Text */}
          <p className="text-white mt-4 text-lg">
            Multiple Options Available
          </p>
        </div>
      </div>
    );
  };

// Layout Component
const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <StickyHeader />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);
const Applications = () => {
    const features = [
      {
        title: "BUNKER",
        description: "Concertina coils help establish secure boundaries and deter unauthorized access. They create a visible and physical barrier to warn off intruders and mark the limits of a protected area. Concertina coils are commonly used to delineate property lines, secure perimeters, and restrict entry to sensitive or dangerous zones."
      },
    ];
  
    return (
      <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">APPLICATIONS</h2>
          <div className="w-36 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-navy-800 mx-auto">
            Chain Link Fences offer versatile solutions for various needs, from securing commercial properties to creating safe spaces for schools and farms. Explore our range of applications below.
          </p>
        </div>
        
        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ApplicationsBlock
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </>
    );
  };
// Main Component
const Rapid = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <CoolLoader />;
  }

  return (
    <Layout>
        <Hero />
        <Features />
        <SpecificationsTable/>
        <Applications/>
    </Layout>
  );
};

export default Rapid;