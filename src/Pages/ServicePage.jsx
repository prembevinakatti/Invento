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

// 🧩 Service Card Component
const ServiceCard = ({ iconName, title, description, index }) => {
  const IconComponent = iconMap[iconName];
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      className="lg:p-4 lg:px-7 bg-[#060505] h-[200px] border border-gray-700/40 rounded-[24px] shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.02]"
    >
      <div className="w-10 h-10 flex items-center justify-center bg-[#383737] rounded-lg text-white/80">
        {IconComponent && <IconComponent size={20} strokeWidth={2.5} />}
      </div>
      <h3 className="text-xl font-semibold text-white mt-2 mb-3">{title}</h3>
      <p className="text-md text-gray-400 font-semibold leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

// 🌟 Main Service Page
const ServicePage = () => {
  return (
    <div className="min-h-screen bg-[#0A0909] text-white font-satoshi antialiased">
      <Navbar />
      <div className="container mx-auto px-4 py-20 lg:py-24 max-w-7xl">
        {/* Header Section with animation */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center leading mt-10 mb-16 lg:mb-24"
        >
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white mb-4">
            Secure your financial future.
          </h1>
          <p className="text-xl md:text-2xl lg:text-5xl font-medium text-[#777777]">
            Data-driven consulting. Trusted results.
          </p>
        </motion.header>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
