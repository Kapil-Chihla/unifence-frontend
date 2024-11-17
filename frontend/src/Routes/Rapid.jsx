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
import FeatureCard from '../FeatureCard';
// Hero Section Component

const Hero = () => (
  <div className="relative h-[600px] lg:h-[750px] w-full mt-10 mb-6 md:mt-0">
  <img
    src={rmain}
    alt="Contact us hero"
    className="w-full h-full object-cover brightness-50"
  />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
    <h1 className="text-2xl md:text-3xl lg:text-5xl mb-2 md:mb-6 font-extrabold">Rapid Development Barrier
    </h1>
    <div className="w-16 sm:w-20 md:w-28 lg:w-32 
              h-0.5 sm:h-[3px] md:h-1 
              bg-gradient-to-r from-green-600 to-cyan-400 
              mx-auto 
              mb-4 sm:mb-6">
    </div>
    <p className="text-sm md:text-base lg:text-2xl font-medium mt-4">
    Rapid Deployment Barriers are robust security structures composed of welded mesh panels lined with geotextile fabric. These barriers are filled with materials like sand, debris, or stones to enhance their strength and stability.
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
        title: "Simple to Install",
        image: rf1,
        description: "RDB boxes are easily transportable, arriving in collapsible stacks. They can be quickly assembled into robust structures, making them ideal for rapid deployment in various security scenarios."
      },
      {
        title: "Rigid & Stable",
        image: rf2,
        description: "The welded mesh panels are constructed using a robust resistance welding process, ensuring high weld strength and structural integrity. The V-shaped bends and additional reinforcing wires at the bottom further enhance stability, preventing the panels from bending under the weight of the infill material."
      },
      {
        title: "Long Life",
        image: rf3,
        description: "The powder-coated panels offer superior corrosion resistance, ensuring the long-lasting durability of the RDB even in harsh environmental conditions."
      }
    ];
  
    return (
      <div className="py-8 sm:py-12 md:py-16">
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
      <div className="relative w-full h-auto min-h-[300px] sm:min-h-[350px] md:min-h-[400px] mb-8 sm:mb-16  flex items-center justify-center p-3 sm:p-4 md:p-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{ 
            backgroundImage: `url(${s2})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            filter: 'brightness(0.5)', 
            zIndex: -1 
          }} 
        />
        
        <div className="w-full max-w-4xl z-10">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-2 sm:mb-3 md:mb-4">
            SPECIFICATIONS
          </h2>
          <div className="w-24 sm:w-28 md:w-36 h-0.5 md:h-1 bg-gradient-to-r mb-6 sm:mb-8 md:mb-12 from-green-600 to-cyan-400 mx-auto"></div>
  
          {/* Table Container */}
          <div className="w-full overflow-x-auto -mx-3 sm:mx-0">
            <div className="min-w-[600px] px-3 sm:px-0">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {specifications.map((spec) => (
                      <th 
                        key={spec.label}
                        className="bg-black/50 text-white text-xs sm:text-sm md:text-base p-2 sm:p-3 md:p-4 border border-white/20 text-left font-semibold"
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
                        className="bg-black/30 text-white text-xs sm:text-sm md:text-base p-2 sm:p-3 md:p-4 border border-white/20"
                      >
                        {spec.value}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Multiple Options Text */}
          <p className="text-white mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-center">
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

const ApplicationsBlock = ({ title, description }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 md:p-10 
                  max-w-xl mx-auto w-full
                  transition-transform hover:scale-105">
    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white mb-3 sm:mb-4 text-center">
      {title}
    </h3>
    <p className="text-sm sm:text-base md:text-lg text-white text-center">
      {description}
    </p>
  </div>
);
const Applications = () => {
    const applications = [
      {
        title: "BUNKER",
        description: "RDB bunkers provide a versatile and rapidly deployable solution for various security applications. These modular structures can be quickly assembled to create secure and fortified positions, offering protection in military, law enforcement, emergency response, and civil disturbance scenarios. They provide temporary shelters, observation posts, command centers, and secure zones, enhancing the safety and security of personnel and critical infrastructure."
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
       <div className="py-6 sm:py-8 md:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3 md:mb-4 font-bold text-navy-900">
          APPLICATIONS
        </h2>
        <div className="w-20 sm:w-28 md:w-32 
                      h-0.5 sm:h-[3px] md:h-1 
                      bg-gradient-to-r from-green-600 to-cyan-400 
                      mx-auto 
                      mb-6 sm:mb-8 md:mb-10">
        </div>
      </div>
      
      {/* Centered container for single application */}
      <div className="flex justify-center items-center px-4 sm:px-6 md:px-8">
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