import React, { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const totalFrames = 124;
const framePath = (index) => `/framers/imgi_${index}.png`; // Make sure imgi_0.png exists in public/framers/

const ScrollImageSequence = ({ startRef, endRef }) => {
  const { scrollY } = useScroll();
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0); // start from 0

  // Calculate offsets of start and end sections
  useEffect(() => {
    const updateOffsets = () => {
      if (startRef.current && endRef.current) {
        setStartOffset(startRef.current.offsetTop);
        setEndOffset(endRef.current.offsetTop + endRef.current.offsetHeight);
      }
    };

    updateOffsets();
    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, [startRef, endRef]);

  // Scroll progress (0 to 1)
  const scrollProgress = useTransform(
    scrollY,
    [startOffset, endOffset],
    [0, 1],
    { clamp: true }
  );

  // Frame index based on scroll progress
  const frameIndex = useTransform(scrollProgress, [0, 1], [0, totalFrames]); // start from 0

  // Update current frame
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      setCurrentFrame(Math.round(latest));
    });
    return () => unsubscribe();
  }, [frameIndex]);

  // Preload all frames including 0
  useEffect(() => {
    for (let i = 0; i <= totalFrames; i++) {
      const img = new Image();
      img.src = framePath(i);
    }
  }, []);

  const imageSrc = useMemo(() => framePath(currentFrame), [currentFrame]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-10 flex items-center justify-center pointer-events-none"
      style={{ backgroundColor: "transparent" }}
    >
      <motion.img
        src={imageSrc}
        alt="coin animation"
        className="w-[90vw] object-contain opacity-90"
      />
    </motion.div>
  );
};

export default ScrollImageSequence;
