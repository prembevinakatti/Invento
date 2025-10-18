import React from "react";
import { Mail, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

// Dummy Stats
const stats = [
  { value: "100+", label: "Happy clients" },
  { value: "$250m", label: "Revenue added" },
  { value: "4.8", label: "Average Rating" },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Stat Card
const StatCard = ({ value, label, index }) => (
  <motion.div
    className="p-3 md:p-4 bg-[#111111] border border-gray-800/40 rounded-lg shadow-md flex-1 text-center min-w-[80px]"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    custom={index}
  >
    <div className="text-2xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm text-gray-400 font-medium">{label}</div>
  </motion.div>
);

// Testimonial Card
const TestimonialCard = () => (
  <motion.div
    className="p-5 md:p-6 mt-6 bg-[#111111] border border-gray-800/40 rounded-xl shadow-lg max-w-sm w-full"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    custom={3}
  >
    <div className="flex items-start">
      <div className="w-10 h-10 bg-gray-800 rounded-md mr-3 flex-shrink-0" />
      <div>
        <div className="text-lg font-semibold text-white">name</div>
        <div className="text-sm text-gray-400">company</div>
      </div>
    </div>

    <div className="mt-3">
      <div className="flex items-center text-yellow-500 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
        <span className="ml-2 text-white text-sm">5.0</span>
      </div>
      <p className="text-gray-300 text-sm">review</p>
    </div>
  </motion.div>
);

// Submit Button
const SubmitButton = () => (
  <button
    type="submit"
    className="w-full py-4 text-lg font-semibold rounded-xl shadow-xl text-black transition-all duration-300 bg-gradient-to-t from-gray-300 to-white hover:from-gray-400 hover:to-gray-100"
  >
    Send Message
  </button>
);

// Main Page
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased relative overflow-hidden">
      <Navbar />

      {/* Simulated Dark Red Glow Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 75% 50%, #8b0000 0%, transparent 40%)",
        }}
      ></div>

      {/* Dummy Spline Model Centered in Background */}
      <div className="absolute w-full h-full bottom-56 left-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
        <div className="w-[600px] h-[600px]">
          <Spline scene="https://prod.spline.design/P0iJMYCbFwHDMHfc/scene.splinecode" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-10 px-6 py-20 lg:py-24 max-w-7xl relative z- flex flex-col lg:flex-row gap-12">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col justify-start">
          <header className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-5xl sm:text-4xl font-semibold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/50 to-white/20"
            >
              Let’s Collaborate and <br />
              <span className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white/30 to-white/20">
                Begin the work
              </span>
            </motion.h1>
          </header>

          {/* Stats */}
          <div className="flex flex-row gap-4 mb-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </div>

          {/* Testimonial */}
          <TestimonialCard />
        </div>

        {/* Right Column (Form) */}
        <motion.div
          className="lg:w-[480px] bg-[#0A0A0A] border border-gray-800/40 p-6 md:p-8 rounded-2xl shadow-2xl"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <form className="space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase text-gray-400 mb-2"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full bg-[#111111] border border-gray-800/40 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase text-gray-400 mb-2"
                >
                  EMAIL
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full bg-[#111111] border border-gray-800/40 text-white rounded-lg p-3 pr-10 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                  <Mail
                    size={20}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400"
                  />
                </div>
              </div>
            </div>

            {/* Website */}
            <div>
              <label
                htmlFor="website"
                className="block text-xs font-semibold uppercase text-gray-400 mb-2"
              >
                WEBSITE <span className="text-gray-600">(optional)</span>
              </label>
              <input
                type="url"
                id="website"
                placeholder="Company Website"
                className="w-full bg-[#111111] border border-gray-800/40 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>

            {/* Budget Dropdown */}
            <div>
              <label
                htmlFor="budget"
                className="block text-xs font-semibold uppercase text-gray-400 mb-2"
              >
                BUDGET
              </label>
              <select
                id="budget"
                defaultValue=""
                className="w-full bg-[#111111] border border-gray-800/40 text-gray-400 rounded-lg p-3 appearance-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="" disabled hidden>
                  Select Budget...
                </option>
                <option value="1" className="text-white">
                  $1k - $5k
                </option>
                <option value="2" className="text-white">
                  $5k - $25k
                </option>
                <option value="3" className="text-white">
                  $25k+
                </option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase text-gray-400 mb-2"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                className="w-full bg-[#111111] border border-gray-800/40 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <SubmitButton />
              <p className="text-center text-sm text-gray-500 mt-3">
                (We will reach out to you within 48hrs)
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
