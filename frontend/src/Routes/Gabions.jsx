import React, { useState,useEffect } from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import fence from '../Assets/fenceadd.webp';
import barbed from '../Assets/barbed.jpeg';
import con from '../Assets/concertina.jpeg';
import logo from '../Assets/logo.jpeg'
import { Link } from 'react-router-dom';
import CoolLoader from '../CoolLoader';

// Hero Section Component

const Hero = () => (
    <div className="relative h-[750px] w-full mt-10 md:mt-0">
    <img
      src={fence}
      alt="Contact us hero"
      className="w-full h-full object-cover brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <h1 className="text-5xl mb-4 font-extrabold">Gabions</h1>
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
              : 'sm:grid-cols-2 md:grid-cols-3 flex justify-center'
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
              style={{ width: '100%', maxWidth: '400px' }} // Ensures a consistent width for all product items
            >
              {/* Product Image with a fixed height container */}
              <div className="w-full h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover brightness-50"
                />
              </div>
  
              {/* Title (Initially at the bottom of the image) */}
              <div
                className={`absolute inset-x-0 bottom-0 text-center text-white text-lg font-extrabold bg-transparent/90 bg-opacity-50 transition-all duration-500 transform ${
                  hoveredProduct === product.id ? 'translate-y-[-84px]' : 'translate-y-0'
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
        image: barbed,
        title: 'ARCHITECTURAL GABION',
        description: 'Galvanized wires with barbs at specified interval which makes for a great demarcation and security option',
        link: '/unifence-kisen-shanti',
      },
      {
        id:2,
        image: con,
        title: 'WOVEN GABIONS',
        description: 'Galvanized wires with barbs at specified interval which makes for a great demarcation and security option',
        link: '/unifence-concertina-coil',
      },
      {
        id:3,
        image: con,
        title: 'RAPID DEVELOPMENT BARRIER',
        description: 'Galvanized wires with barbs at specified interval which makes for a great demarcation and security option',
        link: '/unifence-concertina-coil',
      },
    ];
  
    return (
        <div className="container mx-auto py-8">
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
const Gabions = () => {
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
    </Layout>
  );
};

export default Gabions;
