import React, { useState,useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import s2 from '../Assets/s2.jpg';
import main from '../Assets/kisenshanti/main.jpg';
import f1 from '../Assets/kisenshanti/f1.webp'
import f2 from '../Assets/kisenshanti/f2.png'
import f3 from '../Assets/kisenshanti/f3.jpeg'
import f4 from '../Assets/kisenshanti/f4.png'
import f5 from '../Assets/kisenshanti/f5.png'
import f6 from '../Assets/kisenshanti/f6.png'
import FeatureCard from '../FeatureCard';
import Long from '../Assets/Long-Life.webp';
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
      <h1 className="text-5xl mb-4 font-extrabold">Unifence Kisen Shanti</h1>
      <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
      <p className="text-2xl font-robotoCondensed font-extralight mt-4">
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
      title: 'Difficult to Climb',
      image:f1,
      description: 'The Mesh size of 76.2 X 12.7 mm makes it difficult to grip thus prohibiting any chances of climbing the fence.'
    },
    {
      title: 'Difficult to Cut',
      image:f2,
      description: 'The dense mesh inhibits ingress of commonly available cutting tools like pliers which makes the fence difficult to cut'
    },
    {
      title: 'High Visibility',
      image:f3,
      description: 'The fence although being so dense gives clear visibility so that it is CCTV friendly exposing the intruders'
    },
    {
      title: 'Long Life',
      image:f4,
      description: 'Made with Galvanized steel and then Powder coated providing the fence with superior corrosion & dust resistance'
    },
    {
      title: 'Modular',
      image:f5,
      description: 'Use of special fixtures makes the system modular and easy to install thus eliminating need for welding'
    },
    {
      title: 'Strong',
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
const GalvanizedTable = () => (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-white mb-6">Galvanized Barbed Wire</h2>
      <table className="w-full border-collapse border border-white">
        <thead>
          <tr>
            <th className="border border-white text-center font-extrabold text-white p-4 w-1/3">Parameter</th>
            <th className="border border-white text-center font-extrabold text-white p-4 w-1/3">Specifications</th>
            <th className="border border-white text-center font-extrabold text-white p-4 w-1/3">Standard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-white text-center text-white p-4">Diameter</td>
            <td className="border border-white text-center text-white p-4">2/ 2.50 mm</td>
            <td className="border border-white text-center text-white p-4">BS EN 10218-2</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-4">No. of Barb points</td>
            <td className="border border-white text-center text-white p-4">2.0 points & 4.0 points</td>
            <td rowSpan="3" className="border border-white text-center text-white p-4">ASTM A121</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-4">Pitch</td>
            <td className="border border-white text-center text-white p-4">75mm, 100mm, 125mm & 150mm</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-4">Tensile Strength</td>
            <td className="border border-white text-center text-white p-4">350 N/mm2 - 550 N/mm2</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-4">Roll Length</td>
            <td className="border border-white text-center text-white p-4">200 Meters</td>
            <td className="border border-white text-center text-white p-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  const PVCTable = () => (
    <div>
      <h2 className="text-4xl font-bold text-white mb-6">PVC Coated Barbed Wire</h2>
      <table className="w-full border-collapse border border-white">
        <thead>
          <tr>
            <th className="border border-white text-center font-extrabold text-white p-4 w-1/3">Parameter</th>
            <th className="border border-white text-center font-extrabold text-white p-4 w-1/3">Specifications</th>
            <th className="border border-white text-center font-extrabold text-white p-4 w-1/3">Standard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-white text-center text-white p-4">Diameter</td>
            <td className="border border-white text-center text-white p-4">
              ID-1.40/OD-2.00mm &<br />
              ID-1.60/OD-2.50mm
            </td>
            <td className="border border-white text-center text-white p-4">BS EN 10218-2</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-4">No. of Barb points</td>
            <td className="border border-white text-center text-white p-4">2.0 points & 4.0 points</td>
            <td rowSpan="3" className="border border-white text-center text-white p-4">ASTM A121</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-4">Pitch</td>
            <td className="border border-white text-center text-white p-4">75mm, 100mm, 125mm & 150mm</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-4">Tensile Strength</td>
            <td className="border border-white text-center text-white p-4">350 N/mm2 - 550 N/mm2</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-4">PVC Coating</td>
            <td className="border border-white text-center text-white p-4">As per requirement</td>
            <td className="border border-white text-center text-white p-4">BS EN 10245</td>
          </tr>
          <tr>
            <td className="border border-white text-center text-white p-4">Roll Length</td>
            <td className="border border-white text-center text-white p-4">200 Meters</td>
            <td className="border border-white text-center text-white p-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  const SpecificationsTable = () => {
    return (
      <div className="relative  bg-black h-full isolate">
        {/* Background container that's only as tall as the specifications section */}
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
        <div className="relative z-10 h-full p-12">
          <h1 className="text-4xl font-bold text-white text-center mb-6">
            SPECIFICATION OF BARBED WIRE FENCE
          </h1>
          <div className="w-36 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-12"></div>
          <div className="max-w-5xl mx-auto space-y-12">
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
      <div className="py-16 my-10 h-[75vh]">
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


const Applications = () => {
  const features = [
    {
      title: "Infrastructure Project",
      description: "Barbed Wire Fences are installed on Highways and along Railway Tracks amongst other infrastructure projects for enhanced protection."
    },
    {
      title: "Agricultural Projects",
      description: "All types of agricultural lands right from cropland to orchards, from groves to vineyards, from nurseries to ornamental horticulture areas make use of Barbed Wire Fences to protect the property against intruders and wildlife."
    },
    {
      title: "Commercial and Industrial Projects",
      description: "Barbed Wire Fences are installed in commercial or industrial premises, to safeguard them from wandering strays as well as from intruders."
    },
    {
      title: "Prisons and Jails",
      description: "In most cases, Prison Walls are adorned with Barbed Wire fencing as a way to check prisoners from attempting illicit escapes."
    },
    {
      title: "Military",
      description: "Barbed Wire Fences are largely used on training grounds for armed personnel, as this type of fencing helps simulate various combat conditions. Moreover, this fencing is also used in numerous team building exercises."
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


const WhySurakshak = () => {
    const features = [
      "Red Barbs for Improved Visibility",
      "Available in Galvanised as well as PVC Coated Finishes",
      "Corrosion and Rust Resistant Wires",
      "Smooth Finish for Enhanced Aesthetic Appeal",
      "Quick and Easy Installation",
      "Long-Lasting Shine",
      "Assured Quality - Coating thicknes & Tensile Strength Checked Before Dispatch"
    ];
  
    return (
      <div className="relative my-24">
        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Title */}
          <h1 className="text-4xl font-bold text-navy-900 text-center mb-4">
            WHY SURAKSHAK BARBED WIRE FENCE?
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-14"></div>
          {/* Features and Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start font-medium text-navy-800">
                  <span className="text-2xl mr-4 mt-1">→</span>
                  <span className={`text-lg ${
                    index === features.length - 1 ? 'text-left max-w-xl' : ''
                  }`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
  
            {/* Image */}
            <div className="order-first lg:order-last">
              <img 
                src={Long}
                alt="Barbed Wire Fence"
                className="w-full rounded-lg shadow-lg object-cover"
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
        <FAQ />
        <div className="relative">
          <SpecificationsTable/>
        </div>
        <WhySurakshak/>
        <Applications/>
      </div>
    </Layout>
  );
};

export default KishenShanti;