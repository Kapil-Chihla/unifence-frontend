import React , {useEffect , useState} from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import s1 from '../Assets/s1.jpg';
import CoolLoader from '../CoolLoader';
import railway from '../Assets/Railway.jpg'
import rail from '../Assets/Railway.webp'
const RailwayElectrification = () => {
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
    <div className="w-full">
      <StickyHeader />
      
      {/* Hero Section with Background Image */}
      <div className="relative h-[700px] w-full">
        <img 
          src={railway}
          alt="Contact us hero"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl font-bold text-white">
            Railway Electrification Structure
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mt-4"></div>
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
                className="w-6 h-6 text-primary-turquoise group-hover:text-primary-lightgreen"
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

      {/* First Text Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-navy-800 leading-relaxed text-lg">
          ShriAshutosh Group comes with over 20 years of experience in the power
          transmission segment in India. Over 6,00,000 MT transmission line towers up to
          765 kV and substation structures up to 400 kV line voltage have been supplied
          to various electricity boards in the country, so far.
        </p>
      </div>

      {/* Gradient Background Section with SVG Pattern */}
      <div className="relative">
        {/* SVG Pattern Background */}
        <div className="absolute w-full h-[calc(100%-200px)] bottom-0 bg-gradient-to-br from-green-600 via-cyan-500 to-green-500 overflow-hidden">
          <svg 
            className="absolute w-full h-full opacity-10" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100"
          >
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path 
                d="M 10 0 L 0 0 0 10" 
                fill="none" 
                stroke="white" 
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
          
          {/* Additional decorative SVG elements */}
          <svg 
            className="absolute right-0 top-0 h-full opacity-20" 
            viewBox="0 0 100 800" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0 0 Q 50 400 100 800" 
              stroke="white" 
              fill="none" 
              strokeWidth="2"
            />
            <path 
              d="M20 0 Q 70 400 120 800" 
              stroke="white" 
              fill="none" 
              strokeWidth="1"
            />
          </svg>
          
          {/* Circuit-like pattern */}
          <svg 
            className="absolute left-0 bottom-0 w-full h-64 opacity-10" 
            viewBox="0 0 200 100" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0 50 L 20 50 L 30 20 L 40 80 L 50 50 L 70 50" 
              stroke="white" 
              fill="none" 
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
            <path 
              d="M80 50 L 100 50 L 110 20 L 120 80 L 130 50 L 150 50" 
              stroke="white" 
              fill="none" 
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
          </svg>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6">
          {/* Second Image */}
          <div className="w-full h-[400px] shadow-xl">
            <img 
              src={rail}
              alt="Power transmission tower"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Text Section */}
          <div className="py-12 text-white relative z-10">
            <p className="mb-6">
              ShriAshutosh has a world-class manufacturing facility at Raipur, Chhattisgarh.
              This plant has a manufacturing capacity of 96,000 MT per year. With a well-engineered layout,
              the plant is equipped to manufacture transmission line towers and all kinds of fabricated structures.
            </p>
            <p className="mb-6">
              The unit is equipped with a galvanizing bath made up of equivalent capacity.
              The advanced technologies and the internal team of experts come together to
              ensure quality-driven processes at every step.
            </p>
            <p>
              With a state-of-the-art manufacturing facility, the ShriAshutosh Group is
              equipped to deliver the best possible services. The plant is certified to meet
              stringent quality standards that are ISO 9001 and ISO 14001 compliant.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RailwayElectrification;