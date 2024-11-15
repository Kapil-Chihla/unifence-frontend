import React, { useState,useEffect } from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import s2 from '../Assets/s2.jpg';
import wmain from '../Assets/Gabions/wmain.jpg'
import wf1 from '../Assets/Gabions/wf1.jpg'
import wf2 from '../Assets/Gabions/wf2.avif'
import wf3 from '../Assets/Gabions/wf3.webp'
import { Link } from 'react-router-dom';
import CoolLoader from '../CoolLoader';
import ApplicationsBlock from '../ApplicationsBlock';
// Hero Section Component

const Hero = () => (
    <div className="relative h-[750px] w-full mt-10 md:mt-0">
    <img
      src={wmain}
      alt="Contact us hero"
      className="w-full h-full object-cover brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <h1 className="text-5xl mb-4 font-extrabold">Woven Gabions</h1>
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
        image: wf1,
        description: "The loop sizes can be adjusted depending upon the space available and the level of security needed."
      },
      {
        title: "LONG LIFE",
        image: wf2,
        description: "The various blade profiles can be perfect to mitigate different types of intrusion threats."
      },
      {
        title: "MODULAR",
        image: wf3,
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
    const data = {
      meshSizes: ['80 X 100', '60 X 80\n(Mattress)', '100X120'],
      meshWire: {
        galvanized: 'Galvanized : 2.20 & 3.00 (BS EN 10218-2 Class A)',
        pvc: 'PVC : ID-2.20/OD - 3.20mm & ID-3.00/OD-4.00mm (BS EN 10218-2 Class A)'
      },
      selvedgeWire: {
        galvanized: 'Galvanized : 2.40 & 3.50 (BS EN 10218-2 Class A)',
        pvc: 'PVC : ID-2.40/OD - 3.40mm & ID-3.40/OD-4.40mm (BS EN 10218-2 Class A)'
      },
      tieWire: {
        galvanized: 'Galvanized : 2.20 & 2.40 (BS EN 10218-2 Class A)',
        pvc: 'PVC : ID-2.20/OD - 3.20mm & ID-2.40/OD-3.40mm (BS EN 10218-2 Class A)'
      },
      gabionBox: ['1X1X1', '2X1X1', '3X1X1', '4X1X1'],
      gabionMattress: ['1X1X0.17', '1X1X0.23', '1X1X0.3']
    };
  
    return (
      <div className="relative min-h-screen md:min-h-[500px] mb-24 w-full overflow-hidden">
        {/* Background div */}
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
        
        {/* Content container */}
        <div className="container mx-auto px-4 py-16">
          {/* Title */}
          <h1 className="text-4xl font-bold text-white text-center mb-4">SPECIFICATIONS</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-12"></div>
          {/* Table container */}
          <div className="overflow-x-auto bg-transparent">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-4 text-white font-extrabold text-left border-2 border-white bg-black/30">
                    Mesh Size<br/>(mm)
                  </th>
                  <th className="p-4 text-white font-extrabold text-left border-2 border-white bg-black/30">
                    Mesh Wire (mm)
                  </th>
                  <th className="p-4 text-white font-extrabold text-left border-2 border-white bg-black/30">
                    Selvedge Wire (mm)
                  </th>
                  <th className="p-4 text-white font-extrabold text-left border-2 border-white bg-black/30">
                    Tie Wire (mm)
                  </th>
                  <th className="p-4 text-white font-extrabold text-left border-2 border-white bg-black/30">
                    Gabion Box<br/>Dimensions<br/>(Meters)
                  </th>
                  <th className="p-4 text-white font-extrabold text-left border-2 border-white bg-black/30">
                    Gabion Mattress<br/>Dimensions (Meters)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-black/30">
                  <td className="p-4 text-white align-top border-2 border-white">
                    {data.meshSizes.map((size, index) => (
                      <div key={index} className="whitespace-pre-line mb-2">{size}</div>
                    ))}
                  </td>
                  <td className="p-4 text-white align-top border-2 border-white">
                    <div className="mb-4">{data.meshWire.galvanized}</div>
                    <div>{data.meshWire.pvc}</div>
                  </td>
                  <td className="p-4 text-white align-top border-2 border-white">
                    <div className="mb-4">{data.selvedgeWire.galvanized}</div>
                    <div>{data.selvedgeWire.pvc}</div>
                  </td>
                  <td className="p-4 text-white align-top border-2 border-white">
                    <div className="mb-4">{data.tieWire.galvanized}</div>
                    <div>{data.tieWire.pvc}</div>
                  </td>
                  <td className="p-4 text-white align-top border-2 border-white">
                    {data.gabionBox.map((size, index) => (
                      <div key={index} className="mb-2">{size}</div>
                    ))}
                  </td>
                  <td className="p-4 text-white align-top border-2 border-white">
                    {data.gabionMattress.map((size, index) => (
                      <div key={index} className="mb-2">{size}</div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Multiple Options Available text */}
          <p className="text-white mt-6 text-center">Multiple Options Available</p>
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
        title: "LAND RETENSION",
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
const WovenGabions = () => {
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

export default WovenGabions;