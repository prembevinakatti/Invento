import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Marquee } from "./ui/marquee";
import Navbar from "./Navbar";

const Spline = lazy(() => import("@splinetool/react-spline"));

const logos = [
  "https://i.pinimg.com/736x/3e/c5/20/3ec520c220995b50248d5cf0239ef146.jpg",
  "https://i.pinimg.com/736x/3e/c5/20/3ec520c220995b50248d5cf0239ef146.jpg",
  "https://i.pinimg.com/736x/3e/c5/20/3ec520c220995b50248d5cf0239ef146.jpg",
  "https://i.pinimg.com/736x/3e/c5/20/3ec520c220995b50248d5cf0239ef146.jpg",
];

// ⭐ Generate Animated Stars
const generateStars = (count = 80) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    driftX: (Math.random() - 0.5) * 30,
    driftY: (Math.random() - 0.5) * 30,
    duration: 80 + Math.random() * 40,
    delay: Math.random() * 10,
  }));

const stars = generateStars(80);

const HeroSection = () => {
  return (
    <div className="w-screen min-h-screen bg-black text-white flex flex-col items-center relative overflow-hidden">
      <Navbar />

      {/* ✨ Stars Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => {
          const finalTop = star.top + star.driftY;
          const finalLeft = star.left + star.driftX;

          return (
            <motion.div
              key={star.id}
              className="absolute bg-gray-400 rounded-full"
              initial={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                opacity: 0.8,
              }}
              animate={{
                top: `${finalTop}%`,
                left: `${finalLeft}%`,
                opacity: [0.8, 0.6, 0.8],
              }}
              transition={{
                duration: star.duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                delay: star.delay,
              }}
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
            />
          );
        })}
      </div>

      {/* 🌌 Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-5 sm:px-10 md:px-16 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left mb-10 lg:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/50 to-white/20 leading-snug"
          >
            Strategic Consulting <br />
            <span className="text-3xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white/30 to-white/10">
              for Modern Enterprises
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            From startup structuring to global expansion — we help businesses
            navigate compliance, valuation, and funding, all under one strategic
            roof.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 px-6 py-3 text-sm sm:text-base font-medium border border-white/80 rounded-lg bg-transparent hover:bg-white/10 transition-all duration-300"
          >
            Book a Free Call
          </motion.button>
        </div>

        {/* 🧩 3D Section — Hidden on Mobile */}
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center relative">
          <Suspense fallback={<div className="text-white">Loading 3D...</div>}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="w-[450px] xl:w-[600px] h-[350px] xl:h-[450px]"
            >
              <Spline scene="https://prod.spline.design/CkPIBpfhM8SqxI0k/scene.splinecode" />
            </motion.div>
          </Suspense>

          {/* Subtle Glow Effect */}
          <div className="absolute w-72 h-72 bg-gradient-to-br from-green-500/40 via-green-800/20 to-red-800/20 rounded-full blur-3xl opacity-40 -z-10" />
        </div>
      </div>

      {/* 🚀 Logo Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="w-full flex items-center justify-center mt-4 sm:mt-8 mb-4"
      >
        <div className="relative flex w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s] gap-10 sm:gap-8">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="h-8 w-38 mx-8 sm:h-10 md:h-12 object-contain opacity-70 hover:opacity-100 transition duration-300"
              />
            ))}
          </Marquee>

          {/* Fading Gradient Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-black"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
