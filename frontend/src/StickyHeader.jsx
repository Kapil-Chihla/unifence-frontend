import React, { useState, useEffect } from "react";
import { Instagram, Facebook, Linkedin, ChevronDown, Menu, X } from "lucide-react";
import logo from './Assets/logo .png';
import {Link ,useNavigate ,useLocation} from 'react-router-dom';
function MobileDropdownMenu({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-primary-navy/20">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full px-6 py-4 text-white items-center justify-between"
      >
        <span className="text-lg font-semibold">{label}</span>
        <ChevronDown 
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
          size={20} 
        />
      </button>
      {isOpen && (
        <div className="w-full bg-primary-navy/80 overflow-y-auto" style={{ maxHeight: '50vh' }}>
          {children}
        </div>
      )}
    </div>
  );
}

function MobileNestedDropdownMenu({ label, children }) {

  return (
    <div className="w-full border-b border-primary-navy/20">
      <button 
        className="block w-full px-8 py-3 font-bold text-white hover:bg-primary-turquoise transition-colors flex items-center justify-between"
      >
       <Link to={`/${label.toLowerCase().replace(/\s/g, '-')}`}>
          {label}
        </Link>
      </button>
      {(
        <div className="bg-primary-navy/90 pl-4 overflow-y-auto" style={{ maxHeight: '50vh' }}>
          {children}
        </div>
      )}
    </div>
  );
}

function DesktopDropdownMenu({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 200);
    setTimeoutId(id);
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="font-extrabold text-primary-navy font-robotoCondensed flex items-center px-4 py-2 hover:text-primary-turquoise transition-colors">
        {label} <ChevronDown className={`ml-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} size={20} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-3 w-64 bg-primary-navy shadow-lg">
          <div 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function DesktopNestedDropdownMenu({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 200);
    setTimeoutId(id);
  };
  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="block w-full px-4 py-2 font-bold text-white hover:bg-primary-turquoise transition-colors text-center  items-center justify-between">
        <Link to={`/${label.toLowerCase().replace(/\s/g, '-')}`} className="block w-full">
          {label}
        </Link>
      </button>
      {isOpen && (
        <div className="absolute top-0 left-full w-56 bg-primary-navy shadow-lg">
          <div 
            className="py-0"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function StickyHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const [isSticky, setIsSticky] = useState(false);
const location = useLocation(); // Import useLocation from react-router-dom

const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

useEffect(() => {
  const handleScroll = () => {
    if (location.pathname === '/') {
      // On home route, keep original behavior
      const slideHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      if (window.innerWidth >= 768) {
        setIsSticky(scrollPosition > slideHeight);
      } else {
        setIsSticky(true);
      }
    } else {
      // On other routes, make header sticky from top
      setIsSticky(true);
    }
  };

  // Set initial sticky state based on route
  if (location.pathname !== '/') {
    setIsSticky(true);
  }

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [location.pathname]); 

  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    toggleSidebar();
    navigate(path);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className={`md:hidden fixed w-full top-0 left-0 z-50 bg-white shadow-md`}>
        <div className="px-4 py-3 flex items-center justify-between">
          <Link to="/" className="block cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logo} alt="logo" className="h-10 w-25" />
          </Link>
          <button onClick={toggleSidebar} className="text-primary-navy focus:outline-none">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
      className={`fixed left-0 top-[53px] w-full max-h-[calc(100vh-53px)] bg-primary-navy transform z-50 transition-transform duration-300 ease-in-out overflow-y-auto`}
      style={{ height: 'auto' }}
    >
      {isSidebarOpen && (
        <div className="flex flex-col items-center justify-center py-6">
          <div className="flex flex-col w-full">
            <MobileDropdownMenu label="Who We Are">
              <div onClick={() => handleLinkClick('/about')} className="block py-3 px-8 text-white text-center hover:bg-primary-turquoise transition-colors cursor-pointer">
                About Us
              </div>
              <div onClick={() => handleLinkClick('/our-approvals')} className="block py-3 px-8 text-white text-center hover:bg-primary-turquoise transition-colors cursor-pointer">
                Our Approvals And Clientele
              </div>
            </MobileDropdownMenu>

            <MobileDropdownMenu label="Our Products">
              <MobileNestedDropdownMenu label="Power Transmission and Distribution">
              </MobileNestedDropdownMenu>
              <MobileNestedDropdownMenu label="Railway Electrification Structures">
              </MobileNestedDropdownMenu>
              <MobileNestedDropdownMenu label="Weld Mesh Fence">
                <div onClick={() => handleLinkClick('/unifence-suraksha')} className="block py-3 px-10 text-white hover:bg-primary-turquoise transition-colors cursor-pointer">
                  Unifence Suraksha
                </div>
                <div onClick={() => handleLinkClick('/unifence-fencade')} className="block py-3 px-10 text-white hover:bg-primary-turquoise transition-colors cursor-pointer">
                  Unifence Fencade
                </div>
              </MobileNestedDropdownMenu>
              <MobileNestedDropdownMenu label="Woven Mesh">
                <div onClick={() => handleLinkClick('/woven-mesh')} className="block py-3 px-10 text-white hover:bg-primary-turquoise transition-colors cursor-pointer">
                  Chain Link Fence
                </div>
                <div onClick={() => handleLinkClick('/honeycomb-fence')} className="block py-3 px-10 text-white hover:bg-primary-turquoise transition-colors cursor-pointer">
                  Honeycomb Fence
                </div>
              </MobileNestedDropdownMenu>
              <MobileNestedDropdownMenu label="Fence Add-Ons">
                <div onClick={() => handleLinkClick('/unifence-kisan-shakti')} className="block py-3 px-10 text-white hover:bg-primary-turquoise transition-colors cursor-pointer">
                  Unifence Kisan Shakti
                </div>
                <div onClick={() => handleLinkClick('/unifence-concertina-coil')} className="block py-3 px-10 text-white hover:bg-primary-turquoise transition-colors cursor-pointer">
                  Unifence Concertina Coil
                </div>
              </MobileNestedDropdownMenu>
              <MobileNestedDropdownMenu label="Gabions">
              </MobileNestedDropdownMenu>
              <MobileNestedDropdownMenu label="Wires">
              </MobileNestedDropdownMenu>
              <MobileNestedDropdownMenu label="Other Welded Mesh Products">
              </MobileNestedDropdownMenu>
            </MobileDropdownMenu>

            <div onClick={() => handleLinkClick('/contact')} className="w-full py-4 px-6 text-white font-semibold text-lg cursor-pointer">
              Contact Us
            </div>
            <div className="flex flex-row items-center justify-center space-x-4">
              <a
                  href="https://www.linkedin.com/company/deepak-industries/" // Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center mt-4 text-white hover:opacity-80 transition-opacity"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/deepakindustries.delhi/" // Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center mt-4 text-white hover:opacity-80 transition-opacity"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/deepakindustriesindia" // Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center mt-4 text-white hover:opacity-80 transition-opacity"
                >
                  <Facebook size={20} />
                </a></div>
          </div>
        </div>
      )}
    </div>
      </header>

      {/* Desktop Header */}
      <header 
        className={`hidden md:block w-full bg-white shadow-md transition-all duration-300 ${
          isSticky ? 'fixed top-0 left-0' : 'relative'
        } z-50`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="block cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logo} alt="logo" className="h-14 w-25"/>
          </a>
          
          <nav className="flex space-x-8">
            <DesktopDropdownMenu label="Who We Are">
              <Link to="/about" className="block px-4 py-2 font-bold text-white hover:bg-primary-turquoise transition-colors">About Us</Link>
              <Link to="/our-approvals" className="block px-4 py-2 font-bold text-white hover:bg-primary-turquoise transition-colors">Our Approvals And Clientele</Link>
            </DesktopDropdownMenu>

            <DesktopDropdownMenu label="Our Products">
                <DesktopNestedDropdownMenu label={`Power Transmission and Distribution`}>
                </DesktopNestedDropdownMenu>
                <DesktopNestedDropdownMenu label={`Railway Electrification Structures`}>
                </DesktopNestedDropdownMenu>
                <DesktopNestedDropdownMenu label={`Weld Mesh Fence`}>
                    <Link to="/unifence-suraksha" className="block px-4 py-2 text-white hover:bg-primary-turquoise transition-colors">Unifence Suraksha</Link>
                    <Link to="/unifence-fencade" className="block px-4 py-2 text-white hover:bg-primary-turquoise transition-colors">Unifence Fencade</Link>
                </DesktopNestedDropdownMenu>
                <DesktopNestedDropdownMenu label={`Woven Mesh`}>
                <Link to="/chain-link-fence" className="block px-4 py-2 text-white hover:bg-primary-turquoise transition-colors">Chain Link Fence</Link>
                <Link to="/honeycomb-fence" className="block px-4 py-2 text-white hover:bg-primary-turquoise transition-colors">Honeycomb Fence</Link>
                </DesktopNestedDropdownMenu>
                <DesktopNestedDropdownMenu label={`Fence Add-Ons`}>
                <Link to="/unifence-kisan-shakti" className="block px-4 py-2 text-white hover:bg-primary-turquoise transition-colors">Unifence Kisan Shakti</Link>
                <Link to="/unifence-concertina-coil" className="block px-4 py-2 text-white hover:bg-primary-turquoise transition-colors">Unifence Concertina Coil</Link>
                </DesktopNestedDropdownMenu>
                <DesktopNestedDropdownMenu label={`Gabions`}>
                </DesktopNestedDropdownMenu>
                <DesktopNestedDropdownMenu label={`Wires`}>
                </DesktopNestedDropdownMenu>
                <DesktopNestedDropdownMenu label={`Other Welded Mesh Products`}>
                </DesktopNestedDropdownMenu>
            </DesktopDropdownMenu>

            <Link to="/contact" className="block px-4 py-2 text-primary-navy font-robotoCondensed font-extrabold hover:text-primary-turquoise transition-colors">
              Contact Us
            </Link>
          </nav>

          <div className="flex space-x-4 text-primary-navy">
            <a href="https://www.linkedin.com/company/deepak-industries/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-turquoise transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/deepakindustries.delhi/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-turquoise transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/deepakindustriesindia" target="_blank" rel="noopener noreferrer" className="hover:text-primary-turquoise transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Add padding when header is sticky */}
      {isSticky && <div className="h-16 md:block hidden" />}
    </>
  );
}