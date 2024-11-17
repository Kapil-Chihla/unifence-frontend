import React, { useState, useEffect } from "react";
import HomepageSlider from "./HomepageSlider";
import StickyHeader from "./StickyHeader";
import WhoWeAre from "./WhoWeAre";
import CoolLoader from "./CoolLoader";
import ContactForm from "./ContactForm";
import SpeechCards from "./SpeechCards";
import Footer from "./Footer";

export default function Homepage() {
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
    <div className="w-full relative overflow-x-hidden">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <StickyHeader />
        <HomepageSlider />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <HomepageSlider />
        <StickyHeader />
      </div>

      {/* Content Sections with Progressive Spacing */}
      <div className="flex flex-col space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
        {/* Who We Are Section */}
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <WhoWeAre />
          <ContactForm />
          <SpeechCards />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <Footer />
      </div>
    </div>
  );
}