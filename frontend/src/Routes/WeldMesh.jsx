import React, { useState,useEffect } from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import inti from '../Assets/inti.webp'
import { Link } from 'react-router-dom';
import CoolLoader from '../CoolLoader';
import { ChevronDown } from 'lucide-react';
import weld from '../Assets/weld.jpg'
import surk from '../Assets/surak.jpeg'
import fen from '../Assets/fencade.jpg'
import welded from '../Assets/welded.avif'
import slide from '../Assets/slider-1.webp'
import security from '../Assets/security.webp'
import durable from '../Assets/durable.jpeg'
import low from '../Assets/low.jpeg'
// Hero Section Component

const Hero = () => (
    <div className="relative h-[750px] w-full mt-10 mb-20 md:mt-0">
    <img
      src={weld}
      alt="Contact us hero"
      className="w-full h-full object-cover brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <h1 className="text-5xl mb-4 font-extrabold">WELDMESH FENCES</h1>
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

const ProductGrid = ({ products }) => {
    const [hoveredProduct, setHoveredProduct] = useState(null);
  
    return (
        <div className="container mx-auto py-8">
      {/* Product Grid */}
      <div
        className={`
          grid grid-cols-1 gap-6
          ${products.length === 2 
            ? 'sm:grid-cols-1 md:flex md:justify-center' 
            : 'sm:grid-cols-2 md:grid-cols-4'
          }
        `}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            to={product.link} // Redirect to the product link
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
            className="relative group cursor-pointer border overflow-hidden block"
            style={{ width: '100%', maxWidth: '500px' }} // Ensures a consistent width for all product items
          >
            {/* Product Image with a fixed height container */}
            <div className="w-full h-72 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover brightness-75"
              />
            </div>

            {/* Title (Initially at the bottom of the image) */}
            <div
              className={`absolute inset-x-0 bottom-0 text-center text-white text-lg font-extrabold bg-transparent/90 bg-opacity-50 transition-all duration-500 transform ${
                hoveredProduct === product.id ? 'translate-y-[-68px]' : 'translate-y-0'
              }`}
              style={{
                width: '90%',
                left: '5%',  // This ensures the box is horizontally centered with 5% space on each side
                padding: '8px',  // Add some padding for better readability
              }}
            >
              {product.title}
            </div>

            {/* Description Box (Slides up from the bottom on hover) */}
            <div
              className={`absolute inset-x-0 font-extrabold bottom-0 p-4 text-white text-sm bg-opacity-50 transition-all duration-500 transform ${
                hoveredProduct === product.id ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              <p>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>

    );
};
  

const Products = () => {
    const products = [
      {
        id:1,
        image: surk,
        title: 'UNIFENCE SURAKSH',
        description: 'Galvanized wires with barbs at specified interval which makes for a great demarcation and security option',
        link: '/unifence-suraksh',
      },
      {
        id:2,
        image: fen,
        title: 'UNIFENCE FENCADE',
        description: 'Galvanized wires with barbs at specified interval which makes for a great demarcation and security option',
        link: '/unifence-fencade',
      },
    ];
  
    return (
        <div className="container mx-auto mb-20 py-8">
      {/* Heading for Our Products */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold font-cap text-navy-900 mb-4">Our Products</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
      </div>

      {/* Product Grid */}
      <ProductGrid products={products} />
    </div>
    );
};

const Applications = () => {
    const applications = [
      {
        id: 1,
        text: "High-Security zones such as Prisons, Nuclear Facilities etc."
      },
      {
        id: 2,
        text: "Demarcation of Agricultural or Industrial Premises"
      },
      {
        id: 3,
        text: "Security cages and fences"
      },
      {
        id: 4,
        text: "Construction and Plaster Applications"
      },
      {
        id: 5,
        text: "Warehouses, Factories, Societies and Farmhouses as Wall Tops"
      },
      {
        id: 6,
        text: "Sculpture Enclosures"
      },
      {
        id: 7,
        text: "Animal Enclosures"
      }
    ];
  
    return (
        <div className="min-h-fit p-8 mb-16 md:h-[550px]">
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <h1 className="text-navy-900 text-3xl font-bold mb-5 text-center">
          APPLICATIONS OF WELDED WIRE FENCES
        </h1>
        <div className="w-40 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-12 md:mb-24"></div>
        
        {/* Content Below */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-8 md:gap-12">
          {/* Applications List */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              {applications.map((app) => (
                <div key={app.id} className="flex items-start gap-3">
                  <span className="text-navy-800 mt-1">➔</span>
                  <p className="text-navy-800 font-semibold text-lg">{app.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="rounded-lg overflow-hidden h-72">
              <img 
                src={welded} 
                alt="Welded wire fence close-up"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};


const Why = () => {
    const applications = [
      {
        id: 1,
        text: "Adherence to International Standards in Quality"
      },
      {
        id: 2,
        text: "State-Of-The-Art Coating Facilities"
      },
      {
        id: 3,
        text: "High-Quality Welding"
      },
      {
        id: 4,
        text: "Aesthetically Pleasing Finish"
      },
      {
        id: 5,
        text: "Exceptional Strength and Durability"
      },
      {
        id: 6,
        text: "Corrosion Resistant"
      },
      {
        id: 7,
        text: "High Value For Money"
      },
      {
        id: 8,
        text: "Consistent Weld Strength and Weldmesh Sizes"
      }
    ];
  
    return (
        <div className="min-h-fit p-8 mb-16 md:h-[550px]">
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <h1 className="text-navy-900 text-3xl font-bold mb-5 text-center">
          WHY UNIFENCE FOR WELD MESH FENCES?
        </h1>
        <div className="w-40 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-12 md:mb-24"></div>
        
        {/* Content Below */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-8 md:gap-12">
          {/* Applications List */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              {applications.map((app) => (
                <div key={app.id} className="flex items-start gap-3">
                  <span className="text-navy-800 mt-1">➔</span>
                  <p className="text-navy-800 font-semibold text-lg">{app.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="rounded-lg overflow-hidden h-80">
              <img 
                src={slide} 
                alt="Welded wire fence close-up"
                className="w-full h-full object-cover brightness-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

const FeatureCard = ({ title, image, description }) => {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Increased height for the image container */}
        <div className="w-full h-[400px] overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-fill"
          />
        </div>
        {/* Content area */}
        <div className="p-6">
          <h3 className="text-xl text-white font-extrabold mb-2">{title}</h3>
          <p className="text-white font-light">{description}</p>
        </div>
      </div>
    );
};


const Features = () => {
    const features = [
      {
        title: 'Difficult to Climb',
        image: security,
        description: 'The Mesh size of 76.2 X 12.7 mm makes it difficult to grip thus prohibiting any chances of climbing the fence.'
      },
      {
        title: 'Difficult to Cut',
        image: durable,
        description: 'The dense mesh inhibits ingress of commonly available cutting tools like pliers which makes the fence difficult to cut'
      },
      {
        title: 'High Visibility',
        image:inti,
        description: 'The fence although being so dense gives clear visibility so that it is CCTV friendly exposing the intruders'
      },
      {
        title: 'Long Life',
        image:low,
        description: 'Made with Galvanized steel and then Powder coated providing the fence with superior corrosion & dust resistance'
      },
      {
        title: 'Modular',
        description: 'Use of special fixtures makes the system modular and easy to install thus eliminating need for welding'
      },
      {
        title: 'Strong',
        description: 'Panels are manufactured with high weld strength imparting increased stability under impact.'
      },
      {
        title: 'Difficult to Climb',
        description: 'The Mesh size of 76.2 X 12.7 mm makes it difficult to grip thus prohibiting any chances of climbing the fence.'
      },
      {
        title: 'Difficult to Cut',
        description: 'The dense mesh inhibits ingress of commonly available cutting tools like pliers which makes the fence difficult to cut'
      },
      {
        title: 'High Visibility',
        description: 'The fence although being so dense gives clear visibility so that it is CCTV friendly exposing the intruders'
      },
      {
        title: 'Long Life',
        description: 'Made with Galvanized steel and then Powder coated providing the fence with superior corrosion & dust resistance'
      },
      {
        title: 'Modular',
        description: 'Use of special fixtures makes the system modular and easy to install thus eliminating need for welding'
      },
      {
        title: 'Strong',
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
const WeldMesh = () => {
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
      <Products/>
      <Applications/>
      <Why/>
      <Features/>
      <FAQ/>
    </Layout>
  );
};

export default WeldMesh;
