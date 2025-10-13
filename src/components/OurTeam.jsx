import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Emily Ross",
    title: "Efficiency Specialist",
    imageSrc:
      "https://framerusercontent.com/images/uss27WaFuXcw0eX1JpnuzZs.png",
  },
  {
    name: "Daniel Lee",
    title: "Financial & Growth Advisor",
    imageSrc:
      "https://framerusercontent.com/images/mu2Kcpe51Vv4Vr6Lh3dGC4ppbd4.png",
  },
  {
    name: "Sarah Mitchell",
    title: "Lead Consultant",
    imageSrc:
      "https://framerusercontent.com/images/tPYkIwImGTYNrIWUAK9mkYyUgw.jpg?scale-down-to=1024",
  },
  {
    name: "James Carter",
    title: "Business Expert",
    imageSrc:
      "https://framerusercontent.com/images/epMeSwPDTkJjWDiv4bvNJfg.png",
  },
  {
    name: "Alice Johnson",
    title: "Compliance Officer",
    imageSrc:
      "https://framerusercontent.com/images/mu2Kcpe51Vv4Vr6Lh3dGC4ppbd4.png",
  },
];

const SLIDE_INTERVAL = 3000; // 3 seconds
const CARDS_PER_VIEW = 4;
const GAP_REM = 2;

// 🧩 Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TeamCard = ({ member }) => (
  <motion.div
    variants={cardVariant}
    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    className="flex-shrink-0 relative h-[23rem] overflow-hidden rounded-xl shadow-2xl cursor-pointer"
    style={{
      width: `calc(100% / ${CARDS_PER_VIEW} - ${
        GAP_REM - GAP_REM / CARDS_PER_VIEW
      }rem)`,
    }}
  >
    <img
      src={member.imageSrc}
      alt={member.name}
      className="w-full h-full object-cover transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    <div className="absolute bottom-0 left-0 p-6 text-white z-10">
      <h3 className="text-xl font-bold">{member.name}</h3>
      <p className="text-sm text-zinc-300">{member.title}</p>
    </div>
  </motion.div>
);

const OurTeam = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const totalSlides = teamMembers.length;

  const infiniteMembers = [...teamMembers, ...teamMembers];

  const nextSlide = () => setIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleManualScroll = (direction) => {
    clearInterval(intervalRef.current);
    direction === "next" ? nextSlide() : prevSlide();
    intervalRef.current = setInterval(nextSlide, SLIDE_INTERVAL);
  };

  return (
    <section className="bg-[#0A0909] text-white py-24 px-4 sm:px-8 lg:px-16 text-center relative overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center mb-8"
      >
        <span className="text-sm font-semibold tracking-wider px-3 py-1 border border-zinc-800 bg-zinc-900 text-white/70 rounded-md">
          Our Team
        </span>
      </motion.div>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl sm:text-6xl font-semibold mb-10"
      >
        Experts Behind Your Work
      </motion.h2>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16 flex justify-center"
      >
        <button className="relative px-8 py-3 text-sm font-semibold tracking-wider uppercase border border-white/20 bg-black transition duration-300 rounded-lg overflow-hidden group">
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          <span className="relative text-white">See More</span>
        </button>
      </motion.div>

      <motion.div
        className="relative max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${index * (100 / CARDS_PER_VIEW + (GAP_REM * 100) / 100)}%`,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ gap: `${GAP_REM}rem` }}
          >
            {infiniteMembers.map((member, i) => (
              <TeamCard key={i} member={member} />
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleManualScroll("prev")}
            className="bg-zinc-900/70 hover:bg-zinc-800 text-white p-3 rounded-full transition"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleManualScroll("next")}
            className="bg-zinc-900/70 hover:bg-zinc-800 text-white p-3 rounded-full transition"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default OurTeam;
