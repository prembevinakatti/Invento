import React from "react";
import { Check, BarChart, Globe } from "lucide-react";
import { motion } from "framer-motion";

// Framer motion variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: custom * 0.3,
      ease: "easeOut",
    },
  }),
};

const topContentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Feature Card
const FeatureCard = ({ Icon, title, description, iconColorClass }) => (
  <div className="w-[340px] sm:w-[320px] md:w-[350px] lg:w-[400px] h-auto sm:h-[250px] p-5 rounded-xl border border-zinc-800 bg-[#070505] backdrop-blur-sm shadow-xl flex flex-col space-y-4">
    <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 bg-[#383737]">
      <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${iconColorClass}`} />
    </div>
    <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold">{title}</h2>
    <p className="text-xl md:text-sm lg:text-sm  text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Choose = () => {
  return (
    <div className="bg-[#0A0909] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Top content */}
      <motion.div
        variants={topContentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="flex justify-center mb-5">
          <button className="text-sm sm:text-base font-semibold tracking-wider px-3 py-2 border border-gray-700 bg-[#0D0D0D] hover:border-white text-gray-300 transition duration-300 rounded-md">
            Why Choose Us
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-4 sm:mb-6 leading-tight">
          Empower Your Business Journey
        </h1>

        <p className="text-sm sm:text-md md:text-base text-gray-400 font-semibold text-center mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed">
          Discover how our integrated consulting services can scale your operations and <br /> optimize performance.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {[Check, BarChart, Globe].map((Icon, index) => {
          const titles = [
            "Regulatory Excellence",
            "Strategic Financial Advisory",
            "Global Reach, Local Expertise",
          ];
          const descriptions = [
            "Navigate complex frameworks like IBC, FEMA, SEBI, and Company Law with unmatched precision. Our deep regulatory insight ensures full compliance and minimal risk exposure.",
            "From valuation to IPO readiness and fundraising — we deliver data-driven strategies that unlock business potential and enable high-impact outcomes.",
            "We support clients across India, UAE, UK, US, Canada, Singapore, and Australia — providing localized compliance with global scalability through our incorporation and outsourcing services.",
          ];

          return (
            <motion.div
              key={index}
              className="flex justify-center flex-1 min-h-[360px]"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FeatureCard Icon={Icon} title={titles[index]} description={descriptions[index]} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Choose;
