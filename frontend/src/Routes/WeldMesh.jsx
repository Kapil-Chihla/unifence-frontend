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
import f5 from '../Assets/Weldmesh/f5.png'
import f6 from '../Assets/Weldmesh/f6.png'
import f7 from '../Assets/Weldmesh/f7.png'
import f8 from '../Assets/Weldmesh/f8.png'
import f9 from '../Assets/Weldmesh/f9.png'
import f10 from '../Assets/Weldmesh/f10.png'
import f11  from '../Assets/Weldmesh/f11.png'
import f12 from '../Assets/Weldmesh/f12.png'
// Hero Section Component

const Hero = () => (
    <div className="relative h-[500px] lg:h-[750px] w-full mt-10 mb-10 md:mb-20 md:mt-0">
    <img
      src={weld}
      alt="Contact us hero"
      className="w-full h-full object-cover brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <h1 className="text-2xl md:text-3xl lg:text-5xl mb-4 font-extrabold">WELDMESH FENCES</h1>
      <div className="w-16 sm:w-20 md:w-28 lg:w-32 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-4 sm:mb-6 md:mb-8">
</div>
      <p className="text-sm md:text-base lg:text-2xl font-extralight mt-4">
      A strong welded mesh system has anti-climb and anti-cut features along with high visibility, making it ideal for medium and high security.
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

const ProductGrid = ({ products }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="w-full">
  <div
    className={`
      grid grid-cols-1 justify-items-center
      ${products.length === 2 
        ? 'md:flex md:justify-center gap-4' 
        : 'sm:grid-cols-2 lg:grid-cols-4 gap-0'
      }
    `}
  >
    {products.map((product) => (
      <Link
        key={product.id}
        to={product.link}
        onMouseEnter={() => setHoveredProduct(product.id)}
        onMouseLeave={() => setHoveredProduct(null)}
        className="relative group cursor-pointer border overflow-hidden block"
        style={{ 
          width: '100%', 
          maxWidth: products.length === 2 ? '450px' : '400px'
        }}
      >
        {/* Rest of your product card code remains the same */}
        {/* Product Image Container */}
        <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover brightness-75 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Title */}
        <div
          className={`absolute inset-x-0 bottom-0 text-center text-white 
                     text-sm sm:text-lg md:text-xl font-bold sm:font-extrabold 
                     bg-transparent/90 
                     transition-all duration-500 transform
                     ${hoveredProduct === product.id ? 'translate-y-[-52px] sm:translate-y-[-60px] md:translate-y-[-86px]' : 'translate-y-0'}`}
          style={{
            width: '90%',
            left: '5%',
            padding: '6px sm:padding-8px',
            backdropFilter: 'blur(4px)',
          }}
        >
          {product.title}
        </div>

        {/* Description Box */}
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
        image: surk,
        title: '358 Anti Climb fence',
        description: 'Best choice for Security, Durability, Anti-Climb, Visibility, Strength, and Longevity.',
        link: '/358-anti-climb-fence',
      },
      {
        id:2,
        image: fen,
        title: 'UNIFENCE FENCADE',
        description: 'Best choice for Style, Durability, Security, Customization, Weather Resistance, and Versatility!',
        link: '/unifence-fencade',
      },
    ];
  
    return (
      <div className="container mx-auto mb-12 sm:mb-16 md:mb-20 py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8">
      {/* Heading Section */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold font-cap text-navy-900 mb-3 sm:mb-4">
          Our Products
        </h2>
        <div className="w-20 sm:w-24 md:w-32 h-0.5 sm:h-[3px] md:h-1 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
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
        text: "Ensures perimeter security for various environments."
      },
      {
        id: 2,
        text: "Protects assets and prevents unauthorized access."
      },
      {
        id: 3,
        text: "Enhances safety in open and enclosed spaces."
      },
      {
        id: 4,
        text: "Offers durability for long-term boundary solutions."
      },
      {
        id: 5,
        text: "Adapts to different terrain and site requirements."
      },
      {
        id: 6,
        text: "Provides visibility while maintaining robust security."
      },
      {
        id: 7,
        text: "Suitable for both functional and aesthetic purposes."
      }
    ];
  
    return (
      <div className="min-h-fit p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 md:mb-16">
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <h1 className="text-navy-900 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 text-center">
          APPLICATIONS OF WELDED WIRE FENCES
        </h1>
        <div className="w-16 sm:w-20 md:w-28 lg:w-32 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-4 sm:mb-5 md:mb-6">
        </div>
        
        {/* Content Below */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Applications List */}
          <div className="w-full md:w-1/2">
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {applications.map((app) => (
                <div key={app.id} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-navy-800 mt-1">➔</span>
                  <p className="text-navy-800 text-sm sm:text-base md:text-base lg:text-lg font-semibold">{app.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2 mb-4 sm:mb-6 md:mb-0">
            <div className="rounded-lg overflow-hidden h-48 sm:h-64 md:h-64 lg:h-72">
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
    )
};


const Why = () => {
    const applications = [
      {
        id: 1,
        text: "Built for long-lasting performance with superior materials."
      },
      {
        id: 2,
        text: "Designed to prevent climbing and unauthorized access."
      },
      {
        id: 3,
        text: "Resistant to cutting with commonly used tools."
      },
      {
        id: 4,
        text: "Protected against weather conditions with advanced coatings."
      },
      {
        id: 5,
        text: "Allows clear visibility, ideal for surveillance systems."
      },
      {
        id: 6,
        text: "Enhances the appearance of the secured area."
      },
      {
        id: 7,
        text: "Simplifies installation with a modular, no-welding design."
      },
      {
        id: 8,
        text: "Offers customization to meet diverse requirements."
      }
    ];
  
    return (
      <div className="min-h-fit p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 md:mb-16">
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <h1 className="text-navy-900 text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 text-center">
          WHY UNIFENCE FOR WELD MESH FENCES?
        </h1>
        <div className="w-28 sm:w-32 md:w-40 
                h-0.5 sm:h-[3px] md:h-1 
                bg-gradient-to-r from-green-600 to-cyan-400 
                mx-auto 
                mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        </div>
        
        {/* Content Below */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Applications List */}
          <div className="w-full md:w-1/2">
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {applications.map((app) => (
                <div key={app.id} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg text-navy-800">➔</span>
                  <p className="text-navy-800 font-semibold text-xs sm:text-base md:text-lg">{app.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2 mb-4 sm:mb-6 md:mb-0">
            <div className="rounded-lg overflow-hidden h-56 sm:h-64 md:h-72 lg:h-80">
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
      {/* Responsive image container */}
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-[400px] overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover sm:object-fill"
        />
      </div>
      {/* Content area with responsive padding and text */}
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-sm sm:text-xl md:text-xl text-white font-extrabold mb-1 sm:mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-base md:text-base text-white font-light">
          {description}
        </p>
      </div>
    </div>
  );
};


const Features = () => {
    const features = [
      {
        title: 'Impenetrable Security',
        image: security,
        description: 'Due to their availability in various thicknesses and the ability to reach heights of up to 20 feet, welded mesh fences offer exceptional security, effectively deterring both human and wildlife intrusions, making them ideal for high-security premises.'
      },
      {
        title: 'Durable Design',
        image: durable,
        description: 'Welded mesh fences are designed for exceptional durability, resisting both climbing attempts and adverse weather conditions. Their robust construction ensures they can withstand significant physical pressures.'
      },
      {
        title: 'Intricate Structure',
        image:inti,
        description: 'The post-galvanization weaving process transforms welded mesh fences into virtually impenetrable barriers, making them ideal for high-security sites like construction or industrial areas with heavy machinery and bulky materials. The V-bends further enhance their strength and rigidity, preventing warping and ensuring long-lasting performance.'
      },
      {
        title: 'Low Maintenance',
        image:low,
        description: 'The robust construction of welded mesh fences and gates, achieved through electrical welding, eliminates the risk of cracking or breaking, ensuring a long-lasting and low-maintenance investment.'
      },
      {
        title: 'Convenient Installation',
        image:f5,
        description: 'The versatility of welded mesh fences allows for easy installation on various surfaces, ensuring rapid deployment whenever required.'
      },
      {
        title: 'Exceedingly Durable',
        image:f6,
        description: 'Coated mesh fencing, with its powder-coated wires, is designed to withstand the impact of large animals, ensuring long-lasting durability and minimal maintenance requirements.'
      },
      {
        title: 'High-Quality Welding',
        image:f7,
        description: 'High-quality, low-carbon steel wires, welded together using advanced computer-controlled machines, ensure the exceptional strength and durability of our welded mesh fences.'
      },
      {
        title: 'Adaptable Construction',
        image:f8,
        description: 'The versatility of welded wire mesh allows for precise customization to meet various application needs. By adjusting the bar size and spacing, welded wire mesh can be tailored to specific reinforcement requirements, making it ideal for diverse applications in construction and manufacturing.'
      },
      {
        title: 'Enhanced Speed of Construction',
        image:f9,
        description: 'Welded wire mesh significantly accelerates slab casting by eliminating the time-consuming process of individual bar placement and tying. This streamlined approach reduces labor costs and expedites construction timelines.'
      },
      {
        title: 'Improved Finish',
        image:f10,
        description: 'The use of thinner bars with closer spacing in welded wire mesh enhances stress transfer to the concrete, resulting in minimal cracking and a smoother, more aesthetically pleasing finish.'
      },
      {
        title: 'In-Factory Production',
        image:f11,
        description: 'Factory-cut and bent welded mesh eliminates the need for on-site rebar cutting and bending, significantly enhancing safety and efficiency during installation.'
      },
      {
        title: 'Reduced Reliance on Manpower',
        image:f12,
        description: 'The ease and speed of installation of welded mesh fences reduce labor costs and project timelines, making them a cost-effective and efficient fencing solution.'
      }
    ];
  
    return (
      <div className="py-8 sm:py-12 md:py-16">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8 sm:mb-10 md:mb-12">
      <h2 className="text-xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 font-bold">Features</h2>
      <div className="w-12 sm:w-14 md:w-16 
                  h-0.5 sm:h-[3px] md:h-1 
                  bg-gradient-to-r from-green-600 to-cyan-400 
                  mx-auto">
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
        question: "Which factors make weldmesh fences more popular than other fence types?",
        answer: "Welded wire fences are made from high-quality steel wires fused into a grid. Their tight structure makes them strong, climb-resistant, and more durable than woven fences. These fences can withstand more pressure, and their welded design provides resistance to cutting and breaking, making them easy to install and long-lasting."
      },
      {
        question: "What kind of facilities and places can weldmesh fences be used at?",
        answer: "Welded mesh fences are known for their strength due to their construction, which is why they are commonly used in high-security areas such as prisons and nuclear facilities. They are also widely employed for marking agricultural land, creating security enclosures, fencing construction sites, factories, warehouses, sculpture areas, and animal pens."
      },
      {
        question: "Is weldmesh fence more weather durable than others?",
        answer: "Welded mesh fences are more weather-resistant than many other types, thanks to their durable finish and open design that allows air and wind to flow through. This reduces stress on the fence, even in areas with strong winds, helping it last longer with minimal maintenance."
      },
      {
        question: "Are there any other usages of weld mesh apart from high-security zones?",
        answer: "A key reason for the popularity of welded mesh fences is the visibility they offer, in addition to their strength and durability. The gaps between the grids allow clear visibility, making them ideal for use in places like sports stadiums, schools, and business premises."
      },
      {
        question: "Can weldmesh be installed for beautification?",
        answer: "In addition to their safety and durability, welded mesh fences can also be visually appealing, thanks to a variety of coatings and color options."
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
