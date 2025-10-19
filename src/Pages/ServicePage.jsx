import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Gavel,
  BarChart3,
  ShieldCheck,
  Database,
  Code,
  Cloud,
  Lock,
  Users,
  Factory,
  Briefcase,
  Activity,
  Globe,
  Leaf,
  TrendingUp,
  Settings,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Innovant from "@/components/Innovant";
import Footer from "@/components/Footer";

// Generate stars (same as before)
const generateStars = (count = 80) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2, // 2–5px
    top: Math.random() * 100,
    left: Math.random() * 100,
  }));
};

const stars = generateStars(80);

// Map icon names to the imported components
const iconMap = {
  Check,
  Gavel,
  BarChart3,
  ShieldCheck,
  Database,
  Code,
  Cloud,
  Lock,
  Users,
  Factory,
  Briefcase,
  Activity,
  Globe,
  Leaf,
  TrendingUp,
  Settings,
};

// Services data
const services = [
  {
    id: 1,
    icon: "Check",
    title: "Business Strategy",
    description:
      "Empowering organizations with data-driven strategies and operational insights to navigate competitive markets, optimize resources, and unlock scalable growth.",
  },
  {
    id: 2,
    icon: "Gavel",
    title: "Legal Advisory",
    description:
      "Providing expert legal counsel across corporate structuring, documentation, and regulatory compliance – ensuring enterprises operate within secure legal frameworks.",
  },
  {
    id: 3,
    icon: "BarChart3",
    title: "Financial Modeling",
    description:
      "Developing robust financial models and forecasts to support capital allocation decisions, budgeting, and long-term strategic planning.",
  },
  {
    id: 4,
    icon: "ShieldCheck",
    title: "Risk Management",
    description:
      "Identifying, assessing, and mitigating operational, financial, and strategic risks through comprehensive internal control frameworks.",
  },
  {
    id: 5,
    icon: "Database",
    title: "Data Analytics",
    description:
      "Transforming raw data into actionable business intelligence using advanced analytics, machine learning, and visualization tools for better decision-making.",
  },
  {
    id: 6,
    icon: "Code",
    title: "Digital Transformation",
    description:
      "Guiding the adoption of new technologies and methodologies to modernize core business processes and enhance customer experience.",
  },
  {
    id: 7,
    icon: "Cloud",
    title: "Cloud Infrastructure",
    description:
      "Designing and managing scalable, secure, and cost-effective cloud computing environments for enhanced agility and performance.",
  },
  {
    id: 8,
    icon: "Lock",
    title: "Cybersecurity Audit",
    description:
      "Conducting in-depth security assessments to identify vulnerabilities and implement enterprise-grade security protocols against modern threats.",
  },
  {
    id: 9,
    icon: "Users",
    title: "Talent Strategy",
    description:
      "Developing comprehensive human capital strategies, including workforce planning, compensation design, and leadership development programs.",
  },
  {
    id: 10,
    icon: "Factory",
    title: "Operational Excellence",
    description:
      "Streamlining end-to-end business processes, reducing waste, and improving efficiency through methodologies like Lean and Six Sigma.",
  },
  {
    id: 11,
    icon: "Briefcase",
    title: "M&A Due Diligence",
    description:
      "Conducting detailed financial, operational, and market due diligence to inform merger and acquisition decisions and synergy realization.",
  },
  {
    id: 12,
    icon: "Activity",
    title: "Performance Metrics",
    description:
      "Establishing key performance indicators (KPIs) and reporting structures to monitor business health and drive continuous improvement.",
  },
  {
    id: 13,
    icon: "Globe",
    title: "Global Expansion",
    description:
      "Assisting companies with market entry strategies, localization, and regulatory compliance for successful international business expansion.",
  },
  {
    id: 14,
    icon: "Leaf",
    title: "ESG Consulting",
    description:
      "Advising on Environmental, Social, and Governance (ESG) strategies to enhance sustainability, stakeholder trust, and long-term value creation.",
  },
  {
    id: 15,
    icon: "TrendingUp",
    title: "Venture Capital Prep",
    description:
      "Preparing startups and scale-ups for funding rounds, including pitch deck refinement, valuation analysis, and investor relations strategy.",
  },
  {
    id: 16,
    icon: "Settings",
    title: "System Integration",
    description:
      "Seamlessly connecting disparate software systems (ERP, CRM) to create a unified, efficient, and reliable enterprise technology ecosystem.",
  },
];

// ✨ Framer Motion variants for animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const ServiceCard = ({ iconName, title, description, index }) => {
  const IconComponent = iconMap[iconName];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      className="
        flex flex-col
        bg-[#060505]
        border border-gray-700/40
        rounded-2xl
        shadow-2xl
        transition-all duration-300 ease-in-out
        hover:scale-[1.03]
        p-4 sm:p-5 md:p-6 lg:p-7
        min-h-[220px]
        h-auto
      "
    >
      {/* Icon */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-[#383737] rounded-lg text-white/80 mb-3">
        {IconComponent && <IconComponent size={22} strokeWidth={2.5} />}
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-[15px] text-gray-400 font-medium leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

// 🌟 Main Service Page
const ServicePage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white font-satoshi antialiased z-10">
      {/* Background drifting stars */}
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

      <Navbar />
      <div className="container mx-auto w-full px-4 sm:px-6 md:px-8 py-16 md:py-20 lg:py-24 flex flex-col items-center justify-center">
        {/* Header Section with animation */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-6 sm:mt-10 mb-10 sm:mb-14 lg:mb-20"
        >
          <h1 className="text-2xl mt-10  sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Secure your financial future.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#888888] max-w-2xl mx-auto">
            Data-driven consulting. Trusted results.
          </p>
        </motion.header>

        {/* Services Grid */}
        <section
          className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      xl:grid-cols-3 
      gap-5 
      sm:gap-6 
      lg:gap-8 
      w-full 
      max-w-7xl
    "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              iconName={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </section>
      </div>

      <Innovant />
      <Footer />
    </div>
  );
};

export default ServicePage;
