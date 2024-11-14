import React,{useEffect , useState} from 'react';
import CoolLoader from '../CoolLoader';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import FeatureCard from '../FeatureCard';
import vari from '../Assets/Kavachfence/varient.webp';
import diff from '../Assets/Kavachfence/Difficult-to-Climb.webp'
import kf1 from '../Assets/Kavachfence/kf1.jpg';
import kf3 from '../Assets/Kavachfence/kf3.jpeg';
import mod from '../Assets/Kavachfence/modular.webp'
import kf5 from '../Assets/Kavachfence/kf5.jpeg'
import long from '../Assets/Kavachfence/longevity.webp'
import write from '../Assets/Kavachfence/Writeup-Image-1.webp'
import s2 from '../Assets/s2.jpg'
import { Link } from 'react-router-dom';
import ApplicationsBlock from '../ApplicationsBlock';
// Features Component
const SpecificationsTable = () => {
    const specifications = [
      {
        height: 2100,
        width: 2971,
        meshSize: '76.2 x 12.7',
        wireVertical: '3 mm',
        wireHorizontal: '3 mm',
        coating: 'PPC/TPC'
      },
      {
        height: 2400,
        width: 2971,
        meshSize: '76.2 x 12.7',
        wireVertical: '3 mm',
        wireHorizontal: '3 mm',
        coating: 'PPC/TPC'
      },
      {
        height: 1800,
        width: 2971,
        meshSize: '76.2 x 12.7',
        wireVertical: '3 mm',
        wireHorizontal: '3 mm',
        coating: 'PPC/TPC'
      },
      {
        height: 3000,
        width: 2515,
        meshSize: '76.2 x 12.7',
        wireVertical: '3 mm',
        wireHorizontal: '3 mm',
        coating: 'PPC/TPC'
      }
    ];
  
    return (
      <div className="relative sm:h-[530px] h-[100vh] w-full  my-16">
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
          <h2 className="text-5xl text-center font-extrabold mb-6 text-white tracking-wider">
            SPECIFICATIONS
          </h2>
          <div className="h-1 w-44 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mb-10"></div>
          <div className="max-w-6xl mx-auto w-full">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-white text-white py-3 px-4 font-extrabold  text-center w-1/6">
                    Height<br />(mm)
                  </th>
                  <th className="border border-white text-white py-3 px-4 font-extrabold  text-center w-1/6">
                    Width<br />(mm)
                  </th>
                  <th className="border border-white text-white py-3 px-4 font-extrabold  text-center w-1/6">
                    Mesh Size<br />(mm)
                  </th>
                  <th colSpan="2" className="border border-white text-white py-3 px-4 font-extrabold  text-center w-2/6">
                    Wire Diameter (mm)
                  </th>
                  <th className="border border-white text-white py-3 px-4 font-extrabold text-center w-1/6">
                    Coating
                  </th>
                </tr>
                <tr>
                  <th className="border border-white h-12"></th>
                  <th className="border border-white"></th>
                  <th className="border border-white"></th>
                  <th className="border border-white text-white py-3 px-4 font-extrabold  text-center">
                    Vertical
                  </th>
                  <th className="border border-white text-white py-3 px-4 font-extrabold text-center">
                    Horizontal
                  </th>
                  <th className="border border-white"></th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr key={index}>
                    <td className="border border-white text-white py-3 px-4 text-center">
                      {spec.height}
                    </td>
                    <td className="border border-white text-white py-3 px-4 text-center">
                      {spec.width}
                    </td>
                    <td className="border border-white text-white py-3 px-4 text-center">
                      {spec.meshSize}
                    </td>
                    <td className="border border-white text-white py-3 px-4 text-center">
                      {spec.wireVertical}
                    </td>
                    <td className="border border-white text-white py-3 px-4 text-center">
                      {spec.wireHorizontal}
                    </td>
                    <td className="border border-white text-white py-3 px-4 text-center">
                      {spec.coating}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
      description: 'The Mesh size of 76.2 X 12.7 mm makes it difficult to grip thus prohibiting any chances of climbing the fence.'
    },
    {
      title: 'Difficult to Cut',
      image: kf1,
      description: 'The dense mesh inhibits ingress of commonly available cutting tools like pliers which makes the fence difficult to cut'
    },
    {
      title: 'High Visibility',
      image: kf3,
      description: 'The fence although being so dense gives clear visibility so that it is CCTV friendly exposing the intruders'
    },
    {
        title: 'Long Life',
        image: long,
        description: 'Made with Galvanized steel and then Powder coated providing the fence with superior corrosion & dust resistance and aesthetic finish'
    },
    {
        title: 'Modular',
        image: mod,
        description: 'Use of special fixtures makes the system modular and easy to install thus eliminating need for welding or fabrication during installation.'
    },
    {
        title: 'Strong',
        image: kf5,
        description: 'Panels are manufactured with high weld strength imparting increased stability under impact.'
    }
];

  return (
    <div className="py-16 mt-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-wider">FEATURES</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-6">
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
        description: 'Creates clear boundary definition with superior visibility while maintaining security. The modular design with high-strength welded mesh panels provides reliable property division, while the galvanized and powder-coated finish ensures long-lasting demarcation that resists corrosion and weathering.'
      },
      {
        title: 'Perimeter Security',
        description: 'A strong welded mesh system having anti-climb & anti-cut features along with high visibility making it ideal for medium and high security. The 76.2 x 12.7mm mesh design prevents climbing attempts while supporting CCTV monitoring, perfect for securing critical areas.'
      }
    ];
  
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              APPLICATIONS
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mt-4"></div>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    );
};

const VariantSection = () => {
    return (
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-navy-900">VARIANT</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-cyan-400 mt-4"></div>
              </div>
              <p className="text-navy-800 text-lg leading-relaxed">
                Garrison fence is a variant of A-1 Kavach® designed keeping the defence forces in mind. It
                has bigger and stronger circular hollow section as poles. It has a three panel design instead
                of one which aids installation on poles as well as easy transportation. Specially designed Y-
                arms support high deterrent large diameter concertina coils to dissuade pole vaulting and
                climbing over from top.
              </p>
            </div>
            
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={vari} // Replace with your actual image path
                alt="Garrison fence installation"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

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
      <div className="relative h-[500px] w-full mt-10 md:mt-0">
      <img
        src={write}
        alt="Contact us hero"
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-5xl font-extrabold">Unifence Suraksh</h1>
        <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-cyan-400 mx-auto mt-4"></div>
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
      <Features />
      <SpecificationsTable/>
      <VariantSection/>
      <Applications/>
      <Footer />
    </div>
  );
};

export default UniferenceSuraksh;