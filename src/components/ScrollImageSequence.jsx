import React, { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

const totalFrames = 124;
const framePath = (index) => `/framers/imgi_${index}.png`; // Update path as needed

const ScrollImageSequence = ({ startRef, endRef }) => {
  const canvasRef = useRef(null);
  const images = useRef([]);
  const startOffset = useRef(0);
  const endOffset = useRef(0);

  const { scrollY } = useScroll();
  const lastFrame = useRef(0); // to avoid unnecessary draws

  // Preload all frames once
  useEffect(() => {
    for (let i = 0; i <= totalFrames; i++) {
      const img = new Image();
      img.src = framePath(i);
      images.current.push(img);
    }
  }, []);

  // Update offsets on resize
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

  // Draw image on canvas
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!canvas || !ctx) return;

    const img = images.current[frameIndex];
    if (!img) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw image centered and scaled
    const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Handle scroll updates
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      if (!canvasRef.current) return;
      const progress = Math.min(
        Math.max((y - startOffset.current) / (endOffset.current - startOffset.current), 0),
        1
      );
      const newFrame = Math.floor(progress * totalFrames);

      if (newFrame !== lastFrame.current && images.current[newFrame]) {
        lastFrame.current = newFrame;
        requestAnimationFrame(() => drawFrame(newFrame));
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  // Resize canvas to viewport
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(lastFrame.current); // redraw on resize
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
    />
  );
};

export default ScrollImageSequence;
