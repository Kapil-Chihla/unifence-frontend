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
import ApplicationsCard from '../ApplicationsCard';
import { Link } from 'react-router-dom';
import CoolLoader from '../CoolLoader';
import ApplicationsBlock from '../ApplicationsBlock';
// Hero Section Component

const Hero = () => (
    <div className="relative h-[750px] w-full mt-10 md:mt-0">
    <img
      src={s}
      alt="Contact us hero"
      className="w-full h-full object-cover brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <h1 className="text-5xl mb-4 font-extrabold">Unifence Fencade</h1>
      <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
      <p className="text-2xl font-extralight mt-4">
          Unifence is a contemporary, aesthetically pleasing solution for all your demarcation requirements. It enhances the appearance of your property, providing a more refined look compared to traditional woven fencing options.
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

// Overview Section Component

const Overview = () => (
  <div className="py-16">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-navy-900">
            Unifence offers innovative, aesthetically pleasing, modular, and sustainable solutions for perimeter demarcation.
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mt-4"></div>
          </div>
          
          <div className="space-y-4">
            <p className="text-navy-800 text-lg leading-relaxed">
            Unifence delivers intelligent demarcation solutions through uniquely designed fences that blend functionality and modularity with a visually appealing look. This results in a "Simple yet Elegant" approach to all your boundary needs. Every product in the Unifence range is built upon the core principles of AESTHETICS, FUNCTIONALITY, MODULARITY, and SUSTAINABILITY.
            </p>
          </div>
        </div>
        
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={unicof}
            alt="UNICO security fence installation"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
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
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 font-bold">Solutions We Offer</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((app, index) => (
            <ApplicationsCard key={index} {...app} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SpecificationsTable = () => {
  return (
    <div className="relative bg-black/30 w-full">
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
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          SPECIFICATIONS
        </h2>
        <div className="w-40 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th rowSpan="2" className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-left">
                  Post Type
                </th>
                <th colSpan="2" className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-center">
                  Height (mm)
                </th>
                <th rowSpan="2" className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-center">
                  Width (mm)
                </th>
                <th rowSpan="2" className="border border-white/ bg-zinc-800/50 text-white p-4 font-semibold text-center">
                  Mesh Size (mm)
                </th>
                <th colSpan="2" className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-center">
                  Wire Diameter (mm)
                </th>
                <th rowSpan="2" className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-center">
                  Coating
                </th>
              </tr>
              <tr>
                <th className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-center">
                  Baseplate
                </th>
                <th className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-center">
                  Grouted
                </th>
                <th className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-center">
                  Vertical
                </th>
                <th className="border border-white bg-zinc-800/50 text-white p-4 font-semibold text-center">
                  Horizontal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white bg-zinc-800/50 text-white p-4">
                  Bell Profile
                </td>
                <td rowSpan="3" className="border border-white bg-zinc-800/50 text-white p-4 text-center">
                  700 - 2500
                </td>
                <td rowSpan="3" className="border border-white bg-zinc-800/50 text-white p-4 text-center">
                  1000 - 3100
                </td>
                <td className="border border-white bg-zinc-800/50 text-white p-4 text-center">
                  2440
                </td>
                <td rowSpan="3" className="border border-white bg-zinc-800/50 text-white p-4 text-center">
                  50 x 200
                </td>
                <td rowSpan="3" className="border border-white bg-zinc-800/50 text-white p-4 text-center">
                  4.5
                </td>
                <td rowSpan="3" className="border border-white bg-zinc-800/50 text-white p-4 text-center">
                  4.5
                </td>
                <td rowSpan="3" className="border border-white bg-zinc-800/50 text-white p-4 text-center">
                  Hot Dip Galvanized, TPC, PPC.
                </td>
              </tr>
              <tr>
                <td className="border border-white bg-zinc-800/50 text-white p-4">
                  H-Profile
                </td>
                <td className="border border-white bg-zinc-800/50 text-white p-4 text-center">
                  2485
                </td>
              </tr>
              <tr>
                <td className="border border-white bg-zinc-800/50 text-white p-4">
                  SHS/RHS
                </td>
                <td className="border border-white bg-zinc-800/50 text-white p-4 text-center">
                  2470
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-white/80 text-center mt-4">
          Multiple options available
        </p>
      </div>
    </div>
  );
};

// FAQ Section Component
const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState("What is the warranty of the product?");
  
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
    <div className="py-16 h-[70vh] md:h-[60vh]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-navy-900 mb-4">FAQ'S OF UNICO FENCE</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
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
      <FAQ />
      <Applications/>
    </Layout>
  );
};

export default UnifenceFencade;