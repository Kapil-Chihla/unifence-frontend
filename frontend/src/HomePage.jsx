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
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <CoolLoader />;
  }

  return (
    <div className="w-full overflow-x-hidden"> {/* Main container prevents overflow */}
      <div className="block md:hidden">
        <StickyHeader />
        <HomepageSlider />
      </div>

      <div className="hidden md:block">
        <HomepageSlider />
        <StickyHeader />
      </div>

      <div className="mt-32 mx-auto max-w-screen overflow-x-hidden">
        <WhoWeAre />
      </div>
     <ContactForm/>
     <SpeechCards/>
     <Footer/>
    </div>
  );
}
