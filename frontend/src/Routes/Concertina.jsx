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
  <div className="relative h-[500px] lg:h-[750px] w-full mt-10 mb-10 md:mb-20 md:mt-0">
  <img
    src={main}
    alt="Contact us hero"
    className="w-full h-full object-cover brightness-50"
  />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
    <h1 className="text-2xl md:text-3xl lg:text-5xl mb-4 font-extrabold">Unifence Concertina Coil</h1>
    <div className="w-16 sm:w-20 md:w-28 lg:w-32 
              h-0.5 sm:h-[3px] md:h-1 
              bg-gradient-to-r from-green-600 to-cyan-400 
              mx-auto 
              mb-4 sm:mb-6 md:mb-8">
</div>
    <p className="text-sm md:text-base lg:text-2xl font-extralight mt-4">
    Razor blade tape coils, a proven security solution, are available in various diameters and blade profiles to adapt to different site conditions.
    </p>
    <Link
to="/contact"
className="relative mt-6 sm:mt-8 md:mt-10 
           px-4 sm:px-6 md:px-8 
           py-2 sm:py-2.5 md:py-3 
           border border-primary-turquoise sm:border-2
           text-primary-lightgreen 
           font-bold 
           text-sm sm:text-base md:text-lg 
           rounded-xl sm:rounded-2xl 
           transition-colors duration-300 
           group overflow-visible 
           inline-block"
>
Enquire Now
<span className="absolute top-1/2 
                 right-[-8px] sm:right-[-10px] md:right-[-12px] 
                 transform opacity-0 -translate-y-1/2 
                 transition-all duration-300 
                 group-hover:opacity-100 
                 group-hover:right-[-12px] sm:group-hover:right-[-16px] md:group-hover:right-[-20px]">
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="long-arrow-alt-right"
    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 
               text-primary-turquoise 
               group-hover:text-primary-turquoise"
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
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full">
      <div className="h-48 sm:h-56 md:h-64 lg:h-[350px] transition-all duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl text-white font-extrabold mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-white font-light mb-3 md:mb-4">{description}</p>
        {profiles && (
          <div className="mt-3 md:mt-4 space-y-2 md:space-y-3">
            <div className="text-sm sm:text-base md:text-lg text-white font-semibold mb-1 md:mb-2">
              Blade Profiles by Deterrence Level:
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              {Object.entries(profiles).map(([level, profile]) => (
                <div 
                  key={level} 
                  className="flex items-center justify-between p-1.5 sm:p-2 rounded-md"
                >
                  <span className="text-sm sm:text-base text-white font-medium">{level}</span>
                  <span className="text-sm sm:text-base text-white">{profile}</span>
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
        description: "The loop size is flexible and can be adjusted to suit various security levels and site dimensions."
      },
      {
        title: "MULTIPLE BLADE PROFILES",
        image: f2,
        description: "Different blade profiles can be selected to address various intrusion threats.",
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
        description: "Coils are constructed from durable galvanized steel or stainless steel, ensuring a long lifespan."
      }
    ];
  
    return (
      <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 font-bold">
            Features of Concertina Coil
          </h2>
          <div className="w-24 sm:w-32 md:w-36 h-0.5 sm:h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
      <div className="relative min-h-screen mb-16 w-full py-16">
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
    const [openQuestion, setOpenQuestion] = useState("");
    
    const faqs = [
      {
        question: "What is it about the design of the concertina coil that makes it so effective?",
        answer: "Concertina coils are a proven security solution, installed atop walls or fences. Made of razor-sharp blades in a coiled pattern, they deter intruders. Available in various sizes and blade configurations, they offer customizable security. Their durable construction, often using galvanized steel or stainless steel, ensures long-lasting performance."
      },
      {
        question: "What are concertina coil mostly used for?",
        answer: "Concertina coils offer a distinct advantage over traditional barbed wire: their flexibility to expand into larger barriers. This makes them ideal for military-style installations, especially along border areas. Beyond military applications, concertina coils find use in prisons, riot control zones, detention centers, airports, railway stations, police facilities, amusement parks, agricultural lands, and various other locations where robust security is paramount."
      },
      {
        question: "What types of concertina coils are available?",
        answer: "Several concertina coil types are available, classified by wire specifications like BTO-12, BTO-18, and CBT-65. Typically constructed from steel or galvanized sheets, they come in single-coil, cross-coil, and double-coil configurations."
      },
      {
        question: "Are the razor wire and concertina coils different?",
        answer: "Razor wire, with its regularly spaced pointed barbs, can inflict cuts and grazes on anyone attempting to breach it. However, concertina coils, armed with sharp blades, pose a significantly greater threat, capable of causing more severe injuries."
      },
      {
        question: "Is it easy to install a concertina coil?",
        answer: "Concertina coils are relatively easy to install, requiring no complex procedures."
      }
    ];
  
    return (
      <div className="py-8 sm:py-12 md:py-16 my-6 sm:my-8 md:my-10 min-h-fit lg:h-[75vh]">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-navy-900 mb-3 sm:mb-4">
          FAQ'S
        </h2>
        <div className="w-8 sm:w-9 md:w-10 
                    h-0.5 sm:h-[3px] md:h-1 
                    bg-gradient-to-r from-green-600 to-cyan-400 
                    mx-auto 
                    mb-6 sm:mb-7 md:mb-8">
        </div>
    
        {/* FAQ Items Container */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.question} className="mb-2 sm:mb-3">
              <button
                className={`w-full px-4 sm:px-5 md:px-6 
                          py-3 sm:py-3.5 md:py-4 
                          text-left flex items-center 
                          bg-gray-800 hover:bg-gray-700 
                          transition-colors duration-200 
                          ${openQuestion === faq.question ? 'rounded-t-lg' : 'rounded-lg'}`}
                onClick={() => setOpenQuestion(openQuestion === faq.question ? null : faq.question)}
              >
                {/* Icon Container */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 
                            flex items-center justify-center 
                            bg-gradient-to-r from-green-600 to-cyan-400 
                            rounded 
                            mr-3 sm:mr-3.5 md:mr-4">
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 
                              text-white transform transition-transform duration-200 
                              ${openQuestion === faq.question ? 'rotate-180' : ''}`}
                  />
                </div>
                {/* Question Text */}
                <span className="text-white font-medium text-sm sm:text-base md:text-lg">
                  {faq.question}
                </span>
              </button>
              
              {/* Answer Panel */}
              {openQuestion === faq.question && (
                <div className="bg-gray-800 
                              px-4 sm:px-5 md:px-6 
                              py-3 sm:py-3.5 md:py-4 
                              rounded-b-lg">
                  <p className="text-white pl-9 sm:pl-10 md:pl-12 text-sm sm:text-base">
                    {faq.answer}
                  </p>
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
      <div className="relative w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-navy-900 mb-3 sm:mb-4">
          BLADE PROFILE OPTIONS
        </h1>
        
        {/* Underline */}
        <div className="w-24 sm:w-32 md:w-36 h-0.5 sm:h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-6 sm:mb-8 md:mb-10"></div>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {blades.map((blade, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Image Container */}
              <div className="bg-white h-32 sm:h-40 md:h-48">
                <img 
                  src={blade.image} 
                  alt={blade.name}
                  className="w-full h-full object-contain p-2 sm:p-3 md:p-4"
                />
              </div>
              
              {/* Text Container */}
              <div className="p-3 sm:p-4">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold text-center">
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
    const applications = [
      {
        title: "DEMARCATION",
        description: "Concertina coils help establish secure boundaries and deter unauthorized access. They create a visible and physical barrier to warn off intruders and mark the limits of a protected area. Concertina coils are commonly used to delineate property lines, secure perimeters, and restrict entry to sensitive or dangerous zones."
      },
      {
        title: "PERIMETER SECURITY",
        description: "Concertina coils are an effective solution for creating a formidable physical barrier for perimeter protection. Their coiled razor-sharp wire design makes it extremely difficult and hazardous for anyone to breach the secured area. Concertina coils can be deployed along fences, walls, or other existing infrastructure to enhance overall perimeter security and deter potential trespassers."
      },
    ];

    const getGridClasses = () => {
      if (applications.length <= 2) {
        return `
          grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8
          ${applications.length === 1 ? 'max-w-md' : 'max-w-2xl'}
          mx-auto
        `;
      }
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8";
    };
  
    return (
      <>
      <div className="py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-xl md:text-3xl lg:text-4xl mb-2 md:mb-4 font-bold text-navy-900">
            APPLICATIONS OF CONCERTINA COIL
          </h2>
          <div className="w-20 sm:w-28 md:w-32 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12 lg:mb-16">
      </div>
        </div>
        
        <div className={getGridClasses()}>
          {applications.map((application, index) => (
            <ApplicationsBlock
              key={index}
              title={application.title}
              description={application.description}
            />
          ))}
        </div>
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
        <BladeProfiles/>
        <Applications/>
        <FAQ />
    </Layout>
  );
};

export default Concertina;