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
import FeatureCard from '../FeatureCard';
// Hero Section Component
const Hero = () => (
  <div className="relative h-[550px] lg:h-[750px] w-full mt-10 mb-10 md:mb-20 md:mt-0">
  <img
    src={afmain}
    alt="Contact us hero"
    className="w-full h-full object-cover brightness-50"
  />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
    <h1 className="text-2xl md:text-3xl lg:text-5xl mb-2 font-extrabold">Architectural Gabions</h1>
    <div className="w-16 sm:w-20 md:w-28 lg:w-32 
              h-0.5 sm:h-[3px] md:h-1 
              bg-gradient-to-r from-green-600 to-cyan-400 
              mx-auto 
              mb-4 sm:mb-6">
    </div>
    <p className="text-sm md:text-base lg:text-2xl font-medium mt-4">
    Architectural gabion systems offer a unique and sustainable alternative to traditional concrete structures. Their natural stone aesthetic and versatility allow for creative applications, such as park benches, sculptures, and decorative wall features.
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
        title: "CUSTOMIZABLE",
        image: af2,
        description: "Architectural Welded Gabions offer unparalleled customization flexibility. Their mesh size, wire diameter, dimensions, and panel shape can be tailored to create a wide range of unique designs."
      },
      {
        title: "AESTHETICS",
        image: af1,
        description: "These gabion structures offer a rustic, natural aesthetic, enhancing the visual appeal of any built environment."
      },
      {
        title: "HIGH DURABILTIY",
        image: af3,
        description: "To enhance durability, welded gabions are often coated with polyester powder, providing superior protection against environmental factors and extending their lifespan."
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
    return (
      <div className="relative py-8 sm:py-12 md:py-16 w-full">
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
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3 sm:mb-4">
            SPECIFICATIONS
          </h1>
          
          {/* Underline */}
          <div className="w-24 sm:w-32 md:w-36 h-0.5 sm:h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-6 sm:mb-8 md:mb-12"></div>
          
          {/* Table Container with horizontal scroll */}
          <div className="overflow-x-auto">
            <div className="min-w-[768px] mb-8"> {/* Minimum width to prevent squishing */}
              <table className="w-full border-collapse border border-white">
                <thead>
                  <tr>
                    <th className="border border-white text-left text-white font-semibold p-2 sm:p-3 md:p-4 bg-black/30 w-1/3 text-sm sm:text-base md:text-lg">
                      Coating
                    </th>
                    <th className="border border-white text-center text-white font-semibold p-2 sm:p-3 md:p-4 bg-black/30 w-1/4 text-sm sm:text-base md:text-lg">
                      Wire Diameters
                    </th>
                    <th className="border border-white text-center text-white font-semibold p-2 sm:p-3 md:p-4 bg-black/30 w-1/4 text-sm sm:text-base md:text-lg">
                      Std. Sizes (Meter)
                    </th>
                    <th className="border border-white text-center text-white font-semibold p-2 sm:p-3 md:p-4 bg-black/30 w-1/4 text-sm sm:text-base md:text-lg">
                      Std. Mesh Sizes (mm)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* First Group */}
                  <tr>
                    <td rowSpan="3" className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-sm sm:text-base">
                      GAL - 1(99.99% Zinc) GALUM - 1 (Zinc 95% + Alu5%)
                    </td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">2.50mm</td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">1.0 x 1.0 x 0.5</td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">50x50</td>
                  </tr>
                  <tr>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">3.00mm</td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">1.0 x 1.0 x 0.5</td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">75x75</td>
                  </tr>
                  <tr>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">4.00mm</td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">1.5 x 1.0 x 0.5</td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">100x50</td>
                  </tr>
                  
                  {/* Second Group */}
                  <tr>
                    <td rowSpan="4" className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-sm sm:text-base">
                      GAL - 1 or GALUM -1 +Polyester Powder Coating
                    </td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">4.50mm</td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">2.0 x 1.0 x 0.5</td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">100x100</td>
                  </tr>
                  <tr>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">5.00mm</td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">2.0 x 1.0 x 1.0</td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">100x150</td>
                  </tr>
                  <tr>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base"></td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">3.0 x 1.0 x 1.0</td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">150x150</td>
                  </tr>
                  <tr>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base"></td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base">4.0 x 1.0 x 1.0</td>
                    <td className="border border-white p-2 sm:p-3 md:p-4 text-white bg-black/30 text-center text-sm sm:text-base"></td>
                  </tr>
                </tbody>
              </table>
            </div>
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
    const applications = [
      {
        title: "DEMARCATION",
        description: "Architectural gabions can be used to create distinctive boundaries and barriers, defining spaces within a landscape or property. Their robust construction and natural aesthetic make them a visually appealing and durable solution."
      },
      {
        title: "ARCHITECTURAL SEPC",
        description: "Architectural gabion systems can be used to create a variety of architectural features, such as retaining walls, seating areas, planters, and sculptural elements. These versatile structures can be customized to suit specific design requirements and enhance the overall aesthetic appeal of a space."
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