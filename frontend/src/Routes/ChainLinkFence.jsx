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
    <div className="relative h-[750px] w-full mt-10 md:mt-0">
    <img
      src={main}
      alt="Contact us hero"
      className="w-full h-full object-cover brightness-50 opacity-100"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <h1 className="text-5xl mb-4 font-extrabold">Chain Link Fence</h1>
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


// Features Section Component
const Features = () => {
  const features = [
    {
      title: 'Easy Installation',
      image:f1,
      description: 'The Mesh size of 76.2 X 12.7 mm makes it difficult to grip thus prohibiting any chances of climbing the fence.'
    },
    {
      title: 'Slope/Gradient Installation',
      image:f2,
      description: 'The dense mesh inhibits ingress of commonly available cutting tools like pliers which makes the fence difficult to cut'
    },
    {
      title: 'Logistics friendly',
      image:f3,
      description: 'The fence although being so dense gives clear visibility so that it is CCTV friendly exposing the intruders'
    },
    {
      title: 'Long Life',
      image:f4,
      description: 'Made with Galvanized steel and then Powder coated providing the fence with superior corrosion & dust resistance'
    },
    {
      title: 'Terminations',
      image:f5,
      description: 'Use of special fixtures makes the system modular and easy to install thus eliminating need for welding'
    },
    {
      title: 'Variable Chain Link mesh size',
      image:f6,
      description: 'Panels are manufactured with high weld strength imparting increased stability under impact.'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 font-bold">Features</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <div className="relative  bg-black/30 w-full">
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
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-white text-center mb-4 sm:text-3xl">
            SPECIFICATIONS
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
          
          {/* Responsive container with horizontal scroll for small screens */}
          <div className="w-full -mx-4 sm:mx-0">
            <div className="min-w-full overflow-x-auto px-4 pb-4">
              {/* First Table */}
              <table className="w-full border-collapse mb-8 min-w-[800px]"> {/* Set minimum width for horizontal scroll */}
                <thead className="whitespace-nowrap"> {/* Prevent header text wrapping */}
                  <tr>
                    <th className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-sm sm:text-base">
                      Mesh Size (mm)
                    </th>
                    <th colSpan="2" className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-center text-sm sm:text-base">
                      Wire Diameter (mm)
                    </th>
                    <th className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-sm sm:text-base">
                      Coating Standards
                    </th>
                    <th className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-sm sm:text-base">
                      Fabric Length (Meters)
                    </th>
                  </tr>
                  <tr>
                    <th className="border border-white bg-zinc-800/50 text-white p-4"></th>
                    <th className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-sm sm:text-base">
                      Galvanized
                    </th>
                    <th className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-sm sm:text-base">
                      PVC Coated
                    </th>
                    <th className="border border-white bg-zinc-800/50 text-white p-4"></th>
                    <th className="border border-white bg-zinc-800/50 text-white p-4"></th>
                  </tr>
                </thead>
                <tbody className="text-sm sm:text-base">
                  <tr>
                    <td className="border border-white bg-zinc-800/50 text-white p-4">25 x 25</td>
                    <td rowSpan="4" className="border border-white bg-zinc-800/50 text-white p-4 text-center">
                      2.00 - 4.00 (As per BS EN 10218-2)
                    </td>
                    <td rowSpan="4" className="border border-white bg-zinc-800/50 text-white p-4 text-center">
                      ID 1.40/OD 2.00 - ID 4.00/OD 5.00 (As per BS EN 10218-2)
                    </td>
                    <td rowSpan="4" className="border border-white bg-zinc-800/50 text-white p-4">
                      <div className="text-sm sm:text-base">Galvanized: ASTM 392 Class 1 & 2 ASTM A641 Class 3,4,5 / A,B,C BS EN 10244-2 Class A,B,C & D</div>
                      <div className="mt-2 text-sm sm:text-base">PVC Coating: BS EN 10245</div>
                    </td>
                    <td rowSpan="4" className="border border-white bg-zinc-800/50 text-white p-4 text-center">
                      10 - 25
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white bg-zinc-800/50 text-white p-4">50 x 50</td>
                  </tr>
                  <tr>
                    <td className="border border-white bg-zinc-800/50 text-white p-4">65 x 65</td>
                  </tr>
                  <tr>
                    <td className="border border-white bg-zinc-800/50 text-white p-4">75 x 75</td>
                  </tr>
                </tbody>
              </table>
  
              {/* Second Table */}
              <table className="w-full border-collapse min-w-[800px]"> {/* Set minimum width for horizontal scroll */}
                <thead className="whitespace-nowrap">
                  <tr>
                    <th className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-sm sm:text-base">
                      Post Section
                    </th>
                    <th className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-sm sm:text-base">
                      Diameter
                    </th>
                    <th className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-sm sm:text-base">
                      Coating
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm sm:text-base">
                  <tr>
                    <td className="border border-white bg-zinc-800/50 text-white p-4">
                      Circular hollow Section
                    </td>
                    <td className="border border-white bg-zinc-800/50 text-white p-4">
                      32-150mm (ASTM A53 & BS EN 1387)
                    </td>
                    <td className="border border-white bg-zinc-800/50 text-white p-4">
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
    const [openQuestion, setOpenQuestion] = useState("What is the wire diameter of a chain link fence?");
    
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
      <div className="py-16 h-[90vh] lg:h-[70vh]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-navy-900 mb-4">FAQ'S OF CHAIN LINK FENCE</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
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
                    {Array.isArray(faq.answer) ? (
                      faq.answer.map((line, index) => (
                        <p key={index} className="text-white pl-12 mb-2 last:mb-0">
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="text-white pl-12">{faq.answer}</p>
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
  const features = [
    {
      title: "DEMARCATION",
      description: "Whether you own a commercial property or are simply willing to demarcate your residential property, one of the most promising ways to do so is to deploy a chain link fence, which will not only help enclose the area but will also ensure that you enjoy an unobstructed view of the surrounding areas."
    },
    {
      title: "SECURITY",
      description: "Looking forward to keeping your commercial or industrial premises safe from wandering strays or intruders? Then, consider deploying a Chain Link Fence, which offers the best of both worlds – Security and Transparency! Add to it a barbed wire or concertina on top, and double up on the safety prospect."
    },
    {
      title: "PRIVACY",
      description: "While transparency is one of the most well-known aspects of Chain Link Fence, simply adding Aluminum slats to the installation can assure not just safety but also complete privacy, which can prove to be a boon for many!"
    },
    {
      title: "FARMS/ANIMAL ENCLOSURES",
      description: "If you own a field, poultry farm, or rear cattle or pets then a chain link fence might prove to be the perfect solution for you. The fence will ensure the perfect level of safety for your beloved animals while giving them the much-needed opportunity to roam around freely."
    },
    {
      title: "PERIPHERY",
      description: "Schools, whether they are for toddlers or young children, can easily rely on Chain Link Fence to offer a clearly defined space for play and other outdoor activities! This ensures that both the school administration as well as the parents can enjoy some peace of mind while the children rejoice!"
    }
  ];

  return (
    <div className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-navy-900 mb-4">Applications</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
        <p className="text-xl text-navy-800 mx-auto">
        Chain Link Fence derives its strength from the galvanised steel wire, while its flexibility can be attributed to its highly coveted diamond pattern. 
        Add to its various gauges of mesh fabric, different colours and optimal height and these Chain Link Fences can be used for a wide range of applications!
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
  </div>
  );
};

const FenceAccessories = () => {
    const accessories = [
      {
        title: "PRIVACY SLATS",
        description: "When woven through the chain links, the aluminum slats help create privacy, in addition to the security aspect of the chain fence."
      },
      {
        title: "BARBED WIRE",
        description: "In case of added fear of intruders or that of wild animals, the use of barbed wire atop the chain link fence can provide a higher level of security!"
      },
      {
        title: "CONCERTINA COILS",
        description: "High security areas often make use of Galvanized Razor Coil Fencing wherein the concertina loop placed over the chain link fence offers a strong deterrence for any intruder."
      }
    ];
  
    return (
      <div className="bg-white p-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
            CHAIN LINK FENCE ACCESSORIES
          </h1>
          <div className="w-36 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Chain Link Fences are great on their own, however, adding a few accessories can enhance their utility by manifolds.
            And this is precisely what A-1 Fence's chain link fence products aim at offering!
          </p>
  
          <div className="grid md:grid-cols-3 gap-8">
            {accessories.map((accessory, index) => (
              <ApplicationsBlock 
                key={index}
                title={accessory.title}
                description={accessory.description}
              />
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
      <FAQ />
      <FenceAccessories/>
      <Applications/>
    </Layout>
  );
};

export default ChainLinkFence;