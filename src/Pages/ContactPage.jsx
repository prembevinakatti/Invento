import React, { Suspense, memo, useState } from "react";
import { Mail, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, LazyMotion, domAnimation } from "framer-motion";

// Lazy load Spline
const Spline = React.lazy(() => import("@splinetool/react-spline"));

// Stats
const stats = [
  { value: "100+", label: "Happy clients" },
  { value: "$250m", label: "Revenue added" },
  { value: "4.8", label: "Average Rating" },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Stat card
const StatCard = memo(({ value, label }) => (
  <div className="p-3 md:p-4 bg-[#111111] border border-gray-800/40 rounded-lg shadow-md flex-1 text-center min-w-[80px] will-change-transform">
    <div className="text-2xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm text-gray-400 font-medium">{label}</div>
  </div>
));

// Testimonial card
const TestimonialCard = memo(() => (
  <div className="p-5 md:p-6 mt-6 bg-[#111111] border border-gray-800/40 rounded-xl shadow-lg max-w-sm w-full will-change-transform">
    <div className="flex items-start">
      <div className="w-10 h-10 bg-gray-800 rounded-md mr-3 flex-shrink-0" />
      <div>
        <div className="text-lg font-semibold text-white">John Doe</div>
        <div className="text-sm text-gray-400">Acme Corp</div>
      </div>
    </div>
    <div className="mt-3">
      <div className="flex items-center text-yellow-500 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
        <span className="ml-2 text-white text-sm">5.0</span>
      </div>
      <p className="text-gray-300 text-sm">
        “They were professional and quick to deliver. Highly recommended!”
      </p>
    </div>
  </div>
));

// Submit button
const SubmitButton = memo(() => (
  <button className="w-full py-4 text-lg font-semibold rounded-xl shadow-xl text-black transition-transform duration-300 bg-gradient-to-t from-gray-300 to-white hover:scale-[1.02] hover:from-gray-400 hover:to-gray-100 will-change-transform">
    Send Message
  </button>
));

const ContactPage = () => {
  const [showSpline, setShowSpline] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased relative overflow-hidden">
      <Navbar />

      {/* Background Glow */}
      <div
        className="absolute inset-0 z-0 opacity-25 pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 75% 50%, #8b0000 0%, transparent 45%)",
          transform: "translateZ(0)",
        }}
      />

      {/* Main Content */}
      <LazyMotion features={domAnimation}>
        <motion.div
          className="container mx-auto mt-10 px-6 py-20 lg:py-24 max-w-7xl relative z-10 flex flex-col lg:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onAnimationComplete={() => setShowSpline(true)} // ✅ Show Spline after all animations
        >
          {/* Left Column */}
          <motion.div className="lg:w-1/2 flex flex-col justify-start space-y-8" variants={fadeUp}>
            <motion.h1
              className="text-5xl sm:text-4xl font-semibold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/50 to-white/20"
              variants={fadeUp}
            >
              Let’s Collaborate and <br />
              <span className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white/30 to-white/20">
                Begin the work
              </span>
            </motion.h1>

            {/* Stats */}
            <motion.div className="flex flex-row gap-4 mb-8 mt-4 flex-wrap" variants={containerVariants}>
              {stats.map((stat, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <StatCard {...stat} />
                </motion.div>
              ))}
            </motion.div>

            {/* Testimonial */}
            <motion.div variants={fadeUp}>
              <TestimonialCard />
            </motion.div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div
            className="lg:w-[480px] bg-[#0A0A0A] border border-gray-800/40 p-6 md:p-8 rounded-2xl shadow-2xl will-change-transform"
            variants={fadeUp}
          >
            <form className="space-y-6">
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
                <motion.div variants={fadeUp}>
                  <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">NAME</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[#111111] border border-gray-800/40 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                  />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">EMAIL</label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-[#111111] border border-gray-800/40 text-white rounded-lg p-3 pr-10 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    />
                    <Mail size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400" />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">
                  WEBSITE <span className="text-gray-600">(optional)</span>
                </label>
                <input
                  type="url"
                  placeholder="Company Website"
                  className="w-full bg-[#111111] border border-gray-800/40 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">BUDGET</label>
                <select
                  defaultValue=""
                  className="w-full bg-[#111111] border border-gray-800/40 text-gray-400 rounded-lg p-3 appearance-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                >
                  <option value="" disabled hidden>Select Budget...</option>
                  <option value="1" className="text-white">$1k - $5k</option>
                  <option value="2" className="text-white">$5k - $25k</option>
                  <option value="3" className="text-white">$25k+</option>
                </select>
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">MESSAGE</label>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full bg-[#111111] border border-gray-800/40 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none transition-all"
                ></textarea>
              </motion.div>

              <motion.div className="pt-2" variants={fadeUp}>
                <SubmitButton />
                <p className="text-center text-sm text-gray-500 mt-3">(We will reach out to you within 48hrs)</p>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </LazyMotion>

      {/* ✅ Spline Background after all animations */}
      {showSpline && (
        <div className="absolute w-full h-full bottom-56 left-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
          <div className="w-[600px] h-[600px]">
            <Suspense fallback={null}>
              <Spline
                scene="https://prod.spline.design/P0iJMYCbFwHDMHfc/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
            </Suspense>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default memo(ContactPage);
