import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust smoothness
      smooth: true, // Enable smooth scrolling
      smoothTouch: false, // Disable smooth touch scrolling
    });

    const handleRAF = (time) => {
      lenis.raf(time);
      requestAnimationFrame(handleRAF);
    };

    requestAnimationFrame(handleRAF);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return null;
};

export default SmoothScroll;
