import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Marquee } from "./ui/marquee";
import Navbar from "./Navbar";

// Lazy load Spline only on client side
const Spline = lazy(() => import("@splinetool/react-spline"));

const logos = [
  "https://i.pinimg.com/736x/3e/c5/20/3ec520c220995b50248d5cf0239ef146.jpg",
  "https://i.pinimg.com/736x/3e/c5/20/3ec520c220995b50248d5cf0239ef146.jpg",
  "https://i.pinimg.com/736x/3e/c5/20/3ec520c220995b50248d5cf0239ef146.jpg",
  "https://i.pinimg.com/736x/3e/c5/20/3ec520c220995b50248d5cf0239ef146.jpg",
];

const HeroSection = () => {
  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col justify-start items-center relative overflow-hidden">
      <Navbar />

      {/* Background stars */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-1/4 left-1/3 blur-[0.5px]"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-3/4 right-1/4 blur-[0.5px]"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full bottom-1/4 left-1/4 blur-[0.5px]"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-1/2 right-1/2 blur-[0.5px]"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[10%] left-[60%] blur-[0.5px]"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full bottom-[20%] right-[60%] blur-[0.5px]"></div>
      </div>

      {/* Main content */}
      <div className="w-full max-w-7xl mt-20 mx-auto flex h-full items-center px-6 lg:px-12 relative z-10">
        {/* Left block */}
        <div className="w-full space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-5xl sm:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/50 to-white/20"
          >
            Strategic Consulting <br />
            <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white/30 to-white/20">
              for Modern Enterprises
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg text-neutral-400"
          >
            From startup structuring to global expansion, <br />
            we help businesses navigate compliance, valuation, and funding{" "}
            <br />
            all under one strategic roof.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 px-7 py-3 text-lg font-normal border transition-all border-white/80 rounded-lg bg-transparent hover:bg-white/10"
          >
            Book a Free Call
          </motion.button>
        </div>

        {/* Right block with Spline */}
        <div className="hidden lg:flex flex-col lg:w-[55%] h-full items-center justify-end relative">
          <Suspense fallback={<div className="text-white">Loading 3D...</div>}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="w-[650px] h-[500px] relative z-10"
            >
              <Spline scene="https://prod.spline.design/CkPIBpfhM8SqxI0k/scene.splinecode" />
            </motion.div>
          </Suspense>

          {/* Glowing effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-96 h-96 bg-gradient-to-br from-green-500/50 via-green-800/20 to-red-800/20 rounded-full blur-3xl opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Marquee section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
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

          {/* Marquee fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
