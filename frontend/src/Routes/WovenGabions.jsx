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
import FeatureCard from '../FeatureCard';
// Hero Section Component
const Hero = () => (
  <div className="relative h-[600px] lg:h-[750px] w-full mt-10 mb-10  md:mt-0">
  <img
    src={wmain}
    alt="Contact us hero"
    className="w-full h-full object-cover brightness-50"
  />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
    <h1 className="text-2xl md:text-3xl lg:text-5xl mb-2 font-extrabold">Woven Gabions</h1>
    <div className="w-16 sm:w-20 md:w-28 lg:w-32 
              h-0.5 sm:h-[3px] md:h-1 
              bg-gradient-to-r from-green-600 to-cyan-400 
              mx-auto 
              mb-4 sm:mb-6">
    </div>
    <p className="text-sm md:text-base lg:text-2xl font-medium mt-4">
    Woven gabion systems, constructed from hexagonal mesh with double-twist technology, offer exceptional strength and durability. When filled with stones, these gabions can withstand significant earth pressure, making them ideal for landslide prevention, soil erosion control, and stabilization of marshy terrains.
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

  
  const Features = () => {
    const features = [
      {
        title: "STRONG MESH STRUCTURE",
        image: wf1,
        description: "Woven gabion systems, constructed from hexagonal mesh with double-twist technology, offer exceptional strength and durability. The hexagonal mesh design ensures optimal tension distribution, while the double-twist construction prevents damage spread. Precision mechanical weaving guarantees uniformity. When filled with stones, these gabions can withstand significant earth pressure, making them ideal for erosion control and land stabilization."
      },
      {
        title: "LONG LIFE",
        image: wf2,
        description: "We offer a range of coatings, including Galvanized Iron (GI), Galvanized Iron with PVC coating (GI+PVC), Galfan (Zinc-Aluminum alloy), Thermo Plastic Coated (TPC), and the latest Polyamide 6 (PA6), to suit various site conditions and ensure long-lasting performance of our gabion systems. These coatings provide superior corrosion resistance, extending the lifespan of the gabions."
      },
      {
        title: "MODULAR",
        image: wf3,
        description: "Gabion boxes arrive in convenient, pre-fabricated sheets, simplifying assembly. Unlike traditional construction methods, they require no cement, water, or sand, making installation quick and easy."
      }
    ];
  
    return (
      <div className="py-8 sm:py-12 md:py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 font-bold">Features</h2>
          <div className="w-12 sm:w-14 md:w-16 
                      h-0.5 sm:h-[3px] md:h-1 
                      bg-gradient-to-r from-green-600 to-cyan-400 
                      mx-auto">
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
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
      <div className="relative h-[400px] sm:h-[550px] md:h-[600px] mb-10 w-full overflow-hidden">
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
        <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 md:py-16">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-2 sm:mb-4">SPECIFICATIONS</h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-6 sm:mb-8 md:mb-12"></div>
          
          {/* Table container */}
          <div className="overflow-x-auto bg-transparent">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base text-white font-extrabold text-left border-2 border-white bg-black/30">
                    Mesh Size<br/>(mm)
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base text-white font-extrabold text-left border-2 border-white bg-black/30">
                    Mesh Wire (mm)
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base text-white font-extrabold text-left border-2 border-white bg-black/30">
                    Selvedge Wire (mm)
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base text-white font-extrabold text-left border-2 border-white bg-black/30">
                    Tie Wire (mm)
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base text-white font-extrabold text-left border-2 border-white bg-black/30">
                    Gabion Box<br/>Dimensions<br/>(Meters)
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base text-white font-extrabold text-left border-2 border-white bg-black/30">
                    Gabion Mattress<br/>Dimensions (Meters)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-black/30">
                  <td className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base text-white align-top border-2 border-white">
                    {data.meshSizes.map((size, index) => (
                      <div key={index} className="whitespace-pre-line mb-2">{size}</div>
                    ))}
                  </td>
                  <td className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base text-white align-top border-2 border-white">
                    <div className="mb-4">{data.meshWire.galvanized}</div>
                    <div>{data.meshWire.pvc}</div>
                  </td>
                  <td className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base text-white align-top border-2 border-white">
                    <div className="mb-4">{data.selvedgeWire.galvanized}</div>
                    <div>{data.selvedgeWire.pvc}</div>
                  </td>
                  <td className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base text-white align-top border-2 border-white">
                    <div className="mb-4">{data.tieWire.galvanized}</div>
                    <div>{data.tieWire.pvc}</div>
                  </td>
                  <td className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base text-white align-top border-2 border-white">
                    {data.gabionBox.map((size, index) => (
                      <div key={index} className="mb-2">{size}</div>
                    ))}
                  </td>
                  <td className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base text-white align-top border-2 border-white">
                    {data.gabionMattress.map((size, index) => (
                      <div key={index} className="mb-2">{size}</div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Multiple Options Available text */}
          <p className="text-xs sm:text-sm md:text-base text-white mt-4 sm:mt-5 md:mt-6 text-center">Multiple Options Available</p>
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
    const applications = [
      {
        title: "DEMARCATION",
        description: "Gabion walls can clearly define property boundaries, providing a physical barrier and visual demarcation.They can be used to separate roadways from adjacent areas, improving safety and aesthetics.Gabion walls can enhance security by creating physical barriers around sensitive areas, such as industrial sites or government facilities."
      },
      {
        title: "LAND RETENSION",
        description: "Gabion walls can be used to stabilize slopes, preventing erosion and landslides. They can be used to protect riverbanks from erosion caused by water flow and wave action. Gabion walls can be used to create retaining walls, supporting elevated structures or terraces. Gabion walls can be used to create unique landscaping features, such as garden walls, seating areas, and water features."
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
          <h2 className="text-xl md:text-3xl lg:text-4xl mb-2 md:mb-6 font-bold text-navy-900">
            APPLICATIONS
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