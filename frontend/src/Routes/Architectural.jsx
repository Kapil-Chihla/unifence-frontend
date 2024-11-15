import React, { useState,useEffect } from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import s2 from '../Assets/s2.jpg';
import afmain from '../Assets/Gabions/afmain.webp'
import af1 from '../Assets/Gabions/af1.jpg'
import af2 from '../Assets/Gabions/af2.jpg'
import af3 from '../Assets/Gabions/af3.webp'
import { Link } from 'react-router-dom';
import CoolLoader from '../CoolLoader';
import ApplicationsBlock from '../ApplicationsBlock';
// Hero Section Component

const Hero = () => (
    <div className="relative h-[750px] w-full mt-10 md:mt-0">
    <img
      src={afmain}
      alt="Contact us hero"
      className="w-full h-full object-cover brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <h1 className="text-5xl mb-4 font-extrabold">Architectural Gabions</h1>
      <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
      <p className="text-2xl font-extralight mt-4">
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
        title: "CUSTOMIZABLE",
        image: af2,
        description: "The loop sizes can be adjusted depending upon the space available and the level of security needed."
      },
      {
        title: "AESTHETICS",
        image: af1,
        description: "The various blade profiles can be perfect to mitigate different types of intrusion threats."
      },
      {
        title: "HIGH DURABILTIY",
        image: af3,
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
    return (
      <div className="relative min-h-screen md:min-h-[750px] mb-24 w-full py-16">
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
        
        {/* Content Container */}
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">SPECIFICATIONS</h1>
          <div className="w-36 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-12"></div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-white">
              <thead>
                <tr>
                  <th className="border border-white text-left text-white font-semibold p-4 bg-black/30 w-1/3">
                    Coating
                  </th>
                  <th className="border border-white text-center text-white font-semibold p-4 bg-black/30 w-1/4">
                    Wire Diameters
                  </th>
                  <th className="border border-white text-center text-white font-semibold p-4 bg-black/30 w-1/4">
                    Std. Sizes (Meter)
                  </th>
                  <th className="border border-white text-center text-white font-semibold p-4 bg-black/30 w-1/4">
                    Std. Mesh Sizes (mm)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* First Group */}
                <tr>
                  <td rowSpan="3" className="border border-white p-4 text-white bg-black/30">
                    GAL - 1(99.99% Zinc) GALUM - 1 (Zinc 95% + Alu5%)
                  </td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">2.50mm</td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">1.0 x 1.0 x 0.5</td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">50x50</td>
                </tr>
                <tr>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">3.00mm</td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">1.0 x 1.0 x 0.5</td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">75x75</td>
                </tr>
                <tr>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">4.00mm</td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">1.5 x 1.0 x 0.5</td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">100x50</td>
                </tr>
                
                {/* Second Group */}
                <tr>
                  <td rowSpan="4" className="border border-white p-4 text-white bg-black/30">
                    GAL - 1 or GALUM -1 +Polyester Powder Coating
                  </td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">4.50mm</td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">2.0 x 1.0 x 0.5</td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">100x100</td>
                </tr>
                <tr>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">5.00mm</td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">2.0 x 1.0 x 1.0</td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">100x150</td>
                </tr>
                <tr>
                  <td className="border border-white p-4 text-white bg-black/30 text-center"></td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">3.0 x 1.0 x 1.0</td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">150x150</td>
                </tr>
                <tr>
                  <td className="border border-white p-4 text-white bg-black/30 text-center"></td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center">4.0 x 1.0 x 1.0</td>
                  <td className="border border-white p-4 text-white bg-black/30 text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
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
        title: "DEMARCATION",
        description: "Concertina coils help establish secure boundaries and deter unauthorized access. They create a visible and physical barrier to warn off intruders and mark the limits of a protected area. Concertina coils are commonly used to delineate property lines, secure perimeters, and restrict entry to sensitive or dangerous zones."
      },
      {
        title: "ARCHITECTURAL SEPC",
        description: "Concertina coils are an effective solution for creating a formidable physical barrier for perimeter protection. Their coiled razor-sharp wire design makes it extremely difficult and hazardous for anyone to breach the secured area. Concertina coils can be deployed along fences, walls, or other existing infrastructure to enhance overall perimeter security and deter potential trespassers."
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
const Architectural = () => {
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

export default Architectural;