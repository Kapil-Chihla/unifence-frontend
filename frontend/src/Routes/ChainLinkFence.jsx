import React, { useState,useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import main from '../Assets/chainlink/main.avif';
import s2 from '../Assets/s2.jpg'
import FeatureCard from '../FeatureCard';
import f1 from '../Assets/chainlink/f1.jpeg';
import f2 from '../Assets/chainlink/f2.png';
import f3 from '../Assets/chainlink/f3.jpeg'
import f4 from '../Assets/chainlink/f4.png'
import f5 from '../Assets/chainlink/f5.png'
import f6 from '../Assets/chainlink/f6.png'
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
      Chain Link Fence
      </h1>
      <div className="w-16 sm:w-28 md:w-32 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12 lg:mb-16">
      </div>
      <p className="text-xs sm:text-base md:text-xl lg:text-2xl font-medium mt-2 sm:mt-3 md:mt-4 px-4">
      When selecting the perfect Chain Link Fence for your property, factors like fabric type, wire diameter, mesh size, and surface coatings are crucial. With Unifence, you have access to a diverse selection of options tailored to meet your specific site needs.
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
      title: 'Easy Installation',
      image:f1,
      description: 'Modular clamping fixtures enable quick and easy installation, eliminating the need for on-site welding or fabrication, thus reducing overall costs.'
    },
    {
      title: 'Slope/Gradient Installation',
      image:f2,
      description: 'The fence can be effortlessly extended to adapt to uneven mountain terrain, enhancing its versatility.'
    },
    {
      title: 'Logistics friendly',
      image:f3,
      description: 'Chain link fabric is conveniently rolled into compact bundles, making it easy to transport and handle.'
    },
    {
      title: 'Long Life',
      image:f4,
      description: 'Available in a variety of coating options to suit environmental and site conditions, helping to prevent corrosion and extend the lifespan of the structure. Coating options include Zinc, EcoZal (Zn 90% + Al 10%), PVC Coated, Glued PVC, and Fusion Bonded PA6.'
    },
    {
      title: 'Terminations',
      image:f5,
      description: 'The top and bottom of the mesh can be customized to either both knuckled, both twisted, or a combination of both, depending on the required level of security.'
    },
    {
      title: 'Variable Chain Link mesh size',
      image:f6,
      description: 'The mesh size of the chain link can be adjusted based on the application and security requirements.'
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

const SpecificationsTable = () => {
  return (
    <div className="relative mb-8 sm:mb-12 bg-black/30 w-full">
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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-4 py-6 sm:py-12">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-2 sm:mb-4">
          SPECIFICATIONS
        </h2>
        <div className="w-20 sm:w-28 md:w-32 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12 lg:mb-16">
      </div>
        
        {/* Responsive container with horizontal scroll for small screens */}
        <div className="w-full -mx-2 sm:mx-0">
          <div className="min-w-full overflow-x-auto px-2 sm:px-4 pb-4">
            {/* First Table */}
            <table className="w-full border-collapse mb-4 sm:mb-8 min-w-[800px]">
              <thead className="whitespace-nowrap">
                <tr>
                  <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 font-semibold text-xs sm:text-sm md:text-base">
                    Mesh Size (mm)
                  </th>
                  <th colSpan="2" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 font-semibold text-center text-xs sm:text-sm md:text-base">
                    Wire Diameter (mm)
                  </th>
                  <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 font-semibold text-xs sm:text-sm md:text-base">
                    Coating Standards
                  </th>
                  <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 font-semibold text-xs sm:text-sm md:text-base">
                    Fabric Length (Meters)
                  </th>
                </tr>
                <tr>
                  <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4"></th>
                  <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 font-semibold text-xs sm:text-sm md:text-base">
                    Galvanized
                  </th>
                  <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 font-semibold text-xs sm:text-sm md:text-base">
                    PVC Coated
                  </th>
                  <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4"></th>
                  <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 text-xs sm:text-sm md:text-base">25 x 25</td>
                  <td rowSpan="4" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 text-center text-xs sm:text-sm md:text-base">
                    2.00 - 4.00 (As per BS EN 10218-2)
                  </td>
                  <td rowSpan="4" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 text-center text-xs sm:text-sm md:text-base">
                    ID 1.40/OD 2.00 - ID 4.00/OD 5.00 (As per BS EN 10218-2)
                  </td>
                  <td rowSpan="4" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 text-xs sm:text-sm md:text-base">
                    <div>Galvanized: ASTM 392 Class 1 & 2 ASTM A641 Class 3,4,5 / A,B,C BS EN 10244-2 Class A,B,C & D</div>
                    <div className="mt-2">PVC Coating: BS EN 10245</div>
                  </td>
                  <td rowSpan="4" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 text-center text-xs sm:text-sm md:text-base">
                    10 - 25
                  </td>
                </tr>
                <tr>
                  <td className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 text-xs sm:text-sm md:text-base">50 x 50</td>
                </tr>
                <tr>
                  <td className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 text-xs sm:text-sm md:text-base">65 x 65</td>
                </tr>
                <tr>
                  <td className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 text-xs sm:text-sm md:text-base">75 x 75</td>
                </tr>
              </tbody>
            </table>

            {/* Second Table */}
            <table className="w-full border-collapse min-w-[800px]">
              <thead className="whitespace-nowrap">
                <tr>
                  <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 font-semibold text-xs sm:text-sm md:text-base">
                    Post Section
                  </th>
                  <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 font-semibold text-xs sm:text-sm md:text-base">
                    Diameter
                  </th>
                  <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 font-semibold text-xs sm:text-sm md:text-base">
                    Coating
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 text-xs sm:text-sm md:text-base">
                    Circular hollow Section
                  </td>
                  <td className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 text-xs sm:text-sm md:text-base">
                    32-150mm (ASTM A53 & BS EN 1387)
                  </td>
                  <td className="border border-white bg-zinc-800/50 text-white p-2 sm:p-4 text-xs sm:text-sm md:text-base">
                    <div>Hot Dip Galvanization: 300GSM to 610GSM (ASTM A53, ASTM F1083 & BS EN 1461)</div>
                    <div>PVC: Min 250 Microns</div>
                    <div>Polyester Powder Coating: 60 - 80 Microns</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
        question: "What is the wire diameter of a chain link fence?",
        answer: [
          "CLF - normally 2.5 mm (can also be referred to as 12 gauge) or 3 mm (can also be referred to as 10 gauge)",
          "HC - Line wire (mesh wire) - 2.7 mm & Salvage wire - 3.4 mm Placed at the edges of the fabric"
        ]
      },
      {
        question: "What will be the chain link mesh size?",
        answer: ["CLF - 25 x 25 mm , 50 x 50 mm, 75 x 75 mm" ,
                 "HC - 60 x80 mm, 80 x 100 mm, 100 x 120 mm"]
      },
      {
        question: "What will be the chain link mesh height?",
        answer: ["CLF -std manufacturing height 4 m. (Height can be customized) max serviceable order height is 5-6 ft", 
                "HC -std manufacturing height 2 m. (Height can be customized) max serviceable order height is 5-6 ft"]
      },
      {
        question: "What is the composition of coating?",
        answer: ["CLF - 275 GSM Heavy galvanized" , 
                 "HC - 275 GSM Heavy galvanized"]
      },
      {
        question: "What is pvc coated chain link fencing?",
        answer: ["PVC coated chain link fences are fences which provide additional defense against corrosion and also give an aesthetic look. To give additional protect against corrosion, the GI wires used to weave chain-link are additional coated with PVC. It can have multiple colours. PVC coating imparts the chain-link fence a very long life along with good looks."]
      }
    ];
  
    return (
      <div className="py-8 sm:py-12 md:py-16 min-h-[70vh] lg:min-h-[60vh]">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-navy-900 mb-3 sm:mb-4">
          FAQ'S OF CHAIN LINK FENCE
        </h2>
        <div className="w-20 sm:w-28 md:w-32 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12 lg:mb-16">
      </div>
        
        <div className="max-w-3xl mx-auto space-y-2 sm:space-y-3">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <button
                className={`w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left flex items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-200 ${
                  openQuestion === faq.question ? 'rounded-t-lg' : 'rounded-lg'
                }`}
                onClick={() => setOpenQuestion(openQuestion === faq.question ? null : faq.question)}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center bg-gradient-to-r from-green-600 to-cyan-400 rounded mr-2 sm:mr-3 md:mr-4">
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white transform transition-transform duration-200 ${
                      openQuestion === faq.question ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <span className="text-white font-medium text-sm sm:text-base md:text-lg">
                  {faq.question}
                </span>
              </button>
              
              {openQuestion === faq.question && (
                <div className="bg-gray-800 px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-b-lg">
                  {Array.isArray(faq.answer) ? (
                    faq.answer.map((line, index) => (
                      <p 
                        key={index} 
                        className="text-white pl-8 sm:pl-10 md:pl-12 mb-2 last:mb-0 text-sm sm:text-base"
                      >
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="text-white pl-8 sm:pl-10 md:pl-12 text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  )}
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
      title: "DEMARCATION",
      description: "Whether you have a commercial property or want to mark the boundaries of your residential space, installing a chain link fence is an excellent solution. It not only secures the area but also provides a clear, unobstructed view of the surroundings."
    },
    {
      title: "SECURITY",
      description: "Want to protect your commercial or industrial property from stray animals or unauthorized access? A chain link fence is an excellent choice, offering the perfect combination of security and visibility. Enhance its effectiveness by adding barbed wire or concertina coils on top to further strengthen your safety measures."
    },
    {
      title: "PRIVACY",
      description: "Chain link fences are renowned for their transparency, but adding aluminum slats to the design can transform them into a solution that provides both security and complete privacy—an ideal option for many settings!"
    },
    {
      title: "FARMS/ANIMAL ENCLOSURES",
      description: "For field owners, poultry farms, or those raising cattle or pets, a chain link fence is an excellent choice. It provides reliable safety for your animals while allowing them the freedom to move around in a secure environment."
    },
    {
      title: "PERIPHERY",
      description: "Schools, whether catering to toddlers or young children, can benefit greatly from chain link fences to create well-defined spaces for play and outdoor activities. This not only provides peace of mind to school administrators and parents but also allows children to enjoy themselves safely."
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
    <div className="py-8 md:py-12 lg:py-16">
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

const FenceAccessories = () => {
  const accessories = [
    {
      title: "PRIVACY SLATS",
      description: "When threaded through the chain links, the aluminum slats provide privacy while also enhancing the security of the fence."
    },
    {
      title: "BARBED WIRE",
      description: "To address concerns about intruders or wild animals, adding barbed wire on top of the chain link fence can significantly enhance security."
    },
    {
      title: "CONCERTINA COILS",
      description: "Galvanized razor coil fencing is commonly used in high-security areas, where the concertina loops installed atop chain link fences provide an effective barrier and a strong deterrent against intruders."
    }
  ];

  return (
    <div className="bg-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 mb-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-900">
          CHAIN LINK FENCE ACCESSORIES
        </h1>
        <div className="w-20 sm:w-28 md:w-32 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12">
      </div>
        <p className="text-sm sm:text-base md:text-lg text-center text-gray-700 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto px-2 sm:px-4">
          Chain link fences are effective on their own, but incorporating additional accessories can significantly enhance their functionality. This is exactly what Unifence's chain link fence products are designed to deliver!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {accessories.map((accessory, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3">
                {accessory.title}
              </h3>
              <p className="text-sm sm:text-base text-white">
                {accessory.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
const ChainLinkFence = () => {
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
      <SpecificationsTable />
      <FenceAccessories/>
      <Applications/>
      <FAQ />
    </Layout>
  );
};

export default ChainLinkFence;