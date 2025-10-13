import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: "easeOut" } },
});

const Innovant = () => {
  return (
    <section className="bg-[#0A0909] text-white flex flex-col items-center justify-center min-h-screen py-32 px-4 sm:px-8 overflow-hidden">
      {/* Badge */}
      <motion.div
        className="flex justify-center mb-5"
        variants={fadeUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <button className="text-xs font-semibold tracking-wider px-3 py-1 mb-10 border border-gray-700 bg-[#0D0D0D] hover:border-white text-white/70 transition duration-300 rounded-md">
          INNOVANT
        </button>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-8 leading-tight"
        variants={fadeUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Let's talk about your <br /> next strategic move
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-md sm:text-lg font-semibold text-gray-300 text-center mb-12 sm:mb-16"
        variants={fadeUp(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Hop on a call with us to explore how our expert <br /> advisory—across
        valuation, funding, compliance, <br /> and global setup—can power your
        business forward.
      </motion.p>

      {/* Button */}
      <motion.button
        variants={fadeUp(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.25)" }}
        whileTap={{ scale: 0.97 }}
        className="
          relative px-10 py-4 text-lg font-medium text-white rounded-xl 
          bg-black border border-white/20 
          shadow-[0_0_20px_rgba(255,255,255,0.2),inset_0_0_10px_rgba(255,255,255,0.1)]
          transition-all duration-300
        "
      >
        <span className="relative z-10">Contact Us</span>
      </motion.button>

      {/* Free text */}
      <motion.p
        className="text-lg text-zinc-500 mt-10 font-semibold"
        variants={fadeUp(1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        It's <span className="text-white">Free</span>
      </motion.p>
    </section>
  );
};

export default Innovant;
