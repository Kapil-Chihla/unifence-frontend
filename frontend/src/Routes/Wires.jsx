import React, { useState,useEffect } from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import s2 from '../Assets/s2.jpg';
import logo from '../Assets/logo.jpeg'
import { Link } from 'react-router-dom';
import CoolLoader from '../CoolLoader';
import galv from '../Assets/Heavy-Galvanized-Wires.webp'
import wires from '../Assets/Wires.webp'
import pvc from '../Assets/PVC-Wires.webp';

// Hero Section Componen

const Hero = () => (
    <div className="relative h-[750px] w-full mt-10 md:mt-0">
    <img
      src={wires}
      alt="Contact us hero"
      className="w-full h-full object-cover -inset-10 brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <h1 className="text-5xl mb-4 font-extrabold">Wires</h1>
      <div className="w-28 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-8"></div>
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

const Products = () => {
    return (
        <div className="py-12 px-4 max-w-7xl mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-10">
                <h2 className="text-3xl text-navy-900 mb-4 font-bold">OUR PRODUCTS</h2>
                <div className="w-28 h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-12"></div>
            </div>

            {/* Product Display */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                {/* Product Image */}
                <img
                    src={galv}
                    alt="Heavy Galvanized Wire"
                    className="w-full md:w-1/2 max-w-md object-cover"
                />

                {/* Product Text */}
                <div className="md:w-1/2 md:ml-56">
                    <h3 className="text-2xl font-bold mb-4">HEAVY GALVANIZED WIRE</h3>
                    <p className="text-base leading-7">
                        A-1s heavy galvanized wires provide good tensile strength and consistency in diameter making it suitable for multiple applications. We use special high grade (SHG) Zinc ingots which are 99.993% pure for galvanizing. These wires provide excellent corrosion resistance and serve longer as they come with an industry-leading 275 gsm coating.
                    </p>
                </div>
            </div>
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
      <Products/>
    </Layout>
  );
};

export default Wires;
