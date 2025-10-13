import React from "react";
import { motion } from "framer-motion";
import { Marquee } from "./ui/marquee";
import Navbar from "./Navbar";

const logos = [
  "https://i.pinimg.com/736x/3e/c5/20/3ec520c220995b50248d5cf0239ef146.jpg",
  "https://i.pinimg.com/736x/3e/c5/20/3ec520c220995b50248d5cf0239ef146.jpg",
  "https://i.pinimg.com/736x/3e/c5/20/3ec520c220995b50248d5cf0239ef146.jpg",
  "https://i.pinimg.com/736x/3e/c5/20/3ec520c220995b50248d5cf0239ef146.jpg",
];

const HeroSection = () => {
  return (
    // Main container (h-screen, bg-black, overflow-hidden for floating elements)
    <div className="w-screen h-screen bg-black text-white flex flex-col justify-start items-center relative overflow-hidden">
      <Navbar />
      {/* Background 'Star' Dots (Mimicking the faint background noise) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-1/4 left-1/3 blur-[0.5px]"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-3/4 right-1/4 blur-[0.5px]"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full bottom-1/4 left-1/4 blur-[0.5px]"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-1/2 right-1/2 blur-[0.5px]"></div>
        {/* Add more dots to fill the space... */}
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[10%] left-[60%] blur-[0.5px]"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full bottom-[20%] right-[60%] blur-[0.5px]"></div>
      </div>

      {/* Main Content Container (to limit width and align left) */}
      <div className="w-full max-w-7xl mt-20 mx-auto flex h-full items-center px-6 lg:px-12 relative z-10">
        {/* Left Text Block */}
        <div className="w-full  space-y-8">
          {/* Main Title - Strategic Consulting for Modern Enterprises */}
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-6xl sm:text-7xl font-semibold leading-[0.9] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/50 to-white/20"
          >
            Strategic Consulting <br />
            <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white/30 to-white/20">
              {" "}
              for Modern Enterprises
            </span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-lg text-neutral-400"
          >
            From startup structuring to global expansion, <br />
            we help businesses navigate compliance, valuation, and funding{" "}
            <br />
            all under one strategic roof.
          </motion.p>

          {/* Action Button - Dark background, white border */}
          <motion.button
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="mt-6 px-7 py-3 text-lg font-normal border transition-all border-white/80 rounded-lg bg-transparent hover:bg-white/10 "
          >
            Book a Free Call
          </motion.button>
        </div>

        {/* Right Illustration/Visual Area (Placeholder for 3D and Testimonials) */}
        <div className="hidden lg:flex lg:w-[55%] h-full items-center justify-end relative">
          {/* Placeholder for the custom 3D illustration (The glowing machine) */}
          {/* The exact glow and object require an embedded 3D component (e.g., Spline) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {/* Glowing Effect - Green/Red */}
            <div className="w-96 h-96 bg-gradient-to-br from-green-500/50 via-green-800/20 to-red-800/20 rounded-full blur-3xl opacity-40"></div>

            {/* Visual Placeholder for the object (A dark, reflective shape) */}
          </div>

          {/* Testimonial 1 - Top Right */}
          <div className="absolute top-[28%] w-1/2 right-[-5%] transform rotate-[15deg] z-20">
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="p-4 bg-neutral-900/80 border border-neutral-700 rounded-md max-w-[280px] backdrop-blur-sm shadow-xl"
            >
              <p className="text-base  leading-snug">
                “The valuation report was crucial for our funding.”
              </p>
              <p className="text-sm text-right mt-2 text-neutral-500">- name</p>
            </motion.div>
          </div>

          {/* Testimonial 2 - Middle Right */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute top-[25%] w-1/2 right-[55%] transform rotate-[-15deg] z-20"
          >
            <div className="p-4 bg-neutral-900/80 border border-neutral-700 rounded-md max-w-[280px] backdrop-blur-sm shadow-xl">
              <p className="text-base leading-snug">
                “Their guidance helped us unlock key government subsidies.”
              </p>
              <p className="text-sm text-right mt-2 text-neutral-500">- name</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="w-full flex items-center justify-center"
      >
        <div className="relative flex w-1/2 flex-col items-center justify-center overflow-hidden mt-12">
          <Marquee pauseOnHover className="[--duration:20s] gap-8">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="h-10 w-auto object-contain opacity-80 mx-5 hover:opacity-100 transition duration-300"
              />
            ))}
          </Marquee>

          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
