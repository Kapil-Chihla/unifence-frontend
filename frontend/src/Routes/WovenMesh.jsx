import React, { useState,useEffect } from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import CoolLoader from '../CoolLoader';
import woven from '../Assets/wovenfence.jpg'
import chain from '../Assets/chainlink.jpg'
import honey from '../Assets/honey.jpeg'

// Hero Section Component

const Hero = () => (
    <div className="relative h-[500px] md:h-[600px] lg:h-[750px] w-full mt-10 md:mt-0">
    <img
      src={woven}
      alt="Contact us hero"
      className="w-full h-full object-cover brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-[90%] md:w-[80%] lg:w-[70%]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 font-extrabold">Woven Mesh</h1>
      <div className="w-16 sm:w-32 md:w-40 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-2 sm:mb-8 md:mb-12 lg:mb-16">
      </div>
      <p className="text-xs sm:text-base md:text-xl lg:text-2xl font-medium mt-2 sm:mt-3 md:mt-4 px-4">
      Woven fences, crafted from woven mesh in diamond or hexagonal patterns, are an excellent choice for robust perimeter demarcation. These fences are not only cost-effective compared to many other fencing options but also versatile and easy to install. With various coating options available, they are suitable for diverse applications such as poultry farms, industrial sites, solar farms, residential complexes, seaports, and airports. Thanks to their flexibility, woven fences are particularly well-suited for securing sports fields, combining durability with adaptability.
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

const ProductGrid = ({ products }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <div
        className={`
          grid grid-cols-1 justify-items-center gap-4 sm:gap-6 md:gap-8
          ${products.length === 2 
            ? 'md:flex md:justify-center md:gap-6' 
            : 'sm:grid-cols-2 lg:grid-cols-3'
          }
        `}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            to={product.link}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
            className="relative group cursor-pointer border overflow-hidden block w-full"
            style={{ 
              maxWidth: '500px',
            }}
          >
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover brightness-50"
              />
            </div>

            <div
              className={`absolute inset-x-0 bottom-0 text-center text-white 
                         text-sm sm:text-base md:text-lg font-bold sm:font-extrabold 
                         bg-transparent/90 
                         transition-all duration-500 transform
                         ${hoveredProduct === product.id ? 'translate-y-[-70px] sm:translate-y-[-75px] md:translate-y-[-100px]' : 'translate-y-0'}`}
              style={{
                width: '90%',
                left: '5%',
                padding: '6px sm:padding-8px',
                backdropFilter: 'blur(4px)',
              }}
            >
              {product.title}
            </div>

            <div
              className={`absolute inset-x-0 bottom-0 
                         p-3 sm:p-4 
                         text-white 
                         text-xs sm:text-sm md:text-base 
                         font-medium sm:font-bold md:font-extrabold 
                         transition-all duration-500 transform
                         ${hoveredProduct === product.id ? 'translate-y-0' : 'translate-y-full'}`}
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
        image: chain,
        title: 'CHAINLINK FENCE',
        description: 'Chainlink fences are durable, cost-effective, and versatile fencing solutions ideal for securing residential, industrial, and sports areas.',
        link: '/chain-link-fence',
      },
    ];
  
    return (
      <div className="w-full py-8 sm:py-10 md:py-12">
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-cap text-navy-900 mb-3 sm:mb-4">
          Our Products
        </h2>
        <div className="w-20 sm:w-28 md:w-36 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        </div>
      </div>
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
const WovenMesh = () => {
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

export default WovenMesh;
