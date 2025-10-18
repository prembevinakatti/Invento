import React from "react";
import video from "../assets/video.mp4";
import { TextAnimate } from "./ui/text-animate";

const About = () => {
  return (
    <div className="w-screen h-[25vw] mt-20 overflow-hidden relative">
      {/* Background Video */}
      <video
        className="w-full h-full opacity-50 object-cover absolute top-0 left-0"
        src={video}
        autoPlay
        loop
        muted
      />

      {/* Optional: Overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-30 z-10" />

      {/* Text Content */}
      <div className="relative z-50 flex flex-col gap-5 items-center justify-center h-full px-4">
        <button className="mb-4 px-4 py-2 bg-black/30 text-gray-300 rounded shadow">
          Who are you
        </button>
        <TextAnimate
          className="font-semibold text-xl text-center text-white max-w-4xl"
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
