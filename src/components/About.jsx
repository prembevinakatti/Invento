import React from "react";
import video from "../assets/video.mp4";
import { TextAnimate } from "./ui/text-animate";

const About = () => {
  return (
    <div className="relative w-screen h-[60vh] sm:h-[50vh] md:h-[40vh] lg:h-[25vw] mt-20 overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🖤 Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 🧩 Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-10 text-center">
        {/* Button */}
        <button className="mb-10 px-2 sm:px-6 py-1 bg-black/60 text-gray-300 text-sm sm:text-base rounded shadow hover:bg-black/60 transition-all duration-300">
          Who we are
        </button>

        {/* Animated Text */}
        <TextAnimate
          className="font-medium sm:font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-6xl leading-relaxed"
          animation="blurInUp"
          by="word"
          once
        >
          M/S Inventio Global Consultancy Pvt. Ltd. is a multi-disciplinary firm
          offering tailored solutions in valuation, financial consulting,
          compliance, tax advisory, IPO services, and business outsourcing. With
          deep regulatory expertise and a client-centric approach, we help
          businesses across sectors stay compliant, raise funds, and scale
          effectively.
        </TextAnimate>
      </div>
    </div>
  );
};

export default About;
