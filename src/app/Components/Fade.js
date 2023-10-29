"use client";

import React, { useState, useEffect, useRef } from "react";

const Fade = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const elementOffset = element.offsetTop;
        const windowHeight = window.innerHeight;
        if (elementOffset < scrollTop + windowHeight) {
          // Add delay before setting isVisible to true
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [delay]);

  return (
    <div ref={elementRef} className={`fade ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default Fade;
