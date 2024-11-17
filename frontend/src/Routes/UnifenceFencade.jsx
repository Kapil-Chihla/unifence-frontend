import React, { useState,useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import unicof from '../Assets/unicof.jpg'
import f1 from '../Assets/Unifencade/f1.png';
import f2 from '../Assets/Unifencade/f2.png';
import f3 from '../Assets/Unifencade/f3.png';
import f4 from '../Assets/Unifencade/f4.png';
import f5 from '../Assets/Unifencade/f5.webp';
import f6 from '../Assets/Unifencade/f6.webp';
import s1 from '../Assets/Unifencade/s1.png'
import s2 from '../Assets/Unifencade/s2.jpeg'
import s3 from '../Assets/Unifencade/s3.jpg'
import s4 from '../Assets/Unifencade/s4.png'
import s5 from '../Assets/Unifencade/s5.png'
import s6 from '../Assets/Unifencade/s6.png'
import s7 from '../Assets/Unifencade/s7.jpg'
import s from '../Assets/s2.jpg'
import FeatureCard from '../FeatureCard';
import { Link } from 'react-router-dom';
import CoolLoader from '../CoolLoader';
import ApplicationsBlock from '../ApplicationsBlock';
// Hero Section Component
const Hero = () => (
  <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] w-full mt-10 md:mt-0">
    <img
      src={unicof}
      alt="Contact us hero"
      className="w-full h-full object-cover brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-[90%] md:w-[80%] lg:w-[70%]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 font-extrabold">
      Unifence Fencade
      </h1>
      <div className="w-16 sm:w-28 md:w-32 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12 lg:mb-16">
      </div>
      <p className="text-xs sm:text-base md:text-xl lg:text-2xl font-medium mt-2 sm:mt-3 md:mt-4 px-4">
      Unifence is a contemporary, aesthetically pleasing solution for all your demarcation requirements. It enhances the appearance of your property, providing a more refined look compared to traditional woven fencing options.
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

// Overview Section Component
const Overview = () => (
  <div className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-navy-900 leading-tight">
                Unifence offers innovative, aesthetically pleasing, modular, and sustainable solutions for perimeter demarcation.
              </h2>
              <div className="w-12 sm:w-14 md:w-16 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mt-3 sm:mt-4"></div>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg md:text-lg lg:text-lg text-navy-800 leading-relaxed">
                Unifence delivers intelligent demarcation solutions through uniquely designed fences that blend functionality and modularity with a visually appealing look. This results in a "Simple yet Elegant" approach to all your boundary needs. Every product in the Unifence range is built upon the core principles of AESTHETICS, FUNCTIONALITY, MODULARITY, and SUSTAINABILITY.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] w-full">
              <img
                src={unicof}
                alt="UNICO security fence installation"
                className="w-full h-full rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
);



// Features Section Component
const Features = () => {
  const features = [
    {
      title: 'Aesthetic Appeal',
      image:f1,
      description: 'The uniformly spaced wire mesh creates an attractive pattern, adding aesthetic value to the perimeter it encloses.'
    },
    {
      title: 'No Nuts & Bolts',
      image:f2,
      description: 'Bell profile posts are specially engineered to secure the panels directly to the post, eliminating the need for any additional fixing components.'
    },
    {
      title: 'Multiple Colors Available',
      image:f3,
      description: 'A variety of colors are available to suit your style, enhancing the aesthetic appeal. Color options include Green, Red, Yellow, and White.'
    },
    {
      title: 'Weather Resistant',
      image:f4,
      description: 'Welded mesh is constructed from hot-dip galvanized steel wires and coated with powder, providing enhanced durability and weather resistance.'
    },
    {
      title: 'Customised Posts',
      image:f5,
      description: 'Various post options are available to suit site-specific requirements, including Bell Profile, SHS (Square Hollow Section), RHS (Rectangular Hollow Section), CHS (Circular Hollow Section), and H-Profile.'
    },
    {
      title: 'Bendtop (Optional)',
      image:f6,
      description: 'The fence can be customized with a bendtop option, making it ideal for internal demarcation, such as walkways and gardens.'
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


// Applications Section Component
const Solutions = () => {
  const solutions = [
    {
      title: "Aesthetic Demarcation Solutions",
      image:s1,
      description: "Use our modularly engineered Unifence demarcation fencing solutions to elegantly define the boundaries of your property."
    },
    {
      title: "Security Fencing Solutions",
      image:s2,
      description: "Our industry-leading Unifence security fences offer the necessary delay and deterrence, making it extremely difficult to gain unauthorized access."
    },
    {
      title: "Intrusion Detection",
      image:s3,
      description: "Our advanced Unifence Intrusion Detection Systems serve as the eyes and ears, enhancing security by quickly detecting any unauthorized activity."
    },
    {
      title: "Entrance & Access Control Solutions",
      image:s4,
      description: "Control entry and exit points seamlessly with our manual and automatic entrance and access control solutions."
    },
    {
      title: "Landscaping",
      image:s5,
      description: "Enhance your landscape with the rustic stone look by incorporating our architectural gabions."
    },
    {
      title: "Surface Water Management",
      image:s6,
      description: "Enhance biodiversity, lower cooling costs, store rainwater, and control flash floods with Permavoid – our advanced surface water management solution."
    },
    {
      title: "Facade",
      image:s7,
      description: "Transform your facades into living walls or custom graphics using our novel pixel facade solution"
    }
  ];

  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-3xl md:text-4xl mb-2 mb:mb-4 font-bold tracking-wider">
          SOLUTIONS WE OFFER
        </h2>
        <div className="w-16 sm:w-28 md:w-32 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12 lg:mb-16">
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        {solutions.map((feature, index) => (
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
    <div className="relative bg-black/30 w-full py-8 sm:py-12 md:py-16">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${s})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)',
          zIndex: -1
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3 sm:mb-4">
          SPECIFICATIONS
        </h2>
        <div className="w-16 sm:w-28 md:w-32 
                  h-0.5 sm:h-[3px] md:h-1 
                  bg-gradient-to-r from-green-600 to-cyan-400 
                  mx-auto 
                  mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        </div>
        
        <div className="w-full overflow-x-auto rounded-lg">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th rowSpan="2" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 font-semibold text-left text-xs sm:text-sm md:text-base">
                  Post Type
                </th>
                <th colSpan="2" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 font-semibold text-center text-xs sm:text-sm md:text-base">
                  Height (mm)
                </th>
                <th rowSpan="2" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 font-semibold text-center text-xs sm:text-sm md:text-base">
                  Width (mm)
                </th>
                <th rowSpan="2" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 font-semibold text-center text-xs sm:text-sm md:text-base">
                  Mesh Size (mm)
                </th>
                <th colSpan="2" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 font-semibold text-center text-xs sm:text-sm md:text-base">
                  Wire Diameter (mm)
                </th>
                <th rowSpan="2" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 font-semibold text-center text-xs sm:text-sm md:text-base">
                  Coating
                </th>
              </tr>
              <tr>
                <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 font-semibold text-center text-xs sm:text-sm md:text-base">
                  Baseplate
                </th>
                <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 font-semibold text-center text-xs sm:text-sm md:text-base">
                  Grouted
                </th>
                <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 font-semibold text-center text-xs sm:text-sm md:text-base">
                  Vertical
                </th>
                <th className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 font-semibold text-center text-xs sm:text-sm md:text-base">
                  Horizontal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base">
                  Bell Profile
                </td>
                <td rowSpan="3" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                  700 - 2500
                </td>
                <td rowSpan="3" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                  1000 - 3100
                </td>
                <td className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                  2440
                </td>
                <td rowSpan="3" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                  50 x 200
                </td>
                <td rowSpan="3" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                  4.5
                </td>
                <td rowSpan="3" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                  4.5
                </td>
                <td rowSpan="3" className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                  Hot Dip Galvanized, TPC, PPC.
                </td>
              </tr>
              <tr>
                <td className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base">
                  H-Profile
                </td>
                <td className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                  2485
                </td>
              </tr>
              <tr>
                <td className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base">
                  SHS/RHS
                </td>
                <td className="border border-white bg-zinc-800/50 text-white p-2 sm:p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                  2470
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-white/80 text-center mt-4 text-xs sm:text-sm md:text-base">
          Multiple options available
        </p>
      </div>
    </div>
  );
};

// FAQ Section Component
const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState("");
  
  const faqs = [
    {
      question: "What is the warranty of the product?",
      answer: "Unifence comes with a 2-year warranty, ensuring durability and peace of mind."
    },
    {
      question: "What are the colour options available in unico fence?",
      answer: "The fencing is available in six vibrant color variants: White, Grey, Red, Yellow, Green, and Blue, providing a wide range of customization options."
    },
    {
      question: "What is the min & max height?",
      answer: "The height ranges from 700mm to 3100mm depending on the installation method."
    },
    {
      question: "What is the standard post center to center distance?",
      answer: "The standard post center-to-center distance for the fence is 2560 mm."
    },
    {
      question: "Do your products require on-site welding, fabrication & painting?",
      answer: "The fence requires only on-site assembly and installation, ensuring a hassle-free setup."
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
      title: "Sporting Fences",
      description: "Over the past two decades, India has witnessed remarkable growth in the enthusiasm and support for various professional sports. This surge in interest has inspired an increasing number of people to dedicate their time and resources to creating well-equipped, thoughtfully designed sports facilities. These facilities have become integral to modern urban developments, including mixed-use residential projects and Special Economic Zones (SEZs)."
    },
    {
      title: "Gardens & parks",
      description: "Do you enjoy gardens or have one at home? If so, you're likely familiar with the challenges of maintaining it. With all the time and effort you invest, it’s only natural to seek the best security solution to protect your cherished garden from any harm. On top of that, a clean, visually appealing fence can significantly enhance the beauty and value of your garden."
    },
    {
      title: "Biodiversity",
      description: "A fencing environment around an area of dense biodiversity is an important step to maintain & protect it. They may act as a tool for biodiversity conservation, especially the endangered ones, by providing a natural habitat for its native species. The fencing solution should also complement the natural environment and add to its beauty instead of making it look like a heavily guarded space."
    },
    {
      title: "Residential complex & bungalows",
      description: "Installing a fencing solution for a residential or apartment complex is crucial, not just for safeguarding the privacy and security of its residents, but also for elevating the visual charm of the property. Unfortunately, the aesthetic appeal is often neglected as security features tend to take center stage in such projects."
    },
    {
      title: "Religious Places",
      description: "Quality fencing solutions play a vital role in preserving the charm of heritage sites, seamlessly complementing the era, architectural style, and materials of the structures. Thoughtful demarcation can significantly enhance the historic character and cultural value of these treasured locations."
    },
    {
      title: "Industrial Areas",
      description: "Fencing solutions are essential in heavily crowded areas like markets, construction sites, or public spaces, serving to manage access while ensuring unrestricted movement within designated zones. Well-designed fencing not only improves crowd control and safety but also enhances the area's appeal. By incorporating visually striking designs and vibrant colors, these solutions can demarcate spaces effectively, creating a safer, more organized, and inviting environment with improved illumination."
    },
    {
      title: "Commercial Areas",
      description: "Crowded areas such as markets, construction sites, and other public spaces require effective fencing solutions to manage access within defined boundaries while ensuring smooth movement. Thoughtfully designed fencing can improve crowd control, enhance safety, and clearly delineate zones. Additionally, with a wide range of attractive designs and vibrant colors, these fences can elevate the aesthetics of the area, creating a more organized, secure, and visually appealing environment, complemented by improved lighting."
    },
    {
      title: "River Front",
      description: "Seeking modern demarcation solutions that combine flexibility, permeability, sustainability, and aesthetic appeal? Gabions are the perfect answer to meet these diverse needs. Whether it's engineering applications, architectural trends, or sustainable solutions, Gabions offer numerous advantages. Beyond their visual appeal, they are highly effective in preventing soil erosion, making them a practical and environmentally friendly choice for a variety of settings."
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

// Main Component
const UnifenceFencade = () => {
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
      <Overview />
      <Features />
      <Solutions />
      <SpecificationsTable />
      <Applications/>
      <FAQ />
    </Layout>
  );
};

export default UnifenceFencade;