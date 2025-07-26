import React,{useEffect , useState} from 'react';
import CoolLoader from '../CoolLoader';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import FeatureCard from '../FeatureCard';
import vari from '../Assets/Kavachfence/varient.webp';
import diff from '../Assets/diff.jpeg'
import kf1 from '../Assets/kf1.jpeg';
import mod from '../Assets/Kavachfence/modular.webp'
import kf5 from '../Assets/Kavachfence/kf5.jpeg'
import long from '../Assets/Kavachfence/longevity.webp'
import write from '../Assets/Kavachfence/write.jpeg'
import s2 from '../Assets/s2.jpg'
import { Link } from 'react-router-dom';
import ApplicationsBlock from '../ApplicationsBlock';
// Features Component
const SpecificationsTable = () => {
  const specifications = [
    {
      height: 967,
      width: 2667,
      meshSize: '76.2 x 12.7',
      wireVertical: '4 mm',
      wireHorizontal: '4 mm',
      coating: 'PPC/TPC'
    },
    {
      height: 1800,
      width: 3000,
      meshSize: '76.2 x 12.7',
      wireVertical: '4 mm',
      wireHorizontal: '4 mm',
      coating: 'PPC/TPC'
    },
    {
      height: 1200,
      width: 2500,
      meshSize: '50 x 150',
      wireVertical: '4 mm',
      wireHorizontal: '4 mm',
      coating: 'PPC/TPC'
    },
    {
      height: 900,
      width: 2500,
      meshSize: '50 x 150',
      wireVertical: '4 mm',
      wireHorizontal: '4 mm',
      coating: 'PPC/TPC'
    }
  ];

  return (
    <div className="relative h-auto min-h-[400px] sm:min-h-[500px] w-full py-8 sm:py-12">
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
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        {/* Header section with responsive text */}
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold mb-3 sm:mb-4 md:mb-6 text-white tracking-wider">
          SPECIFICATIONS
        </h2>
        <div className="w-28 sm:w-32 md:w-48 
                  h-0.5 sm:h-[3px] md:h-1 
                  bg-gradient-to-r from-green-600 to-cyan-400 
                  mx-auto 
                  mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        </div>
        
        {/* Table container with horizontal scroll */}
        <div className="max-w-6xl mx-auto w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700">
          <div className="min-w-[768px]"> {/* Minimum width to prevent table from becoming too squeezed */}
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-white text-white py-2 sm:py-3 px-2 sm:px-4 font-extrabold text-center text-xs sm:text-sm md:text-base w-1/6">
                    Height<br />(mm)
                  </th>
                  <th className="border border-white text-white py-2 sm:py-3 px-2 sm:px-4 font-extrabold text-center text-xs sm:text-sm md:text-base w-1/6">
                    Width<br />(mm)
                  </th>
                  <th className="border border-white text-white py-2 sm:py-3 px-2 sm:px-4 font-extrabold text-center text-xs sm:text-sm md:text-base w-1/6">
                    Mesh Size<br />(mm)
                  </th>
                  <th colSpan="2" className="border border-white text-white py-2 sm:py-3 px-2 sm:px-4 font-extrabold text-center text-xs sm:text-sm md:text-base w-2/6">
                    Wire Diameter (mm)
                  </th>
                  <th className="border border-white text-white py-2 sm:py-3 px-2 sm:px-4 font-extrabold text-center text-xs sm:text-sm md:text-base w-1/6">
                    Coating
                  </th>
                </tr>
                <tr>
                  <th className="border border-white h-8 sm:h-12"></th>
                  <th className="border border-white"></th>
                  <th className="border border-white"></th>
                  <th className="border border-white text-white py-2 sm:py-3 px-2 sm:px-4 font-extrabold text-center text-xs sm:text-sm md:text-base">
                    Vertical
                  </th>
                  <th className="border border-white text-white py-2 sm:py-3 px-2 sm:px-4 font-extrabold text-center text-xs sm:text-sm md:text-base">
                    Horizontal
                  </th>
                  <th className="border border-white"></th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr key={index}>
                    <td className="border border-white text-white py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm md:text-base">
                      {spec.height}
                    </td>
                    <td className="border border-white text-white py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm md:text-base">
                      {spec.width}
                    </td>
                    <td className="border border-white text-white py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm md:text-base">
                      {spec.meshSize}
                    </td>
                    <td className="border border-white text-white py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm md:text-base">
                      {spec.wireVertical}
                    </td>
                    <td className="border border-white text-white py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm md:text-base">
                      {spec.wireHorizontal}
                    </td>
                    <td className="border border-white text-white py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm md:text-base">
                      {spec.coating}
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
const Features = () => {
  const features = [
    {
      title: 'Difficult to Climb',
      image: diff,
      description: 'The 76.2 x 12.7 mm mesh size prevents easy grip, effectively eliminating any possibility of climbing the fence.'
    },
    {
      title: 'Difficult to Cut',
      image: kf1,
      description: 'The dense mesh prevents the use of common cutting tools, such as pliers, making the fence difficult to cut.'
    },
    {
      title: 'High Visibility',
      image: write,
      description: 'Despite its density, the fence offers clear visibility, making it CCTV-friendly and allowing intruders to be easily spotted.'
    },
    {
        title: 'Long Life',
        image: diff,
        description: 'Crafted from galvanized steel and powder-coated, the fence offers excellent corrosion and dust resistance, along with an aesthetically appealing finish.'
    },
    {
        title: 'Modular',
        image: write,
        description: 'Special fixtures make the system modular and easy to install, eliminating the need for welding or fabrication.'
    },
    {
        title: 'Strong',
        image: kf1,
        description: 'The panels are made with high weld strength, providing enhanced stability and durability under impact.'
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

const Applications = () => {
    const applications = [
      {
        title: 'Demarcation',
        description: 'Establishes clear boundaries with excellent visibility while ensuring security. The modular design, featuring high-strength welded mesh panels, offers reliable property division, while the galvanized and powder-coated finish guarantees long-lasting protection against corrosion and weathering.'
      },
      {
        title: 'Perimeter Security',
        description: 'A robust welded mesh system with anti-climb and anti-cut features, offering high visibility, making it ideal for medium to high-security zones. The 76.2 x 12.7mm mesh design effectively prevents climbing attempts while enabling seamless CCTV monitoring, making it perfect for protecting critical areas.'
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

const VariantSection = () => {
  return (
    <div className="bg-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        {/* Mobile Layout (< md screens) */}
        <div className="block md:hidden">
          {/* Heading for mobile */}
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-3xl mb-2 font-bold text-navy-900 tracking-wide">
              VARIANT
            </h2>
            <div className="w-16 sm:w-28 md:w-32 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12 lg:mb-16">
      </div>
          </div>
          
          {/* Image for mobile */}
          <div className="mb-6">
            <div className="relative">
              <img
                src={vari}
                alt="358 Anti Climb fence installation"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none"></div>
            </div>
          </div>
          
          {/* Text for mobile */}
          <div>
            <p className="text-navy-800 text-sm sm:text-base leading-relaxed">
              The 358 Anti Climb fence is a version of Unifence® specifically created for defense applications. It utilizes robust, larger circular hollow section poles and a three-panel design, which simplifies installation on poles and enhances transportability. The fence is equipped with specially designed Y-arms that support large-diameter concertina coils, providing effective deterrence against climbing or vaulting over the fence.
            </p>
          </div>
        </div>

        {/* Desktop Layout (≥ md screens) */}
        <div className="hidden md:flex flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-1/2 mt-0">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-navy-900 tracking-wide">
                VARIANT
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-cyan-400 mt-4"></div>
            </div>
            <p className="text-navy-800 text-lg leading-relaxed">
              The 358 Anti Climb fence is a version of Unifence® specifically created for defense applications. It utilizes robust, larger circular hollow section poles and a three-panel design, which simplifies installation on poles and enhances transportability. The fence is equipped with specially designed Y-arms that support large-diameter concertina coils, providing effective deterrence against climbing or vaulting over the fence.
            </p>
          </div>
          
          {/* Image */}
          <div className="w-1/2">
            <div className="relative">
              <img
                src={vari}
                alt="358 Anti Climb fence installation"
                className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  const Hero = () => (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] w-full mt-10 md:mt-0">
      <img
        src={write}
        alt="Contact us hero"
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-[90%] md:w-[80%] lg:w-[70%]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 font-extrabold">
        358 Anti Climb fence
        </h1>
        <div className="w-16 sm:w-28 md:w-32 
                  h-0.5 sm:h-[3px] md:h-1 
                  bg-gradient-to-r from-green-600 to-cyan-400 
                  mx-auto 
                  mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        </div>
        <p className="text-xs sm:text-base md:text-xl lg:text-2xl font-medium mt-2 sm:mt-3 md:mt-4 px-4">
        A robust welded mesh system with anti-climb and anti-cut features, offering high visibility, making it perfect for medium to high-security applications.
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

// Main Component
const UniferenceSuraksh = () => {
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
    <div>
      <StickyHeader />
      <Hero/>
      <Features />
      <SpecificationsTable/>
      <VariantSection/>
      <Applications/>
      <Footer />
    </div>
  );
};

export default UniferenceSuraksh;