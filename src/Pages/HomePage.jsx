import About from "@/components/About";
import Choose from "@/components/Choose";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Innovant from "@/components/Innovant";
import ProcessSection from "@/components/OurProcess";
import OurTeam from "@/components/OurTeam";
import ScrollImageSequence from "@/components/ScrollImageSequence";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import React, { useRef } from "react";

const HomePage = () => {
  const chooseRef = useRef(null); // animation starts here
  const testimonialsRef = useRef(null); // animation ends here

  return (
    <div className="relative w-screen bg-black text-white overflow-hidden">
      {/* Coin animation behind content */}
      <ScrollImageSequence startRef={chooseRef} endRef={testimonialsRef} />

      <HeroSection />
      <About />

      <div ref={chooseRef}>
        <Choose />
      </div>

      <Services />
      <ProcessSection />

      <div ref={testimonialsRef}>
        <Testimonials />
      </div>

      <OurTeam />
      <Innovant />
      <Footer />
    </div>
  );
};

export default HomePage;
