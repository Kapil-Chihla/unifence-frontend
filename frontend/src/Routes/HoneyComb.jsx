import React, { useState,useEffect } from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import s2 from '../Assets/s2.jpg';
import main from '../Assets/honeycomb/main.jpg';
import f1 from '../Assets/honeycomb/f1.webp';
import f2 from '../Assets/honeycomb/f2.webp';
import f3 from '../Assets/honeycomb/f3.webp';
import FeatureCard from '../FeatureCard';
import { Link } from 'react-router-dom';
import CoolLoader from '../CoolLoader';

// Hero Section Component
const Hero = () => (
  <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] w-full mt-10 md:mt-0">
    <img
      src={main}
      alt="Contact us hero"
      className="w-full h-full object-cover brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-[90%] md:w-[80%] lg:w-[70%]">
      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 font-extrabold">
      Henoycomb Fence
      </h1>
      <div className="w-16 sm:w-28 md:w-32 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12 lg:mb-16">
      </div>
      <p className="text-xs sm:text-base md:text-xl lg:text-2xl font-medium mt-2 sm:mt-3 md:mt-4 px-4">
      A hexagonal-shaped demarcation fence featuring triple-twist mesh offers superior strength compared to traditional woven fences. It is easy to install, highly durable, and built to last, making it an excellent choice for secure and long-lasting boundary solutions.
      </p>
      <Link
        to="/contact"
        className="relative inline-block mt-4 sm:mt-6 md:mt-8 lg:mt-10 
                  px-4 sm:px-6 md:px-8 
                  py-1.5 sm:py-2 md:py-3
                  border border-primary-turquoise 
                  text-primary-lightgreen 
                  text-sm sm:text-base md:text-lg
                  font-medium sm:font-bold 
                  rounded-xl sm:rounded-2xl 
                  transition-colors duration-300 
                  group overflow-visible"
      >
        Enquire Now
        <span className="absolute top-1/2 right-[-8px] sm:right-[-12px] transform opacity-0 -translate-y-1/2 transition-all duration-300 group-hover:opacity-100 group-hover:right-[-16px] sm:group-hover:right-[-20px]">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="long-arrow-alt-right"
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary-turquoise group-hover:text-primary-turquoise"
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


// Features Section Component
const Features = () => {
  const features = [
    {
      title: 'Secure',
      image:f1,
      description: 'The triple-twist construction and unique Honeycomb Fence® design ensure that the structural integrity of the mesh remains intact, even if a single wire is intentionally cut or accidentally broken.'
    },
    {
      title: 'Strong',
      image:f2,
      description: 'The Honeycomb Fence® structure evenly distributes any impact across the entire mesh, while its flexible fabric absorbs the force, making it an ideal choice for fencing football fields and other sports arenas.'
    },
    {
      title: 'Long Life',
      image:f3,
      description: 'Offered in various coating options to suit different environmental and site conditions, these coatings help prevent corrosion and extend the product lifespan. Available Coatings: Zinc EcoZal (90% Zn + 10% Al), PVC Glued, PVC Fusion Bonded, and PA6.'
    }
  ];

  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-3xl md:text-4xl mb-2 mb:mb-4 font-bold tracking-wider">
          FEATURES
        </h2>
        <div className="w-16 sm:w-28 md:w-32 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12 lg:mb-16">
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
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
  );
};
const HoneycombSpecs = () => {
  const specifications = [
    {
      name: "Wire",
      parameter: "Diameter",
      specification: "2.7 mm"
    },
    {
      name: "Honeycomb Fabric",
      parameter: "Mesh Size",
      specification: "80 X 100 mm,\n100X120 mm"
    },
    {
      name: "Circular Hollow Section Post",
      parameter: "Dimensions",
      specification: "Straining Post - 76 x 3 mm\nIntermediate Post - 60 x 3mm"
    },
    {
      name: "Diagonal Support",
      parameter: "Dimension",
      specification: "48 x 2mm"
    },
    {
      name: "Coating",
      parameter: "Finish",
      specification: "Fabric - PVC\nPost - PPC"
    }
  ];

  return (
    <div className="relative bg-black/30 min-h-[450px] sm:min-h-[650px] py-6 sm:py-8 md:py-10 mb-8">
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
      
      <div className="relative z-10 px-3 sm:px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 md:mb-6 text-white">
            STANDARD SPECIFICATIONS OF HONEYCOMB FENCE
          </h1>
          <div className="w-20 sm:w-36 md:w-48 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12 lg:mb-16">
      </div>
          
          {/* Table Container with horizontal scroll */}
          <div className="w-full max-w-4xl mx-auto overflow-x-auto pb-4">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="border border-white/30 font-extrabold bg-black/30 text-white p-2 sm:p-3 md:p-4 text-left text-xs sm:text-sm md:text-base">
                    Name
                  </th>
                  <th className="border border-white/30 font-extrabold bg-black/30 text-white p-2 sm:p-3 md:p-4 text-left text-xs sm:text-sm md:text-base">
                    Parameter
                  </th>
                  <th className="border border-white/30 font-extrabold bg-black/30 text-white p-2 sm:p-3 md:p-4 text-left text-xs sm:text-sm md:text-base">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr key={index}>
                    <td className="border border-white/30 bg-black/20 text-white p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base">
                      {spec.name}
                    </td>
                    <td className="border border-white/30 bg-black/20 text-white p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base">
                      {spec.parameter}
                    </td>
                    <td className="border border-white/30 bg-black/20 text-white p-2 sm:p-3 md:p-4 whitespace-pre-line text-xs sm:text-sm md:text-base">
                      {spec.specification}
                    </td>
                  </tr>
                ))}
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
        title: 'Demarcation',
        description: 'Honeycomb fencing, with its distinctive hexagonal mesh design, provides a strong, durable, and visually appealing solution for various demarcation applications. It can be used to define property boundaries, secure perimeters, separate roadways, and create designated zones within parks and recreational areas. This versatile fencing option offers a balance of strength, aesthetics, and functionality, making it an ideal choice for diverse projects.'
      },
    ];
  
    return (
      <div className="py-6 sm:py-8 md:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3 md:mb-4 font-bold text-navy-900">
          APPLICATIONS OF HONEYCOMB FENCE
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
    );
};

// Main Component
const HoneyComb = () => {
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
      <HoneycombSpecs/>
      <Applications/>
    </Layout>
  );
};

export default HoneyComb;