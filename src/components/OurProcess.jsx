import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MousePointer2, List, Feather, Rocket } from "lucide-react";
import { Separator } from "./ui/separator";

const processSteps = [
  {
    id: 1,
    icon: MousePointer2,
    title: "Let's Get In Touch",
    description:
      "Start by connecting with us via our contact page. Schedule a consultation to discuss your business needs—be it valuation, funding, IPO prep, or compliance.",
    buttonText: "Step 1",
  },
  {
    id: 2,
    icon: List,
    title: "Understand & Strategize",
    description:
      "We deep-dive into your business model and objectives. Our team maps out a tailored strategy, selecting relevant services—from valuation and financing to outsourcing or tax planning.",
    buttonText: "Step 2",
  },
  {
    id: 3,
    icon: Feather,
    title: "Execute With Precision",
    description:
      "Our experts handle every detail—from report preparation and documentation to liaisoning with government bodies, financials, and regulatory authorities.",
    buttonText: "Step 3",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Deliver & Support",
    description:
      "We deliver audit-ready, regulator-compliant solutions. Post-service support ensures you're always one step ahead in compliance and growth.",
    buttonText: "Step 4",
  },
];

const ProcessSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-20%"]);

  return (
    <section
      ref={targetRef}
      className="bg-[#0A0909] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-16"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="w-full text-center mb-6 sm:mb-10">
          <button className="text-sm sm:text-base font-semibold tracking-wider px-3 py-1 sm:py-2 border border-gray-700 bg-[#0D0D0D] hover:border-white text-white/70 transition duration-300 rounded-md">
            Our Process
          </button>
        </div>

        <div className="mb-12 sm:mb-16 text-left sm:text-right">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-3 leading-tight">
            Our Process Is Everything
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400">
            A streamlined, expert-led approach that delivers clarity,
            compliance, and <br className="hidden sm:inline" /> results.
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Cards */}
      <div className="relative overflow-x-auto overflow-y-hidden -mx-4 sm:-mx-6 lg:-mx-16 px-4 sm:px-6 lg:px-16 scrollbar-hide">
        <motion.div
          style={{ x }}
          className="flex gap-6 sm:gap-8 will-change-transform transition-all"
        >
          {processSteps.map((step) => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProcessCard = ({ step }) => {
  const Icon = step.icon;

  return (
    <Card className="bg-[#111111] border-none text-white shadow-2xl w-[16rem] sm:w-[18rem] md:w-[20rem] flex-shrink-0 p-4 sm:p-6 md:p-6 h-[22rem] sm:h-[22rem] md:h-[26rem]">
      <CardHeader className="p-0">
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white stroke-[1.5]" />
          <span className="text-sm sm:text-md font-semibold bg-black w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-zinc-500">
            {step.id}
          </span>
        </div>
        <CardTitle className="text-sm sm:text-lg md:text-lg font-bold">
          {step.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 flex-grow">
        <CardDescription className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
          {step.description}
        </CardDescription>
      </CardContent>

      <Separator className="bg-gray-500 my-2" />

      <CardFooter className="p-0">
        <p className="uppercase tracking-wider border rounded-full px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm border-zinc-700 text-white hover:bg-zinc-800 hover:text-white bg-transparent text-center">
          {step.buttonText}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProcessSection;
