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
    <div className="relative h-[750px] w-full mt-10 md:mt-0">
    <img
      src={main}
      alt="Contact us hero"
      className="w-full h-full object-cover brightness-50 opacity-100"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <h1 className="text-5xl mb-4 font-extrabold">Henoycomb Fence</h1>
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
      title: 'Secure',
      image:f1,
      description: 'The Mesh size of 76.2 X 12.7 mm makes it difficult to grip thus prohibiting any chances of climbing the fence.'
    },
    {
      title: 'Strong',
      image:f2,
      description: 'The dense mesh inhibits ingress of commonly available cutting tools like pliers which makes the fence difficult to cut'
    },
    {
      title: 'Long Life',
      image:f3,
      description: 'The fence although being so dense gives clear visibility so that it is CCTV friendly exposing the intruders'
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
      <div className="relative bg-black/30 h-[75vh] py-10">
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
        
        <div className="relative z-10 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6 text-white">
              STANDARD SPECIFICATIONS OF HONEYCOMB FENCE
            </h1>
            <div className="w-40 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
            <div className="w-full max-w-4xl mx-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-white/30 font-extrabold bg-black/30 text-white p-4 text-left">Name</th>
                    <th className="border border-white/30 font-extrabold bg-black/30 text-white p-4 text-left">Parameter</th>
                    <th className="border border-white/30 font-extrabold bg-black/30 text-white p-4 text-left">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr key={index}>
                      <td className="border border-white/30 bg-black/20 text-white p-4">
                        {spec.name}
                      </td>
                      <td className="border border-white/30 bg-black/20 text-white p-4">
                        {spec.parameter}
                      </td>
                      <td className="border border-white/30 bg-black/20 text-white p-4 whitespace-pre-line">
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
const ApplicationIcon = () => (
    <svg 
      className="w-24 h-24 mx-auto mb-4" 
      viewBox="0 0 64 64" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path 
        d="M16 16 L48 16 L48 48 L16 48 L16 16" 
        strokeDasharray="4 4" 
        className="text-gray-800"
      />
      <path 
        d="M16 32 L48 32" 
        strokeDasharray="4 4" 
        className="text-gray-800"
      />
      <path 
        d="M32 16 L32 48" 
        strokeDasharray="4 4" 
        className="text-gray-800"
      />
    </svg>
  );
  
  const ApplicationBlock = ({ icon, title }) => (
    <div className="text-center">
      {icon}
      <h3 className="text-gray-800 text-xl font-bold">{title}</h3>
    </div>
  );
  
  const Applications = () => {
    const applications = [
      {
        icon: <ApplicationIcon />,
        title: "Demarcation"
      }
      // Add more applications as needed
    ];
  
    return (
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-navy-900 mb-8">
            APPLICATIONS OF HONEYCOMB FENCE
          </h1>
          
          <div className="w-40 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
          {/* Applications grid */}
          <div className="flex justify-center">
            {applications.map((app, index) => (
              <ApplicationBlock 
                key={index}
                icon={app.icon}
                title={app.title}
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