import React from "react";
import { ArrowUpRight, Check, FileText, Globe } from "lucide-react"; // Lucide Icons
import { motion } from "framer-motion";

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (customDelay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: customDelay,
      ease: "easeOut",
    },
  }),
};

const topVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Reusable Service Card
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col p-8 rounded-xl border border-zinc-800 bg-[#070505] backdrop-blur-sm shadow-xl h-[220px]">
    <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 bg-[#383737]">
      <Icon className="w-6 h-6 text-gray-400" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-base text-gray-400 font-semibold leading-relaxed">
      {description}
    </p>
  </div>
);

const Services = () => {
  return (
    <div className="bg-[#0A0909] text-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Top Button */}
      {/* Top Button */}
      <div className="flex justify-center mb-5">
        <button className="text-sm font-semibold tracking-wider px-3 py-1 mb-10 border border-gray-700 bg-[#0D0D0D] hover:border-white text-white/70 transition duration-300 rounded-md">
          Services
        </button>
      </div>

      {/* Top Section: Heading + Text + Button */}
      <motion.div
        variants={topVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="w-full px-13 flex flex-col lg:flex-row items-center justify-between mb-16 mx-auto"
      >
        <div className="text-start mb-6 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold mb-3 leading-tight max-w-4xl">
            Services We Provide
          </h1>
          <p className="text-lg text-gray-400 mb-8 font-semibold">
            Helping enterprises thrive with strategic consulting, legal
            advisory, and tailored <br />
            business solutions designed to drive long-term growth and
            operational <br />
            excellence.
          </p>
        </div>

        <motion.button
          variants={topVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="
      px-8 py-3 
      rounded-xl 
      bg-black 
      text-lg font-semibold 
      text-white
      shadow-[0_0_10px_rgba(255,255,255,0.3),_0_0_20px_rgba(255,255,255,0.1),_inset_0_0_1px_rgba(255,255,255,0.6)] 
      border border-transparent 
      transition duration-300 
      hover:shadow-[0_0_15px_rgba(255,255,255,0.6),_0_0_25px_rgba(255,255,255,0.2),_inset_0_0_2px_rgba(255,255,255,0.8)]
    "
        >
          See More
        </motion.button>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Group 1: First two cards */}
        <motion.div
          className="lg:col-span-2"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
        >
          <ServiceCard
            icon={Check}
            title="Business Strategy"
            description="Empowering organizations with data-driven strategies and operational insights to navigate competitive markets, optimize resources, and unlock scalable growth."
          />
        </motion.div>

        <motion.div
          className="lg:col-span-2"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.4}
        >
          <ServiceCard
            icon={ArrowUpRight}
            title="Legal Advisory"
            description="Providing expert legal counsel across corporate structuring, documentation, and regulatory compliance — ensuring enterprises operate within secure legal frameworks."
          />
        </motion.div>

        {/* Group 2: Next two cards */}
        <motion.div
          className="lg:col-span-2"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.8}
        >
          <ServiceCard
            icon={Globe}
            title="Valuation & Due Diligence"
            description="Delivering robust financial valuations for funding rounds, mergers, and internal planning — backed by deep industry insight and legal accuracy."
          />
        </motion.div>

        <motion.div
          className="lg:col-span-2"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
        >
          <ServiceCard
            icon={FileText}
            title="Compliance & Documentation"
            description="Ensuring smooth business operations with end-to-end support on company registrations, GST filings, ROC filings, and all compliance documentation."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
