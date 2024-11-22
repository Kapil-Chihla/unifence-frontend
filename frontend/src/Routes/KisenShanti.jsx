import React, { useState,useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import s2 from '../Assets/s2.jpg';
import main from '../Assets/kisenshanti/main.jpg';
import f1 from '../Assets/kisenshanti/f1.jpg'
import f2 from '../Assets/kisenshanti/f2.jpg'
import f3 from '../Assets/kisenshanti/f3.jpg'
import f4 from '../Assets/kisenshanti/f4.jpg'
import f5 from '../Assets/kisenshanti/f5.jpg'
import f6 from '../Assets/kisenshanti/f6.jpg'
import FeatureCard from '../FeatureCard';
import Long from '../Assets/Long-Life.webp';
import { Link } from 'react-router-dom';
import CoolLoader from '../CoolLoader';
import ApplicationsBlock from '../ApplicationsBlock';
// Hero Section Component

const Hero = () => (
  <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] w-full mt-10 md:mt-0">
    <img
      src={main}
      alt="Contact us hero"
      className="w-full h-full object-cover brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-[90%] md:w-[80%] lg:w-[70%]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 font-extrabold">
      Unifence Kisan Shakti
      </h1>
      <div className="w-16 sm:w-28 md:w-32 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12 lg:mb-16">
      </div>
      <p className="text-xs sm:text-base md:text-xl lg:text-2xl font-medium mt-2 sm:mt-3 md:mt-4 px-4">
      Unifence takes pride in presenting the traditional Unifence Kisan Shakti in a fresh, innovative form – Unifence Kisan Shakti! Featuring Red Barbs for improved visibility, Unifence Kisan Shakti is backed by our unparalleled quality assurance.
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
      title: 'Strong',
      image:f1,
      description: 'Double-strand high-tensile wire provides exceptional resistance to cutting, ensuring security against tools like pliers. These barbed wires maintain their shape and integrity year-round, unaffected by temperature fluctuations.'
    },
    {
      title: 'Increased Security & Visibility',
      image:f2,
      description: 'The 4-point IOWA barbs securely lock onto the double-strand twisted wires, creating a formidable barrier. These red barbs enhance visibility, reducing the risk of animal collisions and minimizing potential harm to their hides.'
    },
    {
      title: 'Long Life',
      image:f3,
      description: 'Crafted from premium 275 GSM heavy galvanized wire, these high-tensile twisted barbed wires ensure longevity. For maximum corrosion resistance, consider ECOZAL (Zn 90% + Al 10) coating. Stainless steel wires (304 or 316 grade) are ideal for coastal environments. Surakshak Plus red PVC barbs protect critical areas, extending the wires lifespan and improving visibility.'
    },
    {
      title: 'HASSLE-FREE INSTALLATION',
      image:f4,
      description: 'Installing a barbed wire fence is a straightforward process. Once the fence posts are in place, the barbed wire is simply stretched and secured using brace caps. For Y-arm and concrete posts, the wire is threaded through designated holes. Overall, barbed wire fences offer a quick and efficient fencing solution.'
    },
    {
      title: 'COST-EFFECTIVENESS',
      image:f5,
      description: 'A barbed wire fence is a budget-friendly way to secure any property. The fencing materials, installation process, and maintenance requirements are all relatively inexpensive.'
    },
    {
      title: 'VERSATILITY',
      image:f6,
      description: 'Barbed wire fences offer exceptional value, making them a versatile choice for diverse properties, including agricultural, industrial, residential, and commercial sites.'
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
const GalvanizedTable = () => (
  <div className="mb-8 md:mb-12">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">Galvanized Barbed Wire</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-white min-w-[768px]">
        <thead>
          <tr>
            <th className="border border-white text-center font-extrabold text-white p-2 md:p-4 w-1/3 text-sm md:text-base">Parameter</th>
            <th className="border border-white text-center font-extrabold text-white p-2 md:p-4 w-1/3 text-sm md:text-base">Specifications</th>
            <th className="border border-white text-center font-extrabold text-white p-2 md:p-4 w-1/3 text-sm md:text-base">Standard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">Diameter</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">2/ 2.50 mm</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">BS EN 10218-2</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">No. of Barb points</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">2.0 points & 4.0 points</td>
            <td rowSpan="3" className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">ASTM A121</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">Pitch</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">75mm, 100mm, 125mm & 150mm</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">Tensile Strength</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">350 N/mm2 - 550 N/mm2</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">Roll Length</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">200 Meters</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const PVCTable = () => (
  <div>
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">PVC Coated Barbed Wire</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-white min-w-[768px]">
        <thead>
          <tr>
            <th className="border border-white text-center font-extrabold text-white p-2 md:p-4 w-1/3 text-sm md:text-base">Parameter</th>
            <th className="border border-white text-center font-extrabold text-white p-2 md:p-4 w-1/3 text-sm md:text-base">Specifications</th>
            <th className="border border-white text-center font-extrabold text-white p-2 md:p-4 w-1/3 text-sm md:text-base">Standard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">Diameter</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">
              ID-1.40/OD-2.00mm &<br />
              ID-1.60/OD-2.50mm
            </td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">BS EN 10218-2</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">No. of Barb points</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">2.0 points & 4.0 points</td>
            <td rowSpan="3" className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">ASTM A121</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">Pitch</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">75mm, 100mm, 125mm & 150mm</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">Tensile Strength</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">350 N/mm2 - 550 N/mm2</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">PVC Coating</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">As per requirement</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">BS EN 10245</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">Roll Length</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base">200 Meters</td>
            <td className="border border-white text-center text-white p-2 md:p-4 text-sm md:text-base"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const SpecificationsTable = () => {
  return (
    <div className="relative bg-black min-h-screen py-16 md:py-24 isolate">
      {/* Background container */}
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
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-4 md:mb-6">
          SPECIFICATION OF BARBED WIRE FENCE
        </h1>
        
        {/* Underline */}
        <div className="w-24 md:w-36 h-0.5 md:h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8 md:mb-12"></div>
        
        {/* Tables Container */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          <GalvanizedTable />
          <PVCTable />
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


const Applications = () => {
  const applications = [
    {
      title: "Infrastructure Project",
      description: "Barbed wire fences are widely used to secure critical infrastructure, including highways and railway tracks."
    },
    {
      title: "Agricultural Projects",
      description: "Barbed wire fences safeguard a wide range of agricultural properties, including croplands, orchards, groves, vineyards, nurseries, and ornamental horticulture areas, protecting them from both intruders and wildlife."
    },
    {
      title: "Commercial and Industrial Projects",
      description: "To deter both stray animals and intruders, barbed wire fences are commonly installed around commercial and industrial properties."
    },
    {
      title: "Prisons and Jails",
      description: "Barbed wire fences are a common security measure on prison walls, discouraging escape attempts."
    },
    {
      title: "Military",
      description: "Barbed wire fences create challenging training environments for armed personnel, simulating real-world combat conditions and fostering teamwork."
    }
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
    <div className="py-8 md:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4 font-bold text-navy-900">
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
  );
};


const WhySurakshak = () => {
    const features = [
      "Exceptional durability and long-lasting performance.",
      "Superior resistance to rust and corrosion.",
      "High visibility for enhanced security and safety.",
      "Economical and budget-friendly solution.",
      "Simple and efficient installation process.",
      "Versatile application for various property types.",
      "Reliable and trusted product from a reputable brand."
    ];
  
    return (
      <div className="relative my-8 sm:my-12">
    {/* Main Content Container */}
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-14 lg:py-16 sm:px-6 lg:px-8">
      {/* Title */}
      <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-navy-900 text-center mb-3 sm:mb-4">
        WHY BARBED WIRE FENCE?
      </h1>
      <div className="w-24 sm:w-28 md:w-32 h-0.5 sm:h-[3px] md:h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14"></div>

      {/* Features and Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
        {/* Features List */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start font-medium text-navy-800"
            >
              <span className="text-sm sm:text-xl md:text-2xl mr-3 sm:mr-4 mt-0.5 sm:mt-1">
                →
              </span>
              <span 
                className={`text-base sm:text-lg md:text-lg ${
                  index === features.length - 1 ? 'text-left max-w-xl' : ''
                }`}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Image Container */}
        <div className="order-first lg:order-last">
          <img 
            src={Long}
            alt="Barbed Wire Fence"
            className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  </div>
    );
  };

// Main Component
const KishenShanti = () => {
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
      <div className="bg-white">
        <Hero />
        <Features />
        <div className="relative">
          <SpecificationsTable/>
        </div>
        <WhySurakshak/>
        <Applications/>
        <FAQ />
      </div>
    </Layout>
  );
};

export default KishenShanti;