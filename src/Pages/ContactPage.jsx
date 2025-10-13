import React from "react";
import { Mail, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

// Data for the three statistic cards
const stats = [
  { value: "100+", label: "Happy clients" },
  { value: "$250m", label: "revenue added" },
  { value: "4.8", label: "Average Rating" },
];

/**
 * Renders a statistic card with a dark, glass-like background.
 */
const StatCard = ({ value, label }) => (
  <div
    className="
    p-4 md:p-6
    bg-[#111111] border border-gray-800/40
    rounded-xl shadow-lg
    flex-1 text-center
    min-w-[100px]
  "
  >
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm text-gray-400 font-medium">{label}</div>
  </div>
);

/**
 * Renders the testimonial card with star rating.
 */
const TestimonialCard = () => (
  <div
    className="
    p-6 md:p-8 mt-6
    bg-[#111111] border border-gray-800/40
    rounded-2xl shadow-xl
    max-w-md w-full
  "
  >
    <div className="flex items-start">
      {/* Name/Company Section */}
      <div
        className="
        w-12 h-12 bg-gray-800 rounded-lg
        mr-4 flex-shrink-0
      "
      >
        {/* Placeholder for avatar/initials */}
      </div>
      <div>
        <div className="text-xl font-semibold text-white">name</div>
        <div className="text-md text-gray-400">company</div>
      </div>
    </div>

    <div className="mt-4">
      {/* Rating */}
      <div className="flex items-center text-yellow-500 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
        <span className="ml-2 text-white">5.0</span>
      </div>
      <p className="text-gray-300">review</p>
    </div>
  </div>
);

/**
 * Renders the custom submit button with a gradient effect.
 */
const SubmitButton = () => (
  <button
    type="submit"
    className="
      w-full py-4 text-xl font-semibold
      rounded-xl shadow-xl
      text-black transition-all duration-300
      bg-gradient-to-t from-gray-300 to-white hover:from-gray-400 hover:to-gray-100
    "
  >
    Send Message
  </button>
);

const ContactPage = () => {
  // Use a simulated dark red background to mimic the background color
  // from the image, without the complex 3D globe.
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased relative overflow-hidden">
      <Navbar />
      {/* Simulated Dark Red Glow/Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 75% 50%, #8b0000 0%, transparent 40%)",
        }}
      ></div>

      <div className="container mx-auto mt-10 px-6 py-20 lg:py-24 max-w-7xl relative z-10 flex flex-col lg:flex-row gap-12">
        {/* Left Section (Header, Stats, Testimonial) */}
        <div className="lg:w-1/2 flex flex-col justify-start">
          <header className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-6xl sm:text-5xl font-semibold leading-[0.9] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/50 to-white/20"
            >
              Let’s Collaborate and <br />
              <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white/30 to-white/20">
                {" "}
                Begin the work
              </span>
            </motion.h1>
          </header>

          {/* Stats Row */}
          <div className="flex flex-row gap-4 mb-10">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>

          {/* Testimonial Card */}
          <TestimonialCard />
        </div>

        {/* Right Section (Contact Form) */}
        <div className="lg:w-[500px] h-[650x] bg-[#0A0A0A] border border-gray-800/40 p-6 md:p-10 rounded-2xl  shadow-2xl">
          <form className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase text-gray-400 mb-2"
                >
                  NAME
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full bg-[#111111] border border-gray-800/40 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
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
                  {/* Mail Icon Placeholder (Green icon as seen in image) */}
                  <Mail
                    size={20}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400"
                  />
                </div>
              </div>
            </div>

            {/* Website Field */}
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
                style={{ backgroundImage: "none" }} // Prevent default OS arrow
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

            {/* Message Field */}
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
                rows="6"
                className="w-full bg-[#111111] border border-gray-800/40 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
              ></textarea>
            </div>

            {/* Submit Button & Disclaimer */}
            <div className="pt-2">
              <SubmitButton />
              <p className="text-center text-sm text-gray-500 mt-3">
                (We will reach out to you within 48hrs)
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
