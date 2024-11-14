import React, { useState,useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import s2 from '../Assets/s2.jpg';
import main from '../Assets/concertina/main.jpg'
import f1 from '../Assets/concertina/f1.png'
import f2 from '../Assets/concertina/f2.jpeg'
import f3 from '../Assets/concertina/f3.jpeg'
import { Link } from 'react-router-dom';
import CoolLoader from '../CoolLoader';
import Short from '../Assets/Short-Blade.webp'
import Tear from '../Assets/Tear-Blade.webp'
import LongBlade from '../Assets/Long-Blade.webp'
import Fish from '../Assets/Fish-Hook-Blade.webp'
import Medium from '../Assets/Medium-Blade.webp'
import ApplicationsBlock from '../ApplicationsBlock';
// Hero Section Component

const Hero = () => (
    <div className="relative h-[750px] w-full mt-10 md:mt-0">
    <img
      src={main}
      alt="Contact us hero"
      className="w-full h-full object-cover brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <h1 className="text-5xl mb-4 font-extrabold">Unifence Concertina Coil</h1>
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
        title: "VARIABLE LOOP SIZES",
        image: f1,
        description: "The loop sizes can be adjusted depending upon the space available and the level of security needed."
      },
      {
        title: "MULTIPLE BLADE PROFILES",
        image: f2,
        description: "The various blade profiles can be perfect to mitigate different types of intrusion threats.",
        profiles: {
          "*": "Small",
          "**": "Medium",
          "***": "Long",
          "****": "Tear",
          "*****": "Fishhook"
        }
      },
      {
        title: "LONG LIFE",
        image: f3,
        description: "Coils are made of heavy galvanized Steel and optionally in Stainless steel which provides desired life."
      }
    ];
  
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 font-bold">Features of Concertina Coil</h2>
          <div className="w-36 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto"></div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                image={feature.image}
                description={feature.description}
                profiles={feature.profiles}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };


  const SpecificationsTable = () => {
    return (
      <div className="relative min-h-screen w-full py-16">
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
        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
            SPECIFICATION OF CONCERTINA COIL
          </h1>
          <div className="w-64 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto"></div>
          {/* First Table */}
          <div className="overflow-x-auto">
            <table className="w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="border border-white text-white font-extrabold p-3 text-left">Parameter</th>
                  <th className="border border-white text-white p-3 text-left font-extrabold">Specifications</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Diameter range', '450mm - 1000mm'],
                  ['Core wire diameter & Tolerance', '2.50mm'],
                  ['Blade Thickness & Tolerance', '0.40mm to 0.60mm'],
                  ['Blade Material', 'Galvanized Sheet, SS430, SS304, SS316'],
                  ['Tensile Strength', '1250 - 1350 & 1350 - 1550N/mm2'],
                  ['Wire Material', 'Galvanized Wire, SS204Cu, SS304, SS316']
                ].map(([param, spec], idx) => (
                  <tr key={idx}>
                    <td className="border border-white text-white p-3">{param}</td>
                    <td className="border border-white text-white p-3">{spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          {/* Second Table */}
          <div className="overflow-x-auto">
            <table className="w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="border border-white font-extrabold text-white p-3 text-left">Parameter</th>
                  <th className="border border-white font-extrabold text-white p-3">SBBT</th>
                  <th className="border border-white font-extrabold text-white p-3">MBBT</th>
                  <th className="border border-white font-extrabold text-white p-3">LBBT</th>
                  <th className="border border-white font-extrabold text-white p-3">TBBT</th>
                  <th className="border border-white font-extrabold text-white p-3">FBBT</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Blade Profile', 'Short Blade', 'Medium Balde', 'Long Blade', 'Tear Blade', 'Fish Hook Blade'],
                  ['Blade Length', '10mm', '22mm', '65mm', '30mm', '66mm'],
                  ['Core wire diameter', '2.50mm', '2.50mm', '2.50mm', '2.50mm', '2.50mm'],
                  ['Distance between Barb', '25mm', '35mm', '100mm', '50mm', '101mm'],
                  ['No. of loop per coil', '56', '56', '56', '56', '56']
                ].map((row, idx) => (
                  <tr key={idx}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="border border-white text-white p-3 text-center">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  

// FAQ Section Component

const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState("What is the warranty of the product?");
    
    const faqs = [
      {
        question: "What is the line wire diameter of a barbed wire fence?",
        answer: "Available in three configurations - 1.7 mm, 2 mm, 2.5 mm"
      },
      {
        question: "What is the barbed wire diameter?",
        answer: "Available in three configurations - 1.6mm, 2mm & 2.5 mm"
      },
      {
        question: "What is the barb spacing?",
        answer: "Our standard configurations are 75 mm & 100 mm. However, we have the capacity of manufacturing barb wire with a barb spacing of 125 mm, which is usually make to order."
      },
      {
        question: "What IS standard do you manufacture?",
        answer: "We manufacture IOWA standard barbed wires. However, we also have a BIS license with us."
      },
      {
        question: "Do you have standardized packing for barbed wire?",
        answer: "Yes, we do have proper packing standards for barb wires."
      },
      {
        question: "Do you have uniform length for barbed wires?",
        answer: "Yes, we do have 200 m of fixed length for the barbed wires."
      }
    ];
  
    return (
      <div className="py-16 my-10 h-[80vh] sm:h-[75vh]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-navy-900 mb-4">FAQ'S OF UNICO FENCE</h2>
          <div className="w-28 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="mb-2">
                <button
                  className={`w-full px-6 py-4 text-left flex items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-200 ${
                    openQuestion === faq.question ? 'rounded-t-lg' : 'rounded-lg'
                  }`}
                  onClick={() => setOpenQuestion(openQuestion === faq.question ? null : faq.question)}
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-green-600 to-cyan-400 rounded mr-4">
                    <ChevronDown
                      className={`w-6 h-6 text-white transform transition-transform duration-200 ${
                        openQuestion === faq.question ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <span className="text-white font-medium">{faq.question}</span>
                </button>
                {openQuestion === faq.question && (
                  <div className="bg-gray-800 px-6 py-4 rounded-b-lg">
                    <p className="text-white pl-12">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
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
const BladeProfiles = () => {
    const blades = [
      {
        name: 'FISH HOOK BLADE',
        width: '66mm',
        image: Fish
      },
      {
        name: 'LONG BLADE',
        width: '65mm',
        image: LongBlade
      },
      {
        name: 'MEDIUM BLADE',
        width: '22mm',
        image: Medium
      },
      {
        name: 'SHORT BLADE',
        width: '10mm',
        image: Short
      },
      {
        name: 'TEAR BLADE',
        width: '30mm',
        image: Tear
      }
    ];
  
    return (
        <div className="relative h-auto w-full mb-32 p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-4">
            BLADE PROFILE OPTIONS
          </h1>
          <div className="w-36 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blades.map((blade, index) => (
              <div key={index} className="bg-gray-800">
                <div className="bg-white h-48"> {/* Fixed height container */}
                  <img 
                    src={blade.image} 
                    alt={blade.name}
                    className="w-full h-full object-contain px-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white text-xl font-bold text-center">
                    {blade.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

const Applications = () => {
    const features = [
      {
        title: "DEMARCATION",
        description: "Concertina coils help establish secure boundaries and deter unauthorized access. They create a visible and physical barrier to warn off intruders and mark the limits of a protected area. Concertina coils are commonly used to delineate property lines, secure perimeters, and restrict entry to sensitive or dangerous zones."
      },
      {
        title: "PERIMETER SECURITY",
        description: "Concertina coils are an effective solution for creating a formidable physical barrier for perimeter protection. Their coiled razor-sharp wire design makes it extremely difficult and hazardous for anyone to breach the secured area. Concertina coils can be deployed along fences, walls, or other existing infrastructure to enhance overall perimeter security and deter potential trespassers."
      },
    ];
  
    return (
      <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Applications of Concertina Coil</h2>
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
const Concertina = () => {
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
        <FAQ />
        <BladeProfiles/>
        <Applications/>
    </Layout>
  );
};

export default Concertina;