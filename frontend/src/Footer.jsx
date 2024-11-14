import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const whoWeAreItems = ['About Us', 'Our Approvals And Clientele'];
  const productCategories = [
    'Power Transmission Systems',
    'Infrastructure Solutions',
    'Electrical Distribution',
    'Industrial Equipment',
    'Railway Track Components',
    'Steel Manufacturing',
    'Transportation Systems'
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="flex justify-between space-x-8">
            {/* Who We Are */}
            <div>
              <h2 className="text-white text-base font-medium mb-4">Who we Are</h2>
              <ul className="space-y-2 text-sm">
                {whoWeAreItems.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Products */}
            <div>
              <h2 className="text-white text-base font-medium mb-4">Our Products</h2>
              <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-sm">
                {productCategories.map((category) => (
                  <a key={category} href="#" className="hover:text-white transition-colors">
                    {category}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <a href="#contact" className="text-white text-base font-medium hover:text-gray-200 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="block md:hidden">
          <div>
            {/* Who We Are */}
            <div>
              <h2 className="text-white text-base font-medium mb-4">Who we Are</h2>
              <ul className="space-y-2 text-sm">
                {whoWeAreItems.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Products */}
            <div className="mt-8">
              <h2 className="text-white text-base font-medium mb-4">Our Products</h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {productCategories.map((category) => (
                  <a key={category} href="#" className="hover:text-white transition-colors">
                    {category}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div className="mt-8">
              <a href="#contact" className="text-white text-base font-medium hover:text-gray-200 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-xs">
            Copyright © 2024 SAEI. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs">Follow us on</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Facebook size={14} />
                </div>
              </a>
              <a href="#" className="hover:text-white">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Linkedin size={14} />
                </div>
              </a>
              <a href="#" className="hover:text-white">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Instagram size={14} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;