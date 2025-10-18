import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValue } from "framer-motion";

const totalFrames = 124;
const framePath = (index) => `/framers/imgi_${index}.png`;

const ScrollImageSequence = ({ startRef, endRef }) => {
  const { scrollY } = useScroll();
  const startOffset = useRef(0);
  const endOffset = useRef(0);

  const [currentFrame, setCurrentFrame] = useState(0); // used only for rendering
  const frame = useMotionValue(0);

  // Update offsets
  useEffect(() => {
    const updateOffsets = () => {
      if (startRef.current && endRef.current) {
        startOffset.current = startRef.current.offsetTop;
        endOffset.current = endRef.current.offsetTop + endRef.current.offsetHeight;
      }
    };
    updateOffsets();
    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, [startRef, endRef]);

  // Map scroll to frame
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      const progress = Math.min(
        Math.max((y - startOffset.current) / (endOffset.current - startOffset.current), 0),
        1
      );
      const newFrame = Math.round(progress * totalFrames);
      frame.set(newFrame);
    });
    return () => unsubscribe();
  }, [scrollY, frame]);

  // Update current frame (throttled)
  useEffect(() => {
    const unsubscribe = frame.on("change", (latest) => {
      // only update if frame changed
      setCurrentFrame((prev) => (prev !== latest ? latest : prev));
    });
    return () => unsubscribe();
  }, [frame]);

  // Lazy preload 5 frames ahead
  useEffect(() => {
    const preloadRange = 5;
    for (let i = currentFrame; i <= Math.min(currentFrame + preloadRange, totalFrames); i++) {
      const img = new Image();
      img.src = framePath(i);
    }
  }, [currentFrame]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 flex items-center justify-center pointer-events-none">
      <img
        src={framePath(currentFrame)}
        alt="scroll animation"
        className="w-[90vw] object-contain opacity-90"
        draggable={false}
      />
    </div>
  );
};

export default ScrollImageSequence;
