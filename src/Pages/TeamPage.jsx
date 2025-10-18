import React from "react";
import { motion } from "framer-motion";
import { Square, Circle, Triangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ⭐ Generate stars inside this file
const generateStars = (count = 80) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2, // 2–5px
    top: Math.random() * 100,
    left: Math.random() * 100,
  }));
};

const stars = generateStars(80);

// Team values
const teamValues = [
  {
    title: "Dedication.",
    description:
      "Our team is committed to helping each other and our clients succeed.",
    icon: Square,
    shapeType: "square",
  },
  {
    title: "Growth.",
    description: "We support personal development and value ongoing learning.",
    icon: Circle,
    shapeType: "circle",
  },
  {
    title: "Collaboration.",
    description:
      "We work closely together to deliver success for every project.",
    icon: Square,
    shapeType: "square",
  },
  {
    title: "Expertise.",
    description: "Each team member brings deep experience in their field.",
    icon: Circle,
    shapeType: "circle",
  },
  {
    title: "Vision.",
    description: "We share a drive for innovative, impactful solutions.",
    icon: Triangle,
    shapeType: "triangle",
  },
];

// Card animation — fade in + slide up
const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.2,
      ease: "easeOut",
    },
  }),
};

// Card component
const ValueCard = ({ title, description, IconComponent, shapeType, index }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="flex-1 min-w-0"
  >
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="
        w-full h-80 md:h-96
        bg-white rounded-[24px]
        flex items-center justify-center mb-6
        shadow-[0_0_30px_rgba(255,255,255,0.05)]
        hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]
        transition-shadow
      "
    >
      <IconComponent
        size={shapeType === "triangle" ? 100 : 80}
        strokeWidth={2}
        className="text-black/50"
        fill="white"
      />
    </motion.div>

    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-md w-2/3 text-[#999999]">{description}</p>
  </motion.div>
);

const TeamPage = () => {
  const rowOneValues = teamValues.slice(0, 2);
  const rowTwoValues = teamValues.slice(2);

  return (
    <div className="relative min-h-screen bg-transparent text-white font-sans antialiased z-10">
      {/* ✅ Background Elements */}
      <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
        {stars.map((star) => {
          const driftX = (Math.random() - 0.5) * 100;
          const driftY = (Math.random() - 0.5) * 100;
          const duration = 30 + Math.random() * 30;

          const finalTop = star.top + driftY;
          const finalLeft = star.left + driftX;

          return (
            <motion.div
              key={star.id}
              className="absolute bg-gray-500 rounded-full"
              initial={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                opacity: 0.8,
              }}
              animate={{
                top: `${finalTop}%`,
                left: `${finalLeft}%`,
                opacity: [0.8, 0.4, 0.8],
              }}
              transition={{
                duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror",
                delay: Math.random() * 10,
              }}
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <Navbar />

      <div className="container mx-auto mt-10 px-6 py-20 lg:py-24 max-w-5xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 lg:mb-24"
        >
          <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white">
            Meet the team.
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-gray-400 mt-2">
            Creative minds behind our work.
          </p>
        </motion.header>

        {/* Row 1 */}
        <section className="flex flex-col md:flex-row gap-8 lg:gap-5 mb-12">
          {rowOneValues.map((value, index) => (
            <ValueCard
              key={`row1-${index}`}
              index={index}
              title={value.title}
              description={value.description}
              IconComponent={value.icon}
              shapeType={value.shapeType}
            />
          ))}
        </section>

        {/* Row 2 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {rowTwoValues.map((value, index) => (
            <ValueCard
              key={`row2-${index}`}
              index={index + 2}
              title={value.title}
              description={value.description}
              IconComponent={value.icon}
              shapeType={value.shapeType}
            />
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TeamPage;
