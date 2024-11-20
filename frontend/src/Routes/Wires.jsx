import React, { useState,useEffect } from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import CoolLoader from '../CoolLoader';
import galv from '../Assets/Heavy-Galvanized-Wires.webp'
import wires from '../Assets/Wires.webp'
import pvc from '../Assets/PVC-Wires.webp';

// Hero Section Component
const Hero = () => (
  <div className="relative h-[600px] lg:h-[750px] w-full mt-10 mb-6 md:mt-0">
  <img
    src={wires}
    alt="Contact us hero"
    className="w-full h-full object-cover brightness-50"
  />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
    <h1 className="text-2xl md:text-3xl lg:text-5xl mb-2 md:mb-6 font-extrabold">Wires
    </h1>
    <div className="w-10 sm:w-12 md:w-20 lg:w-24 
              h-0.5 sm:h-[3px] md:h-1 
              bg-gradient-to-r from-green-600 to-cyan-400 
              mx-auto 
              mb-4 sm:mb-6">
    </div>
    <p className="text-xs md:text-base lg:text-2xl font-medium mt-4">
    Steel wire, a versatile material, finds applications across various sectors, including agriculture, power transmission, and manufacturing. The quality of the wire significantly impacts the performance of these applications. Unifence offers high-quality steel wires, meticulously manufactured to meet specific requirements. Our diverse range of wire options, including corrosion-resistant coatings, caters to various needs. Adhering to stringent industry standards, we ensure consistent quality and longevity.
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


const ProductSection = ({ title, description, specs, imagePosition = "left", image }) => (
  <div className="w-full py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`flex flex-col ${imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}>
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
              {title}
            </h2>
          </div>
          <p className="text-navy-800 text-sm sm:text-base mb-16 leading-relaxed">
            {description}
          </p>
          
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-4 text-center">
              STANDARD SPECIFICATIONS
            </h3>
            <div className="w-8 sm:w-9 md:w-10 
                    h-0.5 sm:h-[3px] md:h-1 
                    bg-gradient-to-r from-green-600 to-cyan-400 
                    mx-auto 
                    mb-6 sm:mb-7 md:mb-8">
        </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-700">
                <thead>
                  <tr>
                    <th className="px-4 py-3 border-b border-gray-700 bg-gray-800 text-left text-sm font-semibold text-white">
                      Parameter
                    </th>
                    <th className="px-4 py-3 border-b border-gray-700 bg-gray-800 text-left text-sm font-semibold text-white">
                      Specifications
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map((spec, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 border-b border-gray-700 text-sm text-navy-800 font-medium">
                        {spec.parameter}
                      </td>
                      <td className="px-4 py-3 border-b border-gray-700 text-sm text-navy-800">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="relative aspect-square">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WireProducts = () => {
  const products = [
    {
      title: "HEAVY GALVANIZED WIRE",
      description: "A-1's heavy galvanized wires provide good tensile strength and consistency in diameter making it suitable for multiple applications. We use special high grade (SHG) Zinc ingots which are 99.993% pure for hot dip galvanizing. These wires provide excellent corrosion resistance and serve longer as they come in market leading 275 gsm coating",
      specs: [
        { parameter: "Diameter", value: "1.60 mm to 6.00 mm (16ga to 6ga)" },
        { parameter: "Zinc Coating", value: "0.15oz, 0.3oz, 0.8oz, 1.2oz, 1.4oz, 1.6oz" },
        { parameter: "Tensile Strength", value: "55,000 PSI to 90,000 PSI" },
        { parameter: "Packing Type", value: "50-100 Kgs rolls available on request 500 Kgs - 900 Kgs (1,100 lbs - 2,000 lbs)." },
        { parameter: "Standards", value: "ASTM A641/641M or customised specification" },
        { parameter: "Packaging Type", value: "Coil OD (450mm - 480mm) and PE wrap" }
      ],
      imagePosition: "left",
      image:galv,
    },
    {
      title: "POLY-VINYL CHLORIDE WIRE",
      description: "PVC wires have a protective layer of poly vinyl chloride on GI wires which increases the resilience of the wires against extreme climatic conditions. Coatings are available in multiple colours options making it more customisable.",
      specs: [
        { parameter: "Diameter", value: "1.60 mm to 6.00 mm (16ga to 6ga)" },
        { parameter: "Zinc Coating", value: "0.15oz, 0.3oz, 0.8oz, 1.2oz, 1.4oz, 1.6oz" },
        { parameter: "Tensile Strength", value: "55,000 PSI to 90,000 PSI" },
        { parameter: "Packing Type", value: "500 Kgs - 700 Kgs (1,100 lbs - 1500 lbs)" },
        { parameter: "Standards", value: "As per ASTM F661 Class I for customised specification" },
        { parameter: "Colour", value: "US Green, Jet Black, White and Brown" }
      ],
      imagePosition: "right",
      image:pvc,
    }
  ];

  return (
    <div className="min-h-screen">
      {products.map((product, index) => (
        <ProductSection
          key={index}
          title={product.title}
          description={product.description}
          specs={product.specs}
          imagePosition={product.imagePosition}
          image ={product.image}
        />
      ))}
    </div>
  );
};

  // Specification table data
const Layout = ({ children }) => (
    <div className="min-h-screen flex flex-col">
      <StickyHeader />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
// Main Component
const Wires = () => {
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
      <WireProducts/>
    </Layout>
  );
};

export default Wires;
