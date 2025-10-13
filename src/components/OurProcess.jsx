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
import { Button } from "@/components/ui/button";
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
    offset: ["start end", "end start"], // triggers during section visibility
  });

  // Scroll motion — small subtle x movement
  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-20%"]); // adjust -20% → -30% for more motion

  return (
    <section
      ref={targetRef}
      className="bg-[#0A0909] text-white py-24 px-4 sm:px-8 lg:px-16"
    >
      {/* Header */}
      <div>
        <div className="w-full text-center mb-10">
          <button className="text-sm font-semibold tracking-wider px-3 py-1 mb-6 border border-gray-700 bg-[#0D0D0D] hover:border-white text-white/70 transition duration-300 rounded-md">
            Our Process
          </button>
        </div>
        <div className="mb-16 text-right">
          <h1 className="text-4xl sm:text-6xl lg:text-5xl font-semibold mb-4">
            Our Process Is Everything
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400">
            A streamlined, expert-led approach that delivers clarity,
            compliance, and <br /> results.
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Cards */}
      <div className="relative overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-8 will-change-transform transition-all"
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
    <Card className="bg-[#111111] border-none text-white shadow-2xl w-[20rem] h-[20rem] flex-shrink-0 p-6">
      <CardHeader className="p-0 ">
        <div className="flex justify-between items-start mb-4">
          <Icon className="w-8 h-8 text-white stroke-[1.5]" />
          <span className="text-md font-semibold bg-black w-6 h-6 rounded-full flex items-center justify-center text-zinc-500">
            {step.id}
          </span>
        </div>
        <CardTitle className="text-lg font-bold">{step.title}</CardTitle>
      </CardHeader>

      <CardContent className="p-0  flex-grow">
        <CardDescription className="text-xs text-zinc-400 leading-relaxed">
          {step.description}
        </CardDescription>
      </CardContent>

      <Separator className="bg-gray-500" />

      <CardFooter className="p-0">
        <p className="uppercase tracking-wider border rounded-full px-3 py-1 text-xs border-zinc-700 text-white hover:bg-zinc-800 hover:text-white bg-transparent">
          {step.buttonText}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProcessSection;
